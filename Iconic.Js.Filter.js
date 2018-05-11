function FilterService(configuration) {
    //Initialization
    if (configuration === null || configuration === undefined) {
        configuration = {};
    }

    if (!configuration.hasOwnProperty("activeClass")) {
        configuration.activeClass = "active";
    }


    console.log(configuration);
    //TODO: use constants for types etc.
    //TODO: get type, name, value based on the type of the element
    //TODO: add listeners etc
    return {
        createFromSelector: function (elementSelector) {

        },
        createFromElement: function (element) {

        }
    };
}