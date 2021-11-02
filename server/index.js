//// boiler plate for express and cors
// npm i express cors (to download cors and express)
// npm init -y (get package.json when you only get package.lock.json)
// sudo npm i nodemon (to download nodemon when i get errors)

const express = require ("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {getHouses, deleteHouse, createHouse, updateHouse} = require("./controller.js");

// endpoints
app.get("/api/houses", getHouses);
app.delete("/api/houses/:id", deleteHouse);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);


app.listen(4004, () => {
    console.log("You are jamming to port 4004");
})