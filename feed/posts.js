console.log("posts.js running");

document.getElementById('post').onclick = function() {
   handlePost();

}

async function posts() {
  console.log("posts running");

  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

  const result  = await pubRoot.get('/trips');
  console.log(result.data.result.length);
  console.log(result.data.result.length);
  for (let i = result.data.result.length-1; i>=result.data.result.length-25;i--) {
    // renderpost(result.data.result[0]);
    console.log(renderpost(result.data.result[i], i));
// console.log(renderpost(result.data.result[14]));
}
}

function renderpost(data, index) {
  console.log("entered renderpost");
  //each data object (passed in) has parameters which can be accessed with [] or .
  // console.log(data.where);

  // console.log(data);
  let head = `
  <div class="post">
    <div class="info">
        <h2 class="journey ">From <span class="start">`+data.where+`</span> to <span class="end">`+data.to+`</span> </h2>
        <h2 class="date"> `+data.time+`</h2>
      </div>
    <h4 class="name">`+data.name+`</h4><h2 class="user">@`+data.user+`</h2>



          <div class="post-content row">

            <div class="caption col-md-5"><p>
<span class="title">`+data.title+`</span><br />
              `+data.caption+`
</p>
            </div>
              <div class="col-md-7 row" id="markers">
                <div class="marker-from col-md-5"style="width:50%">

              <img class="markerz"src="../marker.png"/>
              <h3 class="start">`+data.where+`</h3>
            </div>


              <div class="marker-to col-md-5" style="width:50%">
              <img class="markerz"src="../marker.png" />
              <h3 class="end ">`+data.to+`</h3>

              </div>
              </div>
              <a onclick="likeButton(`+ index +`)""><img class="heart" src="heart.png" style="width:2em;float:right"/></a>
          </div>
  </div>
  `

  const $root = $('#root');
  // console.log(head);
  $root.append(head);
}

//make a new post
 async function handlePost(e) {
  //only able to post if LOGGED IN
  if (localStorage.getItem('jwt') != null)
  {
    let title = $('#trip-name').val();
    let caption = $('#caption').val();
    let where = $('#pac-input').val();
    let to = $('#pac-input2').val();
    let wheremark = $('#pac-input').val();
    let tomark = $('#pac-input2').val();
    let time = $('#time').val();
    let token = localStorage.getItem('jwt');
    let user = localStorage.getItem('user');
    let name = localStorage.getItem('name');

    data = {title, caption, where, to, time, token,user,name};

    const pubRoot = new axios.create({
      baseURL: "http://localhost:3000/public"
    });

    let posted =  await pubRoot.post('/trips/', {
      headers: {
        Authorization: "Bearer " + token
      },
          data: {title, caption, where, to, time, token,user,name},
          type: 'merge'
    });
    return false;
  } else {
      alert("YOU GOTTA SIGN IN CHUMP");
      return true;
  }
}

async function likeButton (idx) {
  console.log("current idx: " + idx);
  
  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

  const result  = await pubRoot.get('/trips');
  let data = result.data.result[idx];
  let title = data.title;
  let caption = data.caption;
  let where = data.where;
  let to = data.to;
  let time = data.time;
  let token = data.token;
  let user = data.user;
  let name = data.name;

  console.log("we wanna like the post titled: "+title);
  
  let info = {title, caption, where, to, time, token,user,name};
  userLiked(info);
  allLiked(info);
  return false
}

async function allLiked(data) {
  //collect user info
  let token = localStorage.getItem('jwt');
  let name = localStorage.getItem('name');

  return await axios({
    method:'POST',
    url: "http://localhost:3000/private/liked",
    headers: {
      //jwt is the jwt from logging in
            "Authorization": "Bearer " + token
    },
    data: { data,
      type: 'merge' } 
  });

}

//make it so that this generates the like history
async function userLiked (data) {
  //collect user info
  let token = localStorage.getItem('jwt');
  let name = localStorage.getItem('name');

  return await axios({
    method:'POST',
    url: "http://localhost:3000/user/"+name,
    headers: {
      //jwt is the jwt from logging in
            "Authorization": "Bearer " + token
    },
    data: { data,
      type: 'merge' } 
  });

}