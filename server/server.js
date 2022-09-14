const express = require ('express');
const cors = require ('cors');
const app = express ();

app.use(cors());
app.use(express.json());

const {
    getMessage,
    getMessage2,
    getMessage3,
    getMessage4,
    getMessage5,
    putMessage,
    postMessage2,
} = require("./controller");

app.get('/api/messages',getMessage);
app.get('/api/messages', getMessage2); 
app.get('/api/messages', getMessage3); 
app.get('/api/messages', getMessage4); 
app.get('/api/messages', getMessage5); 

app.put('/api/messages', putMessage);
app.post('/api/messages', postMessage2);





app.listen(PORT,()=>
console.log(`listening on ${PORT}`)
);
