function wps() {
  var wp, web, gra, wpb, webb, grab;
  wp = document.getElementById("wp");
  wpb = document.getElementById("wpb");
  
  web = document.getElementById("web");
  webb = document.getElementById("webb");
  
  gra = document.getElementById("gra");
  grab = document.getElementById("grab");
  
  wp.classList.remove("hide");
  wpb.classList.add("active");
  
  web.classList.add("hide");
  webb.classList.remove("active");
  
  gra.classList.add("hide");
  grab.classList.remove("active");
  
}


function gras() {
  var wp, web, gra, wpb, webb, grab;
  wp = document.getElementById("wp");
  wpb = document.getElementById("wpb");
  
  web = document.getElementById("web");
  webb = document.getElementById("webb");
  
  gra = document.getElementById("gra");
  grab = document.getElementById("grab");
  
  gra.classList.remove("hide");
  grab.classList.add("active");
  
  web.classList.add("hide");
  webb.classList.remove("active");
  
  wp.classList.add("hide");
  wpb.classList.remove("active");
  
}


function webs() {
  var wp, web, gra, wpb, webb, grab;
  wp = document.getElementById("wp");
  wpb = document.getElementById("wpb");
  
  web = document.getElementById("web");
  webb = document.getElementById("webb");
  
  gra = document.getElementById("gra");
  grab = document.getElementById("grab");
  
  web.classList.remove("hide");
  webb.classList.add("active");
  
  wp.classList.add("hide");
  wpb.classList.remove("active");
  
  gra.classList.add("hide");
  grab.classList.remove("active");
  
}
