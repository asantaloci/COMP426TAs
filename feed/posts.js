console.log("posts.js is running");


async function posts() {
  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

  const result  = await pubRoot.get('/trips');
  // console.log(result.data);

  // result.data is an array of trips
  for (let i = 8; i<result.data.result.length;i++) {
    console.log(result.data.result[i]);
    console.log(result.data.result[8]);
    renderpost(result.data.result[i]);

  }

  // for (let i = result.data.result.length-1; i>result.data.result.length-30;i--) {
  //   console.log(result.data.result[i]);
  //   renderpost(result.data.result[i]);
  // }

// renderpost(result.data.result[8]);

//make lsting listing cancel listing submit


}

function renderpost(data) {
  console.log("entered renderpost");
  //each data object (passed in) has parameters which can be accessed with [] or .
  console.log(data.where);

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
          </div>
  </div>
  `
// $root append(head)

  const $root = $('#root');
  console.log(head);
  $root.append(head);
}

//make a new post
const handlePost = async function(e) {
  //only able to post if LOGGED IN
  if (localStorage.getItem('jwt') != null)
  {let title = $('#trip-name').val();
  let caption = $('#caption').val();
  let where = $('#pac-input').val();
  let to = $('#pac-input2').val();
  let wheremark = $('#pac-input').val();
  let tomark = $('#pac-input2').val();
  let time = $('#time').val();
  let token = localStorage.getItem('jwt');
  let user = localStorage.getItem('user');
  let name = localStorage.getItem('name');


  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

  let posted =  await pubRoot.post('/trips/', { // trips chage this
    headers: {
      Authorization: "Bearer " + token
    },
    data: {title, caption, where, to, time, token,user,name},
    type: "merge"
  })} else {
    alert("YOU GOTTA SIGN IN CHUMP");
  }
}
