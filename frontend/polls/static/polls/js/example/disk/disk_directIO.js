
$(function () {
    var test = document.getElementById("disk_tst").value;

    var directIO_dic = getJson(test, 'Iozone-DirectIO')
    var columns = getHoriColumn( directIO_dic );
    var data = getHoriData( directIO_dic, columns );

    // initialize grid
    var options = {emptyRow: true, sortable: false};
    var grid = $(document.getElementById("disk-directIO")).grid(data, columns, options);
    draw_grid(grid);
    
    // api examples
    var $row = grid.getRowByIndex(5);
    console.group("data api examples");
    console.log("grid.getRowDataByIndex(0):", grid.getRowDataByIndex(0));
    console.log("grid.getRowData($row):", grid.getRowData($row));
    console.log("grid.getGridData():", grid.getGridData());
    console.groupEnd();

    window.grid = grid;
});