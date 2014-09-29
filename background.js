
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  
  if (changeInfo.status == "complete") {
    chrome.tabs.insertCSS(tabId, {file: 'katex/katex.min.css'});
    
    chrome.tabs.executeScript(tabId, {file: 'katex/katex.min.js'}, function() {
      chrome.tabs.executeScript(tabId, {file: 'content_script.js'});
    });
  }
  
});