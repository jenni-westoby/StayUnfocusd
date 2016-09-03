//contacts background.js each time the tab changes
var port = chrome.runtime.connect(null, {name : "banned_sites"});
port.postMessage({message : "hello_world"});
