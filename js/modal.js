'use strict';
(function () {
  document
    .querySelector('.contact_sales')
    .addEventListener('click', showPrompt);

  function showPrompt() {
    showCover();
    let container = document.querySelector('.modal_form_container');
    let form = document.querySelector('#modal_form');
    container.style.display = 'flex';
    form.elements.text.focus();
    form.onsubmit = function () {
      let value = form.text.value;
      if (value == '') return false;
      complete();
      return false;
    };
    function complete() {
      hideCover();
      container.style.display = 'none';
      document.onkeydown = null;
    }
    document.onkeydown = function (e) {
      if (e.key == 'Escape') {
        complete(null);
      }
    };
  }

  function showCover() {
    let coverDiv = document.createElement('div');
    coverDiv.className = 'cover';
    document.body.style.overflowY = 'hidden';
    document.querySelector('.messaging').prepend(coverDiv);
  }

  function hideCover() {
    document.querySelector('.cover').remove();
    document.body.style.overflowY = '';
  }
})();
