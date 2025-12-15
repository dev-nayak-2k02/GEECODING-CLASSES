const express = require("express");
const app = express();
const PORT = 3000;
// let i = 0;
let student = [
  {
    roll: 13,
    name: "ram",
  },
  {
    roll: 14,
    name: "dev"
  },
  {
    roll: 15,
    name: "shyam"
  }
];
app.get("/search", (req, res) => {
  res.send(student);
});
app.listen(PORT, () => {
  console.log(`listen is running - server created at port: ${PORT}`);
});
