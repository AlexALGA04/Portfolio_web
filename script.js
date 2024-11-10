function checkScreenSize() {
    if (window.innerWidth > 1060) {
        var submenu = document.getElementById('submenu');
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        }
    }
}  

window.addEventListener('resize', checkScreenSize);

checkScreenSize();

function toggleMenu() {
    var submenu = document.getElementById('submenu');
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  }
  