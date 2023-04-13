const Gameboard = (function() {
    const gameBoard = ['o','x','x','x','o','o','o','o','x'] ;
    return gameBoard;
})();

const display = (() => {
    const board = document.createElement('div');
    board.classList.add('board');
    const body = document.querySelector('body');
    body.appendChild(board);
    board.setAttribute('style' , 'font-size:2rem; margin-left:40%; color: white; display:grid; grid-template-rows: repeat(3, 100px); gap:5px; grid-template-columns: repeat(3, 100px);');
    const displayGameboard = Gameboard.forEach(element => {
        const div = document.createElement('div') ;
        div.classList.add('numberSpots');
        div.setAttribute('style','background-color:white; color:red; display:flex; justify-content:center; align-items:center; ')
        board.appendChild(div);
        
        
    });  
   return displayGameboard;    
})();

(function playerTurns(playerA,playerB){
    
    playerA = document.querySelectorAll('.numberSpots');
    
    playerA.forEach(element => {
        console.log(element);
        element.addEventListener('click',() => {
            element.innerHTML = 'X';
        })
    });
    
    playerB = document.querySelectorAll('.numberSpots');    
    playerB.forEach(element => {
        console.log(element);
        element.addEventListener('click',() => {
            element.innerHTML = 'O';
        })
    });

    
    
    
})();