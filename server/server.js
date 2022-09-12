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
    postMessage2
} = require("./controller");

app.get("/api/message", getMessage);

app.get('/api/message2', getMessage2);

app.get('/api/message3', getMessage3); 

app.get('/api/message4', getMessage4); 

app.get('/api/message5', getMessage5); 

app.put('/api/Message', putMessage);

app.post('/api/Message2',postMessage2);

app.listen(3000, () => console.log("Server running on 3000"));

const PORT = 3000;

app.listen(PORT,()=>
console.log(`listening on ${PORT}`)
);
