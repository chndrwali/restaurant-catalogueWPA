const DrawerInitiator = {
  init({ button, drawer, content }) {
    // Pastikan button, drawer, dan content ada sebelum menambahkan event listener
    if (button && drawer && content) {
      button.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });

      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    } else {
      console.error('Button, drawer, or content element not found!');
    }
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('hidden');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('hidden');
  },
};

export default DrawerInitiator;
