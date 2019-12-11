// window.onload = function () {
//   console.log("page logged");
  
//   $(document).on("click", "#login-submit", submitLogin);
// }


const pubRoot = new axios.create({
  baseURL: "http://localhost:3000"
});

const submitLogin = function(event){
  event.preventDefault();
  
  let username = document.getElementById('login-username').value;
  let password = document.getElementById('login-password').value;
  console.log(username+', '+password);
  if (!login(username, password)) {
    console.log("nah son");
    return false;
  } else {
    console.log("nice");
    return true; 
  }
}

const createNewAccount = function (event) {
  event.preventDefault();

  let username = document.getElementById('signup-username').value;
  let password = document.getElementById('signup-password').value;

  console.log(username +", "+ password);

  addUser(username,password);
  return false;
}

async function addUser(name,pass) {
  console.log("button test but in manager");
  try {
    let response = await pubRoot.post(`/account/create`,{name,pass});
    console.log("MADE A NEW ACCNT");
    document.location.href = '/feed/feed.html';
    return true;
  } catch (error)
 {
   console.log("NOOOOOOOO");
   alert("This account already exists!");

   return false;
 }
}

async function login(name,pass){
  try {
    let response = await pubRoot.post(`/account/login`,{name,pass});
    
    let jwt = response['data']['jwt'];
    console.log("JWT is: "+ jwt);
    
    localStorage.setItem('jwt', jwt);
    document.location.href = '/feed/feed.html';
    return true;
  } catch (error)
 {
   console.log("NO SUCH USER");
   
   return false;
 }
}

function logout() {
  localStorage.removeItem('jwt');
  document.location.href = '../index.html';
}

async function getStatus() {
  if (localStorage.getItem('jwt') !== null) {
    let jwt = localStorage.getItem('jwt');

    return await axios({
      method:'GET',
      url: "http://localhost:3000/account/status",
      headers: {
        //jwt is the jwt from logging in
              "Authorization": "Bearer " + jwt
      },
    })
  } else {
    console.log("PLEASE PROVIDE PROPER JWT");
    
    return false;
  }

}

