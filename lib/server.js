const ExplorerController = require("./controllers/ExplorerController");
//Import express
const express = require("express");
// Create express app
const app = express();
app.use(express.json());
// Create port
const port = 3000;

// Principal path
app.get("/",(request,response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

// Init app
app.listen(port, () => {
    console.log(`Listen port ${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});