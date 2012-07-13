/// <reference path="../libs/knockout-2.1.0.debug.js" />

ko.bindingHandlers.jqButton = {
    init: function (element) {
        $(element).button();
    },

    update: function (element, valueAccessor) {
        var currentValue = valueAccessor();
        $(element).button("option", "disabled", currentValue.enable === false);
    }
};
