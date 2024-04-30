function insertJsGrid(){

    jsGrid.locale("pt-br");

    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",

        heading: true,
        selecting: true,
        pageLoading: false,

        insertRowLocation: "bottom",

        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,

        filtering: true,
        pageSize: 15,
        pageButtonCount: 5,
        confirmDeleting: true,

        controller: {
            loadData: function(filter) { return checkFilter(filter) },
            insertItem: function(item) { insertItem(item); },
            updateItem: function(item) {  },
            deleteItem: function(item) { deleteItem(item); },
        },

        fields: getFields()
    });
}