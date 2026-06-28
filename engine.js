/* Krew i Kości: Klątwa Strahda — silnik pokazu.
   Dwie warstwy audio: AMBIENT (ciche, ciągłe tło, NIE resetuje się przy zmianie slajdu)
   + per-slajd narracja (slide.narr). Auto-advance po długości narracji. */
(function () {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const show = $('#show');
  const layers = [$('#L0'), $('#L1')];
  const fill = $('#fill'), segs = $('#segs'), acttag = $('#acttag'), counter = $('#counter');
  const BG_VOL = 0.14, NAR_VOL = 0.95, DEF_DUR = 12000, KB_NARR = 60000;

  let idx = 0, active = 0, playing = false, started = false, muted = false;
  let elapsed = 0, last = 0, raf = 0;
  let bg = null, curNar = null, narDur = 0;

  // ── build ───────────────────────────────────────────────────
  function reveals(slide){
    let d = 0.12, out = '';
    if (slide.act) { out += `<div class="act reveal" style="animation-delay:${d}s">${slide.act}</div>`; d += .12; }
    if (slide.title) { out += `<h2 class="title ${slide.kind==='title'||slide.kind==='end'?'huge':''} reveal" style="animation-delay:${d}s">${slide.title}</h2>`; d += .14; }
    out += `<div class="gold-rule reveal" style="animation-delay:${d}s"></div>`; d += .1;
    if (slide.text) out += `<p class="text reveal" style="animation-delay:${d}s">${slide.text}</p>`;
    return out;
  }
  function buildHTML(slide){
    const kbdur = slide.narr ? KB_NARR : (slide.dur || DEF_DUR);
    let bgHtml;
    if (slide.image) {
      bgHtml = `<div class="bg kb-${slide.kb||'out'}" style="background-image:url('${slide.image}');animation-duration:${kbdur}ms"></div><div class="veil"></div>`;
    } else {
      bgHtml = `<div class="card-bg"></div>`;
    }
    const centered = slide.kind !== 'image';
    return bgHtml + `<div class="content ${centered?'center':''}">${reveals(slide)}</div>`;
  }

  // ── render ───────────────────────────────────────────────────
  function render(i){
    idx = (i + SLIDES.length) % SLIDES.length;
    const slide = SLIDES[idx];
    const target = active ^ 1;
    layers[target].innerHTML = buildHTML(slide);
    layers[active].classList.remove('active');
    layers[target].classList.add('active');
    active = target;
    acttag.textContent = slide.act || '';
    counter.textContent = `${idx+1} / ${SLIDES.length}`;
    [...segs.children].forEach((s,j)=>{ s.className = 'seg'+(j<idx?' done':j===idx?' cur':''); });
    elapsed = 0; last = 0; fill.style.width = '0%';
    startNar(slide);
  }

  // ── narracja per slajd ──────────────────────────────────────
  function stopNar(){ if (curNar){ try{ curNar.pause(); }catch(e){} curNar = null; } narDur = 0; }
  function startNar(slide){
    stopNar();
    if (!slide.narr || !started) return;
    const a = new Audio(slide.narr);
    a.preload = 'auto';
    a.volume = muted ? 0 : NAR_VOL;
    a.addEventListener('loadedmetadata', ()=>{
      if (a !== curNar) return;
      if (isFinite(a.duration) && a.duration > 0){
        narDur = a.duration * 1000;
        const el = layers[active].querySelector('.bg');
        if (el) el.style.animationDuration = (narDur + 400) + 'ms';
      }
    });
    curNar = a;
    if (playing){ const p = a.play(); if (p && p.catch) p.catch(()=>{}); }
  }

  // ── oś czasu ─────────────────────────────────────────────────
  function tick(t){
    if (!playing) return;
    if (!last) last = t;
    elapsed += t - last; last = t;
    const target = narDur > 0 ? narDur + 600 : (SLIDES[idx].dur || DEF_DUR);
    fill.style.width = Math.min(1, elapsed/target)*100 + '%';
    if (elapsed >= target){
      if (idx < SLIDES.length-1){ render(idx+1); }
      else { pause(); return; }
    }
    raf = requestAnimationFrame(tick);
  }
  function play(){ if (playing) return; playing = true; show.classList.remove('paused');
    last = 0; raf = requestAnimationFrame(tick);
    if (bg && started){ const p = bg.play(); if (p && p.catch) p.catch(()=>{}); }
    if (curNar && started){ const p = curNar.play(); if (p && p.catch) p.catch(()=>{}); }
    setPP('⏸'); }
  function pause(){ playing = false; show.classList.add('paused'); cancelAnimationFrame(raf);
    if (bg) bg.pause(); if (curNar) curNar.pause(); setPP('▶'); }
  function toggle(){ playing ? pause() : play(); }
  function setPP(g){ const b = $('#playpause'); if (b) b.textContent = g; }
  function go(d){ render(idx + d); }

  // ── master dźwięk ───────────────────────────────────────────
  function toggleMute(){ muted = !muted;
    if (bg) bg.volume = muted ? 0 : BG_VOL;
    if (curNar) curNar.volume = muted ? 0 : NAR_VOL;
    const b = $('#mute'); if (b) b.textContent = muted ? '🔇' : '♪'; }

  // ── start ───────────────────────────────────────────────────
  function start(){
    if (started) return; started = true;
    $('#start').classList.add('hidden');
    if (bg){ bg.volume = muted ? 0 : BG_VOL; const p = bg.play(); if (p && p.catch) p.catch(()=>{}); }
    render(0); play();
  }

  // ── idle / fullscreen ───────────────────────────────────────
  let idleT;
  function wake(){ show.classList.remove('idle'); clearTimeout(idleT);
    idleT = setTimeout(()=>show.classList.add('idle'), 2800); }
  function fullscreen(){ const el = document.documentElement;
    if (!document.fullscreenElement) (el.requestFullscreen||el.webkitRequestFullscreen||(()=>{})).call(el);
    else document.exitFullscreen && document.exitFullscreen(); }

  // ── init ────────────────────────────────────────────────────
  function init(){
    segs.innerHTML = SLIDES.map(()=>'<div class="seg"></div>').join('');
    SLIDES.forEach(s=>{ if (s.image){ const im = new Image(); im.src = s.image; } });
    bg = new Audio(AMBIENT); bg.loop = true; bg.preload = 'auto'; bg.volume = BG_VOL;
    $('#btn-start').addEventListener('click', start);
    $('#prev').addEventListener('click', ()=>go(-1));
    $('#next').addEventListener('click', ()=>go(1));
    $('#playpause').addEventListener('click', toggle);
    $('#mute').addEventListener('click', toggleMute);
    $('#full').addEventListener('click', fullscreen);
    $('#zL').addEventListener('click', ()=>go(-1));
    $('#zC').addEventListener('click', toggle);
    $('#zR').addEventListener('click', ()=>go(1));
    document.addEventListener('keydown', (e)=>{
      if (!started){ if (e.code==='Space'||e.code==='Enter'){ e.preventDefault(); start(); } return; }
      if (e.code==='Space'){ e.preventDefault(); toggle(); }
      else if (e.code==='ArrowRight'){ go(1); }
      else if (e.code==='ArrowLeft'){ go(-1); }
      else if (e.key==='m'||e.key==='M'){ toggleMute(); }
      else if (e.key==='f'||e.key==='F'){ fullscreen(); }
    });
    window.addEventListener('mousemove', wake);
    wake();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
