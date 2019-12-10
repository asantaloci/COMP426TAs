// import axios from 'axios';
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
    await pubRoot.post(`/account/login`,{name,pass});
    return true;
  } catch (error)
 {
   return false;
 }
}

async function getStatus() {
  try {
    return (await pubRoot.get(`account/status`)).data;
  } catch (error) {
    return false;
  }
}