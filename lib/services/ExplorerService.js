class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersAmount = ExplorerService.filterByMission(explorers, mission)
        return explorersAmount.length
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersUsername = explorers.map((explorer) => explorer.githubUsername === mission)
        return explorersUsername
    }
}

module.exports = ExplorerService