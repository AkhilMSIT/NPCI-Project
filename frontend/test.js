// test.js
const axios = require("axios");

const dummyData = {
  username: "testuser",
  email: "testuser@example.com",
  password: "hashedpassword",
};

axios
  .post("http://localhost:5000/api/insertdata", dummyData)
  .then((response) => {
    console.log( response.data.message);
  })
  .catch((error) => {
    console.error("Error inserting data:", error.response.data);
  });
