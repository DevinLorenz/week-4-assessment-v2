const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

const { getFortune } = require('./controller')

const { addCompliment } = require('./controller')

const { addFortune } = require('./controller')

const { getAllCompliments } = require('./controller')

const { getAllFortunes } = require('./controller')

const { deleteCompliment } = require('./controller')

const { deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/compliment/all', getAllCompliments);
app.get("/api/fortune", getFortune);
app.get('/api/fortune/all', getAllFortunes);
app.post("/api/compliment/add", addCompliment);
app.post("/api/fortune/add", addFortune);
app.delete("/api/compliment/delete", deleteCompliment);
app.delete("/api/fortune/delete", deleteFortune);


app.listen(4000, () => console.log("Server running on 4000"));
