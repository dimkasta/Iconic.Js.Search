function FilterService(element) {
    var activeClass = "active";
    //TODO: use constants for types etc.
    //TODO: get type, name, value based on the type of the element
    //TODO: add listeners etc
    return {};
}

function SearchService(filterElementSelector) {
    var filters = [];
    var elements = $(filterElementSelector);
    $.each(elements, function (item) {
        filters.push(FilterService(item));
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

