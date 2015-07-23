
$(function () {
    var test = document.getElementById("network_tst").value;  
    
    var local_lat_dic = getJson(test, 'local_lat')
    var columns = getHoriColumn(local_lat_dic);
    var data = getHoriData(local_lat_dic, columns);   
   	
    // initialize grid
    var options = {emptyRow: true, sortable: false};
	var grid = $(document.getElementById("network-lat")).grid(data, columns, options);
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
