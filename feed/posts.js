console.log("posts.js is running");


async function posts() {
  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

  const result  = await pubRoot.get('/listings');

  for (let i = result.data.result.length-1; i>result.data.result.length-30;i--) {
    renderpost(result.data.result[i]);
  }
//make lsting listing cancel listing submit


}

function renderpost(data) {

  let head = `
  <div class="post">
    <div class="info">
    <h4 class="name">@${data.fullName}</h4>
        <h4 class="user">@${data.userName}</h4>
        <h2 class="journey ">From <span class="start">New York</span> to <span class="end">Raleigh</span> </h2>
        <h2 class="date"> 11/17-11/19</h2>
      </div>


          <div class="post-content row">
            <div class="caption col-md-5">
              I took a trip to NYC from Charlotte.
            </div>
              <div class="col-md-5" id="mapcontent">
                <h3>fd</h3>
              <div id="map3"></div>
              </div>

          </div>

  </div>
  `
}

const handlePost =  async function(e) {
  //only able to post if LOGGED IN
  if (localStorage.getItem('jwt') != null)
  {let title = $('#trip-name').val();
  let caption = $('#caption').val();
  let where = $('#where').val();
  let to = $('#to').val();
  let time = $('#time').val();
  let token = localStorage.getItem('jwt');


  console.log(title);
  console.log(caption);
  console.log(where);
  console.log(to);
  console.log(time);
  console.log(token);
  
  
  
  

  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

  return await pubRoot.post('/trips/', {
    headers: {
      Authorization: "Bearer " + token
    },
    data: {title, caption, where, to, time, token},
    type: "merge"
  })} else {
    alert("YOU GOTTA SIGN IN CHUMP");
  }
}