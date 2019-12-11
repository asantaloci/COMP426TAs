let showit = 0;
console.log("render.js is running");
// window.onload = function () {
// console.log("render.js onload running");

// $(document).on("click","#hide", show);

// }

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
