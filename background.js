chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request);
    /*console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");*/
    chrome.storage.sync.set({ tab: { url: sender.tab.url, count: request.count } }, function () {
      console.log('the current tab is:' + sender.tab.url + 'with click count:' + request.count);
    });
    chrome.storage.sync.get(['tab'], function (result) {
      console.log('the current tab is:' + result.tab.url + 'with click count:' + result.tab.count);
    });
    chrome.storage.sync.get(null, function (items) {
      var allKeys = Object.keys(items);
      console.log(allKeys);//get all keys in local storage
      console.log(items.tab);
    });
 
    sendResponse({ farewell: "goodbye" });
  }
);