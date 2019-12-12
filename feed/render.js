let showit = 0;
console.log("render.js is running");


function show() {
  console.log("show() is running");

      if (showit == 1) {
          document.getElementById('hidden-newPost').style.display = "none";
          showit = 0;

      } else {
      document.getElementById('hidden-newPost').style.display = "block";

  showit = 1;
  }
}
