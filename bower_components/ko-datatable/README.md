#KODataTable
This is a screaming fast,reactive dynamic datatable viewmodel/template for Knockout with search, header sorting and item selection.

## Homepage & Demo
http://mikeallisononline.com/Projects/KODataTable

## Install
```
(bower): bower install ko-datatable
(optional) bower install jtablescroll

(npm): npm install ko-datatable
(optional) npm install jtablescroll

(nuget): Package-Install KODataTable
(optional): Package-Install jTableScroll
```

##Add-on Modules
http://mikeallisononline.com/Projects/jTableScroll

https://github.com/rgeerts/KODataTable-dragable

## License
MIT

## Copyright
2013 Mike Allison

## Example Table
```html
<div id="kodt">
    <div>
        <input type="text" data-bind="value: searchText, valueUpdate: 'afterkeydown'" />
        <select data-bind="value: selectedColumn, options: columns"></select>
        <button data-bind="click: search">Search</button>
    </div>
    <div>
        <table class="jTableScroll">
            <thead>
                <tr data-bind="foreach: columns">
                    <th data-bind="text: $data,
                        click: function() { $parent.sort($index()) }" style="cursor: pointer"></th>
                </tr>
            </thead>
            <tbody data-bind="foreach: currentRows">
                <tr data-bind="foreach: $parent.columns,
                    click: function () { $root.selectRow($data); },
                    css: { 'success': $root.selectedRow() == $data }">
                    <td data-bind="text: $parent[$data]" style="cursor: pointer"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <button data-bind="click: firstPage">First</button>
        <button data-bind="click: prevPage">Prev</button>
        Page <span data-bind="text: currentPage() + 1"></span> of <span data-bind="text: pageCount"></span>
        <button data-bind="click: nextPage">Next</button>
        <button data-bind="click: lastPage">Last</button>
    </div>
</div>
```

## Javascript
```javascript
<script src="KODataTable-1.0.2.js"></script>
<script src="jquery.jTableScroll-1.6.0.js"></script>
<script>
    var TableDataVM = new KODataTable({ options });
    ko.applyBindings(TableDataVM, document.getElementById("kodt"));
</script>
```

## Options (JSON object)
```javascript
{
    columns: (Array[String]) List of columns - ex: ["Id","Name","Description"]
    rows: (Array[JSON Object]) Row data - ex: [{Id:1, Name: "Mike Allison", Description: "Desc 1"}]
    searchText: (string)(optional) initial search text
    currentPage: (integer)(optional) current starting page
    pageSize: (integer)(optional) number of rows to display (default: 20)
    tableHeight: (integer)(optional) height of result table if scrolling
    tableWidth: (integer)(optional) width of result table if scrolling
    autoSearch: (boolean)(optional) enable auto-search (default: true)
    firstFn: (function)(optional) function to perform on first page event
    nextFn: (function)(optional) function to perform on next page event
    prevFn: (function)(optional) function to perform on prev page event
    lastFn: (function)(optional) function to perform on last page event
    searchFn: (function)(optional) function to perform on search click event
    sortFn: (function)(optional) sort event function
    selectFn: (function)(optional) select event function
}
```

##Additional
columns, rows, and selectedRow can all be set or accessed dynamically through your viewmodel. This can easily attached to external datasources such as webservices
```javascript
TableDataVM.rows(yourNewRowData);
```