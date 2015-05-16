
(function() {
  
  var elems = document.querySelectorAll('div.highlight.highlight-tex');
  
  for (var i = 0; i < elems.length; i += 1) {
    var el = elems[i];
    var body = el.textContent;
    
    katex.render(body, el);
  }
  
})();