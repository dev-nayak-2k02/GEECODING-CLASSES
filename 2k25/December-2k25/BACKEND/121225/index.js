const express = require('express')
const app = express();
app.use(express.json());
const PORT = 3000;
let i = 0;
app.post("/search", (req,res)=>{
    console.log('server message')
    req.body.map((item)=>{
        console.log(`Student${++i}: ${item.name}`);
    })
    res.send(req.body);
})
app.listen(PORT, ()=>{
    console.log(`listen is running - server created at port: ${PORT}`);
})