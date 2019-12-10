// import axios from 'axios';
const pubRoot = new axios.create({
  baseURL: "http://localhost:3000"
});


async function axiosPostTest() {
  console.log("button test but in manager");
  // const response = await axios({
  //   method: "post",
  //   url: "http://localhost:3000/account/create",
  //   withCredentials: true,
  //   body: {
  //   name: 'Chris',
  //   pass: 'pass123'
  //   },
  //   });



  return await pubRoot.post(`/account/create`, 
  {
    "name": "chris",
    "pass": "pass123",
    "data": {}
  })
}

// async function postTest() {

//   }
