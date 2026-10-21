// Comparación de planes: datos tomados de las tablas de cobertura de cada plan.
// Si cambia una tabla de un plan, hay que actualizarla también acá.
(function () {
  var DATOS = {
 "planes": [
  {
   "id": "promedam",
   "nombre": "Promedam",
   "url": "plan-promedam.html"
  },
  {
   "id": "plata",
   "nombre": "Plata",
   "url": "plan-plata.html"
  },
  {
   "id": "oro",
   "nombre": "Oro",
   "url": "plan-oro.html"
  },
  {
   "id": "first",
   "nombre": "First",
   "url": "plan-first.html"
  },
  {
   "id": "empresa",
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
  var temasBox = raiz.querySelector('.cmp-temas');
  var NOFIGURA = '<span class="cmp-nofigura">No figura en la tabla del plan</span>';

  function elegidos() {
    var ids = [];
    selects.forEach(function (s) {
      if (s.offsetParent !== null && s.value && ids.indexOf(s.value) === -1) ids.push(s.value);
    });
    return ids.map(function (id) { return DATOS.planes.filter(function (p) { return p.id === id; })[0]; });
  }

  function dibujar() {
    var planes = elegidos();
    var abiertos = [];
    temasBox.querySelectorAll('.accordion-collapse.show').forEach(function (c) { abiertos.push(c.id); });
    var html = '';
    DATOS.temas.forEach(function (t, i) {
      var id = 'cmpTema' + i;
      var abierto = abiertos.length ? abiertos.indexOf(id) !== -1 : i === 0;
      html += '<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button' + (abierto ? '' : ' collapsed') +
        '" type="button" data-bs-toggle="collapse" data-bs-target="#' + id + '" aria-expanded="' + abierto + '" aria-controls="' + id + '">' +
        '<i class="fas ' + t.icono + '" aria-hidden="true"></i>' + t.nombre + '</button></h3>' +
        '<div id="' + id + '" class="accordion-collapse collapse' + (abierto ? ' show' : '') + '"><div class="accordion-body">' +
        '<table class="cmp-tabla cmp-' + planes.length + '"><thead><tr><th scope="col">Qué cubre</th>';
      planes.forEach(function (p) { html += '<th scope="col">' + p.nombre + '</th>'; });
      html += '</tr></thead><tbody>';
      t.filas.forEach(function (f) {
        html += '<tr><th scope="row">' + f.p + '</th>';
        planes.forEach(function (p) { html += '<td data-plan="' + p.nombre + '">' + (f.c[p.id] || NOFIGURA) + '</td>'; });
        html += '</tr>';
      });
      html += '</tbody></table></div></div></div>';
    });
    var pie = '<div class="cmp-links">';
    planes.forEach(function (p) { pie += '<a class="btn-primary-custom" href="' + p.url + '">Ver Plan ' + p.nombre + '</a>'; });
    temasBox.innerHTML = html;
    raiz.querySelector('.cmp-links').outerHTML = pie + '</div>';
  }
  selects.forEach(function (s) { s.addEventListener('change', dibujar); });
  var ancho = window.matchMedia('(min-width: 768px)');
  if (ancho.addEventListener) ancho.addEventListener('change', dibujar);
  dibujar();
})();
