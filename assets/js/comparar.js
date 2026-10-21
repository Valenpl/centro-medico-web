// Comparación de planes: datos tomados de las tablas de cobertura de cada plan.
// Si cambia una tabla de un plan, hay que actualizarla también acá.
(function () {
  var DATOS = {
 "planes": [
  {
   "id": "promedam",
   "para": "Para vos · sin límite de edad",
   "nombre": "Promedam",
   "url": "plan-promedam.html"
  },
  {
   "id": "plata",
   "para": "Para vos y tu familia · accesible",
   "nombre": "Plata",
   "url": "plan-plata.html"
  },
  {
   "id": "oro",
   "para": "Para vos y tu familia · beneficios exclusivos",
   "nombre": "Oro",
   "url": "plan-oro.html"
  },
  {
   "id": "first",
   "para": "Para vos y tu familia · la más completa",
   "nombre": "First",
   "url": "plan-first.html"
  },
  {
   "id": "empresa",
   "para": "Para empresas y sus equipos",
   "nombre": "Empresa",
   "url": "plan-empresa.html"
  }
 ],
 "temas": [
  {
   "nombre": "Consultas",
   "icono": "fa-user-doctor",
   "filas": [
    {
     "p": "Ambulatoria y guardia",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    }
   ]
  },
  {
   "nombre": "Estudios simples",
   "icono": "fa-vial",
   "filas": [
    {
     "p": "Laboratorio simple",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span> <span class=\"cob-nota\">1 por año sin cargo</span>"
     }
    },
    {
     "p": "Colpo/PAP",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>"
     }
    },
    {
     "p": "RX simple",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Ergometría (12 deriv.)",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>"
     }
    },
    {
     "p": "Mamografía bilateral",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>"
     }
    },
    {
     "p": "Holter",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>"
     }
    },
    {
     "p": "Ecografía (baja compl.)",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Ecografía (alta compl.)",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span>"
     }
    },
    {
     "p": "Eco Transvaginal",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>"
     }
    },
    {
     "p": "Electrocardiograma (ECG)",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    }
   ]
  },
  {
   "nombre": "Estudios de mayor complejidad",
   "icono": "fa-x-ray",
   "filas": [
    {
     "p": "RX Contrastadas-Seriadas",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span> <span class=\"cob-nota\">sin material de contraste</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Laboratorio Alta Compl.",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Tomografías",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año sin cargo</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año sin cargo (1 zona)</span>"
     }
    },
    {
     "p": "Resonancia (RNM)",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span> <span class=\"cob-nota\">1 por año sin cargo</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año sin cargo</span>"
     }
    },
    {
     "p": "Densitometría",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año sin cargo</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año sin cargo (2 zonas)</span>"
     }
    },
    {
     "p": "Otras de alta complejidad (no nomencladas)",
     "c": {
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año sin cargo</span>",
      "first": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>"
     }
    },
    {
     "p": "Otras no nomencladas",
     "c": {
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año sin cargo</span>"
     }
    }
   ]
  },
  {
   "nombre": "Medicamentos",
   "icono": "fa-pills",
   "filas": [
    {
     "p": "Farmacias adheridas",
     "c": {
      "promedam": "Hasta 20% dto.",
      "plata": "Hasta 40% dto.",
      "oro": "Hasta 40% dto.",
      "first": "Hasta 40% dto.",
      "empresa": "Hasta 40% dto."
     }
    }
   ]
  },
  {
   "nombre": "Odontología",
   "icono": "fa-tooth",
   "filas": [
    {
     "p": "Consulta",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Consulta guardia",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Ortodoncia - prótesis",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "first": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Tratamiento de conducto",
     "c": {
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    }
   ]
  },
  {
   "nombre": "Rehabilitación y salud mental",
   "icono": "fa-hand-holding-heart",
   "filas": [
    {
     "p": "Kinesiología y Fisiatría",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">10 por año sin cargo</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">10 por año sin cargo</span>"
     }
    },
    {
     "p": "Psicología",
     "c": {
      "promedam": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>",
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año sin cargo</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>"
     }
    },
    {
     "p": "Fonoaudiología",
     "c": {
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">10 por año sin cargo</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año</span>"
     }
    },
    {
     "p": "Psiquiatría",
     "c": {
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-st\">Sin tope</span>"
     }
    },
    {
     "p": "Psicodiagnósticos",
     "c": {
      "plata": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "first": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>",
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">1 por año</span>"
     }
    },
    {
     "p": "Psicopedagogía",
     "c": {
      "oro": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span> <span class=\"cob-nota\">30 por año sin cargo</span>"
     }
    },
    {
     "p": "Fonoaudiología/psicopedagogía",
     "c": {
      "empresa": "<span class=\"cob cob-cc\">Con cargo</span> <span class=\"cob cob-ct\">Con tope</span>"
     }
    }
   ]
  },
  {
   "nombre": "Embarazo y parto",
   "icono": "fa-person-pregnant",
   "filas": [
    {
     "p": "Atención Integral",
     "c": {
      "plata": "<span class=\"cob cob-sc\">Sin cargo</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span>"
     }
    }
   ]
  },
  {
   "nombre": "Recién nacido",
   "icono": "fa-baby",
   "filas": [
    {
     "p": "Cobertura",
     "c": {
      "plata": "<span class=\"cob cob-sc\">Sin cargo</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob-nota\">según PMO</span> <span class=\"cob-nota\">Habitación individual</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-st\">Sin tope</span> <span class=\"cob-nota\">Normal</span>",
      "empresa": "<span class=\"cmp-confirmar\">A confirmar</span>"
     }
    }
   ]
  },
  {
   "nombre": "Internación en Clínica Monte Grande",
   "icono": "fa-bed-pulse",
   "filas": [
    {
     "p": "Habitación compartida",
     "c": {
      "plata": "<span class=\"cob cob-sc\">Sin cargo</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span>"
     }
    },
    {
     "p": "Habitación individual",
     "c": {
      "first": "<span class=\"cob cob-sc\">Sin cargo</span>"
     }
    }
   ]
  },
  {
   "nombre": "Cobertura en viajes",
   "icono": "fa-plane",
   "filas": [
    {
     "p": "Nacional",
     "c": {
      "plata": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span>",
      "oro": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span>",
      "first": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span>",
      "empresa": "<span class=\"cob cob-sc\">Sin cargo</span> <span class=\"cob cob-ct\">Con tope</span>"
     }
    }
   ]
  }
 ]
};
  var raiz = document.getElementById('comparador');
  if (!raiz) return;
  var selects = raiz.querySelectorAll('.cmp-select');
  var tabla = raiz.querySelector('.cmp-tabla');
  var abiertos = {0: true};

  // Hasta 3 planes, sin repetir
  function elegidos() {
    var ids = [];
    selects.forEach(function (s) { if (s.value && ids.indexOf(s.value) === -1) ids.push(s.value); });
    return ids.map(function (id) { return DATOS.planes.filter(function (p) { return p.id === id; })[0]; });
  }

  function dibujar() {
    var planes = elegidos();
    var html = '<thead><tr><th scope="col"><span class="visually-hidden">Prestación</span></th>';
    planes.forEach(function (p) { html += '<th scope="col"><a href="' + p.url + '">' + p.nombre + '</a><span class="cmp-para">' + p.para + '</span></th>'; });
    html += '</tr></thead>';
    DATOS.temas.forEach(function (t, i) {
      var abierto = !!abiertos[i];
      html += '<tbody><tr class="cmp-tema"><th colspan="' + (planes.length + 1) + '" scope="colgroup">' +
        '<button type="button" data-tema="' + i + '" aria-expanded="' + abierto + '">' + t.nombre +
        '<i class="fas fa-chevron-down" aria-hidden="true"></i></button></th></tr>';
      t.filas.forEach(function (f) {
        html += '<tr' + (abierto ? '' : ' hidden') + '><th scope="row">' + f.p + '</th>';
        planes.forEach(function (p) { html += '<td>' + (f.c[p.id] || '<span class="cmp-nofigura">—</span>') + '</td>'; });
        html += '</tr>';
      });
      html += '</tbody>';
    });
    tabla.className = 'cmp-tabla cmp-' + planes.length;
    tabla.innerHTML = html;
  }

  tabla.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-tema]');
    if (!b) return;
    var i = +b.dataset.tema;
    abiertos[i] = !abiertos[i];
    b.setAttribute('aria-expanded', abiertos[i]);
    var fila = b.closest('tr').nextElementSibling;
    while (fila) { fila.hidden = !abiertos[i]; fila = fila.nextElementSibling; }
  });
  selects.forEach(function (s) { s.addEventListener('change', dibujar); });
  dibujar();
})();
