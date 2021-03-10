setInterval(walk(document.body), 90)

//setInterval(walk(document.body), 90) ;

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
	  currentDate = Date.now();
	} while (currentDate - date < milliseconds);
  }


function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			//console.log(node.tagName)
			while ( child ) 
			{
				next = child.nextSibling;
				console.log(child);
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			//console.log(child);
			//console.log(node.innerHTML);
			parent = node.parentNode
			//console.log(node.innerHTML)
			//console.log(parent)
			parent = callAPI(node, parent);
	}
}

function check(v)
{
	var v = v;
	var check = v.length;
	return check;
}

function contains(resp)
{
	var checktext = resp;
	var check = checktext.includes("GOOD");
	return check;
}

async function getscore(url)
{
	var url = url;


}

async function callAPI(textNode, parent)
{	
	var resp;
	var v = textNode.nodeValue;
	var len = v.length;
	var url = `https://litterapp.co/api?text=${v}`;

	//console.log(textNode);

	if (len < 35){
		return;
	}
	if (len > 300){
		return;
	}
	if (v.indexOf('%20') >= 0) {
		return;
	}
	if (v.indexOf('%22')  >= 0) {
		return;
	}
	if (v.indexOf('border-radius') >= 0) {
		return;
	}

	resp = await fetch(url);

	if (resp.ok) {
		let resptext = await resp.text()

		if (resptext === null){
			return;
		}
		if (check(v) < 30) {
			return;
		}
		if (resptext !== "GOOD") {
			if (resptext === "RED"){
				parent.innerHTML = `<span style='background-color: #ff0000'>${v}</span><a href="https://blog.litterapp.co/why-was-this-text-flagged-by-litter/">* why was this flagged?</a>`;
			}
			if (resptext === 'ORANGE'){
				parent.innerHTML = `<span style='background-color: #ff9900'>${v}</span><a href="https://blog.litterapp.co/why-was-this-text-flagged-by-litter/">* why was this flagged?</a>`;
			}
			if (resptext === 'YELLOW'){
				parent.innerHTML = `<span style='background-color: #ffff00'>${v}</span><a href="https://blog.litterapp.co/why-was-this-text-flagged-by-litter/">* why was this flagged?</a>`;
			}
			else{
				console.log("wrong color bitch")
			}
			//console.log(textNode)
		}
		else{
			return;
		}
	}
	else{
		return;
	}
}

function handleText(textNode, v, resp) 
{	
	var textNode = textNode;
	var resp = resp;
	var v = textNode.nodeValue;
	var check = resp.includes("GOOD");

	if (resp === null){
		return;
	}
	if (check === true) {
		return;
	}
	else {
	textNode.nodeValue = "don't bother reading this."
	}
}


