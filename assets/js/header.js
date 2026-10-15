// Marca el header cuando la página se scrolleó, para achicar el logo y sumar una sombra.
(function () {
  var header = document.querySelector('header');
  if (!header) return;
  function actualizar() {
    header.classList.toggle('header-scrolled', window.scrollY > 40);
  }
  actualizar();
  window.addEventListener('scroll', actualizar, { passive: true });
})();
