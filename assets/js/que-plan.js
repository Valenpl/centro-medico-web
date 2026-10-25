// "¿Qué plan me conviene?": 3 preguntas que recomiendan un plan y arman el mensaje para WhatsApp.
(function () {
  var caja = document.getElementById('quePlan');
  if (!caja) return;
  var WA = 'https://wa.me/541166743893';
  var PLANES = {
    promedam: { nombre: 'Plan Promedam', url: 'plan-promedam.html', por: 'Es para el día a día: consultas, guardia y urgencias a domicilio, sin internación. No tiene límite de edad.' },
    plata: { nombre: 'Plan Plata', url: 'plan-plata.html', por: 'Incluye internación en habitación compartida y es el más accesible de los que tienen internación.' },
    oro: { nombre: 'Plan Oro', url: 'plan-oro.html', por: 'Tiene internación en habitación individual, consultas sin bono y un estudio simple al año sin cargo.' },
    first: { nombre: 'Plan First', url: 'plan-first.html', por: 'Es nuestra cobertura más completa: habitación individual, consultas sin bono y tomografías y resonancias sin cargo.' },
    promi: { nombre: 'Plan Promi', url: 'plan-promi.html', por: 'Está pensado para el embarazo y el nacimiento: habitación individual, guardia 24 horas y neonatología hasta las 72 horas del bebé.' },
    junior: { nombre: 'Plan Junior', url: 'plan-junior.html', por: 'Los chicos tienen los beneficios de Plata u Oro con una afiliación propia, sin afiliar a un adulto.' },
    empresa: { nombre: 'Plan Empresa', url: 'plan-empresa.html', por: 'Está pensado para cubrir a tu equipo de trabajo.' }
  };
  var respuestas = {};
  var preguntas = {
    para: caja.querySelector('[data-pregunta="para"]'),
    edad: caja.querySelector('[data-pregunta="edad"]'),
    busca: caja.querySelector('[data-pregunta="busca"]')
  };
  var resultado = document.getElementById('quePlanResultado');

  function texto(pregunta) {
    var b = preguntas[pregunta].querySelector('button[aria-pressed="true"]');
    return b ? b.textContent.toLowerCase() : '';
  }

  function visibles() {
    var para = respuestas.para;
    var lista = ['para'];
    if (para === 'mi' || para === 'familia' || para === 'embarazada') lista.push('edad');
    if (para === 'mi' || para === 'familia') lista.push('busca');
    return lista;
  }

  function actualizar() {
    var lista = visibles();
    var n = 0;
    Object.keys(preguntas).forEach(function (k) {
      var ver = lista.indexOf(k) !== -1;
      preguntas[k].hidden = !ver;
      if (ver) preguntas[k].querySelector('.que-plan-num').textContent = (++n) + '.';
    });
    // "Sin internación" (Promedam) es solo para una persona
    preguntas.busca.querySelector('[data-valor="promedam"]').hidden = respuestas.para === 'familia';
    if (respuestas.para === 'familia' && respuestas.busca === 'promedam') borrar('busca');

    var completo = lista.every(function (k) { return respuestas[k]; });
    if (!completo) { resultado.hidden = true; return; }
    mostrar();
  }

  function borrar(k) {
    delete respuestas[k];
    preguntas[k].querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
  }

  function mostrar() {
    var para = respuestas.para, edad = respuestas.edad;
    var id = para === 'hijos' ? 'junior' : para === 'empresa' ? 'empresa' : para === 'embarazada' ? 'promi' : respuestas.busca;
    var nota = '';
    if (para === 'embarazada' && edad !== 'menos38') { id = null; nota = 'El Plan Promi es hasta los 38 años. Escribinos y te ayudamos a encontrar la mejor opción para tu embarazo.'; }
    if (edad === '65mas' && ['plata', 'oro', 'first'].indexOf(id) !== -1) nota = 'Por tu edad, consultá con un asesor qué opciones de internación tenés.';

    var resumen = [texto('para')];
    if (!preguntas.edad.hidden) resumen.push('edad: ' + texto('edad'));
    if (!preguntas.busca.hidden) resumen.push('busco: ' + texto('busca'));
    var plan = id ? PLANES[id] : null;
    var msg = 'Hola, respondí las preguntas de la web (' + resumen.join('; ') + ').' +
      (plan ? ' Me recomendó el ' + plan.nombre + '.' : '') + ' ¿Me pueden asesorar?';

    var html = '';
    if (plan) html += '<p class="que-plan-reco">Te recomendamos el <strong>' + plan.nombre + '</strong>.</p><p>' + plan.por + '</p>';
    if (nota) html += '<p class="que-plan-nota">' + nota + '</p>';
    html += '<div class="que-plan-acciones">';
    if (plan) html += '<a class="btn-primary-custom" href="' + plan.url + '">Ver el ' + plan.nombre + '</a>';
    html += '<a class="btn-outline-primary-custom" href="' + WA + '?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener">Consultar por WhatsApp</a>';
    html += '</div><button type="button" class="que-plan-reiniciar">Volver a empezar</button>';
    resultado.innerHTML = html;
    resultado.hidden = false;
    resultado.querySelector('.que-plan-reiniciar').addEventListener('click', function () {
      Object.keys(preguntas).forEach(borrar);
      actualizar();
      preguntas.para.querySelector('button').focus();
    });
  }

  Object.keys(preguntas).forEach(function (k) {
    preguntas[k].querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        preguntas[k].querySelectorAll('button').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        respuestas[k] = b.dataset.valor;
        actualizar();
      });
    });
  });
  actualizar();
})();
