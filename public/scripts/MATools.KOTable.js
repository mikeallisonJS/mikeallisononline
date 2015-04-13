/*!
 * Mike Allison Tools - KOTable v.1
 * http://mikeallisononline.com/
 *
 * Dependent on Knockout
 * http://knockoutjs.com/
 *
 * Copyright 2013 Mike Allison
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

(function (MATools, undefined) {
    
    MATools.KOTable = function (json) {
        var self = this;
        self.columns = ko.observableArray(json.columns ? json.columns : []);
        self.rows = ko.observableArray(json.rows ? json.rows : []);
        self.sortDir = ko.observableArray([]);
        self.initialSort = ko.observable(json.initialSort ? json.initialSort : -1);
        self.selectedRow = ko.observable(json.selectedRow ? json.selectedRow : -1);
        self.selectRow = json.selectRow ? json.selectRow : function(index) {
            self.selectedRow(index);
        };
        self.sort = json.sort ? json.sort : function (index) {
            if (!self.sortDir[index])
                self.sortDir[index] = "A";
            var prevSelectedRow;
            if (self.selectedRow() > -1)
                prevSelectedRow = self.rows()[self.selectedRow()];
            self.rows.sort(function (left, right) {
                if (self.sortDir[index] == "A") {
                    return left[self.columns()[index]] == right[self.columns()[index]] ? 0 : (left[self.columns()[index]] < right[self.columns()[index]] ? -1 : 1);
                } else {
                    return left[self.columns()[index]] == right[self.columns()[index]] ? 0 : (left[self.columns()[index]] > right[self.columns()[index]] ? -1 : 1);
                }
            });
            self.sortDir[index] = self.sortDir[index] == "A" ? "D" : "A";
            if (prevSelectedRow != undefined)
                self.selectedRow(self.rows().indexOf(prevSelectedRow));
        };
        if (self.initialSort > -1)
            self.sort(self.initialSort);
    };
}(window.MATools = window.MATools || {}));
;