/* ══════════════════════════════════════════════════════
   preguntas.js – Proyecto Energía · CEIP Perú
   50 preguntas para la miniexposición de 6º Primaria
   ══════════════════════════════════════════════════════ */

window.PREGUNTAS = [

// ═══════════════════════════════════════════════════════
// BLOQUE 1: FORMAS Y TRANSFORMACIONES DE ENERGÍA (1-7)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 1 ───────────────────────────────────────
{
  titulo: "¿Qué transformaciones de energía se producen cuando enciendes una bombilla? Describe la cadena completa desde la central eléctrica.",
  adaptada: false,
  intro: "Cuando le das al interruptor y la luz se enciende, parece algo muy sencillo. Pero detrás de ese gesto hay una cadena enorme de transformaciones de energía que empieza muy lejos de tu casa, en una central eléctrica.\nLa energía no aparece de la nada: se va transformando de un tipo a otro en cada paso del camino, desde el combustible o la fuente original hasta la luz que ilumina tu habitación.",
  subpreguntas: [
    "¿Qué tipo de energía tiene el combustible (o el agua, o el viento) antes de llegar a la central?",
    "¿Qué ocurre dentro de la central para convertir esa energía en electricidad?",
    "¿Cómo viaja la electricidad desde la central hasta tu casa?",
    "¿Qué transformación ocurre dentro de la bombilla para producir luz?"
  ],
  palabrasClave: ["cadena de transformación energía", "central eléctrica funcionamiento", "energía eléctrica bombilla", "transporte electricidad alta tensión"],
  referencias: [
    { texto: "Wikipedia: Transformación energética", url: "https://es.wikipedia.org/wiki/Transformaci%C3%B3n_energ%C3%A9tica" },
    { texto: "Endesa Educa: ¿Cómo llega la electricidad a tu casa?", url: "https://www.endesaeduca.com/endesa-educa/recursos/como-llega-la-electricidad" },
    { texto: "YouTube – Happy Learning: La energía", url: "https://www.youtube.com/watch?v=MEqw0hZCZiA" }
  ],
  presentacion: {
    pasos: [
      "Empieza diciendo tu pregunta en voz alta y sitúa a la clase: «Voy a explicar todo lo que pasa desde que se quema carbón hasta que veis luz» (5 s).",
      "Describe el primer paso: qué energía tiene el combustible original, por ejemplo energía química del carbón (10 s).",
      "Explica las transformaciones en la central: calor → vapor → movimiento → electricidad (20 s).",
      "Cuenta cómo viaja la electricidad por los cables de alta tensión hasta tu casa (10 s).",
      "Termina con lo que pasa en la bombilla: energía eléctrica → luz y calor (10 s).",
      "Cierra con una frase resumen: «Son al menos 4 o 5 transformaciones para encender una simple luz» (5 s)."
    ],
    esencial: "La cadena completa de transformaciones: química → térmica → mecánica → eléctrica → luminosa.",
    opcional: "Comparar la eficiencia de una bombilla incandescente con un LED.",
    consejoTiempo: "Si al ensayar duras más de un minuto, quita la comparación LED/incandescente. Si te sobra tiempo, añade un ejemplo de otra central (eólica, solar).",
    ejemploMal: "«Pues la bombilla se enciende porque le llega electricidad y ya.» (Demasiado simple, no explica la cadena de transformaciones.)",
    ejemploBien: "«Cuando enciendes la luz, la energía ha pasado por al menos cuatro transformaciones: primero el carbón tiene energía química, que se convierte en calor, luego mueve una turbina…»"
  },
  tarjeta: {
    intro: "En tu tarjeta, muestra la cadena de transformaciones de forma visual.",
    ideasDibujo: "Dibuja una flecha horizontal con 5 pasos: un trozo de carbón → llamas → turbina girando → torre eléctrica con cables → bombilla encendida. Debajo de cada dibujo, escribe el tipo de energía (química, térmica, mecánica, eléctrica, luminosa)."
  },
  curiosidad: "Una bombilla incandescente clásica solo convierte en luz el 5% de la energía que recibe. ¡El otro 95% se pierde en forma de calor! Por eso queman tanto al tocarlas, y por eso los LED son mucho mejores."
},

// ─── Pregunta 2 ───────────────────────────────────────
{
  titulo: "¿Cómo almacenan energía los alimentos? ¿Qué pasa con esa energía cuando los comemos?",
  adaptada: false,
  intro: "Cada vez que desayunas, meriendas o cenas, estás «recargando pilas». Los alimentos contienen energía química atrapada en sus moléculas, sobre todo en los nutrientes como los hidratos de carbono, las grasas y las proteínas.\nTu cuerpo actúa como una máquina que transforma esa energía química en todo lo que necesitas: moverte, pensar, mantener tu temperatura corporal…",
  subpreguntas: [
    "¿Qué tipo de energía contienen los alimentos? ¿En qué moléculas se almacena?",
    "¿Cómo extrae tu cuerpo la energía de lo que comes? (Piensa en la digestión y la respiración celular.)",
    "¿En qué tipos de energía se transforma la energía de los alimentos dentro de tu cuerpo?",
    "¿Qué alimentos tienen más energía? ¿Cómo se mide esa energía?"
  ],
  palabrasClave: ["energía química alimentos", "calorías kilocalorías", "respiración celular energía", "nutrientes energéticos"],
  referencias: [
    { texto: "Wikipedia: Valor energético de los alimentos", url: "https://es.wikipedia.org/wiki/Valor_energ%C3%A9tico" },
    { texto: "Gobierno de España – AESAN: Etiquetado energético", url: "https://www.aesan.gob.es/AECOSAN/web/seguridad_alimentaria/subdetalle/etiquetado.htm" },
    { texto: "YouTube – Smile and Learn: La digestión", url: "https://www.youtube.com/watch?v=BwMHKFaKxzE" }
  ],
  presentacion: {
    pasos: [
      "Empieza con una pregunta para tus compañeros: «¿Sabéis por qué desayunamos antes de venir al cole?» (5 s).",
      "Explica que los alimentos guardan energía química en sus nutrientes (10 s).",
      "Cuenta brevemente cómo el cuerpo extrae esa energía: digestión + respiración celular (20 s).",
      "Di en qué se transforma: calor corporal, movimiento muscular, funcionamiento del cerebro (15 s).",
      "Cierra con tu dato curioso o un ejemplo concreto (10 s)."
    ],
    esencial: "Que los alimentos contienen energía química y que nuestro cuerpo la transforma en calor, movimiento y actividad cerebral.",
    opcional: "Mencionar las calorías y cómo se miden, o comparar la energía de distintos alimentos.",
    consejoTiempo: "El tema de las calorías es interesante pero secundario. Si te pasas de tiempo, quítalo.",
    ejemploMal: "«Los alimentos tienen energía y cuando comemos pues la usamos.» (Demasiado vago, no dice qué tipo de energía ni cómo se transforma.)",
    ejemploBien: "«Un plátano tiene energía química almacenada en sus azúcares. Cuando lo comes, tu cuerpo rompe esas moléculas y libera la energía, que usa para mover los músculos y mantener tu temperatura a 37 grados.»"
  },
  tarjeta: {
    intro: "Muestra el recorrido de la energía desde el alimento hasta lo que hace tu cuerpo con ella.",
    ideasDibujo: "Dibuja un plato de comida a la izquierda con una flecha hacia un cuerpo humano. Dentro del cuerpo, tres flechas pequeñas apuntando a: un músculo (movimiento), un cerebro (pensamiento) y un termómetro (calor). Escribe «energía química → energía cinética + térmica»."
  },
  curiosidad: "Un solo donut de chocolate tiene unas 450 kilocalorías: suficiente energía para que una persona camine durante hora y media sin parar. ¡Tu cuerpo es una máquina muy eficiente!"
},

// ─── Pregunta 3 ───────────────────────────────────────
{
  titulo: "¿Qué significa que «la energía no se crea ni se destruye, solo se transforma»? Explícalo con un ejemplo cotidiano.",
  adaptada: false,
  intro: "Esta frase tan famosa se conoce como la ley de conservación de la energía (o primer principio de la termodinámica). Es una de las leyes más importantes de la física y significa que la cantidad total de energía en el universo siempre es la misma.\nCuando parece que la energía «desaparece» (por ejemplo, un coche frena y pierde velocidad), en realidad se ha transformado en otro tipo de energía (calor por la fricción de los frenos).",
  subpreguntas: [
    "¿Qué dice exactamente la ley de conservación de la energía?",
    "Si la energía no se destruye, ¿a dónde va cuando un objeto se para?",
    "¿Puedes encontrar un ejemplo cotidiano donde se vean al menos dos transformaciones de energía?",
    "¿Por qué entonces decimos «gastar energía» si en realidad no se gasta?"
  ],
  palabrasClave: ["ley conservación energía", "principio termodinámica", "energía se transforma ejemplos", "energía no se destruye"],
  referencias: [
    { texto: "Wikipedia: Conservación de la energía", url: "https://es.wikipedia.org/wiki/Conservaci%C3%B3n_de_la_energ%C3%ADa" },
    { texto: "Junta de Andalucía – Averroes: La energía", url: "https://www.juntadeandalucia.es/averroes/centros-tic/14002984/helvia/aula/archivos/repositorio/1250/1387/energia.html" },
    { texto: "YouTube – CuriosaMente: ¿Qué es la energía?", url: "https://www.youtube.com/watch?v=5gJGeRHpZEI" }
  ],
  presentacion: {
    pasos: [
      "Di tu pregunta y la frase famosa: «La energía no se crea ni se destruye, solo se transforma» (5 s).",
      "Explica qué significa con palabras sencillas (10 s).",
      "Pon un ejemplo cotidiano paso a paso: por ejemplo, una pelota que lanzas al aire (energía cinética → potencial → cinética → sonido y calor al caer) (25 s).",
      "Responde a la pregunta trampa: entonces ¿por qué decimos «gastar energía»? Porque se transforma en formas menos útiles, como calor disperso (10 s).",
      "Cierra con tu dato curioso (10 s)."
    ],
    esencial: "Explicar la ley con un ejemplo donde se vean las transformaciones claramente.",
    opcional: "Mencionar que fue descubierta en el siglo XIX o hablar de la diferencia entre energía útil y energía dispersa.",
    consejoTiempo: "El ejemplo es la parte más importante. Dedícale la mayor parte del tiempo y practícalo bien.",
    ejemploMal: "«Pues que la energía no se puede crear, dice la ley esa, y ya está.» (Sin ejemplo, no se entiende.)",
    ejemploBien: "«Cuando tiro una pelota al aire, mi energía muscular se convierte en movimiento. Arriba del todo se frena: esa energía se ha convertido en energía potencial. Al caer, vuelve a ser movimiento. Y al tocar el suelo, parte se convierte en sonido y calor.»"
  },
  tarjeta: {
    intro: "Tu tarjeta debe mostrar la ley y un ejemplo visual.",
    ideasDibujo: "Dibuja una secuencia de una pelota subiendo, en el punto más alto y bajando. En cada fase, escribe qué tipo de energía predomina. Arriba pon la frase de la ley resumida."
  },
  curiosidad: "La energía total del universo es exactamente la misma que había en el Big Bang, hace 13.800 millones de años. Ni un julio más, ni un julio menos. Solo se ha ido transformando de un tipo a otro."
},

// ─── Pregunta 4 ───────────────────────────────────────
{
  titulo: "¿Cómo produce sonido un altavoz? ¿Qué transformación de energía se produce?",
  adaptada: false,
  intro: "Cuando escuchas música con un altavoz, en realidad estás oyendo vibraciones del aire provocadas por un mecanismo muy ingenioso. Un altavoz convierte señales eléctricas en movimiento físico de una membrana, y ese movimiento empuja el aire creando ondas sonoras.\nEs un ejemplo perfecto de transformación de energía: de eléctrica a cinética (vibración) a sonora.",
  subpreguntas: [
    "¿Qué partes tiene un altavoz por dentro? ¿Qué función tiene cada una?",
    "¿Qué papel juega el imán y la bobina en un altavoz?",
    "¿Cómo se convierte el movimiento de la membrana en sonido?",
    "¿Se pierde algo de energía en el proceso? ¿En qué forma?"
  ],
  palabrasClave: ["altavoz funcionamiento interno", "membrana bobina imán altavoz", "energía eléctrica a sonora", "ondas sonoras vibración"],
  referencias: [
    { texto: "Wikipedia: Altavoz", url: "https://es.wikipedia.org/wiki/Altavoz" },
    { texto: "Endesa Educa: La energía sonora", url: "https://www.endesaeduca.com/endesa-educa/recursos/la-energia-sonora" },
    { texto: "YouTube – Date un Vlog: Cómo funciona un altavoz", url: "https://www.youtube.com/watch?v=0poyWbMfXqQ" }
  ],
  presentacion: {
    pasos: [
      "Empieza preguntando: «¿Cuántos de vosotros habéis escuchado música hoy?» (5 s).",
      "Describe las partes básicas del altavoz: imán, bobina, membrana (15 s).",
      "Explica el proceso: la electricidad pasa por la bobina, que vibra junto al imán, y mueve la membrana (20 s).",
      "Di qué transformación de energía ocurre: eléctrica → cinética → sonora (10 s).",
      "Cierra con tu dato curioso (10 s)."
    ],
    esencial: "Las tres partes principales del altavoz y la cadena de transformación energética: eléctrica → cinética → sonora.",
    opcional: "Mencionar que parte de la energía se pierde como calor o explicar la diferencia entre altavoces grandes y pequeños.",
    consejoTiempo: "No te líes explicando el electromagnetismo en detalle. Basta con decir que la electricidad hace vibrar una bobina junto a un imán.",
    ejemploMal: "«El altavoz suena porque le llega electricidad.» (No explica el mecanismo ni la transformación.)",
    ejemploBien: "«La electricidad pasa por una bobina dentro del altavoz. Esta bobina está junto a un imán y vibra. Esa vibración mueve una membrana que empuja el aire y crea las ondas de sonido que escuchamos.»"
  },
  tarjeta: {
    intro: "Dibuja el interior del altavoz de forma esquemática.",
    ideasDibujo: "Dibuja un corte lateral de un altavoz: un imán fijo en el centro, rodeado por una bobina, y una membrana (cono) conectada a la bobina. Pon flechas que muestren: electricidad → vibración → ondas de sonido saliendo hacia fuera."
  },
  curiosidad: "Los altavoces más grandes del mundo se usan en conciertos y pueden alcanzar 160 decibelios: el mismo nivel de ruido que produce un cohete despegando. Por eso es importante protegerse los oídos en conciertos muy ruidosos."
},

// ─── Pregunta 5 ───────────────────────────────────────
{
  titulo: "¿Qué transformaciones de energía ocurren cuando tocas una guitarra eléctrica?",
  adaptada: false,
  intro: "Una guitarra eléctrica es un instrumento fascinante desde el punto de vista de la energía. Todo empieza con tus dedos pulsando una cuerda (energía cinética), pero lo que suena por el amplificador ha pasado por varias transformaciones increíbles, incluyendo campos magnéticos y señales eléctricas.\nA diferencia de una guitarra acústica, que amplifica el sonido con su caja de madera, la eléctrica necesita convertir la vibración de la cuerda en una señal eléctrica.",
  subpreguntas: [
    "¿Qué tipo de energía usas cuando pulsas la cuerda con los dedos?",
    "¿Qué son las pastillas (pickups) de una guitarra eléctrica y cómo funcionan?",
    "¿Cómo se convierte la vibración de una cuerda metálica en una señal eléctrica?",
    "¿Qué transformaciones ocurren después en el amplificador y el altavoz?"
  ],
  palabrasClave: ["guitarra eléctrica pastillas pickups", "vibración cuerda señal eléctrica", "transformación energía instrumento musical", "amplificador guitarra funcionamiento"],
  referencias: [
    { texto: "Wikipedia: Guitarra eléctrica", url: "https://es.wikipedia.org/wiki/Guitarra_el%C3%A9ctrica" },
    { texto: "Fender: ¿Cómo funciona una pastilla de guitarra?", url: "https://www.fender.com/es-ES/articles/tech-talk/how-do-guitar-pickups-work" },
    { texto: "YouTube – Jaime Altozano: Cómo funciona una guitarra eléctrica", url: "https://www.youtube.com/watch?v=1RFD8O1pNZk" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la pregunta y sitúa: «Cuando un músico toca la guitarra eléctrica, su sonido pasa por al menos 5 transformaciones de energía» (5 s).",
      "Explica el primer paso: tus dedos (energía cinética) pulsan la cuerda, que vibra (10 s).",
      "Describe cómo las pastillas convierten esa vibración en señal eléctrica usando imanes (20 s).",
      "Cuenta qué hace el amplificador y el altavoz: la señal eléctrica se amplifica y se convierte en sonido (15 s).",
      "Resume la cadena completa en una frase final (10 s)."
    ],
    esencial: "La cadena: energía muscular → cinética (vibración cuerda) → eléctrica (pastillas) → sonora (altavoz).",
    opcional: "Explicar brevemente cómo funcionan los imanes de las pastillas (inducción electromagnética).",
    consejoTiempo: "Céntrate en la cadena de transformaciones. No necesitas explicar pedales de efectos ni tipos de pastillas.",
    ejemploMal: "«La guitarra eléctrica funciona con electricidad y suena por un amplificador.» (No dice qué transformaciones ocurren.)",
    ejemploBien: "«Cuando pulsas una cuerda, vibra sobre unos imanes llamados pastillas. Esas vibraciones crean una pequeña corriente eléctrica que viaja por un cable hasta el amplificador, que la hace más potente y la envía al altavoz, donde se convierte en sonido.»"
  },
  tarjeta: {
    intro: "Muestra la cadena de energía desde los dedos hasta el sonido.",
    ideasDibujo: "Dibuja de izquierda a derecha: una mano pulsando una cuerda → una pastilla (rectángulo con imán) → un cable → un amplificador → ondas de sonido. Debajo de cada paso, escribe el tipo de energía."
  },
  curiosidad: "Las pastillas de una guitarra eléctrica generan una corriente tan débil que apenas llegaría a encender un LED diminuto. El amplificador multiplica esa señal miles de veces para llenar una sala de conciertos."
},

// ─── Pregunta 6 ───────────────────────────────────────
{
  titulo: "¿Qué es la energía térmica? ¿De dónde viene el calor que notamos del Sol?",
  adaptada: false,
  intro: "Cada vez que notas calor — al acercarte a un radiador, al sol del mediodía, o al tocar una taza de chocolate caliente — estás percibiendo energía térmica. Esta energía está relacionada con el movimiento de las partículas que forman la materia: cuanto más rápido se mueven, más caliente está el objeto.\nPero ¿cómo nos llega el calor del Sol si el espacio entre el Sol y la Tierra está vacío? Ahí está lo interesante.",
  subpreguntas: [
    "¿Qué es exactamente la energía térmica? ¿Qué relación tiene con las partículas de la materia?",
    "¿Cuáles son las tres formas en que se transmite el calor? (conducción, convección, radiación)",
    "¿Por qué el calor del Sol nos llega por radiación y no por conducción ni convección?",
    "¿Qué relación hay entre temperatura y energía térmica?"
  ],
  palabrasClave: ["energía térmica definición", "calor conducción convección radiación", "radiación solar energía", "temperatura movimiento partículas"],
  referencias: [
    { texto: "Wikipedia: Energía térmica", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_t%C3%A9rmica" },
    { texto: "Gobierno de Canarias – Agrega: El calor y la temperatura", url: "http://agrega.educacion.es/" },
    { texto: "YouTube – Happy Learning: El calor y la temperatura", url: "https://www.youtube.com/watch?v=2AjXbDnR_sM" }
  ],
  presentacion: {
    pasos: [
      "Empieza con una pregunta: «¿Habéis notado alguna vez el calor del sol en la cara? ¿Sabéis cómo os llega?» (5 s).",
      "Define la energía térmica: es la energía del movimiento de las partículas (15 s).",
      "Explica brevemente las tres formas de transmisión del calor (15 s).",
      "Responde a la pregunta del Sol: su calor nos llega por radiación, que puede viajar por el vacío del espacio (15 s).",
      "Cierra con tu curiosidad (10 s)."
    ],
    esencial: "Qué es la energía térmica (movimiento de partículas) y que el calor del Sol llega por radiación.",
    opcional: "Explicar la diferencia entre calor y temperatura.",
    consejoTiempo: "Las tres formas de transmisión del calor son importantes pero resúmelas mucho: una frase para cada una.",
    ejemploMal: "«La energía térmica es el calor. Viene del Sol.» (No explica qué es ni cómo viaja.)",
    ejemploBien: "«La energía térmica es la que tienen las partículas de un cuerpo cuando se mueven. Cuanto más rápido vibran, más caliente está. El calor del Sol nos llega por radiación, que son ondas que pueden viajar por el vacío del espacio.»"
  },
  tarjeta: {
    intro: "Tu tarjeta debe mostrar qué es la energía térmica y cómo nos llega la del Sol.",
    ideasDibujo: "Haz dos dibujos: (1) Un zoom a partículas moviéndose (bolitas con flechas de movimiento) dentro de un objeto caliente. (2) El Sol con ondas de radiación viajando por el espacio hasta la Tierra. Etiqueta: «radiación»."
  },
  curiosidad: "La superficie del Sol está a unos 5.500 °C, pero su corona (la capa exterior) supera el millón de grados. Los científicos aún no entienden del todo por qué la parte de fuera está más caliente que la superficie."
},

// ─── Pregunta 7 ───────────────────────────────────────
{
  titulo: "¿Qué tiene que ver la energía con que una montaña rusa funcione sin motor en casi todo el recorrido?",
  adaptada: false,
  intro: "Una montaña rusa es un laboratorio de física en movimiento. El tren solo necesita un motor para subir la primera cuesta (la más alta). A partir de ahí, la gravedad y las transformaciones entre energía potencial y cinética hacen todo el trabajo.\nEs uno de los mejores ejemplos de la ley de conservación de la energía que puedes encontrar en la vida real.",
  subpreguntas: [
    "¿Qué es la energía potencial gravitatoria? ¿En qué punto de la montaña rusa es máxima?",
    "¿Qué es la energía cinética? ¿Dónde es máxima en la montaña rusa?",
    "¿Cómo se transforman entre sí la energía potencial y la cinética durante el recorrido?",
    "Si la energía se conserva, ¿por qué la montaña rusa se frena al final?"
  ],
  palabrasClave: ["montaña rusa energía potencial cinética", "conservación energía montaña rusa", "energía potencial gravitatoria", "transformación cinética potencial"],
  referencias: [
    { texto: "Wikipedia: Montaña rusa (física)", url: "https://es.wikipedia.org/wiki/Monta%C3%B1a_rusa" },
    { texto: "Museo Nacional de Ciencias Naturales: Energía cinética y potencial", url: "https://www.mncn.csic.es/" },
    { texto: "YouTube – Quantum Fracture: Energía potencial y cinética", url: "https://www.youtube.com/watch?v=3dcrB_alR2s" }
  ],
  presentacion: {
    pasos: [
      "Pregunta a la clase: «¿Alguien se ha montado en una montaña rusa? ¿Os habéis fijado en que solo sube con motor la primera cuesta?» (5 s).",
      "Explica la energía potencial: cuando el tren está arriba del todo, tiene toda su energía almacenada por la altura (10 s).",
      "Describe qué pasa al bajar: la potencial se convierte en cinética y el tren va cada vez más rápido (15 s).",
      "Explica el intercambio continuo: sube una cuesta → pierde velocidad y gana altura; baja → gana velocidad y pierde altura (15 s).",
      "¿Por qué se frena? Porque parte de la energía se pierde en forma de calor (rozamiento) y sonido (10 s).",
      "Frase de cierre (5 s)."
    ],
    esencial: "El intercambio entre energía potencial (arriba) y cinética (abajo) y por qué no necesita motor después de la primera subida.",
    opcional: "Explicar por qué cada cuesta debe ser un poco más baja que la anterior (por las pérdidas por rozamiento).",
    consejoTiempo: "La clave es el intercambio potencial-cinética. Practícalo con gestos: mano arriba (potencial) y mano rápida hacia abajo (cinética).",
    ejemploMal: "«La montaña rusa funciona por la gravedad.» (Demasiado simple, no explica las transformaciones.)",
    ejemploBien: "«El motor solo sube el tren a la primera cuesta, la más alta. Arriba del todo tiene energía potencial máxima. Al caer, esa energía se transforma en cinética: velocidad. En cada subida pierde velocidad y gana potencial, y al revés en cada bajada. Es un intercambio continuo.»"
  },
  tarjeta: {
    intro: "Dibuja el perfil de una montaña rusa con las transformaciones de energía.",
    ideasDibujo: "Dibuja el perfil de una montaña rusa con 3 cuestas (cada una más baja). En la cima de cada cuesta escribe «E. potencial ↑» y en cada valle escribe «E. cinética ↑». Pon flechas entre ellos mostrando la transformación."
  },
  curiosidad: "La montaña rusa más alta del mundo es Kingda Ka en Nueva Jersey (EE.UU.): sube a 139 metros (como un edificio de 45 pisos) y alcanza 206 km/h en solo 3,5 segundos."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 2: FUENTES DE ENERGÍA NO RENOVABLES (8-12)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 8 ───────────────────────────────────────
{
  titulo: "¿Cómo se formó el petróleo? ¿Por qué tardó millones de años?",
  adaptada: false,
  intro: "El petróleo no se fabricó en ninguna fábrica: se formó de manera natural a lo largo de millones de años a partir de restos de seres vivos microscópicos que vivían en los mares antiguos. Es como un concentrado de energía solar prehistórica, almacenada en forma de energía química.\nPor eso se le llama «combustible fósil»: porque proviene de fósiles de hace muchísimo tiempo.",
  subpreguntas: [
    "¿Qué organismos dieron origen al petróleo? ¿Dónde vivían?",
    "¿Qué condiciones se necesitaron para que esos restos se convirtieran en petróleo? (presión, temperatura, tiempo)",
    "¿Por qué el proceso tardó millones de años?",
    "¿Dónde se encuentra hoy el petróleo y cómo se extrae?"
  ],
  palabrasClave: ["formación petróleo proceso", "combustible fósil origen", "plancton marino petróleo", "extracción petróleo yacimientos"],
  referencias: [
    { texto: "Wikipedia: Petróleo – Origen", url: "https://es.wikipedia.org/wiki/Petr%C3%B3leo#Origen" },
    { texto: "Repsol: ¿Cómo se forma el petróleo?", url: "https://www.repsol.com/es/energia-e-innovacion/fuentes-de-energia/petroleo/index.cshtml" },
    { texto: "YouTube – Academia Play: Petróleo, ¿cómo se formó?", url: "https://www.youtube.com/watch?v=nXMNR9sFmKo" }
  ],
  presentacion: {
    pasos: [
      "Empieza situando el tema: «El petróleo que usamos hoy empezó a formarse hace más de 100 millones de años» (5 s).",
      "Explica de qué seres vivos proviene: plancton y algas microscópicas del mar (10 s).",
      "Describe el proceso: se acumularon en el fondo, se cubrieron de sedimentos, y la presión y el calor los transformaron lentamente (25 s).",
      "Explica por qué tardó tanto: las reacciones químicas necesitaban millones de años bajo esas condiciones (10 s).",
      "Cierra con tu curiosidad o con por qué es un recurso limitado (10 s)."
    ],
    esencial: "Que el petróleo viene de restos de seres vivos marinos microscópicos transformados durante millones de años por presión y calor.",
    opcional: "Mencionar cómo se extrae hoy o qué productos se hacen con él (gasolina, plástico, etc.).",
    consejoTiempo: "El proceso de formación es lo más importante. No dediques mucho tiempo a la extracción moderna.",
    ejemploMal: "«El petróleo es un líquido negro que sale de debajo de la tierra.» (No explica cómo se formó ni por qué tardó millones de años.)",
    ejemploBien: "«Hace más de 100 millones de años, billones de organismos microscópicos vivían en los mares. Cuando morían, caían al fondo y se cubrían de capas de arena y roca. Con la presión y el calor de millones de años, esos restos se convirtieron en petróleo.»"
  },
  tarjeta: {
    intro: "Muestra el proceso de formación del petróleo en capas.",
    ideasDibujo: "Dibuja una secuencia vertical de arriba abajo: (1) Mar con plancton, (2) Restos en el fondo cubiertos de sedimentos, (3) Capas de roca apretando con flechas de presión, (4) Petróleo líquido en una bolsa subterránea. Pon una flecha de tiempo: «Millones de años»."
  },
  curiosidad: "Si pudieras acelerar la formación del petróleo, necesitarías comprimir materia orgánica a temperaturas de 60-120 °C durante al menos 1 millón de años. Por eso, aunque el petróleo es «natural», es prácticamente imposible de fabricar."
},

// ─── Pregunta 9 ───────────────────────────────────────
{
  titulo: "¿Qué es el gas natural, de dónde se extrae y cómo llega a los hogares?",
  adaptada: false,
  intro: "El gas natural es un combustible fósil formado principalmente por metano, un gas que no se ve ni se huele (el olor que notamos en casa se le añade a propósito para detectar fugas). Se formó de manera muy parecida al petróleo, y de hecho muchas veces se encuentra junto a él, atrapado bajo tierra.\nEs la fuente de energía que probablemente usas en casa para cocinar, ducharte con agua caliente o encender la calefacción.",
  subpreguntas: [
    "¿Qué es el gas natural? ¿De qué gas está compuesto principalmente?",
    "¿Cómo se formó y dónde se encuentra bajo tierra?",
    "¿Cómo se transporta desde los yacimientos hasta las ciudades?",
    "¿Para qué se usa en los hogares? ¿Es contaminante?"
  ],
  palabrasClave: ["gas natural metano", "extracción gas natural", "gasoducto transporte gas", "gas natural hogares calefacción"],
  referencias: [
    { texto: "Wikipedia: Gas natural", url: "https://es.wikipedia.org/wiki/Gas_natural" },
    { texto: "Naturgy – Educa: ¿Qué es el gas natural?", url: "https://www.naturgy.com/conocenos/que_es_el_gas_natural" },
    { texto: "YouTube – Smile and Learn: Combustibles fósiles", url: "https://www.youtube.com/watch?v=zaAVNNxQri0" }
  ],
  presentacion: {
    pasos: [
      "Empieza con algo cercano: «¿Sabéis qué arde en los fogones de la cocina de gas? Es gas natural» (5 s).",
      "Explica qué es: un gas formado hace millones de años, compuesto sobre todo de metano (10 s).",
      "Describe cómo se extrae: se perfora el subsuelo hasta el yacimiento (10 s).",
      "Explica cómo llega a casa: gasoductos (tuberías enormes) o barcos especiales (GNL) → red de distribución local → tu cocina (20 s).",
      "Menciona si contamina y cierra (15 s)."
    ],
    esencial: "Qué es el gas natural, que es un combustible fósil y cómo llega desde el yacimiento hasta los hogares.",
    opcional: "Hablar de por qué le añaden olor o de las diferencias con el petróleo y el carbón.",
    consejoTiempo: "El recorrido desde el yacimiento hasta la casa es lo más visual. Explícalo como un viaje.",
    ejemploMal: "«El gas natural es un gas que usamos en casa para la cocina.» (No dice de dónde viene ni cómo llega.)",
    ejemploBien: "«El gas natural se formó hace millones de años bajo tierra, igual que el petróleo. Está compuesto sobre todo de metano. Para traerlo a España se usan gasoductos enormes que vienen de Argelia o barcos especiales. Después llega por tuberías más pequeñas hasta la cocina de tu casa.»"
  },
  tarjeta: {
    intro: "Muestra el recorrido del gas natural desde el yacimiento hasta tu casa.",
    ideasDibujo: "Dibuja un mapa simplificado: yacimiento bajo tierra → torre de extracción → gasoducto (tubería larga) → depósito en la ciudad → tuberías más pequeñas → una casa con una cocina de gas. Pon flechas mostrando la dirección del gas."
  },
  curiosidad: "El gas natural no tiene olor. El olor característico que detectamos en casa se llama mercaptano y se le añade a propósito para que podamos notar las fugas. ¡Es una medida de seguridad!"
},

// ─── Pregunta 10 ──────────────────────────────────────
{
  titulo: "¿Qué es la energía nuclear? ¿Qué ventajas e inconvenientes tiene frente a otras fuentes?",
  adaptada: false,
  intro: "La energía nuclear se obtiene rompiendo los átomos de un elemento llamado uranio en un proceso que se llama fisión nuclear. Al romper un átomo de uranio se libera una cantidad enorme de energía en forma de calor, que se usa para generar electricidad.\nEs una fuente de energía muy potente y no emite CO₂ mientras funciona, pero produce residuos radiactivos que son peligrosos durante miles de años.",
  subpreguntas: [
    "¿Qué es la fisión nuclear? ¿Qué le pasa al átomo de uranio?",
    "¿Cómo se aprovecha la energía liberada para generar electricidad?",
    "¿Cuáles son las principales ventajas de la energía nuclear?",
    "¿Cuáles son los principales problemas o riesgos?"
  ],
  palabrasClave: ["energía nuclear fisión", "central nuclear funcionamiento", "residuos radiactivos", "ventajas inconvenientes energía nuclear"],
  referencias: [
    { texto: "Wikipedia: Energía nuclear", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_nuclear" },
    { texto: "Foro Nuclear: ¿Qué es la energía nuclear?", url: "https://www.foronuclear.org/descubre-la-energia-nuclear/que-es-la-energia-nuclear/" },
    { texto: "YouTube – CuriosaMente: Energía nuclear", url: "https://www.youtube.com/watch?v=x7l5ME5Cl_4" }
  ],
  presentacion: {
    pasos: [
      "Empieza planteando: «¿Sabíais que un solo gramo de uranio produce tanta energía como quemar una tonelada de carbón?» (5 s).",
      "Explica qué es la fisión: romper átomos de uranio para liberar energía (15 s).",
      "Di las ventajas: muchísima energía con poco combustible, no emite CO₂ (15 s).",
      "Di los inconvenientes: residuos radiactivos peligrosos, riesgo de accidentes (15 s).",
      "Cierra con una reflexión equilibrada (10 s)."
    ],
    esencial: "Qué es la fisión nuclear y al menos dos ventajas y dos inconvenientes.",
    opcional: "Mencionar accidentes conocidos (Chernóbil, Fukushima) o las centrales nucleares en España.",
    consejoTiempo: "No te metas a explicar cómo funciona un reactor en detalle. Lo importante es la idea de «romper átomos» y el debate ventajas/inconvenientes.",
    ejemploMal: "«La energía nuclear es la que sale de las centrales nucleares, que son muy peligrosas.» (Parcial y no explica qué es.)",
    ejemploBien: "«La energía nuclear se obtiene rompiendo átomos de uranio, lo que libera una cantidad enorme de calor. La ventaja es que produce muchísima energía sin emitir CO₂. Pero el gran problema son los residuos radiactivos, que siguen siendo peligrosos durante miles de años.»"
  },
  tarjeta: {
    intro: "Haz una tabla de ventajas e inconvenientes y un esquema básico.",
    ideasDibujo: "Divide tu tarjeta en dos: arriba, un esquema simple de un átomo rompiéndose en dos con flechas de energía saliendo. Abajo, una tabla con dos columnas: ✅ Ventajas (mucha energía, sin CO₂) y ❌ Inconvenientes (residuos radiactivos, riesgo)."
  },
  curiosidad: "España tiene 7 reactores nucleares en funcionamiento (en 5 centrales). Juntos producen alrededor del 20% de toda la electricidad del país, sin emitir CO₂."
},

// ─── Pregunta 11 ──────────────────────────────────────
{
  titulo: "¿Qué es el carbón y por qué fue tan importante durante la Revolución Industrial? ¿Se sigue usando?",
  adaptada: false,
  intro: "El carbón es una roca negra que arde y libera mucho calor. Se formó hace cientos de millones de años a partir de bosques tropicales enormes que quedaron enterrados bajo capas de tierra. Con la presión y el calor, toda esa materia vegetal se fue convirtiendo lentamente en carbón.\nDurante la Revolución Industrial (siglos XVIII y XIX) el carbón fue el motor del mundo: hacía funcionar las máquinas de vapor, los trenes y las fábricas.",
  subpreguntas: [
    "¿Cómo se formó el carbón? ¿De qué tipo de seres vivos proviene?",
    "¿Por qué fue tan importante durante la Revolución Industrial? ¿Qué máquinas usaban carbón?",
    "¿Se sigue utilizando hoy? ¿En qué países y para qué?",
    "¿Qué problemas ambientales causa quemar carbón?"
  ],
  palabrasClave: ["carbón mineral formación", "carbón revolución industrial", "central térmica carbón", "contaminación carbón CO2"],
  referencias: [
    { texto: "Wikipedia: Carbón", url: "https://es.wikipedia.org/wiki/Carb%C3%B3n" },
    { texto: "National Geographic España: La era del carbón", url: "https://www.nationalgeographic.com.es/ciencia/era-carbon_13765" },
    { texto: "YouTube – Academia Play: La Revolución Industrial", url: "https://www.youtube.com/watch?v=LlMVBJIKFaM" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la historia: «Hace 200 años, una roca negra cambió el mundo para siempre» (5 s).",
      "Explica brevemente cómo se formó el carbón a partir de bosques prehistóricos (10 s).",
      "Cuenta por qué fue revolucionario: máquinas de vapor, trenes, fábricas (20 s).",
      "Di si se sigue usando hoy y qué problemas causa (15 s).",
      "Cierra con dato o reflexión (10 s)."
    ],
    esencial: "Qué es el carbón, por qué fue clave en la Revolución Industrial y si se sigue usando.",
    opcional: "Mencionar los distintos tipos de carbón o datos sobre su uso actual en el mundo.",
    consejoTiempo: "La parte de la Revolución Industrial es lo más interesante. Dedícale el grueso del tiempo.",
    ejemploMal: "«El carbón es una piedra negra que se quema.» (Sin historia ni contexto.)",
    ejemploBien: "«El carbón se formó a partir de bosques que quedaron enterrados hace millones de años. En el siglo XVIII se descubrió que podía hacer funcionar máquinas de vapor, y eso cambió la historia: nacieron los trenes, las fábricas y el mundo moderno. Hoy se sigue usando en muchos países, pero contamina mucho.»"
  },
  tarjeta: {
    intro: "Combina pasado y presente del carbón.",
    ideasDibujo: "Divide la tarjeta en dos mitades: a la izquierda, una máquina de vapor antigua con humo y la palabra «Revolución Industrial». A la derecha, una central térmica moderna con chimeneas. Debajo, escribe: «Antes era progreso, hoy es un problema ambiental»."
  },
  curiosidad: "China consume más carbón que el resto del mundo junto. En 2023, el carbón aún generaba cerca del 36% de toda la electricidad del planeta, a pesar de los esfuerzos por reducirlo."
},

// ─── Pregunta 12 ──────────────────────────────────────
{
  titulo: "¿Por qué se llaman «combustibles fósiles»? ¿Qué tienen en común el petróleo, el gas y el carbón?",
  adaptada: false,
  intro: "Petróleo, gas natural y carbón: tres sustancias que parecen muy diferentes (un líquido, un gas y una roca), pero tienen algo fundamental en común. Los tres se formaron hace millones de años a partir de restos de seres vivos que quedaron enterrados, y los tres liberan energía cuando se queman.\nPor eso se llaman «combustibles fósiles»: combustible porque arden, y fósiles porque vienen de seres vivos prehistóricos.",
  subpreguntas: [
    "¿Por qué se usa la palabra «fósil» para estos combustibles?",
    "¿Qué tienen en común el petróleo, el gas natural y el carbón en cuanto a su origen?",
    "¿En qué se diferencian? (estado, origen biológico, uso principal)",
    "¿Por qué se dice que son recursos no renovables?"
  ],
  palabrasClave: ["combustibles fósiles definición", "petróleo gas carbón comparación", "recursos no renovables", "origen combustibles fósiles"],
  referencias: [
    { texto: "Wikipedia: Combustible fósil", url: "https://es.wikipedia.org/wiki/Combustible_f%C3%B3sil" },
    { texto: "Iberdrola: ¿Qué son los combustibles fósiles?", url: "https://www.iberdrola.com/sostenibilidad/combustibles-fosiles" },
    { texto: "YouTube – Happy Learning: Energías no renovables", url: "https://www.youtube.com/watch?v=jXPgLBTzA2g" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la pregunta: «¿Qué tienen en común un líquido negro, un gas invisible y una roca? Que los tres son combustibles fósiles» (5 s).",
      "Explica qué significa «fósil»: que viene de restos de seres vivos de hace millones de años (10 s).",
      "Describe brevemente de dónde viene cada uno: carbón de bosques, petróleo y gas de organismos marinos (20 s).",
      "Explica qué tienen en común: los tres se queman para obtener energía y los tres contaminan (15 s).",
      "Cierra explicando por qué son no renovables (10 s)."
    ],
    esencial: "Por qué se llaman fósiles, qué tienen en común los tres y por qué son no renovables.",
    opcional: "Comparar las cantidades de CO₂ que emite cada uno al quemarse.",
    consejoTiempo: "No te pierdas explicando cada combustible en detalle. Céntrate en lo que tienen en común.",
    ejemploMal: "«Se llaman fósiles porque son muy viejos.» (Incompleto: no dice que vienen de seres vivos ni qué tienen en común.)",
    ejemploBien: "«Se llaman combustibles fósiles porque se formaron a partir de seres vivos que murieron hace millones de años y quedaron enterrados. El carbón viene de bosques, y el petróleo y el gas de organismos del mar. Los tres se queman para obtener energía, los tres contaminan y los tres son limitados.»"
  },
  tarjeta: {
    intro: "Haz un esquema comparativo de los tres combustibles fósiles.",
    ideasDibujo: "Dibuja tres columnas: Carbón (trozo negro, bosque prehistórico, sólido), Petróleo (gota negra, organismos marinos, líquido), Gas (nube, organismos marinos, gas). Arriba, una línea que los une con el título «Combustibles fósiles: vienen del pasado». Abajo: «Los tres contaminan y se agotan»."
  },
  curiosidad: "Si comprimieras toda la historia de la Tierra en un solo año, los combustibles fósiles se habrían formado entre septiembre y noviembre. La humanidad los ha consumido en las últimas décimas de segundo del 31 de diciembre."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 3: FUENTES DE ENERGÍA RENOVABLES (13-20)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 13 ──────────────────────────────────────
{
  titulo: "¿Cómo funciona un panel solar fotovoltaico? ¿Qué pasa dentro de las células cuando les da el sol?",
  adaptada: false,
  intro: "Los paneles solares fotovoltaicos son esas placas oscuras que cada vez vemos más en los tejados. Tienen algo casi mágico: les da la luz del sol y producen electricidad directamente, sin necesidad de quemar nada, sin ruido y sin piezas móviles.\nDentro de cada panel hay muchas «células fotovoltaicas» hechas de un material especial llamado silicio. Cuando la luz del sol golpea el silicio, sus fotones empujan los electrones y crean una corriente eléctrica.",
  subpreguntas: [
    "¿De qué material están hechas las células fotovoltaicas?",
    "¿Qué pasa cuando la luz del sol llega a una célula fotovoltaica? (Efecto fotovoltaico)",
    "¿Qué tipo de corriente producen y cómo se convierte para usarla en casa?",
    "¿Cuánta electricidad puede producir un panel solar típico?"
  ],
  palabrasClave: ["panel solar fotovoltaico funcionamiento", "efecto fotovoltaico silicio", "célula solar electricidad", "energía solar fotovoltaica España"],
  referencias: [
    { texto: "Wikipedia: Célula fotovoltaica", url: "https://es.wikipedia.org/wiki/C%C3%A9lula_fotovoltaica" },
    { texto: "IDAE: Energía solar fotovoltaica", url: "https://www.idae.es/tecnologias/energias-renovables/energia-solar-fotovoltaica" },
    { texto: "YouTube – Endesa Educa: ¿Cómo funciona un panel solar?", url: "https://www.youtube.com/watch?v=PsHJoFuqBCU" }
  ],
  presentacion: {
    pasos: [
      "Empieza señalando algo cercano: «¿Habéis visto placas oscuras en los tejados? Son paneles solares» (5 s).",
      "Explica de qué están hechos: células de silicio (10 s).",
      "Describe qué pasa cuando les da el sol: los fotones de luz empujan electrones y se crea electricidad (20 s).",
      "Di qué tipo de corriente producen y cómo se usa en casa (inversor) (15 s).",
      "Cierra con dato curioso (10 s)."
    ],
    esencial: "Que están hechos de silicio y que la luz solar mueve electrones para crear electricidad (sin quemar nada).",
    opcional: "Mencionar la diferencia entre fotovoltaica y solar térmica.",
    consejoTiempo: "La explicación del efecto fotovoltaico es la parte central. Simplifícala: «la luz empuja electrones».",
    ejemploMal: "«Los paneles solares cogen la energía del sol y la convierten en electricidad.» (Demasiado vago, no dice cómo.)",
    ejemploBien: "«Un panel solar tiene células hechas de silicio. Cuando la luz del sol choca con el silicio, sus partículas de luz (fotones) empujan los electrones del material y se crea una corriente eléctrica. Es como si la luz diera un empujón a los electrones para que se muevan por un cable.»"
  },
  tarjeta: {
    intro: "Muestra un panel solar y el proceso que ocurre dentro.",
    ideasDibujo: "Dibuja un panel solar en un tejado. Al lado, haz un zoom de una célula: rayos de sol entrando, electrones moviéndose (bolitas con flechas) y una flecha de «corriente eléctrica» saliendo hacia una casa. Etiqueta: «Silicio», «Fotones», «Electrones»."
  },
  curiosidad: "En solo una hora, el Sol envía a la Tierra suficiente energía como para cubrir las necesidades de toda la humanidad durante un año entero. El reto es capturar esa energía de forma eficiente."
},

// ─── Pregunta 14 ──────────────────────────────────────
{
  titulo: "¿Cómo genera electricidad un aerogenerador? Explica el proceso desde que sopla el viento.",
  adaptada: false,
  intro: "Los aerogeneradores son esos «molinos» enormes con tres aspas que ves en los montes y llanuras. Pero no son molinos: no muelen grano, sino que transforman el viento en electricidad.\nEl proceso es elegante: el viento mueve las aspas, que hacen girar un eje conectado a un generador eléctrico. Es parecido a una dinamo de bicicleta, pero a gran escala.",
  subpreguntas: [
    "¿Cuáles son las partes principales de un aerogenerador? (aspas, góndola, torre, generador)",
    "¿Cómo se convierte el movimiento de las aspas en electricidad?",
    "¿A qué velocidad tiene que soplar el viento para que funcione?",
    "¿Por qué las aspas tienen esa forma y son tan grandes?"
  ],
  palabrasClave: ["aerogenerador partes funcionamiento", "energía eólica electricidad", "generador eléctrico turbina eólica", "parque eólico España"],
  referencias: [
    { texto: "Wikipedia: Aerogenerador", url: "https://es.wikipedia.org/wiki/Aerogenerador" },
    { texto: "AEE (Asociación Empresarial Eólica): ¿Cómo funciona un aerogenerador?", url: "https://aeeolica.org/sobre-la-eolica/como-funciona-un-aerogenerador/" },
    { texto: "YouTube – Acciona: Así funciona un aerogenerador", url: "https://www.youtube.com/watch?v=IhS8CAu2D1Q" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la imagen: «Esos gigantes blancos que veis en las carreteras producen electricidad solo con el viento» (5 s).",
      "Nombra las partes principales: aspas, góndola (la cabina de arriba), torre y generador (10 s).",
      "Explica el proceso: viento → aspas giran → eje → generador → electricidad (20 s).",
      "Añade un detalle: las aspas se pueden orientar para aprovechar mejor el viento (10 s).",
      "Cierra con un dato de España o de tamaño de las aspas (15 s)."
    ],
    esencial: "Las partes principales y la cadena de transformación: energía cinética del viento → mecánica (giro) → eléctrica.",
    opcional: "Mencionar los parques eólicos marinos (offshore) o datos de España como potencia eólica.",
    consejoTiempo: "Nombra las partes rápido y dedica más tiempo a explicar la transformación de energía.",
    ejemploMal: "«El aerogenerador es como un ventilador al revés.» (Vago, sin detalles del proceso.)",
    ejemploBien: "«El viento empuja las tres aspas del aerogenerador, que miden hasta 80 metros cada una. Las aspas están conectadas a un eje que hace girar un generador eléctrico dentro de la góndola. Ese generador convierte el movimiento en electricidad, que baja por la torre y se envía a la red.»"
  },
  tarjeta: {
    intro: "Dibuja un aerogenerador con sus partes señaladas.",
    ideasDibujo: "Dibuja un aerogenerador de frente con flechas señalando: aspas, góndola (caja arriba), torre, base. A un lado, una flecha de «viento» empujando las aspas, y abajo una flecha de «electricidad» saliendo hacia casas. Escribe la cadena: viento → giro → electricidad."
  },
  curiosidad: "Las aspas de los aerogeneradores más grandes del mundo miden más de 100 metros cada una. Son tan largas como un campo de fútbol. Y giran a una velocidad que en las puntas puede superar los 300 km/h."
},

// ─── Pregunta 15 ──────────────────────────────────────
{
  titulo: "¿Qué es una central hidroeléctrica y cómo aprovecha el agua para producir electricidad?",
  adaptada: false,
  intro: "El agua que cae desde gran altura tiene mucha energía potencial, y eso es exactamente lo que aprovecha una central hidroeléctrica. Se construye una presa que retiene el agua en un embalse y, cuando se abren las compuertas, el agua cae con fuerza, mueve una turbina y genera electricidad.\nEs una de las formas más antiguas y eficientes de producir electricidad renovable.",
  subpreguntas: [
    "¿Qué es una presa y para qué se construye en una central hidroeléctrica?",
    "¿Cómo se transforma la energía del agua en electricidad? (caída → turbina → generador)",
    "¿Qué tipos de centrales hidroeléctricas existen?",
    "¿Qué ventajas y qué impactos ambientales tienen?"
  ],
  palabrasClave: ["central hidroeléctrica funcionamiento", "presa embalse turbina", "energía hidroeléctrica España", "ventajas hidroeléctrica"],
  referencias: [
    { texto: "Wikipedia: Central hidroeléctrica", url: "https://es.wikipedia.org/wiki/Central_hidroel%C3%A9ctrica" },
    { texto: "Endesa Educa: Energía hidráulica", url: "https://www.endesaeduca.com/endesa-educa/recursos/energia-hidraulica" },
    { texto: "YouTube – EcologíaVerde: Energía hidroeléctrica", url: "https://www.youtube.com/watch?v=_MYyRFFZYBo" }
  ],
  presentacion: {
    pasos: [
      "Empieza con una comparación: «Imagina la fuerza del agua cayendo por una cascada. Ahora imagina usar esa fuerza para producir electricidad» (5 s).",
      "Explica qué es la presa y el embalse: retienen el agua a gran altura (10 s).",
      "Describe el proceso: al abrir compuertas, el agua cae → mueve la turbina → el generador produce electricidad (20 s).",
      "Menciona ventajas (renovable, no contamina el aire) e impactos (inunda valles, afecta a ríos) (15 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "El proceso completo: agua almacenada con energía potencial → caída → turbina → generador → electricidad.",
    opcional: "Hablar de las centrales de bombeo o de los embalses más grandes de España.",
    consejoTiempo: "No hace falta detallar tipos de centrales. Céntrate en una presa normal y el proceso básico.",
    ejemploMal: "«Una central hidroeléctrica usa agua para hacer electricidad.» (No dice cómo.)",
    ejemploBien: "«Una presa retiene el agua a gran altura en un embalse. Cuando se abren las compuertas, el agua cae con fuerza y mueve una turbina enorme. Esa turbina está conectada a un generador que convierte el movimiento en electricidad. La energía potencial del agua se transforma en energía eléctrica.»"
  },
  tarjeta: {
    intro: "Muestra el esquema de una central hidroeléctrica.",
    ideasDibujo: "Dibuja un corte lateral: la presa a la izquierda con agua a gran altura, una tubería que baja hasta una turbina, un generador conectado a la turbina, y cables de electricidad saliendo. Pon flechas con el flujo del agua y etiqueta: «potencial → cinética → eléctrica»."
  },
  curiosidad: "La presa de las Tres Gargantas en China es la central hidroeléctrica más grande del mundo. Tiene 2.335 metros de largo y produce tanta electricidad como 15 centrales nucleares juntas."
},

// ─── Pregunta 16 ──────────────────────────────────────
{
  titulo: "¿Qué es la energía geotérmica? ¿En qué países se aprovecha y por qué?",
  adaptada: false,
  intro: "Bajo nuestros pies, el interior de la Tierra está muy caliente. A varios kilómetros de profundidad, las temperaturas pueden superar los 200 °C. La energía geotérmica aprovecha ese calor natural del subsuelo para generar electricidad o calentar edificios.\nPero no en todos los sitios funciona igual de bien. Hay países como Islandia donde el calor está muy cerca de la superficie gracias a la actividad volcánica.",
  subpreguntas: [
    "¿De dónde viene el calor del interior de la Tierra?",
    "¿Cómo se aprovecha ese calor para producir electricidad o calefacción?",
    "¿En qué países se usa más la energía geotérmica y por qué?",
    "¿Qué ventajas tiene frente a otras energías renovables?"
  ],
  palabrasClave: ["energía geotérmica funcionamiento", "calor interior Tierra", "central geotérmica", "Islandia energía geotérmica"],
  referencias: [
    { texto: "Wikipedia: Energía geotérmica", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_geot%C3%A9rmica" },
    { texto: "IDAE: Energía geotérmica", url: "https://www.idae.es/tecnologias/energias-renovables/energia-geotermica" },
    { texto: "YouTube – National Geographic: Energía geotérmica", url: "https://www.youtube.com/watch?v=CRWEO6s_eSw" }
  ],
  presentacion: {
    pasos: [
      "Empieza con algo llamativo: «A solo unos kilómetros bajo vuestros pies la temperatura supera los 200 grados» (5 s).",
      "Explica de dónde viene ese calor: el núcleo de la Tierra y la desintegración radiactiva (10 s).",
      "Describe cómo se aprovecha: se perfora, se extrae agua caliente o vapor, y se usa para mover turbinas (20 s).",
      "Di en qué países funciona mejor: Islandia, Nueva Zelanda, zonas volcánicas (15 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "Qué es la energía geotérmica (calor del interior de la Tierra) y cómo se aprovecha para generar electricidad.",
    opcional: "Hablar de la geotermia de baja temperatura (calefacción en edificios) o del caso de Islandia.",
    consejoTiempo: "No hace falta que expliques por qué el interior de la Tierra está caliente en detalle. Basta con decir que el núcleo es muy caliente.",
    ejemploMal: "«La geotérmica es la energía de la tierra.» (No explica nada concreto.)",
    ejemploBien: "«El interior de la Tierra está muy caliente. En algunos lugares, como Islandia, ese calor está muy cerca de la superficie. Se perforan pozos para extraer vapor o agua caliente, y con esa energía se mueven turbinas que generan electricidad. Es renovable porque el calor de la Tierra no se agota.»"
  },
  tarjeta: {
    intro: "Muestra un corte del suelo con el calor subterráneo.",
    ideasDibujo: "Dibuja un corte transversal del suelo: superficie con una central arriba, un pozo que baja, y abajo rocas calientes con vapor subiendo. Pon flechas: agua fría baja → se calienta → sube como vapor → mueve turbina. Escribe «Energía del interior de la Tierra»."
  },
  curiosidad: "Islandia aprovecha tanto su energía geotérmica que calienta el 90% de sus hogares con agua caliente del subsuelo. Incluso tienen piscinas al aire libre a 40 °C en pleno invierno, con nieve alrededor."
},

// ─── Pregunta 17 ──────────────────────────────────────
{
  titulo: "¿Qué es la biomasa? ¿Por qué se considera renovable si también se quema?",
  adaptada: false,
  intro: "La biomasa es la energía que obtenemos de materia orgánica: madera, restos de cultivos, estiércol, residuos forestales… Al quemarla o procesarla se libera energía en forma de calor. Pero aquí viene la pregunta: si quemarla también produce CO₂, ¿por qué se considera renovable?\nLa clave está en el ciclo: los árboles y plantas que se queman habían absorbido CO₂ del aire mientras crecían. Si replantamos lo que usamos, el balance de CO₂ puede ser casi neutro.",
  subpreguntas: [
    "¿Qué materiales se consideran biomasa?",
    "¿Cómo se obtiene energía de la biomasa? (quema directa, biogás, biodiésel…)",
    "¿Por qué se considera renovable si emite CO₂ al quemarla?",
    "¿Qué diferencia hay entre quemar biomasa y quemar combustibles fósiles?"
  ],
  palabrasClave: ["biomasa energía renovable", "tipos biomasa", "ciclo carbono biomasa", "biogás biodiésel"],
  referencias: [
    { texto: "Wikipedia: Biomasa", url: "https://es.wikipedia.org/wiki/Biomasa" },
    { texto: "IDAE: Biomasa", url: "https://www.idae.es/tecnologias/energias-renovables/biomasa" },
    { texto: "YouTube – EcologíaVerde: ¿Qué es la biomasa?", url: "https://www.youtube.com/watch?v=DFgGjkE3HQY" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la paradoja: «¿Una energía renovable que se quema? Parece contradictorio, pero tiene su lógica» (5 s).",
      "Explica qué es la biomasa y pon ejemplos: madera, restos de poda, estiércol (10 s).",
      "Describe cómo se obtiene energía: quemando o produciendo biogás (10 s).",
      "Responde la pregunta clave: es renovable porque las plantas que se queman habían absorbido CO₂ al crecer. Si se replantan, el ciclo es equilibrado (20 s).",
      "Cierra con la diferencia con los fósiles (15 s)."
    ],
    esencial: "Qué es la biomasa y por qué se considera renovable (ciclo del carbono: absorbe CO₂ al crecer, lo libera al quemarse).",
    opcional: "Mencionar el biogás, el biodiésel o ejemplos de calderas de biomasa en España.",
    consejoTiempo: "La pregunta clave (¿por qué es renovable?) es lo más importante. Dedícale la mayor parte del tiempo.",
    ejemploMal: "«La biomasa es quemar madera, como las chimeneas.» (No explica por qué es renovable.)",
    ejemploBien: "«La biomasa es energía de materia orgánica: madera, restos de cultivos o estiércol. Al quemarla sale CO₂, sí, pero esas plantas habían absorbido ese CO₂ mientras crecían. Si replantamos lo que usamos, el ciclo se equilibra. En cambio, los combustibles fósiles liberan CO₂ que estaba enterrado hace millones de años.»"
  },
  tarjeta: {
    intro: "Muestra el ciclo de la biomasa frente al de los combustibles fósiles.",
    ideasDibujo: "Dibuja un ciclo circular: árbol crece (absorbe CO₂) → se corta → se quema (libera CO₂) → se planta otro → el nuevo árbol absorbe CO₂. Al lado, compáralo con un dibujo de petróleo: se quema → libera CO₂ → NO se regenera. Escribe: «Biomasa = ciclo cerrado»."
  },
  curiosidad: "En algunos países nórdicos como Suecia, la biomasa es la principal fuente de calefacción. Las calderas de pellets (bolitas de madera comprimida) calientan miles de hogares y edificios públicos."
},

// ─── Pregunta 18 ──────────────────────────────────────
{
  titulo: "¿Qué es la energía mareomotriz? ¿Cómo se puede aprovechar la fuerza del mar?",
  adaptada: false,
  intro: "El mar nunca se detiene: las mareas suben y bajan, las olas rompen sin parar y las corrientes fluyen constantemente. Toda esa agua en movimiento contiene energía, y la energía mareomotriz intenta aprovecharla para generar electricidad.\nEs una fuente de energía renovable muy prometedora, aunque todavía está en desarrollo y hay pocas centrales en el mundo.",
  subpreguntas: [
    "¿Qué diferencia hay entre energía mareomotriz (mareas) y energía undimotriz (olas)?",
    "¿Cómo funciona una central mareomotriz? ¿Cómo se aprovecha la subida y bajada de la marea?",
    "¿Dónde hay centrales de este tipo en el mundo?",
    "¿Por qué no se usa más si el mar tiene tanta energía?"
  ],
  palabrasClave: ["energía mareomotriz funcionamiento", "central mareomotriz mareas", "energía olas undimotriz", "energía del mar renovable"],
  referencias: [
    { texto: "Wikipedia: Energía mareomotriz", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_mareomotriz" },
    { texto: "Iberdrola: Energía marina", url: "https://www.iberdrola.com/sostenibilidad/que-es-energia-mareomotriz" },
    { texto: "YouTube – EcologíaVerde: Energía mareomotriz", url: "https://www.youtube.com/watch?v=eDvMFsFMCYI" }
  ],
  presentacion: {
    pasos: [
      "Empieza con una imagen: «Cada día, la marea sube y baja dos veces. Esa fuerza se puede usar para generar electricidad» (5 s).",
      "Explica qué causa las mareas: la atracción de la Luna y el Sol (10 s).",
      "Describe cómo funciona una central mareomotriz: un dique con turbinas que giran cuando el agua entra y sale (20 s).",
      "Di dónde existe: Francia (La Rance), Corea del Sur… y por qué son pocas (15 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "Qué es la energía mareomotriz y cómo se aprovecha la subida y bajada de la marea para mover turbinas.",
    opcional: "Diferenciar entre mareomotriz (mareas) y undimotriz (olas), o hablar del futuro de la energía marina.",
    consejoTiempo: "Céntrate en explicar cómo funciona el dique con turbinas. Es la parte que tus compañeros necesitan entender.",
    ejemploMal: "«Es la energía del mar.» (No dice cómo se aprovecha.)",
    ejemploBien: "«Las mareas suben y bajan cada día por la atracción de la Luna. En una central mareomotriz se construye un dique en una bahía. Cuando sube la marea, el agua pasa por turbinas y genera electricidad. Cuando baja, también. Es como una presa que funciona en las dos direcciones.»"
  },
  tarjeta: {
    intro: "Muestra cómo funciona un dique mareomotriz.",
    ideasDibujo: "Dibuja un dique (barrera) en una bahía con el mar a un lado. Muestra dos momentos: (1) Marea alta → agua entrando por la turbina (flechas hacia dentro). (2) Marea baja → agua saliendo por la turbina (flechas hacia fuera). Escribe: «Turbina genera electricidad en ambos sentidos»."
  },
  curiosidad: "La central de La Rance en Francia lleva funcionando desde 1966 y produce electricidad para 225.000 hogares solo con la fuerza de las mareas. Es más antigua que muchas centrales nucleares."
},

// ─── Pregunta 19 ──────────────────────────────────────
{
  titulo: "¿Qué es el hidrógeno verde y por qué algunos lo llaman «el combustible del futuro»?",
  adaptada: false,
  intro: "El hidrógeno es el elemento más abundante del universo y, cuando se utiliza como combustible, solo produce agua como residuo. Suena perfecto, ¿verdad? El problema es cómo se fabrica: si se obtiene usando energías fósiles, no es tan limpio.\nPor eso se distingue el «hidrógeno verde»: es el que se produce usando electricidad de fuentes renovables (solar, eólica) para separar el hidrógeno del agua mediante un proceso llamado electrólisis.",
  subpreguntas: [
    "¿Qué es el hidrógeno y por qué puede usarse como combustible?",
    "¿Qué es la electrólisis? ¿Cómo se separa el hidrógeno del agua?",
    "¿Qué diferencia hay entre hidrógeno verde, gris y azul?",
    "¿Para qué se podría usar el hidrógeno verde en el futuro?"
  ],
  palabrasClave: ["hidrógeno verde qué es", "electrólisis agua hidrógeno", "combustible hidrógeno futuro", "hidrógeno renovable energía"],
  referencias: [
    { texto: "Wikipedia: Hidrógeno verde", url: "https://es.wikipedia.org/wiki/Hidr%C3%B3geno_verde" },
    { texto: "Iberdrola: ¿Qué es el hidrógeno verde?", url: "https://www.iberdrola.com/sostenibilidad/hidrogeno-verde" },
    { texto: "YouTube – VisualPolitik: El hidrógeno verde", url: "https://www.youtube.com/watch?v=THyVOa9bJjE" }
  ],
  presentacion: {
    pasos: [
      "Empieza con impacto: «Imagina un combustible que solo produce agua cuando se usa. Existe, y se llama hidrógeno» (5 s).",
      "Explica qué es el hidrógeno y dónde se encuentra: en el agua (H₂O) (10 s).",
      "Describe la electrólisis: usar electricidad renovable para separar el hidrógeno del oxígeno del agua (20 s).",
      "Di por qué se llama «verde»: porque la electricidad que se usa viene de renovables (10 s).",
      "Explica para qué serviría: transporte, industria, almacenar energía (15 s)."
    ],
    esencial: "Qué es el hidrógeno verde, cómo se obtiene por electrólisis con renovables y por qué es prometedor.",
    opcional: "Diferenciar hidrógeno verde del gris o mencionar proyectos en España.",
    consejoTiempo: "La electrólisis es el concepto clave. Explícalo con sencillez: «se usa electricidad para romper el agua en hidrógeno y oxígeno».",
    ejemploMal: "«El hidrógeno verde es un gas que no contamina.» (No dice cómo se obtiene.)",
    ejemploBien: "«El hidrógeno verde se fabrica usando electricidad de fuentes renovables para separar el agua en hidrógeno y oxígeno. Ese proceso se llama electrólisis. Después, el hidrógeno se puede usar como combustible en coches o fábricas, y al quemarlo solo sale agua. Por eso lo llaman el combustible del futuro.»"
  },
  tarjeta: {
    intro: "Muestra el proceso de obtención del hidrógeno verde.",
    ideasDibujo: "Dibuja tres pasos de izquierda a derecha: (1) Panel solar/aerogenerador produciendo electricidad, (2) Un tanque de agua con electricidad entrando y burbujas de H₂ y O₂ saliendo (electrólisis), (3) Un coche con «H₂» que expulsa gotitas de agua por el tubo de escape. Etiqueta: «Solo produce agua»."
  },
  curiosidad: "España es uno de los países europeos con más proyectos de hidrógeno verde, porque tiene mucho sol y viento para producir la electricidad necesaria. Se espera que para 2030 haya plantas de hidrógeno verde por toda la costa."
},

// ─── Pregunta 20 ──────────────────────────────────────
{
  titulo: "¿Por qué España es uno de los mejores países de Europa para la energía solar? Investiga datos.",
  adaptada: false,
  intro: "España tiene una ventaja natural enorme para la energía solar: muchas horas de sol al año. De hecho, es uno de los países de Europa con más radiación solar, especialmente en el sur y en las islas. Pero durante muchos años no se aprovechó bien este potencial.\nEn los últimos años, España se ha convertido en uno de los líderes europeos en instalación de paneles solares, tanto en grandes plantas como en tejados de viviendas.",
  subpreguntas: [
    "¿Cuántas horas de sol tiene España al año comparada con otros países europeos?",
    "¿Qué zonas de España reciben más radiación solar?",
    "¿Cuántos paneles solares hay instalados en España? ¿Cuánta electricidad producen?",
    "¿Qué ventajas económicas tiene para España apostar por la energía solar?"
  ],
  palabrasClave: ["España energía solar datos", "horas sol España Europa", "radiación solar península ibérica", "potencia fotovoltaica instalada España"],
  referencias: [
    { texto: "Wikipedia: Energía solar en España", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_solar_en_Espa%C3%B1a" },
    { texto: "Red Eléctrica de España: Informe de energías renovables", url: "https://www.ree.es/es/datos/generacion/potencia-instalada" },
    { texto: "YouTube – Euronews: España, potencia solar de Europa", url: "https://www.youtube.com/watch?v=TJ94R-Xzbeg" }
  ],
  presentacion: {
    pasos: [
      "Empieza con un dato comparativo: «España tiene entre 2.500 y 3.000 horas de sol al año. Alemania tiene unas 1.600» (5 s).",
      "Explica por qué: su posición geográfica, cerca del trópico, con cielos despejados (10 s).",
      "Da datos concretos: potencia instalada, porcentaje de electricidad solar (investiga datos actuales) (20 s).",
      "Menciona las zonas con más radiación: Andalucía, Extremadura, Murcia, Canarias (10 s).",
      "Cierra con una reflexión: «España puede ser la central solar de Europa» (15 s)."
    ],
    esencial: "Que España tiene muchas más horas de sol que la mayoría de Europa y datos concretos de producción solar.",
    opcional: "Hablar de autoconsumo (paneles en tejados) o de proyectos concretos.",
    consejoTiempo: "Busca 2-3 datos numéricos concretos antes de la exposición. Los números impresionan mucho.",
    ejemploMal: "«España tiene mucho sol, por eso es buena para la energía solar.» (Sin datos concretos.)",
    ejemploBien: "«España recibe más de 2.500 horas de sol al año, casi el doble que Alemania. En 2023, la energía solar ya generaba más del 14% de toda la electricidad del país, y sigue creciendo cada año. Las zonas con más potencial están en el sur: Andalucía, Extremadura y Murcia.»"
  },
  tarjeta: {
    intro: "Usa un mapa y datos numéricos.",
    ideasDibujo: "Dibuja un mapa simplificado de España con zonas coloreadas por intensidad de sol (más oscuro = más sol en el sur). Al lado, pon 2-3 datos clave: horas de sol/año, porcentaje de electricidad solar, comparación con otro país europeo."
  },
  curiosidad: "Extremadura tiene una de las plantas solares más grandes de Europa: la planta de Núñez de Balboa, con 500 MW de potencia, cubre una superficie equivalente a 1.000 campos de fútbol y da electricidad a 250.000 hogares."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 4: ENERGÍA Y MEDIO AMBIENTE (21-25)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 21 ──────────────────────────────────────
{
  titulo: "¿Qué es la lluvia ácida, cómo se produce y qué daños causa?",
  adaptada: false,
  intro: "Cuando quemamos combustibles fósiles (carbón, petróleo, gas) en fábricas, centrales eléctricas y coches, se liberan gases contaminantes al aire, como el dióxido de azufre y los óxidos de nitrógeno. Estos gases suben a la atmósfera y se mezclan con el vapor de agua de las nubes, formando ácidos.\nCuando llueve, esa agua cae con esos ácidos disueltos: es la lluvia ácida, y puede causar daños serios en bosques, lagos y edificios.",
  subpreguntas: [
    "¿Qué gases causan la lluvia ácida? ¿De dónde salen?",
    "¿Cómo se forman los ácidos en la atmósfera?",
    "¿Qué efectos tiene la lluvia ácida en la naturaleza (bosques, lagos, suelos)?",
    "¿Qué daños causa en edificios y monumentos?"
  ],
  palabrasClave: ["lluvia ácida causas efectos", "dióxido azufre óxidos nitrógeno", "lluvia ácida bosques lagos", "contaminación atmosférica lluvia ácida"],
  referencias: [
    { texto: "Wikipedia: Lluvia ácida", url: "https://es.wikipedia.org/wiki/Lluvia_%C3%A1cida" },
    { texto: "National Geographic España: Lluvia ácida", url: "https://www.nationalgeographic.com.es/ciencia/lluvia-acida_15000" },
    { texto: "YouTube – Happy Learning: La contaminación del aire", url: "https://www.youtube.com/watch?v=BXDg_V0QVOE" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la imagen: «Imagina que la lluvia que cae lleva ácido disuelto. No es ciencia ficción, ocurre de verdad» (5 s).",
      "Explica qué gases la causan y de dónde vienen: fábricas, centrales y coches (10 s).",
      "Describe cómo se forma: los gases suben, se mezclan con agua en las nubes, forman ácidos y caen con la lluvia (15 s).",
      "Di qué daños causa: bosques dañados, peces que mueren en lagos ácidos, monumentos de piedra que se corroen (20 s).",
      "Cierra con algo positivo: medidas para reducirla (10 s)."
    ],
    esencial: "Cómo se produce la lluvia ácida (gases contaminantes + agua en nubes) y qué daños causa.",
    opcional: "Hablar de las leyes que han reducido la lluvia ácida en Europa o de cómo se mide la acidez (pH).",
    consejoTiempo: "No te líes con la química del proceso. Basta con decir «los gases se mezclan con agua y forman ácidos».",
    ejemploMal: "«La lluvia ácida es una lluvia con ácido que hace daño.» (No explica cómo se forma.)",
    ejemploBien: "«Las fábricas y los coches liberan gases como el dióxido de azufre. Esos gases suben a las nubes y se mezclan con el agua, formando ácidos. Cuando llueve, el agua cae con esos ácidos y daña los bosques, mata los peces de los lagos y corroe las piedras de los edificios antiguos.»"
  },
  tarjeta: {
    intro: "Muestra el ciclo de la lluvia ácida desde la fábrica hasta los daños.",
    ideasDibujo: "Dibuja un ciclo: una fábrica con humo subiendo → el humo llega a una nube → la nube suelta lluvia con gotas marcadas «ácido» → abajo, un bosque con árboles dañados y un lago con peces muertos. Pon flechas mostrando el recorrido de los gases."
  },
  curiosidad: "La lluvia ácida llegó a ser tan fuerte en Escandinavia en los años 80 que desaparecieron los peces de miles de lagos. Gracias a las leyes que limitaron las emisiones, muchos de esos lagos han vuelto a tener vida."
},

// ─── Pregunta 22 ──────────────────────────────────────
{
  titulo: "¿Cómo afecta la quema de combustibles al cambio climático? Explica la relación con los gases de efecto invernadero.",
  adaptada: false,
  intro: "Cada vez que quemamos gasolina, carbón o gas natural, liberamos dióxido de carbono (CO₂) a la atmósfera. Este gas es transparente, pero tiene una propiedad especial: deja pasar la luz del sol pero atrapa el calor que rebota de la Tierra, como los cristales de un invernadero.\nCuanto más CO₂ acumulamos en la atmósfera, más calor queda atrapado, y eso está calentando el planeta poco a poco. Es lo que llamamos cambio climático.",
  subpreguntas: [
    "¿Qué son los gases de efecto invernadero? ¿Cuáles son los principales?",
    "¿Cómo funciona el efecto invernadero? ¿Por qué se llama así?",
    "¿Qué relación hay entre quemar combustibles fósiles y el aumento de CO₂?",
    "¿Qué consecuencias tiene el calentamiento global?"
  ],
  palabrasClave: ["efecto invernadero explicación", "gases efecto invernadero CO2", "cambio climático combustibles fósiles", "calentamiento global consecuencias"],
  referencias: [
    { texto: "Wikipedia: Efecto invernadero", url: "https://es.wikipedia.org/wiki/Efecto_invernadero" },
    { texto: "Ministerio de Transición Ecológica: Cambio climático", url: "https://www.miteco.gob.es/es/cambio-climatico/temas/que-es-el-cambio-climatico-y-como-nos-afecta/" },
    { texto: "YouTube – Smile and Learn: El cambio climático para niños", url: "https://www.youtube.com/watch?v=LxMpnJFuVP0" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la comparación del invernadero: «¿Habéis entrado en un invernadero? Dentro hace más calor porque el cristal atrapa el calor» (5 s).",
      "Explica que el CO₂ hace lo mismo en la atmósfera (10 s).",
      "Conecta con los combustibles: al quemarlos, el CO₂ que estaba enterrado sube a la atmósfera (15 s).",
      "Di las consecuencias principales: sube la temperatura global, se derriten los polos, sube el nivel del mar, fenómenos extremos (20 s).",
      "Cierra con una reflexión o dato (10 s)."
    ],
    esencial: "Cómo funciona el efecto invernadero y la conexión directa entre quemar combustibles fósiles y el calentamiento global.",
    opcional: "Mencionar los Acuerdos de París o dar datos de subida de temperatura global.",
    consejoTiempo: "La comparación del invernadero es tu mejor herramienta. Úsala y el resto se entiende solo.",
    ejemploMal: "«La contaminación produce cambio climático.» (Vago, no dice cómo.)",
    ejemploBien: "«Al quemar gasolina o carbón se libera CO₂, un gas que deja pasar la luz del sol pero atrapa el calor, como el cristal de un invernadero. Cuanto más CO₂ hay en la atmósfera, más calor queda atrapado. Por eso la temperatura de la Tierra está subiendo, los polos se derriten y el clima se vuelve más extremo.»"
  },
  tarjeta: {
    intro: "Muestra el efecto invernadero de forma visual.",
    ideasDibujo: "Dibuja la Tierra con una capa de atmósfera alrededor. Flechas de sol entrando → flechas de calor intentando salir pero rebotando en la capa de CO₂ → la Tierra se calienta. A un lado, una fábrica y un coche emitiendo CO₂ hacia arriba. Escribe: «Más CO₂ = más calor atrapado»."
  },
  curiosidad: "La concentración de CO₂ en la atmósfera ha pasado de 280 partes por millón antes de la Revolución Industrial a más de 420 hoy. Es el nivel más alto en al menos 800.000 años."
},

// ─── Pregunta 23 ──────────────────────────────────────
{
  titulo: "¿Qué es la huella de carbono? ¿Cómo podría una familia reducir la suya?",
  adaptada: false,
  intro: "La huella de carbono es la cantidad total de gases de efecto invernadero (sobre todo CO₂) que una persona, una familia o una empresa produce con sus actividades diarias: usar el coche, encender la calefacción, comprar cosas, comer carne…\nEs como una «cuenta» de cuánto contamina nuestra forma de vida. Y la buena noticia es que hay muchas formas de reducirla.",
  subpreguntas: [
    "¿Qué se mide exactamente con la huella de carbono?",
    "¿Qué actividades cotidianas producen más CO₂? (transporte, alimentación, hogar…)",
    "¿Cuál es la huella de carbono media de una persona en España?",
    "¿Qué acciones concretas puede hacer una familia para reducirla?"
  ],
  palabrasClave: ["huella de carbono qué es", "huella carbono familia", "reducir huella carbono acciones", "calculadora huella de carbono"],
  referencias: [
    { texto: "Wikipedia: Huella de carbono", url: "https://es.wikipedia.org/wiki/Huella_de_carbono" },
    { texto: "Ministerio de Transición Ecológica: Calcula tu huella", url: "https://www.miteco.gob.es/es/cambio-climatico/temas/mitigacion-politicas-y-medidas/calculadora.html" },
    { texto: "YouTube – DW en español: ¿Qué es la huella de carbono?", url: "https://www.youtube.com/watch?v=B-FJT1t5Hw4" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la idea: «Cada cosa que hacemos deja una marca invisible de CO₂. Eso es nuestra huella de carbono» (5 s).",
      "Explica qué mide: los gases de efecto invernadero de nuestras actividades (10 s).",
      "Da ejemplos de actividades con mucha huella: viajar en avión, comer mucha carne, calefacción (15 s).",
      "Propón 3-4 acciones concretas para reducirla: transporte público, menos carne, apagar luces, comprar local (20 s).",
      "Cierra con un dato (10 s)."
    ],
    esencial: "Qué es la huella de carbono y al menos tres acciones concretas para reducirla.",
    opcional: "Dar datos numéricos (toneladas de CO₂ por persona en España) o hablar de la calculadora del gobierno.",
    consejoTiempo: "Las acciones concretas son lo más útil para tus compañeros. Dedícales más tiempo que a la definición.",
    ejemploMal: "«La huella de carbono es cuánto contaminamos.» (Correcto pero sin ejemplos ni soluciones.)",
    ejemploBien: "«La huella de carbono mide cuánto CO₂ produce nuestra forma de vida. Por ejemplo, un vuelo Madrid-Londres genera más CO₂ que ir en tren por toda España. Una familia puede reducir su huella usando el transporte público, comiendo menos carne y apagando los electrodomésticos que no usa.»"
  },
  tarjeta: {
    intro: "Haz una lista visual de acciones para reducir la huella.",
    ideasDibujo: "Dibuja una huella de pie grande en el centro. A un lado, escribe actividades que la aumentan (avión, coche, carne). Al otro lado, acciones que la reducen (bici, transporte público, fruta local, apagar luces). Usa flechas rojas (↑) y verdes (↓) para indicar más o menos huella."
  },
  curiosidad: "Un español medio produce unas 5,5 toneladas de CO₂ al año. Un estadounidense produce más del doble: casi 14 toneladas. Para frenar el cambio climático, cada persona del planeta debería estar por debajo de 2 toneladas."
},

// ─── Pregunta 24 ──────────────────────────────────────
{
  titulo: "¿Qué problemas ambientales puede causar una central nuclear? ¿Y un parque eólico?",
  adaptada: false,
  intro: "Ninguna fuente de energía es perfecta. Incluso las renovables tienen impactos ambientales. Una central nuclear no emite CO₂ mientras funciona, pero genera residuos radiactivos muy peligrosos. Un parque eólico no contamina el aire, pero puede afectar al paisaje y a las aves.\nComparar los impactos de diferentes fuentes de energía es importante para tomar buenas decisiones como sociedad.",
  subpreguntas: [
    "¿Qué problemas ambientales causan las centrales nucleares? (residuos, riesgo de accidentes, agua de refrigeración)",
    "¿Qué problemas ambientales causan los parques eólicos? (aves, ruido, paisaje, materiales de construcción)",
    "¿Cuáles son más graves? ¿Se pueden comparar?",
    "¿Qué se hace para reducir el impacto ambiental de cada una?"
  ],
  palabrasClave: ["impacto ambiental central nuclear", "impacto ambiental parque eólico", "residuos nucleares problema", "aerogeneradores aves paisaje"],
  referencias: [
    { texto: "Wikipedia: Energía nuclear – Impacto ambiental", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_nuclear#Impacto_ambiental" },
    { texto: "SEO/BirdLife: Eólica y aves", url: "https://www.seo.org/energia-eolica/" },
    { texto: "YouTube – DW Documental: Residuos nucleares", url: "https://www.youtube.com/watch?v=N30a-TwNmPs" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la idea: «Ninguna energía es perfecta. Todas tienen su lado positivo y su impacto» (5 s).",
      "Habla de la nuclear: el gran problema son los residuos radiactivos que duran miles de años y el riesgo (aunque bajo) de accidentes (20 s).",
      "Habla de la eólica: puede matar aves que chocan con las aspas, produce ruido y cambia el paisaje (20 s).",
      "Compáralas brevemente: los impactos son muy diferentes en escala y tipo (5 s).",
      "Cierra con reflexión (10 s)."
    ],
    esencial: "Los principales problemas ambientales de cada una: nuclear (residuos radiactivos) y eólica (aves, paisaje).",
    opcional: "Hablar de las soluciones que se aplican para reducir cada impacto.",
    consejoTiempo: "Reparte el tiempo equitativamente entre nuclear y eólica. No te centres solo en una.",
    ejemploMal: "«La nuclear es peligrosa y la eólica mata pájaros.» (Simplista y alarmista.)",
    ejemploBien: "«La energía nuclear no emite CO₂, pero produce residuos radiactivos que son peligrosos durante miles de años y hay que almacenar en lugares seguros. Los parques eólicos no contaminan el aire, pero las aspas pueden matar aves rapaces que vuelan cerca, y cambian mucho el paisaje de las montañas. Son impactos muy distintos, pero ambos importan.»"
  },
  tarjeta: {
    intro: "Haz una tabla comparativa de los dos tipos de energía.",
    ideasDibujo: "Haz dos columnas: Nuclear (dibujo de central con símbolo radiactivo) y Eólica (dibujo de aerogenerador). En cada columna pon ✅ Ventajas y ❌ Problemas. Abajo, escribe: «Ninguna energía es perfecta: hay que elegir sabiamente»."
  },
  curiosidad: "Los residuos radiactivos más peligrosos de una central nuclear siguen siendo radiactivos durante más de 10.000 años. En Finlandia están construyendo un almacén subterráneo a 400 metros de profundidad para guardarlos de forma segura."
},

// ─── Pregunta 25 ──────────────────────────────────────
{
  titulo: "¿Qué pasa con los paneles solares cuando dejan de funcionar? ¿Se pueden reciclar?",
  adaptada: false,
  intro: "Los paneles solares duran entre 25 y 30 años. Después, su rendimiento baja tanto que hay que retirarlos. Pero como cada vez se instalan más paneles, dentro de unos años habrá millones de paneles viejos que habrá que gestionar.\n¿Se tiran a un vertedero? No deberían, porque contienen materiales valiosos como silicio, plata y cobre, pero también sustancias que pueden ser contaminantes si no se tratan bien.",
  subpreguntas: [
    "¿Cuánto dura un panel solar? ¿Qué pasa cuando deja de ser eficiente?",
    "¿De qué materiales está hecho un panel solar?",
    "¿Se pueden reciclar esos materiales? ¿Cómo?",
    "¿Cuántos paneles habrá que reciclar en los próximos años?"
  ],
  palabrasClave: ["reciclaje paneles solares", "vida útil panel solar", "residuos fotovoltaicos", "materiales panel solar silicio"],
  referencias: [
    { texto: "Wikipedia: Reciclaje de módulos fotovoltaicos", url: "https://es.wikipedia.org/wiki/Reciclaje_de_m%C3%B3dulos_fotovoltaicos" },
    { texto: "Ecoembes: Reciclar paneles solares", url: "https://www.ecoembes.com/" },
    { texto: "YouTube – DW en español: El problema de reciclar paneles solares", url: "https://www.youtube.com/watch?v=HJjqzFPwwKU" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la pregunta: «Los paneles solares son geniales, pero ¿qué hacemos con ellos cuando se estropean?» (5 s).",
      "Di cuánto duran (25-30 años) y de qué están hechos (silicio, vidrio, aluminio, cobre, plata) (15 s).",
      "Explica que sí se pueden reciclar y qué se recupera: hasta el 95% de los materiales (15 s).",
      "Plantea el reto futuro: millones de paneles llegarán al final de su vida útil pronto (15 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "Que los paneles duran 25-30 años, que contienen materiales valiosos y que se pueden reciclar (hasta un 95%).",
    opcional: "Hablar de la normativa europea sobre reciclaje de paneles o del concepto de economía circular.",
    consejoTiempo: "No te pierdas en los detalles técnicos del reciclaje. Lo importante es transmitir que es posible y necesario.",
    ejemploMal: "«Los paneles viejos se tiran.» (Incorrecto y sin información.)",
    ejemploBien: "«Un panel solar dura unos 25 años. Está hecho de vidrio, silicio, aluminio y otros metales como plata y cobre. Cuando deja de funcionar, se puede reciclar y recuperar hasta el 95% de esos materiales. Es importante porque en unos años habrá millones de paneles viejos en Europa.»"
  },
  tarjeta: {
    intro: "Muestra la vida del panel solar y su reciclaje.",
    ideasDibujo: "Dibuja un ciclo: (1) Panel nuevo en un tejado produciendo electricidad → (2) Tras 25 años, panel viejo → (3) Planta de reciclaje que separa vidrio, silicio, metales → (4) Materiales recuperados se usan en nuevos paneles. Etiqueta: «Economía circular»."
  },
  curiosidad: "Para 2050 se calcula que habrá que reciclar más de 78 millones de toneladas de paneles solares en todo el mundo. Ya hay empresas especializadas que pueden recuperar el vidrio, el silicio y los metales preciosos de cada panel."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 5: ENERGÍA EN LA VIDA COTIDIANA (26-34)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 26 ──────────────────────────────────────
{
  titulo: "¿Cómo funciona un microondas para calentar la comida? ¿Qué tipo de energía usa?",
  adaptada: false,
  intro: "El microondas es uno de los electrodomésticos más usados en cualquier cocina, pero su funcionamiento es bastante especial: no calienta la comida por fuera como un horno normal, sino que hace vibrar las moléculas de agua que hay dentro de los alimentos.\nUsa un tipo de radiación electromagnética (las microondas, de ahí su nombre) que es diferente a la luz visible pero que hace que las moléculas de agua giren muy rápido, generando calor por fricción.",
  subpreguntas: [
    "¿Qué son las microondas? ¿Qué tipo de radiación electromagnética son?",
    "¿Por qué el microondas calienta los alimentos desde dentro?",
    "¿Por qué las moléculas de agua se mueven con las microondas?",
    "¿Por qué un plato vacío (sin agua) no se calienta en el microondas?"
  ],
  palabrasClave: ["microondas funcionamiento ondas electromagnéticas", "microondas moléculas agua vibración", "magnetrón microondas", "energía electromagnética calor"],
  referencias: [
    { texto: "Wikipedia: Horno de microondas", url: "https://es.wikipedia.org/wiki/Horno_de_microondas" },
    { texto: "Xataka: Así funciona tu microondas", url: "https://www.xataka.com/investigacion/asi-funciona-tu-microondas" },
    { texto: "YouTube – Date un Vlog: ¿Cómo funciona un microondas?", url: "https://www.youtube.com/watch?v=kp33ZprO0Ck" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la pregunta: «¿Alguna vez os habéis preguntado por qué el microondas calienta la comida pero no el plato?» (5 s).",
      "Explica qué son las microondas: un tipo de onda electromagnética (10 s).",
      "Describe el proceso: las ondas hacen vibrar las moléculas de agua dentro de la comida, y esa vibración genera calor (20 s).",
      "Explica la transformación de energía: eléctrica → electromagnética → cinética (vibración) → térmica (15 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "Que las microondas hacen vibrar las moléculas de agua y eso genera calor desde el interior del alimento.",
    opcional: "Mencionar el magnetrón (la pieza que genera las microondas) o por qué no se deben meter metales.",
    consejoTiempo: "Concéntrate en la idea de «las ondas mueven las moléculas de agua → el movimiento genera calor».",
    ejemploMal: "«El microondas calienta las cosas con ondas.» (Vago, no dice cómo ni por qué.)",
    ejemploBien: "«El microondas genera unas ondas electromagnéticas que hacen vibrar las moléculas de agua dentro de la comida. Esas moléculas se mueven tan rápido que generan calor por fricción. Por eso calienta desde dentro, y por eso un plato de porcelana vacío no se calienta: no tiene agua.»"
  },
  tarjeta: {
    intro: "Muestra cómo las microondas calientan la comida.",
    ideasDibujo: "Dibuja un microondas abierto con un plato de comida dentro. Al lado, haz un zoom: ondas llegando a las moléculas de agua (bolitas con H₂O) que vibran (con flechas de movimiento). Escribe la cadena: «ondas → vibración moléculas agua → calor»."
  },
  curiosidad: "El horno de microondas se inventó por accidente en 1945 cuando un ingeniero llamado Percy Spencer estaba trabajando con un radar militar y se le derritió una chocolatina que tenía en el bolsillo."
},

// ─── Pregunta 27 ──────────────────────────────────────
{
  titulo: "¿Cómo funcionan las placas de inducción de la cocina? ¿En qué se diferencian de las vitrocerámicas normales?",
  adaptada: false,
  intro: "Si tienes una placa de inducción en casa, habrás notado algo curioso: la superficie apenas se calienta, pero la sartén se pone al rojo vivo. Eso es porque la inducción no calienta la placa, sino directamente el fondo de la sartén o cazuela, usando campos magnéticos.\nEs un método muy diferente a las vitrocerámicas normales (que calientan una resistencia) y mucho más eficiente.",
  subpreguntas: [
    "¿Qué es la inducción electromagnética?",
    "¿Cómo genera calor una placa de inducción en la sartén sin calentar la superficie?",
    "¿Por qué en una placa de inducción solo sirven sartenes de ciertos materiales (como hierro o acero)?",
    "¿Qué ventajas tiene la inducción frente a la vitrocerámica clásica o el gas?"
  ],
  palabrasClave: ["placa inducción funcionamiento", "inducción electromagnética cocina", "inducción vs vitrocerámica", "eficiencia placa inducción"],
  referencias: [
    { texto: "Wikipedia: Cocina de inducción", url: "https://es.wikipedia.org/wiki/Cocina_de_inducci%C3%B3n" },
    { texto: "OCU: Inducción vs vitrocerámica", url: "https://www.ocu.org/vivienda-y-energia/equipamiento-hogar/noticias/induccion-vitroceramica" },
    { texto: "YouTube – Ter: ¿Cómo funciona la inducción?", url: "https://www.youtube.com/watch?v=YKFnhMhbPOQ" }
  ],
  presentacion: {
    pasos: [
      "Empieza con lo llamativo: «¿Sabéis que hay cocinas donde puedes tocar la placa encendida y no te quemas?» (5 s).",
      "Explica el principio: debajo del cristal hay una bobina que genera un campo magnético cambiante (10 s).",
      "Describe cómo funciona: el campo magnético crea corrientes en el fondo metálico de la sartén, y esas corrientes la calientan (20 s).",
      "Di por qué solo funcionan sartenes magnéticas (hierro, acero) y no aluminio o vidrio (10 s).",
      "Compara brevemente con vitrocerámica normal (resistencia que calienta) y cierra (15 s)."
    ],
    esencial: "Que la inducción calienta directamente la sartén con campos magnéticos, sin calentar la superficie de la placa.",
    opcional: "Hablar de la eficiencia energética comparada con gas o vitrocerámica.",
    consejoTiempo: "La idea clave es sencilla: «campo magnético → corrientes en la sartén → calor». No te pierdas en el electromagnetismo.",
    ejemploMal: "«La inducción calienta con imanes.» (Impreciso y no explica el proceso.)",
    ejemploBien: "«Debajo del cristal hay una bobina eléctrica que crea un campo magnético que cambia muy rápido. Ese campo magnético genera corrientes eléctricas en el fondo de la sartén, y esas corrientes la calientan. El cristal de la placa casi no se calienta. Por eso solo sirven sartenes de hierro o acero, que son materiales magnéticos.»"
  },
  tarjeta: {
    intro: "Compara inducción con vitrocerámica normal.",
    ideasDibujo: "Dibuja dos esquemas lado a lado: (1) Vitrocerámica normal: resistencia se calienta → calienta el cristal → calienta la sartén. (2) Inducción: bobina genera campo magnético → calienta directamente la sartén → el cristal no se calienta. Marca con una flecha: «Más eficiente»."
  },
  curiosidad: "Una placa de inducción aprovecha el 90% de la energía eléctrica para calentar la comida. Una cocina de gas solo aprovecha el 40%. La inducción es más del doble de eficiente."
},

// ─── Pregunta 28 ──────────────────────────────────────
{
  titulo: "¿Qué es un LED y por qué ahorra más energía que una bombilla incandescente?",
  adaptada: false,
  intro: "Las bombillas LED han revolucionado la iluminación en pocos años. Si en tu casa todavía queda alguna bombilla antigua (las redondas amarillas que quemaban), notarás que un LED da la misma luz pero gasta una fracción de la energía.\nLa razón es sencilla: una bombilla incandescente convierte la mayor parte de la electricidad en calor (por eso quema al tocarla) y solo un 5% en luz. Un LED, en cambio, convierte mucha más electricidad directamente en luz.",
  subpreguntas: [
    "¿Qué significa LED? ¿De qué está hecho?",
    "¿Cómo produce luz un LED? ¿En qué se diferencia de una bombilla incandescente?",
    "¿Cuánta energía ahorra un LED comparado con una bombilla antigua?",
    "¿Cuánto dura un LED frente a una bombilla incandescente?"
  ],
  palabrasClave: ["LED qué es cómo funciona", "LED vs bombilla incandescente", "ahorro energía LED", "eficiencia luminosa LED"],
  referencias: [
    { texto: "Wikipedia: Diodo emisor de luz", url: "https://es.wikipedia.org/wiki/Diodo_emisor_de_luz" },
    { texto: "IDAE: Iluminación eficiente", url: "https://www.idae.es/tecnologias/eficiencia-energetica/equipamiento-domestico/iluminacion" },
    { texto: "YouTube – QuantumFracture: ¿Cómo funciona un LED?", url: "https://www.youtube.com/watch?v=AF8d72mA41M" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la comparación: «Una bombilla antigua gasta el 95% de su energía en calor y solo el 5% en luz» (5 s).",
      "Explica qué es un LED: un componente electrónico (diodo) que emite luz al pasar corriente (10 s).",
      "Di la diferencia clave: el LED convierte mucha más electricidad en luz y muy poca en calor (15 s).",
      "Da datos: un LED de 10 W da la misma luz que una bombilla antigua de 60 W, y dura 25 veces más (20 s).",
      "Cierra con dato o impacto ambiental (10 s)."
    ],
    esencial: "La diferencia de eficiencia: una bombilla antigua pierde el 95% en calor; un LED es mucho más eficiente.",
    opcional: "Explicar brevemente cómo funciona un diodo emisor de luz a nivel electrónico.",
    consejoTiempo: "Los datos numéricos (vatios, duración) son muy convincentes. Tenlos preparados.",
    ejemploMal: "«El LED gasta menos.» (Sin explicar por qué.)",
    ejemploBien: "«Una bombilla antigua de 60 vatios da la misma luz que un LED de solo 10 vatios. La diferencia es que la bombilla antigua convierte el 95% de la energía en calor inútil, mientras que el LED convierte la mayor parte directamente en luz. Además, un LED dura unas 25.000 horas: 25 veces más que una incandescente.»"
  },
  tarjeta: {
    intro: "Compara los dos tipos de bombilla con datos.",
    ideasDibujo: "Dibuja dos bombillas lado a lado: una incandescente (con flechas de calor saliendo por todos lados y poca luz) y un LED (con mucha luz y casi nada de calor). Debajo, una tabla: Incandescente: 60 W, 1.000 h, 5% luz. LED: 10 W, 25.000 h, 80% luz."
  },
  curiosidad: "Si todas las bombillas del mundo se cambiaran por LED, se ahorraría tanta electricidad como la que producen 250 centrales nucleares. Los tres inventores del LED azul (que permitió crear LED de luz blanca) ganaron el Premio Nobel de Física en 2014."
},

// ─── Pregunta 29 ──────────────────────────────────────
{
  titulo: "¿Qué es la eficiencia energética? ¿Por qué un electrodoméstico de clase A es mejor que uno de clase G?",
  adaptada: false,
  intro: "Dos lavadoras pueden lavar la misma cantidad de ropa con el mismo resultado, pero una puede gastar el doble de electricidad que la otra. La eficiencia energética mide exactamente eso: cuánta energía «útil» obtienes en relación con la energía total que consume un aparato.\nPara que los consumidores puedan comparar, en Europa se usa la etiqueta energética: las letras de la A (más eficiente) a la G (menos eficiente), con colores del verde al rojo.",
  subpreguntas: [
    "¿Qué significa eficiencia energética? ¿Se aplica solo a electrodomésticos?",
    "¿Cómo funciona la etiqueta energética europea? ¿Qué información da?",
    "¿Cuánto dinero y energía se ahorra eligiendo un electrodoméstico clase A frente a uno clase G?",
    "¿Qué otros aparatos o elementos de la casa tienen etiqueta energética?"
  ],
  palabrasClave: ["eficiencia energética definición", "etiqueta energética europea", "clase energética A G electrodomésticos", "ahorro electrodoméstico eficiente"],
  referencias: [
    { texto: "Wikipedia: Etiqueta de eficiencia energética", url: "https://es.wikipedia.org/wiki/Etiqueta_de_eficiencia_energ%C3%A9tica" },
    { texto: "IDAE: Etiquetado energético", url: "https://www.idae.es/tecnologias/eficiencia-energetica/equipamiento-domestico" },
    { texto: "YouTube – OCU: ¿Qué es la etiqueta energética?", url: "https://www.youtube.com/watch?v=D9BFzLpRkY8" }
  ],
  presentacion: {
    pasos: [
      "Empieza con ejemplo: «¿Os habéis fijado en la pegatina con letras de colores que tienen los frigoríficos en la tienda?» (5 s).",
      "Explica qué es la eficiencia energética (10 s).",
      "Describe la etiqueta: de A (verde, más eficiente) a G (rojo, menos eficiente) (15 s).",
      "Da un ejemplo concreto de ahorro: un frigorífico A puede gastar la mitad que uno E (20 s).",
      "Cierra con dato o consejo (10 s)."
    ],
    esencial: "Qué es la eficiencia energética y cómo leer la etiqueta energética europea (A a G).",
    opcional: "Mencionar que los edificios también tienen etiqueta energética o hablar de la nueva escala (sin A+++, A++).",
    consejoTiempo: "La etiqueta es muy visual. Si puedes, dibújala o descríbela con detalle.",
    ejemploMal: "«La clase A gasta menos electricidad que la G.» (Correcto pero sin explicar qué es la eficiencia.)",
    ejemploBien: "«La eficiencia energética mide cuánto aprovecha un aparato la energía que consume. La etiqueta va de la A (verde, muy eficiente) a la G (rojo, poco eficiente). Un frigorífico clase A puede gastar hasta un 50% menos de electricidad que uno clase E haciendo exactamente lo mismo. A la larga, el más eficiente te ahorra dinero.»"
  },
  tarjeta: {
    intro: "Dibuja una etiqueta energética y explica qué significa.",
    ideasDibujo: "Dibuja la etiqueta energética: barras de colores del verde (A) al rojo (G), cada una más ancha. Al lado, pon un frigorífico con la flecha en «A». Debajo, escribe: «Mismo resultado, menos energía, más ahorro»."
  },
  curiosidad: "Si todos los electrodomésticos de Europa se sustituyeran por modelos clase A, se ahorraría tanta electricidad como la que consumen todos los hogares de España durante un año."
},

// ─── Pregunta 30 ──────────────────────────────────────
{
  titulo: "¿Cómo funciona la calefacción de gas en una casa? ¿Qué transformaciones de energía se producen?",
  adaptada: false,
  intro: "Cuando enciendes la calefacción en invierno y tu casa se calienta, parece algo sencillo. Pero detrás hay un sistema bastante ingenioso: una caldera quema gas natural, calienta agua, y esa agua caliente circula por radiadores que emiten calor a las habitaciones.\nEs una cadena de transformaciones de energía: la energía química del gas se transforma en calor, y el agua se encarga de transportarlo por toda la casa.",
  subpreguntas: [
    "¿Qué ocurre dentro de la caldera de gas? ¿Qué transformación de energía se produce?",
    "¿Cómo se calienta el agua y cómo llega a los radiadores?",
    "¿Cómo calientan los radiadores el aire de la habitación?",
    "¿Se pierde energía en el proceso? ¿Dónde?"
  ],
  palabrasClave: ["caldera gas calefacción funcionamiento", "radiador agua caliente calefacción", "transformación energía calefacción", "energía química gas térmica"],
  referencias: [
    { texto: "Wikipedia: Calefacción central", url: "https://es.wikipedia.org/wiki/Calefacci%C3%B3n_central" },
    { texto: "Naturgy: ¿Cómo funciona la calefacción de gas?", url: "https://www.naturgy.com/hogar/gas_natural/calefaccion" },
    { texto: "YouTube – Leroy Merlin: Calefacción, cómo funciona", url: "https://www.youtube.com/watch?v=LBMqLhqJ_cQ" }
  ],
  presentacion: {
    pasos: [
      "Empieza con algo cotidiano: «En invierno, encendemos la calefacción y la casa se calienta. Pero ¿cómo?» (5 s).",
      "Explica la caldera: quema gas, calienta agua (energía química → térmica) (15 s).",
      "Describe el circuito: el agua caliente viaja por tuberías hasta los radiadores (10 s).",
      "Explica cómo el radiador calienta la habitación: el aire toca el metal caliente y sube (convección) (15 s).",
      "Di qué transformaciones hay y cierra (15 s)."
    ],
    esencial: "La cadena completa: gas (energía química) → caldera (energía térmica) → agua caliente → radiadores → calor en la habitación.",
    opcional: "Hablar de calderas de condensación (más eficientes) o comparar con otros sistemas de calefacción.",
    consejoTiempo: "Sigue el recorrido del calor como un viaje: caldera → tuberías → radiador → aire de la habitación.",
    ejemploMal: "«La calefacción quema gas y calienta la casa.» (No explica el proceso.)",
    ejemploBien: "«La caldera quema gas natural y calienta agua hasta 60-80 grados. Esa agua caliente viaja por tuberías hasta los radiadores de cada habitación. El radiador cede calor al aire que lo toca, y ese aire caliente sube y se reparte por la habitación. La energía química del gas se ha transformado en calor que te mantiene caliente.»"
  },
  tarjeta: {
    intro: "Muestra el circuito de la calefacción.",
    ideasDibujo: "Dibuja un circuito: caldera (con llama) → tubería roja (agua caliente) hacia un radiador → tubería azul (agua fría) volviendo a la caldera. Al lado del radiador, flechas de aire caliente subiendo. Etiqueta la transformación: «química → térmica → convección»."
  },
  curiosidad: "Las calderas de condensación modernas aprovechan hasta el calor del vapor de agua que sale por los humos, alcanzando una eficiencia de más del 98%. Casi toda la energía del gas se convierte en calor útil."
},

// ─── Pregunta 31 ──────────────────────────────────────
{
  titulo: "¿Cómo almacenan energía las baterías de los teléfonos móviles? ¿Qué tipo de energía guardan?",
  adaptada: false,
  intro: "Cada vez que cargas tu móvil, estás almacenando energía eléctrica en forma de energía química dentro de la batería. Las baterías de los teléfonos son de un tipo llamado «litio-ion» y funcionan moviendo partículas con carga (iones de litio) de un lado a otro dentro de la batería.\nCuando usas el móvil, esos iones se mueven en sentido contrario y liberan la energía almacenada como electricidad.",
  subpreguntas: [
    "¿Qué tipo de batería usan los móviles? ¿De qué materiales está hecha?",
    "¿Cómo se almacena la energía dentro de la batería? (reacciones químicas)",
    "¿Qué pasa cuando cargas el móvil? ¿Y cuando lo usas?",
    "¿Por qué las baterías pierden capacidad con el tiempo?"
  ],
  palabrasClave: ["batería litio-ion funcionamiento", "almacenar energía batería móvil", "energía química batería", "iones litio carga descarga"],
  referencias: [
    { texto: "Wikipedia: Batería de ion de litio", url: "https://es.wikipedia.org/wiki/Bater%C3%ADa_de_ion_de_litio" },
    { texto: "Xataka: Cómo funcionan las baterías de litio", url: "https://www.xataka.com/moviles/como-funciona-una-bateria-de-litio" },
    { texto: "YouTube – QuantumFracture: ¿Cómo funciona una batería?", url: "https://www.youtube.com/watch?v=9OVtk6G2TnQ" }
  ],
  presentacion: {
    pasos: [
      "Empieza con algo cercano: «Tu móvil tiene una batería de litio que pesa menos de 50 gramos pero almacena energía para todo el día» (5 s).",
      "Explica el tipo de batería: litio-ion, con dos electrodos y un líquido entre ellos (10 s).",
      "Describe la carga: la electricidad empuja los iones de litio hacia un lado (energía eléctrica → química) (15 s).",
      "Describe la descarga: los iones vuelven y liberan electricidad (energía química → eléctrica) (15 s).",
      "Di por qué se degradan con el tiempo y cierra (15 s)."
    ],
    esencial: "Que las baterías almacenan energía eléctrica como energía química y la liberan cuando se usa el dispositivo.",
    opcional: "Hablar del litio como recurso escaso o de los problemas de reciclaje de baterías.",
    consejoTiempo: "La idea de «carga = electricidad → química, descarga = química → electricidad» es la clave. Repítela.",
    ejemploMal: "«Las baterías guardan electricidad.» (No dice cómo ni en qué forma.)",
    ejemploBien: "«Cuando cargas tu móvil, la electricidad mueve iones de litio dentro de la batería y se almacena como energía química. Cuando usas el móvil, esos iones se mueven de vuelta y liberan electricidad. Es como cargar un muelle: almacenas energía al comprimirlo y se libera al soltarlo.»"
  },
  tarjeta: {
    intro: "Muestra el proceso de carga y descarga de una batería.",
    ideasDibujo: "Dibuja una batería con dos lados (ánodo y cátodo) y bolitas (iones Li+) moviéndose. En la imagen de «Carga»: los iones van hacia la izquierda con un enchufe conectado. En «Descarga»: los iones van hacia la derecha y un móvil se enciende. Escribe: «eléctrica ↔ química»."
  },
  curiosidad: "Los tres científicos que inventaron la batería de litio-ion ganaron el Premio Nobel de Química en 2019. Uno de ellos, John Goodenough, tenía 97 años cuando lo recibió, convirtiéndose en el Nobel más mayor de la historia."
},

// ─── Pregunta 32 ──────────────────────────────────────
{
  titulo: "¿Cómo funciona la carga inalámbrica de un móvil? ¿Qué fenómeno físico hay detrás?",
  adaptada: false,
  intro: "Dejas tu móvil sobre una base y empieza a cargar sin conectar ningún cable. Parece magia, pero detrás hay un fenómeno físico que descubrió Michael Faraday hace casi 200 años: la inducción electromagnética.\nTanto la base como el móvil tienen una bobina (un espiral de cable). La base crea un campo magnético cambiante que genera una corriente eléctrica en la bobina del móvil. Es el mismo principio que usan las placas de inducción de cocina.",
  subpreguntas: [
    "¿Qué es la inducción electromagnética?",
    "¿Qué componentes hay en la base de carga y en el móvil?",
    "¿Cómo se transfiere la energía sin cables?",
    "¿Es tan eficiente como cargar con cable? ¿Se pierde energía?"
  ],
  palabrasClave: ["carga inalámbrica funcionamiento", "inducción electromagnética Faraday", "carga sin cables Qi", "bobina campo magnético carga"],
  referencias: [
    { texto: "Wikipedia: Carga inalámbrica", url: "https://es.wikipedia.org/wiki/Carga_inal%C3%A1mbrica" },
    { texto: "Xataka: Así funciona la carga inalámbrica", url: "https://www.xataka.com/moviles/carga-inalambrica-que-es-como-funciona" },
    { texto: "YouTube – Ter: Carga inalámbrica explicada", url: "https://www.youtube.com/watch?v=ExRvpNNa_QI" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la pregunta: «¿Cómo puede la electricidad pasar de un aparato a otro sin cables?» (5 s).",
      "Presenta la inducción electromagnética: un campo magnético cambiante puede crear corriente eléctrica (10 s).",
      "Explica el mecanismo: la base tiene una bobina que crea campo magnético → el móvil tiene otra bobina que capta ese campo y genera corriente (20 s).",
      "Di que se pierde algo de energía como calor (por eso el móvil se calienta) (10 s).",
      "Cierra con dato o con el dato de Faraday (15 s)."
    ],
    esencial: "Que funciona por inducción electromagnética: un campo magnético cambiante en la base genera corriente en el móvil.",
    opcional: "Hablar del estándar Qi o comparar eficiencia con carga por cable.",
    consejoTiempo: "La palabra «inducción electromagnética» suena complicada. Tradúcela: «un imán que cambia puede crear electricidad».",
    ejemploMal: "«La carga inalámbrica usa ondas para cargar el móvil.» (Impreciso, no son ondas de radio.)",
    ejemploBien: "«La base de carga tiene una bobina que genera un campo magnético que cambia rápidamente. El móvil tiene otra bobina que detecta ese campo y genera una corriente eléctrica. Es el principio de inducción que descubrió Faraday: un campo magnético cambiante crea electricidad. Por eso no necesita cables.»"
  },
  tarjeta: {
    intro: "Muestra las dos bobinas y el campo magnético entre ellas.",
    ideasDibujo: "Dibuja la base de carga con una espiral (bobina) dentro, y encima el móvil con otra espiral. Entre ambas, líneas curvas representando el campo magnético. Flechas: «Electricidad → campo magnético → electricidad». Escribe: «Inducción electromagnética»."
  },
  curiosidad: "Michael Faraday descubrió la inducción electromagnética en 1831. No tenía estudios universitarios: era hijo de un herrero y aprendió ciencia de forma autodidacta. Su descubrimiento es la base de todos los generadores eléctricos del mundo."
},

// ─── Pregunta 33 ──────────────────────────────────────
{
  titulo: "¿Cómo funciona una nevera? ¿Por qué necesita energía para mantener las cosas frías?",
  adaptada: false,
  intro: "Puede parecer raro que un aparato necesite electricidad para crear frío. Al fin y al cabo, el frío es «menos calor». Pero una nevera no crea frío de la nada: lo que hace es sacar el calor de dentro y expulsarlo hacia fuera.\nPor eso la parte trasera de la nevera está caliente: ahí es donde se libera todo el calor que ha extraído del interior. Es como una bomba, pero en vez de bombear agua, bombea calor.",
  subpreguntas: [
    "¿Cómo saca la nevera el calor de dentro?",
    "¿Qué papel tiene el gas refrigerante? ¿Cómo funciona el ciclo de compresión?",
    "¿Por qué la parte de atrás de la nevera está caliente?",
    "¿Qué transformación de energía se produce?"
  ],
  palabrasClave: ["nevera frigorífico funcionamiento", "ciclo refrigeración compresor", "gas refrigerante evaporación", "bomba calor nevera"],
  referencias: [
    { texto: "Wikipedia: Refrigerador", url: "https://es.wikipedia.org/wiki/Refrigerador" },
    { texto: "Endesa Educa: ¿Cómo funciona un frigorífico?", url: "https://www.endesaeduca.com/endesa-educa/recursos/como-funciona-un-frigorifico" },
    { texto: "YouTube – Jared Owen: Cómo funciona un refrigerador", url: "https://www.youtube.com/watch?v=pFXmijbCHD0" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la paradoja: «La nevera no crea frío. Lo que hace es sacar calor de dentro y echarlo fuera» (5 s).",
      "Explica la idea básica: un gas refrigerante circula por un circuito cerrado (10 s).",
      "Describe el ciclo simplificado: el gas se evapora dentro (absorbe calor) → el compresor lo comprime → se condensa fuera (suelta calor) (25 s).",
      "Explica por qué la parte trasera está caliente: ahí se suelta el calor (10 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "Que la nevera saca calor de dentro usando un gas refrigerante y un compresor, y lo expulsa por detrás.",
    opcional: "Hablar de los tipos de gas refrigerante o del problema ambiental de los CFC antiguos.",
    consejoTiempo: "El ciclo de refrigeración es el punto más difícil. Simplifícalo: «un gas absorbe calor dentro → se comprime → suelta el calor fuera».",
    ejemploMal: "«La nevera enfría las cosas con electricidad.» (No explica el mecanismo.)",
    ejemploBien: "«La nevera tiene un gas que circula por un tubo. Dentro del frigorífico, el gas se evapora y absorbe calor de los alimentos. Luego un compresor lo comprime y lo envía a la parte de atrás, donde se condensa y suelta todo ese calor. Por eso la parte trasera de la nevera está caliente.»"
  },
  tarjeta: {
    intro: "Muestra el ciclo de refrigeración de forma sencilla.",
    ideasDibujo: "Dibuja una nevera con un circuito de tuberías: dentro, el gas absorbe calor (flechas frías, color azul). Fuera, el gas suelta calor (flechas calientes, color rojo). Un compresor en la parte de abajo con una flecha de «electricidad». Escribe: «La nevera bombea calor hacia fuera»."
  },
  curiosidad: "El sonido que hace la nevera de vez en cuando es el compresor arrancando. Es como un pequeño motor que comprime el gas refrigerante para que el ciclo funcione. En una nevera moderna, el compresor se enciende y apaga unas 10 veces al día."
},

// ─── Pregunta 34 ──────────────────────────────────────
{
  titulo: "¿Cómo calienta el agua un termo eléctrico? ¿Cuánta energía gasta comparado con otros electrodomésticos?",
  adaptada: false,
  intro: "El termo eléctrico es ese cilindro grande (normalmente blanco) que muchas casas tienen en el baño o en la cocina. Dentro tiene un tanque de agua y una resistencia eléctrica, como la de un secador de pelo gigante. Cuando la resistencia se enciende, calienta el agua y la mantiene a temperatura.\nEs uno de los electrodomésticos que más energía consume en un hogar, porque necesita mucha electricidad para calentar decenas de litros de agua.",
  subpreguntas: [
    "¿Cómo funciona un termo eléctrico por dentro? (resistencia, termostato, aislamiento)",
    "¿Qué transformación de energía se produce?",
    "¿Cuánta energía gasta un termo eléctrico comparado con otros electrodomésticos?",
    "¿Hay alternativas más eficientes para calentar agua?"
  ],
  palabrasClave: ["termo eléctrico funcionamiento", "resistencia eléctrica agua caliente", "consumo energía termo", "efecto Joule calentamiento agua"],
  referencias: [
    { texto: "Wikipedia: Calentador de agua eléctrico", url: "https://es.wikipedia.org/wiki/Calentador_de_agua" },
    { texto: "IDAE: Agua caliente sanitaria", url: "https://www.idae.es/tecnologias/eficiencia-energetica/edificacion/agua-caliente-sanitaria" },
    { texto: "YouTube – Bricomania: Cómo funciona un termo eléctrico", url: "https://www.youtube.com/watch?v=0GjAhgJGO_s" }
  ],
  presentacion: {
    pasos: [
      "Empieza con algo práctico: «¿Sabéis qué gasta más electricidad en muchas casas? No es la tele ni el ordenador: es el termo del agua caliente» (5 s).",
      "Explica cómo funciona: una resistencia eléctrica calienta el agua de un tanque (10 s).",
      "Describe la transformación: energía eléctrica → térmica (efecto Joule) (10 s).",
      "Da datos de consumo: un termo puede gastar entre el 25-40% de la electricidad de una casa (15 s).",
      "Menciona alternativas más eficientes: calderas de gas, bombas de calor, termos solares (10 s).",
      "Cierra con consejo de ahorro (10 s)."
    ],
    esencial: "Cómo funciona (resistencia calienta agua) y que es uno de los electrodomésticos que más energía consume.",
    opcional: "Explicar el efecto Joule o comparar con calentadores de gas instantáneos.",
    consejoTiempo: "Los datos de consumo son muy impactantes. Busca el dato de tu zona y úsalo.",
    ejemploMal: "«El termo calienta agua con electricidad.» (Correcto pero sin detalle ni dato de consumo.)",
    ejemploBien: "«El termo tiene una resistencia eléctrica dentro del tanque. Cuando se enciende, convierte la electricidad en calor y calienta el agua. Es el efecto Joule: la corriente pasa por la resistencia y la calienta. Un termo puede gastar hasta el 40% de toda la electricidad de una casa. Por eso es importante no tenerlo encendido todo el día.»"
  },
  tarjeta: {
    intro: "Muestra el interior de un termo y datos de consumo.",
    ideasDibujo: "Dibuja un corte del termo: cilindro con agua dentro, resistencia eléctrica en espiral dentro del agua, aislante alrededor y un termostato. Al lado, un gráfico de barras comparando consumo: termo > nevera > lavadora > TV. Escribe: «Energía eléctrica → térmica»."
  },
  curiosidad: "Calentar 50 litros de agua de 15 °C a 60 °C necesita unos 2,6 kWh de electricidad. Es la misma energía que consumiría tu televisor encendido durante 20 horas seguidas."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 6: ENERGÍA, TECNOLOGÍA Y FUTURO (35-40)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 35 ──────────────────────────────────────
{
  titulo: "¿Qué es una comunidad energética? Investiga si existe alguna en la Comunidad de Madrid.",
  adaptada: false,
  intro: "Una comunidad energética es un grupo de vecinos, comercios o ayuntamientos que se unen para producir, consumir y gestionar su propia energía, normalmente con paneles solares compartidos. En vez de que cada casa tenga sus propios paneles, la comunidad los instala en un tejado común (un bloque de viviendas, un edificio público…) y reparte la energía generada.\nEs una idea que está creciendo mucho en España y que permite a la gente participar directamente en la transición energética.",
  subpreguntas: [
    "¿Qué es exactamente una comunidad energética? ¿Quién puede participar?",
    "¿Cómo se reparte la energía que se produce entre los miembros?",
    "¿Qué ventajas tienen las comunidades energéticas?",
    "¿Existe alguna comunidad energética en Madrid o en municipios cercanos?"
  ],
  palabrasClave: ["comunidad energética qué es", "comunidad energética Madrid", "autoconsumo compartido", "energía colaborativa vecinos"],
  referencias: [
    { texto: "Wikipedia: Comunidad de energía renovable", url: "https://es.wikipedia.org/wiki/Comunidad_de_energ%C3%ADa_renovable" },
    { texto: "IDAE: Comunidades energéticas", url: "https://www.idae.es/ayudas-y-financiacion/comunidades-energeticas" },
    { texto: "YouTube – Fundación Renovables: Comunidades energéticas en España", url: "https://www.youtube.com/watch?v=1c4VvCQ2bJI" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la idea: «Imagina que tu bloque de pisos comparte unos paneles solares y todos los vecinos ahorran en la factura» (5 s).",
      "Explica qué es: vecinos que se unen para producir y compartir energía renovable (10 s).",
      "Di cómo funciona: paneles compartidos, reparto de energía, ahorro en la factura (15 s).",
      "Menciona ventajas: ahorro económico, energía limpia, unión vecinal (10 s).",
      "Si encontraste alguna en Madrid, cuéntala. Si no, di que están creciendo en España (10 s).",
      "Cierra con reflexión (10 s)."
    ],
    esencial: "Qué es una comunidad energética, cómo funciona y qué ventajas tiene.",
    opcional: "Dar el ejemplo concreto de una comunidad energética en Madrid o la Comunidad.",
    consejoTiempo: "Busca antes de la exposición si hay alguna en Móstoles o cerca. Será mucho más interesante.",
    ejemploMal: "«Es cuando los vecinos comparten electricidad.» (Vago, no explica cómo.)",
    ejemploBien: "«Una comunidad energética es un grupo de vecinos o comercios que instalan paneles solares compartidos, por ejemplo en el tejado de su bloque. La energía que producen se reparte entre los participantes y todos ahorran en la factura. En España ya hay cientos de comunidades energéticas y están creciendo muy rápido.»"
  },
  tarjeta: {
    intro: "Muestra cómo funciona una comunidad energética.",
    ideasDibujo: "Dibuja un bloque de pisos con paneles solares en el tejado. Flechas de electricidad bajando a varias viviendas del bloque. Al lado, escribe las ventajas: ahorro, energía limpia, colaboración. Si encontraste un ejemplo real en Madrid, ponlo."
  },
  curiosidad: "En España hay más de 600 comunidades energéticas registradas. Algunos pueblos pequeños, como Crevillent en Alicante, llevan décadas produciendo su propia electricidad con cooperativas locales."
},

// ─── Pregunta 36 ──────────────────────────────────────
{
  titulo: "¿Qué son los «smart grids» o redes eléctricas inteligentes? ¿Para qué sirven?",
  adaptada: false,
  intro: "La red eléctrica tradicional es como una autopista de un solo sentido: la electricidad se genera en grandes centrales y baja hasta tu casa. Pero con las renovables, las cosas han cambiado: ahora hay miles de pequeños productores (tejados con paneles solares, aerogeneradores…) que también inyectan electricidad a la red.\nUna smart grid (red eléctrica inteligente) usa sensores, comunicación digital y algoritmos para gestionar este sistema mucho más complejo: sabe cuánta energía se produce, cuánta se consume y puede equilibrarlas en tiempo real.",
  subpreguntas: [
    "¿En qué se diferencia una red eléctrica inteligente de la tradicional?",
    "¿Qué tecnologías usa una smart grid? (sensores, contadores inteligentes, comunicación digital)",
    "¿Por qué son necesarias las smart grids con la llegada de las energías renovables?",
    "¿Qué ventajas tienen para los consumidores?"
  ],
  palabrasClave: ["smart grid red eléctrica inteligente", "red inteligente energía renovable", "contador inteligente smart meter", "gestión energía digital"],
  referencias: [
    { texto: "Wikipedia: Red eléctrica inteligente", url: "https://es.wikipedia.org/wiki/Red_el%C3%A9ctrica_inteligente" },
    { texto: "Red Eléctrica de España: Redes inteligentes", url: "https://www.ree.es/es/red-inteligente" },
    { texto: "YouTube – Endesa: ¿Qué son las smart grids?", url: "https://www.youtube.com/watch?v=R_8w3F9jMOg" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la comparación: «La red eléctrica antigua es como un grifo: solo sale agua. La inteligente es un sistema que sabe quién necesita qué y cuándo» (5 s).",
      "Explica el problema: con muchos productores pequeños (paneles solares), la red necesita ser más lista (10 s).",
      "Describe qué hace una smart grid: sensores, comunicación digital, equilibrio oferta/demanda en tiempo real (20 s).",
      "Di qué ventajas tiene: menos pérdidas, integrar renovables, precios más justos, menos apagones (15 s).",
      "Cierra con reflexión (10 s)."
    ],
    esencial: "Qué es una smart grid, por qué es necesaria y sus principales ventajas.",
    opcional: "Hablar de los contadores inteligentes que ya hay en muchas casas españolas.",
    consejoTiempo: "No te pierdas en la tecnología. Lo importante es la idea: una red que «piensa» y se adapta en tiempo real.",
    ejemploMal: "«Las smart grids son redes inteligentes de electricidad.» (Solo traduce el nombre, no explica.)",
    ejemploBien: "«La red eléctrica tradicional va en una dirección: de la central a tu casa. Pero con los paneles solares, ahora miles de casas también producen energía. Una smart grid usa sensores y comunicación digital para saber en tiempo real quién produce y quién consume, y equilibra el sistema automáticamente.»"
  },
  tarjeta: {
    intro: "Compara la red tradicional con la inteligente.",
    ideasDibujo: "Dos dibujos: Arriba: «Red tradicional» → una central grande con flechas de un sentido hacia casas. Abajo: «Smart grid» → casas con paneles, aerogeneradores, y flechas en ambas direcciones con un «cerebro» digital en el centro. Escribe: «Bidireccional e inteligente»."
  },
  curiosidad: "España ya ha instalado más de 30 millones de contadores inteligentes (smart meters) en hogares y negocios. Son la pieza clave de la smart grid: envían datos de consumo en tiempo real a la compañía eléctrica."
},

// ─── Pregunta 37 ──────────────────────────────────────
{
  titulo: "¿Cómo se transporta la electricidad desde donde se genera hasta nuestras casas? ¿Por qué se usan cables de alta tensión?",
  adaptada: false,
  intro: "Las centrales eléctricas pueden estar a cientos de kilómetros de las ciudades. La electricidad tiene que viajar por cables enormes que cruzan campos y montañas, y en ese viaje se pierde algo de energía en forma de calor.\nPara perder la menor cantidad posible, se usa un truco: se sube mucho el voltaje (alta tensión). A más voltaje, menos pérdidas durante el transporte. Por eso ves esas torres metálicas tan altas con cables gruesos: son las líneas de alta tensión.",
  subpreguntas: [
    "¿Por qué la electricidad se transporta a alta tensión y no a la tensión que usamos en casa?",
    "¿Qué son los transformadores y para qué sirven?",
    "¿Cuál es el recorrido de la electricidad desde la central hasta el enchufe de tu casa?",
    "¿Cuánta energía se pierde durante el transporte?"
  ],
  palabrasClave: ["transporte electricidad alta tensión", "líneas alta tensión torres", "transformador eléctrico voltaje", "red eléctrica transporte distribución"],
  referencias: [
    { texto: "Wikipedia: Red de transporte de energía eléctrica", url: "https://es.wikipedia.org/wiki/Red_de_transporte_de_energ%C3%ADa_el%C3%A9ctrica" },
    { texto: "Red Eléctrica de España: El sistema eléctrico", url: "https://www.ree.es/es/actividades/transporte-energia-electrica" },
    { texto: "YouTube – Endesa Educa: Transporte de electricidad", url: "https://www.youtube.com/watch?v=CGMNO3W0eMU" }
  ],
  presentacion: {
    pasos: [
      "Empieza con una imagen: «La central puede estar a 300 km de tu casa. ¿Cómo llega la electricidad sin perderse?» (5 s).",
      "Explica el problema: al transportar electricidad por cables, se pierde energía como calor (10 s).",
      "Di la solución: subir el voltaje con un transformador reduce mucho las pérdidas (10 s).",
      "Describe el recorrido: central → transformador sube el voltaje → líneas de alta tensión → subestación → transformador baja el voltaje → tu casa a 230 V (25 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "Que se usa alta tensión para reducir pérdidas, y el recorrido: central → alta tensión → subestaciones → baja tensión → hogares.",
    opcional: "Dar datos de voltaje (400.000 V en las torres vs. 230 V en casa) o hablar de cables submarinos.",
    consejoTiempo: "El recorrido es la parte central. Descríbelo como un viaje con paradas (transformadores).",
    ejemploMal: "«La electricidad viene por los cables de las torres.» (No dice por qué son de alta tensión.)",
    ejemploBien: "«La central genera electricidad y un transformador sube el voltaje a 400.000 voltios para el transporte. A más voltaje, menos energía se pierde por el camino. La electricidad viaja por las líneas de alta tensión hasta subestaciones cercanas a la ciudad, donde otros transformadores la bajan a 230 voltios, que es lo que usamos en los enchufes de casa.»"
  },
  tarjeta: {
    intro: "Muestra el viaje de la electricidad con sus transformaciones de voltaje.",
    ideasDibujo: "Dibuja de izquierda a derecha: central eléctrica → transformador (↑ voltaje) → torres de alta tensión → subestación → transformador (↓ voltaje) → postes de la calle → casa con enchufe. Debajo, escribe los voltajes en cada tramo: 400.000 V → 230 V."
  },
  curiosidad: "Las líneas de alta tensión de España recorren más de 44.000 kilómetros: suficiente para dar la vuelta a la Tierra. Red Eléctrica de España gestiona todo este sistema y tiene que equilibrar la oferta y la demanda cada segundo."
},

// ─── Pregunta 38 ──────────────────────────────────────
{
  titulo: "¿Cómo se reciclan las pilas y baterías? ¿Por qué no se pueden tirar a la basura normal?",
  adaptada: false,
  intro: "Las pilas y baterías contienen metales pesados y sustancias químicas que son muy contaminantes si acaban en un vertedero: mercurio, cadmio, plomo, litio, ácido sulfúrico… Si se tiran a la basura normal, esos tóxicos pueden filtrar al suelo y al agua.\nPor eso tienen un sistema de recogida especial (los contenedores pequeños que hay en tiendas y supermercados) y se reciclan en plantas especializadas donde se recuperan los metales.",
  subpreguntas: [
    "¿Qué sustancias contaminantes hay dentro de las pilas y baterías?",
    "¿Qué pasa si se tiran al vertedero? ¿Cómo contaminan?",
    "¿Cómo se reciclan? ¿Qué materiales se recuperan?",
    "¿Dónde hay puntos de recogida de pilas en tu barrio?"
  ],
  palabrasClave: ["reciclaje pilas baterías", "contaminación pilas vertedero", "metales pesados pilas mercurio", "puntos recogida pilas España"],
  referencias: [
    { texto: "Wikipedia: Pila eléctrica – Reciclaje", url: "https://es.wikipedia.org/wiki/Pila_el%C3%A9ctrica" },
    { texto: "Ecopilas: ¿Cómo se reciclan las pilas?", url: "https://www.ecopilas.es/reciclaje/" },
    { texto: "YouTube – EcologíaVerde: Por qué no tirar pilas a la basura", url: "https://www.youtube.com/watch?v=lNNd9u7oQKo" }
  ],
  presentacion: {
    pasos: [
      "Empieza con impacto: «Una sola pila de botón puede contaminar hasta 600.000 litros de agua» (5 s).",
      "Explica qué tóxicos contienen: mercurio, cadmio, plomo, litio (10 s).",
      "Di qué pasa si llegan al vertedero: los tóxicos filtran al suelo y al agua (10 s).",
      "Explica cómo se reciclan: se recogen en contenedores especiales, se trituran y se separan los metales (20 s).",
      "Cierra con un consejo: dónde llevarlas (15 s)."
    ],
    esencial: "Por qué no se pueden tirar a la basura (sustancias tóxicas que contaminan suelo y agua) y cómo se reciclan.",
    opcional: "Dar datos de cuántas pilas se reciclan en España cada año o hablar de los puntos de recogida.",
    consejoTiempo: "El dato de la pila de botón que contamina 600.000 litros de agua es muy potente. Úsalo al principio.",
    ejemploMal: "«Las pilas contaminan y hay que reciclarlas.» (Correcto pero sin explicar por qué ni cómo.)",
    ejemploBien: "«Las pilas tienen dentro metales pesados como mercurio y cadmio, que son muy tóxicos. Si se tiran al vertedero, esos metales pueden filtrarse al suelo y contaminar el agua. Por eso se recogen en contenedores especiales. En las plantas de reciclaje se trituran y se separan los metales, que se pueden reutilizar.»"
  },
  tarjeta: {
    intro: "Muestra el problema y la solución.",
    ideasDibujo: "Divide la tarjeta en dos: a la izquierda ❌ «Si la tiras a la basura»: pila en vertedero con flechas de tóxicos hacia el suelo y el agua. A la derecha ✅ «Si la reciclas»: pila en contenedor especial → planta de reciclaje → metales recuperados. Dato: «1 pila de botón = 600.000 L de agua contaminada»."
  },
  curiosidad: "España recicla alrededor del 45% de las pilas que se venden. El objetivo europeo es llegar al 65%. Los metales recuperados (zinc, manganeso, hierro) se usan para fabricar nuevos productos, desde acero hasta fertilizantes."
},

// ─── Pregunta 39 ──────────────────────────────────────
{
  titulo: "¿Qué es la fusión nuclear y en qué se diferencia de la fisión? ¿Por qué dicen que podría ser la energía del futuro?",
  adaptada: false,
  intro: "La fisión nuclear (la que se usa en las centrales de hoy) consiste en romper átomos pesados como el uranio. La fusión nuclear es justo lo contrario: consiste en unir átomos ligeros como el hidrógeno para formar uno más pesado, como el helio. Es el mismo proceso que ocurre dentro del Sol.\nSi conseguimos controlar la fusión, tendríamos una fuente de energía casi ilimitada, sin residuos radiactivos peligrosos y sin riesgo de explosión. Pero reproducir las condiciones del interior del Sol en la Tierra es extremadamente difícil.",
  subpreguntas: [
    "¿En qué consiste la fusión nuclear? ¿Qué átomos se unen?",
    "¿En qué se diferencia de la fisión nuclear?",
    "¿Por qué es tan difícil conseguir fusión nuclear en la Tierra?",
    "¿Qué proyectos están intentando lograrlo? (ITER, etc.)"
  ],
  palabrasClave: ["fusión nuclear qué es", "fusión vs fisión nuclear", "ITER reactor fusión", "energía fusión nuclear futuro"],
  referencias: [
    { texto: "Wikipedia: Fusión nuclear", url: "https://es.wikipedia.org/wiki/Fusi%C3%B3n_nuclear" },
    { texto: "ITER: ¿Qué es la fusión?", url: "https://www.iter.org/sci/whatisfusion" },
    { texto: "YouTube – Quantum Fracture: Fusión nuclear", url: "https://www.youtube.com/watch?v=mZsaaturR6E" }
  ],
  presentacion: {
    pasos: [
      "Empieza con el Sol: «Cada segundo, el Sol fusiona millones de toneladas de hidrógeno. Eso es la fusión nuclear» (5 s).",
      "Explica la diferencia: fisión = romper átomos pesados; fusión = unir átomos ligeros (15 s).",
      "Di por qué es tan prometedora: mucha energía, combustible casi infinito (hidrógeno del agua), sin residuos peligrosos (15 s).",
      "Explica por qué es tan difícil: se necesitan temperaturas de 150 millones de grados (15 s).",
      "Menciona el proyecto ITER y cierra (10 s)."
    ],
    esencial: "La diferencia entre fusión (unir) y fisión (romper), y por qué la fusión podría ser revolucionaria.",
    opcional: "Hablar del proyecto ITER en Francia o de los avances recientes.",
    consejoTiempo: "Céntrate en la diferencia fusión/fisión y en por qué la fusión es tan interesante. No te pierdas en los detalles técnicos de ITER.",
    ejemploMal: "«La fusión es lo contrario de la fisión y es mejor.» (Simplista, no dice por qué.)",
    ejemploBien: "«La fisión rompe átomos pesados como el uranio. La fusión une átomos ligeros como el hidrógeno para formar helio, que es justo lo que hace el Sol. La fusión produciría muchísima energía con hidrógeno del agua como combustible, casi sin residuos peligrosos. El problema es que se necesitan 150 millones de grados para conseguirla.»"
  },
  tarjeta: {
    intro: "Compara fisión y fusión de forma visual.",
    ideasDibujo: "Dos esquemas lado a lado: (1) FISIÓN: un átomo grande rompiéndose en dos pequeños con energía saliendo. (2) FUSIÓN: dos átomos pequeños uniéndose en uno más grande con mucha más energía. Escribe debajo: «Fisión = romper (hoy), Fusión = unir (futuro)». Dibuja un mini-Sol al lado de la fusión."
  },
  curiosidad: "El proyecto ITER (en Francia) está construyendo el reactor de fusión más grande del mundo. Necesita alcanzar 150 millones de grados, diez veces más que el centro del Sol. Si funciona, un solo litro de agua de mar podría producir tanta energía como 300 litros de gasolina."
},

// ─── Pregunta 40 ──────────────────────────────────────
{
  titulo: "¿Cuánta energía consume internet? Investiga qué son los centros de datos y cuánta electricidad gastan.",
  adaptada: false,
  intro: "Cada vez que buscas algo en Google, ves un vídeo en YouTube o envías un mensaje por WhatsApp, hay un ordenador gigante en algún lugar del mundo que se enciende para atender tu petición. Esos ordenadores gigantes están en los «centros de datos» (data centers), y consumen una cantidad enorme de electricidad.\nInternet no es «invisible»: tiene una infraestructura física gigantesca que necesita electricidad las 24 horas del día, los 365 días del año.",
  subpreguntas: [
    "¿Qué es un centro de datos? ¿Qué hay dentro?",
    "¿Cuánta electricidad consumen los centros de datos en el mundo?",
    "¿Por qué consumen tanta energía? (servidores + refrigeración)",
    "¿Qué hacen las empresas tecnológicas para reducir su consumo energético?"
  ],
  palabrasClave: ["centro de datos data center", "consumo energía internet", "electricidad servidores refrigeración", "huella carbono internet"],
  referencias: [
    { texto: "Wikipedia: Centro de procesamiento de datos", url: "https://es.wikipedia.org/wiki/Centro_de_procesamiento_de_datos" },
    { texto: "Greenpeace: La huella energética de internet", url: "https://www.greenpeace.org/static/planet4-spain-stateless/2017/01/informe_clicking_clean.pdf" },
    { texto: "YouTube – Vox (doblado): Cuánta energía consume internet", url: "https://www.youtube.com/watch?v=yFB2ox-sXAo" }
  ],
  presentacion: {
    pasos: [
      "Empieza con algo que sorprenda: «Cada búsqueda en Google consume la energía suficiente para encender una bombilla durante 17 segundos» (5 s).",
      "Explica qué es un centro de datos: naves enormes llenas de servidores (ordenadores) (10 s).",
      "Di cuánto consumen: los centros de datos gastan entre el 1-2% de toda la electricidad mundial (15 s).",
      "Explica por qué tanto: los servidores funcionan 24/7 y necesitan refrigeración potente (15 s).",
      "Di qué se está haciendo: energías renovables, refrigeración eficiente (15 s)."
    ],
    esencial: "Qué es un centro de datos, cuánta electricidad consumen globalmente y por qué necesitan tanta.",
    opcional: "Mencionar los centros de datos de empresas concretas (Google, Amazon) o hablar de la huella de carbono del streaming.",
    consejoTiempo: "Los datos numéricos son muy impactantes en este tema. Busca un par de cifras actualizadas.",
    ejemploMal: "«Internet gasta mucha electricidad.» (Sin datos ni explicación.)",
    ejemploBien: "«Cada vez que ves un vídeo online, un ordenador en un centro de datos se enciende para enviártelo. Estos centros son naves enormes con miles de servidores que funcionan 24 horas y necesitan mucha refrigeración. Todos juntos gastan más del 1% de la electricidad mundial, más que muchos países enteros.»"
  },
  tarjeta: {
    intro: "Muestra qué es un centro de datos y cuánto consume.",
    ideasDibujo: "Dibuja una nave grande con filas de servidores (rectángulos con luces). Al lado, pon datos: «1-2% de la electricidad mundial», «miles de servidores», «refrigeración 24h». Arriba, tu móvil conectado con una línea al centro de datos. Escribe: «Internet no es invisible»."
  },
  curiosidad: "Si internet fuera un país, sería el sexto mayor consumidor de electricidad del mundo, por delante de Alemania. Y la inteligencia artificial está haciendo que el consumo de los centros de datos crezca aún más rápido."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 7: ENERGÍA Y TRANSPORTE (41-43)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 41 ──────────────────────────────────────
{
  titulo: "¿Qué hace que un coche de gasolina se mueva? Explica las transformaciones de energía desde el depósito hasta las ruedas.",
  adaptada: false,
  intro: "Un coche de gasolina es una máquina de transformar energía. Todo empieza en el depósito, donde la gasolina almacena energía química. Esa gasolina se quema dentro del motor en pequeñas explosiones controladas que empujan unos pistones, y esos pistones hacen girar un eje que mueve las ruedas.\nEn cada paso se transforma la energía de un tipo a otro, y en cada paso se pierde algo en forma de calor.",
  subpreguntas: [
    "¿Qué tipo de energía tiene la gasolina?",
    "¿Qué ocurre dentro de los cilindros del motor? (explosión, pistones, eje)",
    "¿Cómo llega el movimiento del motor hasta las ruedas?",
    "¿Cuánta energía de la gasolina se aprovecha realmente para mover el coche?"
  ],
  palabrasClave: ["motor combustión interna funcionamiento", "transformación energía coche gasolina", "pistón cilindro motor coche", "eficiencia motor gasolina"],
  referencias: [
    { texto: "Wikipedia: Motor de combustión interna", url: "https://es.wikipedia.org/wiki/Motor_de_combusti%C3%B3n_interna" },
    { texto: "Km77: ¿Cómo funciona un motor de gasolina?", url: "https://www.km77.com/glosario/motor-gasolina" },
    { texto: "YouTube – Jared Owen: Cómo funciona un motor de coche", url: "https://www.youtube.com/watch?v=ZQvfHyfgBtA" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la cadena: «Para que un coche se mueva, la energía pasa por al menos 4 transformaciones» (5 s).",
      "Describe la gasolina en el depósito: energía química almacenada (5 s).",
      "Explica la combustión: la gasolina explota dentro de los cilindros, empujando pistones (energía química → térmica → cinética) (20 s).",
      "Describe cómo el movimiento llega a las ruedas: pistones → cigüeñal → transmisión → ruedas (15 s).",
      "Di cuánto se pierde: solo un 20-30% de la energía mueve el coche; el resto se pierde como calor (15 s)."
    ],
    esencial: "La cadena de transformaciones: química (gasolina) → térmica (explosión) → cinética (pistones) → cinética (ruedas).",
    opcional: "Comparar la eficiencia con un coche eléctrico (mucho más eficiente).",
    consejoTiempo: "Simplifica el motor: «gasolina explota → empuja un pistón → hace girar un eje → las ruedas giran».",
    ejemploMal: "«La gasolina se quema y el coche se mueve.» (No describe las transformaciones.)",
    ejemploBien: "«La gasolina tiene energía química. Dentro del motor, se mezcla con aire y explota, produciendo calor y gases que empujan un pistón. El pistón hace girar un eje (cigüeñal) que, a través de la transmisión, hace girar las ruedas. Pero solo el 25% de la energía de la gasolina mueve el coche; el resto se pierde como calor.»"
  },
  tarjeta: {
    intro: "Muestra la cadena de energía desde la gasolina hasta las ruedas.",
    ideasDibujo: "Dibuja de izquierda a derecha: depósito de gasolina → cilindro con explosión → pistón moviéndose → eje girando → ruedas. Debajo de cada paso, escribe: «química → térmica → cinética → cinética». Añade: «Solo el 25% llega a las ruedas»."
  },
  curiosidad: "Un motor de gasolina desperdicia como calor entre el 70 y el 80% de la energía del combustible. Ese calor se va por el tubo de escape y por el radiador. Por eso los coches tienen ventilador y radiador: para no sobrecalentarse."
},

// ─── Pregunta 42 ──────────────────────────────────────
{
  titulo: "¿En qué se diferencia un coche eléctrico de uno de gasolina en cuanto a energía? ¿Es realmente 100% limpio?",
  adaptada: false,
  intro: "Un coche eléctrico no tiene motor de combustión ni depósito de gasolina. En su lugar, tiene una batería grande (como la del móvil pero mucho mayor) y un motor eléctrico. Cuando conduces, la batería envía electricidad al motor, que mueve directamente las ruedas.\nPero la pregunta importante es: ¿de dónde viene la electricidad que carga esa batería? Si viene de una central de carbón, el coche no es tan limpio como parece. Si viene de renovables, sí lo es.",
  subpreguntas: [
    "¿Cómo funciona un coche eléctrico? ¿Qué transformaciones de energía hace?",
    "¿Por qué es más eficiente que un coche de gasolina?",
    "¿De dónde viene la electricidad que carga la batería? ¿Eso importa?",
    "¿Qué pasa con la fabricación y el reciclaje de las baterías?"
  ],
  palabrasClave: ["coche eléctrico vs gasolina", "motor eléctrico eficiencia", "batería coche eléctrico litio", "coche eléctrico contaminación"],
  referencias: [
    { texto: "Wikipedia: Vehículo eléctrico", url: "https://es.wikipedia.org/wiki/Veh%C3%ADculo_el%C3%A9ctrico" },
    { texto: "IDAE: Vehículo eléctrico", url: "https://www.idae.es/tecnologias/eficiencia-energetica/transporte" },
    { texto: "YouTube – DW en español: ¿Son los coches eléctricos realmente limpios?", url: "https://www.youtube.com/watch?v=KitPMBzkmlE" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la diferencia básica: «Un coche de gasolina quema combustible. Un eléctrico usa electricidad de una batería» (5 s).",
      "Compara la eficiencia: el eléctrico aprovecha el 90% de la energía; el de gasolina solo el 25% (15 s).",
      "Plantea la cuestión: ¿es 100% limpio? Depende de cómo se genera la electricidad (15 s).",
      "Habla de las baterías: fabricación contaminante, materias primas escasas, reciclaje necesario (15 s).",
      "Cierra con reflexión equilibrada (10 s)."
    ],
    esencial: "Diferencia de eficiencia (eléctrico 90% vs gasolina 25%) y que no es 100% limpio: depende del origen de la electricidad.",
    opcional: "Hablar de la autonomía actual de los coches eléctricos o del crecimiento de ventas en España.",
    consejoTiempo: "No hagas un anuncio del coche eléctrico ni lo critiques. Sé equilibrado: es mejor pero no perfecto.",
    ejemploMal: "«El coche eléctrico no contamina porque no echa humo.» (Simplista e incorrecto.)",
    ejemploBien: "«Un coche eléctrico convierte el 90% de la energía de la batería en movimiento, frente al 25% de uno de gasolina. No emite gases al circular. Pero no es 100% limpio: la electricidad que carga su batería puede venir de carbón, y fabricar las baterías de litio también tiene impacto ambiental. Es mucho mejor, pero no perfecto.»"
  },
  tarjeta: {
    intro: "Compara los dos tipos de coche en eficiencia y limpieza.",
    ideasDibujo: "Dibuja dos coches lado a lado: gasolina (con tubo de escape, humo, «25% eficiente») y eléctrico (sin tubo de escape, batería, «90% eficiente»). Debajo, una nota: «Pero ¿de dónde viene la electricidad?» con flechas hacia una central de carbón (❌) y paneles solares (✅)."
  },
  curiosidad: "Un coche eléctrico medio en España produce la mitad de CO₂ que uno de gasolina si contamos todo: fabricación, electricidad de la red y reciclaje. Y esa diferencia será aún mayor a medida que crezcan las renovables."
},

// ─── Pregunta 43 ──────────────────────────────────────
{
  titulo: "¿Cómo funciona una dinamo de bicicleta? ¿Qué transformación de energía se produce?",
  adaptada: false,
  intro: "Si alguna vez has tenido una bicicleta con luz que funciona al pedalear, has usado una dinamo. Una dinamo es un generador eléctrico en miniatura: convierte el movimiento de la rueda en electricidad para encender la luz.\nDentro de la dinamo hay un imán que gira junto a una bobina de cable. Cuando el imán gira, genera una corriente eléctrica en la bobina. Es el mismo principio que usan las centrales eléctricas, pero en pequeño.",
  subpreguntas: [
    "¿Qué hay dentro de una dinamo de bicicleta? (imán, bobina)",
    "¿Cómo genera electricidad el movimiento de la rueda?",
    "¿Es el mismo principio que usan las centrales eléctricas?",
    "¿Por qué notas que cuesta más pedalear cuando la dinamo está encendida?"
  ],
  palabrasClave: ["dinamo bicicleta funcionamiento", "generador eléctrico imán bobina", "inducción electromagnética dinamo", "transformación cinética eléctrica"],
  referencias: [
    { texto: "Wikipedia: Dinamo", url: "https://es.wikipedia.org/wiki/Dinamo_(generador_el%C3%A9ctrico)" },
    { texto: "Endesa Educa: Generadores eléctricos", url: "https://www.endesaeduca.com/endesa-educa/recursos/generadores-electricos" },
    { texto: "YouTube – La bicicleta eléctrica: La dinamo explicada", url: "https://www.youtube.com/watch?v=TfM83LV6vSk" }
  ],
  presentacion: {
    pasos: [
      "Empieza con algo práctico: «Si pedaleas una bici con dinamo, la luz se enciende sola. Pero ¿cómo?» (5 s).",
      "Explica qué hay dentro: un imán que gira y una bobina de cable fija (10 s).",
      "Describe el proceso: la rueda hace girar el imán → el campo magnético cambiante crea corriente en la bobina (20 s).",
      "Conecta con las centrales: «Es exactamente lo mismo que hace un generador gigante, pero en miniatura» (10 s).",
      "Explica por qué cuesta más pedalear: estás aportando tu energía muscular para generar electricidad (5 s).",
      "Cierra (10 s)."
    ],
    esencial: "Que la dinamo convierte energía cinética en eléctrica usando un imán y una bobina (inducción electromagnética).",
    opcional: "Comparar con alternadores modernos o hablar de las nuevas luces de bicicleta con batería.",
    consejoTiempo: "La explicación del imán girando junto a la bobina es lo central. Si lo entiendes, has entendido todos los generadores.",
    ejemploMal: "«La dinamo enciende la luz de la bici cuando pedaleas.» (No dice cómo.)",
    ejemploBien: "«Dentro de la dinamo hay un imán que gira cuando la rueda de la bici se mueve. Ese imán girando crea un campo magnético que cambia y genera una corriente eléctrica en una bobina de cable. Esa corriente enciende la bombilla. Es el mismo principio que usan las centrales eléctricas, pero en pequeñito.»"
  },
  tarjeta: {
    intro: "Muestra una dinamo por dentro y la transformación de energía.",
    ideasDibujo: "Dibuja una bicicleta con la dinamo tocando la rueda. Al lado, un zoom de la dinamo: imán girando dentro de una bobina, con flechas de corriente saliendo. Escribe la cadena: «energía muscular → cinética (rueda) → eléctrica (dinamo) → luminosa (bombilla)»."
  },
  curiosidad: "Un ciclista profesional puede generar unos 400 vatios pedaleando a tope: suficiente para encender 40 bombillas LED a la vez. Un ciclista normal genera unos 75 vatios: bastante para cargar un móvil mientras pedalea."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 8: ENERGÍA Y NATURALEZA (44-46)
// ═══════════════════════════════════════════════════════

// ─── Pregunta 44 ──────────────────────────────────────
{
  titulo: "¿De dónde saca la energía el Sol? ¿Cuánto tiempo lleva produciéndola y cuánto le queda?",
  adaptada: false,
  intro: "El Sol es una estrella, una bola gigantesca de gas (sobre todo hidrógeno y helio) donde ocurren fusiones nucleares continuamente. En su núcleo, a 15 millones de grados, los átomos de hidrógeno se fusionan para formar helio, liberando una cantidad inmensa de energía.\nEste proceso lleva ocurriendo desde hace unos 4.600 millones de años, y aún le quedan otros 5.000 millones aproximadamente. Es la fuente de casi toda la energía que tenemos en la Tierra.",
  subpreguntas: [
    "¿Qué proceso produce la energía del Sol? (fusión nuclear del hidrógeno)",
    "¿Cuánta energía produce el Sol cada segundo?",
    "¿Cuánto tiempo lleva brillando y cuánto le queda?",
    "¿Por qué casi toda la energía de la Tierra viene del Sol?"
  ],
  palabrasClave: ["energía Sol fusión nuclear", "hidrógeno helio Sol", "edad Sol vida restante", "energía solar origen estrella"],
  referencias: [
    { texto: "Wikipedia: Sol", url: "https://es.wikipedia.org/wiki/Sol" },
    { texto: "NASA en español: Nuestro Sol", url: "https://ciencia.nasa.gov/sol" },
    { texto: "YouTube – Kurzgesagt (doblado): La vida del Sol", url: "https://www.youtube.com/watch?v=5A_vh4ZDpEo" }
  ],
  presentacion: {
    pasos: [
      "Empieza con impacto: «Cada segundo, el Sol convierte 600 millones de toneladas de hidrógeno en helio. Y lo lleva haciendo 4.600 millones de años» (5 s).",
      "Explica el proceso: fusión nuclear del hidrógeno en el núcleo a 15 millones de grados (15 s).",
      "Da las dimensiones temporales: lleva 4.600 millones de años, le quedan unos 5.000 millones (10 s).",
      "Conecta con la Tierra: casi toda nuestra energía viene del Sol (renovables, fósiles, comida…) (20 s).",
      "Cierra con dato (10 s)."
    ],
    esencial: "Que el Sol produce energía por fusión nuclear del hidrógeno y que lleva billones de años haciéndolo.",
    opcional: "Explicar qué pasará cuando se le acabe el hidrógeno (se expandirá como gigante roja).",
    consejoTiempo: "Los números son tan grandes que impresionan solos. Úsalos con confianza.",
    ejemploMal: "«El Sol produce energía porque es muy caliente.» (No dice cómo.)",
    ejemploBien: "«El Sol funciona por fusión nuclear: en su núcleo, a 15 millones de grados, los átomos de hidrógeno se fusionan para formar helio, liberando una energía enorme. Este proceso empezó hace 4.600 millones de años y le quedan unos 5.000 millones más. Casi toda la energía que usamos en la Tierra viene originalmente del Sol.»"
  },
  tarjeta: {
    intro: "Muestra el interior del Sol y los datos clave.",
    ideasDibujo: "Dibuja el Sol con un zoom a su núcleo: dos átomos de H uniéndose para formar He con energía saliendo. Al lado, una línea de tiempo: «Nació hace 4.600 M años → Hoy → Le quedan 5.000 M años». Debajo: «Fuente de casi toda nuestra energía»."
  },
  curiosidad: "Cada segundo, el Sol pierde 4 millones de toneladas de masa que se convierten en energía pura (según E=mc²). Aunque parece mucho, el Sol es tan enorme que ni se nota: ha perdido menos del 0,05% de su masa en toda su vida."
},

// ─── Pregunta 45 ──────────────────────────────────────
{
  titulo: "¿Cómo obtienen energía las plantas mediante la fotosíntesis? ¿Qué relación tiene esto con los combustibles fósiles?",
  adaptada: false,
  intro: "Las plantas son máquinas solares naturales. Mediante la fotosíntesis, capturan la luz del sol y la usan para convertir agua y dióxido de carbono en glucosa (un azúcar que les da energía) y oxígeno. Es una de las transformaciones de energía más importantes del planeta.\nY aquí está la conexión sorprendente: los combustibles fósiles (petróleo, carbón, gas) son energía solar prehistórica. Provienen de plantas y organismos que hicieron fotosíntesis hace millones de años y quedaron enterrados.",
  subpreguntas: [
    "¿Qué necesitan las plantas para hacer la fotosíntesis? (luz, agua, CO₂)",
    "¿Qué producen? (glucosa y oxígeno)",
    "¿Qué transformación de energía ocurre en la fotosíntesis?",
    "¿Cómo conecta la fotosíntesis con los combustibles fósiles?"
  ],
  palabrasClave: ["fotosíntesis plantas proceso", "fotosíntesis transformación energía", "fotosíntesis combustibles fósiles relación", "energía solar plantas glucosa"],
  referencias: [
    { texto: "Wikipedia: Fotosíntesis", url: "https://es.wikipedia.org/wiki/Fotos%C3%ADntesis" },
    { texto: "National Geographic España: Fotosíntesis explicada", url: "https://www.nationalgeographic.com.es/ciencia/fotosintesis_14564" },
    { texto: "YouTube – Happy Learning: La fotosíntesis", url: "https://www.youtube.com/watch?v=aMlZ_pKOmzE" }
  ],
  presentacion: {
    pasos: [
      "Empieza con la conexión: «Las plantas hacen algo increíble: convierten luz del sol en comida. Y eso tiene que ver con la gasolina de los coches» (5 s).",
      "Explica la fotosíntesis: luz + agua + CO₂ → glucosa + O₂ (15 s).",
      "Di qué transformación es: energía luminosa → energía química (almacenada en la glucosa) (10 s).",
      "Conecta con los fósiles: plantas de hace millones de años → quedaron enterradas → la energía solar que almacenaron se convirtió en carbón y petróleo (20 s).",
      "Cierra: «Cuando quemas gasolina, estás liberando energía solar de hace millones de años» (10 s)."
    ],
    esencial: "El proceso de fotosíntesis (luz → energía química) y su conexión con los combustibles fósiles (energía solar prehistórica).",
    opcional: "Hablar de la importancia del oxígeno producido o de la fotosíntesis artificial.",
    consejoTiempo: "La conexión fotosíntesis-fósiles es lo más impactante. Guárdala para el final como broche de oro.",
    ejemploMal: "«Las plantas hacen fotosíntesis con el sol y eso creó el petróleo.» (Correcto pero sin explicar los pasos.)",
    ejemploBien: "«Las plantas capturan luz del sol y la usan para convertir agua y CO₂ en glucosa: energía química. Hace millones de años, plantas y organismos que hacían fotosíntesis murieron y quedaron enterrados. Con el tiempo, su energía química se transformó en petróleo, carbón y gas. Así que cuando quemas gasolina, estás usando energía solar de hace millones de años.»"
  },
  tarjeta: {
    intro: "Muestra la fotosíntesis y su conexión con los fósiles.",
    ideasDibujo: "Dibuja dos escenas conectadas: Arriba: planta con sol → flechas: «luz + H₂O + CO₂ → glucosa + O₂». Abajo: la misma planta enterrada bajo capas de roca con una flecha de «millones de años» → gota de petróleo. Escribe: «La gasolina es energía solar prehistórica»."
  },
  curiosidad: "Las plantas de la Tierra capturan, mediante la fotosíntesis, unas 130.000 millones de toneladas de CO₂ al año. Sin la fotosíntesis, no habría oxígeno en la atmósfera y la vida animal no existiría."
},

// ─── Pregunta 46 ──────────────────────────────────────
{
  titulo: "¿Qué es un rayo? ¿Cuánta energía tiene y por qué no la aprovechamos?",
  adaptada: false,
  intro: "Un rayo es una descarga eléctrica gigantesca entre una nube y el suelo (o entre nubes). Se produce cuando se acumulan cargas eléctricas en las nubes de tormenta: la parte inferior se carga negativamente y atrae las cargas positivas del suelo hasta que salta una chispa brutal que puede alcanzar 30.000 °C.\nPero aunque un rayo parece tener una energía enorme, en realidad dura tan poco tiempo que la cantidad total de energía es menor de lo que pensarías.",
  subpreguntas: [
    "¿Cómo se forman las cargas eléctricas en las nubes de tormenta?",
    "¿Cuánta energía tiene un rayo? ¿Cuánto duraría esa energía en una casa?",
    "¿A qué temperatura llega un rayo?",
    "¿Por qué no podemos aprovechar la energía de los rayos?"
  ],
  palabrasClave: ["rayo descarga eléctrica cómo se forma", "energía rayo kilovatios", "temperatura rayo", "aprovechar energía rayos"],
  referencias: [
    { texto: "Wikipedia: Rayo", url: "https://es.wikipedia.org/wiki/Rayo" },
    { texto: "National Geographic España: Todo sobre los rayos", url: "https://www.nationalgeographic.com.es/ciencia/todo-sobre-rayos_13042" },
    { texto: "YouTube – Quantum Fracture: ¿Cuánta energía tiene un rayo?", url: "https://www.youtube.com/watch?v=RLqJ9Y8K6Pk" }
  ],
  presentacion: {
    pasos: [
      "Empieza con impacto: «Un rayo alcanza los 30.000 °C, cinco veces más caliente que la superficie del Sol» (5 s).",
      "Explica cómo se forma: cargas eléctricas se separan en la nube, se acumulan y saltan (15 s).",
      "Da el dato de energía: un rayo tiene unos 1-5 kWh, lo que duraría en una casa solo 1-2 días (15 s).",
      "Explica por qué no lo aprovechamos: dura milésimas de segundo, es impredecible, y captarlo sería carísimo (15 s).",
      "Cierra con dato curioso (10 s)."
    ],
    esencial: "Cómo se forma un rayo, cuánta energía tiene realmente (menos de lo esperado) y por qué no es viable aprovecharlo.",
    opcional: "Hablar de los pararrayos y cómo protegen los edificios.",
    consejoTiempo: "El dato de que un rayo solo daría electricidad para 1-2 días siempre sorprende. Úsalo.",
    ejemploMal: "«Los rayos tienen mucha electricidad pero no se puede usar.» (Sin datos.)",
    ejemploBien: "«Un rayo se forma cuando las cargas eléctricas se acumulan en una nube de tormenta y saltan hasta el suelo. Alcanza 30.000 grados, pero dura solo milésimas de segundo. Su energía es de unos 5 kWh: lo justo para alimentar una casa durante un par de días. Captarlo sería tan caro e impredecible que no merece la pena.»"
  },
  tarjeta: {
    intro: "Muestra cómo se forma un rayo y sus datos clave.",
    ideasDibujo: "Dibuja una nube de tormenta con cargas negativas abajo (–) y el suelo con cargas positivas (+). Un rayo conectándolos. Al lado, datos: «30.000 °C», «1-5 kWh», «dura milésimas de segundo». Escribe: «Mucho poder, muy poco tiempo»."
  },
  curiosidad: "Sobre la Tierra caen unos 100 rayos por segundo: más de 8 millones al día. Pero incluso si pudiéramos capturarlos todos, la energía total no cubriría ni el 1% de las necesidades mundiales."
},

// ═══════════════════════════════════════════════════════
// BLOQUE 9: PREGUNTAS ADAPTADAS (47-50)
// Mismo aspecto visual, contenido más accesible.
// ═══════════════════════════════════════════════════════

// ─── Pregunta 47 ──────────────────────────────────────
{
  titulo: "¿Qué formas de energía utilizamos en casa todos los días? Pon tres ejemplos y explica para qué sirve cada una.",
  adaptada: true,
  intro: "La energía es lo que hace que las cosas funcionen, se muevan o se calienten. En tu casa la usas constantemente, aunque no te des cuenta. Vamos a ver las tres formas de energía más importantes que utilizas cada día:\n\n1. Energía eléctrica: es la que llega a tu casa por los cables del enchufe. Sirve para encender las luces, hacer funcionar la televisión, cargar el móvil, usar el ordenador y hacer que funcione la nevera. Sin energía eléctrica, casi nada de tu casa funcionaría. Llega desde centrales eléctricas que pueden estar a cientos de kilómetros.\n\n2. Energía térmica (calor): es la que notas cuando te acercas a un radiador o cuando te duchas con agua caliente. En muchas casas se obtiene quemando gas natural en una caldera, que calienta agua y la envía por tuberías a los radiadores. También la producen los hornos y las vitrocerámicas de la cocina. Su función es calentar: tu casa en invierno, el agua de la ducha, la comida que cocinas.\n\n3. Energía química (de los alimentos): está almacenada dentro de la comida, en los nutrientes (azúcares, grasas, proteínas). Cuando desayunas, tu cuerpo extrae esa energía y la usa para que te puedas mover, pensar, mantener tu cuerpo caliente a 37 °C y hasta para crecer. Sin esa energía, no tendrías fuerzas ni para levantarte de la cama.\n\nResumen: usamos energía eléctrica (enchufes), térmica (calor) y química (comida) todos los días.",
  subpreguntas: [
    "Con lo que has leído, ¿puedes explicar con tus palabras qué hace cada forma de energía?",
    "¿Se te ocurre algún aparato de tu casa que use más de un tipo de energía a la vez?",
    "¿De dónde crees que viene la electricidad que llega a tu enchufe?"
  ],
  palabrasClave: ["formas de energía en casa", "energía eléctrica hogar", "tipos energía vida cotidiana"],
  referencias: [
    { texto: "Wikipedia: Energía – Tipos", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa" },
    { texto: "Happy Learning: Los tipos de energía", url: "https://happylearning.tv/los-tipos-de-energia/" },
    { texto: "YouTube – Smile and Learn: La energía para niños", url: "https://www.youtube.com/watch?v=MEqw0hZCZiA" }
  ],
  presentacion: {
    pasos: [
      "Di tu pregunta: «Voy a hablar de las tres formas de energía que usamos en casa todos los días» (5 s).",
      "Primer ejemplo: «La energía eléctrica es la que llega por los enchufes. Sirve para la luz, la tele, el móvil y la nevera» (15 s).",
      "Segundo ejemplo: «La energía térmica es el calor. La usamos para la calefacción, el agua caliente y cocinar» (15 s).",
      "Tercer ejemplo: «La energía química está en la comida. Cuando desayunamos, nuestro cuerpo la usa para movernos, pensar y mantener la temperatura» (15 s).",
      "Cierra resumiendo: «Eléctrica, térmica y química: tres energías que usamos todos los días sin darnos cuenta» (10 s)."
    ],
    esencial: "Nombrar las tres formas de energía (eléctrica, térmica, química) y decir para qué sirve cada una con un ejemplo concreto.",
    opcional: "Añadir un aparato que use varios tipos de energía a la vez (por ejemplo, un microondas usa eléctrica y produce térmica).",
    consejoTiempo: "Tres ejemplos, bien explicados, son suficientes. No intentes poner más si no te da tiempo.",
    ejemploMal: "«En casa usamos energía eléctrica, y ya.» (Solo un ejemplo y sin explicar para qué.)",
    ejemploBien: "«En casa usamos energía eléctrica para encender la luz y cargar el móvil, energía térmica para la calefacción y el agua caliente de la ducha, y energía química de los alimentos que nos dan fuerzas para movernos y pensar.»"
  },
  tarjeta: {
    intro: "Haz una lista con dibujos de los tres ejemplos.",
    ideasDibujo: "Dibuja tres escenas simples: (1) una bombilla encendida → «energía eléctrica», (2) un radiador con ondas de calor → «energía térmica», (3) un plato de comida → «energía química». Pon un título: «Energía en mi casa»."
  },
  curiosidad: "Una familia media española gasta al año la energía equivalente a quemar 1.000 kilos de madera. La mayor parte se va en calefacción, agua caliente y electrodomésticos."
},

// ─── Pregunta 48 ──────────────────────────────────────
{
  titulo: "¿Qué diferencia hay entre una energía renovable y una no renovable? Pon un ejemplo de cada una y di cuál contamina más.",
  adaptada: true,
  intro: "Las fuentes de energía se dividen en dos grandes grupos según si se agotan o no. Vamos a entenderlo paso a paso:\n\nEnergías renovables: son las que no se agotan porque la naturaleza las repone sola. El mejor ejemplo es la energía solar. El sol sale cada mañana y seguirá saliendo durante miles de millones de años. No podemos «gastar» el sol. Otros ejemplos son el viento (energía eólica) y el agua de los ríos (energía hidráulica). Estas energías tienen una gran ventaja: no contaminan el aire cuando las usamos. Un panel solar produce electricidad sin echar humo ni gases malos.\n\nEnergías no renovables: son las que sí se agotan porque tardaron muchísimo tiempo en formarse (millones de años) y las estamos gastando mucho más rápido de lo que la Tierra las puede crear. El ejemplo más conocido es el petróleo, que es un líquido negro que se saca de debajo de la tierra. Se formó a partir de restos de seres vivos de hace más de 100 millones de años. Con el petróleo se hace la gasolina de los coches. Otros ejemplos son el carbón y el gas natural. El gran problema de las no renovables es que al quemarlas sueltan gases contaminantes al aire (sobre todo CO₂, dióxido de carbono), que ensucian la atmósfera y calientan el planeta.\n\n¿Cuál contamina más? Las no renovables, con diferencia. Cada vez que un coche quema gasolina o una central quema carbón, salen gases que dañan el medio ambiente. Las renovables, como el sol y el viento, producen energía limpia.\n\nPor eso los países están intentando usar cada vez más renovables y menos combustibles fósiles.",
  subpreguntas: [
    "Con lo que has leído, ¿puedes explicar con tus palabras qué significa «renovable»?",
    "¿Por qué el petróleo se agota pero el sol no?",
    "¿Qué tipo de energía crees que usa tu casa más: renovable o no renovable?"
  ],
  palabrasClave: ["energía renovable y no renovable", "diferencia renovable no renovable", "ejemplos energías renovables", "contaminación combustibles fósiles"],
  referencias: [
    { texto: "Wikipedia: Energía renovable", url: "https://es.wikipedia.org/wiki/Energ%C3%ADa_renovable" },
    { texto: "Happy Learning: Energías renovables y no renovables", url: "https://happylearning.tv/energias-renovables-y-no-renovables/" },
    { texto: "YouTube – Smile and Learn: Renovables y no renovables", url: "https://www.youtube.com/watch?v=rJZzaGmOa4k" }
  ],
  presentacion: {
    pasos: [
      "Di tu pregunta: «Voy a explicar la diferencia entre energías renovables y no renovables» (5 s).",
      "Explica qué es renovable: «Una energía renovable es la que no se acaba. Por ejemplo, el sol sale cada día y nadie puede gastarlo. Con paneles solares podemos hacer electricidad limpia» (15 s).",
      "Explica qué es no renovable: «Una energía no renovable es la que sí se acaba. Por ejemplo, el petróleo tardó millones de años en formarse, y lo estamos gastando muy rápido. Algún día se acabará» (15 s).",
      "Di cuál contamina más: «Las no renovables contaminan mucho más. Al quemar petróleo o carbón sale CO₂, un gas que ensucia el aire y calienta el planeta. Las renovables no echan humo» (15 s).",
      "Cierra: «Por eso es importante cambiar a energías renovables: no se acaban y no contaminan» (10 s)."
    ],
    esencial: "La diferencia entre renovable (no se acaba, no contamina) y no renovable (se acaba, contamina), con un ejemplo claro de cada una.",
    opcional: "Poner un segundo ejemplo de cada tipo (eólica, carbón…).",
    consejoTiempo: "Usa comparaciones sencillas: «El sol no se apaga nunca, pero el petróleo sí se gasta».",
    ejemploMal: "«Las renovables son buenas y las no renovables malas.» (Simplista, sin explicar por qué.)",
    ejemploBien: "«Las energías renovables no se agotan: por ejemplo, la energía solar, porque el sol sale cada día. Las no renovables sí se agotan: por ejemplo, el petróleo, que tardó millones de años en formarse. Además, el petróleo contamina mucho al quemarlo porque suelta CO₂, mientras que el sol no contamina nada.»"
  },
  tarjeta: {
    intro: "Haz dos columnas comparando renovables y no renovables.",
    ideasDibujo: "Dos columnas: ✅ RENOVABLE (sol, con el texto «no se acaba, no contamina») y ❌ NO RENOVABLE (barril de petróleo, con el texto «se acaba, contamina»). Debajo de cada una, un ejemplo con dibujo sencillo."
  },
  curiosidad: "España tiene tanto sol que podría producir con paneles solares toda la electricidad que necesita. El petróleo, en cambio, tiene que importarlo casi todo de otros países como Arabia Saudí o Nigeria."
},

// ─── Pregunta 49 ──────────────────────────────────────
{
  titulo: "¿Qué es un panel solar y para qué sirve? Explica con palabras sencillas qué transformación de energía hace.",
  adaptada: true,
  intro: "Un panel solar es una placa grande y plana, normalmente de color oscuro (azul o negro), que se coloca en los tejados de las casas, en los edificios o en el campo. Su trabajo es captar la luz del sol y convertirla en electricidad. Vamos a entender cómo funciona paso a paso:\n\n¿De qué está hecho? Un panel solar está formado por muchas «células» pequeñas hechas de un material especial llamado silicio. El silicio tiene una propiedad increíble: cuando la luz del sol le da encima, sus partículas se mueven y generan electricidad.\n\n¿Qué transformación de energía hace? Transforma la energía luminosa (la luz del sol) en energía eléctrica (electricidad). Es como si el panel «tradujera» la luz a electricidad. Entra luz, sale electricidad.\n\n¿Para qué se usa esa electricidad? Para lo mismo que la electricidad del enchufe: encender luces, cargar móviles, hacer funcionar la nevera, la lavadora, la tele… Si el panel produce más electricidad de la que la casa necesita, puede enviar el sobrante a la red eléctrica (y la compañía te descuenta dinero de la factura).\n\n¿Por qué es bueno? Porque el sol es gratis y sale cada día, la electricidad solar no contamina el aire (no produce humo ni gases), funciona sin ruido, y los paneles duran más de 25 años. España es un país ideal para los paneles solares porque tiene entre 2.500 y 3.000 horas de sol al año.\n\nResumen: un panel solar es una placa que convierte la luz del sol en electricidad. Es limpio, silencioso y aprovecha algo que tenemos gratis: el sol.",
  subpreguntas: [
    "Con lo que has leído, ¿puedes explicar con tus palabras cómo un panel solar hace electricidad?",
    "¿Por qué crees que los paneles solares suelen ser de color oscuro?",
    "¿Has visto paneles solares en algún tejado de tu barrio o de camino al colegio?"
  ],
  palabrasClave: ["panel solar qué es", "panel solar para niños", "energía solar cómo funciona", "paneles solares tejado"],
  referencias: [
    { texto: "Wikipedia: Panel solar", url: "https://es.wikipedia.org/wiki/Panel_solar" },
    { texto: "Happy Learning: La energía solar", url: "https://happylearning.tv/la-energia-solar/" },
    { texto: "YouTube – Smile and Learn: La energía solar para niños", url: "https://www.youtube.com/watch?v=PsHJoFuqBCU" }
  ],
  presentacion: {
    pasos: [
      "Di tu pregunta: «Voy a explicar qué es un panel solar y cómo funciona» (5 s).",
      "Explica qué es: «Un panel solar es una placa oscura que se pone en los tejados. Está hecho de un material llamado silicio» (10 s).",
      "Di qué transformación hace: «Cuando la luz del sol llega al panel, el silicio convierte esa luz en electricidad. Es como un traductor: entra luz, sale electricidad» (15 s).",
      "Di para qué sirve: «Esa electricidad se usa para encender luces, cargar móviles, hacer funcionar la nevera… lo mismo que la del enchufe» (15 s).",
      "Cierra: «Los paneles solares no contaminan, no hacen ruido, y el sol es gratis. España tiene mucho sol, así que son ideales para nosotros» (15 s)."
    ],
    esencial: "Qué es un panel solar (placa de silicio en el tejado), que transforma la luz del sol en electricidad, y que no contamina.",
    opcional: "Decir que España tiene muchas horas de sol o que cada vez hay más paneles en los tejados.",
    consejoTiempo: "Tres ideas claras: qué es, qué hace, por qué es bueno. Con eso es suficiente.",
    ejemploMal: "«Un panel solar es una cosa que da electricidad.» (Vago, no dice cómo.)",
    ejemploBien: "«Un panel solar es una placa de silicio que se coloca en los tejados. Cuando le da la luz del sol, la convierte en electricidad. Esa electricidad puede encender las luces de una casa, cargar el móvil o hacer funcionar la nevera. Lo mejor es que no contamina y el sol es gratis.»"
  },
  tarjeta: {
    intro: "Dibuja un panel solar en un tejado y muestra qué hace.",
    ideasDibujo: "Dibuja una casa con un panel solar en el tejado. El sol envía rayos al panel. Del panel sale una flecha de «electricidad» que va a: una bombilla, un móvil cargándose y una nevera. Escribe arriba: «Luz del sol → electricidad». Abajo: «Limpio, silencioso y gratis»."
  },
  curiosidad: "Un solo panel solar de un tejado puede producir electricidad suficiente para cargar un móvil más de 1.000 veces. Y dura más de 25 años funcionando sin piezas que se muevan ni desgasten."
},

// ─── Pregunta 50 ──────────────────────────────────────
{
  titulo: "¿Por qué es importante ahorrar energía? Di tres cosas que podemos hacer en casa para gastar menos.",
  adaptada: true,
  intro: "Ahorrar energía es una de las cosas más útiles que podemos hacer, y es mucho más fácil de lo que parece. Vamos a ver por qué es importante y qué podemos hacer.\n\n¿Por qué debemos ahorrar energía? Hay dos razones principales:\n\n1. Por el planeta: mucha de la energía que usamos viene de quemar gas, petróleo o carbón, y al quemarlos se liberan gases (sobre todo CO₂) que contaminan el aire y calientan el planeta. Cuanta menos energía gastemos, menos gases soltamos. Es como cerrar un grifo que está llenando la atmósfera de contaminación.\n\n2. Por el bolsillo: la energía cuesta dinero. La factura de la luz y el gas de una casa puede superar los 100 euros al mes. Si gastamos menos energía, la familia ahorra dinero que puede usar para otras cosas.\n\nTres cosas que puedes hacer en casa:\n\n1. Apagar las luces y los aparatos que no uses: cuando sales de tu habitación, apaga la luz. Si no estás viendo la tele, apágala del todo (no la dejes en standby, esa lucecita roja también gasta). Y no dejes el cargador del móvil enchufado si no estás cargando nada.\n\n2. Duchas cortas en vez de baños: una ducha de 5 minutos gasta unos 50 litros de agua. Un baño gasta unos 200 litros: cuatro veces más. Toda esa agua hay que calentarla, y eso consume mucha energía. Además, cierra el grifo mientras te enjabonas.\n\n3. Usar bien la calefacción: no hace falta poner la calefacción a 25 °C. Con 20-21 °C se está bien si te pones un jersey. Cada grado de más gasta un 7% más de energía. También es bueno cerrar las ventanas cuando la calefacción esté encendida y no tapar los radiadores con ropa.\n\nCon estos tres gestos, una familia puede ahorrar más del 20% en su factura de energía al año.",
  subpreguntas: [
    "Con lo que has leído, ¿puedes explicar con tus palabras las dos razones por las que ahorrar energía es importante?",
    "De los tres trucos, ¿cuál crees que sería más fácil de hacer en tu casa?",
    "¿Se te ocurre algún otro truco para ahorrar energía que no esté en la lista?"
  ],
  palabrasClave: ["ahorrar energía en casa", "consejos ahorro energético", "por qué ahorrar energía", "eficiencia energética hogar"],
  referencias: [
    { texto: "Wikipedia: Ahorro de energía", url: "https://es.wikipedia.org/wiki/Ahorro_de_energ%C3%ADa" },
    { texto: "IDAE: Consejos de ahorro energético", url: "https://www.idae.es/tecnologias/eficiencia-energetica" },
    { texto: "YouTube – Smile and Learn: Ahorro de energía para niños", url: "https://www.youtube.com/watch?v=lvLodXVS_IU" }
  ],
  presentacion: {
    pasos: [
      "Di tu pregunta: «Voy a explicar por qué debemos ahorrar energía y tres trucos para hacerlo en casa» (5 s).",
      "Di las dos razones: «Primero, por el planeta: cuanta menos energía gastamos, menos contaminamos. Segundo, por el dinero: gastar menos energía significa pagar menos en la factura» (10 s).",
      "Truco 1: «Apagar luces y aparatos cuando no los usas. Si sales de la habitación, apaga la luz. No dejes la tele en standby» (15 s).",
      "Truco 2: «Duchas cortas en vez de baños. Una ducha gasta 4 veces menos agua y energía que un baño» (15 s).",
      "Truco 3: «No subir la calefacción a más de 21 grados. Mejor ponerse un jersey. Cada grado de más gasta un 7% más» (15 s)."
    ],
    esencial: "Las dos razones (planeta y dinero) y tres trucos concretos para ahorrar energía en casa.",
    opcional: "Añadir un cuarto truco o dar el dato de que se puede ahorrar un 20% en la factura.",
    consejoTiempo: "Tres trucos, bien explicados, son perfectos. No hace falta más.",
    ejemploMal: "«Hay que ahorrar energía porque es bueno.» (Sin razones concretas ni ejemplos.)",
    ejemploBien: "«Ahorrar energía es importante por dos razones: contamina menos y la familia gasta menos dinero. Tres cosas que podemos hacer: apagar las luces cuando salimos de una habitación, ducharnos en vez de bañarnos para gastar menos agua caliente, y no poner la calefacción a más de 21 grados. Con estos gestos se puede ahorrar más del 20% en la factura.»"
  },
  tarjeta: {
    intro: "Haz una lista visual con tres consejos de ahorro.",
    ideasDibujo: "Dibuja tres viñetas simples: (1) dedo apagando un interruptor → «Apaga lo que no uses», (2) reloj que marca 5 min junto a una ducha → «Duchas de 5 minutos», (3) termostato a 21 °C con un jersey → «Calefacción a 21 °C + jersey». Arriba, el título «3 trucos para ahorrar energía». Abajo: «Bueno para el planeta y para el bolsillo»."
  },
  curiosidad: "Si todas las familias de España bajaran la calefacción solo 1 grado (de 22 a 21 °C), se ahorraría un 7% de energía en calefacción. Eso equivale a la electricidad que producen varias centrales térmicas durante un año entero."
}

]; // Fin del array PREGUNTAS
