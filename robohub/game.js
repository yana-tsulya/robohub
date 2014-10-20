robohub && (robohub.game = {
    stage: null,
    playerX: 0,
    playerY: 0,
    start: function () {
        this.initLevel(1);
    },
    initLevel: function (number) {
        this.stage = robohub.levels[number].map;
        this.playerX = robohub.levels[number].startPosition[1];
        this.playerX = robohub.levels[number].startPosition[0];
    },
    stageToString: function () {
        var result = '\n', i, j;
        for (i in this.stage) {
            for (j in this.stage[i]) {
                result += this.stage[i][j]
            }
            result += '\n'
        }
        return result;
    }
});