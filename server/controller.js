const {happiness,sadness,anger,disgust,fear, surprise}=require("./data.js")
module.exports={
    getHappiness: (req,res)=> {
        const happiness= ["do something just because it makes you feel good"];
        let randomWord=Math.floor(Math.random()*happiness.length);
        res.status(200).send(happiness[randomWord]);
    },
    getSadness: (req,res)=> {
        let randomWord=Math.floor(Math.random()*sadness.length);
        res.status(200).send(sadness[randomWord]);
    },
    getAnger: (req,res)=> {
        let randomWord=Math.floor(Math.random()*anger.length);
        res.status(200).send(anger[randomWord]);
   },
   getDisgust: (req,res)=> {
    let randomWord=Math.floor(Math.random()*disgust.length);
    res.status(200).send(disgust[randomWord]);
},
   getFear: (req,res)=> {
    let randomWord=Math.floor(Math.random()*fear.length);
    res.status(200).send(fear[randomWord]);
},
    getSurprise: (req,res)=> {
    let randomWord=Math.floor(Math.random()*surprise.length);
    res.status(200).send(surprise[randomWord]);}}
