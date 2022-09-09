const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {
    getAffirmation,
    postAffirmation,
    
} = require("./controller");



app.get('/api/items', getAffirmation); 

app.post('/api/items', postAffirmation);




app.listen(4000, () => console.log("Server running on 3000"));