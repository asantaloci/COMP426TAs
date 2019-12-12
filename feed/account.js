console.log("account.js is logging");
let name = localStorage.getItem('name');
let token = localStorage.getItem('jwt');
window.onload = function () {
    setName();
    loadLiked();
  }

function setName() {
    const $root = $('#private-user');
    $root.append(name);
}

async function loadLiked() {
    const $root = $('#liked-section');
  const pubRoot = new axios.create({
    baseURL: "http://localhost:3000"
  });
  let result;

  try {
    result =  await axios({
        method:'GET',
        url: "http://localhost:3000/user/"+name,
        headers: {
                "Authorization": "Bearer " + token
        }
    });

    for (let i = result.data.result.length-1; i>=0;i--) {
        // renderpost(result.data.result[0]);
        console.log('rendering each');
        
        console.log(renderLiked(result.data.result[i], i));
    }


    console.log(result.data.result[0]);
    
    } 
    catch (error) {
        console.log('no liked posts');
        $root.append(`
        <h5>No liked posts!</h5>
        `);
        return true;
    }
}


function renderLiked(data, index) {
    console.log("entered renderpost");
    //each data object (passed in) has parameters which can be accessed with [] or .
    // console.log(data.where);
  
    // console.log(data);
    let head = `
        <h4 class="liked-title">`+data.title+`</h4>
        <h6 class="liked-user">@`+data.user+`</h6>
    `
    const $root = $('#root');
    $root.append(head);
}