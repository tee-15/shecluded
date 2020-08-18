let menu = document.querySelector(".menu");
let headerList = document.querySelector(".header__list");
let close = document.querySelector(".close");

menu.addEventListener( "click", function(e)  {
    console.log("Hello-world");
    console.log(e.target.className)
    if (e.target.className === "menu"){
        headerList.style.display = "block";
        menu.replaceWith(close)
   } 
});
close.addEventListener("click", function(e) {
    if (e.target.className === "close") {
        headerList.style.display = "none";
        close.replaceWith(menu)
   } 
});
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }