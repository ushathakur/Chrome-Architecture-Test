chrome.storage.sync.get(null,(result)=>{
    let pElement = document.createElement('p');
    let pElementText =document.createTextNode(`tab is : ${result.tab.url}, count is: ${result.tab.count}`)
    pElement.appendChild(pElementText);
    let parent = document.querySelector('.container');
    parent.appendChild(pElement);
    
   
   
    
});
