let showit = 0;
console.log("wow");
window.onload = function () {
    // document.getElementById('hidden-newPost').style.display = "none";
    // document.getElementById('pac-container').style.display = "none";
    // document.getElementById('pac-container2').style.display = "none";
    // document.getElementById('infowindow-content').style.display = "none";
$(document).on("click","#hide", show);



//the fun stuff


  // $(document).on("click", "#newtweet", composeTweet);console.log('wow');
}

function show() {
  console.log(showit)
console.log("wow");

      if (showit == 1) {
          document.getElementById('hidden-newPost').style.display = "none";
          showit = 0;

      } else {
        console.log(showit)
  console.log("haha")
      document.getElementById('hidden-newPost').style.display = "block";

  showit = 1;
  }
}
