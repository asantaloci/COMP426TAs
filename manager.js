const pubRoot = new axios.create({
  baseURL: "http://localhost:3000"
});

//LOGIN STUFF
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

  let name = document.getElementById('signup-name').value;
  let username = document.getElementById('signup-username').value;
  let password = document.getElementById('signup-password').value;

  console.log(username +", "+ password);

  addUser(username,name,password);
  return false;
}

async function addUser(name,irlName,pass) {
  console.log("button test but in manager");
  try {

    let account = await axios({
      method: "POST",
      url: "http://localhost:3000/account/create",
      data: {
        name: name,
        pass: pass,
        data: {
          realName: irlName
        }
      }
    })

    console.log("MADE A NEW ACCNT");
    document.location.href = '/index.html';
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
    localStorage.setItem('user', name);
    localStorage.setItem('name', response['data']['data']['realName'])
    document.location.href = '/feed/feed.html';
    return true;
  } catch (error)
 {
   alert("User/Pass is incorrect!");

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

async function resetPublicJSON() {
  console.log("deleting everything");
  let jwt = localStorage.getItem('jwt');
  let name = localStorage.getItem('name');
  return await axios({
    method: "DELETE",
    url: "http://localhost:3000/user  /"+name,
    headers: {
      //jwt is the jwt from logging in
            "Authorization": "Bearer " + jwt
    }
  })
}