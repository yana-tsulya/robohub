robohub && (robohub.api = {
    help: function () {
        if(robohub.api.help) {
            var i, helpString = '';
            for (i in robohub.api.helpText) {
                helpString += i + ' - ' + robohub.api.helpText[i] + '\n';
            }
            return helpString.slice(0, -1);
        }
    },
    helpText: {
        map: 'show map',
        legend: 'legend for map',
        top: 'move forward',
        right: 'move right',
        bottom: 'move back',
        left: 'move left'
    },
    map: function () {
        return robohub.game.stageToString();
    },
    hint: function () {
        return robohub.game.hint;
    },
    legend: function () {
        return config.strings.legendText;
    },
    top: function () {
        return robohub.game.robot.top();
    },
    right: function () {
        return robohub.game.robot.right();
    },
    bottom: function () {
        return robohub.game.robot.bottom();
    },
    left: function () {
        return robohub.game.robot.left();
    }
});