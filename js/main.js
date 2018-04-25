var teaser = true;

$("document").ready(function(){
  if (teaser)
  {
    // open teaser website 
    window.open("templates/teaser.html", "_self");
  }
  else
  {
    // open regular website
    window.open("templates/home.html", "_self");
  }
});

