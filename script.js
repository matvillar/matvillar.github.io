let buttons = document.querySelectorAll('.btn-container button');
let card2 = document.querySelector('.card-2');
let card = document.querySelector('.card');
let span = document.querySelector('span');
const submit = document.querySelector('.submit-btn');
let small = document.querySelector('.hidden');
// Submit event listener
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const rating = e.target.textContent;
    span.textContent = rating;
    buttons.forEach(rateElem => {
      rateElem.classList.remove('selected');
    });
    btn.classList.toggle('selected');

    submit.addEventListener('click', function () {
      card2.classList.remove('hide');
      card.classList.add('hide');
    });
  });
});
