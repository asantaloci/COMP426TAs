let on = 0;
window.onload = function () {

  $(document).on("click", "#newtweet", composeTweet);
  $(document).on("click", "#login-submit", submitLogin);
}

async function composeTweet(event) {
  let tweets = "";
  if (on == 1) { // if its on
    event.preventDefault()

    tweets = `<div id ="createtweet"></div>

      `;
      $('#createtweet').replaceWith(tweets);
      on = 0; // turn off


  } else {
    event.preventDefault()


// tweets = "";


  tweets = `<div id ="createtweet">

<form>
<h1 class="create-trip">Create a New Trip</h1>

                        <div class="field">
                        <label class="label">Where from?</label>
                            <input class="label" type="text" id="REPLACEWITHID_from" placeholder="Raleigh, New York, etc." name="username">
                        </div>

                        <div class="field">
                        <label class="label">Where to?</label>
                            <input class="label" type="text" id="REPLACEWITHID_to" placeholder="Raleigh, New York, etc." name="username">
                        </div>
                        <input class= "button is-dark" type="submit"/>



          <div class="post-content">
            <div class="caption">
              I took a trip to NYC from Charlotte.
            </div>
              <div id="mapcontent">
              <div id="map"></div>
              </div>

          </div>
</form>

  <button id="canceltweet">X</button>
  <textarea id="text"></textarea>
    <button id="posttweet">Post</button>


    </div>
    `;

  $('#createtweet').replaceWith(tweets);

    on = 1;

}
}