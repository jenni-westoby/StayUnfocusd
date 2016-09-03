//function which saves user input from options.html. Note, save_options and restore_options are modified versions of the code available at https://developer.chrome.com/extensions/options
function save_options() {
  var website1 = document.getElementById('website1').value;
  var website2 = document.getElementById('website2').value;
  var website3 = document.getElementById('website3').value;

  var websites=[website1, website2, website3];

  console.log("made it to options.js")
  chrome.storage.sync.set({
    "banned_urls" : websites,
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
  // set default options
  chrome.storage.sync.get({
    "banned_urls" : ['https://www.google.co.uk/', 'http://www.cam.ac.uk/', 'http://www.nature.com/nature/index.html']
  }, function(items) {
    document.getElementById('website').value = items.banned_urls;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
