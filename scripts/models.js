const closeBtn = document.querySelector(
  '.popup-model1__wrapper__close'
);
const closeBtn2 = document.querySelector(
  '.popup-model2__wrapper__close'
);
const closeBtn3 = document.querySelector(
  '.popup-model3__wrapper__close'
);

const model1Popup = document.querySelector('.popup-model1');
const model2Popup = document.querySelector('.popup-model2');
const model3Popup = document.querySelector('.popup-model3');

const openigButton = document.querySelector(
  '.upper-div__button'
);
const actionButton = document.querySelector('.actions');

const openModel3 = document.querySelector(
  '.main-div__container'
);

openigButton.addEventListener('click', (e) => {
  model1Popup.style.display = 'inherit';
});

closeBtn.addEventListener('click', (e) => {
  model1Popup.style.display = 'none';
});
actionButton.addEventListener('click', (e) => {
  model2Popup.style.display = 'inherit';
});

closeBtn2.addEventListener('click', (e) => {
  model2Popup.style.display = 'none';
});
openModel3.addEventListener('click', (e) => {
  model3Popup.style.display = 'inherit';
});

closeBtn3.addEventListener('click', (e) => {
  model3Popup.style.display = 'none';
});
