// Module for landing page
(function () {
  let landingPage = {
    init: function () {
      this.allDOM();
      this.bindEvents();
    },

    allDOM: function () {
      this.startBtn = document.getElementById('start-app');
      this.landPage = document.querySelector('.start-page');
    },

    bindEvents: function () {
      this.startBtn.addEventListener('click', this.startApp.bind(this));
    },

    startApp: function () {
      this.landPage.classList.add('erase');
    },
  };

  landingPage.init();
})();
