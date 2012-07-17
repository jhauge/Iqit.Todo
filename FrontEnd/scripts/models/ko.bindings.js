/// <reference path="../libs/knockout-2.1.0.debug.js" />

ko.bindingHandlers.jqButton = {
    init: function (element) {
        $(element).button();
    }
};

ko.bindingHandlers.jqModal = {
    init: function (element, valueAccessor) {
        var value = valueAccessor;
        $(element).dialog({
            autoOpen: false,
            minWidth: 400,
            modal: true,
            title: "Todo"
        });
    }
};