/* AIDI — translations.
   Five languages. Every visible string lives here, keyed by dotted path and
   resolved onto [data-i18n] nodes by script.js.
   Product copy is keyed by the slugs defined in data.js. */

const LANGS = [
  { code: 'nl', name: 'Nederlands', html: 'nl' },
  { code: 'fr', name: 'Français',   html: 'fr' },
  { code: 'en', name: 'English',    html: 'en' },
  { code: 'de', name: 'Deutsch',    html: 'de' },
  { code: 'zh', name: '中文',        html: 'zh-Hans' }
];

const I18N = {};

/* ========================================================== NEDERLANDS === */
I18N.nl = {
  ui: {
    skip: 'Ga naar hoofdinhoud',
    menu: 'Menu',
    close: 'Sluiten',
    language: 'Taal',
    languageChoose: 'Kies een taal',
    tagline: 'Voeding voor duivensport',
    details: 'Details',
    composition: 'Samenstelling',
    analytics: 'Analytische bestanddelen',
    usage: 'Gebruiksaanwijzing',
    available: 'Verkrijgbaar in',
    new: 'Nieuw',
    all: 'Alles',
    results: 'producten',
    resultsOne: 'product',
    dealers: 'verkooppunten',
    dealersOne: 'verkooppunt',
    noResults: 'Niets gevonden',
    noResultsBody: 'Pas uw zoekopdracht of filters aan om meer resultaten te zien.',
    reset: 'Filters wissen',
    clear: 'Wissen',
    searchDealers: 'Zoek op winkel, gemeente of postcode',
    download: 'Download PDF',
    phone: 'Bellen',
    email: 'Mailen',
    website: 'Website',
    orderOnly: 'Enkel op bestelling',
    byAppointment: 'Open op afspraak',
    distributor: 'Invoerder',
    findDealer: 'Vind een verkooppunt',
    exploreRange: 'Ontdek het gamma',
    back: 'Terug',
    home: 'Home',
    sortBy: 'Sorteren op'
  },

  nav: {
    concept: 'Concept',
    voeders: 'Voeders',
    supplementen: 'Supplementen',
    equipment: 'Equipment',
    systeem: 'Systeem',
    team: 'Team',
    verkooppunten: 'Verkooppunten',
    contact: 'Contact'
  },

  spec: {
    fat: 'Ruw vet',
    protein: 'Ruw eiwit',
    absorbable: 'Opneembaar eiwit',
    carbs: 'Koolhydraten',
    kcal: 'Omzetbare energie',
    fibre: 'Ruwe celstof',
    omega: 'Omega-verhouding',
    kcalUnit: 'kcal/kg',
    energy: 'Energie'
  },

  phase: {
    winter: 'Winter & rust',
    kweek: 'Kweek',
    vlucht: 'Vlucht',
    rui: 'Rui',
    algemeen: 'Algemeen'
  },

  band: {
    sprint: 'Snelheid',
    midfond: 'Halve fond',
    dagfond: 'Dagfond',
    fond: 'Zware fond & overnacht'
  },

  group: {
    energie: 'Energie',
    conditie: 'Conditie',
    herstel: 'Herstel',
    darmflora: 'Darmflora',
    mineralen: 'Mineralen',
    verzorging: 'Verzorging'
  },

  country: {
    be: 'België', nl: 'Nederland', de: 'Duitsland', fr: 'Frankrijk',
    gb: 'Groot-Brittannië', it: 'Italië', hu: 'Hongarije', hr: 'Kroatië',
    us: 'VS & Noord-Amerika', cz: 'Tsjechië & Slowakije', pl: 'Polen'
  },

  home: {
    title: 'AIDI — voeding voor duivensport | Team Noël-Willockx',
    meta: 'Tien mengelingen en veertien supplementen voor duivensport, elk met de gemeten analytische waarden. Ontwikkeld door Team Noël-Willockx, 45 jaar voedingsexpertise.',
    h1a: 'Uw duiven zijn ',
    h1b: 'atleten',
    h1c: '. Voeder ze ernaar.',
    lede: 'AIDI is het voedingsconcept van Team Noël-Willockx. Tien mengelingen, veertien supplementen — en bij elk product de gemeten waarden. Geen beloftes, cijfers.',
    fact1: 'jaar voedingsexpertise',
    fact2: 'producten in het gamma',
    fact3: 'landen met verkooppunten',
    fact4: 'duiven geklopt op 1. Nat. Argenton',
    analyserTitle: 'Analytische waarden',
    analyserLive: 'Uit het gamma',
    analyserHint: 'Toon',

    seasonTitle: 'Een duif heeft niet het hele jaar hetzelfde nodig',
    seasonLede: 'Het gamma volgt het seizoen. Elke fase stelt andere eisen aan brandstof, bouwstoffen en herstel — en heeft dus een andere mengeling nodig.',
    seasonWinterD: 'Veel ruwvezel, weinig vet. Ongelimiteerd te voederen zonder dat duiven aanvetten.',
    seasonKweekD: 'Hoog gediversifieerd opneembaar eiwit voor de jongen, zonder de ouderdieren uit te putten.',
    seasonVluchtD: 'Vijf vliegmengelingen, van snelheidsvlucht tot overnachtfond. Elk met een eigen macroprofiel.',
    seasonRuiD: 'Verhoogd aandeel aminozuren en een goede omega-verhouding voor een vlekkeloze pluimkwaliteit.',
    seasonCta: 'Bekijk de mengelingen',

    conceptTitle: 'Waarom wij de cijfers erbij zetten',
    conceptP1: 'Koolhydraten en vetten als brandstof, eiwitten voor de opbouw, vitamines en mineralen als bescherming. De best mogelijke balans tussen die groepen — voor déze afstand, in dít weer, na díe vlucht — is de sleutel tot succes.',
    conceptP2: 'Daarom publiceren we bij elke mengeling het ruw vet, het ruw eiwit, het opneembare eiwit, de koolhydraten, de omzetbare energie, de ruwe celstof en de omega-verhouding. Niet omdat het mooi staat, maar omdat u er een keuze mee kunt maken.',
    conceptP3: 'Het gaat om het opneembare eiwit, niet om het ruwe. Dat onderscheid maakt het verschil tussen een duif die de opeenvolgende wedstrijden afwerkt en een duif die halverwege het seizoen leegloopt.',
    conceptCompare: 'Drie mengelingen, drie profielen',
    conceptCompareNote: 'Verhouding vet / eiwit / koolhydraten. De volledige waarden staan bij elk product.',
    conceptCta: 'Lees het AIDI Concept',

    rangeTitle: 'Het gamma',
    rangeLede: 'Zevenentwintig producten in drie lijnen. Alles wordt in België gemaakt.',
    rangeVoedersD: 'Tien mengelingen voor vlucht, kweek, rui en rust — elk met de volledige analyse.',
    rangeSupplementenD: 'Veertien supplementen voor energie, conditie, herstel, darmflora en mineralen.',
    rangeEquipmentD: 'Automatische voederbakken, nestkartons en opleermanden.',
    itemsN: 'producten',

    proofTitle: 'De resultaten',
    proofLede: 'Op eigen hok en bij anderen. Nationale asduiven van de KBDB over de laatste jaren, telkens met de betrokkenheid van Team Noël-Willockx.',
    proofCta: 'Alle resultaten',
    proofHighlights: 'Hoogtepunten 2022',
    proofAces: 'Nationale asduiven KBDB',
    proofBirds: 'duiven',

    teamTitle: 'Twee specialisten, vijfenveertig jaar',
    teamP1: 'Eddy Noël staat voor meer dan veertig jaar ervaring in de duivensport. Een ruim deel daarvan werkte hij als gespecialiseerd voedingsdeskundige en ontwikkelde hij hoogkwalitatieve, uitgebalanceerde voermengelingen en bijproducten. Hij is een autoriteit op vlak van voeding, geeft lezingen over verduisteren en bijlichten, kweek- en vliegprestaties en hokklimaat, en begeleidde diverse tophokken.',
    teamP2: 'Ivan Willockx leerde de kneepjes van het topsportvak als ex-profvoetballer. Vandaag is hij duivenmakelaar en bezoekt hij in die hoedanigheid veel liefhebbers — daardoor kent hij als geen ander de dagdagelijkse noden van topspelers.',
    teamCta: 'Over het team',
    teamCaption: 'Eddy Noël en Ivan Willockx',

    plansTitle: 'Het systeem, uitgeschreven',
    plansLede: 'Veertien vlieg-, kweek- en ruischema\'s. Week per week, met de juiste mengeling en het juiste supplement op het juiste moment. Gratis te downloaden.',
    plansCta: 'Alle schema\'s',

    ctaTitle: 'Waar koopt u AIDI?',
    ctaBody: 'AIDI is verkrijgbaar bij ruim zestig verkooppunten en invoerders in elf landen. Of bel Eddy of Ivan rechtstreeks — advies kost niets.'
  },

  concept: {
    title: 'AIDI Concept — bij een professionele aanpak maken details het verschil',
    meta: 'Het AIDI Concept: 45 jaar expertise, uitgebreide testen en de meest recente wetenschappelijke inzichten, vertaald naar mengelingen met gepubliceerde analytische waarden.',
    h1: 'Bij een professionele aanpak maken details het verschil',
    lede: 'Prestaties en recuperatie van onze atleten kunnen sterk verbeterd worden door een juist voedingspatroon. Dat is geen slogan — het is de reden waarom het AIDI Concept bestaat.',
    s1t: 'Het jaar rond, niet alleen op zondag',
    s1p1: 'Een gezond, evenwichtig dieet is van zeer groot belang. De juiste voeding het jaar rond heeft invloed op de algemene gezondheidstoestand, het vormpeil, het aanhouden van dat vormpeil, de intensiteit en duur van de inspanning, en de recuperatie. Dat zijn onmisbare pijlers om onze atleten topprestaties te laten leveren, en het vraagt zeer specifieke begeleiding.',
    s1p2: 'Voor het seizoen bereiden we de vliegduiven met een aangepast programma voor op de wedvluchten. Tijdens het seizoen voorzien we hen week na week van voldoende brandstof. Na de wedstrijd kiezen we op gepaste tijdstippen voor een goede recuperatiemengeling met aanvullende bijproducten.',
    s2t: 'Het allerbeste is maar net goed genoeg',
    s2p1: 'Daarom gebruiken we uitsluitend kwalitatief hoogwaardige ingrediënten om onze mengelingen samen te stellen. Dat, samen met 45 jaar expertise, uitgebreide testen en de meest recente wetenschappelijke inzichten, ligt aan de basis van het AIDI concept.',
    s2p2: 'Koolhydraten en vetten als brandstof, eiwitten voor de opbouw, vitamines, mineralen en sporenelementen als bescherming. De best mogelijke balans tussen de verschillende soorten koolhydraten, eiwitten en vetten voor verschillende afstanden en omstandigheden is hier de sleutel tot succes.',
    s3t: 'Zo compleet dat bijproducten bijzaak worden',
    s3p1: 'In het AIDI concept zijn alle mengelingen zodanig compleet samengesteld dat het gebruik van bijproducten tot een minimum herleid kan worden. De hoge opneembaarheid van energie en bouwstoffen zorgt voor een zo compleet mogelijke vetverbranding met bijzonder weinig afvalstoffen. Dat laat duiven toe een intens vliegprogramma af te werken zonder verlies van conditie en vorm.',
    s3p2: 'Om op het juiste moment topprestaties te leveren hebben supplementen wel degelijk hun nut. De boodschap is zo weinig mogelijk, doch efficiënt en doelgericht te handelen en te anticiperen op de voorbije en de zich aandienende omstandigheden.',
    s4t: 'Een duif heeft niet veel nodig',
    s4p1: 'Wat u ook geeft, hou er rekening mee dat alles door de lever van dat kleine duivenlichaam verwerkt moet worden. De kunst is de juiste dingen op de juiste momenten te doen, en te weten wat u wanneer, waarom en hoe doet.',
    s4p2: 'Gebruik alleen dingen die de tekortkomingen van uw voer opvangen en bewezen hebben dat ze prestatiegericht een meerwaarde creëren. Even bijsturen voor zware vluchten of naarmate het seizoen vordert laat onze atleten toe telkens weer in de beste conditie aan de start te verschijnen.',
    numbersT: 'Wat wij publiceren',
    numbersP: 'Bij elke mengeling staan zeven gemeten waarden. Ze zijn er niet om indruk te maken — ze zijn er om een keuze mogelijk te maken.',
    numbersFat: 'Bepaalt hoeveel energie in reserve gaat en hoe snel een duif herstelt.',
    numbersProtein: 'Het ruwe gehalte zegt weinig; alles hangt af van wat er effectief opneembaar is.',
    numbersAbsorbable: 'Dít cijfer bepaalt of spieren tussen twee wedstrijden herstellen.',
    numbersCarbs: 'De snelst beschikbare brandstof. Bepalend voor snelheidsvluchten.',
    numbersKcal: 'De totale omzetbare energie per kilo voer.',
    numbersFibre: 'Reinigende werking, houdt de darmflora in conditie.',
    numbersOmega: 'De verhouding omega 6 op omega 3. Lager betekent efficiëntere verbranding.'
  },

  voeders: {
    title: 'Voeders — tien mengelingen met hun volledige analyse | AIDI',
    meta: 'Tien AIDI-mengelingen voor snelheid, halve fond, dagfond, zware fond, kweek, rui en winterrust. Elk met gepubliceerd vet-, eiwit- en koolhydraatgehalte.',
    h1: 'Tien mengelingen, tien profielen',
    lede: 'Van een sprintmengeling met 67% koolhydraten tot een fondmengeling met 14,5% vet. Filter op fase en afstand, of vergelijk alles in één tabel.',
    filterPhase: 'Fase',
    filterBand: 'Afstand',
    compareTitle: 'Alles vergelijken',
    compareLede: 'Dezelfde zeven waarden voor alle tien de mengelingen. Klik op een kolomtitel om te sorteren.',
    colName: 'Mengeling',
    colPhase: 'Fase'
  },

  supplementen: {
    title: 'Supplementen — veertien producten voor conditie, herstel en darmflora | AIDI',
    meta: 'Veertien AIDI-supplementen: energie, conditie, herstel, darmflora, mineralen en verzorging. Met volledige gebruiksaanwijzing per product.',
    h1: 'Zo weinig mogelijk, doch doelgericht',
    lede: 'Een goed uitgebalanceerd voer maakt supplementen grotendeels overbodig. Wat overblijft is gericht bijsturen: op het juiste moment, met de juiste hoeveelheid.',
    filterGroup: 'Doel'
  },

  equipment: {
    title: 'Equipment — voederbakken, nestkartons en manden | AIDI',
    meta: 'AIDI equipment: volautomatische voederbakken in vier maten, nestkartons met etherische olie en houten opleermanden.',
    h1: 'Equipment',
    lede: 'Dezelfde maatstaf als voor het voer: kwaliteit en degelijkheid, gemaakt om jaren mee te gaan.',
    specSize: 'Maat',
    specBirds: 'Duiven',
    specLength: 'Lengte',
    specFeed: 'Voer',
    featTimer: 'Nauwkeurig instelbaar per seconde, met ingebouwde schakelklok',
    featTimes: 'Tot 8 voederbeurten per dag',
    featPower: 'Werkt op netstroom en oplaadbare batterij 12 VDC',
    featBattery: 'Volle batterij houdt tot 30 dagen'
  },

  systeem: {
    title: 'Het systeem — veertien vlieg-, kweek- en ruischema\'s | AIDI',
    meta: 'Download de AIDI vliegplannen: snelheid, halve fond, dagfond, overnachtfond, jonge duiven, kweek, rui en winterrust. Week per week uitgeschreven.',
    h1: 'Het systeem, week per week uitgeschreven',
    lede: 'Weten welke mengeling bestaat is één ding. Weten wanneer u ze geeft, is het systeem. Veertien schema\'s, gratis te downloaden.',
    generalT: 'Om te beginnen',
    flightT: 'Vliegschema\'s',
    breedT: 'Kweek en rui',
    restT: 'Winter en rust',
    p: {
      'optimaal-gebruik-aidi-concept': 'Hoe gebruik ik de AIDI voeders?',
      'mis-de-start-van-het-seizoen-niet': 'Mis de start van het seizoen niet',
      'vliegplan-snelheid-aidi-speedy-sprint': 'Vliegplan Snelheid — AIDI Speedy Sprint',
      'vliegplan-snelheid': 'Vliegplan Snelheid',
      'vliegschema-aidi-halve-fond': 'Vliegschema Halve Fond',
      'vliegschema-aidi-dagfond': 'Vliegschema Dagfond',
      'vliegschema-aidi-girl-power': 'Vliegschema Girl Power — duivinnen',
      'overnachtfond': 'Vliegschema Overnachtfond',
      'vliegschema-aidi-jonge-duiven': 'Vliegschema Jonge Duiven',
      'vliegplan-thuisblijvende-doffers-duivinnen': 'Thuisblijvende doffers en duivinnen',
      'rui': 'Ruischema',
      'kweek': 'Kweekschema',
      'kweekschema-met-pro-bacterial': 'Kweekschema met AIDI Pro Bacterial',
      'winter-rust-schema': 'Winter- en rustschema'
    }
  },

  team: {
    title: 'Team Noël-Willockx — vijfenveertig jaar voedingsexpertise | AIDI',
    meta: 'Eddy Noël en Ivan Willockx: 45 jaar voedingsexpertise in de duivensport, met nationale asduiven KBDB en topresultaten op eigen hok.',
    h1: 'Team Noël-Willockx',
    lede: 'Twee specialisten die weten wat nodig is om een lichaam in topvorm te krijgen en te houden. Dat bewijzen de resultaten — op eigen hok en bij anderen.',
    eddyT: 'Eddy Noël',
    eddyP1: 'Meer dan veertig jaar ervaring in de duivensport. Een ruim deel daarvan was hij werkzaam als gespecialiseerd voedingsdeskundige en ontwikkelde hij diverse hoogkwalitatieve, perfect uitgebalanceerde voermengelingen en bijproducten, aangepast aan de hedendaagse duivensport.',
    eddyP2: 'Eddy is een autoriteit op vlak van voeding en bijproducten voor duivensport en deelt die kennis graag tijdens zijn vele lezingen: over voeding, over verduisteren en bijlichten, over betere kweek- en vliegprestaties, over spelen met jonge duiven, over een gezond hokklimaat. Hij is auteur van vele artikels en begeleidde diverse succesvolle tophokken.',
    ivanT: 'Ivan Willockx',
    ivanP1: 'Ivan leerde de kneepjes van het topsportvak als ex-profvoetballer. Vandaag is hij actief als duivenmakelaar en bezoekt hij in die hoedanigheid vele liefhebbers.',
    ivanP2: 'Daardoor kent hij als geen ander de dagdagelijkse noden van topspelers — welke vragen er leven op het hok, en waar het in de praktijk misloopt.',
    resultsT: 'Hoogtepunten 2022',
    resultsLede: '15× top 100 nationaal, 63× top 100 nationale zone en 56× top 100 provinciaal.',
    acesT: 'Nationale asduiven KBDB',
    acesLede: 'Over de laatste jaren, met telkens de betrokkenheid van Team Noël-Willockx vermeld.',
    share: 'aandeel',
    birds: 'duiven'
  },

  verkooppunten: {
    title: 'Verkooppunten — waar koopt u AIDI? | AIDI',
    meta: 'Ruim zestig AIDI-verkooppunten in België en Nederland, plus invoerders in Duitsland, Frankrijk, het VK, Italië, Hongarije, Kroatië, de VS, Tsjechië en Polen.',
    h1: 'Waar koopt u AIDI?',
    lede: 'Ruim zestig winkels en invoerders in elf landen. Zoek op naam, gemeente of postcode.',
    ctaTitle: 'Uw winkel staat er niet bij?',
    ctaBody: 'Bent u handelaar en wilt u AIDI in uw assortiment? Neem contact op met Eddy of Ivan.'
  },

  contact: {
    title: 'Contact — Team Noël-Willockx | AIDI',
    meta: 'Contacteer Team Noël-Willockx rechtstreeks: Eddy Noël, Ivan Willockx en de internationale AIDI-invoerders.',
    h1: 'Contact',
    lede: 'Vragen over een mengeling, een schema of uw eigen situatie? Bel gerust. Advies kost niets.',
    directT: 'Rechtstreeks',
    directP: 'Eddy en Ivan nemen zelf op. Voor vragen over voeding, schema\'s of een specifiek probleem op uw hok.',
    mailT: 'Per e-mail',
    mailP: 'Voor bestellingen, handelsaanvragen en alles wat geen haast heeft.',
    intlT: 'Internationale invoerders',
    intlP: 'Buiten België en Nederland loopt de verdeling via onze invoerders.',
    dealerT: 'Liever in de winkel?',
    dealerP: 'AIDI is verkrijgbaar bij ruim zestig verkooppunten.'
  },

  footer: {
    about: 'Voeding voor duivensport, ontwikkeld door Team Noël-Willockx. Alles wordt in België gemaakt.',
    madeIn: 'Gemaakt in België',
    range: 'Gamma',
    company: 'Het bedrijf',
    support: 'Praktisch',
    rights: 'Alle rechten voorbehouden.',
    colophon: 'Herontworpen door AW Webdesign'
  },

  /* ------------------------------------------------------------ products */
  p: {
    'aidi-speedy-sprint': {
      name: 'AIDI Speedy Sprint',
      tag: 'Extreem hoog koolhydraatgehalte voor snelheidsvluchten en alles met één nacht mand.',
      desc: [
        'Op koolhydraten vliegen duiven het snelst. AIDI Speedy Sprint vult de koolhydraattank volledig met makkelijk en snel verteerbare suikers die grote hoeveelheden onmiddellijk beschikbare energie leveren — en die hogere snelheid houden de duiven ook langer aan.',
        'Te gebruiken op vluchten met één nacht mand, of die nu 50 of 350 km lang is. Alleen het doordeweekse voedingsplan verschilt naargelang de afstand; de opbouw van energie uit vetten gebeurt eerder in de week. Duiven die met een volle voorraadtank de mand ingaan vliegen vlotjes twee tot drie minuten per uur vlucht sneller.'
      ],
      use: [
        'Vluchten met 1 nacht mand: naar believen verstrekken op de dag van, en tot aan, de inkorving.',
        'Tip: wilt u de duiven flink laten doortrainen, geef ze 1 à 2 maaltijden AIDI Speedy Sprint.'
      ],
      ing: 'Bordeaux mais, cribbs mais, tarwe, gepelde gerst, rode millo, witte dari, gepelde haver, rondrijst, lijnzaad, kempzaad, millet, kanariezaad, katjang idjoe.'
    },
    'aidi-mix-1': {
      name: 'AIDI Mix 1',
      tag: 'De lichte basismengeling van het vliegassortiment — van de kortste tot de langste afstand.',
      desc: [
        'Makkelijk verteerbaar, met een hoge opneembaarheid en weinig afvalstoffen bij verbranding. Duiven vliegen langer snel en herstellen bijzonder snel, waardoor u uw dieren intensiever kunt trainen en laten vliegen.',
        'De aanwezige ruwvezel heeft een reinigende werking en houdt de darmflora in optimale conditie. Het hoge opneembare eiwitgehalte laat spieren snel recupereren, terwijl het relatief hoge vetgehalte meteen zorgt voor de energieopbouw naar de volgende vlucht toe.'
      ],
      use: [],
      ing: 'Bordeaux mais, cribbs mais, tarwe, gerst, rode milo, witte dari, paddy, cardy, lijnzaad, kempzaad, millet, kanariezaad, boekweit, katjang idjoe, getoaste soja.'
    },
    'aidi-mix-2': {
      name: 'AIDI Mix 2',
      tag: 'Kleine granen en peulen voor een betere verdeling en opneembaarheid. Tot 3 dagen voor de vlucht.',
      desc: [
        'De bewust gekozen granen en peulen van klein formaat zorgen voor een betere verdeling en opneembaarheid. Net als bij de andere mengelingen zorgt natuurlijk gedroogde mais — met een hoger aandeel suikers en zetmelen — voor een verhoogde voedingswaarde.',
        'Wedstrijdduiven hebben een grote eiwitbehoefte, maar het is het opneembare eiwitgehalte dat telt, niet het ruwe. Een juiste balans tussen het aan de gang houden van de stofwisseling en het voorzien van de benodigde aminozuren is hier de sleutel tot succes.'
      ],
      use: ['Kan gegeven worden tot 3 dagen voor de vlucht.'],
      ing: 'Bordeaux cribbs mais, kleine gele cribbsmais, tarwe, rode milo, witte dari, gepelde haver, rondrijst, cardi, lijnzaad, koolzaad, kempzaad, kanariezaad, katjang idjoe, getoaste soya, kleine groene erwten.'
    },
    'aidi-mix-3': {
      name: 'AIDI Mix 3',
      tag: 'Energierijk, met een hoog en gevarieerd aanbod aan vetzuren.',
      desc: [
        'Een bijzonder energierijke mengeling die onze atleten van de benodigde brandstof voorziet via een hoog en gevarieerd aanbod aan verschillende vetzuren.',
        'Die vetzuren bouwen niet alleen de nodige vetreserves voor de vlucht op, ze maken de mengeling ook bijzonder geschikt om een zeer snel herstel bij thuiskomst te garanderen.'
      ],
      use: ['Afhankelijk van het aantal te voorziene vlieguren: te gebruiken van 1 tot 3 dagen voor de inkorving.'],
      ing: 'Bordeauxmais, popcornmais, kleine cribbsmais, tarwe, rode milo, witte dari, gepelde haver, paddy, rondrijst, cardi, zonnepitten, gepelde zonnepitten, lijnzaad, raapzaad, kempzaad, millet, kanariezaad, katjang idjoe, getoaste soya.'
    },
    'aidi-girl-power': {
      name: 'AIDI Girl Power',
      tag: 'Speciaal ontworpen voor duivinnen met een intensief programma tussen 300 en 700 km.',
      desc: [
        'Een weloverwogen, wetenschappelijk verantwoorde mix van verschillende koolhydraat-, vet- en eiwitbronnen. Die zorgen voor een zeer makkelijk te verteren voer, een bijzonder hoge opneembaarheid en een verbranding met minder afvalstoffen — de duivin verteert de vele vliegkilometers zuiniger en economischer.',
        'De aanwezige ruwe celstof zorgt voor een constant perfecte darmwerking. Daardoor blijven duivinnen het hele vliegseizoen makkelijk in optimale conditie en recupereren ze zeer snel, zelfs na de moeilijkste vluchten.'
      ],
      use: [],
      ing: 'Kleine cribsmais, bordeauxmais, popcornmais, tarwe, gerst, gepelde gerst, rode milo, witte dari, gepelde haver, paddy, rondrijst, kardi, gepelde zonnepitten, lijnzaad bruin, koolzaad, kempzaad, millet, kanariezaad, wikken, katjang idjoe, getoaste soya.'
    },
    'aidi-long-distance-mix': {
      name: 'AIDI Long Distance Mix',
      tag: 'Ontwikkeld voor de verste afstanden en de overnachtfond.',
      desc: [
        'Elke discipline binnen een steeds meer gespecialiseerde duivensport vraagt een zeer specifieke voorbereiding. Duiven op de verste afstanden krijgen het vaak hard te verduren, en daar kunnen ze maar beter goed op voorbereid zijn.',
        'AIDI Long Distance Mix staat garant voor een goede balans tussen de verschillende soorten koolhydraten, vetten en eiwitten. Dat is hier nog meer dan anders van cruciaal belang om het volledige potentieel en het volle rendement van uw duiven te kunnen benutten.'
      ],
      use: [],
      ing: 'Gele cribbsmais, tarwe, rode millo, witte dari, gepelde haver, paddy, rondrijst, cardy, gepelde zonnepitten, lijnzaad, raapzaad, koolzaad, kempzaad, millet, kanariezaad, wikken, kadjang idjoe, getoaste soya, maple peas, groene erwten.'
    },
    'aidi-super-kweek': {
      name: 'AIDI Super Kweek',
      tag: 'Brengt de jongen groot én houdt de ouderdieren in uitstekende conditie.',
      desc: [
        'Het hoge, gediversifieerde opneembare eiwitgehalte levert alle benodigde bouwstoffen om jonge duiven probleemloos te laten opgroeien en hen alle kansen te geven uit te groeien tot sterke atleten.',
        'De zorgvuldig uitgekozen vetrijke granen en zaden maken het voer licht verteerbaar. Samen met voldoende ruwe celstof houden ze de jongen én de ouderdieren in perfecte conditie, ook na meerdere kweekrondes. De samenstelling is zo afgestemd op kwekende duiven dat de ouderdieren het zonder verspilling opnemen en vlot afazen aan de jongen.'
      ],
      use: [],
      ing: 'Bordeauxmais, cribbs mais, tarwe, rode milo, witte dari, gepelde haver, paddy, rondrijst, kardi, gestreepte zonnepitten, gepelde zonnepitten, lijnzaad, raapzaad, hennep, millet, kanariezaad, wikken, katjang idjoe, getoaste soja, maple peas, groene erwten, gele erwten.'
    },
    'aidi-super-rui': {
      name: 'AIDI Super Rui',
      tag: 'Afgestemd op de verhoogde eiwitbehoefte tijdens de ruiperiode.',
      desc: [
        'De hoge opneembaarheid, de grote diversiteit aan benutbare eiwitten, de goede omega 3-6 verhouding en het specifiek voor de rui verhoogde aandeel aminozuren zorgen voor een uitstekende rui en een perfecte pluimkwaliteit.',
        'Deze vernieuwde samenstelling is nog minder belastend voor de duif. Ze zorgt daardoor voor een constant optimale conditie en garandeert een vlekkeloze rui.'
      ],
      use: [],
      ing: 'Bordeaux mais, cribbs mais, tarwe, gerst, rode millo, witte dari, gepelde haver, paddy, cardy, zonnepitten, gepelde zonnepitten, lijnzaad, koolzaad, raapzaad, kempzaad, millet, kanariezaad, wikken, kadjang idjoe, getoaste soya, erwten.'
    },
    'aidi-winter-rust': {
      name: 'AIDI Winter / Rust',
      tag: 'Voor na de ruiperiode, de wintermaanden en loszittende of opgesloten duiven.',
      desc: [
        'Veel ruwe celstof in de vorm van diverse ruwvezels zorgt ervoor dat de spijsvertering en de opname van voedingsstoffen optimaal blijven, met een reinigende werking.',
        'De juiste verhoudingen en de aard van de aanwezige vetzuren, koolhydraten en eiwitten maken dat AIDI Winter/Rust probleemloos ongelimiteerd gevoederd kan worden zonder dat de duiven aanvetten.'
      ],
      use: [],
      ing: 'Paddy rijst, gerst, gele cribbs mais, gepunte haver, bordeaux cribbs mais, witte tarwe, gestreepte zonnepitten, milo corn rood, cardy, boekweit, lijnzaad, kempzaad, katjang idjoe, getoaste soyabonen.'
    },
    'aidi-extra-power-snoepmix': {
      name: 'AIDI Extra Power Snoepmix',
      tag: 'Snoepzaad als conditioneringsmiddel — met perilla- en mariadistelzaad.',
      desc: [
        'Duiven krijgen na de training vaak een handje snoepzaad. Ze eten die dingen graag, en dat maakt het uitstekend geschikt om onze dieren te conditioneren — tenzij je er een uitgelezen en aanvullende mix van kan maken.',
        'Perilla- en mariadistelzaad hebben we bewust niet in de andere mengelingen gestoken, des te meer in deze. Geeft u elke duif na de training een snuifje, dan bent u zeker dat ieder dier zijn of haar dagelijkse portie verorbert. Door het hoge vetgehalte ook zeer geschikt als laatste toetje voor de inkorving.'
      ],
      use: [],
      ing: ''
    },

    'aidi-carbo-boost': {
      name: 'AIDI Carbo Boost',
      tag: 'Energiemix die het organisme sneller glycogeen laat aanmaken.',
      desc: [
        'Een wetenschappelijk uitgebalanceerde hoogwaardige energiemix die zorgt voor een prima werking van de spieren. De unieke samenstelling laat het organisme sneller glycogeen aanmaken, waardoor duiven langer aan een hogere snelheid kunnen vliegen.',
        'De toegevoegde antioxidanten, vitamines en elektrolyten zorgen respectievelijk voor ondersteuning van het immuunsysteem, een betere stressbestendigheid en een betere regeling van de waterhuishouding tijdens transport, trainingen en wedstrijden.'
      ],
      use: [
        '1 maatje (10 g) 1 maal per dag mengen met 600 g voer. Bevochtig het voer eerst met AIDI Omega Plus Olie Extra.',
        'Tijdens het vluchtseizoen: 1 à 2 dagen voor de inkorving.',
        'Om duiven beter en intenser te laten trainen: 3-5 dagen na elkaar, samen met AIDI Condition Booster.'
      ],
      ing: ''
    },
    'aidi-omega-plus-olie-extra': {
      name: 'AIDI Omega Plus Olie Extra',
      tag: 'Omega-3 oliën met lecithine, voor een snellere en efficiëntere vetzuuropname.',
      desc: [
        'Dagelijks gebruik verbetert de omega 3-6 verhouding van het voer aanzienlijk, wat zorgt voor een betere gezondheid en conditie. De toegevoegde lecithine zorgt voor een snellere, hogere en efficiëntere opname van deze vetzuren in het lichaam, waardoor duiven zonder problemen vaker en meer wedstrijdkilometers kunnen vliegen.',
        'Lecithine beïnvloedt bovendien de werking van de hersenen en het oriënteringsvermogen positief. Het resultaat is daarnaast een bijzonder strak en glad verenpak.'
      ],
      use: [
        'Het hele jaar door, tijdens kweek, rui en vooral het vliegseizoen: 1 maal per dag 5 ml door 1 kg voer mengen, bij voorkeur \'s avonds.',
        'Ook perfect te gebruiken om andere supplementen in poedervorm aan het voer te laten kleven.',
        'Flink schudden voor gebruik. Tip: meng de olie \'s morgens door het voer voor het avondeten, zodat ze voldoende kan intrekken.'
      ],
      ing: ''
    },
    'aidi-omega-3-krill-olie': {
      name: 'AIDI Omega 3 Krill Olie',
      tag: 'Rijke bron van ALA, DHA en EPA — zonder de vervelende vissmaak.',
      desc: [
        'Vetzuren maken de hoofdmoot uit van de energievoorziening van een duif. Een efficiëntere verbranding reduceert de hoeveelheid afvalstoffen gevoelig, en dat is precies waar omega-3 het verschil maakt.',
        'AIDI Omega 3 Krill Olie is een rijke bron van hoogwaardig ALA (alfa-linoleenzuur), DHA (docosahexaeenzuur) en EPA (eicosapentaeenzuur). Alle voordelen van de perfecte omega-3 balans, zonder de vervelende vissmaak.'
      ],
      use: [
        'Vastzittende duiven, duiven die niet aan wedstrijden deelnemen en gedurende de winter: dagelijks 5 ml per 600 g voer.',
        'Wedstrijdduiven van 1 tot 3 uur vliegen: 5 ml per 600 g voer, 1 dag voor en op de dag van inkorving.',
        'Moeten er meer vlieguren gevlogen worden, dan blijft AIDI Omega Plus Olie aanbevolen.'
      ],
      ing: ''
    },
    'aidi-condition-booster': {
      name: 'AIDI Condition Booster',
      tag: 'Conditietonic van vitamines, aminozuren en mineralen voor het vliegseizoen.',
      desc: [
        'Activeert de stofwisseling, zorgt voor een groter uithoudingsvermogen en een betere zuurstofopname, en ondersteunt het spierstelsel.',
        'Zorgt bovendien voor een prima conditie en de opbouw van meer energie en energiereserves, waardoor de vluchtprestaties verbeteren. De werking is verhoogd bij gelijktijdige toediening met AIDI Carbo Boost.'
      ],
      use: [
        '30 ml per kg volledig diervoeder, of 10 ml per liter drinkwater.',
        'Vluchtseizoen: de dag voor inkorving, en bij thuiskomst samen met AIDI Recup Fast voor een supersnel herstel.',
        'Bij slecht trainen door mindere conditie: 2-5 dagen samen met AIDI Carbo Boost.',
        'Tijdens het kweekseizoen: 3-5 dagen bij de overgang van kropmelk naar vast voer.',
        'Tijdens de rui: 1 maal per week; verduisterde en bijgelichte duiven 2 maal per week.'
      ],
      ing: ''
    },
    'aidi-health-elixir': {
      name: 'AIDI Health Elixir',
      tag: 'Tinctuur van twintig kruiden, bladeren, wortels en planten.',
      desc: [
        'Met onder meer een antioxidante werking en ondersteuning van de bloeddoorstroming. Dat resulteert in een betere donsrui en brengt de duiven op korte tijd in topvorm.',
        'Verhoogt de weerstand en verbetert het immuunsysteem, ondersteunt de luchtwegen, zorgt voor een hogere zuurstofopname en werkt eetlustopwekkend. Na een meerdaagse kuur hebben duiven mooi roze borstspieren, krijtwitte neuzen en oogranden.'
      ],
      use: [
        '20 ml per liter water, of over 600 g voer per 20 duiven.',
        'Ter voorbereiding van de kweek- of vliegperiode: 8 à 10 dagen voor het koppelen of de aanvang van de vluchten.',
        'Tijdens het vluchtseizoen: 1 à 2 maal per week na de vlucht. Tijdens de rui: 3 à 4 maal per week.'
      ],
      ing: ''
    },
    'aidi-chelats': {
      name: 'AIDI Chelats',
      tag: 'Vitamines, sporenelementen en mineralen in chelaatvorm.',
      desc: [
        'Chelaten hebben het voordeel dat ze door het lichaam volledig opgenomen worden en zo makkelijk tekorten in het voer kunnen aanvullen.',
        'Te gebruiken bij een verminderde conditionele toestand. Het intensieve wedstrijdritme zorgt voor een verhoogde behoefte aan vitamines, mineralen en sporenelementen; regelmatig gebruik vult die aan en houdt duiven in topvorm tijdens het vliegseizoen. Ook essentieel voor de ontwikkeling van de jongen tijdens de kweek en van het nieuwe verenkleed tijdens de rui.'
      ],
      use: [
        'Vitesse: maandelijks 10 ml op 1 kg voer, de dag voor de inkorving.',
        'Halve fond: om de 3 weken. Zware halve fond: om de 2 weken bij wekelijks vliegen, om de 3 weken bij tweewekelijks vliegen.',
        'Zware fond en overnachtfond: 10 ml op 1 kg voer, de dag voor de inkorving.',
        'Na ziekte en medicatie: 2 dagen 10 ml per kg voer. Na enting: 10 ml per kg voer.',
        'Tijdens de kweek en de rui: 1 maal per week 10 ml per kg voer.'
      ],
      ing: ''
    },
    'aidi-recup-fast': {
      name: 'AIDI Recup Fast',
      tag: 'Wateroplosbaar herstelmengsel voor onmiddellijk na thuiskomst.',
      desc: [
        'Bij thuiskomst van een wedstrijd is het bijzonder belangrijk dat de duif de verbruikte reserves zo snel mogelijk kan aanvullen: enkelvoudige en meervoudige suikers, onmiddellijk beschikbare vetzuren en bouwstoffen voor eiwitten.',
        'AIDI Recup Fast bevat die bestanddelen in de juiste verhoudingen voor een snelle recuperatie en een vlot herstel — het product bij uitstek voor na de vlucht.'
      ],
      use: [
        '4 maatschepjes (20 g) per liter drinkwater, onmiddellijk na thuiskomst ter beschikking stellen.',
        'Ververs het mengsel na een half uur: door oxidatie van licht en lucht daalt de kwaliteit.'
      ],
      ing: ''
    },
    'aidi-proteine-boost': {
      name: 'AIDI Proteine Boost',
      tag: 'Hoogwaardige whey-eiwitten met een bijzonder hoge biologische waarde.',
      desc: [
        'Deze eiwitten worden uiterst snel door het lichaam opgenomen. Dat zorgt voor een sneller herstel na de vlucht bij duiven die gevoelig zijn voor overbelasting van de spieren, een betere groei en ontwikkeling van de jongen tijdens de kweek, en een goede opbouw van de bevedering tijdens de rui.',
        'De toevoeging van extra mineralen helpt de natuurlijke weerstand te versterken en ondersteunt het immuunsysteem, zodat duiven in een prima gezondheid verkeren en hun prestatievermogen verhoogd wordt.'
      ],
      use: [
        '15 g (3 maatlepels) per kg volledig diervoeder. Bevochtig het voer eerst met AIDI Omega Plus Olie Extra.',
        'Tijdens de rui en de kweekperiode: 1 à 2 maal per week.',
        'Tijdens de overgang van kropmelk naar vast voer: 3-5 dagen.',
        'Vluchtseizoen: na een zware vlucht 2 à 3 maaltijden. Na ziekte of enting: 2 à 3 dagen.'
      ],
      ing: ''
    },
    'aidi-pro-bacterial': {
      name: 'AIDI Pro Bacterial',
      tag: 'Ferment van rietsuikermelasse dat de positie van de goede bacteriën verstevigt.',
      desc: [
        'Een goede gezondheid, immuniteit, weerstand en vitaliteit begint bij een goede darmflora. Onevenwichtige of vervuilde voeding in de reismanden, vuil drinkwater tijdens transport, stress, het gebruik van antibiotica en vermoeidheid door te zware vluchten verstoren het evenwicht tussen goede en slechte bacteriën.',
        'AIDI Pro Bacterial zorgt voor een betere vertering van het voedsel en een hogere opname van voedingsstoffen, en helpt zo de natuurlijke weerstand te versterken. Duiven gaan er strakker door in de veren zitten en vertonen betere trainingsarbeid.'
      ],
      use: [
        'Tijdens kweek, rui, vliegseizoen en rustperiode: 10 ml per liter water — dagelijks te verversen — of 10 ml over 600 g voer.',
        'Laat stadswater goed ontluchten: het bevat chloor.',
        'Het product kan na verloop van tijd wat beginnen vlokken. Dat is volkomen normaal en doet niets af aan de kwaliteit.'
      ],
      ing: ''
    },
    'aidi-probiotica-plus': {
      name: 'AIDI Probiotica Plus',
      tag: 'Hoog geconcentreerde pre- en probioticamix voor natuurlijke weerstand.',
      desc: [
        'Bevordert en stimuleert een goede darmflora, helpt de natuurlijke weerstand te versterken en speelt een rol bij de ziekteafweer.',
        'De hoge concentratie lactobacillen nestelt en vermeerdert zich in de slijmvliezen van de dunne darm en bevordert zo de vertering van de voedingsstoffen. Dat resulteert in een uitstekende vitaliteit, gezondheid en een zijdezacht verenkleed.'
      ],
      use: [
        '3 maatlepels (15 g) mengen met 1 kg voer. Bevochtig het voer eerst met AIDI Omega Plus Olie Extra.',
        'Tijdens het vluchtseizoen: 1 dag voor de inkorving, ter bevordering van de conditie.',
        'Tijdens de rui- en kweekperiode: 2 maal per week.',
        'Na een antibioticakuur of enting: 3 dagen, 1 maal per dag.'
      ],
      ing: ''
    },
    'aidi-calcium-forte': {
      name: 'AIDI Calcium Forte',
      tag: 'Mineralenmengsel met weinig fosfor en een hoog calciumgehalte.',
      desc: [
        'Bevat alle mineralen, sporenelementen en aminozuren om tekorten in het voer op te vangen tijdens het vliegseizoen, de kweek en de ruiperiode. Het lage fosfor- en hoge calciumgehalte zorgt voor een hoge opneembaarheid.',
        'Zorgt voor een beter functioneren van de stofwisseling tijdens zware inspanningen zoals wedstrijden, de opfok van jongen en het wisselen van het verenkleed, en verbetert de kweek- en vliegprestaties aanzienlijk. Door de geschikte structuur wordt het graag door duiven opgenomen.'
      ],
      use: [
        '1,5 g per duif per dag, in kleine potjes op het hok beschikbaar stellen.',
        'Van het koppelen tot aan het leggen van de eieren: dagelijks.',
        'Tijdens de opgroeiperiode van de jongen: 3 maal per week.',
        'Tijdens het vluchtseizoen: 1 maal per week, 3 dagen voor de inkorving. In de ruiperiode: 3 maal per week.'
      ],
      ing: ''
    },
    'aidi-condition-plus-minerals': {
      name: 'AIDI Condition Plus Minerals',
      tag: 'Mineralen, vitamines en grit voor vlieg-, kweek- en ruiperiode.',
      desc: [
        'Ontwikkeld op basis van de nieuwste wetenschappelijke kennis over het voeren van duiven: een mix van verschillende mineralen en vitamines die duiven graag eten. Het bevat alles wat onze atleten nodig hebben voor het kweken en voor topprestaties tijdens de wedstrijden.',
        'Het hoge calciumgehalte in verhouding tot fosfor en de aanwezige grit zorgen voor een zeer goede vertering van het voer. Zo worden de tekortkomingen in de voeding op de juiste manier aangevuld.'
      ],
      use: [
        '2,5 g per duif per dag, in kleine potjes op het hok beschikbaar stellen. Het hele jaar door 2 à 3 keer per week.',
        'Meng er wat snoepzaad door voordat u het aan de duiven geeft.',
        'Vluchtseizoen: 2 dagen vóór de inkorving en bij terugkomst van de vlucht.',
        'Kweekperiode: tijdens het broeden 2 maal per week; zijn de jongen 4-5 dagen oud, dan dagelijks. Ruiperiode: 2 maal per week.'
      ],
      ing: ''
    },
    'aidi-grit-met-anijs': {
      name: 'AIDI Grit met anijs',
      tag: 'Grit met kiezel en oesterschelpen — bewust zonder roodsteen.',
      desc: [
        'Grit zijn de tanden van onze duiven: hoe beter het voer vermalen wordt, hoe meer voedingsstoffen eruit gehaald worden. Kiezel en oesterschelpen blijven langere tijd in de maag aanwezig en helpen daar het voer vermalen, wat de opname van voedingsstoffen vergroot. In de meeste gritsoorten op de markt zitten die nauwelijks, omdat ze relatief duur zijn.',
        'Roodsteen wordt daarentegen mee vermalen met het voer en levert niets op. Duiven blijven ervan eten om calcium op te nemen, maar door de verkeerde calcium-fosforverhouding neemt het duivenlichaam die calcium niet op. Van onze grit met anijs hebben duiven maar heel weinig nodig — dat is volkomen normaal.'
      ],
      use: ['Dagelijks een heel kleine hoeveelheid vers in een potje ter beschikking stellen van de duiven.'],
      ing: ''
    },
    'aidi-eye-drops': {
      name: 'AIDI Eye Drops',
      tag: 'Verzorgt en reinigt de ogen, de neus en het traankanaal.',
      desc: [
        'Voor een perfect verzorgende en reinigende werking van ogen, neus en traankanaal. AIDI Eye Drops voorkomen en verzachten tevens irritaties van het oogvlies en hebben een herstellende werking.'
      ],
      use: [
        '1 druppel in elk oog voor de inkorving en na de wedstrijd.',
        'Bij irritatie of ontsteking van het oogvlies: 3 tot 5 keer per dag 1 druppel in elk oog.'
      ],
      ing: ''
    },

    'aidi-automatische-voederbakken': {
      name: 'AIDI Automatische voederbakken',
      tag: 'Volautomatisch voederen, tot acht beurten per dag, in vier maten.',
      desc: [
        'Werken, vakantie, of gewoonweg niet op tijd en stond voor uw duiven kunnen zorgen zoals u dat zelf zou wensen? De hoogkwalitatieve volautomatische voederbak biedt de oplossing. Bijkomend voordeel: de voederbeurten gebeuren met zeer stipte regelmaat.',
        'Nauwkeurig instelbaar per seconde, zodat u de gewenste hoeveelheid voeder exact bereikt. Werkt op netstroom en een oplaadbare 12 VDC-batterij; bij twee beurten per dag blijft een volle batterij ongeveer een maand op spanning. Laad hem om de twee weken op voor een langere levensduur.'
      ],
      use: [],
      ing: ''
    },
    'aidi-nestkartons': {
      name: 'AIDI Nestkartons',
      tag: 'Schuiven over de stenen nestschotels, met capsule tegen ongedierte.',
      desc: [
        'De handige AIDI nestkartons schuift u over de stenen nestschotels. De capsule met etherische olie voorkomt ongedierte en luizen — en het is geen lastige klus meer om de nestschotels proper te krijgen.'
      ],
      use: [],
      ing: ''
    },
    'aidi-manden': {
      name: 'AIDI Manden',
      tag: 'Opleermanden in hout van de allerbeste kwaliteit.',
      desc: [
        'Ons AIDI concept staat voor absolute kwaliteit en degelijkheid. Dat is niet anders voor onze jongste telg: de opleermanden. Stoer, hout van de allerbeste kwaliteit, zeer fijne afwerking en weloverdacht samengesteld — twee afdelingen en een makkelijk te bevestigen eet- en drinkgoot. U bent verzekerd van jarenlang duivenplezier.'
      ],
      use: [],
      ing: ''
    }
  }
};

/* ============================================================ FRANÇAIS === */
I18N.fr = {
  ui: {
    skip: 'Aller au contenu principal',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    languageChoose: 'Choisir une langue',
    tagline: 'Alimentation pour le sport colombophile',
    details: 'Détails',
    composition: 'Composition',
    analytics: 'Constituants analytiques',
    usage: "Mode d'emploi",
    available: 'Disponible en',
    new: 'Nouveau',
    all: 'Tout',
    results: 'produits',
    resultsOne: 'produit',
    dealers: 'points de vente',
    dealersOne: 'point de vente',
    noResults: 'Aucun résultat',
    noResultsBody: 'Modifiez votre recherche ou vos filtres pour voir plus de résultats.',
    reset: 'Effacer les filtres',
    clear: 'Effacer',
    searchDealers: 'Rechercher par magasin, commune ou code postal',
    download: 'Télécharger le PDF',
    phone: 'Appeler',
    email: 'Envoyer un e-mail',
    website: 'Site web',
    orderOnly: 'Uniquement sur commande',
    byAppointment: 'Ouvert sur rendez-vous',
    distributor: 'Importateur',
    findDealer: 'Trouver un point de vente',
    exploreRange: 'Découvrir la gamme',
    back: 'Retour',
    home: 'Accueil',
    sortBy: 'Trier par'
  },

  nav: {
    concept: 'Concept', voeders: 'Aliments', supplementen: 'Suppléments',
    equipment: 'Équipement', systeem: 'Système', team: 'Équipe',
    verkooppunten: 'Points de vente', contact: 'Contact'
  },

  spec: {
    fat: 'Matières grasses brutes', protein: 'Protéines brutes',
    absorbable: 'Protéines assimilables', carbs: 'Glucides',
    kcal: 'Énergie métabolisable', fibre: 'Cellulose brute',
    omega: 'Rapport oméga', kcalUnit: 'kcal/kg', energy: 'Énergie'
  },

  phase: { winter: 'Hiver & repos', kweek: 'Élevage', vlucht: 'Concours', rui: 'Mue', algemeen: 'Général' },
  band: { sprint: 'Vitesse', midfond: 'Demi-fond', dagfond: 'Grand demi-fond', fond: 'Fond & fond de nuit' },
  group: {
    energie: 'Énergie', conditie: 'Condition', herstel: 'Récupération',
    darmflora: 'Flore intestinale', mineralen: 'Minéraux', verzorging: 'Soins'
  },
  country: {
    be: 'Belgique', nl: 'Pays-Bas', de: 'Allemagne', fr: 'France',
    gb: 'Royaume-Uni', it: 'Italie', hu: 'Hongrie', hr: 'Croatie',
    us: 'États-Unis & Amérique du Nord', cz: 'Tchéquie & Slovaquie', pl: 'Pologne'
  },

  home: {
    title: 'AIDI — alimentation pour le sport colombophile | Team Noël-Willockx',
    meta: "Dix mélanges et quatorze suppléments pour le sport colombophile, chacun avec ses valeurs analytiques mesurées. Développés par Team Noël-Willockx, 45 ans d'expertise en nutrition.",
    h1a: 'Vos pigeons sont des ',
    h1b: 'athlètes',
    h1c: '. Nourrissez-les comme tels.',
    lede: "AIDI est le concept nutritionnel de Team Noël-Willockx. Dix mélanges, quatorze suppléments — et pour chaque produit, les valeurs mesurées. Pas de promesses, des chiffres.",
    fact1: "ans d'expertise en nutrition",
    fact2: 'produits dans la gamme',
    fact3: 'pays avec points de vente',
    fact4: 'pigeons battus au 1er Nat. Argenton',
    analyserTitle: 'Valeurs analytiques',
    analyserLive: 'Dans la gamme',
    analyserHint: 'Afficher',

    seasonTitle: "Un pigeon n'a pas les mêmes besoins toute l'année",
    seasonLede: "La gamme suit la saison. Chaque phase impose d'autres exigences en carburant, en matériaux de construction et en récupération — et demande donc un autre mélange.",
    seasonWinterD: "Beaucoup de fibres brutes, peu de graisse. À volonté, sans que les pigeons ne s'engraissent.",
    seasonKweekD: 'Protéines assimilables élevées et diversifiées pour les jeunes, sans épuiser les reproducteurs.',
    seasonVluchtD: 'Cinq mélanges de vol, de la vitesse au fond de nuit. Chacun avec son propre profil.',
    seasonRuiD: "Part accrue d'acides aminés et bon rapport oméga pour un plumage impeccable.",
    seasonCta: 'Voir les mélanges',

    conceptTitle: 'Pourquoi nous publions les chiffres',
    conceptP1: "Glucides et graisses comme carburant, protéines pour la construction, vitamines et minéraux comme protection. Le meilleur équilibre possible entre ces groupes — pour cette distance, par ce temps, après ce concours — est la clé du succès.",
    conceptP2: "C'est pourquoi nous publions pour chaque mélange les matières grasses brutes, les protéines brutes, les protéines assimilables, les glucides, l'énergie métabolisable, la cellulose brute et le rapport oméga. Non pas parce que cela fait bien, mais parce que cela vous permet de choisir.",
    conceptP3: "Ce qui compte, ce sont les protéines assimilables, pas les protéines brutes. Cette distinction fait la différence entre un pigeon qui enchaîne les concours et un pigeon qui s'écroule à la mi-saison.",
    conceptCompare: 'Trois mélanges, trois profils',
    conceptCompareNote: 'Rapport graisses / protéines / glucides. Les valeurs complètes figurent sur chaque produit.',
    conceptCta: 'Lire le Concept AIDI',

    rangeTitle: 'La gamme',
    rangeLede: 'Vingt-sept produits en trois lignes. Tout est fabriqué en Belgique.',
    rangeVoedersD: "Dix mélanges pour le concours, l'élevage, la mue et le repos — chacun avec son analyse complète.",
    rangeSupplementenD: "Quatorze suppléments pour l'énergie, la condition, la récupération, la flore intestinale et les minéraux.",
    rangeEquipmentD: "Mangeoires automatiques, fonds de nid en carton et paniers d'entraînement.",
    itemsN: 'produits',

    proofTitle: 'Les résultats',
    proofLede: "Au colombier et chez les autres. Les as-pigeons nationaux KBDB de ces dernières années, chaque fois avec l'implication de Team Noël-Willockx.",
    proofCta: 'Tous les résultats',
    proofHighlights: 'Temps forts 2022',
    proofAces: 'As-pigeons nationaux KBDB',
    proofBirds: 'pigeons',

    teamTitle: 'Deux spécialistes, quarante-cinq ans',
    teamP1: "Eddy Noël cumule plus de quarante ans d'expérience dans le sport colombophile. Il a longtemps travaillé comme nutritionniste spécialisé et a développé des mélanges et sous-produits de haute qualité, parfaitement équilibrés. Autorité en matière d'alimentation, il donne des conférences sur l'obscurcissement et l'éclairage, sur les performances d'élevage et de vol et sur le climat du colombier, et a accompagné plusieurs colombiers de pointe.",
    teamP2: "Ivan Willockx a appris les ficelles du sport de haut niveau comme ancien footballeur professionnel. Aujourd'hui courtier en pigeons, il visite de nombreux amateurs et connaît donc mieux que quiconque les besoins quotidiens des meilleurs joueurs.",
    teamCta: "À propos de l'équipe",
    teamCaption: 'Eddy Noël et Ivan Willockx',

    plansTitle: 'Le système, noir sur blanc',
    plansLede: "Quatorze plans de vol, d'élevage et de mue. Semaine par semaine, avec le bon mélange et le bon supplément au bon moment. Téléchargement gratuit.",
    plansCta: 'Tous les plans',

    ctaTitle: 'Où acheter AIDI ?',
    ctaBody: "AIDI est disponible chez plus de soixante points de vente et importateurs dans onze pays. Ou appelez directement Eddy ou Ivan — le conseil est gratuit."
  },

  concept: {
    title: 'Concept AIDI — dans une approche professionnelle, les détails font la différence',
    meta: "Le Concept AIDI : 45 ans d'expertise, des tests approfondis et les connaissances scientifiques les plus récentes, traduits en mélanges dont les valeurs analytiques sont publiées.",
    h1: 'Dans une approche professionnelle, les détails font la différence',
    lede: "Les performances et la récupération de nos athlètes peuvent être fortement améliorées par une alimentation correcte. Ce n'est pas un slogan — c'est la raison d'être du Concept AIDI.",
    s1t: "Toute l'année, pas seulement le dimanche",
    s1p1: "Un régime sain et équilibré est de la plus haute importance. Une alimentation correcte tout au long de l'année influence l'état de santé général, le niveau de forme, le maintien de cette forme, l'intensité et la durée de l'effort, et la récupération. Ce sont des piliers indispensables pour permettre à nos athlètes de réaliser des performances de pointe, et cela demande un accompagnement très spécifique.",
    s1p2: "Avant la saison, nous préparons les voyageurs aux concours par un programme adapté. Pendant la saison, nous leur fournissons semaine après semaine suffisamment de carburant. Après le concours, nous choisissons aux bons moments un bon mélange de récupération avec des sous-produits complémentaires.",
    s2t: 'Le meilleur est tout juste assez bon',
    s2p1: "C'est pourquoi nous utilisons exclusivement des ingrédients de haute qualité pour composer nos mélanges. Cela, associé à 45 ans d'expertise, à des tests approfondis et aux connaissances scientifiques les plus récentes, constitue la base du concept AIDI.",
    s2p2: "Glucides et graisses comme carburant, protéines pour la construction, vitamines, minéraux et oligo-éléments comme protection. Le meilleur équilibre possible entre les différents types de glucides, de protéines et de graisses selon les distances et les circonstances est ici la clé du succès.",
    s3t: 'Si complet que les sous-produits deviennent secondaires',
    s3p1: "Dans le concept AIDI, tous les mélanges sont composés de manière si complète que l'usage de sous-produits peut être réduit au minimum. La haute assimilabilité de l'énergie et des matériaux de construction assure une combustion des graisses aussi complète que possible, avec très peu de déchets. Cela permet aux pigeons de boucler un programme de vol intense sans perte de condition ni de forme.",
    s3p2: "Pour réaliser des performances de pointe au bon moment, les suppléments ont bel et bien leur utilité. Le message est d'agir le moins possible, mais de manière efficace et ciblée, en anticipant les circonstances passées et à venir.",
    s4t: "Un pigeon n'a pas besoin de grand-chose",
    s4p1: "Quoi que vous donniez, gardez à l'esprit que tout devra être traité par le foie de ce petit corps de pigeon. L'art consiste à faire les bonnes choses aux bons moments, et à savoir ce que vous faites, quand, pourquoi et comment.",
    s4p2: "N'utilisez que ce qui compense les manques de votre aliment et qui a prouvé apporter une plus-value en matière de performance. Un ajustement avant les concours difficiles ou au fil de la saison permet à nos athlètes de se présenter chaque fois au départ dans les meilleures conditions.",
    numbersT: 'Ce que nous publions',
    numbersP: "Chaque mélange est accompagné de sept valeurs mesurées. Elles ne sont pas là pour impressionner — elles sont là pour permettre un choix.",
    numbersFat: "Détermine la part d'énergie mise en réserve et la vitesse de récupération.",
    numbersProtein: "Le taux brut dit peu de chose ; tout dépend de ce qui est réellement assimilable.",
    numbersAbsorbable: 'Ce chiffre-là détermine si les muscles récupèrent entre deux concours.',
    numbersCarbs: 'Le carburant le plus rapidement disponible. Déterminant pour les concours de vitesse.',
    numbersKcal: "L'énergie métabolisable totale par kilo d'aliment.",
    numbersFibre: 'Action nettoyante, maintient la flore intestinale en condition.',
    numbersOmega: 'Le rapport oméga 6 sur oméga 3. Plus bas signifie une combustion plus efficace.'
  },

  voeders: {
    title: 'Aliments — dix mélanges avec leur analyse complète | AIDI',
    meta: "Dix mélanges AIDI pour la vitesse, le demi-fond, le grand demi-fond, le fond, l'élevage, la mue et le repos hivernal. Chacun avec ses taux publiés de graisses, protéines et glucides.",
    h1: 'Dix mélanges, dix profils',
    lede: "D'un mélange sprint à 67 % de glucides à un mélange fond à 14,5 % de graisses. Filtrez par phase et distance, ou comparez tout dans un seul tableau.",
    filterPhase: 'Phase',
    filterBand: 'Distance',
    compareTitle: 'Tout comparer',
    compareLede: 'Les mêmes sept valeurs pour les dix mélanges. Cliquez sur un titre de colonne pour trier.',
    colName: 'Mélange',
    colPhase: 'Phase'
  },

  supplementen: {
    title: 'Suppléments — quatorze produits pour la condition, la récupération et la flore intestinale | AIDI',
    meta: "Quatorze suppléments AIDI : énergie, condition, récupération, flore intestinale, minéraux et soins. Avec le mode d'emploi complet par produit.",
    h1: 'Le moins possible, mais de manière ciblée',
    lede: "Un aliment bien équilibré rend les suppléments largement superflus. Ce qui reste, c'est l'ajustement ciblé : au bon moment, à la bonne dose.",
    filterGroup: 'Objectif'
  },

  equipment: {
    title: 'Équipement — mangeoires, fonds de nid et paniers | AIDI',
    meta: "Équipement AIDI : mangeoires entièrement automatiques en quatre tailles, fonds de nid en carton à huile essentielle et paniers d'entraînement en bois.",
    h1: 'Équipement',
    lede: "Le même critère que pour l'aliment : qualité et robustesse, fait pour durer des années.",
    specSize: 'Taille', specBirds: 'Pigeons', specLength: 'Longueur', specFeed: 'Aliment',
    featTimer: 'Réglable à la seconde près, avec horloge de commutation intégrée',
    featTimes: "Jusqu'à 8 distributions par jour",
    featPower: 'Fonctionne sur secteur et sur batterie rechargeable 12 VDC',
    featBattery: "Une batterie pleine tient jusqu'à 30 jours"
  },

  systeem: {
    title: "Le système — quatorze plans de vol, d'élevage et de mue | AIDI",
    meta: 'Téléchargez les plans AIDI : vitesse, demi-fond, grand demi-fond, fond de nuit, jeunes pigeons, élevage, mue et repos hivernal. Détaillés semaine par semaine.',
    h1: 'Le système, détaillé semaine par semaine',
    lede: "Savoir quel mélange existe est une chose. Savoir quand le donner, c'est le système. Quatorze plans, en téléchargement gratuit.",
    generalT: 'Pour commencer',
    flightT: 'Plans de vol',
    breedT: 'Élevage et mue',
    restT: 'Hiver et repos',
    p: {
      'optimaal-gebruik-aidi-concept': 'Comment utiliser les aliments AIDI ?',
      'mis-de-start-van-het-seizoen-niet': 'Ne manquez pas le début de la saison',
      'vliegplan-snelheid-aidi-speedy-sprint': 'Plan de vol Vitesse — AIDI Speedy Sprint',
      'vliegplan-snelheid': 'Plan de vol Vitesse',
      'vliegschema-aidi-halve-fond': 'Plan de vol Demi-fond',
      'vliegschema-aidi-dagfond': 'Plan de vol Grand demi-fond',
      'vliegschema-aidi-girl-power': 'Plan de vol Girl Power — femelles',
      'overnachtfond': 'Plan de vol Fond de nuit',
      'vliegschema-aidi-jonge-duiven': 'Plan de vol Jeunes pigeons',
      'vliegplan-thuisblijvende-doffers-duivinnen': 'Mâles et femelles restant au colombier',
      'rui': 'Plan de mue',
      'kweek': "Plan d'élevage",
      'kweekschema-met-pro-bacterial': "Plan d'élevage avec AIDI Pro Bacterial",
      'winter-rust-schema': 'Plan hiver et repos'
    }
  },

  team: {
    title: "Team Noël-Willockx — quarante-cinq ans d'expertise en nutrition | AIDI",
    meta: "Eddy Noël et Ivan Willockx : 45 ans d'expertise nutritionnelle dans le sport colombophile, avec des as-pigeons nationaux KBDB et des résultats de pointe au colombier.",
    h1: 'Team Noël-Willockx',
    lede: "Deux spécialistes qui savent ce qu'il faut pour amener un corps au sommet de sa forme et l'y maintenir. Les résultats le prouvent — au colombier et chez les autres.",
    eddyT: 'Eddy Noël',
    eddyP1: "Plus de quarante ans d'expérience dans le sport colombophile. Il a longtemps travaillé comme nutritionniste spécialisé et a développé divers mélanges et sous-produits de haute qualité, parfaitement équilibrés et adaptés au sport colombophile actuel.",
    eddyP2: "Eddy est une autorité en matière d'alimentation et de sous-produits pour le sport colombophile, et partage volontiers ce savoir lors de ses nombreuses conférences : sur l'alimentation, sur l'obscurcissement et l'éclairage, sur de meilleures performances d'élevage et de vol, sur le jeu avec les jeunes pigeons, sur un climat sain au colombier. Il est l'auteur de nombreux articles et a accompagné plusieurs colombiers de pointe.",
    ivanT: 'Ivan Willockx',
    ivanP1: "Ivan a appris les ficelles du sport de haut niveau comme ancien footballeur professionnel. Il est aujourd'hui courtier en pigeons et visite à ce titre de nombreux amateurs.",
    ivanP2: "Il connaît donc mieux que quiconque les besoins quotidiens des meilleurs joueurs — les questions qui se posent au colombier, et là où les choses coincent en pratique.",
    resultsT: 'Temps forts 2022',
    resultsLede: '15× top 100 national, 63× top 100 zone nationale et 56× top 100 provincial.',
    acesT: 'As-pigeons nationaux KBDB',
    acesLede: "Sur les dernières années, avec chaque fois l'implication de Team Noël-Willockx.",
    share: 'part',
    birds: 'pigeons'
  },

  verkooppunten: {
    title: 'Points de vente — où acheter AIDI ? | AIDI',
    meta: 'Plus de soixante points de vente AIDI en Belgique et aux Pays-Bas, plus des importateurs en Allemagne, France, Royaume-Uni, Italie, Hongrie, Croatie, aux États-Unis, en Tchéquie et en Pologne.',
    h1: 'Où acheter AIDI ?',
    lede: 'Plus de soixante magasins et importateurs dans onze pays. Recherchez par nom, commune ou code postal.',
    ctaTitle: "Votre magasin n'y figure pas ?",
    ctaBody: 'Vous êtes commerçant et souhaitez AIDI dans votre assortiment ? Contactez Eddy ou Ivan.'
  },

  contact: {
    title: 'Contact — Team Noël-Willockx | AIDI',
    meta: 'Contactez directement Team Noël-Willockx : Eddy Noël, Ivan Willockx et les importateurs internationaux AIDI.',
    h1: 'Contact',
    lede: "Des questions sur un mélange, un plan ou votre propre situation ? Appelez sans hésiter. Le conseil est gratuit.",
    directT: 'Directement',
    directP: "Eddy et Ivan répondent eux-mêmes. Pour des questions sur l'alimentation, les plans ou un problème précis au colombier.",
    mailT: 'Par e-mail',
    mailP: "Pour les commandes, les demandes commerciales et tout ce qui n'est pas urgent.",
    intlT: 'Importateurs internationaux',
    intlP: 'En dehors de la Belgique et des Pays-Bas, la distribution passe par nos importateurs.',
    dealerT: 'Vous préférez en magasin ?',
    dealerP: 'AIDI est disponible chez plus de soixante points de vente.'
  },

  footer: {
    about: 'Alimentation pour le sport colombophile, développée par Team Noël-Willockx. Tout est fabriqué en Belgique.',
    madeIn: 'Fabriqué en Belgique',
    range: 'Gamme',
    company: "L'entreprise",
    support: 'Pratique',
    rights: 'Tous droits réservés.',
    colophon: 'Redesign par AW Webdesign'
  },

  p: {
    'aidi-speedy-sprint': {
      name: 'AIDI Speedy Sprint',
      tag: "Taux de glucides extrêmement élevé pour les concours de vitesse et tout ce qui compte une nuit de panier.",
      desc: [
        "C'est sur les glucides que les pigeons volent le plus vite. AIDI Speedy Sprint remplit complètement le réservoir de glucides avec des sucres facilement et rapidement digestibles, qui fournissent de grandes quantités d'énergie immédiatement disponible — et les pigeons maintiennent aussi cette vitesse plus longtemps.",
        "À utiliser pour les concours avec une nuit de panier, qu'ils fassent 50 ou 350 km. Seul le plan alimentaire de la semaine change selon la distance ; la constitution de l'énergie à partir des graisses se fait plus tôt dans la semaine. Les pigeons qui partent au panier avec un réservoir plein volent aisément deux à trois minutes plus vite par heure de vol."
      ],
      use: [
        "Concours avec 1 nuit de panier : à volonté le jour de l'enlogement et jusqu'à celui-ci.",
        "Astuce : pour faire bien travailler vos pigeons à l'entraînement, donnez-leur 1 à 2 repas d'AIDI Speedy Sprint."
      ],
      ing: 'Maïs bordeaux, maïs cribbs, froment, orge décortiquée, milo rouge, dari blanc, avoine décortiquée, riz rond, graines de lin, chènevis, millet, alpiste, katjang idjoe.'
    },
    'aidi-mix-1': {
      name: 'AIDI Mix 1',
      tag: "Le mélange de base léger de l'assortiment de vol — de la plus courte à la plus longue distance.",
      desc: [
        "Facile à digérer, avec une assimilabilité élevée et peu de déchets à la combustion. Les pigeons volent vite plus longtemps et récupèrent particulièrement vite, ce qui vous permet de les entraîner et de les faire concourir plus intensivement.",
        "La cellulose brute présente a une action nettoyante et maintient la flore intestinale en condition optimale. Le taux élevé de protéines assimilables permet aux muscles de récupérer rapidement, tandis que le taux de graisses relativement élevé assure immédiatement la constitution de l'énergie pour le concours suivant."
      ],
      use: [],
      ing: 'Maïs bordeaux, maïs cribbs, froment, orge, milo rouge, dari blanc, paddy, cardy, graines de lin, chènevis, millet, alpiste, sarrasin, katjang idjoe, soja toasté.'
    },
    'aidi-mix-2': {
      name: 'AIDI Mix 2',
      tag: "Petites graines et légumineuses pour une meilleure répartition et assimilabilité. Jusqu'à 3 jours avant le concours.",
      desc: [
        "Les graines et légumineuses de petit format, délibérément choisies, assurent une meilleure répartition et assimilabilité. Comme dans les autres mélanges, le maïs séché naturellement — plus riche en sucres et en amidons — augmente la valeur nutritive.",
        "Les pigeons de concours ont un grand besoin de protéines, mais c'est le taux de protéines assimilables qui compte, pas le taux brut. Un juste équilibre entre le maintien du métabolisme et l'apport des acides aminés nécessaires est ici la clé du succès."
      ],
      use: ["Peut être donné jusqu'à 3 jours avant le concours."],
      ing: 'Maïs cribbs bordeaux, petit maïs cribbs jaune, froment, milo rouge, dari blanc, avoine décortiquée, riz rond, cardi, graines de lin, colza, chènevis, alpiste, katjang idjoe, soja toasté, petits pois verts.'
    },
    'aidi-mix-3': {
      name: 'AIDI Mix 3',
      tag: "Riche en énergie, avec une offre large et variée d'acides gras.",
      desc: [
        "Un mélange particulièrement riche en énergie qui fournit à nos athlètes le carburant nécessaire grâce à une offre élevée et variée de différents acides gras.",
        "Ces acides gras ne constituent pas seulement les réserves de graisse nécessaires au concours : ils rendent aussi le mélange particulièrement apte à garantir une récupération très rapide au retour."
      ],
      use: ["Selon le nombre d'heures de vol prévues : à utiliser de 1 à 3 jours avant l'enlogement."],
      ing: 'Maïs bordeaux, maïs à pop-corn, petit maïs cribbs, froment, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardi, graines de tournesol, tournesol décortiqué, graines de lin, navette, chènevis, millet, alpiste, katjang idjoe, soja toasté.'
    },
    'aidi-girl-power': {
      name: 'AIDI Girl Power',
      tag: 'Spécialement conçu pour les femelles avec un programme intensif entre 300 et 700 km.',
      desc: [
        "Un mélange scientifiquement fondé et mûrement réfléchi de différentes sources de glucides, de graisses et de protéines. Ils assurent un aliment très facile à digérer, une assimilabilité particulièrement élevée et une combustion produisant moins de déchets — la femelle digère les nombreux kilomètres de vol de manière plus économe.",
        "La cellulose brute présente assure un fonctionnement intestinal constamment parfait. Les femelles restent ainsi facilement en condition optimale toute la saison et récupèrent très vite, même après les concours les plus difficiles."
      ],
      use: [],
      ing: 'Petit maïs cribbs, maïs bordeaux, maïs à pop-corn, froment, orge, orge décortiquée, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardi, tournesol décortiqué, lin brun, colza, chènevis, millet, alpiste, vesces, katjang idjoe, soja toasté.'
    },
    'aidi-long-distance-mix': {
      name: 'AIDI Long Distance Mix',
      tag: 'Développé pour les plus longues distances et le fond de nuit.',
      desc: [
        "Chaque discipline d'un sport colombophile de plus en plus spécialisé exige une préparation très spécifique. Les pigeons des plus longues distances sont souvent mis à rude épreuve, et ils ont tout intérêt à y être bien préparés.",
        "AIDI Long Distance Mix garantit un bon équilibre entre les différents types de glucides, de graisses et de protéines. C'est ici, plus encore qu'ailleurs, d'une importance cruciale pour exploiter tout le potentiel et tout le rendement de vos pigeons."
      ],
      use: [],
      ing: 'Maïs cribbs jaune, froment, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardy, tournesol décortiqué, graines de lin, navette, colza, chènevis, millet, alpiste, vesces, katjang idjoe, soja toasté, maple peas, pois verts.'
    },
    'aidi-super-kweek': {
      name: 'AIDI Super Kweek',
      tag: 'Élève les jeunes et maintient les reproducteurs en excellente condition.',
      desc: [
        "Le taux élevé et diversifié de protéines assimilables fournit tous les matériaux nécessaires pour que les jeunes pigeons grandissent sans problème et aient toutes les chances de devenir des athlètes solides.",
        "Les graines riches en graisses soigneusement sélectionnées rendent l'aliment léger à digérer. Avec suffisamment de cellulose brute, elles maintiennent jeunes et reproducteurs en parfaite condition, même après plusieurs tours d'élevage. La composition est si bien adaptée aux pigeons reproducteurs que ceux-ci la consomment sans gaspillage et la transmettent aisément aux jeunes."
      ],
      use: [],
      ing: 'Maïs bordeaux, maïs cribbs, froment, milo rouge, dari blanc, avoine décortiquée, paddy, riz rond, cardi, tournesol strié, tournesol décortiqué, graines de lin, navette, chanvre, millet, alpiste, vesces, katjang idjoe, soja toasté, maple peas, pois verts, pois jaunes.'
    },
    'aidi-super-rui': {
      name: 'AIDI Super Rui',
      tag: 'Adapté au besoin accru en protéines pendant la mue.',
      desc: [
        "La haute assimilabilité, la grande diversité de protéines utilisables, le bon rapport oméga 3-6 et la part d'acides aminés spécifiquement accrue pour la mue assurent une excellente mue et une qualité de plumage parfaite.",
        "Cette composition renouvelée est encore moins contraignante pour le pigeon. Elle assure donc une condition constamment optimale et garantit une mue impeccable."
      ],
      use: [],
      ing: 'Maïs bordeaux, maïs cribbs, froment, orge, milo rouge, dari blanc, avoine décortiquée, paddy, cardy, graines de tournesol, tournesol décortiqué, graines de lin, colza, navette, chènevis, millet, alpiste, vesces, katjang idjoe, soja toasté, pois.'
    },
    'aidi-winter-rust': {
      name: 'AIDI Winter / Repos',
      tag: "Pour l'après-mue, les mois d'hiver et les pigeons en volière ou enfermés.",
      desc: [
        "Une forte teneur en cellulose brute, sous forme de fibres variées, maintient la digestion et l'absorption des nutriments à un niveau optimal, avec une action nettoyante.",
        "Les justes proportions et la nature des acides gras, glucides et protéines présents font qu'AIDI Winter/Repos peut être donné à volonté sans problème, sans que les pigeons ne s'engraissent."
      ],
      use: [],
      ing: 'Riz paddy, orge, maïs cribbs jaune, avoine pointue, maïs cribbs bordeaux, froment blanc, tournesol strié, milo rouge, cardy, sarrasin, graines de lin, chènevis, katjang idjoe, fèves de soja toastées.'
    },
    'aidi-extra-power-snoepmix': {
      name: 'AIDI Extra Power Snoepmix',
      tag: 'Le mélange friandise comme moyen de conditionnement — avec périlla et chardon-Marie.',
      desc: [
        "Après l'entraînement, les pigeons reçoivent souvent une poignée de graines de friandise. Ils les mangent volontiers, ce qui les rend parfaitement adaptées au conditionnement de nos animaux — à condition d'en faire un mélange complémentaire de choix.",
        "Les graines de périlla et de chardon-Marie ont délibérément été écartées des autres mélanges, et d'autant plus présentes dans celui-ci. En donnant à chaque pigeon une pincée après l'entraînement, vous êtes certain que chaque animal reçoit sa portion quotidienne. Grâce au taux de graisses élevé, également très indiqué comme dernière touche avant l'enlogement."
      ],
      use: [],
      ing: ''
    },

    'aidi-carbo-boost': {
      name: 'AIDI Carbo Boost',
      tag: "Mélange énergétique qui permet à l'organisme de produire du glycogène plus rapidement.",
      desc: [
        "Un mélange énergétique de haute qualité, scientifiquement équilibré, qui assure un excellent fonctionnement des muscles. Sa composition unique permet à l'organisme de produire du glycogène plus rapidement, ce qui permet aux pigeons de voler plus longtemps à vitesse élevée.",
        "Les antioxydants, vitamines et électrolytes ajoutés assurent respectivement le soutien du système immunitaire, une meilleure résistance au stress et une meilleure régulation de l'équilibre hydrique pendant le transport, les entraînements et les concours."
      ],
      use: [
        "1 mesurette (10 g) une fois par jour à mélanger à 600 g d'aliment. Humidifiez d'abord l'aliment avec AIDI Omega Plus Olie Extra.",
        "Pendant la saison de vol : 1 à 2 jours avant l'enlogement.",
        'Pour faire travailler les pigeons mieux et plus intensivement : 3 à 5 jours de suite, avec AIDI Condition Booster.'
      ],
      ing: ''
    },
    'aidi-omega-plus-olie-extra': {
      name: 'AIDI Omega Plus Olie Extra',
      tag: "Huiles oméga-3 avec lécithine, pour une absorption plus rapide et plus efficace des acides gras.",
      desc: [
        "L'usage quotidien améliore considérablement le rapport oméga 3-6 de l'aliment, ce qui se traduit par une meilleure santé et une meilleure condition. La lécithine ajoutée assure une absorption plus rapide, plus élevée et plus efficace de ces acides gras dans l'organisme, ce qui permet aux pigeons de voler sans problème plus souvent et davantage de kilomètres de concours.",
        "La lécithine influence en outre positivement le fonctionnement du cerveau et le sens de l'orientation. Le résultat est également un plumage particulièrement serré et lisse."
      ],
      use: [
        "Toute l'année, pendant l'élevage, la mue et surtout la saison de vol : une fois par jour, 5 ml à mélanger à 1 kg d'aliment, de préférence le soir.",
        "Également parfait pour faire adhérer d'autres suppléments en poudre à l'aliment.",
        "Bien agiter avant emploi. Astuce : mélangez l'huile à l'aliment le matin pour le repas du soir, afin qu'elle ait le temps de pénétrer."
      ],
      ing: ''
    },
    'aidi-omega-3-krill-olie': {
      name: 'AIDI Omega 3 Krill Olie',
      tag: "Source riche en ALA, DHA et EPA — sans le désagréable goût de poisson.",
      desc: [
        "Les acides gras constituent l'essentiel de l'approvisionnement énergétique d'un pigeon. Une combustion plus efficace réduit sensiblement la quantité de déchets, et c'est précisément là que l'oméga-3 fait la différence.",
        "AIDI Omega 3 Krill Olie est une source riche en ALA (acide alpha-linolénique), DHA (acide docosahexaénoïque) et EPA (acide eicosapentaénoïque) de haute qualité. Tous les avantages d'un équilibre oméga-3 parfait, sans le désagréable goût de poisson."
      ],
      use: [
        "Pigeons en volière, pigeons ne participant pas aux concours et pendant l'hiver : 5 ml par 600 g d'aliment, chaque jour.",
        "Pigeons de concours de 1 à 3 heures de vol : 5 ml par 600 g d'aliment, la veille et le jour de l'enlogement.",
        "Si davantage d'heures de vol sont à prévoir, AIDI Omega Plus Olie reste recommandée."
      ],
      ing: ''
    },
    'aidi-condition-booster': {
      name: 'AIDI Condition Booster',
      tag: 'Tonique de condition à base de vitamines, acides aminés et minéraux pour la saison de vol.',
      desc: [
        "Active le métabolisme, assure une plus grande endurance et une meilleure absorption d'oxygène, et soutient le système musculaire.",
        "Assure en outre une excellente condition et la constitution de plus d'énergie et de réserves énergétiques, ce qui améliore les performances en concours. L'effet est renforcé en cas d'administration simultanée avec AIDI Carbo Boost."
      ],
      use: [
        "30 ml par kg d'aliment complet, ou 10 ml par litre d'eau de boisson.",
        "Saison de vol : la veille de l'enlogement, et au retour avec AIDI Recup Fast pour une récupération ultra-rapide.",
        'En cas de mauvais entraînement dû à une condition moindre : 2 à 5 jours avec AIDI Carbo Boost.',
        "Pendant la saison d'élevage : 3 à 5 jours lors du passage du lait de jabot à l'aliment solide.",
        'Pendant la mue : 1 fois par semaine ; pigeons obscurcis et éclairés 2 fois par semaine.'
      ],
      ing: ''
    },
    'aidi-health-elixir': {
      name: 'AIDI Health Elixir',
      tag: 'Teinture de vingt herbes, feuilles, racines et plantes.',
      desc: [
        "Avec notamment une action antioxydante et un soutien de la circulation sanguine. Cela se traduit par une meilleure mue du duvet et amène les pigeons en pleine forme en peu de temps.",
        "Augmente la résistance et améliore le système immunitaire, soutient les voies respiratoires, assure une meilleure absorption d'oxygène et stimule l'appétit. Après une cure de plusieurs jours, les pigeons ont de beaux muscles pectoraux roses, des cires et des cercles oculaires blanc craie."
      ],
      use: [
        "20 ml par litre d'eau, ou sur 600 g d'aliment pour 20 pigeons.",
        "En préparation de la période d'élevage ou de vol : 8 à 10 jours avant l'accouplement ou le début des concours.",
        'Pendant la saison de vol : 1 à 2 fois par semaine après le concours. Pendant la mue : 3 à 4 fois par semaine.'
      ],
      ing: ''
    },
    'aidi-chelats': {
      name: 'AIDI Chelats',
      tag: 'Vitamines, oligo-éléments et minéraux sous forme chélatée.',
      desc: [
        "Les chélates présentent l'avantage d'être intégralement absorbés par l'organisme et de combler ainsi facilement les manques de l'aliment.",
        "À utiliser en cas de condition affaiblie. Le rythme intensif des concours augmente le besoin en vitamines, minéraux et oligo-éléments ; un usage régulier les complète et maintient les pigeons en pleine forme pendant la saison. Également essentiel pour le développement des jeunes pendant l'élevage et du nouveau plumage pendant la mue."
      ],
      use: [
        "Vitesse : 10 ml sur 1 kg d'aliment une fois par mois, la veille de l'enlogement.",
        'Demi-fond : toutes les 3 semaines. Grand demi-fond : toutes les 2 semaines en cas de vol hebdomadaire.',
        "Fond et fond de nuit : 10 ml sur 1 kg d'aliment, la veille de l'enlogement.",
        "Après maladie ou médication : 2 jours. Après vaccination : 1 jour. Élevage et mue : 1 fois par semaine."
      ],
      ing: ''
    },
    'aidi-recup-fast': {
      name: 'AIDI Recup Fast',
      tag: 'Mélange de récupération hydrosoluble, pour immédiatement après le retour.',
      desc: [
        "Au retour d'un concours, il est particulièrement important que le pigeon puisse reconstituer au plus vite les réserves consommées : sucres simples et complexes, acides gras immédiatement disponibles et matériaux de construction pour les protéines.",
        "AIDI Recup Fast contient ces composants dans les bonnes proportions pour une récupération rapide et un rétablissement aisé — le produit par excellence pour l'après-concours."
      ],
      use: [
        "4 mesurettes (20 g) par litre d'eau de boisson, à mettre à disposition immédiatement au retour.",
        "Renouvelez le mélange après une demi-heure : l'oxydation par la lumière et l'air en réduit la qualité."
      ],
      ing: ''
    },
    'aidi-proteine-boost': {
      name: 'AIDI Proteine Boost',
      tag: 'Protéines de lactosérum de haute qualité à valeur biologique particulièrement élevée.',
      desc: [
        "Ces protéines sont absorbées extrêmement vite par l'organisme. Cela assure une récupération plus rapide après le concours chez les pigeons sensibles à la surcharge musculaire, une meilleure croissance des jeunes pendant l'élevage et une bonne formation du plumage pendant la mue.",
        "L'ajout de minéraux supplémentaires aide à renforcer la résistance naturelle et soutient le système immunitaire, de sorte que les pigeons restent en excellente santé et voient leurs capacités augmenter."
      ],
      use: [
        "15 g (3 cuillères-mesure) par kg d'aliment complet. Humidifiez d'abord l'aliment avec AIDI Omega Plus Olie Extra.",
        "Pendant la mue et l'élevage : 1 à 2 fois par semaine.",
        "Lors du passage du lait de jabot à l'aliment solide : 3 à 5 jours.",
        'Saison de vol : après un concours difficile, 2 à 3 repas. Après maladie ou vaccination : 2 à 3 jours.'
      ],
      ing: ''
    },
    'aidi-pro-bacterial': {
      name: 'AIDI Pro Bacterial',
      tag: 'Ferment de mélasse de canne à sucre qui renforce la position des bonnes bactéries.',
      desc: [
        "Une bonne santé, une bonne immunité, une bonne résistance et une bonne vitalité commencent par une bonne flore intestinale. Une alimentation déséquilibrée ou souillée dans les paniers, une eau de boisson sale pendant le transport, le stress, les antibiotiques et la fatigue due à des concours trop durs perturbent l'équilibre entre bonnes et mauvaises bactéries.",
        "AIDI Pro Bacterial assure une meilleure digestion et une meilleure absorption des nutriments, et aide ainsi à renforcer la résistance naturelle. Les pigeons se tiennent plus serrés dans les plumes et travaillent mieux à l'entraînement."
      ],
      use: [
        "Pendant l'élevage, la mue, la saison de vol et la période de repos : 10 ml par litre d'eau — à renouveler chaque jour — ou 10 ml sur 600 g d'aliment.",
        "Laissez bien s'aérer l'eau de ville : elle contient du chlore.",
        "Le produit peut légèrement floculer avec le temps. C'est parfaitement normal et sans incidence sur la qualité."
      ],
      ing: ''
    },
    'aidi-probiotica-plus': {
      name: 'AIDI Probiotica Plus',
      tag: 'Mélange pré- et probiotique fortement concentré pour la résistance naturelle.',
      desc: [
        "Favorise et stimule une bonne flore intestinale, aide à renforcer la résistance naturelle et joue un rôle dans la défense contre les maladies.",
        "La forte concentration de lactobacilles se niche et se multiplie dans les muqueuses de l'intestin grêle et favorise ainsi la digestion des nutriments. Il en résulte une excellente vitalité et un plumage doux comme la soie."
      ],
      use: [
        "3 cuillères-mesure (15 g) à mélanger à 1 kg d'aliment. Humidifiez d'abord l'aliment avec AIDI Omega Plus Olie Extra.",
        "Pendant la saison de vol : 1 jour avant l'enlogement, pour favoriser la condition.",
        "Pendant la mue et l'élevage : 2 fois par semaine.",
        'Après une cure antibiotique ou une vaccination : 3 jours, 1 fois par jour.'
      ],
      ing: ''
    },
    'aidi-calcium-forte': {
      name: 'AIDI Calcium Forte',
      tag: 'Mélange minéral pauvre en phosphore et riche en calcium.',
      desc: [
        "Contient tous les minéraux, oligo-éléments et acides aminés permettant de combler les manques de l'aliment pendant la saison de vol, l'élevage et la mue. Le faible taux de phosphore et le taux élevé de calcium assurent une grande assimilabilité.",
        "Améliore le fonctionnement du métabolisme lors des efforts intenses comme les concours, l'élevage des jeunes et le renouvellement du plumage, et améliore sensiblement les performances d'élevage et de vol. Grâce à sa structure adaptée, il est consommé volontiers."
      ],
      use: [
        '1,5 g par pigeon et par jour, à mettre à disposition dans de petits godets au colombier.',
        "De l'accouplement à la ponte : chaque jour.",
        'Pendant la croissance des jeunes : 3 fois par semaine.',
        "Pendant la saison de vol : 1 fois par semaine, 3 jours avant l'enlogement. Pendant la mue : 3 fois par semaine."
      ],
      ing: ''
    },
    'aidi-condition-plus-minerals': {
      name: 'AIDI Condition Plus Minerals',
      tag: "Minéraux, vitamines et grit pour la saison de vol, l'élevage et la mue.",
      desc: [
        "Développé sur la base des connaissances scientifiques les plus récentes sur l'alimentation des pigeons : un mélange de minéraux et de vitamines que les pigeons mangent volontiers. Il contient tout ce dont nos athlètes ont besoin pour l'élevage et pour des performances de pointe en concours.",
        "Le taux élevé de calcium par rapport au phosphore et le grit présent assurent une très bonne digestion de l'aliment. Les manques de l'alimentation sont ainsi comblés correctement."
      ],
      use: [
        "2,5 g par pigeon et par jour, à mettre à disposition dans de petits godets au colombier. Toute l'année, 2 à 3 fois par semaine.",
        'Mélangez-y un peu de graines de friandise avant de le donner aux pigeons.',
        "Saison de vol : 2 jours avant l'enlogement et au retour du concours.",
        "Période d'élevage : 2 fois par semaine pendant la couvaison ; quand les jeunes ont 4-5 jours, chaque jour. Mue : 2 fois par semaine."
      ],
      ing: ''
    },
    'aidi-grit-met-anijs': {
      name: "AIDI Grit à l'anis",
      tag: "Grit avec gravier et coquilles d'huîtres — délibérément sans pierre rouge.",
      desc: [
        "Le grit, ce sont les dents de nos pigeons : mieux l'aliment est broyé, plus les nutriments en sont extraits. Le gravier et les coquilles d'huîtres restent longtemps présents dans l'estomac et y aident à broyer l'aliment, ce qui augmente l'absorption des nutriments. La plupart des grits du marché n'en contiennent guère, car ils coûtent relativement cher.",
        "La pierre rouge, en revanche, est broyée avec l'aliment et n'apporte rien. Les pigeons continuent d'en manger pour absorber du calcium, mais en raison du mauvais rapport calcium-phosphore, le corps du pigeon ne l'absorbe pas. De notre grit à l'anis, les pigeons n'ont besoin que de très peu — c'est parfaitement normal."
      ],
      use: ['Mettez chaque jour une toute petite quantité fraîche à disposition dans un godet.'],
      ing: ''
    },
    'aidi-eye-drops': {
      name: 'AIDI Eye Drops',
      tag: 'Soigne et nettoie les yeux, le nez et le canal lacrymal.',
      desc: [
        "Pour une action parfaitement soignante et nettoyante des yeux, du nez et du canal lacrymal. AIDI Eye Drops prévient et apaise également les irritations de la conjonctive et a une action réparatrice."
      ],
      use: [
        "1 goutte dans chaque œil avant l'enlogement et après le concours.",
        "En cas d'irritation ou d'inflammation de la conjonctive : 3 à 5 fois par jour, 1 goutte dans chaque œil."
      ],
      ing: ''
    },

    'aidi-automatische-voederbakken': {
      name: 'Mangeoires automatiques AIDI',
      tag: "Alimentation entièrement automatique, jusqu'à huit distributions par jour, en quatre tailles.",
      desc: [
        "Le travail, les vacances, ou simplement l'impossibilité de vous occuper de vos pigeons aussi ponctuellement que vous le souhaiteriez ? La mangeoire entièrement automatique de haute qualité résout le problème. Avantage supplémentaire : les distributions se font avec une régularité parfaite.",
        "Réglable à la seconde près, pour atteindre exactement la quantité souhaitée. Fonctionne sur secteur et sur batterie rechargeable 12 VDC ; à raison de deux distributions par jour, une batterie pleine tient environ un mois. Rechargez-la toutes les deux semaines pour prolonger sa durée de vie."
      ],
      use: [],
      ing: ''
    },
    'aidi-nestkartons': {
      name: 'Fonds de nid AIDI',
      tag: "Se glissent sur les nids en pierre, avec capsule contre les parasites.",
      desc: [
        "Les pratiques fonds de nid AIDI se glissent sur les nids en pierre. La capsule d'huile essentielle prévient les parasites et les poux — et nettoyer les nids n'est plus une corvée."
      ],
      use: [],
      ing: ''
    },
    'aidi-manden': {
      name: "Paniers AIDI",
      tag: "Paniers d'entraînement en bois de toute première qualité.",
      desc: [
        "Notre concept AIDI est synonyme de qualité et de solidité absolues. Il en va de même pour notre dernier-né : les paniers d'entraînement. Robustes, en bois de toute première qualité, finition très soignée et conception réfléchie — deux compartiments et une mangeoire-abreuvoir facile à fixer. Des années de plaisir colombophile garanties."
      ],
      use: [],
      ing: ''
    }
  }
};
