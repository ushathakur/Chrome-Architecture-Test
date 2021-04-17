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
