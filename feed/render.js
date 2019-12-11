let showit = 0;
console.log("testing 1");
window.onload = function () {
  console.log("I AM IN THE WINDOW FUNCTION");
    $(document).on("click","#hide", show);
}


console.log(showit);
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