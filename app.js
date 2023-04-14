const openModalBtns = document.querySelectorAll('.services__item-btn');
const closeModalBtns = document.querySelectorAll('.btn-close');
const overlays = document.querySelectorAll('.overlay');
openModalBtns.forEach((openModalBtn) =>
  openModalBtn.addEventListener('click', open)
);

closeModalBtns.forEach((closeModalBtn) =>
  closeModalBtn.addEventListener('click', close)
);

overlays.forEach((overlay) => overlay.addEventListener('click', closeOverlay));

function open(event) {
  const tabTarget = event.currentTarget;
  const content = tabTarget.dataset.content;

  console.log(content);

  const modal = document.querySelector(`#${content}`);
  console.log(modal);
  const overlay = modal.nextElementSibling;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function close(event) {
  const modal = event.target.closest('.modal');
  const overlay = modal.nextElementSibling;
  //   console.log(modal);
  //   console.log(overlay);

  modal.classList.add('hidden');

  overlay.classList.add('hidden');
}

function closeOverlay(event) {
  const overlay = event.target.closest('.overlay');
  const modal = overlay.previousElementSibling;
  //   console.log(modal);
  //   console.log(overlay);

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
