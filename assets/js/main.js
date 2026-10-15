/* =========================================================
   Centro Médico · Interacciones del sitio
   Sin librerías: JavaScript simple para que sea fácil de mantener.
   ========================================================= */

const WHATSAPP = "5491166743893"; // +54 9 11 6674-3893

document.addEventListener("DOMContentLoaded", () => {
  iniciarMenu();
  iniciarHeader();
  iniciarSlider();
  iniciarFiltrosCentros();
  iniciarFormularios();
  iniciarAparicion();
  document.querySelectorAll("[data-anio]").forEach((el) => (el.textContent = new Date().getFullYear()));
});

/* ---------- Menú (escritorio y celular) ---------- */
function iniciarMenu() {
  const nav = document.querySelector(".nav");
  const abrir = document.querySelector(".menu-boton");
  const cerrar = document.querySelector(".nav__cerrar");
  const fondo = document.querySelector(".fondo-menu");
  if (!nav || !abrir) return;

  const esMovil = () => window.matchMedia("(max-width: 1180px)").matches;

  const abrirMenu = () => {
    nav.classList.add("abierto");
    fondo?.classList.add("visible");
    document.body.classList.add("menu-abierto");
    abrir.setAttribute("aria-expanded", "true");
    cerrar?.focus();
  };
  const cerrarMenu = () => {
    nav.classList.remove("abierto");
    fondo?.classList.remove("visible");
    document.body.classList.remove("menu-abierto");
    abrir.setAttribute("aria-expanded", "false");
  };

  abrir.addEventListener("click", abrirMenu);
  cerrar?.addEventListener("click", cerrarMenu);
  fondo?.addEventListener("click", cerrarMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarMenu();
      cerrarSubmenus();
    }
  });

  // Submenús: en escritorio se abren con el mouse (CSS :hover);
  // con clic/toque funcionan en celular, tablet y teclado.
  const botones = nav.querySelectorAll(".nav__link[aria-haspopup]");
  function cerrarSubmenus(excepto) {
    botones.forEach((b) => b !== excepto && b.setAttribute("aria-expanded", "false"));
  }
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      const abierto = boton.getAttribute("aria-expanded") === "true";
      cerrarSubmenus(boton);
      boton.setAttribute("aria-expanded", String(!abierto));
    });
  });
  document.addEventListener("click", (e) => {
    if (!esMovil() && !e.target.closest(".nav__item")) cerrarSubmenus();
  });

  // Al tocar un enlace del menú en el celular, se cierra el panel.
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => esMovil() && cerrarMenu()));
}

/* ---------- Header: sombra al scrollear ---------- */
function iniciarHeader() {
  const header = document.querySelector(".header");
  if (!header) return;
  const actualizar = () => header.classList.toggle("con-sombra", window.scrollY > 8);
  actualizar();
  window.addEventListener("scroll", actualizar, { passive: true });
}

/* ---------- Banner con movimiento automático ---------- */
function iniciarSlider() {
  const slider = document.querySelector(".slider");
  if (!slider) return;
  const slides = [...slider.querySelectorAll(".slide")];
  const puntos = [...document.querySelectorAll(".slider__punto")];
  const anterior = document.querySelector("[data-slider-anterior]");
  const siguiente = document.querySelector("[data-slider-siguiente]");
  const pocoMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let actual = 0;
  let temporizador;

  const mostrar = (i) => {
    actual = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      s.classList.toggle("activo", n === actual);
      s.setAttribute("aria-hidden", String(n !== actual));
      s.querySelectorAll("a, button").forEach((el) => (el.tabIndex = n === actual ? 0 : -1));
    });
    puntos.forEach((p, n) => p.setAttribute("aria-current", String(n === actual)));
  };
  const iniciar = () => {
    if (pocoMovimiento) return;
    detener();
    temporizador = setInterval(() => mostrar(actual + 1), 6500);
  };
  const detener = () => clearInterval(temporizador);

  puntos.forEach((p, n) => p.addEventListener("click", () => { mostrar(n); iniciar(); }));
  anterior?.addEventListener("click", () => { mostrar(actual - 1); iniciar(); });
  siguiente?.addEventListener("click", () => { mostrar(actual + 1); iniciar(); });

  // Se pausa si la persona está leyendo o navegando con teclado.
  const hero = slider.closest(".hero");
  hero.addEventListener("mouseenter", detener);
  hero.addEventListener("mouseleave", iniciar);
  hero.addEventListener("focusin", detener);
  hero.addEventListener("focusout", iniciar);

  // Deslizar con el dedo en el celular
  let inicioX = null;
  slider.addEventListener("touchstart", (e) => (inicioX = e.touches[0].clientX), { passive: true });
  slider.addEventListener("touchend", (e) => {
    if (inicioX === null) return;
    const dx = e.changedTouches[0].clientX - inicioX;
    if (Math.abs(dx) > 50) { mostrar(actual + (dx < 0 ? 1 : -1)); iniciar(); }
    inicioX = null;
  });

  mostrar(0);
  iniciar();
}

/* ---------- Filtro de centros de atención ---------- */
function iniciarFiltrosCentros() {
  const filtros = document.querySelectorAll(".filtro");
  if (!filtros.length) return;
  const centros = document.querySelectorAll(".centro[data-tipo]");
  filtros.forEach((f) =>
    f.addEventListener("click", () => {
      filtros.forEach((x) => x.setAttribute("aria-pressed", String(x === f)));
      const tipo = f.dataset.filtro;
      centros.forEach((c) => (c.hidden = tipo !== "todos" && c.dataset.tipo !== tipo));
    })
  );
}

/* ---------- Formularios ----------
   GitHub Pages no tiene servidor, así que al enviar armamos un mensaje
   y lo abrimos en WhatsApp con los datos ya cargados. Así la consulta
   siempre llega. (Si más adelante quieren recibirlo por mail, se puede
   conectar un servicio como Formspree cambiando el "action" del form.) */
function iniciarFormularios() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    const estado = form.querySelector(".form__estado");

    const mensajes = {
      nombre: "Contanos tu nombre y apellido.",
      email: "Revisá tu email, parece que le falta algo (ej: nombre@gmail.com).",
      telefono: "Ingresá un celular con código de área (ej: 11 2345-6789).",
      nacimiento: "Indicá la fecha de nacimiento.",
      mensaje: "Escribinos tu consulta, así te ayudamos mejor.",
    };

    const validar = (campo) => {
      const input = campo.querySelector("input, select, textarea");
      if (!input) return true;
      let ok = input.checkValidity();
      if (input.name === "telefono" && input.value) ok = input.value.replace(/\D/g, "").length >= 8;
      campo.classList.toggle("invalido", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      const error = campo.querySelector(".campo__error");
      if (error && !ok) error.textContent = mensajes[input.name] || "Completá este campo.";
      return ok;
    };

    form.querySelectorAll(".campo").forEach((campo) => {
      const input = campo.querySelector("input, select, textarea");
      input?.addEventListener("blur", () => input.value && validar(campo));
      input?.addEventListener("input", () => campo.classList.contains("invalido") && validar(campo));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const campos = [...form.querySelectorAll(".campo")];
      const validos = campos.map(validar).every(Boolean);
      if (!validos) {
        estado.className = "form__estado mal";
        estado.textContent = "Nos faltan algunos datos. Revisá los campos marcados en rojo.";
        form.querySelector(".invalido input, .invalido select, .invalido textarea")?.focus();
        return;
      }
      const datos = new FormData(form);
      const asunto = form.dataset.form;
      const lineas = [`¡Hola! Quiero hacer una consulta (${asunto}).`];
      for (const [clave, valor] of datos.entries()) {
        if (!valor) continue;
        const etiqueta = form.querySelector(`[name="${clave}"]`)?.closest(".campo")?.querySelector("label")?.innerText.replace("*", "").trim();
        lineas.push(`• ${etiqueta || clave}: ${valor}`);
      }
      estado.className = "form__estado ok";
      if (form.dataset.envio === "mail") {
        // Búsquedas laborales: va por mail para poder adjuntar el CV.
        const cuerpo = encodeURIComponent(lineas.join("\n") + "\n\n(Adjunto mi CV)");
        window.location.href = `mailto:info@centromedicomg.com.ar?subject=${encodeURIComponent(asunto)}&body=${cuerpo}`;
        estado.textContent = "¡Gracias! Abrimos tu correo con los datos cargados. Adjuntá tu CV y tocá \"Enviar\".";
      } else {
        const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join("\n"))}`;
        window.open(url, "_blank", "noopener");
        estado.textContent = "¡Listo! Abrimos WhatsApp con tus datos. Solo tenés que tocar \"Enviar\" y un asesor te responde a la brevedad.";
      }
      form.reset();
    });
  });
}

/* ---------- Aparición suave al scrollear ---------- */
function iniciarAparicion() {
  const elementos = document.querySelectorAll(".aparecer");
  if (!("IntersectionObserver" in window)) {
    elementos.forEach((el) => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          obs.unobserve(en.target);
        }
      }),
    { threshold: 0.12 }
  );
  elementos.forEach((el) => obs.observe(el));
}
