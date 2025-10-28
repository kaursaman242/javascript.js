let size=8
let chessboard=''
for (let row = 0; row < size; row++) {
for (let column = 0; column < size; column++) {
    if ((row+column)%2===0) {
        chessboard='#'
    }else{
        chessboard=''
    }
}
  chessboard += "/n"
}
console.log(chessboard)
