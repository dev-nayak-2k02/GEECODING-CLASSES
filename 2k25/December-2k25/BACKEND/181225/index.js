const express = require('express')
const app = express();
const PORT = 8000;
let query = {
    userName: 'Dev',
    passWord: '123554@'
}
app.get('/search', (req, res) => {
    console.log(req.query);
})
app.listen(PORT, () => {
    console.log(`server is running at PORT: ${PORT}`)
})