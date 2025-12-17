const express = require('express');
const app = express();
const PORT = 8000;
let students = [
    {
        id: 13,
        name: 'dev'
    },
    {
        id: 12,
        name: 'subham'
    },
    {
        id: 11,
        name: 'ram'
    }
]
app.get('/search/:id/name/:studName', (req,res) =>{
    res.send(students)
    console.log(req.params[0].id, req.params[0].studName)
})
app.listen(PORT, ()=>{
    console.log(`sever in running at port: ${PORT}`)
})

