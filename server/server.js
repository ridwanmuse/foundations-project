const path= require('path')
const express = require ('express');
const cors = require ('cors');
const app = express ();
const { 
    getHappiness,
    getSadness,
    getAnger, 
    getDisgust, 
    getFear,
    getSurprise
} = require("./controller");


app.use(cors());
app.use(express.json());
app.use('/client', express.static(path.join(__dirname, '../client')));


app.get("/api/happiness",getHappiness);
app.get("/api/sadness",getSadness)
app.get("/api/anger",getAnger)
app.get("/api/disgust",getDisgust)
app.get("/api/fear",getFear)
app.get("/api/surprise",getSurprise)
app.delete("/api/anger", deleteAnger);

const PORT = 3000;

app.listen(PORT,()=>
console.log(`listening on ${PORT}`)
);

