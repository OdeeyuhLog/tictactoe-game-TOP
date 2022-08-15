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
