var count=0;
var seconds=0;
var hasFocus = true;
let myvar;
document.body.onclick = function(event){
count++;
console.log(count);
chrome.runtime.sendMessage({type:'click',count: count}, function(response) {
    console.log(response.farewell);
  });

};
/*
//timer to track the time spent on this website
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
      console.log('has focus');
     
      myvar = setInterval(timer,1000);
      
  } else {
    clearTimeout(myvar);
      console.log('lost focus');

      
  }
});
function timer(){
  seconds=seconds+1;
  console.log('time spent on this website' + seconds);
}

let myvar2= setInterval(
  function(){
    chrome.runtime.sendMessage({type:'timer',seconds: seconds}, function(response) {
      console.log(response.farewell);
    });
  }, 1000*60);
  


/*document.addEventListener(
  'scroll',
  (event) => {
      // handle scroll event
      console.log('scrolling');
      chrome.runtime.sendMessage({event: "scroll"},{scroll: scrollY}, function(response) {

        console.log(response.farewell);
      });
  }, 
  { passive: true }
);*/