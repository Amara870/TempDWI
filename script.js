// center chessboard on page variable
var center = document.createElement('center');
// chessboard variable
var ChessTable = document.createElement('table');

// function to create chessboard
function createChessboard() {
    // create tables rows
    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');
        // create table column for each row
        for (var j = 0; j < 8; j++) {
            var td = document.createElement('td');
            // determine and color every other cell white
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            }
            // color all other cells black
            else {
                td.setAttribute('class', 'cell blackcell');
                tr.appendChild(td);
            }
        }
        // create chessboard
        ChessTable.appendChild(tr);
    }
    // center and style chessboard
    center.appendChild(ChessTable);
    ChessTable.setAttribute('cellspacing', '0');
    ChessTable.setAttribute('width', '270px');
    document.body.appendChild(center);
}
// call function
createChessboard();