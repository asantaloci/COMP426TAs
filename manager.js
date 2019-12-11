const pubRoot = new axios.create({
  baseURL: "http://localhost:3000"
});



async function axiosPostTest(name,pass) {
  console.log("button test but in manager");
  try {
    await pubRoot.post(`/account/create`,{name,pass});
    return true;
  } catch (error)
 {
   return false;
 }
}

async function login(name,pass){
  try {
    let response = await pubRoot.post(`/account/login`,{name,pass});
    
    let jwt = response['data']['jwt'];
    console.log("JWT is: "+ jwt);
    
    localStorage.setItem('jwt', jwt);

    return true;
  } catch (error)
 {
   return false;
 }
}

function logout() {
  localStorage.removeItem('jwt');
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