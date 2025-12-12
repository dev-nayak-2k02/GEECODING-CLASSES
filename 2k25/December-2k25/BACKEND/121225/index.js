const express = require('express')
const app = express();
app.use(express.json());
const PORT = 3000;
app.post("/search", (req,res)=>{
    console.log('server message')
    req.body.map((item)=>{
        console.log(item.name)
    })
    // console.log(req.body);
    // console.log(req.body);
    res.send(req.body);
})
app.listen(PORT, ()=>{
    console.log(`listen is running - server created at port: ${PORT}`);
})