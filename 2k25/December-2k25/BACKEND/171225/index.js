const express = require('express');
const app = express();
const PORT = 8000;
app.get('/search/:id/item/:itemName', (req,res) =>{
    console.log(req.params.id, req.params.itemName)
})
app.listen(PORT, ()=>{
    console.log(`sever in running at port: ${PORT}`)
})