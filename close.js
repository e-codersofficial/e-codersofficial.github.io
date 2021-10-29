if(true || 1 === "1"){topbar.show();}
function hide(id) {
  var elem = document.getElementById(id);
  elem.style.opacity = "0";
  setTimeout(function() {
    elem.remove();
  }, 600);
}
window.addEventListener("load",(e) => {
  topbar.hide();
})