function SearchService(filterElementSelector) {
    var activeClass = "active";
    var elements = $(filterElementSelector);
    elements.on("keyup", function (e) {
        element = $(this);
        if(element.val() === "") {
            element.removeClass(activeClass);
            state.resetFilter(element);
        }
        console.log("changed");
    });
    var state = {
        filters: [],
        addFilter: function (filter) {
            this.filters[filter.name] = filter;
        },
        resetFilter: function (filter) {
            //TODO: remove by key
        },
        save: function () {
            //TODO: get from local storage
        },
        get: function () {
            //TODO: save on local storage
        }
    };

    var elementChanged = function (element) {
        console.log(element.value);
    };

    return {

    }
}

function FilterService(filterElementSelector) {

}