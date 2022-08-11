let board = [];
let turn = true; // true for "X" and false for "O"
let win = null;
const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

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

    const checkWin = () => {
        let winner = null;
    
        winningPatterns.forEach( (combo, index) => {
            if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
                winner = board[combo[0]];
            }
        });
    
        return winner ? winner : board.includes('') ? null : 'Tie';
    };

    return {board , render , checkWin};
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
   
    win = renderBoard.checkWin();

    const displayWin = document.getElementById('player');

    if (win !== null && win !== 'Tie'){
    
        displayWin.textContent = `${win} has won the game`; 
    }
    else if(win ==='Tie')
    {
        displayWin.textContent = `${win}`
    }
});
