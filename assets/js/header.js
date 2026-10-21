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
// Botón de WhatsApp: a los 8 segundos muestra un globito de ayuda (una sola vez por visita).
(function () {
  var wapp = document.querySelector('.wapp');
  if (!wapp) return;
  var link = wapp.querySelector('a');
  try { if (sessionStorage.getItem('wappGlobo')) return; } catch (e) {}
  var globo = document.createElement('div');
  globo.className = 'wapp-globo';
  globo.setAttribute('role', 'status');
  globo.innerHTML = '<a href="' + link.href + '" target="_blank" rel="noopener">¿Te ayudamos a elegir tu plan?<span>Escribinos por WhatsApp</span></a>' +
    '<button type="button" class="wapp-globo-cerrar" aria-label="Cerrar">&times;</button>';
  wapp.appendChild(globo);
  function cerrar() {
    globo.classList.remove('visible');
    try { sessionStorage.setItem('wappGlobo', '1'); } catch (e) {}
  }
  globo.querySelector('button').addEventListener('click', cerrar);
  globo.querySelector('a').addEventListener('click', cerrar);
  link.addEventListener('click', cerrar);
  setTimeout(function () {
    globo.classList.add('visible');
    try { sessionStorage.setItem('wappGlobo', '1'); } catch (e) {}
  }, 8000);
})();
