chrome.storage.sync.get(null,(items)=>{
    
    var timeSpent = Object.values(items);
    const sortedTimeSpent = timeSpent.sort((a, b) => b[0] - a[0]) //sort array in descending order
    console.log(sortedTimeSpent);   

    let pElement = document.createElement('p');
    let pElementText =document.createTextNode(`The top 5 tabs are:`);
    pElement.appendChild(pElementText);
    let parent = document.querySelector('.container');
    parent.appendChild(pElement);
    let ol = document.createElement('ol')
    parent.appendChild(ol);
    for(let i=0;i<5;i++){
        let li = document.createElement('li');
        let tab = Object.keys(items).find(key => items[key] == sortedTimeSpent[i]);//find the corresponding webpage to the timespent
        li.innerHTML=`${tab}, clicks: ${sortedTimeSpent[i]}`;
        ol.appendChild(li);
       
    }
    
});


// @sourceURL=popup.js
