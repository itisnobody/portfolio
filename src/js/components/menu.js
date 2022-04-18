const navMenu = function() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.menu__close');
  const overlay = document.querySelector('.menu__overlay');
  const menuItems = document.querySelectorAll('.menu__link');
  const classRemoveHeandler = () => {
    menu.classList.remove('active')
  };

  burger.addEventListener('click', () => {
    menu.classList.add('active');
  });
  close.addEventListener('click', classRemoveHeandler);
  overlay.addEventListener('click', classRemoveHeandler);
  menuItems.forEach(i => i.addEventListener('click', classRemoveHeandler));
};

export default navMenu;
