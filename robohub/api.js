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
        legend: 'legend for map'
    },
    map: function () {
        return robohub.game.stageToString();
    },
    legend: function () {
        return config.strings.legendText;
    },
    top: function () {
        return robohub.game.robot.top();
    }
});