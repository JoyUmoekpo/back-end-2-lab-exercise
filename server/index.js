const express = require('express');
const cors = require('cors');
const {
    getHouse,
    createHouse,
    updateHouse,
    deleteHouse
} = require("./controller.js")
const app = express();
app.use(express.json());
app.use(cors());
app.get('/api/houses', getHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(4004, () => console.log("Sever is running on 4004"));