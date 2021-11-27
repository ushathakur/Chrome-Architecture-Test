debugger;
var count=0;
document.body.onclick = function(event,){
count++;
console.log(count);
chrome.runtime.sendMessage({count: count}, function(response) {
    console.log(response.farewell);
  });

};
