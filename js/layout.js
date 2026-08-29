/* ==========================================================================
   AVRA Lounge & Cocktail Ritual — заеднички header/footer + мега-мени
   Демо/портфолио проект — податоците (мени/цени/содржина) се илустративни.
   ========================================================================== */
(function(){

  var NAV = [
    { label: "Коктели", href: "cocktails.html", sub: [
      { label: "Signature коктели", href: "cocktails.html#signature" },
      { label: "Cuban Experience",  href: "cocktails.html#cuban" },
      { label: "French Experience", href: "cocktails.html#french" },
      { label: "AVRA Mule",         href: "cocktails.html#avra-mule" },
      { label: "Класици",          href: "cocktails.html#klasici" }
    ]},
    { label: "Храна", href: "food.html", sub: [
      { label: "Стартери",        href: "food.html#starteri" },
      { label: "Салати",          href: "food.html#salati" },
      { label: "Главни јадења",   href: "food.html#glavni" },
      { label: "Прилози",         href: "food.html#prilozi" },
      { label: "Десерти",         href: "food.html#deserti" }
    ]},
    { label: "Пијалоци", href: "drinks.html", sub: [
      { label: "Шампањ",              href: "drinks.html#shampanj" },
      { label: "Вино · Tikveš 1885",  href: "drinks.html#vino" },
      { label: "Виски",               href: "drinks.html#viski" },
      { label: "Рум & Текила",        href: "drinks.html#rum-tekila" },
      { label: "Кафе · Julius Meinl", href: "drinks.html#kafe" }
    ]},
    { label: "Неделна агенда", href: "agenda.html", sub: [
      { label: "Четврток · Cuban Sounds",   href: "agenda.html#cetvrtok" },
      { label: "Петок · French Sounds",     href: "agenda.html#petok" },
      { label: "Сабота · AVRA Mule / House", href: "agenda.html#sabota" },
      { label: "Недела · Cheers 20% Off",   href: "agenda.html#nedela" },
      { label: "Настани & Наградни игри",   href: "agenda.html#nastani" }
    ]},
    { label: "За АВРА", href: "about.html", sub: [
      { label: "Нашата приказна",     href: "about.html#prikazna" },
      { label: "Ентериер & Тераса",   href: "about.html#enterier" },
      { label: "Нашите луѓе",         href: "about.html#lugje" },
      { label: "Партнери & Брендови", href: "about.html#partneri" },
      { label: "Pet Friendly",        href: "about.html#pet-friendly" }
    ]},
    { label: "Контакт", href: "contact.html", sub: [
      { label: "Резервација на маса",  href: "contact.html#rezervacija" },
      { label: "Локација",             href: "contact.html#lokacija" },
      { label: "Работно време",        href: "contact.html#rabotno-vreme" },
      { label: "Приватни настани",     href: "contact.html#privatni-nastani" },
      { label: "Следете нè",           href: "contact.html#socijalni" }
    ]}
  ];

  var PHONE_DISPLAY = "078 564 477";
  var PHONE_TEL = "+38978564477";
  var IG_URL = "https://www.instagram.com/avra.bitesandcocktails/";
  var MAPS_VIEW_URL = "https://www.google.com/maps?q=Joska+Jordanoski+27,+Prilep+7500&ftid=0x1356ebf001100b99:0xdefc127b2edb2446";
  var MAPS_EMBED_SRC = "https://www.google.com/maps?q=41.3478444,21.5589923&z=16&output=embed";

  function chevronSvg(){
    return '<svg viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function closeSvg(){
    return '<svg viewBox="0 0 24 24" fill="none"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  }

  function phoneSvg(){
    return '' +
      '<svg class="phone-icon" viewBox="0 0 24 24" fill="none">' +
        '<g class="receiver">' +
          '<path d="M6.6 3.5c.6-.3 1.3-.1 1.7.4l1.6 2.1c.4.5.4 1.2 0 1.7L8.6 9.4c.6 1.7 1.8 3.3 3.3 4.5 1.5 1.2 3.1 2 4.7 2.3l1.3-1.5c.4-.5 1.1-.6 1.7-.3l2.3 1.2c.6.3.9 1 .7 1.6-.5 1.5-2 2.9-3.6 2.7-3.4-.4-6.8-2.3-9.4-4.9-2.6-2.6-4.4-6-4.7-9.4-.1-1.5 1-3 2.6-3.1z" ' +
            'stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>' +
        '</g>' +
      '</svg>';
  }

  function igSvg(uid){
    var gid = "igGrad" + uid;
    return '' +
      '<svg viewBox="0 0 24 24" fill="none" class="ig-gradient-anim">' +
        '<defs>' +
          '<linearGradient id="'+gid+'" x1="0" y1="24" x2="24" y2="0">' +
            '<stop offset="0%" stop-color="#feda75"/>' +
            '<stop offset="28%" stop-color="#fa7e1e"/>' +
            '<stop offset="55%" stop-color="#d62976"/>' +
            '<stop offset="78%" stop-color="#962fbf"/>' +
            '<stop offset="100%" stop-color="#4f5bd5"/>' +
          '</linearGradient>' +
        '</defs>' +
        '<rect x="2.5" y="2.5" width="19" height="19" rx="6" stroke="url(#'+gid+')" stroke-width="1.6"/>' +
        '<circle cx="12" cy="12" r="4.6" stroke="url(#'+gid+')" stroke-width="1.6"/>' +
        '<circle cx="17.1" cy="6.9" r="1.15" fill="url(#'+gid+')"/>' +
      '</svg>';
  }

  function pinSvg(){
    return '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="9.3" r="2.4" stroke="currentColor" stroke-width="1.4"/></svg>';
  }

  function buildMegaPanel(item){
    var html = '<ul>';
    item.sub.forEach(function(s){
      html += '<li><a href="'+s.href+'">'+s.label+'</a></li>';
    });
    html += '</ul>';
    return html;
  }

  function renderHeader(activeHref){
    var host = document.getElementById('site-header');
    if(!host) return;

    var li = NAV.map(function(item){
      var isActive = activeHref && activeHref.indexOf(item.href.split('#')[0]) === 0;
      return (
        '<li class="'+(isActive?'open':'')+'">' +
          '<a class="nav-link" href="'+item.href+'"><span>'+item.label+'</span>'+chevronSvg()+'</a>' +
          '<div class="mega-panel">'+buildMegaPanel(item)+'</div>' +
        '</li>'
      );
    }).join('');

    host.innerHTML =
      '<div class="header-inner">' +
        '<a class="brand" href="index.html">' +
          '<img src="media/avra-logo.png" alt="AVRA лого">' +
          '<span class="brand-text"><strong>AVRA</strong><span>Lounge &amp; Cocktail Ritual</span></span>' +
        '</a>' +
        '<nav class="main-nav" id="mainNav">' +
          '<button class="nav-close" id="navClose" aria-label="Затвори мени">'+closeSvg()+'</button>' +
          '<ul class="nav-top-list">'+li+'</ul>' +
        '</nav>' +
        '<div class="header-actions">' +
          '<a class="btn btn-outline" href="tel:'+PHONE_TEL+'">Резервирај маса</a>' +
          '<button class="burger" id="burgerBtn" aria-label="Мени"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div>' +
      '<div class="nav-scrim" id="navScrim"></div>';

    // Mobile menu behaviour
    var burger = document.getElementById('burgerBtn');
    var nav = document.getElementById('mainNav');
    var scrim = document.getElementById('navScrim');
    var navClose = document.getElementById('navClose');
    function closeNav(){ nav.classList.remove('open'); scrim.classList.remove('open'); burger.classList.remove('open'); }
    burger.addEventListener('click', function(){
      var willOpen = !nav.classList.contains('open');
      nav.classList.toggle('open', willOpen);
      scrim.classList.toggle('open', willOpen);
      burger.classList.toggle('open', willOpen);
    });
    scrim.addEventListener('click', closeNav);
    navClose.addEventListener('click', closeNav);

    // On mobile, tap category label toggles its submenu instead of navigating away
    var topItems = nav.querySelectorAll('.nav-top-list > li');
    Array.prototype.forEach.call(topItems, function(itemEl){
      var link = itemEl.querySelector('.nav-link');
      link.addEventListener('click', function(e){
        if(window.matchMedia('(max-width: 980px)').matches){
          e.preventDefault();
          var wasOpen = itemEl.classList.contains('open');
          Array.prototype.forEach.call(topItems, function(el){ el.classList.remove('open'); });
          if(!wasOpen) itemEl.classList.add('open');
        }
      });
    });
  }

  function renderFooter(){
    var host = document.getElementById('site-footer');
    if(!host) return;
    var uid = Math.floor(Math.random()*100000);

    host.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-col">' +
            '<div class="footer-brand">' +
              '<img src="media/avra-logo.png" alt="AVRA лого">' +
              '<div><strong>AVRA</strong><span>Lounge &amp; Cocktail Ritual</span></div>' +
            '</div>' +
            '<p style="max-width:280px;">Лаунж и коктел ритуал во срцето на Прилеп — премиум пијалоци, добра храна и атмосфера за секоја вечер.</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Брзи линкови</h4>' +
            '<ul>' +
              '<li><a href="cocktails.html">Коктели</a></li>' +
              '<li><a href="food.html">Храна</a></li>' +
              '<li><a href="drinks.html">Пијалоци</a></li>' +
              '<li><a href="agenda.html">Неделна агенда</a></li>' +
              '<li><a href="about.html">За АВРА</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Работно време</h4>' +
            '<div class="footer-hours-row"><span>Понеделник – Недела</span><span>09:00 – 01:00</span></div>' +
            '<p style="margin-top:16px;">Отворено секој ден — од утринско кафе до доцни вечерни коктели.</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Контакт</h4>' +
            '<div class="icon-row">' +
              '<a class="contact-link" href="tel:'+PHONE_TEL+'">' +
                '<span class="icon-ring">'+phoneSvg()+'</span>' +
                '<span class="icon-label"><span class="l-title">Телефон</span><span class="l-value">'+PHONE_DISPLAY+'</span></span>' +
              '</a>' +
            '</div>' +
            '<div class="icon-row">' +
              '<a class="contact-link" href="'+MAPS_VIEW_URL+'" target="_blank" rel="noopener">' +
                '<span class="icon-ring">'+pinSvg()+'</span>' +
                '<span class="icon-label"><span class="l-title">Локација</span><span class="l-value">Јоска Јорданоски 27, Прилеп</span></span>' +
              '</a>' +
            '</div>' +
            '<div class="icon-row">' +
              '<a class="contact-link" href="'+IG_URL+'" target="_blank" rel="noopener">' +
                '<span class="icon-ring instagram">'+igSvg(uid)+'</span>' +
                '<span class="icon-label"><span class="l-title">Instagram</span><span class="l-value">@avra.bitesandcocktails</span></span>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-map" id="lokacija">' +
          '<iframe src="'+MAPS_EMBED_SRC+'" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="AVRA лоцирање на мапа"></iframe>' +
        '</div>' +
        '<a class="footer-map-link" href="'+MAPS_VIEW_URL+'" target="_blank" rel="noopener">Отвори во Google Maps →</a>' +
        '<div class="footer-bottom">' +
          '<span>© '+new Date().getFullYear()+' AVRA Lounge &amp; Cocktail Ritual</span>' +
          '<span>Изработено како демо/портфолио проект</span>' +
        '</div>' +
        '<p class="footer-disclaimer">Ова е демо/портфолио страница изработена како пример за веб-дизајн, инспирирана од јавниот Instagram профил на AVRA. Не е официјална страница на бизнисот; сите цени и опис на мени се илустративни.</p>' +
      '</div>';
  }

  function initReveal(){
    var els = document.querySelectorAll('.reveal');
    if(!('IntersectionObserver' in window)){
      els.forEach(function(el){ el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.14 });
    els.forEach(function(el){ io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function(){
    renderHeader(window.location.pathname.split('/').pop() || 'index.html');
    renderFooter();
    initReveal();
  });

  window.AVRA = { NAV: NAV, PHONE_TEL: PHONE_TEL, PHONE_DISPLAY: PHONE_DISPLAY, IG_URL: IG_URL };
})();
