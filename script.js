function buildPuzzle(cols, rows) {
    // shortcut to the table
    let puzzle = document.getElementById("puzzle");

    // build out the rows and tables
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");

        // create each column
        for (let j = 0; i < cols; j++) {
            // build a column each time this loop runs
            let td = document.createElement("td");
            // add column to row
            tr.appendChild(td);
        }

        // add the row to the table
        puzzle.appendChild(tr);
    }
}

buildPuzzle(10, 9);
 