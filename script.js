// nickname shortcut to element
let chessBoard = document.getElementById("divChessBoard");

let arrPieces = [
    [null, "w", null, "w", null, "w", null, "w"],
    ["w", null, "w", null, "w", null, "w", null],
    [null, "w", null, "w", null, "w", null, "w"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["b", null, "b", null, "b", null, "b", null],
    [null, "b", null, "b", null, "b", null, "b"],
    ["b", null, "b", null, "b", null, "b", null]
];

function buildChessBoard() {
    // create 8 rows
    for (let i = 0; i < 8; i++) {
        // create 8 columns
        for (let j = 0; j < 8; j++) {
            // create div for each chessboard square
            let chessSquare = document.createElement("div");

            // add css class to the div
            chessSquare.className = "chessSquare";

            // use modulo to alternate colors of the squares
            if ((i+j) % 2 == 0) {
                chessSquare.style.backgroundColor = "black";
            }
            else {
                chessSquare.style.backgroundColor = "white";
            }

            // add square to board
            chessBoard.appendChild(chessSquare);


            if (arrPieces[i][j]) {
                // specify ID, CSS class, and the location of the piece
                createPiece("piece" + i + j, "chessPiece-" + arrPieces[i][j], chessSquare)
            }
        }
    }
}

function createPiece (pieceID, pieceClass, theSquare) {
    let divNewPiece = document.createElement("div");

    // specify ID
    divNewPiece.setAttribute("id", "pieceID");

    // specify Class
    divNewPiece.classList.add("chessPiece");

    // specify class for color
    divNewPiece.classList.add(pieceClass);

    theSquare.appendChild(divNewPiece);
}

buildChessBoard();