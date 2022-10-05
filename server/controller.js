const compliments = [`Gee, you are a smart cookie!`, "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = ["You will find a new job soon.", "You will find a new car soon.", "You will find a new house soon.", "You will be very successful soon.", "You will have a very fun experience soon."];
module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getAllCompliments: (req, res) => {
        res.status(200).send(compliments);
    },

    getFortune: (req, res) => {
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes);
    },

    addCompliment: (req, res) => {
        const { newCompliment } = req.body;
        compliments.push(newCompliment);
        res.status(200).send(compliments);
        this.getAllCompliments
    },

    addFortune: (req, res) => {
        const { newFortune } = req.body;
        fortunes.push(newFortune);
        res.status(200).send(fortunes);
    },

    deleteCompliment: (req, res) => {
        const { compliment } = req.body;
        let index = compliments.indexOf(compliment);
        compliments.splice(index, 1);
        res.status(200).send(compliments);
    },

    deleteFortune: (req, res) => {
        const { fortune } = req.body;
        let index = fortunes.indexOf(fortune);
        fortunes.splice(index, 1);
        res.status(200).send(fortunes);
    }


}