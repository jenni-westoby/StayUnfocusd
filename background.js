//function taken from http://stackoverflow.com/questions/8498592/extract-root-domain-name-from-string
function extractDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];

    return domain;
}


//hears content.js's message
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name=="banned_sites");
  port.onMessage.addListener(function(msg) {
    if (msg.message == "hello_world")
    {
      //gets the banned urls out of storage
      chrome.storage.sync.get("banned_urls", function(kv){

        //finds the current tab url domain
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
          var url = tabs[0].url;
          var url_domain = extractDomain(url);

          //checks whether the current tab url matches the banned urls in storage, and if so Rick Rolls the user
          for (var idx in kv.banned_urls) {
            if (extractDomain(kv.banned_urls[idx])==url_domain)
            {
              chrome.tabs.update(null, {url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"});
              return true;
            }
          }

        });
      });
    }
    return true;
  });
});
