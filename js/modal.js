let open = false;
let closeModal1 = true;

function toggleModal() {
  if (!closeModal1) return;
  const modal = document.querySelector('#retention-modal');

  if (modal) {
    modal.classList.toggle('hidden');
  }

  open = !open;
}

window.onload = function () {
  const overlay = document.querySelector('.modal-overlay');
  const closeButton = document.querySelector('#close-button');

  overlay.addEventListener('click', lockAndClose);
  closeButton.addEventListener('click', lockAndClose);
};

window.addEventListener('mousemove', ({ clientY }) => {
  if (!closeModal1) return;
  if (clientY < 1 && !open) {
    toggleModal();
  }
});

window.onkeydown = ({ which }) => {
  if (which === 27 && open) {
    toggleModal();
  }
};



function lockAndClose() {
  toggleModal();
  closeModal1 = false;
  setTimeout(() => (closeModal1 = true), 5000);
}
