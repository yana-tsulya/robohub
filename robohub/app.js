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
        window.hint = robohub.api.hint;
        window.top = robohub.api.top;
        window.right = robohub.api.right;
        window.bottom = robohub.api.bottom;
        window.left = robohub.api.left;
    }
};
