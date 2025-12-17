const express = require('express');
const app = express();
const PORT = 3000;
app.get('/search/:id', (req,res) =>{
    console.log(req.params.id)
})
app.listen(PORT, ()=>{
    console.log(`sever in running at port: ${PORT}`)
})