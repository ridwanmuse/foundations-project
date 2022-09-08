const items = ['POST request', 'PUT request', 'DELETE request']

module.exports = {
    getAffirmation: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

    
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    
    getFortune: (req, res) => {
        const fortunes = [
            'A new perspective will come with the new year!',
            'Any day above ground is a good day.','Dont be discouraged, because every wrong attempt discarded is another step forward.','First think of what you want to do; then do what you have to do.','Good news will be brought to you by mail.'
        ]
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
    
        res.status(200).send(randomFortune);
    },
    getItems: (req, res) => {
        res.status(200).send(items);
    }, // Adds the user that was sent from the front-end to our database.
    postItem: (req, res) => {
        const { newItem } = req.body;

        items.push(newItem);

        res.status(200).send(items);
    },
    putItem: (req, res) => {
        const { oldItem, editItem } = req.body;
        const oldIndex = items.findIndex(e => e === oldItem);

        if (oldIndex === -1) {
            res.status(400).send(`Error: "${oldItem}" not found.`);
        } else {
            items[oldIndex] = editItem;

            res.status(200).send(items);
        }
    },
    deleteItem: (req, res) => {
        const { item } = req.params;
        const index = items.findIndex(e => e === item);

        if (index === -1) {
            res.status(400).send(`Error: "${item}" not found.`);
        } else {
            items.splice(index, 1);

            res.status(200).send(items);
        }
    },
}