const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", () => {
    test("Test for ExplorerController class", () => {
        const mission = [{mission: "node"}];
        const explorersInNode = ExplorerController.getExplorersByMission(mission);
        expect(explorersInNode.length).toBe(1);
    });
});