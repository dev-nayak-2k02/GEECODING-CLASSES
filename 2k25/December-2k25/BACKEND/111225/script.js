const express = require('express');
const app = express();
app.use(express.json())
const PORT = 3000;
app.post('/search', (req, res)=>{
    console.log('hello')
    console.log(req.body)
    res.send(req.body)
})
app.listen(PORT, ()=>{
    console.log('running')
})