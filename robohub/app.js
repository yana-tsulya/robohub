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
    }
};
