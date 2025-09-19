const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    const nextPage = option.getAttribute('data-next');
    window.location.href = nextPage;
  });
});


