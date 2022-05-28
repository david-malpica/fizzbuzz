const ExplorerService = require("./../services/ExplorerService");
// const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const filter = ExplorerService.filterByMission(explorers,mission);
        return filter;
    }
    static getExplorersUsernamesByMission(mission){
        ExplorerService.getExplorersUsernamesByMission(mission);
        return ExplorerService.getExplorersUsernamesByMission("node");
    }
    static getExplorersAmonutByMission(mission){
        ExplorerService.getAmountOfExplorersByMission(mission);
        return ExplorerService.getAmountOfExplorersByMission("node");
    }
}

module.exports = ExplorerController;