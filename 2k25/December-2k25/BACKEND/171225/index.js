// const express = require('express');
// const app = express();
// const PORT = 8000;
// let students = [
//     {
//         id: 13,
//         name: 'dev'
//     },
//     {
//         id: 12,
//         name: 'subham'
//     },
//     {
//         id: 11,
//         name: 'ram'
//     }
// ]
// app.get('/search/:id/name/:studName', (req,res) =>{
//     res.send(students)
//     console.log(req.params.id, req.params.studName)
// })
// app.listen(PORT, ()=>{
//     console.log(`sever in running at port: ${PORT}`)
// })

const express = require("express");
const app = express();
const PORT = 8000;
let students = [
  { id: 13, name: "dev" },
  { id: 12, name: "subham" },
  { id: 11, name: "ram" },
];
app.get("/search/:id/name/:studName", (req, res) => {
  const { id, studName } = req.params;

  const student = students.find(
    (s) => s.id === Number(id) && s.name === studName
  );
  console.log(student)

  if (!student) {
    console.error(`❌ No student found with id=${id} and name=${studName}`);
    return res.send("Check terminal");
  }

  console.log("✅ Student Found:", student);
  res.send("Check terminal");
});

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
