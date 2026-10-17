// Animaciones: secciones que aparecen al bajar y números que cuentan solos.
// Si la persona pidió "reducir movimiento" en su compu o celular, no se anima nada.
(function () {
  var reducir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducir || !('IntersectionObserver' in window)) return;

  // 1) Secciones que aparecen al bajar
  var bloques = document.querySelectorAll('main section:not(.numeros-section) > .container, main section > .container-fluid, .numeros-section .col-6');
  bloques.forEach(function (el) { el.classList.add('revelar'); });

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observador.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  bloques.forEach(function (el) { observador.observe(el); });

  // 2) Números que cuentan de 0 al valor final (por ejemplo "+45" o "24 hs")
  var numeros = document.querySelectorAll('.numero');
  var contador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (!e.isIntersecting) return;
      contador.unobserve(e.target);
      var m = e.target.textContent.trim().match(/^(\D*)(\d+)(.*)$/);
      if (!m) return;
      var antes = m[1], hasta = parseInt(m[2], 10), despues = m[3];
      var inicio = null, duracion = 1400;
      function paso(t) {
        if (!inicio) inicio = t;
        var avance = Math.min((t - inicio) / duracion, 1);
        var suave = 1 - Math.pow(1 - avance, 3);
        e.target.textContent = antes + Math.round(hasta * suave) + despues;
        if (avance < 1) requestAnimationFrame(paso);
      }
      e.target.textContent = antes + '0' + despues;
      requestAnimationFrame(paso);
    });
  }, { threshold: 0.6 });
  numeros.forEach(function (el) { contador.observe(el); });
})();
