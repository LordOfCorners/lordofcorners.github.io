document.addEventListener(
  'click',
  function (event) {
    if (
      !event.target.matches('.hamburger') &&
      !event.target.matches('.burger-bar')
    )
      return;
    document.body.classList.toggle('open');
  },
  false
);
