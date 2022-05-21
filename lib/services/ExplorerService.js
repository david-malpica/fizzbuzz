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
        const explorersMission = ExplorerService.filterByMission(explorers, mission)
        const explorersUsername = explorersMission.map((explorer) => explorer.githubUsername)
        return explorersUsername
    }
}

module.exports = ExplorerService