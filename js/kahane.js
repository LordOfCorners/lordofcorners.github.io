var body = document.body;
var nav = document.getElementById('nav');
var navItems = document.querySelectorAll('.menu_pages');
var lastNavItem = navItems[navItems.length - 1];

nav.addEventListener(
  'click',
  function (e) {
    e.preventDefault();
    body.classList.toggle('open');
  },
  false
);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    body.classList.remove('open');
    return;
  }

  var isTabPressed = e.key === 'Tab' || e.key === 'Tab';

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    /* shift + tab */ if (document.activeElement === nav) {
      lastNavItem.focus();
      e.preventDefault();
    }
  } /* tab */ else {
    if (document.activeElement === lastNavItem) {
      nav.focus();
      e.preventDefault();
    }
  }
});

nav.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    nav.click();
  }
});
