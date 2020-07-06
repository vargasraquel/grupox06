let open = false;

    function toggleModal(close = true) {
      const modal = document.querySelector('#retention-modal');

      if (modal) {
        modal.classList.toggle('hidden');
      }

      open = close;
    }

    window.onload = function () {
      document.querySelector('#btn-start').addEventListener('click', () => {
        window.location.href = "https://futuramentemaker.com/index.html"
      });

      const overlay = document.querySelector('.modal-overlay');
      const closeButton = document.querySelector('#close-button');

      overlay.addEventListener('click', () => toggleModal(false));
      closeButton.addEventListener('click', () => toggleModal(false));
    }

    window.addEventListener('mousemove', ({ clientY }) => {
      if (clientY < 100 && !open) {
        toggleModal()
        open = true;
      }
    });

    window.onkeydown = ({ which }) => {
      if (which === 27 && open) {
        toggleModal(false);
      }
    }
