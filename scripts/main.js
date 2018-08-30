function scrollBttnClick() {
var target = document.getElementById("secondSection");
zenscroll.to(target);
}
function openNav() {
    document.getElementById("navBar").style.width = "300px";
    document.getElementById("Mtext").style.visibility = "hidden";
}
function closeNav() {
    document.getElementById("navBar").style.width = "0";
    document.getElementById("Mtext").style.visibility = "visible";
}
