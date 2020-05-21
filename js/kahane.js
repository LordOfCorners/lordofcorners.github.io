var body = document.body;
var nav = document.getElementById('nav');
var navItems = document.querySelectorAll('.menu_pages');
var lastNavItem = navItems[navItems.length - 1];
var KEYCODE_TAB = 9;

nav.addEventListener(
  'click',
  function () {
    event.preventDefault();
    body.classList.toggle('open');
  },
  false
);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') body.classList.remove('open');

  var isTabPressed = event.key === 'Tab' || event.key === 'Tab';

  if (!isTabPressed) {
    return;
  }

  if (event.shiftKey) {
    /* shift + tab */ if (document.activeElement === nav) {
      lastNavItem.focus();
      event.preventDefault();
    }
  } /* tab */ else {
    if (document.activeElement === lastNavItem) {
      nav.focus();
      event.preventDefault();
    }
  }
});

nav.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    nav.click();
  }
});
