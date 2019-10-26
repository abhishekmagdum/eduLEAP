var students = [
    ['Name', 'Assn1', 'Assn2', 'Assn3', 'Assn4']
    ['Johnny', 0.75, 0.60, 0.78, 0.80],
    ['John', 0.67, 0.77,0.82,0.74],
    ['Jimmy', 0.70, 0.72, 0.62, 0.73],
    ['Jordan',0.82,0.68,0.76,0.81],
    ['Emily', 0.75, 0.60, 0.78, 0.80],
    ['Emilia', 0.67, 0.77,0.82,0.74],
    ['Alex', 0.70, 0.72, 0.62, 0.73],
    ['Alexandra',0.82,0.68,0.76,0.81]

  ];

  function test(){
      return 1;
  }

  function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);