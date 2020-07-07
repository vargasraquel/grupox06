let open = false;
let banana123 = true;

function toggleModal() {
  if (!banana123) return;
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
  if (!banana123) return;
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
  banana123 = false;
  setTimeout(() => (banana123 = true), 5000);
}
