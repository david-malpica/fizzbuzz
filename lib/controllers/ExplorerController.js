const ExplorerService = require("./../services/ExplorerService");
// const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const filterMission = ExplorerService.filterByMission(explorers,mission);
        return filterMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return usernames;
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("./explorers.json");
        const amount = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return amount;
    }
}

module.exports = ExplorerController;