const express = require('express')
const app = express();
app.use(express.json());
const PORT = 3000;
app.post("/search", (req,res)=>{
    // let roll = req.body.roll;
    // let name = req.body.name;
    console.log('server message')
    console.log(req.body);
    console.log(req.body);
    // console.log(roll,name);
    res.send(req.body);
})
app.listen(PORT, ()=>{
    console.log(`listen is running - server created at port: ${PORT}`);
})