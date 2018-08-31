var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

document.getElementById('topContainer').setAttribute("style","width:vw");
document.getElementById('topContainer').style.width='vw';

function scrollBttnClick() {
var target = document.getElementById("smallGreeting");
zenscroll.to(target);
}

function openNav() {
    document.getElementById("navBar").style.width = "330px";
    document.getElementById("Mtext").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("navBar").style.width = "0";
    document.getElementById("Mtext").style.visibility = "visible";
}

function jumpShop() {
  var jumpS = document.getElementById("smallGreeting");
  zenscroll.to(jumpS);
}


function jumpGallery(){
  var jumpG = document.getElementById("navBar");
  zenscroll.to(jumpG);
}
