var robohub = {};

robohub.app = {
    start: function () {
        this.greetings();
        this.apiRegistration();
    },
    greetings: function () {
        kernel.echo(config.strings.greetingText);
    },
    apiRegistration: function () {
        window.help = robohub.api.help;
    }
};
