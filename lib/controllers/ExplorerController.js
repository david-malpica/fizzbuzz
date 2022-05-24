const ExplorerService = require("./../services/ExplorerService");
// const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission){
        Reader.readJsonFile("./explorers.json");
        ExplorerService.filterByMission(mission);
        return ExplorerService.filterByMission("node");
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