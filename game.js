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

    board: [],

    allDOMs: function () {
      this.squares = document.querySelectorAll('.square');
    },

    bindEvents: function () {
      this.squares.forEach((square) => {
        square.addEventListener('click', this.changeSquare);
      });
    },

    changeSquare: function (e) {
      e.target.textContent = 'X';
    },
  };

  game.init();
})();
