(function () {
  const routes = {
    home: 'index.html',
    beranda: 'index.html',
    'about-us': 'about-us.html',
    'rooms-&-suites': 'rooms.html',
    'dining-&-bar': 'dining.html',
    facilities: 'dining.html#facilities',
    fasilitas: 'dining.html#facilities',
    'restoran-&-bar': 'dining.html',
    gallery: 'gallery.html',
    galeri: 'gallery.html',
    'location-&-access': 'location.html',
    contact: 'contact.html',
    'book-now': 'book-now.html',
    reservation: 'book-now.html'
  };
  const navItems = [
    ['Home', 'home'], ['About Us', 'about-us'], ['Rooms & Suites', 'rooms-&-suites'],
    ['Dining & Bar', 'dining-&-bar'], ['Facilities', 'facilities'], ['Gallery', 'gallery'],
    ['Location & Access', 'location-&-access'], ['Contact', 'contact']
  ];
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  function linkFor(path) { return routes[path] || '#'; }
  function header() {
    const active = navItems.find(([, path]) => linkFor(path).split('#')[0] === current)?.[1] || '';
    return `<header class="site-header"><div class="site-header__inner"><a class="site-brand" href="index.html"><span class="site-brand__mark">HU</span><span><span class="site-brand__name">HU'U</span><span class="site-brand__meta">Gili Trawangan</span></span></a><nav class="site-nav">${navItems.map(([label, path]) => `<a href="${linkFor(path)}"${active === path ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav><div class="site-actions"><a class="site-button" href="book-now.html">Book Now</a><button class="site-menu-button" aria-label="Open menu" aria-expanded="false"><span class="menu-icon"><i></i><i></i><i></i></span></button></div><nav class="site-mobile-nav">${navItems.map(([label, path]) => `<a href="${linkFor(path)}">${label}</a>`).join('')}<a class="site-button" href="book-now.html">Book Now</a></nav></div></header>`;
  }
  function footer() {
    return `<footer class="site-footer"><div class="site-footer__inner"><div class="site-footer__grid"><div><h3>HU'U Beach Front</h3><p>A modern tropical sanctuary on Gili Trawangan. Hotel information, rates, and contact details are being finalized by the hotel team.</p></div><div><h4>Explore</h4>${navItems.slice(1, 5).map(([label, path]) => `<a href="${linkFor(path)}">${label}</a>`).join('')}</div><div><h4>Contact & Location</h4><p>Official address and contact details will be published here once confirmed by the hotel.</p><a href="contact.html">Contact the hotel</a></div><div><h4>Newsletter</h4><p>Seasonal island updates and direct booking news.</p><a href="contact.html">Join the interest list</a></div></div><div class="site-footer__bottom"><span>© 2026 HU'U Beach Front Hotel. Information subject to confirmation.</span><span>Privacy Policy · Terms & Conditions</span></div></div></footer>`;
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[data-path]').forEach(function (anchor) { const path = anchor.dataset.path; if (routes[path]) anchor.href = linkFor(path); });
    const existingHeader = document.querySelector('header');
    if (existingHeader && !existingHeader.classList.contains('site-header')) {
      existingHeader.classList.add('legacy-header');
      existingHeader.querySelectorAll('a[data-path]').forEach(function (anchor) { const path = anchor.dataset.path; if (routes[path]) anchor.href = linkFor(path); });
      existingHeader.insertAdjacentHTML('beforeend', `<button class="site-menu-button" aria-label="Open menu" aria-expanded="false"><span class="menu-icon"><i></i><i></i><i></i></span></button><nav class="site-mobile-nav">${navItems.map(([label, path]) => `<a href="${linkFor(path)}">${label}</a>`).join('')}<a class="site-button" href="book-now.html">Book Now</a></nav>`);
    }
    document.querySelectorAll('header img[alt*="Logo"], footer img[alt*="Logo"]').forEach(function (image) {
      const mark = document.createElement('span');
      mark.className = 'site-logo-fallback';
      mark.textContent = 'HU';
      mark.setAttribute('aria-label', "HU'U logo");
      image.replaceWith(mark);
    });
    const header = document.querySelector('header');
    const menuButton = document.querySelector('.site-menu-button');
    const menu = document.querySelector('.site-mobile-nav');
    function setMenu(open) { if (!menu || !menuButton) return; menu.classList.toggle('is-open', open); menuButton.classList.toggle('is-open', open); menuButton.setAttribute('aria-expanded', open ? 'true' : 'false'); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }
    if (menuButton) menuButton.addEventListener('click', function () { setMenu(!menu.classList.contains('is-open')); });
    if (menu) menu.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { setMenu(false); }); });
    window.addEventListener('scroll', function () { if (header) header.classList.toggle('is-scrolled', window.scrollY > 18); }, { passive: true });
    window.dispatchEvent(new Event('scroll'));
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape') setMenu(false); });
    document.querySelectorAll('form[data-demo-form]').forEach(function (form) { form.addEventListener('submit', function (event) { event.preventDefault(); const message = form.querySelector('[data-form-message]'); if (message) message.textContent = 'Thank you. This enquiry form is ready to connect to the hotel booking system once the official details are confirmed.'; }); });
  });
  window.HuuSite = { routes, header, footer };
})();
