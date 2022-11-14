function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
 //toggle adds a class if it's not there or removes it if it is.
var sidebarElement = document.getElementById("sidebar");
 updateElement.classList.toggle("open");

sidebarElement.classList.toggle("closed");
}  