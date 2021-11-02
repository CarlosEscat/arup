// const fs = require("fs");

// fs.readFile("./mockData.json", "utf-8", (err, jsonString) => {
//   if (err) {
//     console.log(err);
//   } else {
//     try {
//       const data = JSON.parse(jsonString);
//       console.log(data);
//     } catch (error) {
//       console.log("An error has occurred while parsing JSON file", error);
//     }
//   }
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router");

const app = express();

const middleware = cors();
app.use(middleware);
app.use(bodyParser.json());

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on :${port}`));
