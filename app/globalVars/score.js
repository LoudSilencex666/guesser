export const score = {
    score: 0,
    currentStage: 0,
    maxStage: 12,
    succesfullStage: 12,

    easyScoreStart: 100000,
    mediumScoreStart: 250000,
    hardScoreStart: 1000000,

    easyLose: 9500,
    mediumLose: 23750,
    hardLose: 95000,
}

export const results = {
    postGameStats: true,
    easyResult: score.easyScoreStart,
    mediumResult: score.mediumScoreStart,
    hardResult: score.hardScoreStart
}
