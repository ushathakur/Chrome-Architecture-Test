chrome.storage.sync.get(null,(items)=>{
    
    var timeSpent = Object.values(items);
    var maxTimeSpent = Math.max.apply(null, timeSpent);
    console.log(maxTimeSpent);
    const topOneTab = Object.keys(items).find(key => items[key] == maxTimeSpent);
    console.log(topOneTab);


    let pElement = document.createElement('p');
    let pElementText =document.createTextNode(`The most clicked tab is : ${topOneTab}\n,  clicks: ${maxTimeSpent}`);
    pElement.appendChild(pElementText);
    let parent = document.querySelector('.container');
    parent.appendChild(pElement);
});


// @sourceURL=popup.js
