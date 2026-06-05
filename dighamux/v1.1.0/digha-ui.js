
/* ============================================================
   digha-ui.js — Shared UI features for all Digha pages
   Include BEFORE </body> on every page:
   Root pages:     <script src="digha-ui.js"></script>
   Biomedical dir: <script src="../digha-ui.js"></script>
   ============================================================ */

(function () {

  // ── WHATSAPP FLOAT BUTTON ──────────────────────────────────
  if (!document.getElementById('digha-wa')) {
    const wa = document.createElement('a');
    wa.id = 'digha-wa';
    wa.href = 'https://wa.me/2348026663388?text=Hello+Digha+Biomedical%2C+I+am+interested+in+your+services.';
    wa.target = '_blank';
    wa.rel = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'Chat on WhatsApp');
    wa.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white"/></svg>`;
    const style = document.createElement('style');
    style.textContent = `
      #digha-wa {
        position: fixed; bottom: 2rem; right: 2rem; z-index: 9000;
        width: 56px; height: 56px; border-radius: 50%;
        background: #25D366; display: flex; align-items: center;
        justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,.4);
        transition: all .3s; text-decoration: none;
        animation: digha-wabounce 2s ease-in-out 3s 3;
      }
      #digha-wa:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,.55); }
      #digha-wa svg { width: 28px; height: 28px; }
      @keyframes digha-wabounce { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
    `;
    document.head.appendChild(style);
    document.body.appendChild(wa);
  }

  // ── BACK TO TOP BUTTON ─────────────────────────────────────
  if (!document.getElementById('digha-top')) {
    const btn = document.createElement('button');
    btn.id = 'digha-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Back to top');
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const style = document.createElement('style');
    style.textContent = `
      #digha-top {
        position: fixed; bottom: 2rem; left: 2rem; z-index: 9000;
        width: 44px; height: 44px; border-radius: 50%;
        background: rgba(22,22,22,.9); border: 1px solid rgba(255,255,255,.1);
        color: #C8C4BC; cursor: pointer; font-size: 1.1rem;
        display: flex; align-items: center; justify-content: center;
        transition: all .3s; opacity: 0; pointer-events: none;
        font-family: inherit;
      }
      #digha-top.digha-visible { opacity: 1; pointer-events: all; }
      #digha-top:hover { background: rgba(30,30,30,.95); color: #F0EDE8; transform: translateY(-3px); }
    `;
    document.head.appendChild(style);
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => {
      btn.classList.toggle('digha-visible', window.scrollY > 400);
    });
  }

  // ── PAGE LOADER ────────────────────────────────────────────
  // Only inject if page doesn't already have one
  if (!document.getElementById('digha-loader')) {
    // Get logo from meta tag or use a text fallback
    const loader = document.createElement('div');
    loader.id = 'digha-loader';
    loader.innerHTML = `<div class="dl-text">DIGHA</div><div class="dl-bar"><div class="dl-fill"></div></div>`;
    const style = document.createElement('style');
    style.textContent = `
      #digha-loader {
        position: fixed; inset: 0; background: #080808; z-index: 99999;
        display: flex; flex-direction: column; align-items: center;
        justify-content: center; gap: 1rem;
        transition: opacity .5s, visibility .5s;
      }
      #digha-loader.dl-hidden { opacity: 0; visibility: hidden; }
      .dl-text {
        font-family: 'Inter', sans-serif; font-size: 1.5rem;
        font-weight: 900; letter-spacing: .3em;
        color: rgba(240,237,232,.15); animation: dl-pulse 1s ease-in-out infinite;
      }
      .dl-bar { width: 100px; height: 2px; background: rgba(255,255,255,.06); border-radius: 2px; overflow: hidden; }
      .dl-fill { height: 100%; background: #C8102E; border-radius: 2px; animation: dl-load 1.2s ease forwards; }
      @keyframes dl-pulse { 0%,100%{opacity:.3} 50%{opacity:1} }
      @keyframes dl-load { 0%{width:0%} 100%{width:100%} }
    `;
    document.head.appendChild(style);
    document.body.insertBefore(loader, document.body.firstChild);
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('dl-hidden'), 700);
    });
  }

})();
