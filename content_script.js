
(function() {
  
  var elems = document.querySelectorAll("div.comment-body p[label='tex']");
  
  for (var i = 0; i < elems.length; i += 1) {
    var el = elems[i];
    console.log(el);
    katex.render(el.textContent, el);
  }
  
})();