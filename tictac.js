const cells = Array.from(document.querySelectorAll('.cell'));
const message = document.getElementById('message');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';
let gameActive = true;

function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cells[index].classList.add(currentPlayer);
        cells[index].innerText = currentPlayer.toUpperCase();
        
        if (checkWin()) {
            message.innerText = `Player ${currentPlayer.toUpperCase()} Wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            message.innerText = 'Draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    return winPatterns.some(pattern => 
        board[pattern[0]] === currentPlayer &&
        board[pattern[1]] === currentPlayer &&
        board[pattern[2]] === currentPlayer
    );
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.innerText = '';
    });
    message.innerText = '';
    currentPlayer = 'x';
    gameActive = true;
}
