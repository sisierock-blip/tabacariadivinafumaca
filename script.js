const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));
const revealTargets = document.querySelectorAll('.gallery-board, .about-layout, .photo-strip, .location-layout, .contact-main');
revealTargets.forEach(target => target.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  revealTargets.forEach(target => observer.observe(target));
} else {
  revealTargets.forEach(target => target.classList.add('visible'));
}

const translations = {
  'INÍCIO': ['HOME', 'INICIO'], 'SOBRE': ['ABOUT', 'SOBRE NOSOTROS'], 'GALERIA': ['PRODUCTS', 'PRODUCTOS'],
  'ITACARÉ, BAHIA': ['ITACARÉ, BAHIA', 'ITACARÉ, BAHÍA'], 'ITACARÉ — BAHIA': ['ITACARÉ — BAHIA', 'ITACARÉ — BAHÍA'],
  'LOCALIZAÇÃO': ['LOCATION', 'UBICACIÓN'], 'CONTATO': ['CONTACT', 'CONTACTO'],
  'UMA LOJA, UM PONTO NA CIDADE': ['A STORE, A PLACE IN TOWN', 'UNA TIENDA, UN LUGAR EN LA CIUDAD'],
  'DIVINA FUMAÇA APRESENTA': ['DIVINA FUMAÇA PRESENTS', 'DIVINA FUMAÇA PRESENTA'],
  'Uma esquina entre a fumaça,': ['Where smoke meets,', 'Donde el humo se encuentra con'],
  'a arte e a energia de Itacaré.': ['art and the energy of Itacaré.', 'el arte y la energía de Itacaré.'],
  'ENTRE NA DIVINA': ['STEP INTO DIVINA', 'ENTRA EN DIVINA'],
  'RUA PEDRO LONGO · PITUBA': ['PEDRO LONGO STREET · PITUBA', 'RUA PEDRO LONGO · PITUBA'],
  'ARTE · RUA · ITACARÉ': ['ART · STREETS · ITACARÉ', 'ARTE · CALLE · ITACARÉ'],
  '01 / SOBRE A CASA': ['01 / ABOUT THE SHOP', '01 / SOBRE LA TIENDA'],
  'UM ESPAÇO EM CONSTRUÇÃO': ['A STORY IN THE MAKING', 'UNA HISTORIA EN CONSTRUCCIÓN'],
  'O QUE É A DIVINA?': ['WHAT IS DIVINA?', '¿QUÉ ES DIVINA?'],
  'Uma loja': ['A store', 'Una tienda'], 'com': ['with', 'con'], 'presença.': ['presence.', 'presencia.'],
  'Entre a rua e o mar de Itacaré, a Divina Fumaça mistura referências urbanas, cores e escolhas com personalidade própria.': [
    'Between the streets and the sea of Itacaré, Divina Fumaça brings together urban references, color, and carefully chosen pieces with a character of its own.',
    'Entre las calles y el mar de Itacaré, Divina Fumaça mezcla referencias urbanas, colores y elecciones con personalidad propia.'
  ],
  'A história, o conceito e a filosofia da marca serão contados aqui por quem faz a Divina acontecer.': [
    'The people behind Divina will share the shop’s story, concept, and philosophy here soon.',
    'Quienes hacen Divina compartirán aquí la historia, el concepto y la filosofía de la marca.'
  ],
  'POR DENTRO': ['INSIDE', 'POR DENTRO'], 'O cotidiano da casa': ['Everyday life here', 'El día a día de la tienda'],
  'tem muitas camadas.': ['has many layers.', 'tiene muchas capas.'], 'ITACARÉ · BAHIA': ['ITACARÉ · BAHIA', 'ITACARÉ · BAHÍA'],
  '02 / VITRINE': ['02 / SHOWCASE', '02 / VITRINA'], 'PRODUTOS': ['PRODUCTS', 'PRODUCTOS'],
  'PARA A SESSÃO.': ['FOR YOUR SESSION.', 'PARA LA SESIÓN.'],
  'Um recorte visual de produtos fotografados na Divina Fumaça. Os valores serão adicionados em breve.': [
    'A visual look at products photographed at Divina Fumaça. Prices will be added later.',
    'Una muestra visual de productos fotografiados en Divina Fumaça. Los precios se añadirán más adelante.'
  ],
  'BOLSAS EM DETALHE': ['BAGS UP CLOSE', 'BOLSOS EN DETALLE'], 'ACESSÓRIOS': ['ACCESSORIES', 'ACCESORIOS'],
  'PEÇAS': ['PIECES', 'PIEZAS'], 'DA CASA': ['FROM THE SHOP', 'DE LA TIENDA'],
  'CUIAS & CORES': ['COLORFUL CUIAS', 'CUIAS Y COLORES'], 'ACESSÓRIOS NA VITRINE': ['ACCESSORIES ON DISPLAY', 'ACCESORIOS EN VITRINA'],
  'A CIDADE TAMBÉM É PARTE': ['THE CITY IS PART OF IT', 'LA CIUDAD TAMBIÉN ES PARTE'],
  'É AGORA.': ['IS NOW.', 'ES AHORA.'],
  'Rua, encontro, cor e movimento. A Divina Fumaça está no ritmo de Itacaré — Bahia.': [
    'Streets, encounters, color, and movement. Divina Fumaça moves to the rhythm of Itacaré, Bahia.',
    'Calles, encuentros, color y movimiento. Divina Fumaça sigue el ritmo de Itacaré, Bahía.'
  ],
  '03 / CHEGA AÍ': ['03 / COME ON IN', '03 / LLEGA AQUÍ'], 'NO MEIO': ['RIGHT IN', 'EN MEDIO'],
  'DO': ['THE', 'DEL'], 'CAMINHO.': ['MIDDLE.', 'CAMINO.'], 'BAHIA · BRASIL': ['BAHIA · BRAZIL', 'BAHÍA · BRASIL'],
  'Vem encontrar': ['Come find', 'Ven a encontrar'], 'a gente.': ['us.', 'nos.'], 'ENDEREÇO': ['ADDRESS', 'DIRECCIÓN'],
  'Rua Pedro Longo, 103 — Pituba': ['103 Pedro Longo Street — Pituba', 'Rua Pedro Longo, 103 — Pituba'],
  'HORÁRIO': ['HOURS', 'HORARIO'], 'Segunda a sábado': ['Monday to Saturday', 'De lunes a sábado'],
  '10h às 23h': ['10 a.m. to 11 p.m.', '10:00 a 23:00'], 'ABRIR NO GOOGLE MAPS': ['OPEN IN GOOGLE MAPS', 'ABRIR EN GOOGLE MAPS'],
  '04 / CONTATO': ['04 / CONTACT', '04 / CONTACTO'], 'VAMOS TROCAR UMA IDEIA?': ['LET’S TALK', '¿HABLAMOS?'],
  'CHEGA': ['COME', 'ACÉRCATE'], 'MAIS.': ['ON IN.', 'MÁS.'], 'ARTE, RUA & ENERGIA': ['ART, STREETS & ENERGY', 'ARTE, CALLE Y ENERGÍA'],
  '05 / QUEM PASSOU POR AQUI': ['05 / WHAT VISITORS SAY', '05 / QUIENES PASARON POR AQUÍ'],
  'AVALIAÇÕES': ['REVIEWS', 'RESEÑAS'], 'NO GOOGLE.': ['ON GOOGLE.', 'EN GOOGLE.'], 'VER NO GOOGLE': ['VIEW ON GOOGLE', 'VER EN GOOGLE'],
  'GOOGLE · AVALIAÇÃO': ['GOOGLE · REVIEW', 'GOOGLE · RESEÑA'], '9 MESES ATRÁS': ['9 MONTHS AGO', 'HACE 9 MESES'],
  '2 avaliações · 9 fotos': ['2 reviews · 9 photos', '2 reseñas · 9 fotos'],
  '“Fui nas duas lojas da Divina Fumaça, em Serra Grande e em Itacaré, e curti demais. O ambiente é gostoso, acolhedor e muito bem cuidado. As lojas são super completas, tem de tudo, com produtos lindos, bem escolhidos e um atendimento … Mais”': [
    '“I visited both Divina Fumaça shops, in Serra Grande and Itacaré, and loved them. The atmosphere is pleasant, welcoming, and very well cared for. The shops are fully stocked, with beautiful, thoughtfully chosen products and service … More”',
    '“Fui a las dos tiendas de Divina Fumaça, en Serra Grande e Itacaré, y me encantaron. El ambiente es agradable, acogedor y está muy bien cuidado. Las tiendas son muy completas, tienen de todo, con productos preciosos, bien elegidos y una atención … Más”'
  ],
  'Gostei': ['Like', 'Me gusta'], 'Compartilhar': ['Share', 'Compartir'], 'GOOGLE · LOCAL GUIDE': ['GOOGLE · LOCAL GUIDE', 'GOOGLE · GUÍA LOCAL'],
  'UM ANO ATRÁS': ['ONE YEAR AGO', 'HACE UN AÑO'], 'Local Guide · 19 avaliações · 64 fotos': ['Local Guide · 19 reviews · 64 photos', 'Guía local · 19 reseñas · 64 fotos'],
  '“A tabacaria é incrível! Bem localizada (Pituba, rua principal da cidade), com diversificação de produtos de tabacaria, cigarrilhas, cachimbos, charutos, pomadas artesanais, acessórios estilosos incluindo camisas, pochetes e buckets … Mais”': [
    '“This tobacco shop is amazing! Well located (Pituba, the city’s main street), with a wide range of tobacco products, cigarillos, pipes, cigars, handmade ointments, and stylish accessories including shirts, waist bags, and bucket hats … More”',
    '“¡La tienda es increíble! Muy bien ubicada (Pituba, la calle principal de la ciudad), con variedad de productos de tabaco, cigarrillos, pipas, puros, pomadas artesanales y accesorios con estilo, como camisetas, riñoneras y bucket hats … Más”'
  ],
  'ABRIR NO GOOGLE': ['OPEN ON GOOGLE', 'ABRIR EN GOOGLE'], 'FEITO EM ITACARÉ, BAHIA': ['MADE IN ITACARÉ, BAHIA', 'HECHO EN ITACARÉ, BAHÍA'],
  'VOLTAR AO TOPO ↑': ['BACK TO TOP ↑', 'VOLVER ARRIBA ↑']
};

const attributeTranslations = {
  'Idioma': ['Language', 'Idioma'],
  'Divina Fumaça, início': ['Divina Fumaça, home', 'Divina Fumaça, inicio'],
  'Navegação principal': ['Main navigation', 'Navegación principal'],
  'Abrir menu': ['Open menu', 'Abrir menú'],
  'Fachada colorida da Divina Fumaça em Itacaré': ['Colorful storefront of Divina Fumaça in Itacaré', 'Fachada colorida de Divina Fumaça en Itacaré'],
  'Interior da loja, com prateleiras e parede verde': ['Shop interior with shelves and a green wall', 'Interior de la tienda, con estantes y pared verde'],
  'Detalhe artístico da vitrine da loja': ['Art detail in the shop window', 'Detalle artístico del escaparate'],
  'Bolsas coloridas em detalhe': ['Colorful bags up close', 'Bolsos coloridos en detalle'],
  'Acessórios organizados em painel de madeira': ['Accessories arranged on a wooden display', 'Accesorios organizados en un panel de madera'],
  'Cuias coloridas expostas no balcão': ['Colorful cuias displayed on the counter', 'Cuias coloridas expuestas en el mostrador'],
  'Produtos e acessórios expostos na loja': ['Products and accessories on display in the shop', 'Productos y accesorios expuestos en la tienda'],
  'Fachada da Divina Fumaça na rua': ['Divina Fumaça storefront on the street', 'Fachada de Divina Fumaça en la calle']
};
const pageDescriptions = {
  pt: 'Divina Fumaça — Itacaré, Bahia. Uma esquina entre a fumaça, a arte e a energia da cidade.',
  en: 'Divina Fumaça — Itacaré, Bahia. Smoke, art, and the energy of the city.',
  es: 'Divina Fumaça — Itacaré, Bahía. Humo, arte y la energía de la ciudad.'
};

const originalTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) originalTextNodes.push({ node: textWalker.currentNode, value: textWalker.currentNode.nodeValue });
const originalAttributes = [];
document.querySelectorAll('[aria-label], img[alt]').forEach(element => {
  ['aria-label', 'alt'].forEach(attribute => {
    if (element.hasAttribute(attribute)) originalAttributes.push({ element, attribute, value: element.getAttribute(attribute) });
  });
});
const languageButtons = document.querySelectorAll('.language-switch button');
languageButtons.forEach(button => button.addEventListener('click', () => {
  const requestedLanguage = button.dataset.language;
  const language = document.documentElement.dataset.activeLanguage === requestedLanguage ? 'pt' : requestedLanguage;
  document.documentElement.dataset.activeLanguage = language;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
  originalTextNodes.forEach(({ node, value }) => {
    if (language === 'pt') {
      node.nodeValue = value;
      return;
    }
    const key = value.trim();
    const translation = translations[key]?.[language === 'en' ? 0 : 1];
    if (translation) node.nodeValue = value.replace(key, translation);
  });
  originalAttributes.forEach(({ element, attribute, value }) => {
    const translation = language === 'pt' ? value : attributeTranslations[value]?.[language === 'en' ? 0 : 1];
    if (translation) element.setAttribute(attribute, translation);
  });
  document.title = language === 'en' ? 'Divina Fumaça — Itacaré, Bahia' : language === 'es' ? 'Divina Fumaça — Itacaré, Bahía' : 'Divina Fumaça — Itacaré, Bahia';
  document.querySelector('meta[name="description"]').content = pageDescriptions[language];
  languageButtons.forEach(control => control.setAttribute('aria-pressed', String(control.dataset.language === language)));
}));
