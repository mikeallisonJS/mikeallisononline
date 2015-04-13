/* 
 * Mike Allison Tools - KBDataTable v.1.0.0
 * http://mikeallisononline.com/
 *
 * Dependent on Knockback and jQuery (for scrolling)
 * http://kmalakoff.github.io/knockback/
 * http://jquery.com/
 *
 * Optional table scrolling with jTableScroll
 * http://mikeallisononline.com/
 *
 * Copyright 2013 Mike Allison
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
*/


(function() {
  window.KBDataTableModel = Backbone.Model.extend({
    defaults: {
      "searchText": "",
      "columns": [],
      "rows": new Backbone.Collection,
      "currentPage": 0,
      "pageSize": 20,
      "selectedColumn": 0,
      "tableHeight": 0,
      "tableWidth": 0,
      "sortDir": [],
      "autoSearch": true,
      "selectedRow": null,
      "nextFn": null,
      "prevFn": null,
      "searchFn": null,
      "sortFn": null,
      "lastFn": null,
      "firstFn": null,
      "selectFn": null
    }
  });

  window.KBDataTableViewModel = (function() {
    function KBDataTableViewModel(model) {
      var _this = this;

      this.model = model;
      this.searchText = kb.observable(this.model, 'searchText');
      this.columns = kb.observable(this.model, 'columns');
      this.rows = new kb.CollectionObservable(this.model.attributes.rows);
      this.currentPage = kb.observable(this.model, 'currentPage');
      this.pageSize = kb.observable(this.model, 'pageSize');
      this.selectedColumn = kb.observable(this.model, 'selectedColumn');
      this.tableHeight = this.model.get('tableHeight');
      this.tableWidth = this.model.get('tableWidth');
      this.sortDir = this.model.get('sortDir');
      this.autoSearch = this.model.get('autoSearch');
      this.selectedRow = kb.observable(this.model, 'selectedRow');
      this.filter = ko.observable(this.searchText());
      if (this.autoSearch) {
        this.throttleSearch = ko.computed(function() {
          return _this.filter(_this.searchText());
        });
        this.throttleSearch.extend({
          throttle: 300
        });
      }
      this.filteredRows = ko.computed(function() {
        var filter;

        filter = _this.filter().toLowerCase();
        if (!filter) {
          return _this.rows();
        } else {
          return ko.utils.arrayFilter(_this.rows(), function(item) {
            return item.model().get([_this.selectedColumn()]).toString().toLowerCase().indexOf(filter) > -1;
          });
        }
      });
      this.currentRows = ko.computed(function() {
        if ((_this.currentPage() + 1) * _this.pageSize() > _this.filteredRows().length) {
          return _this.filteredRows().slice(_this.currentPage() * _this.pageSize());
        } else {
          return _this.filteredRows().slice(_this.currentPage() * _this.pageSize(), +((_this.currentPage() + 1 * _this.pageSize()) - 1) + 1 || 9e9);
        }
      });
      this.pageCount = ko.computed(function() {
        return Math.ceil(_this.filteredRows().length / _this.pageSize());
      });
      this.nextFn = this.model.get('nextFn' != null ? 'nextFn' : null);
      this.prevFn = this.model.get('prevFn' != null ? 'prevFn' : null);
      this.searchFn = this.model.get('searchFn' != null ? 'searchFn' : null);
      this.sortFn = this.model.get('sortFn' != null ? 'sortFn' : null);
      this.lastFn = this.model.get('lastFn' != null ? 'lastFn' : null);
      this.firstFn = this.model.get('firstFn' != null ? 'firstFn' : null);
      this.selectFn = this.model.get('selectFn' != null ? 'selectFn' : null);
      if (typeof jQuery.fn.jTableScroll === "function") {
        jQuery(function() {
          return jQuery('.jTableScroll').jTableScroll({
            height: _this.tableHeight,
            width: _this.tableWidth
          });
        });
      }
    }

    KBDataTableViewModel.prototype.nextPage = function() {
      if ((this.currentPage() + 1) * this.pageSize() < this.filteredRows().length) {
        if (typeof this.nextFn === "function") {
          this.nextFn();
        }
        return this.currentPage(this.currentPage() + 1);
      }
    };

    KBDataTableViewModel.prototype.prevPage = function() {
      if (this.currentPage() > 0) {
        if (typeof this.prevFn === "function") {
          this.prevFn();
        }
        return this.currentPage(this.currentPage() - 1);
      }
    };

    KBDataTableViewModel.prototype.lastPage = function() {
      if (typeof this.lastFn === "function") {
        this.lastFn();
      }
      return this.currentPage(Math.ceil(this.filteredRows().length / this.pageSize()) - 1);
    };

    KBDataTableViewModel.prototype.firstPage = function() {
      if (typeof this.firstFn === "function") {
        this.firstFn();
      }
      return this.currentPage(0);
    };

    KBDataTableViewModel.prototype.search = function() {
      if (typeof this.searchFn === "function") {
        this.searchFn();
      }
      this.filter(this.searchText());
      return this.currentPage(0);
    };

    KBDataTableViewModel.prototype.sort = function(index) {
      var _ref,
        _this = this;

      if (this.sortFn === "function") {
        return this.sortFn(index);
      } else {
        if (!this.sortDir[index]) {
          this.sortDir[index] = "A";
        }
        this.rows.sort(function(left, right) {
          if (_this.sortDir[index] === "A") {
            if (left.model().get(_this.columns()[index]) === right.model().get(_this.columns()[index])) {
              return 0;
            } else if (left.model().get(_this.columns()[index]) < right.model().get(_this.columns()[index])) {
              return -1;
            } else {
              return 1;
            }
          } else {
            if (left.model().get(_this.columns()[index]) === right.model().get(_this.columns()[index])) {
              return 0;
            } else if (left.model().get(_this.columns()[index]) > right.model().get(_this.columns()[index])) {
              return -1;
            } else {
              return 1;
            }
          }
        });
        return this.sortDir[index] = (_ref = this.sortDir[index] === "A") != null ? _ref : {
          "D": "A"
        };
      }
    };

    KBDataTableViewModel.prototype.selectRow = function(data) {
      this.selectedRow(data.model().cid);
      return typeof this.selectFn === "function" ? this.selectFn() : void 0;
    };

    return KBDataTableViewModel;

  })();

}).call(this);
