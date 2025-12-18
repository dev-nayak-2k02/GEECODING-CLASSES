const express = require('express');
const app = express();
const PORT = 8000;

let students = [
    { id: 13, name: 'devNayak' },
    { id: 12, name: 'subham' },
    { id: 11, name: 'ram' }
];

app.get('/students', (req, res) => {
    const { id, name } = req.query;

    if (!id || !name) {
        console.error('❌ id or name missing');
        return res.send('Check terminal');
    }

    const student = students.find(
        s => s.id === Number(id) && s.name === name
    );

    if (!student) {
        console.error(`❌ No student found with id=${id} and name=${name}`);
        return res.send('Check terminal');
    }

    console.log('✅ Student Found:', student);
    res.send('Check terminal');
});
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});


//GET /students?id=13&name=dev
