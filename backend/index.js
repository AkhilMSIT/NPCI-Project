const express = require('express');
const cors = require('cors')
const { pool, createTableIfNotExists } = require('./db');



const app = express();
const PORT = 5000;


app.use(cors())
app.use(express.json());
createTableIfNotExists();


app.post('/api/insertdata', (req, res) => {
    // console.log(req)
    const { username, email, password } = req.body;

    const query = 'INSERT INTO user_data (username, email, password) VALUES ($1, $2, $3)';

    pool.query(query, [username, email, password], (error, result) => {
        if (error) {
            console.error('Error inserting data:', error);
            res.status(500).json({ error: 'An error occurred while inserting data' });
        } else {
            res.json({ message: `${email} registered successfully` });
        }
    });
});



app.get('/api/getdetails', (req, res) => {
    const data = {
        message: "Hello World!"
    };
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})