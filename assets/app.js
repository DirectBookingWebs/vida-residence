/**
 * VIDA RESIDENCE - Luxury Venue Application Logic
 * Bilingual (HU / SK), Gallery Lightbox, Catering Calculator, Form Validation & Interactive State
 */

// Asset Config Map (Strictly local images from images/ directory)
const ASSETS = {
  logo: 'images/logo.png',
  logoWebp: 'images/logo.webp',
  hero: 'images/hero-exterior-night.jpg',
  sunsetBar: 'images/sunset-bar.jpg',
  ceremony: 'images/ceremony-garden.jpg',
  hall: 'images/hall-interior.jpg',
  apartment: 'images/apartment-room.jpg',
  decor: 'images/decor-details.jpg',
  catering: 'images/catering-food.jpg',
  gallery: [
    { src: 'images/gallery-1.jpg', alt: 'Vida Residence éjszakai kivilágított téglafal és terasz', category: 'venue', title: 'Éjszakai hangulatfények & Birtok' },
    { src: 'images/gallery-2.jpg', alt: 'Kültéri romantikus ceremónia helyszín fehér székekkel és virágokkal', category: 'ceremony', title: 'Romantikus kerti ceremónia' },
    { src: 'images/gallery-3.jpg', alt: 'Tágas belső nagyterem és tánctér esküvőre berendezve', category: 'hall', title: 'Exkluzív Nagyterem & Bálterem' },
    { src: 'images/gallery-4.jpg', alt: 'Vida Sunset Bar mediterrán terasz olajfával és hangulatvilágítással', category: 'sunset-bar', title: 'Vida Sunset Bar & Terasz' },
    { src: 'images/gallery-5.jpg', alt: 'Prémium asztalteríték és virágkompozíció a Vida Decor munkájából', category: 'decor', title: 'Vida Decor & Elegáns Teríték' },
    { src: 'images/gallery-6.jpg', alt: 'Gourmet esküvői gasztronómia és díszített fogások', category: 'catering', title: 'Prémium Kulináris Élmények' }
  ]
};

// Bilingual Translations (HU & SK)
const I18N = {
  hu: {
    nav: {
      concept: 'Koncepció',
      weddings: 'Esküvő',
      accommodation: 'Szállás',
      catering: 'Gasztronómia',
      gallery: 'Galéria',
      contact: 'Kapcsolat',
      inquireBtn: 'Ajánlatkérés',
      callBtn: 'Hívás most',
      langBtn: 'SK'
    },
    hero: {
      badge: 'Exkluzív Birtok • Bátorkeszi (Bátorove Kosihy)',
      title: 'Ahol az álmok emlékké válnak',
      subtitle: 'Természetközeli luxus, meghitt elegancia és teljes körű élmény egyetlen exkluzív magánbirtokon Bátorkeszin.',
      tag1: 'Akár 150+ Fő',
      tag2: '54 Férőhelyes Szállás',
      tag3: '2026–2028 Szezon Foglalható',
      tag4: 'Kizárólagos Birtokhasználat',
      btnBook: 'Időpontfoglalás & Bejárás',
      btnVirtual: 'Galéria & Virtuális séta',
      statsCapacity: '150+ Vendég',
      statsCapacitySub: 'Tágas belső bálterem',
      statsRooms: '54 Férőhely',
      statsRoomsSub: 'Helyszíni luxus szállás',
      statsPrivacy: '100% Privát',
      statsPrivacySub: 'Zárt, kizárólagos birtok',
      statsYears: '2026 – 2028',
      statsYearsSub: 'Esküvői naptár nyitva'
    },
    concept: {
      eyebrow: 'A VIDA KONCEPCIÓ',
      title: 'Minden Egy Helyen – Kompromisszumok Nélkül',
      desc: 'Nálunk nem kell a vendégek utaztatásán vagy a széttagolt helyszíneken aggódnia. A ceremónia meghitt pillanataitól a hajnalig tartó bálon át a kényelmes helyszíni ébredésig minden egyetlen harmonikus birtokon zajlik.',
      pillar1Title: 'Kültéri Ceremónia',
      pillar1Desc: 'Romantikus fogadalomtétel a zöldellő pázsiton, évszázados fák és elegáns székek ölelésében.',
      pillar2Title: 'Klimatizált Nagyterem',
      pillar2Desc: 'Prémium belső tér akár 150+ főig, tökéletes akusztikával, tánctérrel és hangulatvilágítással.',
      pillar3Title: 'Vida Sunset Bar',
      pillar3Desc: 'Mediterrán hangulatú teraszbár olajfával, signature koktélokkal és éjszakai fényekkel.',
      pillar4Title: 'Vida Apartments',
      pillar4Desc: '54 kényelmes férőhely a vendégeknek, külön Panoráma lakosztállyal az ifjú párnak.'
    },
    services: {
      eyebrow: 'SZOLGÁLTATÁSOK & ÉLMÉNYEK',
      title: 'Minden Részletében Kifinomult Ünneplés',
      weddingsTitle: 'Álomesküvők',
      weddingsDesc: 'Teljes körű lebonyolítás a polgári vagy egyházi ceremóniától a welcome proseccón át az éjféli menyasszonytáncig.',
      eventsTitle: 'Jubileumok & Céges Gálák',
      eventsDesc: '50-60. születésnapok, keresztelők, családi ünnepek és exkluzív céges csapatépítők privát környezetben.',
      decorTitle: 'Vida Decor Studio',
      decorDesc: 'Helyi professzionális dekorációs csapatunk az Ön színvilágához és elképzeléseihez igazítja a terítéket és virágokat.',
      barTitle: 'Vida Sunset Bar & Lounge',
      barDesc: 'Professzionális koktélbár a teraszon, amely rossz idő esetén azonnal belső lounge-ként üzemel.'
    },
    apartments: {
      eyebrow: 'SZÁLLÁS A HELYSZÍNEN',
      title: 'Vida Apartments & Panoráma Nászutas Lakosztály',
      desc: 'Felejtse el az éjszakai taxizást és a vendégek hazautazási gondjait! A Vida Residence 54 férőhelyes prémium szálláskapacitással rendelkezik közvetlenül a birtokon.',
      suiteTitle: 'Panoráma Nászutas Lakosztály',
      suiteDesc: 'Különleges privát lakosztály az ifjú párnak pezsgőbekészítéssel, panorámás kilátással és zavartalan reggeli készülődéssel.',
      feature1: '54 férőhely saját fürdőszobás szobákban',
      feature2: 'Prémium matracok és szállodai ágyneműk',
      feature3: 'Másnapi közös gourmet reggeli a családdal',
      feature4: 'Zárt, kamerával védett belső parkoló'
    },
    catering: {
      eyebrow: 'GASZTRONÓMIA & CSOMAGOK',
      title: 'Kulináris Mesterművek & Csomagok',
      desc: 'Helyi alapanyagok, gondos tálalás és felejthetetlen ízek. Válasszon gondosan összeállított menüsoraink közül vagy kérjen egyedi koncepciót.',
      calculatorTitle: 'Interaktív Csomagkalkulátor',
      guestCountLabel: 'Várható vendéglétszám:',
      classicTitle: 'VIDA CLASSIC',
      classicTag: 'Hagyományos Elegancia',
      classicDesc: 'Hagyományos és modern ízek tökéletes harmóniája, 3 fogásos ünnepi vacsora, éjféli hideg-meleg büfével.',
      eleganceTitle: 'VIDA ELEGANCE',
      eleganceTag: 'Legnépszerűbb Választás',
      eleganceDesc: 'Signature gourmet menü, welcome prosecco & canapé falatkák, 4 fogásos prémium vacsora, éjféli grill büfé.',
      extraTitle: 'VIDA EXTRA',
      extraTag: 'Haute Cuisine Élmény',
      extraDesc: 'Michelin-szintű kulináris élmény, éjféli street-food truck koncepció, korlátlan prémium italsor és sommelier kóstoló.',
      selectBtn: 'Ezt a csomagot választom'
    },
    gallery: {
      eyebrow: 'PILLANATOK & HANGULAT',
      title: 'Éljen Át Minden Pillanatot',
      filterAll: 'Összes fotó',
      filterVenue: 'Birtok & Külső',
      filterCeremony: 'Ceremónia',
      filterHall: 'Nagyterem',
      filterBar: 'Sunset Bar',
      filterDecor: 'Vida Decor',
      filterCatering: 'Gasztronómia'
    },
    faq: {
      eyebrow: 'GYAKORI KÉRDÉSEK',
      title: 'Minden, Amit Érdemes Tudnia',
      q1: 'Hány fő fér el kényelmesen a Vida Residence-ben?',
      a1: 'A belső nagytermünkben és a teraszon akár 150+ vendég kényelmes elhelyezésére van lehetőség, tágas tánctérrel és körasztalos elrendezéssel.',
      q2: 'Hány fő tud a helyszínen megszállni az esküvő után?',
      a2: 'Összesen 54 férőhely áll rendelkezésre a helyszíni prémium szobáinkban és apartmanjainkban, beleértve az ifjú pár különálló Panoráma lakosztályát.',
      q3: 'Mi történik rossz idő vagy eső esetén a kültéri ceremóniával?',
      a3: 'Rendelkezünk azonnal aktiválható esőtervvel: a fedett terasz vagy a nagyterem pompás ceremónia-falas környezete biztosítja, hogy a varázs esőben is tökéletes maradjon.',
      q4: 'Hozhatunk-e saját külsős szolgáltatókat (fotós, DJ, zenekar)?',
      a4: 'Természetesen igen! Bár saját bevált partnereket (dekoratőr, cukrászda, technika) is szívesen ajánlunk, Önök teljesen szabadon választhatják meg a szolgáltatói csapatot.',
      q5: 'Mely évekre lehet jelenleg időpontot foglalni?',
      a5: 'A 2026-os, 2027-es és 2028-as esküvői és rendezvény szezonra folyamatosan fogadjuk a foglalásokat és személyes bejárásokat.'
    },
    form: {
      eyebrow: 'KAPCSOLATFELVÉTEL & BEJÁRÁS',
      title: 'Kérjen Egyedi Ajánlatot Vagy Foglaljon Bejárást',
      subtitle: 'Töltse ki az alábbi űrlapot, és csapatunk 24 órán belül felveszi Önnel a kapcsolatot egyedi ajánlattal.',
      typeLabel: 'Rendezvény jellege *',
      typeWedding: 'Esküvő',
      typeBirthday: 'Születésnap / Jubileum (50-60. évforduló)',
      typeCorporate: 'Céges rendezvény / Gála',
      typeOther: 'Egyéb magánrendezvény',
      dateLabel: 'Tervezett év / dátum *',
      date2026: '2026-os szezon',
      date2027: '2027-es szezon',
      date2028: '2028-as szezon',
      guestsLabel: 'Várható vendéglétszám *',
      guests50: '50 – 80 fő',
      guests100: '80 – 120 fő',
      guests150: '120 – 150+ fő',
      accLabel: 'Szállásigény a helyszínen? (max. 54 fő)',
      accYes: 'Igen, szükségünk lesz szállásra',
      accNo: 'Nem szükséges szállás',
      accPartial: 'Részben (csak a szűk családnak / párnak)',
      nameLabel: 'Teljes név *',
      phoneLabel: 'Telefonszám *',
      emailLabel: 'E-mail cím *',
      notesLabel: 'Egyedi kívánságok, elképzelések',
      submitBtn: 'Ajánlatkérés és Bejárási Időpont Elküldése',
      sendingText: 'Küldés folyamatban...',
      successTitle: 'Köszönjük érdeklődését!',
      successDesc: 'Üzenetét sikeresen rögzítettük. Hamarosan telefonon vagy e-mailben jelentkezünk a részletekkel.',
      callPrompt: 'Sürgős kérdése van? Hívjon minket közvetlenül:'
    },
    contact: {
      eyebrow: 'ELÉRHETŐSÉG & MEGKÖZELÍTÉS',
      title: 'Találkozzunk Személyesen Bátorkeszin',
      addressTitle: 'Címünk & Lokáció',
      addressVal: 'Bátorkeszi (Bátorove Kosihy), Szlovákia, 946 34',
      phoneTitle: 'Közvetlen Telefon',
      emailTitle: 'Hivatalos E-mail',
      travelTitle: 'Könnyen megközelíthető',
      travelBudapest: 'Budapest ~ 1 óra 15 perc',
      travelGyor: 'Győr ~ 45 perc',
      travelKomarno: 'Komárom ~ 20 perc',
      travelNoveZamky: 'Érsekújvár ~ 25 perc',
      mapBtn: 'Útvonaltervezés a Google Térképen'
    },
    footer: {
      tagline: 'Természetközeli luxus, meghitt elegancia és felejthetetlen pillanatok Bátorkeszin.',
      quickLinks: 'Gyorslinkek',
      contactInfo: 'Kapcsolat',
      socialTitle: 'Kövessen Minket',
      copyright: '© 2026 Vida Residence. Minden jog fenntartva.'
    }
  },
  sk: {
    nav: {
      concept: 'Koncept',
      weddings: 'Svadba',
      accommodation: 'Ubytovanie',
      catering: 'Gastronómia',
      gallery: 'Galéria',
      contact: 'Kontakt',
      inquireBtn: 'Cenová ponuka',
      callBtn: 'Zavolať',
      langBtn: 'HU'
    },
    hero: {
      badge: 'Exkluzívny Areál • Bátorove Kosihy (Bátorkeszi)',
      title: 'Kde sa sny stávajú nezabudnuteľnými spomienkami',
      subtitle: 'Luxus v objatí prírody, intímna elegancia a kompletný servis na jednom súkromnom panstve v Bátorových Kosihách.',
      tag1: 'Až 150+ Hostí',
      tag2: 'Ubytovanie pre 54 osôb',
      tag3: 'Sezóny 2026–2028 otvorené',
      tag4: '100% Exkluzívny prenájom',
      btnBook: 'Rezervácia termínu & Obhliadka',
      btnVirtual: 'Galéria & Virtuálna prehliadka',
      statsCapacity: '150+ Hostí',
      statsCapacitySub: 'Priestranná tanečná sála',
      statsRooms: '54 Miest',
      statsRoomsSub: 'Prémiové ubytovanie na mieste',
      statsPrivacy: '100% Súkromie',
      statsPrivacySub: 'Uzavretý privátny areál',
      statsYears: '2026 – 2028',
      statsYearsSub: 'Svadobný kalendár otvorený'
    },
    concept: {
      eyebrow: 'KONCEPT VIDA',
      title: 'Všetko Na Jednom Mieste – Bez Kompromisov',
      desc: 'U nás nemusíte riešiť nočnú prepravu hostí ani presuny medzi miestami. Od dojemného obradu v záhrade, cez tanec až do rána, až po pohodlné prebudenie – všetko prebieha v jednom harmonickom areáli.',
      pillar1Title: 'Vonkajší Obrad',
      pillar1Desc: 'Romantické "ÁNO" na sviežom trávniku v obklopení stromov a elegantných bielych stoličiek.',
      pillar2Title: 'Klimatizovaná Sála',
      pillar2Desc: 'Prémiový interiér až pre 150+ hostí so skvelou akustikou, tanečným parketom a náladovým osvetlením.',
      pillar3Title: 'Vida Sunset Bar',
      pillar3Desc: 'Stredomorský bar na terase s olivovníkom, signature kokteilmi a večernými svetlami.',
      pillar4Title: 'Vida Apartments',
      pillar4Desc: '54 komfortných lôžok pre svadobčanov a samostatný panoramatický novomanželský apartmán.'
    },
    services: {
      eyebrow: 'SLUŽBY & ZÁŽITKY',
      title: 'Oslavy Prepracované Do Posledného Detailu',
      weddingsTitle: 'Rozprávkové Svadby',
      weddingsDesc: 'Kompletná koordinácia od civilného či cirkevného obradu, welcome drinku až po polnočnú zábavu.',
      eventsTitle: 'Jubileá & Firemné Gala',
      eventsDesc: 'Oslavy 50-60. narodenín, krstiny, rodinné oslavy a teambuildingy v dokonalom súkromí.',
      decorTitle: 'Vida Decor Studio',
      decorDesc: 'Náš profesionálny tím dekoratérov prispôsobí aranžmány, kvety a textílie presne vášmu štýlu.',
      barTitle: 'Vida Sunset Bar & Lounge',
      barDesc: 'Profesionálny kokteilový bar na terase, ktorý je v prípade nepriaznivého počasia okamžite dostupný vo vnútri.'
    },
    apartments: {
      eyebrow: 'UBYTOVANIE PRIAMO V AREÁLI',
      title: 'Vida Apartments & Panoramatický Svadobný Apartmán',
      desc: 'Zabudnite na nočné taxíky a starosti hostí s odchodom! Vida Residence ponúka prémiové ubytovanie pre 54 osôb priamo na mieste.',
      suiteTitle: 'Panoramatický Svadobný Apartmán',
      suiteDesc: 'Špeciálny súkromný apartmán pre novomanželov s vychladeným šampanským, panoramatickým výhľadom a nerušenou rannou prípravou.',
      feature1: '54 lôžok v izbách s vlastnou kúpeľňou',
      feature2: 'Prémiové matrace a hotelové posteľné prádlo',
      feature3: 'Spoločné gurmánske raňajky na druhý deň',
      feature4: 'Uzavreté parkovisko chránené kamerovým systémom'
    },
    catering: {
      eyebrow: 'GASTRONÓMIA & BALÍČKY',
      title: 'Kulinárske Umenie & Cateringové Balíčky',
      desc: 'Čerstvé suroviny, precízne servírovanie a nezabudnuteľné chute. Vyberte si z našich starostlivo pripravených menu.',
      calculatorTitle: 'Interaktívna Kalkulačka Balíčkov',
      guestCountLabel: 'Predpokladaný počet hostí:',
      classicTitle: 'VIDA CLASSIC',
      classicTag: 'Tradičná Elegancia',
      classicDesc: 'Dokonalá harmónia tradičných a moderných chutí, 3-chodová slávnostná večera a polnočný teplý aj studený bufet.',
      eleganceTitle: 'VIDA ELEGANCE',
      eleganceTag: 'Najobľúbenejšia Voľba',
      eleganceDesc: 'Signature gourmet menu, welcome prosecco & canapé, 4-chodová prémiová večera, polnočný gril bufet.',
      extraTitle: 'VIDA EXTRA',
      extraTag: 'Haute Cuisine Zážitok',
      extraDesc: 'Kulinársky zážitok michelinskej úrovne, polnočný street-food bar, neobmedzený prémiový nápojový balíček.',
      selectBtn: 'Vybrať tento balíček'
    },
    gallery: {
      eyebrow: 'OKAMIHY & ATMOSFÉRA',
      title: 'Prežite Každý Výnimočný Moment',
      filterAll: 'Všetky fotky',
      filterVenue: 'Areál & Exteriér',
      filterCeremony: 'Obrad',
      filterHall: 'Sála',
      filterBar: 'Sunset Bar',
      filterDecor: 'Vida Decor',
      filterCatering: 'Gastronómia'
    },
    faq: {
      eyebrow: 'ČASTO KLADENÉ OTÁZKY',
      title: 'Všetko, Čo Potrebujete Vedieť',
      q1: 'Aká je maximálna kapacita Vida Residence?',
      a1: 'V našej priestrannej vnútornej sále a na terase pohodlne usadíme až 150+ hostí pri okrúhlych stoloch s veľkým tanečným parketom.',
      q2: 'Koľko hostí sa môže ubytovať priamo po svadbe?',
      a2: 'K dispozícii je celkovo 54 lôžok v našich prémiových izbách a apartmánoch vrátane svadobného apartmánu pre mladomanželov.',
      q3: 'Čo v prípade nepriaznivého počasia počas vonkajšieho obradu?',
      a3: 'Máme pripravený okamžitý "mokrý variant": krytá terasa alebo krásna ceremoniálna stena vo vnútornej sále zaručia dokonalú atmosféru.',
      q4: 'Môžeme si priviesť vlastných dodávateľov (fotograf, DJ, kapela)?',
      a4: 'Samozrejme áno! Radi vám odporučíme našich overených partnerov, no výber dodávateľov je plne vo vašich rukách.',
      q5: 'Na ktoré roky prijímate rezervácie?',
      a5: 'Rezervácie na svadobné a firemné sezóny 2026, 2027 a 2028 sú už otvorené.'
    },
    form: {
      eyebrow: 'KONTAKT & OBHLIADKA',
      title: 'Vyžiadajte Si Cenovú Ponuku Alebo Obhliadku',
      subtitle: 'Vyplňte krátky formulár a náš tím vás bude kontaktovať do 24 hodín s ponukou šitou na mieru.',
      typeLabel: 'Typ udalosti *',
      typeWedding: 'Svadba',
      typeBirthday: 'Narodeniny / Jubileum (50-60 rokov)',
      typeCorporate: 'Firemný event / Gala',
      typeOther: 'Iná súkromná oslava',
      dateLabel: 'Plánovaný rok / termín *',
      date2026: 'Sezóna 2026',
      date2027: 'Sezóna 2027',
      date2028: 'Sezóna 2028',
      guestsLabel: 'Počet hostí *',
      guests50: '50 – 80 osôb',
      guests100: '80 – 120 osôb',
      guests150: '120 – 150+ osôb',
      accLabel: 'Potrebujete ubytovanie? (max. 54 osôb)',
      accYes: 'Áno, budeme potrebovať ubytovanie',
      accNo: 'Nie, ubytovanie nie je potrebné',
      accPartial: 'Čiastočne (iba pre najbližšiu rodinu)',
      nameLabel: 'Celé meno *',
      phoneLabel: 'Telefónne číslo *',
      emailLabel: 'E-mailová adresa *',
      notesLabel: 'Vaša predstava a špeciálne požiadavky',
      submitBtn: 'Odoslať Žiadosť o Ponuku a Obhliadku',
      sendingText: 'Odosiela sa...',
      successTitle: 'Ďakujeme za váš záujem!',
      successDesc: 'Vaša požiadavka bola úspešne zaznamenaná. Čoskoro sa vám ozveme.',
      callPrompt: 'Máte naliehavú otázku? Zavolajte nám priamo:'
    },
    contact: {
      eyebrow: 'KONTAKT & LOKALITA',
      title: 'Stretnime Sa Osobne v Bátorových Kosihách',
      addressTitle: 'Adresa & Lokalita',
      addressVal: 'Bátorove Kosihy (Bátorkeszi), Slovensko, 946 34',
      phoneTitle: 'Priamy Telefón',
      emailTitle: 'Oficiálny E-mail',
      travelTitle: 'Vynikajúca dostupnosť',
      travelBudapest: 'Budapešť ~ 1 hod 15 min',
      travelGyor: 'Győr ~ 45 min',
      travelKomarno: 'Komárno ~ 20 min',
      travelNoveZamky: 'Nové Zámky ~ 25 min',
      mapBtn: 'Navigovať cez Google Mapy'
    },
    footer: {
      tagline: 'Luxus v prírode, intímna elegancia a nezabudnuteľné chvíle v Bátorových Kosihách.',
      quickLinks: 'Rýchle odkazy',
      contactInfo: 'Kontakt',
      socialTitle: 'Sledujte nás',
      copyright: '© 2026 Vida Residence. Všetky práva vyhradené.'
    }
  }
};

// Global App State
let currentLang = 'hu';
let currentLightboxIndex = 0;
let currentGalleryFilter = 'all';

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileMenu();
  initScrollHeader();
  initGallery();
  initLightbox();
  initCateringCalculator();
  initContactForm();
  initSmoothScroll();
});

/**
 * Language Switching System
 */
function initLanguage() {
  const langToggleBtn = document.getElementById('langToggle');
  const langToggleMobile = document.getElementById('langToggleMobile');

  function updateTexts(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const path = el.getAttribute('data-i18n').split('.');
      let text = I18N[lang];
      for (const key of path) {
        if (text) text = text[key];
      }
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // Update active badges in buttons
    if (langToggleBtn) {
      langToggleBtn.innerHTML = `
        <span class="${lang === 'hu' ? 'font-bold text-[#1E1B18]' : 'text-stone-400'}">HU</span>
        <span class="text-stone-300">|</span>
        <span class="${lang === 'sk' ? 'font-bold text-[#1E1B18]' : 'text-stone-400'}">SK</span>
      `;
    }
    if (langToggleMobile) {
      langToggleMobile.innerHTML = `
        <span class="${lang === 'hu' ? 'font-bold text-amber-300' : 'text-stone-400'}">HU</span>
        <span class="text-stone-500">|</span>
        <span class="${lang === 'sk' ? 'font-bold text-amber-300' : 'text-stone-400'}">SK</span>
      `;
    }
  }

  function toggleLang() {
    const nextLang = currentLang === 'hu' ? 'sk' : 'hu';
    updateTexts(nextLang);
  }

  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLang);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);

  updateTexts('hu');
}

/**
 * Header Scroll Effects
 */
function initScrollHeader() {
  const header = document.getElementById('mainHeader');
  const progressBar = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (header) {
      if (scrollY > 50) {
        header.classList.add('shadow-md', 'bg-[#FAF7F2]/95', 'py-3');
        header.classList.remove('py-5', 'bg-[#FAF7F2]/80');
      } else {
        header.classList.remove('shadow-md', 'bg-[#FAF7F2]/95', 'py-3');
        header.classList.add('py-5', 'bg-[#FAF7F2]/80');
      }
    }
  });
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');
  const links = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (drawer && overlay) {
      drawer.classList.remove('translate-x-full');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeMenu() {
    if (drawer && overlay) {
      drawer.classList.add('translate-x-full');
      overlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('overflow-hidden');
    }
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  links.forEach(l => l.addEventListener('click', closeMenu));
}

/**
 * Interactive Gallery with Filtering
 */
function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      currentGalleryFilter = filter;

      filterBtns.forEach(b => {
        b.classList.remove('bg-[#1E1B18]', 'text-white', 'border-[#1E1B18]');
        b.classList.add('bg-white', 'text-stone-700', 'border-stone-200');
      });

      btn.classList.remove('bg-white', 'text-stone-700', 'border-stone-200');
      btn.classList.add('bg-[#1E1B18]', 'text-white', 'border-[#1E1B18]');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 20);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/**
 * Fullscreen Lightbox Carousel
 */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const galleryThumbnails = document.querySelectorAll('.gallery-zoom-trigger');

  function showImage(index) {
    if (!ASSETS.gallery[index]) return;
    currentLightboxIndex = index;
    const item = ASSETS.gallery[index];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxTitle.innerText = item.title;
    lightboxCounter.innerText = `${index + 1} / ${ASSETS.gallery.length}`;
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.remove('hidden');
    setTimeout(() => {
      lightbox.classList.remove('opacity-0');
      lightbox.classList.add('opacity-100');
    }, 10);
    document.body.classList.add('overflow-hidden');
  }

  function closeLightbox() {
    lightbox.classList.remove('opacity-100');
    lightbox.classList.add('opacity-0');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 300);
  }

  function prevImage() {
    let newIndex = currentLightboxIndex - 1;
    if (newIndex < 0) newIndex = ASSETS.gallery.length - 1;
    showImage(newIndex);
  }

  function nextImage() {
    let newIndex = (currentLightboxIndex + 1) % ASSETS.gallery.length;
    showImage(newIndex);
  }

  galleryThumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-index') || '0', 10);
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
  });

  // Background backdrop click
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });
  }
}

/**
 * Interactive Catering Calculator & Package Selector
 */
function initCateringCalculator() {
  const guestSlider = document.getElementById('calcGuests');
  const guestDisplay = document.getElementById('calcGuestsDisplay');
  const packageCards = document.querySelectorAll('.package-card');
  const calcEstimatedTotal = document.getElementById('calcEstimatedTotal');
  const calcSummary = document.getElementById('calcSummary');
  const accCheckbox = document.getElementById('calcAccOption');

  let selectedPkg = 'elegance'; // classic, elegance, extra
  const pkgBaseRates = {
    classic: 65,
    elegance: 85,
    extra: 120
  };

  function recalculate() {
    if (!guestSlider) return;
    const count = parseInt(guestSlider.value, 10);
    if (guestDisplay) guestDisplay.innerText = `${count} fő / osôb`;

    const rate = pkgBaseRates[selectedPkg];
    const cateringTotal = count * rate;
    const includeAcc = accCheckbox && accCheckbox.checked;
    const accTotal = includeAcc ? Math.min(count, 54) * 35 : 0;
    const grandTotal = cateringTotal + accTotal;

    if (calcEstimatedTotal) {
      calcEstimatedTotal.innerText = `~ € ${grandTotal.toLocaleString('hu-HU')}`;
    }

    if (calcSummary) {
      const pkgName = selectedPkg.toUpperCase();
      calcSummary.innerText = `${count} fő • VIDA ${pkgName}${includeAcc ? ' + Szállás (max 54 fő)' : ''}`;
    }
  }

  if (guestSlider) {
    guestSlider.addEventListener('input', recalculate);
  }
  if (accCheckbox) {
    accCheckbox.addEventListener('change', recalculate);
  }

  packageCards.forEach(card => {
    card.addEventListener('click', () => {
      const pkg = card.getAttribute('data-package');
      selectedPkg = pkg;

      packageCards.forEach(c => {
        c.classList.remove('ring-2', 'ring-[#C5A880]', 'bg-[#FAF7F2]');
        c.classList.add('bg-white');
      });
      card.classList.remove('bg-white');
      card.classList.add('ring-2', 'ring-[#C5A880]', 'bg-[#FAF7F2]');

      recalculate();
    });
  });

  // Package select button triggers scroll to form with prefilled selection
  document.querySelectorAll('.select-package-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pkg = btn.getAttribute('data-package');
      selectedPkg = pkg;
      const notesField = document.getElementById('formNotes');
      if (notesField) {
        notesField.value = `Érdeklődés: VIDA ${pkg.toUpperCase()} menücsomag választva (~${guestSlider ? guestSlider.value : '100'} főre).`;
      }
      const formSection = document.getElementById('kapcsolat');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  recalculate();
}

/**
 * Contact & Inquiry Form with Validation & Feedback
 */
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  const submitBtn = document.getElementById('formSubmitBtn');
  const successModal = document.getElementById('formSuccessModal');
  const modalClose = document.getElementById('modalSuccessClose');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById('formName').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const eventType = document.getElementById('formEventType').value;
    const season = document.getElementById('formSeason').value;
    const guests = document.getElementById('formGuests').value;
    const accommodation = document.getElementById('formAccommodation').value;
    const notes = document.getElementById('formNotes').value.trim();

    if (!name || !phone || !email) {
      alert(currentLang === 'hu' ? 'Kérjük töltse ki a csillaggal jelölt kötelező mezőket!' : 'Prosím vyplňte všetky povinné polia!');
      return;
    }

    // UI Loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        ${I18N[currentLang].form.sendingText}
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = I18N[currentLang].form.submitBtn;
      }

      // Show Success Modal
      if (successModal) {
        successModal.classList.remove('hidden');
        setTimeout(() => {
          successModal.classList.remove('opacity-0');
          successModal.classList.add('opacity-100');
        }, 10);
      }

      // Prepare mailto fallback link for user convenience
      const subject = encodeURIComponent(`Vida Residence Ajánlatkérés - ${name} (${eventType})`);
      const body = encodeURIComponent(
        `Név: ${name}\nTelefon: ${phone}\nE-mail: ${email}\nEsemény: ${eventType}\nSzezon/Dátum: ${season}\nLétszám: ${guests}\nSzállásigény: ${accommodation}\n\nMegjegyzések:\n${notes}`
      );
      
      const mailtoLink = `mailto:vr.vida.residence@gmail.com?subject=${subject}&body=${body}`;
      const mailtoBtn = document.getElementById('modalMailtoLink');
      if (mailtoBtn) {
        mailtoBtn.href = mailtoLink;
      }

      form.reset();
    }, 1000);
  });

  if (modalClose && successModal) {
    modalClose.addEventListener('click', () => {
      successModal.classList.remove('opacity-100');
      successModal.classList.add('opacity-0');
      setTimeout(() => successModal.classList.add('hidden'), 300);
    });
  }
}

/**
 * Smooth Scroll for In-Page Anchors
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
