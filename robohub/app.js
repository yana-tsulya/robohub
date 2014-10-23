var robohub = {};

robohub.app = {
    start: function () {
        this.greetings();
        this.apiRegistration();
        robohub.game.start();
    },
    greetings: function () {
        kernel.echo(config.strings.greetingText);
    },
    apiRegistration: function () {
        window.help = robohub.api.help;
        window.map = robohub.api.map;
        window.legend = robohub.api.legend;
        window.restart = robohub.api.restart;
        window.hint = robohub.api.hint;
        window.north = robohub.api.top;
        window.east = robohub.api.right;
        window.south = robohub.api.bottom;
        window.west = robohub.api.left;
        window.isFree = robohub.api.isFree;
    }
};
