chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if(request.type === 'click'){
      console.log('request is:' + request);
    console.log(request.type);

    //check if the value exists, retrieve the value and set a new value only if the count is high
  

    var key = sender.origin;
    chrome.storage.sync.get(key, function(result){
      if(result[key] != undefined && result[key]<request.count){
        chrome.storage.sync.set({ [sender.origin]: [request.count]}, function () {
          console.log('sender is :' + sender)
          console.log('stored data. The current tab is:' + sender.origin + 'with click count:' + request.count);
        });
      }
      console.log('result'+ JSON.stringify(result[key]));
    })
   

    chrome.storage.sync.get(null, function (items) {
      var allKeys = Object.keys(items);
      console.log('All Keys in Chrome storage:' + allKeys);//get all keys in local storage
      console.log(items);
    });
 
    
    }
    // if request.type === 'timer' {add time spent on each tab according to window.onfocus}
    sendResponse({ farewell: "goodbye" });
    
  }
);
  