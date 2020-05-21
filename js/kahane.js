var body = document.body;
var logo = document.getElementById('logo');
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
  var isTabPressed = event.key === 'Tab' || event.keyCode === KEYCODE_TAB;

  if (!isTabPressed) {
    return;
  }

  if (event.shiftKey) {
    /* shift + tab */ if (document.activeElement === logo) {
      lastNavItem.focus();
      event.preventDefault();
    }
  } /* tab */ else {
    if (document.activeElement === lastNavItem) {
      logo.focus();
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
