/* 
 $("#search-icon").click(function() {
  $(".resnav").toggleClass("search");
  $(".resnav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
}); */

/* function SearchAnimation() {
  var SearchA = document.getElementsByClassName("searchInput");
  SearchA.style.top = "65px";
  SearchA.style.opacity = "1";
} */

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var acc = document.getElementsByClassName("btndropdown");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* this.classList.toggle("active"); */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}