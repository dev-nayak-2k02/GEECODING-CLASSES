const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
let arr = [];
app.post("/user", (req, res) => {
  arr.push(req.body);
  console.log(arr);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`sever is running at port ${PORT}`);
});
