document.addEventListener('DOMContentLoaded', () => {
  const glowFollow = document.querySelector('.glow-follow');
  const size = 1;

  document.addEventListener('mousemove', (e) => {
      glowFollow.style.visibility = 'visible';
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      glowFollow.style.transform = `translate(${mouseX - size / 2}px, ${mouseY - size / 2}px)`;
  });
});

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
  