class Piece {
    type
    static x() {
        piece = new Piece()
        piece.type = 'x'
        return piece
    }
    static z() {
        piece = new Piece()
        piece.type = '0'
        return piece
    }
}

class Board {
    grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    putPiece(piece, line, column)
}