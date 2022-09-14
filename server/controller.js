const items = ['POST request', 'PUT request']

module.exports = {
    getMessage: (req, res) => {
        const messages = ["do something just because it makes you feel good", "be who you want to be", "do the things that give your life more meaning"];  
        let randomIndex = Math.floor(Math.random() * messages.length);
        let randomMessage = messages[randomIndex];
      
        res.status(200).send(randomMessage);
    },  
    getMessage2: (req, res) => {
        const getMessage2 = ['you may feel small, but to someone, you are big!','Being angry is okay. Being upset is okay. Feeling your emotions is okay.','You do not have to have permission to feel things.'] 
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune);
    },
    getMessage3: (req, res) => {
        const getMessage3 = ['you may feel small, but to someone, you are big!','Being angry is okay. Being upset is okay. Feeling your emotions is okay.','You do not have to have permission to feel things.'] 
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune);
},
    getMessage4: (req, res) => {
    const getMessage4 = ['you may feel small, but to someone, you are big!','Being angry is okay. Being upset is okay. Feeling your emotions is okay.','You do not have to have permission to feel things.'] 
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
},
    getMessage5: (req, res) => {
    const getMessage5 = ['you may feel small, but to someone, you are big!','Being angry is okay. Being upset is okay. Feeling your emotions is okay.','You do not have to have permission to feel things.'] 
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);}}