const express = require('express')
const app = express();
app.use(express.json());
const PORT = 3000;
app.post("/search", (req,res)=>{
    console.log('server message')
    let i = 0
    req.body.map((item)=>{
        console.log(`Student${i+1}: ${item.name}`);
    })
    res.send(req.body);
})
app.listen(PORT, ()=>{
    console.log(`listen is running - server created at port: ${PORT}`);
})