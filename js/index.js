//images used
self.imagens = [
    "img-here", //image 1
    "img-here", //image 2
    "img-here", //image 3
    "img-here", //image 4
    "img-here", //image 5
    "img-here", //image 6
    "img-here", //image 7
    "img-here", //image 8
    "img-here", //image 9
    "img-here", //image 10
    "img-here", //image 11
    "img-here", //image 12
    "img-here", //image 13
    "img-here", //image 14
    "img-here", //image 15
    "img-here", //image 16
    "img-here", //image 17
    "img-here", //image 18
    "img-here", //image 19
    "img-here", //image 20
    "img-here", //image 21
    "img-here", //image 22
    "img-here", //image 23
    "img-here", //image 24
]

//getting the dates
var today = new Date();
var day = today.getDate();
var mon = today.getMonth() + 1;

//function to change image,checking date
function advent(divId) {
  if (mon !== 12) {
    return window.alert("Wait til December!")
  };
  if (day > divId) {
    return window.alert("This day is gone already!");
  }
  if (day < divId) {
    return window.alert("This day is yet to come!");
  }
  $targetDiv = $('#a' + divId);
  $targetDiv.addClass("flip-card");
  $targetDiv.css("background-image", "url(" + self.imagens[divId - 1] + ")");
  $targetDiv.empty();
}
