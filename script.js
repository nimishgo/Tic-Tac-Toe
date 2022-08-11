let board = [];

const renderBoard = (() => {
    board = [ 'X' ,'O' , 'X',
              'O' ,'O' , 'O',
              'X' ,'X' , 'O'];

    const render = () => {
        board.forEach( (value,index) => {
                console.log(value,index);
        });
    }

    return {board , render};
})(); 

const cells = Array.from(document.querySelectorAll('#cells'));