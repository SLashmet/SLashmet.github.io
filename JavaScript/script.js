function navBar() {
  var x = document.getElementById("navBarID");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}