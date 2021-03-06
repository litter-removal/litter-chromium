# litter-chromium

Update: Now with whitelisting, block litter from highlighting specific sites in the options menu

![options](https://cdn.discordapp.com/attachments/744258573860601967/819642496786759690/unknown.png)

![whitelist](https://cdn.discordapp.com/attachments/744258573860601967/819642708242333746/unknown.png)



Update(2): Now including some help text, which I hope will be helpful for new users/those unfamiliar with LSI/LDA

![It leads to a simple blog post explaining why text was highlighted](https://media.discordapp.net/attachments/774344186773241906/819184048748363806/unknown.png)!


crx version of litter that works in any chromium-based browser. Calls public API endpoint.

Litter uses latent semantic indexing to highlight text that is low effort, made by trolls, advertisers, or political organizations:

![Highlight text that you're better off not reading](https://cdn.discordapp.com/attachments/774344186773241906/786422093741948998/unknown.png)!

The included folder contains the raw js/other files.

Litter is based on cloudtobutt's DOM walking functionality, but moves up a tag and highlights suspicious text instead of checking for "cloud" and replacing it with "butt"

Litter is currently in public beta, there will be occasional issues that may interfere with normal web browsing (parent tags getting erased, sites that are used to share music/"corporate" content receiving flags due to the style of titles, among other minor things.)

We recommend installing Litter in a development browser for the time being, until whitelisting can be implemented (unless you only browse public forums)

Litter is presented as-is no warranties.
