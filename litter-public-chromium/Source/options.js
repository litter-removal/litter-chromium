function save_options() {
    var name = document.getElementById('name').value;
    chrome.storage.sync.set({
      'namelist': name
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }

function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      namelist: 'github.com'
    }, function(items) {
      document.getElementById('name').value = items.namelist;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);