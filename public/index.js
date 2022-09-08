const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {
    getItems,
    postItem,
    
} = require("./controller");



app.get('/api/items', getItems); 

app.post('/api/items', postItem);




app.listen(4000, () => console.log("Server running on 3000"));