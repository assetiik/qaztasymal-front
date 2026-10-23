'use strict';

const kz = {
  copyrightCompany:'ЖШС TLC «Qaztasymal»', support:'Қолдау қызметі', legalNavigation:'Құжаттар және қолдау',
  home:'Qaztasymal — басты бет', qrAlt:'Qaztasymal жүктеуге арналған QR-код', appleAria:'App Store дүкеніндегі Qaztasymal', googleAria:'Google Play дүкеніндегі Qaztasymal', skip:'Мазмұнға өту', navigation:'Навигация', navServices:'Қызметтер', navHow:'Қалай жұмыс істейді', navPartners:'Серіктестерге', navContacts:'Байланыс', download:'Қосымшаны жүктеу', menu:'Мәзірді ашу',
  heroEyebrow:'ҚАЗАҚСТАНДА ЖАСАЛҒАН', heroTitle1:'Қала жақын.', heroTitle2:'Күніңіз жеңіл.', heroDescription:'Шаруаңызбен жолға шығу, сәлемдеме жіберу немесе кешкі асқа тапсырыс беру. Жоспарларыңызға — бір Qaztasymal қосымшасы.',
  storeApple:'Жүктеп алыңыз', storeGoogle:'Жүктеп алыңыз', qrButton:'Немесе QR-кодты сканерлеңіз', heroAlt:'Көгілдір такси, курьер скутері және сәлемдеме', taxiTag:'Сізді күткен жерге', deliveryTag:'Есіктен есікке дейін', deliveryTagSmall:'Маңыздысы — мекенжайға', artCaption:'ӘР КҮНІҢІЗ. ҚОЗҒАЛЫСТА.',
  servicesEyebrow:'БІР ҚОСЫМША — КӨП МҮМКІНДІК', servicesTitle:'Бүгінгі жоспарыңыз қандай?', servicesAside:'Үлкен жоспарлар мен<br>күнделікті шағын істер үшін.', serviceTabs:'Qaztasymal қызметтері', taxi:'Qaz Taxi', courier:'Курьер', shops:'Дүкендер', pharmacy:'Дәріханалар', food:'Мейрамханалар', routeFinish:'Жоспарларыңыз', routeStart:'Сіз осындасыз', routeLegend:'Әр бағыт сізден басталады', serviceNote:'Қолжетімді қызметтер мен ұсыныстар мекенжайыңызға байланысты. Оларды қосымшадан қараңыз.',
  phoneSticker:'Бәрі қолыңызда', screenAlt:'Qaztasymal қосымшасының басты экраны', phoneCaption:'Қалаңыз қалтаңызда', howEyebrow:'БАСТАУ СІЗ ОЙЛАҒАННАН ДА ОҢАЙ', howTitle1:'Аз әурешілік.', howTitle2:'Көп мүмкіндік.', howIntro:'Бірнеше қарапайым қадам — өзіңіз үшін маңызды істерге қайта оралыңыз.', step1Title:'Қосымшаны жүктеңіз', step1Text:'Qaztasymal қосымшасын App Store немесе Google Play дүкенінен орнатып, тіркеліңіз.', step2Title:'Қажетті қызметті таңдаңыз', step2Text:'Такси, курьер немесе дүкеннен тапсырыс. Мекенжайыңызды және тапсырыс мәліметтерін көрсетіңіз.', step3Title:'Әрі қарай — өз жоспарыңыз', step3Text:'Тапсырысты растап, оның мәртебесін қосымшадан бақылаңыз.', tryApp:'Qaztasymal-ды қолданып көру',
  partnersEyebrow:'БІРГЕ АЛҒА БАСАМЫЗ', partnersTitle:'Бізбен бірге мүмкіндік көп', driverLabel:'ЖҮРГІЗУШІЛЕР МЕН КУРЬЕРЛЕРГЕ', driverTitle:'Өз жолыңыз.<br>Өз мүмкіндігіңіз.', driverText:'Qaztasymal-ға қосылыңыз: жолаушы тасымалдаңыз немесе тапсырыс жеткізіңіз. Қосылу шарттарын біздің командамыздан біліңіз.', joinTeam:'Серіктес болу', businessLabel:'ДҮКЕНДЕР МЕН МЕЙРАМХАНАЛАРҒА', businessTitle:'Сіздің бизнесіңіз.<br>Клиенттерге жақын.', businessText:'Бизнеске арналған QaztasymalPro қосымшасында тапсырыстарды қабылдап, тауарлар мен мәзірді басқарыңыз, жеткізуді бақылаңыз.', businessCta:'QaztasymalPro-ны ашу',
  faqEyebrow:'БӘРІ ТҮСІНІКТІ', faqTitle:'Сұрақтарыңыз бар ма?<br>Біз жаныңыздамыз.', faqIntro:'Қосымша мен сервистің мүмкіндіктерін түсінуге көмектесеміз.', writeUs:'Бізге жазу', faq1Q:'Qaztasymal қайда жұмыс істейді?', faq1A:'Qaztasymal — Қазақстан бойынша такси тапсырыс беру және курьерлік жеткізу сервисі. Қолжетімді қызметтерді, дүкендер мен мейрамханаларды көру үшін қосымшада мекенжайыңызды көрсетіңіз.', faq2Q:'Таксиге немесе жеткізуге қалай тапсырыс беруге болады?', faq2A:'Qaztasymal-ды жүктеп, тіркеліңіз және басты экраннан қажетті қызметті таңдаңыз. Мекенжайларды, тапсырыс мәліметтерін толтырып, тапсырысты қосымшада растаңыз.', faq3Q:'Бағасын қайдан көруге болады?', faq3A:'Ағымдағы бағаны және қолжетімді төлем тәсілдерін тапсырыс беру кезінде қосымшадан қараңыз. Шарттар таңдалған қызмет пен тапсырыс параметрлеріне байланысты.', faq4Q:'Дүкенді немесе мейрамхананы қалай қосуға болады?', faq4A:'+7 777 667 18 08 телефоны немесе info@qaztasymal.kz электрондық поштасы арқылы бізбен байланысыңыз. Командамыз серіктестік шарттары және QaztasymalPro-мен жұмыс істеу туралы айтып береді.',
  downloadEyebrow:'БҮГІНГІ КҮНДІ ЖЕҢІЛДЕТЕЙІК ПЕ?', downloadTitle:'Әр күніңіз —<br>Qaztasymal-мен.', downloadText:'Такси, жеткізу және күнделікті істер — бір қосымшада.', qrCaption:'Камераны бағыттаңыз.<br>Сіз жолға дайынсыз.',
  footerTagline:'Күніңізге серік боламыз.', companyShort:'ЖШС TLC «Qaztasymal»', companyFull:'Жауапкершілігі шектеулі серіктестік TLC «Qaztasymal»', binLabel:'БСН', copyBin:'БСН көшіру', registrationLabel:'Тіркелу күні:', addressLabel:'Заңды мекенжайы', companyAddress:'Қазақстан Республикасы, Алматы қаласы, Алатау ауданы, Алгабас шағын ауданы, Сазсырнай көшесі, 8-үй', activityLabel:'Қызмет түрі', companyActivity:'Бүкіл Қазақстан бойынша такси тапсырыс беру және курьерлік жеткізілім қызметі', oked:'ЭҚЖЖ 96090', rights:'Барлық құқықтар қорғалған.', privacy:'Құпиялылық саясаты', backTop:'Жоғары',
  close:'Жабу', dialogEyebrow:'ӘРҚАШАН ҚОЛЫҢЫЗДА', forClients:'Клиенттерге', forBusiness:'Бизнеске', dialogNote:'Ресми қосымшалар дүкендерінен жүктеу'
};

const services = {
  ru: {
    taxi: { category:'ПОЕЗДКИ ПО ГОРОДУ', title:'Следующая остановка —<br>ваши планы.', description:'На работу, на встречу или домой. Укажите маршрут в Qaztasymal и закажите такси прямо в приложении.', features:['Маршрут и поездка на карте','Оплата картой или наличными','История поездок в приложении'], cta:'Поехали с Qaz Taxi', icon:'car' },
    delivery: { category:'КУРЬЕРСКАЯ ДОСТАВКА', title:'Важное —<br>из рук в руки.', description:'Документы, подарки и посылки. Оформите курьерскую доставку: укажите, откуда забрать и куда привезти.', features:['Отправка из приложения','Адреса отправителя и получателя','Детали заказа в одном месте'], cta:'Отправить с курьером', icon:'box' },
    shops: { category:'ЗАКАЗЫ ИЗ МАГАЗИНОВ', title:'Список покупок.<br>Без лишней поездки.', description:'Выберите доступный магазин и нужные товары в приложении. Повседневные покупки — с доставкой по вашему адресу.', features:['Магазины по вашему адресу','Выбор товаров в приложении','Оформление доставки'], cta:'Посмотреть магазины', icon:'bag' },
    pharmacy: { category:'АПТЕКИ РЯДОМ', title:'Для заботы<br>о себе и близких.', description:'Найдите доступные аптеки в Qaztasymal и посмотрите их ассортимент. Возможность заказа уточняйте в приложении.', features:['Доступные аптеки в одном разделе','Ассортимент в приложении','Заказ по вашему адресу'], cta:'Перейти к аптекам', icon:'pill' },
    food: { category:'ДОСТАВКА ИЗ РЕСТОРАНОВ', title:'Сегодня готовит<br>ваш любимый ресторан.', description:'Завтрак дома, обед в офисе или ужин с близкими. Выберите ресторан и блюда из доступного меню в приложении.', features:['Рестораны по вашему адресу','Меню и оформление заказа','Доставка к вашему столу'], cta:'Выбрать что-нибудь вкусное', icon:'food' }
  },
  kk: {
    taxi: { category:'ҚАЛА ІШІНДЕГІ САПАРЛАР', title:'Келесі аялдама —<br>жоспарларыңыз.', description:'Жұмысқа, кездесуге немесе үйге. Qaztasymal-да бағытыңызды көрсетіп, қосымшадан таксиге тапсырыс беріңіз.', features:['Бағыт пен сапар картада','Картамен немесе қолма-қол төлеу','Сапарлар тарихы қосымшада'], cta:'Qaz Taxi-мен жолға шығайық', icon:'car' },
    delivery: { category:'КУРЬЕРЛІК ЖЕТКІЗУ', title:'Маңызды заттар —<br>қолдан қолға.', description:'Құжаттар, сыйлықтар мен сәлемдемелер. Курьерлік жеткізуге тапсырыс беріңіз: қайдан алып, қайда жеткізу керегін көрсетіңіз.', features:['Қосымшадан жіберу','Жіберуші мен алушының мекенжайлары','Тапсырыс мәліметтері бір жерде'], cta:'Курьермен жіберу', icon:'box' },
    shops: { category:'ДҮКЕНДЕРДЕН ТАПСЫРЫС', title:'Сатып алу тізімі.<br>Артық жолсыз.', description:'Қосымшадан қолжетімді дүкен мен қажетті тауарларды таңдаңыз. Күнделікті сатып алуларыңыз — мекенжайыңызға жеткізіледі.', features:['Мекенжайыңыз бойынша дүкендер','Қосымшадан тауар таңдау','Жеткізуге тапсырыс беру'], cta:'Дүкендерді қарау', icon:'bag' },
    pharmacy: { category:'ЖАҚЫН ЖЕРДЕГІ ДӘРІХАНАЛАР', title:'Өзіңіз бен<br>жақындарыңызға қамқорлық.', description:'Qaztasymal-дан қолжетімді дәріханаларды тауып, ассортиментін қараңыз. Тапсырыс беру мүмкіндігін қосымшадан тексеріңіз.', features:['Қолжетімді дәріханалар бір бөлімде','Ассортимент қосымшада','Мекенжайыңызға тапсырыс'], cta:'Дәріханаларға өту', icon:'pill' },
    food: { category:'МЕЙРАМХАНАЛАРДАН ЖЕТКІЗУ', title:'Бүгін сүйікті<br>мейрамханаңыз дайындайды.', description:'Үйдегі таңғы ас, кеңседегі түскі ас немесе жақындарыңызбен кешкі ас. Қосымшадан мейрамхана мен мәзірдегі тағамдарды таңдаңыз.', features:['Мекенжайыңыз бойынша мейрамханалар','Мәзір және тапсырыс беру','Дастарханыңызға жеткізу'], cta:'Дәмді тағам таңдау', icon:'food' }
  }
};

const ru = {};
document.querySelectorAll('[data-i18n]').forEach(el => { ru[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll('[data-i18n-aria]').forEach(el => { ru[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
document.querySelectorAll('[data-i18n-alt]').forEach(el => { ru[el.dataset.i18nAlt] = el.alt; });
const dialog = document.getElementById('download-dialog');
let lang = 'ru';
let selectedService = 'taxi';
let selectedApp = 'client';
let toastTimer;

function updateService(service) {
  selectedService = service;
  const item = services[lang][service];
  document.querySelectorAll('[data-service]').forEach(button => {
    const active = button.dataset.service === service;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });
  const panel = document.getElementById('service-panel');
  panel.setAttribute('aria-labelledby', `tab-${service}`);
  panel.dataset.active = service;
  document.getElementById('service-category').textContent = item.category;
  document.getElementById('service-title').innerHTML = item.title;
  document.getElementById('service-description').textContent = item.description;
  document.getElementById('service-features').replaceChildren(...item.features.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  document.getElementById('service-cta').textContent = item.cta;
  document.querySelector('#route-icon use').setAttribute('href', `#i-${item.icon}`);
}

function updateApp(app) {
  selectedApp = app;
  const business = app === 'business';
  document.querySelectorAll('[data-app]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.app === app)));
  const appName = business ? 'QaztasymalPro' : 'Qaztasymal';
  document.getElementById('dialog-title').textContent = lang === 'kk' ? `${appName} жүктеңіз` : `Скачайте ${appName}`;
  document.getElementById('dialog-description').textContent = business
    ? (lang === 'kk' ? 'Дүкендер мен мейрамханаларға арналған қосымша. Құрылғыңызға сәйкес дүкенді таңдаңыз.' : 'Приложение для магазинов и ресторанов. Выберите магазин для вашего устройства.')
    : (lang === 'kk' ? 'Қосымшалар дүкенін таңдаңыз немесе телефон камерасын QR-кодқа бағыттаңыз.' : 'Выберите магазин приложений или наведите камеру телефона на QR-код.');
  document.getElementById('dialog-qr').hidden = business;
  document.getElementById('dialog-apple').href = business ? 'https://apps.apple.com/kz/app/qaztasymalpro/id6751494692' : 'https://apps.apple.com/kz/app/qaztasymal-kz/id6473836611';
  document.getElementById('dialog-google').href = business ? 'https://play.google.com/store/apps/details?id=com.thousand.qaztasymalpro' : 'https://play.google.com/store/apps/details?id=com.thousand.qaztasymal';
  document.querySelector('.dialog-icon use').setAttribute('href', business ? '#i-store' : '#i-car');
}

function setLanguage(next, persist = true) {
  lang = next === 'kk' ? 'kk' : 'ru';
  const dictionary = lang === 'kk' ? kz : ru;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { if (dictionary[el.dataset.i18n] !== undefined) el.innerHTML = dictionary[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { if (dictionary[el.dataset.i18nAria]) el.setAttribute('aria-label', dictionary[el.dataset.i18nAria]); });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { if (dictionary[el.dataset.i18nAlt]) el.alt = dictionary[el.dataset.i18nAlt]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  document.querySelector('.language-switch').setAttribute('aria-label', lang === 'kk' ? 'Тілді таңдау' : 'Выбор языка');
  document.querySelector('.dialog-tabs').setAttribute('aria-label', lang === 'kk' ? 'Қосымшаны таңдау' : 'Выбор приложения');
  document.title = lang === 'kk' ? 'Qaztasymal — Қазақстандағы такси және жеткізу' : 'Qaztasymal — такси и доставка в Казахстане';
  document.querySelector('meta[name="description"]').content = lang === 'kk' ? 'Қала жақын. Күніңіз жеңіл. Qaztasymal — такси, курьерлік жеткізу, дүкендер, дәріханалар мен мейрамханалар бір қосымшада.' : 'Город ближе. День проще. Qaztasymal — такси, курьерская доставка, магазины, аптеки и рестораны в одном приложении. Скачайте для iOS и Android.';
  updateService(selectedService);
  updateApp(selectedApp);
  if (persist) {
    try { localStorage.setItem('qaztasymal-language', lang); } catch (_) { /* Language works without local storage. */ }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
const serviceButtons = [...document.querySelectorAll('[data-service]')];
serviceButtons.forEach((button, index) => {
  button.addEventListener('click', () => updateService(button.dataset.service));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % serviceButtons.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + serviceButtons.length) % serviceButtons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = serviceButtons.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    const target = serviceButtons[next];
    updateService(target.dataset.service);
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  });
});

function closeMenu() {
  document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
  document.getElementById('mobile-menu').hidden = true;
}
document.querySelector('.menu-toggle').addEventListener('click', event => {
  const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!expanded));
  document.getElementById('mobile-menu').hidden = expanded;
});
document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
matchMedia('(min-width:761px)').addEventListener('change', event => { if(event.matches) closeMenu(); });

document.querySelectorAll('[data-download]').forEach(button => button.addEventListener('click', () => {
  closeMenu();
  updateApp(button.dataset.download);
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelectorAll('[data-app]').forEach(button => button.addEventListener('click', () => updateApp(button.dataset.app)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });

document.querySelectorAll('.faq-list details').forEach(detail => detail.addEventListener('toggle', () => {
  if(detail.open) document.querySelectorAll('.faq-list details').forEach(other => { if(other !== detail) other.open = false; });
}));

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3000);
}
document.getElementById('copy-bin').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('240140010693');
    showToast(lang === 'kk' ? 'БСН көшірілді' : 'БИН скопирован');
  } catch (_) { showToast(lang === 'kk' ? 'БСН: 240140010693' : 'БИН: 240140010693'); }
});

window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 10), { passive: true });
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('awaiting'); observer.unobserve(entry.target); }
  }), { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('awaiting'); observer.observe(el); }
  });
}
let initialLanguage = new URLSearchParams(location.search).get('lang');
if (!initialLanguage) { try { initialLanguage = localStorage.getItem('qaztasymal-language'); } catch (_) {} }
setLanguage(initialLanguage || 'ru', false);
document.getElementById('year').textContent = new Date().getFullYear();
