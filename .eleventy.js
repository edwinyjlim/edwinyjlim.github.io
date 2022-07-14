

module.exports = (function (eleventyConfig) {

    eleventyConfig.addFilter("sayMessage", function(message) {
        return "I JUST WANTED TO SAY... " + message;
    });

});