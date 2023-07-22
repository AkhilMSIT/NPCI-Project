const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 5000;

app.use(cors())


app.get('/api/getdetails', (req, res) => {
    const data = {
        message : "Hello World!"
    };
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})