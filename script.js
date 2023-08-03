let playerSymbol = 'X';
let gameOver = false;
let results;

const Board = (function () {
    const array = ['','','','','','','','',''];
    array.length = 9;
    const gameArray = function () {
        console.log(array);
        return array;
    }
    return {gameArray};  
})();


const gameBoard = Board.gameArray();


const MyPlayers = function () {
    function player1 () {
        playerSymbol = 'X';
        return playerSymbol;
    }

    function player2 (spot) {
        const playerSymbol = 'O';
        return playerSymbol;
    }
    return {player1, player2};
}


const Players = MyPlayers();


const displayController = (function () {
    const body = document.querySelector('body');
    const gameBoardDisp = document.createElement('div');
    gameBoardDisp.setAttribute('style', 'margin-left:30vw; display:grid; grid-template-rows: repeat(3, 80px); grid-template-columns: repeat(3, 80px); gap:2px;');
    body.appendChild(gameBoardDisp);
    results = document.createElement('div');
    results.setAttribute('id','9');
    results.setAttribute('style', 'margin-top:3rem; font-size: 2rem; font-weight: 900; color: #22c56f; font-family: helvetica;')
    body.appendChild(results);
    for (let i = 0; i < gameBoard.length; i++) {
        const boardDivs = document.createElement('div');
        boardDivs.setAttribute('id', `${i}`);
        boardDivs.setAttribute('style', 'background-color: #e4e4e7;');
        gameBoardDisp.appendChild(boardDivs);
        boardDivs.innerHTML = gameBoard[i];
        if (boardDivs.innerHTML == playerSymbol) {
            boardDivs.setAttribute('style', 'background-color:green;')
        }

        gameBoard[i] = boardDivs.innerHTML;
        
        boardDivs.addEventListener('click', function display () {
            if (boardDivs.innerHTML == '' && !gameOver){
                boardDivs.innerHTML = playerSymbol;
                if (playerSymbol === 'X'){
                    boardDivs.setAttribute('style','color:rgb(226, 42, 18); background-color:#fda4af; font-size: 1.7rem; font-weight:900; padding-top: 1.3rem;')
                } else {
                    boardDivs.setAttribute('style','color:green; background-color:#cbd5e1; font-size: 1.7rem; font-weight:900; padding-top: 1.3rem;')
                }               
            }     

            boardDivs.removeEventListener('click',display)
            gameFlow();   
            gameDrawn();
            if (playerSymbol == 'X' && !gameOver){
                playerSymbol = Players.player2();
            } else if (!gameOver) {
                playerSymbol = Players.player1();
            }
            console.log('hey')           
        })
    }
})();


const winPos = [ 
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [3, 4, 5], [1, 4, 7], [2, 4, 6],
    [6, 7, 8], [2, 5, 8]
    ];

const drawPos = [0, 1, 2, 3, 4, 5, 6, 7, 8];




const gameFlow = function () {
    for (let j = 0; j < winPos.length; j++) {
        if (
            document.getElementById(winPos[j][0]).innerHTML === playerSymbol && 
            document.getElementById(winPos[j][1]).innerHTML === playerSymbol && 
            document.getElementById(winPos[j][2]).innerHTML === playerSymbol) {
            document.getElementById(winPos[j][0]).setAttribute('style', 'color:white; background-color: #22c55e; font-size: 1.7rem; padding-top: 1.2rem; transform: scale(1.05);');
            document.getElementById(winPos[j][1]).setAttribute('style', 'color:white; background-color: #22c55e; font-size: 1.7rem; padding-top: 1.2rem; transform: scale(1.05);');
            document.getElementById(winPos[j][2]).setAttribute('style', 'color:white; background-color: #22c55e; font-size: 1.7rem; padding-top: 1.2rem; transform: scale(1.05);');
            if (playerSymbol === 'X') {
                playerSymbol = 'X';
            } else if (playerSymbol === 'O'){
                playerSymbol = 'O';
            }
            gameOver = true;
            setTimeout(function() {

                document.getElementById('9').textContent = 'GAME OVER!!! ' + playerSymbol + ' WINS';
                }, 500);
                }

        }
    }
 const gameDrawn = function () {
                    if(
            document.getElementById(drawPos[0]).innerHTML !== '' &&
            document.getElementById(drawPos[1]).innerHTML !== '' &&
            document.getElementById(drawPos[2]).innerHTML !== '' &&
            document.getElementById(drawPos[3]).innerHTML !== '' &&
            document.getElementById(drawPos[4]).innerHTML !== '' &&
            document.getElementById(drawPos[5]).innerHTML !== '' &&
            document.getElementById(drawPos[6]).innerHTML !== '' &&
            document.getElementById(drawPos[7]).innerHTML !== '' &&
            document.getElementById(drawPos[8]).innerHTML !== '' &&
            !gameOver
                )
            {
                gameOver = true;
                setTimeout(() => {
                    document.getElementById('9').setAttribute('style', 'color: red; margin-top:3rem; font-size: 2rem; font-weight: 900; font-family: helvetica;');
                    document.getElementById('9').textContent = "GAME OVER!!! IT'S A TIE!";;
                }, 300);
                console.log(document.getElementById(drawPos[3].innerHTML))
            }
            }