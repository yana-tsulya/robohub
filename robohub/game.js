robohub && (robohub.game = {
    stage: null,
    robot: {
        top: function () {
            if(robohub.game.stage[this.y-1][this.x]) {
                this.y--;
            } else {
                return config.strings.wallCollapse;
            }
        },
        x: 0,
        y: 0
    },
    start: function () {
        this.initLevel(1);
    },
    initLevel: function (number) {
        this.stage = robohub.levels[number].map;
        this.robot.x = robohub.levels[number].startPosition[1];
        this.robot.y = robohub.levels[number].startPosition[0];
    },
    stageToString: function () {
        var result = '\n', i, j;
        for (i in this.stage) {
            for (j in this.stage[i]) {
                if(this.robot.x == j && this.robot.y == i) {
                    result += '@';
                } else {
                    result += this.stage[i][j];
                }
            }
            result += '\n'
        }
        return result;
    }
});