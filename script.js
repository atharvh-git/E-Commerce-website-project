var myIndex = 0;
sld();

function sld() 
{
  var i;
  var x = document.getElementsByClassName("MySlides");
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) 
  { 
    myIndex = 1
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(sld, 4000);
}

// Get the modal
var modal = document.getElementById("myModal");
var modal = document.getElementById("myModalLogin");
var modal = document.getElementById("myModalSignup");
var modal = document.getElementById("myModalLogIn");

// Get the button that opens the modal
var a = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
a.onclick = function() 
{
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == modal) 
  {
    modal.style.display = "none";
  }
}


