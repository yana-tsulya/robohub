robohub && (robohub.api = {
    help: function () {
        if(robohub.api.help) {
            var i, helpString = '';
            for (i in robohub.api.helpText) {
                helpString += i + ' - ' + robohub.api.helpText[i] + '\n';
            }
            kernel.echo(helpString.slice(0, -1));
            return 'help - for help'
        }
    },
    helpText: {
        map: 'show map'
    }
});