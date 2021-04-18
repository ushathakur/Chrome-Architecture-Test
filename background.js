let color = '#3aa757';
console.log(color);

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: color}, function(){
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });
  chrome.storage.sync.get(['color'], function(result){
    console.log('the color is' + result.color);  
  });
  
  
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      console.log(`received ${request.greeting} from the content script`);
      sendResponse({farewell: "goodbye"});
  }
);