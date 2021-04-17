chrome.storage.sync.get(['color'],({color})=>{
    let pElement = document.createElement('p');
    let pElementText = document.createTextNode(`This info is taken from the background script, the color code is ${color}`)
    pElement.appendChild(pElementText);
    let parent = document.querySelector('.container')
    parent.appendChild(pElement);
    
});
