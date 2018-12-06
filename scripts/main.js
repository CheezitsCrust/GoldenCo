document.getElementById('topContainer').setAttribute("style", "width:vw");
document.getElementById('topContainer').style.width = 'vw';

function scrollBttnClick() {
  var target = document.getElementById("shopAnchor");
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


function jumpGallery() {
  var jumpG = document.getElementById("navBar");
  zenscroll.to(jumpG);
}
