let board = [];
let turn = true; // true for "X" and false for "O"

const cells = [...document.querySelectorAll('#cells')];

const renderBoard = (() => {
    board = [ '' ,'' , '',
              '' ,'' , '',
              '' ,'' , ''];

    const render = () => {
        board.forEach( (value,index) => {
            cells[index].textContent = value;
        });

        (turn) ? turn = false : turn = true;
    };
    return {board , render};
})(); 

const playerTurns = document.getElementById('gameGrid'); 

playerTurns.addEventListener('click' , (e) => {
    let index = cells.findIndex( (cells) => {
        // console.log(e.target , cells ,e.target === e.target);
         return cells === e.target;
    });    
    // console.log(index);
    if(board[index] === '')
    {
        (turn) ? board[index] =  "✅":  board[index] = "❎";
        renderBoard.render();
    }

    // renderBoard.render();
});