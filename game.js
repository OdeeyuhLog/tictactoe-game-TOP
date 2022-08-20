// Module for landing page
(function () {
  let landingPage = {
    init: function () {
      this.allDOM();
      this.bindEvents();
    },

    // Cache for the DOM elements involved
    allDOM: function () {
      this.startBtn = document.getElementById('start-app');
      this.landPage = document.querySelector('.start-page');
    },

    // Event listeners
    bindEvents: function () {
      this.startBtn.addEventListener('click', this.startApp.bind(this));
    },

    // Removes the landing page
    startApp: function () {
      this.landPage.classList.add('erase');
      setTimeout(this.removePage.bind(this), 3000);
    },

    removePage: function () {
      this.landPage.classList.add('gone');
    },
  };

  landingPage.init();
})();

// Module for tic-tac-toe game
(function () {
  let game = {
    init: function () {
      this.allDOMs();
      this.bindEvents();
    },

    //Default and constant Values
    board: ['', '', '', '', '', '', '', '', ''],
    p1_board: [],
    p2_board: [],
    currentTurn: 'X',
    currentPlayer: 1,
    winningConditions: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],

    allDOMs: function () {
      this.squares = document.querySelectorAll('.square');
      this.showPlayerTurn = document.getElementById('playerTurn');
      this.resultModal = document.getElementById('modal');
      this.resultText = document.getElementById('show-winner');
      this.overlay = document.getElementById('overlay');
    },

    bindEvents: function () {
      this.squares.forEach((square) => {
        square.addEventListener('click', this.render.bind(this));
      });
    },

    render: function (e) {
      // If square already had an O/X, it can't be changed.
      if (e.target.textContent === '') {
        e.target.textContent = this.currentTurn;
        this.chosenSquare(e.target.dataset.attribute);
        this.showWinner();
        this.changeTurn();
      } else return;

      console.log(this.board);
      console.log(this.p1_board);
      console.log(this.p2_board);
      console.log(this.currentPlayer);
    },

    changeTurn: function () {
      // Display X and O alternately.
      if (this.currentTurn === 'X') {
        this.currentTurn = 'O';
      } else if (this.currentTurn === 'O') {
        this.currentTurn = 'X';
      }

      if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
      } else if (this.currentPlayer === 2) {
        this.currentPlayer = 1;
      }

      this.showPlayerTurn.textContent = `Player ${this.currentPlayer}'s turn`;
    },

    chosenSquare: function (chosenElement) {
      if (this.currentPlayer === 1) {
        this.p1_board.push(chosenElement);
      } else if (this.currentPlayer === 2) {
        this.p2_board.push(chosenElement);
      }

      this.board[chosenElement] = this.currentPlayer;
    },

    checkWin: function () {
      for (let i = 0; i <= 7; i++) {
        const winCondition = this.winningConditions[i];
        let a = this.board[winCondition[0]];
        let b = this.board[winCondition[1]];
        let c = this.board[winCondition[2]];

        if (a === '' || b === '' || c === '') {
          continue;
        }

        if (a === b && b === c) {
          return true;
        }
      }
    },

    showWinner: function () {
      if (this.checkWin()) {
        this.renderModal(`PLAYER ${this.currentPlayer} WINS!`);
      } else if (this.checkTie) {
        this.renderModal(`IT'S A TIE!`);
      } else return;
    },

    renderModal: function (result) {
      this.resultText.textContent = result;
      this.resultModal.style.display = 'flex';
      this.overlay.style.display = 'block';
    },
  };

  game.init();
})();
