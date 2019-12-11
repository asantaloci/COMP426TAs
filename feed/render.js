let showit = 0;
console.log("wow");
window.onload = function () {
    // document.getElementById('hidden-newPost').style.display = "none";
    // document.getElementById('pac-container').style.display = "none";
    // document.getElementById('pac-container2').style.display = "none";
    // document.getElementById('infowindow-content').style.display = "none";
$(document).on("click","#hide", show);
console.log("woo")

  // $(document).on("click", "#newtweet", composeTweet);console.log('wow');
}


console.log(showit);
// console.log(show);
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




//
// async function composeTweet(event) {
//
//
//
//
//   let tweets = "";
//   if (on == 1) { // if its on
//     event.preventDefault()
//
//     tweets = `<div id ="createtweet"></div>
//
//       `;
//       $('#createtweet').replaceWith(tweets);
//       on = 0; // turn off
//
//
//   } else {
//     event.preventDefault()
//
//
// // tweets = "";
//
//
//   tweets = `<div id ="createtrip">
//
// <form>
// <h4 class="create-trip">Create a New Trip</h4>
//
//                         <div class="field">
//                         <label class="label">Where from?</label>
//                         <input type="text" id="autocomplete"/>
//
//
//
//                         </div>
//
//                         <div class="field">
//                         <label class="label">Where to?</label>
//                             <input class="label" type="text" id="autocomplete" placeholder="Raleigh, New York, etc." name="username">
//                         </div>
//                         <input class= "button is-dark" type="submit"/>
//
//
//
//           <div class="post-content">
//             <div class="caption">
//               I took a trip to NYC from Charlotte.
//             </div>
//               <div id="mapcontent">
//               <div id="map"></div>
//               </div>
//
//           </div>
// </form>
//
//   <button id="canceltweet">X</button>
//   <textarea id="text"></textarea>
//     <button id="posttweet">Post</button>
//
//
//     </div>
//     `;
//
//   $('#createtweet').replaceWith(tweets);
//
//     on = 1;
//
// }
// }
