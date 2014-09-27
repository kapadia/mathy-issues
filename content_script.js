
(function() {
  
  var el = document.querySelector("div.comment-body p");
  katex.render(el.textContent, el);
  console.log(chrome.extension.getURL("katex/fonts/"));
})();