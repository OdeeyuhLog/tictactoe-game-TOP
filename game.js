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

    board: ['', '', '', '', '', '', '', '', ''],
    p1_board: [],
    p2_board: [],

    currentTurn: 'X',
    currentPlayer: 1,

    allDOMs: function () {
      this.squares = document.querySelectorAll('.square');
      this.showPlayerTurn = document.getElementById('playerTurn');
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
  };

  game.init();
})();
