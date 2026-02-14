/* ══════════════════════════════════════════════════════
   app.js – Proyecto Energía · CEIP Perú
   SPA router + renderers
   ══════════════════════════════════════════════════════ */

// ─── STATE ──────────────────────────────────────────
let currentQuestion = null; // null = home, 1-50 = pregunta

// ─── DOM REFS ───────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const viewHome     = $('#view-home');
const viewQuestion = $('#view-question');
const selectEl     = $('#question-select');
const btnGo        = $('#btn-go');
const gridEl       = $('#question-grid');

// ─── ROUTER ─────────────────────────────────────────
function navigate(n) {
  currentQuestion = n;
  if (n === null) {
    history.pushState({}, '', location.pathname);
    showHome();
  } else {
    history.pushState({ q: n }, '', '#pregunta-' + n);
    showQuestion(n);
  }
}

function handleRoute() {
  const hash = location.hash;
  const m = hash.match(/^#pregunta-(\d+)$/);
  if (m) {
    const n = parseInt(m[1], 10);
    if (n >= 1 && n <= window.PREGUNTAS.length) {
      currentQuestion = n;
      showQuestion(n);
      return;
    }
  }
  currentQuestion = null;
  showHome();
}

// ─── HOME VIEW ──────────────────────────────────────
function showHome() {
  viewHome.classList.add('active');
  viewQuestion.classList.remove('active');
  document.title = 'Proyecto Energía · CEIP Perú';
  window.scrollTo({ top: 0 });
}

function buildHome() {
  const data = window.PREGUNTAS;

  // Populate <select>
  data.forEach((p, i) => {
    const n = i + 1;
    const opt = document.createElement('option');
    opt.value = n;
    const short = p.titulo.length > 60 ? p.titulo.slice(0, 58) + '…' : p.titulo;
    opt.textContent = n + '. ' + short;
    selectEl.appendChild(opt);
  });

  // Enable button on selection
  selectEl.addEventListener('change', () => {
    btnGo.disabled = !selectEl.value;
  });

  btnGo.addEventListener('click', () => {
    if (selectEl.value) navigate(parseInt(selectEl.value, 10));
  });

  // Also navigate on Enter while select is focused
  selectEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && selectEl.value) {
      e.preventDefault();
      navigate(parseInt(selectEl.value, 10));
    }
  });

  // Build grid of 50 cards
  data.forEach((p, i) => {
    const n = i + 1;
    const btn = document.createElement('button');
    btn.className = 'q-card';
    btn.setAttribute('role', 'listitem');
    btn.setAttribute('aria-label', 'Pregunta ' + n + ': ' + p.titulo);
    btn.textContent = n;
    btn.addEventListener('click', () => navigate(n));
    gridEl.appendChild(btn);
  });

  // Stagger hero word animation delays
  document.querySelectorAll('.word-anim').forEach((el, i) => {
    el.style.setProperty('--delay', (i * 0.12) + 's');
  });
}

// ─── QUESTION VIEW ──────────────────────────────────
function showQuestion(n) {
  const p = window.PREGUNTAS[n - 1];
  if (!p) { navigate(null); return; }

  viewHome.classList.remove('active');

  // Retrigger animation
  viewQuestion.classList.remove('active');
  void viewQuestion.offsetWidth;
  viewQuestion.classList.add('active');

  document.title = 'P' + n + ': ' + p.titulo + ' · Proyecto Energía';

  // Header
  $('#q-number-badge').textContent = 'Pregunta ' + n;
  $('#q-title').textContent = p.titulo;

  // Section 1: Intro
  const introEl = $('#q-intro');
  introEl.innerHTML = '';
  const paragraphs = p.intro.split('\n').filter(s => s.trim());
  paragraphs.forEach(par => {
    const pEl = document.createElement('p');
    pEl.textContent = par;
    pEl.style.marginBottom = '0.75rem';
    introEl.appendChild(pEl);
  });

  // Section 2: Investigación
  const subQ = $('#q-subquestions');
  subQ.innerHTML = p.subpreguntas.map(q => '<li>' + q + '</li>').join('');

  const kwList = $('#q-keywords');
  kwList.innerHTML = p.palabrasClave.map(k =>
    '<span class="keyword-tag">' + k + '</span>'
  ).join('');

  const refList = $('#q-refs');
  refList.innerHTML = p.referencias.map(r =>
    '<li><a href="' + r.url + '" target="_blank" rel="noopener">' + r.texto + '</a></li>'
  ).join('');

  // Section 3: Presentación
  const stepsEl = $('#q-present-steps');
  stepsEl.innerHTML = p.presentacion.pasos.map((s, i) =>
    '<div class="step"><span class="step-num">' + (i + 1) + '</span><p>' + s + '</p></div>'
  ).join('');

  $('#q-essential').textContent = p.presentacion.esencial;
  $('#q-optional').textContent = p.presentacion.opcional;
  $('#q-time-tip').innerHTML =
    '⏱️ <strong>Truco del reloj:</strong> ' + p.presentacion.consejoTiempo;
  $('#q-bad-example').textContent = p.presentacion.ejemploMal;
  $('#q-good-example').textContent = p.presentacion.ejemploBien;

  // Section 4: Tarjeta
  const diagramEl = $('#q-card-diagram');
  diagramEl.innerHTML = '🎨 <strong>Idea para tu dibujo:</strong> ' + p.tarjeta.ideasDibujo;

  // Section 5: Curiosidad
  $('#q-funfact').textContent = p.curiosidad;

  // Nav buttons
  $('#btn-prev').disabled = (n <= 1);
  $('#btn-next').disabled = (n >= window.PREGUNTAS.length);

  window.scrollTo({ top: 0 });
}

// ─── INIT ───────────────────────────────────────────
function init() {
  if (!window.PREGUNTAS || window.PREGUNTAS.length === 0) {
    document.body.innerHTML =
      '<p style="padding:3rem;color:#ea580c;font-family:sans-serif;text-align:center;">' +
      'Error: no se han cargado las preguntas. Asegúrate de que <code>preguntas.js</code> está en la misma carpeta.</p>';
    return;
  }

  // Header logo → home
  $('#btn-home').addEventListener('click', () => navigate(null));

  // Question view nav
  $('#btn-back-home').addEventListener('click', () => navigate(null));
  $('#btn-prev').addEventListener('click', () => {
    if (currentQuestion > 1) navigate(currentQuestion - 1);
  });
  $('#btn-next').addEventListener('click', () => {
    if (currentQuestion < window.PREGUNTAS.length) navigate(currentQuestion + 1);
  });

  // Browser back/forward
  window.addEventListener('popstate', handleRoute);

  // Build home page
  buildHome();

  // Initial route
  handleRoute();
}

document.addEventListener('DOMContentLoaded', init);
