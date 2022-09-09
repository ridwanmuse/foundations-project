const items = ['POST request', 'PUT request']

module.exports = {
    getmessage: (req, res) => {
        const affirmation = ['your time is coming!','hi','hello'];

        let randomIndex = Math.floor(Math.random() * affirmation.length);
        let randomMessage = message[randomIndex];
      
        res.status(200).send(randomAffirmation);}}

    putmessage: (req, res) => {
            const { oldMessage, editMessage } = req.body;
            const oldIndex = messages.findIndex(e => e === oldMessage);
    
            if (oldIndex === -1) {
                res.status(400).send(`Error: "${oldItem}" not found.`);
            } else {
               messages[oldIndex] = editItem;
    
                res.status(200).send(messages);}}