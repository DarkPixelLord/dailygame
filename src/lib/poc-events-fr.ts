// French translations for POC_EVENTS, keyed by event id.
// Kept separate from poc-events.ts so the English data stays the source of truth.
// Starts empty after the v1 corpus was frozen into legacy-events-fr.ts — see
// docs/event-writing-guide-v2.md.

export type EventTranslation = {
  name: string;
  clue: string;
  explanation: string;
};

export const POC_EVENTS_FR: Record<string, EventTranslation> = {
  great_pyramid_giza: {
    name: "Grande pyramide de Gizeh",
    clue: "Le long du Nil, une pyramide géante construite comme tombeau royal est restée la structure la plus haute au monde pendant plus de 3 800 ans.",
    explanation: "La grande pyramide de Gizeh a été construite comme tombeau du pharaon Khéops, avec plus de deux millions de blocs de calcaire. C'est la seule des sept merveilles du monde antique encore debout aujourd'hui.",
  },
  machu_picchu: {
    name: "Machu Picchu",
    clue: "Haut dans les montagnes surplombant l'Urubamba, un empire sans roues a taillé une citadelle de pierre sur une crête au-dessus d'un canyon sinueux.",
    explanation: "Machu Picchu a été construit par l'empire inca comme domaine royal, puis abandonné et largement oublié des étrangers jusqu'à ce que sa redécouverte attire l'attention du monde entier.",
  },
  angkor_wat: {
    name: "Angkor Wat",
    clue: "Près du Tonlé Sap, le plus grand monument religieux du monde est un temple dédié à un dieu hindou, entouré d'un large fossé en forme de rectangle géant.",
    explanation: "Angkor Wat a été construit comme un temple hindou dédié à Vishnou, avant de devenir progressivement un site bouddhiste. Il figure encore aujourd'hui sur le drapeau national du Cambodge.",
  },
  christ_the_redeemer: {
    name: "Le Christ Rédempteur",
    clue: "Sur un sommet dominant une baie, une statue géante d'une figure religieuse se dresse, bras grands ouverts au-dessus de la ville.",
    explanation: "Le Christ Rédempteur est une statue de Jésus, construite avec l'aide d'un ingénieur français et achevée avec un visage sculpté par un sculpteur roumain. Ses bras s'étendent sur près de 30 mètres.",
  },
  tohoku_earthquake_tsunami: {
    name: "Séisme et tsunami de Tōhoku",
    clue: "Au large du Tōhoku, un immense séisme sous-marin a déclenché un tsunami qui a frappé le littoral et coupé le refroidissement d'une centrale nucléaire.",
    explanation: "Le séisme de Tōhoku a été l'un des plus puissants jamais enregistrés par les instruments modernes. Le tsunami qui a suivi a provoqué une fusion du cœur à la centrale nucléaire de Fukushima Daiichi.",
  },
  woodstock_festival: {
    name: "Woodstock",
    clue: "Sur une ferme laitière dans les monts Catskill, un demi-million de personnes se réunit trois jours pour un festival, la pluie transformant les champs en boue.",
    explanation: "Woodstock a été présenté comme trois jours de paix et de musique. Malgré un ciel couvert et des pluies répétées, des dizaines de groupes se sont produits en plein air devant une foule bien plus nombreuse que prévu.",
  },
  oktoberfest_munich: {
    name: "Oktoberfest",
    clue: "La plus grande fête de la bière au monde a débuté comme un mariage princier, et remplit chaque année d'immenses tentes de visiteurs.",
    explanation: "L'Oktoberfest a commencé comme une célébration publique d'un mariage princier et est devenu une fête populaire annuelle combinant tentes à bière et attractions foraines.",
  },
  first_modern_olympics: {
    name: "Premiers Jeux Olympiques modernes",
    clue: "Les premiers Jeux olympiques modernes ont réuni des athlètes de plusieurs nations dans le même stade où se déroulaient les jeux antiques.",
    explanation: "Les Jeux ont été relancés par un aristocrate français passionné de compétition sportive internationale. Ils se sont déroulés dans un stade de marbre construit pour l'occasion, faisant revivre une tradition antique.",
  },
  battle_of_waterloo: {
    name: "Bataille de Waterloo",
    clue: "Un empereur vaincu livre sa dernière bataille en pleine campagne, alors que des armées coalisées convergent vers lui de plusieurs directions.",
    explanation: "La défaite de Napoléon à Waterloo a mis fin à son règne pour de bon et l'a contraint à l'exil sur une île isolée pour le reste de sa vie.",
  },
  october_revolution_petrograd: {
    name: "Révolution d'Octobre",
    clue: "Dans la capitale d'un immense empire, des révolutionnaires prennent un palais royal de nuit, renversent le gouvernement et fondent le premier État communiste.",
    explanation: "Le soulèvement de Petrograd a été mené par les bolcheviks de Lénine et a déclenché une longue guerre civile dans le pays avant que le nouveau gouvernement n'obtienne le plein contrôle.",
  },
  fall_of_constantinople: {
    name: "Chute de Constantinople",
    clue: "Une armée immense assiège une capitale fortifiée durant 53 jours, perçant ses murailles à coups de canons et mettant fin à un empire millénaire.",
    explanation: "Le siège de 53 jours a mis fin à l'empire byzantin et a transformé sa capitale en nouveau centre de l'empire ottoman. D'énormes canons de bronze ont percé des murailles vieilles de plus de mille ans.",
  },
  battle_of_hastings: {
    name: "Bataille de Hastings",
    clue: "Une armée venue de l'autre côté de la mer vaincut le roi en place en une seule journée de combat, installant une nouvelle dynastie royale sur le trône.",
    explanation: "La victoire du duc envahisseur à Hastings a inauguré une nouvelle dynastie royale, et la bataille a ensuite été commémorée dans une tapisserie brodée de près de 70 mètres de long.",
  },
  colosseum: {
    name: "Colisée",
    clue: "Une immense arène de pierre accueillait des dizaines de milliers de spectateurs venus voir des gladiateurs se battre pour leur vie.",
    explanation: "Le Colisée a été construit sous trois empereurs de la même famille, et pouvait mettre en scène de fausses batailles navales en inondant l'arène.",
  },
  petra_jordan: {
    name: "Pétra",
    clue: "Une cité antique a été taillée directement dans des falaises de grès rosé, son entrée principale cachée au fond d'un canyon étroit et sinueux.",
    explanation: "Pétra était la capitale du royaume nabatéen et prospérait grâce au contrôle des routes commerciales caravanières. La ville disposait d'un système élaboré de canaux et de citernes amenant l'eau jusqu'en plein désert.",
  },
  normandy_landings: {
    name: "Débarquement de Normandie",
    clue: "Des milliers de navires ont débarqué des troupes sur cinq plages à l'aube, dans ce qui reste la plus grande invasion maritime jamais lancée.",
    explanation: "Le débarquement a ouvert un nouveau front contre les territoires occupés par les nazis et marqué le début de la libération de l'Europe de l'Ouest.",
  },
  battle_of_austerlitz: {
    name: "Bataille d'Austerlitz",
    clue: "L'armée d'un empereur, inférieure en nombre, piège deux forces alliées et gagne une bataille surnommée le choc des trois empereurs.",
    explanation: "La victoire de Napoléon à Austerlitz a pratiquement détruit la troisième coalition et est souvent considérée comme la plus grande victoire tactique de sa carrière.",
  },
  olympic_flame_debut: {
    name: "Débuts de la flamme olympique",
    clue: "Dans une ville célèbre pour ses canaux, les Jeux olympiques ont pour la première fois allumé une flamme brûlant en continu, une tradition perpétuée depuis.",
    explanation: "Les Jeux olympiques d'Amsterdam ont aussi permis pour la première fois aux athlètes féminines de concourir en athlétisme.",
  },
  nikola_tesla_birth: {
    name: "Nikola Tesla",
    clue: "Né pendant un orage dans un village de montagne, il conçoit le courant alternatif alimentant les foyers du monde, rival d'un inventeur du courant continu.",
    explanation: "Nikola Tesla est né dans le village de Smiljan. Sa rivalité avec Thomas Edison autour du courant alternatif et continu est connue comme la guerre des courants.",
  },
  indian_ocean_tsunami: {
    name: "Tsunami de l'océan Indien",
    clue: "Dans une mer chaude et tropicale, un immense séisme sous-marin déclenche un tsunami qui tue des centaines de milliers de personnes dans plusieurs pays.",
    explanation: "Le séisme s'est produit au large de Sumatra et a généré des vagues qui ont frappé les côtes de l'océan Indien en quelques heures, surprenant presque toutes les communautés côtières.",
  },
  battle_of_thermopylae: {
    name: "Bataille des Thermopyles",
    clue: "Dans un col de montagne étroit, coincé entre des falaises et la mer, une petite force défensive retient une armée bien plus grande pendant trois jours.",
    explanation: "Une troupe menée par le roi spartiate Léonidas a bloqué le col jusqu'à ce qu'un berger local montre aux envahisseurs un chemin caché pour le contourner et attaquer par l'arrière.",
  },
  spitak_earthquake: {
    name: "Séisme de Spitak",
    clue: "Un puissant séisme rase des villes entières en moins d'une minute, tuant des dizaines de milliers de personnes et poussant des rivaux à coopérer.",
    explanation: "Le séisme a frappé le nord de l'Arménie et a provoqué un moment inhabituel de coopération diplomatique entre puissances mondiales rivales, malgré des tensions politiques persistantes entre elles.",
  },
  klondike_gold_rush: {
    name: "Ruée vers l'or du Klondike",
    clue: "La nouvelle d'une immense découverte d'or dans une région isolée pousse des dizaines de milliers de prospecteurs vers le nord en une seule année.",
    explanation: "La plupart des prospecteurs arrivés dans la région du Klondike ont trouvé les meilleures concessions déjà prises, et seule une petite partie de ceux qui s'étaient lancés a fini par faire fortune.",
  },
  chichen_itza: {
    name: "Chichen Itza",
    clue: "Sur la péninsule du Yucatán, une civilisation ancienne a construit une pyramide alignée pour que, deux fois l'an, son escalier dessine l'ombre d'un serpent.",
    explanation: "La pyramide, nommée El Castillo, a été construite par les Mayas comme temple dédié au dieu serpent à plumes Kukulcan. Ses 365 marches correspondent aux jours de l'année solaire.",
  },
  babylon_hanging_gardens: {
    name: "Babylone",
    clue: "Sur les rives de l'Euphrate, une cité antique est devenue célèbre pour des jardins suspendus comptés parmi les merveilles du monde antique.",
    explanation: "Les jardins suspendus de Babylone, s'ils ont existé comme décrit, auraient compté parmi les sept merveilles du monde antique, bien qu'aucune trace archéologique définitive n'ait jamais été retrouvée.",
  },
  persepolis: {
    name: "Persépolis",
    clue: "Encerclée par les monts Zagros, une capitale cérémonielle fut bâtie avec des escaliers sculptés de soldats et de porteurs de tributs, avant d'être incendiée.",
    explanation: "Persépolis servait de capitale cérémonielle à l'empire perse achéménide. Elle fut incendiée lors de la conquête d'Alexandre le Grand, bien que les historiens débattent encore du caractère volontaire ou accidentel de l'incendie.",
  },
  terracotta_army: {
    name: "Armée en terre cuite",
    clue: "Des milliers de soldats en argile grandeur nature ont été enterrés pour protéger la tombe d'un empereur, chacun avec un visage différent.",
    explanation: "Les statues ont été construites pour la tombe de Qin Shi Huang, premier empereur de Chine, et ont été redécouvertes par des paysans creusant un puits, par pur hasard.",
  },
  borobudur_temple: {
    name: "Borobudur",
    clue: "Sur une île volcanique proche de l'équateur, le plus grand monument bouddhiste du monde est un mandala de pierre, gravi niveau par niveau vers l'éveil.",
    explanation: "Borobudur a été abandonné pendant des siècles, enseveli sous la cendre volcanique et la jungle, avant d'être redécouvert et restauré avec soin.",
  },
  stockholm_1912_olympics: {
    name: "Jeux olympiques de Stockholm",
    clue: "Dans une ville construite sur une dispersion d'îles, les Jeux olympiques ont utilisé chronomètres électriques et télégraphe pour transmettre les résultats.",
    explanation: "Les Jeux de Stockholm ont aussi été les premiers à réunir des athlètes des cinq continents habités en compétition.",
  },
  melbourne_1956_olympics: {
    name: "Jeux olympiques de Melbourne",
    clue: "Les Jeux olympiques se sont tenus en plein été local pendant que le reste du monde était en hiver, les premiers dans l'hémisphère sud.",
    explanation: "En raison d'une longue quarantaine imposée aux chevaux pour entrer dans le pays, les épreuves équestres de ces Jeux se sont tenues à l'autre bout du monde, plusieurs mois plus tôt.",
  },
  euromaidan: {
    name: "Euromaïdan",
    clue: "Le long du Dniepr, des mois de manifestations sur une place centrale ont chassé le président en poste après une répression violente ayant retourné l'opinion.",
    explanation: "Les manifestations ont débuté après que le président a rejeté un accord commercial avec l'Union européenne au profit de liens plus étroits avec la Russie, et sont devenues le plus grand mouvement pro-démocratique en Europe depuis des décennies.",
  },
  leonardo_da_vinci_birth: {
    name: "Léonard de Vinci",
    clue: "Né dans une petite ville de collines entourée de vignes, il a plus tard peint le portrait le plus reconnu au monde.",
    explanation: "Léonard de Vinci est né dans la ville de Vinci, fils illégitime d'un notaire. Le portrait, la Joconde, est aujourd'hui exposé derrière une vitre blindée dans un musée parisien.",
  },
  battle_of_grunwald: {
    name: "Bataille de Grunwald",
    clue: "Dans une plaine boisée près d'un lac, une coalition alliée écrase un ordre militaire et tue son grand maître dans une des plus grandes batailles de l'époque.",
    explanation: "La bataille a opposé le royaume de Pologne et le grand-duché de Lituanie à l'ordre Teutonique, dont la direction a été en grande partie tuée ou capturée.",
  },
  battle_of_badr: {
    name: "Bataille de Badr",
    clue: "Dans une vallée désertique près d'un puits stratégique, une troupe de fidèles bat une force plus nombreuse, dans une bataille marquant un tournant religieux.",
    explanation: "La bataille de Badr a opposé un petit groupe de premiers musulmans mené par Mahomet à une force plus nombreuse venue de La Mecque, et est considérée comme un événement fondateur de l'histoire islamique.",
  },
  haiti_earthquake: {
    name: "Séisme d'Haïti",
    clue: "Sur une île montagneuse partagée par deux nations, un puissant séisme dévaste une capitale peuplée en moins d'une minute, tuant plus de cent mille personnes.",
    explanation: "Le séisme a frappé Haïti, l'un des deux pays partageant l'île d'Hispaniola, et compte parmi les catastrophes les plus meurtrières jamais enregistrées par rapport à la population du pays.",
  },
  paris_world_fair_1889: {
    name: "Exposition universelle de Paris",
    clue: "Une exposition universelle a présenté une tour de fer géante, pièce temporaire vouée à la démolition après vingt ans, mais conservée pour un usage scientifique.",
    explanation: "La tour a été construite pour l'Exposition universelle de Paris par l'ingénieur Gustave Eiffel, et est devenue la plus haute structure artificielle du monde à l'époque. Elle a échappé à la démolition grâce à un usage militaire trouvé comme antenne de communication.",
  },
  iron_pillar_delhi: {
    name: "Pilier de fer de Delhi",
    clue: "Un pilier de métal massif, plus haut qu'un immeuble de deux étages, se dresse en plein air depuis mille ans sans rouiller, ce qui fascine les métallurgistes.",
    explanation: "Les scientifiques pensent qu'une fine couche protectrice, formée par la teneur inhabituelle en phosphore du fer, est ce qui a empêché le pilier de rouiller pendant tout ce temps.",
  },
  svalbard_treaty: {
    name: "Traité du Svalbard",
    clue: "Un traité a accordé à une nation la souveraineté sur une île isolée, garantissant aux autres signataires des droits égaux de pêche et d'exploitation minière.",
    explanation: "Le traité du Svalbard a donné à la Norvège la souveraineté sur l'archipel arctique, tout en permettant à d'autres signataires, dont la Russie, de maintenir des colonies et des exploitations minières sur place.",
  },
  bagan: {
    name: "Bagan",
    clue: "Le long du fleuve Irrawaddy, un royaume ancien fait construire dix mille temples et pagodes bouddhistes sur une plaine, dont des milliers sont encore debout.",
    explanation: "Bagan fut la capitale du royaume de Pagan, premier royaume à unifier la région qui deviendra plus tard la Birmanie. Beaucoup de ses temples restent des lieux de pèlerinage actifs.",
  },
  cave_of_altamira: {
    name: "Grotte d'Altamira",
    clue: "Dans les monts Cantabriques, une grotte cachée pendant des millénaires contient des peintures de bisons et de chevaux si habiles que les experts en ont douté.",
    explanation: "Les peintures d'Altamira ont finalement été confirmées comme datant de dizaines de milliers d'années, réalisées au charbon de bois et avec des pigments naturels soufflés ou tamponnés sur la roche.",
  },
  nepal_earthquake: {
    name: "Séisme du Népal",
    clue: "Dans l'Himalaya, un puissant séisme a déclenché des avalanches meurtrières sur la plus haute montagne du monde, tuant des alpinistes au camp de base.",
    explanation: "Le séisme a été la catastrophe la plus meurtrière survenue au Népal depuis des décennies, et a aussi déclenché une avalanche majeure sur l'Everest qui a tué des alpinistes et des guides sherpas au camp de base.",
  },
  helsinki_1952_olympics: {
    name: "Jeux olympiques d'Helsinki",
    clue: "Sur la côte baltique, les Jeux olympiques voient un rival de la guerre froide concourir pour la première fois en décennies, symbole de rivalité.",
    explanation: "Les Jeux d'Helsinki ont aussi vu le coureur de fond Emil Zátopek remporter trois médailles d'or, dont un marathon qu'il n'avait jamais couru auparavant.",
  },
  montreal_1976_olympics: {
    name: "Jeux olympiques de Montréal",
    clue: "Sur une île du Saint-Laurent, une gymnaste de quatorze ans obtient le premier dix parfait de l'histoire olympique, un score trop inattendu pour être affiché.",
    explanation: "La gymnaste roumaine Nadia Comaneci a obtenu ce score historique aux barres asymétriques, et a reçu six autres dix parfaits au cours des mêmes Jeux.",
  },
  schengen_agreement: {
    name: "Accords de Schengen",
    clue: "Sur la Moselle, cinq pays signent à bord d'un bateau un traité supprimant les contrôles frontaliers, créant une immense zone de libre circulation.",
    explanation: "L'accord a été signé près du village de Schengen et a fini par couvrir la majeure partie de l'Union européenne, permettant aux voyageurs de traverser de nombreuses frontières sans jamais montrer de passeport.",
  },
  mozart_birth: {
    name: "Wolfgang Amadeus Mozart",
    clue: "Né dans une petite ville de montagne connue pour ses mines de sel, ce prodige musical composait déjà des symphonies avant même d'être adolescent.",
    explanation: "Wolfgang Amadeus Mozart est né à Salzbourg. Il a achevé plus de 800 œuvres au cours de sa courte vie et est considéré comme l'un des plus grands compositeurs de la musique occidentale.",
  },
  van_gogh_birth: {
    name: "Vincent van Gogh",
    clue: "Né dans le presbytère d'un village en pays de plaine, ce peintre devient célèbre pour un ciel étoilé tourbillonnant, peint lors d'un séjour en asile.",
    explanation: "Vincent van Gogh est né dans le village de Groot-Zundert, fils d'un pasteur protestant. Il n'a vendu qu'une poignée de tableaux durant sa vie, mais figure aujourd'hui parmi les artistes les plus reconnus de l'histoire.",
  },
  battle_of_marathon: {
    name: "Bataille de Marathon",
    clue: "Sur une plaine côtière enserrée entre collines et mer, des défenseurs peu nombreux repoussent un envahisseur, sa course inspirant plus tard une célèbre course.",
    explanation: "La victoire de Marathon a été remportée par les forces athéniennes et leurs alliés contre une flotte d'invasion perse bien plus nombreuse, et est souvent vue comme un moment fondateur pour la confiance de la jeune démocratie grecque.",
  },
  battle_of_cannae: {
    name: "Bataille de Cannae",
    clue: "Sur une plaine aride près d'une rivière, une manœuvre en tenaille menée par une armée réduite encercle et anéantit une force bien plus grande en un seul jour.",
    explanation: "La tactique de Cannae a été conçue par le général carthaginois Hannibal contre Rome, et la bataille est encore étudiée dans les académies militaires comme un modèle d'encerclement tactique.",
  },
  byblos_lebanon: {
    name: "Byblos",
    clue: "Sur une colline côtière au bord d'une mer chaude, une des plus anciennes villes habitées sans interruption a donné son nom au mot moderne pour livre.",
    explanation: "Byblos était un grand port phénicien qui exportait du papyrus vers la Grèce, et le mot grec désignant la ville, byblos, est à l'origine de mots comme 'Bible' et 'bibliographie'.",
  },
  montreal_protocol: {
    name: "Protocole de Montréal",
    clue: "Un traité mondial supprime peu à peu des substances chimiques détruisant une couche protectrice de l'atmosphère, accord environnemental parmi les plus réussis.",
    explanation: "Le protocole de Montréal visait les chlorofluorocarbures qui élargissaient un trou dans la couche d'ozone au-dessus de l'Antarctique, et celle-ci se reconstitue progressivement depuis son entrée en vigueur.",
  },
  locarno_treaties: {
    name: "Traités de Locarno",
    clue: "Un ensemble de traités fait garantir par d'anciens ennemis de guerre leurs frontières communes, mais cet optimisme diplomatique s'effondre en dix ans.",
    explanation: "Les traités de Locarno garantissaient les frontières d'après-guerre entre l'Allemagne, la France et la Belgique, et furent vus comme un triomphe diplomatique avant de s'effondrer plus tard, les tensions remontant.",
  },
  union_of_utrecht: {
    name: "Union d'Utrecht",
    clue: "Un groupe de provinces protestantes s'unit contre le pouvoir dur et les persécutions religieuses d'un roi catholique lointain, fondant une future nation.",
    explanation: "L'Union d'Utrecht a lié plusieurs provinces néerlandaises contre la domination espagnole, et est considérée comme un précurseur précoce de la constitution moderne des Pays-Bas.",
  },
  ggantija_malta: {
    name: "Temples de Ġgantija",
    clue: "Sur une petite île, un temple de blocs de pierre massifs compte parmi les plus anciennes structures autoportantes, antérieur aux pyramides d'un millénaire.",
    explanation: "Les temples de Ġgantija, sur l'île de Gozo, font partie des temples mégalithiques de Malte, et seraient les deuxièmes plus anciennes structures religieuses construites par l'homme connues dans le monde.",
  },
  shakespeare_birth: {
    name: "William Shakespeare",
    clue: "Né dans une petite ville de marché au bord d'une rivière, en pleine campagne, ce dramaturge a inventé des centaines de mots toujours employés aujourd'hui.",
    explanation: "William Shakespeare est né à Stratford-upon-Avon, fils d'un gantier. Ses 39 pièces et plus de 150 sonnets ont été traduits dans des dizaines de langues et restent les œuvres les plus jouées de toute l'histoire du théâtre.",
  },
  confucius_birth: {
    name: "Confucius",
    clue: "Né dans une petite ville sur une vaste plaine agricole, ce philosophe proposa ses idées politiques à des souverains rivaux qui l'ignorèrent des années durant.",
    explanation: "Confucius est né près de la ville de Qufu, sur la grande plaine de Chine du Nord. Ses enseignements sur l'éthique et l'harmonie sociale furent largement ignorés de son vivant, avant de devenir la philosophie de référence pour l'éducation et le gouvernement dans la région pendant des siècles.",
  },
  basho_birth: {
    name: "Matsuo Bashō",
    clue: "Né dans une ville entourée de montagnes, ce poète perfectionna un vers de dix-sept syllabes et marcha des milliers de km pour écrire son journal de voyage.",
    explanation: "Matsuo Bashō est né dans la ville d'Ueno. Son récit de voyage, mêlant prose et haïkus, décrit un périple à pied à travers des contrées reculées, et il mourut sur la route lors d'un voyage ultérieur.",
  },
  cervantes_birth: {
    name: "Miguel de Cervantès",
    clue: "Né sur une plaine aride, ce romancier fut mutilé lors d'une bataille navale, puis captif de pirates plusieurs années, avant d'écrire le premier roman moderne.",
    explanation: "Miguel de Cervantès est né à Alcalá de Henares. Blessé et mutilé lors d'une grande bataille navale, il fut ensuite capturé en mer et retenu captif pendant des années avant d'être libéré contre rançon. Son roman Don Quichotte est souvent considéré comme le premier roman moderne.",
  },
  cannes_film_festival: {
    name: "Festival de Cannes",
    clue: "Dans une station balnéaire sur une côte chaude, le plus prestigieux festival de cinéma au monde remet une palme dorée stylisée, ni trophée ni médaille.",
    explanation: "Le Festival de Cannes se tient chaque année dans une ville au bord de la mer, dont le casino municipal a accueilli sa première édition. Sa récompense suprême, la Palme d'or, prend depuis toujours la forme d'une palme dorée stylisée.",
  },
  potsdam_conference: {
    name: "Conférence de Potsdam",
    clue: "Dans un palais au bord d'un lac près d'une capitale ravagée, les vainqueurs réglèrent le sort d'un pays vaincu ; un chef perdit son poste en pleine conférence.",
    explanation: "La conférence de Potsdam réunit les dirigeants des trois grandes puissances victorieuses pour décider comment administrer l'Allemagne après sa capitulation. En cours de route, le chef de la délégation britannique changea : le parti de Winston Churchill perdit les élections chez lui, et Clement Attlee prit sa place.",
  },
  council_of_trent: {
    name: "Concile de Trente",
    clue: "Dans une ville encerclée de sommets escarpés et enneigés, un concile religieux se réunit par intermittence dix-huit ans durant, face à un schisme grandissant.",
    explanation: "Le concile de Trente fut convoqué dans la ville de Trente, aujourd'hui Trento, dans le nord de l'Italie, en réponse à un schisme religieux grandissant au sein de l'église. Ses sessions furent sans cesse interrompues par la guerre, la peste et des différends politiques, étirant sur près de deux décennies un processus censé durer quelques mois.",
  },
  second_council_of_nicaea: {
    name: "Deuxième concile de Nicée",
    clue: "Dans une ville fortifiée au bord d'un lac, un concile mit fin à des décennies d'interdiction des images religieuses, closant une longue querelle.",
    explanation: "Le concile se réunit dans la ville aujourd'hui appelée İznik, au bord d'un lac dans le nord-ouest de l'Anatolie. Il rétablit la vénération des icônes religieuses après des décennies d'interdiction impériale et de destruction d'images religieuses.",
  },
  battle_of_dien_bien_phu: {
    name: "Bataille de Diên Biên Phu",
    clue: "Dans une vallée isolée entourée de collines boisées, une armée retranchée fut assiégée après que l'ennemi eut hissé son artillerie sur les pentes voisines.",
    explanation: "À Diên Biên Phu, les forces vietminh hissèrent pièce par pièce de l'artillerie lourde sur des pentes couvertes de jungle et enterrèrent les canons dans des positions camouflées surplombant la base française. Le siège se solda par une défaite décisive qui mit fin à la domination coloniale française dans la région.",
  },
  bretton_woods_system: {
    name: "Système de Bretton Woods",
    clue: "Au pied du plus haut sommet d'une chaîne de montagnes, des délégués de dizaines de pays arrimèrent leurs monnaies à l'or via une devise unique, dans un hôtel.",
    explanation: "Des délégués de 44 pays se réunirent au Mount Washington Hotel pour concevoir un nouveau système monétaire mondial après la guerre, arrimant les monnaies au dollar américain, lui-même convertible en or. L'accord créa aussi le Fonds monétaire international et la Banque mondiale.",
  },
  newton_birth: {
    name: "Isaac Newton",
    clue: "Né prématuré, pas attendu vivant, dans un manoir rural en pleine campagne, il formula les lois de la gravité en voyant tomber une pomme, en pleine peste.",
    explanation: "Isaac Newton est né au manoir de Woolsthorpe, deux mois avant terme et si petit que sa mère disait qu'il tenait dans une chope. Il développa sa théorie de la gravité en partie pendant un isolement forcé chez lui, quand une épidémie de peste ferma l'université qu'il fréquentait.",
  },
  ibn_battuta_birth: {
    name: "Ibn Battuta",
    clue: "Né dans une ville côtière où un détroit rejoint l'océan, ce voyageur parcourut environ 120 000 km en trois décennies, plus que tout explorateur avant lui.",
    explanation: "Ibn Battuta est né à Tanger. Parti en pèlerinage dans sa vingtaine, il continua de voyager pendant près de trente ans, traversant l'Afrique du Nord et de l'Ouest, le Moyen-Orient, l'Asie centrale et méridionale, et la Chine, avant de dicter le récit de ses voyages, connu sous le nom de Rihla.",
  },
  nazca_lines: {
    name: "Lignes de Nazca",
    clue: "Sur un haut plateau désertique et aride, une civilisation ancienne traça d'immenses lignes et figures animales, visibles seulement depuis les airs.",
    explanation: "Les lignes de Nazca furent créées en retirant les pierres sombres de la surface pour révéler le sol plus clair en dessous, dessinant des formes dont un colibri, un singe et une araignée. Le désert recevant presque ni pluie ni vent, beaucoup de ces lignes ont survécu intactes pendant plus d'un millénaire.",
  },
  ur_mesopotamia: {
    name: "Ur",
    clue: "Près d'une embouchure fluviale, cette cité liée à la naissance d'un patriarche biblique prospéra des millénaires avant que le littoral ne recule et l'isole.",
    explanation: "Ur se développa d'un modeste établissement jusqu'à devenir une importante cité-État sumérienne de la Mésopotamie antique, traditionnellement identifiée dans la Bible hébraïque comme le lieu de naissance du patriarche Abraham. L'Euphrate a depuis changé de cours, et le site, autrefois un port animé, se trouve aujourd'hui loin des terres dans le sud de l'Irak.",
  },
  charminar: {
    name: "Charminar",
    clue: "Sur un haut plateau intérieur, un souverain fit bâtir un monument à quatre minarets pour marquer la fin d'une épidémie de peste qui avait frappé sa ville.",
    explanation: "Le Charminar fut construit à Hyderabad par un souverain local, selon la tradition pour marquer la fin d'une épidémie de peste et la fondation d'une nouvelle ville. Ses quatre minarets restent le symbole le plus connu de la ville, qu'il a dominée en hauteur pendant près de quatre siècles.",
  },
  du_fu_birth: {
    name: "Du Fu",
    clue: "Né près d'un méandre d'un grand fleuve, ce poète écrivit près de 1 500 poèmes, mort pauvre avant d'être salué comme l'un des plus grands écrivains de son pays.",
    explanation: "Du Fu est né près de Gongxian, non loin du fleuve Jaune. Bien que peu reconnu de son vivant, ses quelque 1 500 poèmes conservés lui valurent plus tard la réputation d'être l'un des plus grands poètes de sa langue.",
  },
  abu_nuwas_birth: {
    name: "Abu Nuwas",
    clue: "Né sur une plaine chaude, ce poète transforma des vers scandaleux sur le vin en grande littérature, devenant plus tard un personnage rusé de contes célèbres.",
    explanation: "Abu Nuwas est né à Ahvaz. Sa poésie spirituelle et souvent scandaleuse, célébrant le vin et le plaisir, rompait nettement avec les traditions poétiques plus anciennes inspirées du désert, et il apparaît plus tard comme un personnage rusé dans les Mille et Une Nuits.",
  },
  la_fontaine_birth: {
    name: "Jean de La Fontaine",
    clue: "Né près d'une rivière, ce poète resta loyal à son protecteur après sa chute et son emprisonnement, écrivant des fables apprises par les écoliers.",
    explanation: "Jean de La Fontaine est né à Château-Thierry. Quand son protecteur, un puissant ministre des Finances, fut arrêté pour corruption, La Fontaine prit le risque de la colère royale en plaidant publiquement pour sa libération. Ses Fables, mettant en scène des animaux parlants incarnant les vices et vertus humains, devinrent un modèle imité par des fabulistes dans tout le continent.",
  },
  bunin_birth: {
    name: "Ivan Bounine",
    clue: "Né sur une vaste plaine intérieure, cet écrivain fut le premier de sa langue à recevoir un prix Nobel de littérature, rédigeant son œuvre majeure en exil.",
    explanation: "Ivan Bounine est né près de Voronej. Après avoir quitté son pays natal à la suite de bouleversements politiques, il s'installa à l'étranger et y écrivit une grande partie de son œuvre la plus connue, avant de recevoir son prix Nobel.",
  },
  masaccio_birth: {
    name: "Masaccio",
    clue: "Né dans une ville de collines, ce peintre maîtrisa la perspective réaliste, puis mourut à vingt-six ans, ayant déjà transformé la peinture pour toujours.",
    explanation: "Masaccio est né à San Giovanni Valdarno. Sa maîtrise de la perspective et de la lumière naturaliste rendit son petit corpus de fresques conservées immensément influent sur les peintres qui lui succédèrent, bien qu'il soit mort subitement alors qu'il était encore dans la vingtaine.",
  },
  treaty_of_pyrenees: {
    name: "Traité des Pyrénées",
    clue: "Sur une île au milieu d'un fleuve frontalier, deux royaumes mirent fin à une longue guerre ; la souveraineté de l'île alterne encore tous les six mois.",
    explanation: "Le traité des Pyrénées mit fin à une longue guerre entre la France et l'Espagne et fut négocié sur l'île des Faisans, une petite île de la Bidassoa. La souveraineté de l'île alterne depuis entre les deux pays tous les six mois, un arrangement toujours respecté aujourd'hui.",
  },
  austrian_state_treaty: {
    name: "Traité d'État autrichien",
    clue: "Dans un palais d'une capitale divisée et occupée, quatre puissances restaurèrent la souveraineté du pays, à condition qu'il adopte une neutralité permanente.",
    explanation: "Le traité d'État autrichien fut signé au palais du Belvédère, à Vienne. Il mit fin à une décennie d'occupation par quatre puissances et restaura la pleine souveraineté autrichienne, à condition que le pays adopte une neutralité permanente, un statut qu'il conserve encore aujourd'hui.",
  },
  first_geneva_convention: {
    name: "Première convention de Genève",
    clue: "Dans une ville au bord d'un lac, un traité protégeant les blessés et le personnel médical en guerre fonda une organisation humanitaire encore active.",
    explanation: "La première convention de Genève fut signée à Genève pour garantir un traitement humain aux soldats blessés et protéger le personnel médical, quel que soit le camp qu'il servait. Elle posa les bases juridiques de ce qui deviendrait le mouvement de la Croix-Rouge.",
  },
  convention_of_kanagawa: {
    name: "Convention de Kanagawa",
    clue: "Une flotte de navires de guerre étrangers contraignit une nation insulaire isolée à ouvrir deux ports, après plus de deux siècles de quasi-isolement.",
    explanation: "La convention de Kanagawa fut signée après qu'une flotte de navires de guerre américains eut jeté l'ancre au large et contraint le gouvernement à ouvrir deux ports au commerce étranger, mettant fin à plus de deux siècles durant lesquels le pays avait fermé la plupart de ses contacts avec l'extérieur.",
  },
  montevideo_convention: {
    name: "Convention de Montevideo",
    clue: "Dans une capitale côtière sur un large estuaire, des délégués de dix-neuf pays définirent ce qui constitue légalement un État, une définition toujours citée.",
    explanation: "La convention de Montevideo fut signée à Montevideo par dix-neuf pays. Elle établit le test juridique classique de l'existence d'un État : une population permanente, un territoire défini, un gouvernement, et la capacité d'entrer en relation avec d'autres États, une définition encore citée en droit international aujourd'hui.",
  },
  minaret_of_jam: {
    name: "Minaret de Jam",
    clue: "Au fond d'une vallée isolée, un minaret de brique devint l'un des plus hauts bâtis dans ce matériau, redécouvert par des étrangers quelques décennies à peine.",
    explanation: "Le minaret de Jam s'élève à plus de 60 mètres dans une vallée isolée entre deux rivières, au centre de l'Afghanistan. Entièrement construit en brique cuite et orné de calligraphies et de motifs géométriques complexes, il est resté inconnu des chercheurs extérieurs jusqu'à une date étonnamment récente.",
  },
  khirokitia: {
    name: "Khirokitia",
    clue: "Sur une petite île, un habitat ancien bâtit des maisons de pierre rondes en forme de ruche et enterrait ses morts directement sous le sol des habitations.",
    explanation: "Khirokitia est l'un des habitats anciens les mieux conservés de la Méditerranée orientale. Ses maisons de pierre rondes n'avaient pas de fenêtres, et les morts étaient couramment enterrés dans des fosses creusées sous le sol des habitations où ils avaient vécu.",
  },
  bru_na_boinne: {
    name: "Brú na Bóinne",
    clue: "Dans un méandre d'une rivière, un tombeau à couloir fut bâti avec une telle précision que la lumière n'atteint sa chambre qu'au jour le plus court de l'année.",
    explanation: "Brú na Bóinne, dans un méandre de la rivière Boyne, comprend le tombeau à couloir de Newgrange. Sa chambre intérieure est construite avec une telle précision que la lumière n'y pénètre par une ouverture spéciale qu'autour du solstice d'hiver, l'illuminant quelques minutes chaque année.",
  },
  alodia_soba: {
    name: "Alodia",
    clue: "La capitale d'un royaume s'éleva près d'où deux fleuves de couleurs différentes fusionnent en l'un des plus célèbres fleuves ; elle prospéra des siècles durant.",
    explanation: "Alodia était un royaume situé dans l'actuel centre du Soudan. Sa capitale, Soba, se dressait sur le Nil Bleu, à une courte distance en amont du point où il rejoint le Nil Blanc pour former le Nil lui-même. Le royaume perdura pendant des siècles avant de décliner et de perdre son statut de puissance régionale.",
  },
  danevirke: {
    name: "Danevirke",
    clue: "Sur l'étroite langue d'une péninsule, un immense ouvrage défensif fut agrandi pendant plus d'un millénaire pour bloquer l'unique route menant à la région.",
    explanation: "Le Danevirke est un système de fortifications en terre construit en travers de la base d'une péninsule pour bloquer l'unique voie terrestre menant à la région depuis le sud. Élevé pour la première fois au début du Moyen Âge, il fut agrandi à plusieurs reprises sur plus d'un millénaire et servit pour la dernière fois lors d'une guerre survenue bien après sa construction initiale.",
  },
  buddha_birth: {
    name: "Bouddha",
    clue: "Né dans une famille royale au pied de l'Himalaya, il renonça à sa richesse pour chercher l'éveil, fondant l'une des plus grandes religions au monde.",
    explanation: "Siddhartha Gautama est né à Lumbini, fils du chef d'un clan dirigeant. Il quitta sa vie de palais pour devenir un ascète itinérant, et ses enseignements sur la souffrance et la libération devinrent le fondement du bouddhisme, aujourd'hui pratiqué par des centaines de millions de personnes dans le monde.",
  },
  michelangelo_birth: {
    name: "Michel-Ange",
    clue: "Né dans un petit village, ce sculpteur tailla un chef-d'œuvre dans un bloc de marbre rejeté par d'autres, puis peignit une immense fresque au plafond.",
    explanation: "Michel-Ange est né dans le village de Caprese. Il tailla sa célèbre statue dans un bloc de marbre que deux sculpteurs avant lui avaient abandonné comme irrécupérable, et peignit plus tard le plafond d'une importante chapelle presque entièrement seul.",
  },
  beethoven_birth: {
    name: "Ludwig van Beethoven",
    clue: "Né dans une petite ville sur le Rhin, ce compositeur continua de créer des œuvres célèbres même après être devenu complètement sourd.",
    explanation: "Ludwig van Beethoven est né à Bonn. Il commença à perdre l'ouïe dans la vingtaine et était presque totalement sourd lorsqu'il composa certaines de ses symphonies les plus célèbres, ressentant, dit-on, les vibrations de l'orchestre à travers le sol.",
  },
  wilde_birth: {
    name: "Oscar Wilde",
    clue: "Né dans une famille aisée, ce dramaturge devint l'un des écrivains les plus cités de son temps, puis emprisonné pour son homosexualité selon les lois d'alors.",
    explanation: "Oscar Wilde est né à Dublin. Célèbre pour son esprit acéré et ses pièces de théâtre, il fut plus tard condamné et emprisonné pour ses relations avec des hommes, à une époque où celles-ci étaient criminalisées, une expérience sur laquelle il écrivit après sa libération.",
  },
  andersen_birth: {
    name: "Hans Christian Andersen",
    clue: "Né pauvre, cet écrivain transforma des contes populaires en fées mettant en scène sirènes, vilains canards et empereurs nus, traduits en d'innombrables langues.",
    explanation: "Hans Christian Andersen est né à Odense, dans une famille pauvre. Ses contes de fées, dont beaucoup adaptés d'anciens récits populaires, ont été traduits dans plus de langues que presque toute autre œuvre littéraire.",
  },
  stonehenge: {
    name: "Stonehenge",
    clue: "Un cercle d'immenses pierres dressées, certaines transportées sur des centaines de kilomètres, fut aligné sur le soleil au jour le plus long de l'année.",
    explanation: "Stonehenge se dresse sur la plaine de Salisbury. Certaines de ses plus petites pierres bleues furent transportées depuis des carrières situées à environ 200 kilomètres, un exploit extraordinaire pour la technologie de l'époque, et le monument reste aligné avec le lever et le coucher du soleil aux solstices.",
  },
  pompeii: {
    name: "Pompéi",
    clue: "Une cité antique prospère fut ensevelie si soudainement sous la cendre volcanique que bâtiments, œuvres d'art et corps des victimes furent préservés intacts.",
    explanation: "Pompéi fut ensevelie sous plusieurs mètres de cendre et de pierre ponce après l'éruption d'un volcan voisin. La cendre durcit autour de matières organiques qui se décomposèrent ensuite, laissant des cavités que les archéologues remplirent de plâtre pour révéler les poses exactes des habitants et des animaux au moment de la catastrophe.",
  },
  darwin_birth: {
    name: "Charles Darwin",
    clue: "Né dans une famille aisée, ce naturaliste passa cinq ans à naviguer autour du monde, avant de publier sa théorie de l'évolution des espèces vivantes.",
    explanation: "Charles Darwin est né à Shrewsbury. Son tour du monde en tant que jeune naturaliste lui fournit les observations qui menèrent, des décennies plus tard, à sa théorie de l'évolution par sélection naturelle.",
  },
  edison_birth: {
    name: "Thomas Edison",
    clue: "Né dans une famille nombreuse, cet inventeur déposa plus de mille brevets, dont l'ampoule électrique, le phonographe et une des premières caméras de cinéma.",
    explanation: "Thomas Edison est né à Milan, dans l'Ohio. Il créa l'un des premiers laboratoires de recherche industrielle, où des équipes l'aidèrent à développer et à breveter des inventions à un rythme remarquable tout au long de sa carrière.",
  },
  copernicus_birth: {
    name: "Nicolas Copernic",
    clue: "Né dans une famille de marchands, cet astronome proposa que le soleil, non la terre, soit le centre de l'univers, une théorie publiée alors qu'il agonisait.",
    explanation: "Nicolas Copernic est né à Toruń. Il travailla sur son modèle héliocentrique pendant des décennies mais retarda sa publication par crainte du ridicule, ne recevant, dit-on, un exemplaire imprimé de son livre que le jour de sa mort.",
  },
  pearl_harbor: {
    name: "Attaque de Pearl Harbor",
    clue: "Au milieu d'un vaste océan, une attaque aérienne surprise coula ou endommagea vingt navires en deux heures, entraînant un pays neutre dans le conflit.",
    explanation: "L'attaque de Pearl Harbor visa la flotte au mouillage un calme dimanche matin. L'assaut surprise détruisit ou endommagea presque toute la flotte de cuirassés qui y était stationnée et entraîna les États-Unis dans la guerre dès le lendemain.",
  },
  agincourt: {
    name: "Bataille d'Azincourt",
    clue: "Une armée d'archers très inférieure en nombre abattit des milliers de chevaliers si embourbés que beaucoup suffoquèrent sous le poids des corps tombés.",
    explanation: "À Azincourt, une armée inférieure en nombre s'appuya sur des archers massés pour briser la charge de chevaliers lourdement armés, englués dans une boue profonde et fraîchement labourée. Beaucoup tombèrent sans pouvoir se relever sous le poids de leur armure, certains écrasés ou étouffés sous des monceaux de leurs propres compagnons.",
  },
  little_bighorn: {
    name: "Bataille de Little Bighorn",
    clue: "Un célèbre commandant de cavalerie et son bataillon furent anéantis en une heure en attaquant un campement bien plus vaste de nations autochtones alliées.",
    explanation: "À Little Bighorn, un régiment de cavalerie mené par un général célèbre pour ses victoires antérieures divisa ses forces et attaqua un immense campement, en sous-estimant sa taille. Lui et environ 200 de ses hommes furent tués durant l'affrontement qui suivit.",
  },
  franz_ferdinand: {
    name: "Assassinat de François-Ferdinand",
    clue: "Un héritier royal fut assassiné par un nationaliste, peu après l'échec d'un premier attentat, un acte souvent cité comme l'étincelle d'une guerre mondiale.",
    explanation: "L'archiduc François-Ferdinand survécut à un premier attentat à la grenade ce matin-là, avant d'être abattu avec son épouse plus tard dans la journée, après que son chauffeur eut pris un mauvais virage, passant droit devant le tireur. Ce meurtre déclencha une chaîne d'alliances qui entraîna une grande partie du monde dans la guerre en quelques semaines.",
  },
  gettysburg: {
    name: "Bataille de Gettysburg",
    clue: "Menée sur trois jours, cette bataille fit plus de morts qu'aucune autre d'une guerre civile, avant d'accueillir l'un des discours les plus cités de l'histoire.",
    explanation: "La bataille de Gettysburg repoussa une invasion du Nord et est souvent considérée comme le tournant de la guerre. Des mois plus tard, le président prononça un court discours lors de l'inauguration du cimetière du champ de bataille, devenu l'un des plus cités de l'histoire du pays.",
  },
  columbus_birth: {
    name: "Christophe Colomb",
    clue: "Né dans une ville portuaire au bord de la Méditerranée, un marin convainc une cour royale de financer un voyage vers les Indes et atteint des îles inconnues.",
    explanation: "Christophe Colomb effectue quatre voyages à travers l'océan, mais n'admet jamais avoir découvert un nouveau continent, affirmant jusqu'à sa mort avoir atteint les confins des Indes.",
  },
  chaplin_birth: {
    name: "Charlie Chaplin",
    clue: "Né dans la pauvreté au cœur d'une ville grise et surpeuplée, un garçon devient la figure comique la plus reconnue du cinéma, célèbre pour son chapeau melon.",
    explanation: "Chaplin crée le personnage du Vagabond, un errant miséreux mais digne, dont les films font de lui l'une des toutes premières vedettes mondiales du cinéma, reconnu sur tous les continents.",
  },
  disney_birth: {
    name: "Walt Disney",
    clue: "Né dans une famille nombreuse au sein d'une grande ville, un garçon passionné de dessin crée une souris facétieuse et bâtit un empire du divertissement mondial.",
    explanation: "Le studio de Walt Disney produit l'un des tout premiers longs métrages d'animation, puis il fait construire des parcs à thème qui deviennent parmi les destinations les plus visitées au monde.",
  },
  nobel_birth: {
    name: "Alfred Nobel",
    clue: "Né au bord de la Baltique, un chimiste invente un puissant explosif destiné aux mines, puis finance des prix récompensant la paix et les sciences.",
    explanation: "Alfred Nobel détient plus de 350 brevets au cours de sa vie et est troublé par une nécrologie le qualifiant à tort de marchand de mort, ce qui le pousse à léguer sa fortune pour récompenser des réalisations bénéfiques à l'humanité.",
  },
  bach_birth: {
    name: "Jean-Sébastien Bach",
    clue: "Né dans une famille ayant produit plusieurs générations de musiciens municipaux, un garçon devient l'un des plus grands compositeurs de musique religieuse.",
    explanation: "Bach compose des centaines d'œuvres pour orgue, chœur et orchestre tout en travaillant comme musicien d'église, mais sa musique tombe en désuétude après sa mort avant d'être largement redécouverte des décennies plus tard grâce à des compositeurs admiratifs.",
  },
  tolstoy_birth: {
    name: "Léon Tolstoï",
    clue: "Né dans une famille noble sur un vaste domaine rural, un écrivain produit des romans fleuves sur la guerre et la société parmi les plus admirés jamais écrits.",
    explanation: "Tolstoï finit par renoncer à sa fortune et à son titre, adoptant une philosophie simple et non-violente qui influencera plus tard des dirigeants politiques à la tête de grands mouvements pour les droits civiques et l'indépendance.",
  },
  hokusai_birth: {
    name: "Katsushika Hokusai",
    clue: "Né au bord d'une baie, dans une vaste ville, un artiste devient célèbre pour une estampe d'une immense vague, l'une des images les plus reproduites de l'art.",
    explanation: "Hokusai crée des milliers d'estampes et de peintures au cours d'une longue carrière, signant ses dernières œuvres sous le nom de vieillard fou de dessin, perfectionnant encore sa technique jusqu'à ses derniers jours.",
  },
  battle_of_stalingrad: {
    name: "Bataille de Stalingrad",
    clue: "Le long de la Volga, une bataille de plusieurs mois pour une ville tourne aux combats de rue durant un hiver glacial, tournant décisif d'une guerre mondiale.",
    explanation: "La bataille s'achève par l'encerclement complet d'une armée contrainte de se rendre, une défaite si importante qu'elle marque un basculement durable de l'élan en faveur du camp qui se défendait, pour le reste du conflit.",
  },
  jfk_assassination: {
    name: "Assassinat de John F. Kennedy",
    clue: "Un président est abattu au passage d'une voiture décapotable dans une foule en liesse, l'instant filmé sous plusieurs angles et débattu sans fin depuis.",
    explanation: "Kennedy est tué alors qu'il saluait la foule depuis un cortège officiel, et la scène est filmée par un témoin, devenant l'une des images les plus étudiées jamais réalisées, alimentant des décennies de théories concurrentes sur les responsables.",
  },
  bin_laden_killing: {
    name: "Mort d'Oussama ben Laden",
    clue: "Dans une paisible ville de collines près d'une académie militaire, des soldats d'élite prennent d'assaut de nuit un complexe, visant l'homme le plus recherché.",
    explanation: "L'opération met fin à une décennie de traque de l'homme responsable d'un attentat terroriste majeur, et son corps est ensuite immergé en mer pour empêcher que sa tombe ne devienne un lieu de pèlerinage.",
  },
  gateway_arch: {
    name: "Gateway Arch",
    clue: "Au bord d'un large fleuve qui portait les colons vers la frontière, une arche étincelante en acier s'élève comme la plus haute arche du monde.",
    explanation: "Le Gateway Arch adopte une courbe en chaînette conçue pour que sa hauteur soit égale à la distance entre ses deux pieds au sol, et un système de tramway intérieur transporte les visiteurs jusqu'à une plateforme d'observation à son sommet.",
  },
  abu_simbel: {
    name: "Abou Simbel",
    clue: "Taillées dans une falaise au bord d'un fleuve coulant entièrement vers le nord à travers le désert, d'immenses statues d'un roi gardent un temple.",
    explanation: "Les temples d'Abou Simbel sont découpés en blocs et reconstruits en hauteur lors d'une vaste opération internationale de sauvetage, après qu'un nouveau barrage a menacé d'engloutir le site, l'un des projets de préservation du patrimoine les plus ambitieux jamais menés.",
  },
  pasteur_birth: {
    name: "Louis Pasteur",
    clue: "Né dans une petite ville entourée de collines couvertes de vignes, un chimiste démontre que des microbes invisibles causent maladies et fermentation.",
    explanation: "Pasteur met au point un traitement thermique qui élimine les microbes nuisibles du lait et du vin sans en altérer le goût, puis crée le premier vaccin contre la rage, le testant sur un garçon mordu par un animal infecté.",
  },
  amundsen_birth: {
    name: "Roald Amundsen",
    clue: "Né dans une petite ville côtière près d'un fjord profond, un explorateur mène la première expédition à atteindre le pôle Sud, devançant un rival de peu.",
    explanation: "L'équipe d'Amundsen utilise skis et traîneaux à chiens pour se déplacer efficacement sur la glace, tandis qu'une expédition rivale s'appuyant sur des poneys et des traîneaux tirés à la main périt sur le chemin du retour.",
  },
  dali_birth: {
    name: "Salvador Dalí",
    clue: "Né dans une petite ville sur une plaine fertile près d'une chaîne de montagnes, un peintre devient célèbre pour ses montres fondantes et images surréalistes.",
    explanation: "Dalí collabore avec des cinéastes sur une séquence de rêve et participe à la conception d'un logo célèbre encore utilisé par une marque de confiseries, illustrant une influence allant bien au-delà de la peinture, jusqu'au cinéma et à l'art commercial.",
  },
  lisbon_earthquake: {
    name: "Séisme de Lisbonne",
    clue: "Au large d'une côte rocheuse, un matin de fête religieuse, un séisme sous-marin déclenche incendies et raz-de-marée qui dévastent une capitale.",
    explanation: "Le séisme, les incendies et le raz-de-marée tuent des dizaines de milliers de personnes et détruisent la majeure partie de la ville en quelques heures, suscitant l'une des toutes premières tentatives d'étude scientifique systématique des causes et effets d'un tremblement de terre.",
  },
  battle_of_vienna: {
    name: "Bataille de Vienne",
    clue: "Sur une plaine fluviale près d'une capitale assiégée, une armée de secours lance la plus grande charge de cavalerie de l'histoire en une après-midi.",
    explanation: "La charge de l'armée de secours est menée par un roi arrivé avec des milliers de lanciers lourdement blindés, et la bataille marque la dernière grande tentative d'expansion de la puissance assiégeante vers le cœur du continent.",
  },
  battle_of_tours: {
    name: "Bataille de Poitiers",
    clue: "Une armée de cavaliers venue d'une péninsule conquise peu avant s'enfonce en territoire étranger, stoppée en un jour par une infanterie lourdement armée à pied.",
    explanation: "Le chef vainqueur reçut le surnom d'un outil de forgeron pour la force écrasante de sa ligne d'infanterie, et cette victoire aida sa famille à fonder une nouvelle dynastie royale en l'espace d'une génération.",
  },
  tower_of_hercules: {
    name: "Tour d'Hercule",
    clue: "Sur un promontoire rocheux balayé par les vents, des ingénieurs antiques construisent un phare de pierre guidant encore les navires deux mille ans plus tard.",
    explanation: "La tour d'Hercule est le plus ancien phare du monde encore en fonctionnement, et la légende raconte qu'il fut construit sur les restes d'un géant mythique vaincu par le héros dont il porte le nom.",
  },
  shaanxi_earthquake: {
    name: "Séisme du Shaanxi",
    clue: "Dans une région d'habitations creusées à flanc de falaise, un séisme les effondre en une nuit, tuant plus que tout autre séisme connu.",
    explanation: "Les estimations modernes situent le nombre de victimes autour de 830 000 personnes, un record encore inégalé pour un séisme unique, et la catastrophe pousse à la rédaction de premiers écrits chinois sur les secours et la reconstruction après sinistre.",
  },
  battle_of_verdun: {
    name: "Bataille de Verdun",
    clue: "Le long de la Meuse, des défenseurs tiennent une ville fortifiée durant la plus longue bataille d'une guerre mondiale, refusant de laisser passer l'ennemi.",
    explanation: "La bataille de Verdun a duré presque toute l'année et est devenue un symbole d'endurance nationale dans une guerre d'usure impitoyable. Les défenseurs de la ville ont forgé le serment de ne jamais laisser passer l'ennemi, une formule reprise plus tard dans d'autres conflits.",
  },
  battle_of_teutoburg_forest: {
    name: "Bataille de la forêt de Teutobourg",
    clue: "Dans une forêt détrempée et truffée de marécages cachés, un officier de confiance mène une embuscade qui anéantit trois légions entières en trois jours.",
    explanation: "Trois légions furent attirées hors de la route et détruites en trois jours par des guerriers menés par Arminius, un chef local formé comme officier avant de se retourner contre ses anciens commandants. La défaite mit fin pour de bon aux tentatives d'étendre l'empire au-delà du fleuve marquant sa frontière.",
  },
  battle_of_kosovo: {
    name: "Bataille du Kosovo",
    clue: "Un prince régional rallie des seigneurs alliés face à une armée bien plus nombreuse, et en l'espace d'un jour, les deux commandants adverses sont morts.",
    explanation: "La bataille du Kosovo opposa une coalition de seigneurs régionaux menée par le prince Lazar à une armée ottomane envahissante commandée par le sultan Mourad Ier. Mourad fut tué par un soldat qui s'approcha de sa tente en prétendant faire défection, et Lazar fut capturé puis exécuté une fois les combats terminés. L'affrontement devint une légende fondatrice dans la mémoire serbe, racontée dans des poèmes épiques pendant des siècles.",
  },
  carnation_revolution: {
    name: "Révolution des Œillets",
    clue: "Sur la côte atlantique, des soldats renversent en un jour une dictature de plusieurs décennies, et des civils glissent des fleurs rouges dans leurs fusils.",
    explanation: "La Révolution des Œillets a mis fin en moins d'une journée à des décennies de régime autoritaire au Portugal, presque sans effusion de sang. Son nom vient des fleurs offertes aux soldats par des civils, dont certaines finirent glissées dans le canon des fusils, et elle a ouvert la voie à des élections démocratiques et à l'indépendance des colonies africaines du Portugal.",
  },
  haitian_revolution: {
    name: "Révolution haïtienne",
    clue: "Sur une île sucrière des Caraïbes, des esclaves se soulèvent et, après des années de guerre, fondent la seule nation née d'une révolte d'esclaves victorieuse.",
    explanation: "La Révolution haïtienne a commencé par un soulèvement de travailleurs réduits en esclavage dans des plantations de sucre et de café. Après plus d'une décennie de guerre contre des armées coloniales et impériales, les insurgés ont obtenu l'indépendance complète, fondant Haïti comme la première nation au monde établie par d'anciens esclaves.",
  },
  council_of_constance: {
    name: "Concile de Constance",
    clue: "Là où trois pays se rejoignent au bord d'un grand lac, des dignitaires religieux passent des années à trancher entre trois hommes se disant chacun le vrai pape.",
    explanation: "Le Concile de Constance a mis fin au Grand Schisme d'Occident, une impasse de plusieurs décennies durant laquelle trois prétendants rivaux affirmaient chacun être le pape légitime. Le concile a destitué ou accepté la démission des trois hommes et en a élu un seul nouveau. Il a aussi condamné le réformateur Jan Hus, brûlé vif malgré la promesse d'un sauf-conduit pour venir y assister.",
  },
  hollywood_walk_of_fame: {
    name: "Allée des célébrités d'Hollywood",
    clue: "Dans une vaste ville bâtie autour du cinéma, des milliers d'étoiles en laiton incrustent les trottoirs, chacune honorant un nom du divertissement.",
    explanation: "Le Hollywood Walk of Fame incruste plus de 2 700 étoiles de terrazzo et de laiton le long des trottoirs d'Hollywood Boulevard et de Vine Street. Chaque étoile honore une personne ou, parfois, un personnage de fiction issu du cinéma, de la télévision, de la musique, de la radio ou du théâtre, et de nouveaux noms continuent d'y être ajoutés.",
  },
  valley_of_the_kings: {
    name: "Vallée des Rois",
    clue: "Sur la rive occidentale du Nil, des rois sont enterrés dans des tombes creusées dans la roche, dont un jeune roi dont le trésor fut retrouvé presque intact.",
    explanation: "La Vallée des Rois a servi de nécropole royale pour des pharaons et de puissants nobles pendant des siècles. La plupart des tombes furent pillées dans l'Antiquité, mais celle du jeune pharaon Toutânkhamon fut découverte encore largement intacte, son trésor formant la sépulture pharaonique la plus complète jamais retrouvée.",
  },
  valdivia_earthquake: {
    name: "Séisme de Valdivia",
    clue: "Sur la côte pacifique, le séisme le plus puissant jamais enregistré secoue le sol dix minutes, envoyant des vagues de tsunami traverser tout l'océan.",
    explanation: "Le séisme de Valdivia, au Chili, reste le plus puissant jamais enregistré par des instruments modernes, avec une magnitude comprise entre 9,4 et 9,6. Il a dévasté la ville de Valdivia et déclenché des vagues de tsunami qui ont traversé l'océan Pacifique, causant encore des dégâts et des morts jusqu'à Hawaï, au Japon et aux Philippines, de nombreuses heures après la fin de la secousse.",
  },
  krakatoa_eruption: {
    name: "Éruption du Krakatoa",
    clue: "Une île volcanique dans un détroit entre deux îles bien plus grandes explose dans un fracas toujours reconnu comme le son le plus fort jamais enregistré.",
    explanation: "L'éruption du Krakatoa a détruit la majeure partie de l'île en une série d'explosions, dont la plus forte fut entendue à environ 4 800 kilomètres de distance et reste le son le plus fort jamais enregistré scientifiquement. L'éruption a provoqué des vagues de tsunami qui ont tué des dizaines de milliers de personnes et teinté les couchers de soleil d'un rouge étrange partout dans le monde pendant des mois.",
  },
  mexico_1968_olympics: {
    name: "Jeux olympiques de Mexico",
    clue: "Dans une capitale d'altitude entourée de volcans, l'air raréfié aide à pulvériser des records, tandis que deux sprinteurs lèvent un poing ganté pendant l'hymne.",
    explanation: "Les Jeux olympiques de Mexico ont été les premiers organisés en Amérique latine et les premiers en haute altitude, ce qui a contribué à un record du monde du saut en longueur resté imbattu pendant des décennies. Sur le podium, les sprinteurs Tommie Smith et John Carlos ont chacun levé un poing ganté de noir pendant l'hymne, dans une protestation silencieuse devenue l'une des images les plus célèbres de l'histoire olympique.",
  },
  antwerp_1920_olympics: {
    name: "Jeux olympiques d'Anvers",
    clue: "Dans une ville portuaire en reconstruction après une guerre mondiale, des colombes sont lâchées et un drapeau à cinq anneaux flotte pour la première fois.",
    explanation: "Les Jeux olympiques d'Anvers furent les premiers organisés après une guerre mondiale et les premiers à hisser le drapeau olympique à cinq anneaux et à lâcher des colombes en symbole de paix. Les organisateurs ont aussi introduit le serment des athlètes, promettant une compétition loyale, une tradition toujours suivie lors de la cérémonie d'ouverture de chaque édition depuis.",
  },
  maiden_tower_baku: {
    name: "Tour de la Vierge",
    clue: "Sur un promontoire dominant la plus grande mer fermée du monde, une tour de pierre fut bâtie dans un but débattu: forteresse, phare, ou temple du feu.",
    explanation: "La Tour de la Vierge se dresse dans la vieille ville de Bakou, au bord de la mer Caspienne, la plus grande étendue d'eau intérieure de la planète. Les historiens débattent encore de sa fonction d'origine, entre observatoire astronomique et temple du feu zoroastrien, faute d'inscription ou de document expliquant pourquoi elle fut construite.",
  },
  karakorum: {
    name: "Karakorum",
    clue: "Sur une steppe venteuse loin de toute mer, les héritiers d'un conquérant nomade bâtissent une capitale, démantelée plus tard pour un monastère voisin.",
    explanation: "Karakorum a servi de capitale à l'empire mongol sous les successeurs de Gengis Khan, au cœur de l'immense territoire qu'ils contrôlaient à travers l'Asie. Après que la capitale impériale eut déménagé ailleurs, la ville a décliné, et une grande partie de ses pierres a été réutilisée pour construire un monastère bouddhiste voisin encore debout aujourd'hui.",
  },
  ottawa_treaty: {
    name: "Traité d'Ottawa",
    clue: "Dans une capitale enneigée, des dizaines de pays signent un traité interdisant une arme enfouie dans le sol qui mutile des civils bien après la fin des guerres.",
    explanation: "Le Traité d'Ottawa a interdit l'usage, la production et le stockage des mines antipersonnel, des armes qui continuaient à tuer et mutiler des civils longtemps après la fin des conflits qui les avaient posées. La campagne pour une interdiction a gagné une immense attention publique après que la princesse Diana s'est rendue dans des champs de mines en Angola et a traversé une zone déminée pour attirer l'attention sur la cause, peu avant la signature du traité.",
  },
  belovezh_accords: {
    name: "Accords de Belavezha",
    clue: "Dans un pavillon de chasse isolé en forêt ancienne, trois dirigeants dissolvent une vaste union de républiques s'étendant sur onze fuseaux horaires.",
    explanation: "Les accords de Belavezha ont été signés dans une datcha gouvernementale de la forêt de Białowieża par les dirigeants de la Russie, de l'Ukraine et de la Biélorussie. Le bref accord a déclaré qu'une vaste union de républiques avait cessé d'exister et créé à sa place une confédération plus souple, un tournant qui a redessiné la carte de l'Europe et de l'Asie.",
  },
  jorge_luis_borges_birth: {
    name: "Jorge Luis Borges",
    clue: "Né dans une capitale portuaire où un fleuve rejoint la mer, cet écrivain devient aveugle en dirigeant une bibliothèque, imaginant des bibliothèques infinies.",
    explanation: "Jorge Luis Borges est né à Buenos Aires. Il perdit progressivement la vue pendant des décennies alors qu'il dirigeait la bibliothèque nationale, plaisantant plus tard que le destin lui avait donné à la fois 800 000 livres et l'obscurité en même temps. Ses récits peuplés de bibliothèques infinies, de labyrinthes et de miroirs ont influencé des générations d'écrivains.",
  },
  edmund_hillary_birth: {
    name: "Edmund Hillary",
    clue: "Né entre deux ports naturels sur une étroite bande de terre, cet apiculteur devenu alpiniste atteint, avec un compagnon sherpa, le point culminant du globe.",
    explanation: "Edmund Hillary est né près d'Auckland et travailla comme apiculteur avant de se tourner vers l'alpinisme. Avec le sherpa Tenzing Norgay, il devint l'un des premiers grimpeurs confirmés à atteindre le sommet de l'Everest, dans le cadre d'une expédition menée par les Britanniques. Hillary consacra une grande partie de sa vie ultérieure à collecter des fonds pour construire des écoles et des hôpitaux pour les communautés sherpas de la région de l'Everest.",
  },
  cahokia: {
    name: "Cahokia",
    clue: "Au bord d'un grand fleuve, des bâtisseurs autochtones élèvent à la main des buttes de terre, formant une cité alors plus peuplée que la plupart des villes.",
    explanation: "Cahokia était la plus grande ville au nord du Rio Grande avant le contact européen, construite par la culture du Mississippi dans la plaine inondable en face de l'actuelle Saint-Louis. Son plus grand ouvrage, Monks Mound, demeure la plus grande structure de terre des Amériques en volume. La ville fut ensuite abandonnée pour des raisons encore débattues par les archéologues, peut-être liées à l'épuisement des ressources, aux inondations ou à des bouleversements sociaux.",
  },
  chiang_kai_shek_memorial_hall: {
    name: "Mémorial Tchang Kaï-chek",
    clue: "Sous un toit émaillé de bleu, une garde change de poste chaque heure dans une salle de marbre flanquée de deux théâtres, bâtie pour un ancien chef d'État.",
    explanation: "Le mémorial Tchang Kaï-chek a été construit à Taipei en l'honneur d'un ancien président et chef militaire. Sa statue de bronze et sa salle de marbre sont gardées en permanence, avec une cérémonie de relève de la garde élaborée exécutée chaque heure pile, attirant des foules de visiteurs venus observer ce rituel précis et chorégraphié.",
  },
  battle_of_the_somme: {
    name: "Bataille de la Somme",
    clue: "Dans des tranchées boueuses, une armée perd plus de soldats en un jour qu'aucune autre, durant une guerre mondiale marquée par les premiers chars au combat.",
    explanation: "La bataille de la Somme opposa les armées de l'Empire britannique et de la France à l'Allemagne. Son premier jour reste le plus meurtrier de l'histoire militaire britannique, et elle marqua les débuts du char d'assaut au combat.",
  },
  battle_of_berlin: {
    name: "Bataille de Berlin",
    clue: "Dans la dernière grande bataille d'une guerre mondiale, un dictateur se suicide en bunker pendant que l'ennemi encercle le quartier du pouvoir.",
    explanation: "La bataille de Berlin fut l'ultime offensive de l'Union soviétique contre l'Allemagne nazie lors de la Seconde Guerre mondiale. Adolf Hitler se donna la mort dans son bunker tandis que les troupes soviétiques progressaient vers le Reichstag.",
  },
  siege_of_mariupol: {
    name: "Siège de Marioupol",
    clue: "Lors d'une guerre récente, les défenseurs d'une ville portuaire assiégée résistent dans une immense aciérie, tenant des semaines sous terre avant de se rendre.",
    explanation: "Le siège de Marioupol s'inscrit dans l'invasion de l'Ukraine par la Russie. Après des semaines de bombardements, les derniers défenseurs de la ville résistèrent dans l'aciérie d'Azovstal avant de recevoir l'ordre de se rendre.",
  },
  independence_hall: {
    name: "Independence Hall",
    clue: "Dans une salle en briques, des délégués de treize colonies débattent et signent le texte proclamant l'indépendance de leur nation face à son roi.",
    explanation: "Independence Hall, à Philadelphie, est le lieu où la déclaration d'indépendance et la Constitution des États-Unis furent débattues puis adoptées. Le site est classé au patrimoine mondial de l'UNESCO.",
  },
  tangshan_earthquake: {
    name: "Séisme de Tangshan",
    clue: "Un séisme matinal rase une ville industrielle en quelques secondes, devenant le séisme le plus meurtrier jamais enregistré, son bilan réel restant contesté.",
    explanation: "Le séisme de Tangshan frappa la ville industrielle chinoise de Tangshan alors que la plupart des habitants dormaient. Le bilan officiel dépasse 242 000 morts, bien que de nombreux historiens estiment le bilan réel supérieur à 300 000.",
  },
  worlds_columbian_exposition: {
    name: "Exposition universelle de Chicago",
    clue: "Une exposition bâtie presque du jour au lendemain dévoile la première grande roue et éclaire ses bâtiments blancs d'un dispositif électrique inédit.",
    explanation: "L'Exposition universelle de Chicago célébrait l'arrivée de Christophe Colomb sur le continent américain. Sa grande roue fut la toute première jamais construite, et sa « ville blanche » néoclassique fut l'une des premières à être éclairée à grande échelle à l'électricité.",
  },
  assassination_of_mlk: {
    name: "Assassinat de Martin Luther King",
    clue: "Un dirigeant des droits civiques est abattu sur le balcon d'un motel routier, un soir, déclenchant des émeutes dans des dizaines de villes en quelques jours.",
    explanation: "Martin Luther King fut abattu au Lorraine Motel à Memphis alors qu'il préparait une marche de soutien aux éboueurs grévistes. Sa mort provoqua des troubles dans plus de 100 villes américaines.",
  },
  battle_of_hattin: {
    name: "Bataille de Hattin",
    clue: "Sur un flanc de colline aride près d'un volcan éteint, une armée coupée d'eau est écrasée par une force rivale, ouvrant la voie à la reprise d'une ville sainte.",
    explanation: "La bataille de Hattin vit les forces de Saladin anéantir l'armée croisée du royaume de Jérusalem près de la colline volcanique éteinte dite des Cornes de Hattin. Cette victoire ouvrit la voie à la reprise de Jérusalem peu après.",
  },
  battle_of_manzikert: {
    name: "Bataille de Manzikert",
    clue: "Près d'un grand lac montagneux, l'armée d'un empire est déroutée, son souverain capturé puis libéré contre rançon, ouvrant la région à de nouveaux venus.",
    explanation: "À Manzikert, les Turcs seldjoukides défirent l'armée byzantine et capturèrent l'empereur Romain IV. Cette défaite ouvrit l'Anatolie à une installation progressive des Turcs au fil des siècles suivants.",
  },
  battle_of_adrianople: {
    name: "Bataille d'Andrinople",
    clue: "Sur une vaste plaine, une cavalerie lourde écrase l'infanterie d'un empereur, mort au combat, un choc encore étudié comme un tournant militaire majeur.",
    explanation: "À Andrinople, la cavalerie gothique détruisit l'armée de l'empereur romain d'Orient Valens, qui mourut au combat. Cette bataille est souvent citée comme marquant le déclin de la légion d'infanterie lourde romaine.",
  },
  ctesiphon: {
    name: "Ctésiphon",
    clue: "Sur la rive d'un grand fleuve, une capitale royale de huit siècles bâtit l'arche encore reconnue comme la plus grande voûte en brique non armée au monde.",
    explanation: "Ctésiphon, sur le Tigre, fut la capitale des empires perses parthe puis sassanide pendant plus de 800 ans. Son arche, le Taq Kasra, demeure la plus grande voûte en brique non armée au monde.",
  },
  sichuan_earthquake: {
    name: "Séisme du Sichuan",
    clue: "Dans une province montagneuse, un séisme majeur déclenche 200 000 glissements de terrain et forme plus de 800 nouveaux lacs en bloquant des vallées de débris.",
    explanation: "Le séisme du Sichuan, en Chine, tua des dizaines de milliers de personnes et fut ressenti jusqu'à Pékin, Shanghai, Bangkok et Hanoï. Il déclencha le plus grand nombre de glissements de terrain jamais enregistré pour un seul séisme.",
  },
  james_cook: {
    name: "James Cook",
    clue: "Né dans un village agricole, un officier de marine cartographie un continent lointain et devient le premier étranger connu à atteindre un archipel isolé.",
    explanation: "James Cook est né à Marton, dans le Yorkshire. Il commanda trois expéditions dans le Pacifique pour la marine royale britannique, cartographiant la côte est de l'Australie et devenant le premier Européen connu à atteindre les îles Hawaï.",
  },
  john_nash: {
    name: "John Nash",
    clue: "Né dans une petite ville minière de montagne, un mathématicien élabore une théorie de l'équilibre qui transforme l'économie, adaptée dans un film oscarisé.",
    explanation: "John Nash est né à Bluefield, en Virginie-Occidentale. Ses travaux sur la théorie des jeux lui valurent un prix Nobel d'économie, et son combat contre la schizophrénie fut porté à l'écran dans Un homme d'exception.",
  },
  jane_austen: {
    name: "Jane Austen",
    clue: "Née dans un presbytère de village, une romancière écrit des comédies de mœurs mordantes d'abord publiées sans nom d'auteur, signées seulement « une dame ».",
    explanation: "Jane Austen est née dans le village de Steventon, où son père était pasteur. Ses romans, dont Orgueil et Préjugés, furent d'abord publiés anonymement, signés seulement « une dame ».",
  },
  franz_kafka: {
    name: "Franz Kafka",
    clue: "Né dans une ancienne ville impériale, un écrivain de cauchemars bureaucratiques demande à un ami de brûler ses manuscrits inédits après sa mort. L'ami refuse.",
    explanation: "Franz Kafka est né à Prague. Avant de mourir, il demanda à son ami Max Brod de détruire ses manuscrits inédits, dont Le Procès et Le Château. Brod refusa et les publia.",
  },
  frederic_chopin: {
    name: "Frédéric Chopin",
    clue: "Né dans un petit village, un compositeur quitte sa patrie encore jeune et n'y revient jamais, mais demande que son cœur y soit rapporté après sa mort.",
    explanation: "Frédéric Chopin est né près de Varsovie. Il quitta la Pologne à vingt ans et fit carrière à l'étranger, mais après sa mort à Paris, son cœur fut rapporté et scellé dans un pilier d'église.",
  },
  treaty_of_rapallo: {
    name: "Traité de Rapallo",
    clue: "Dans une station balnéaire, en marge de pourparlers internationaux, deux puissances isolées signent un accord surprise annulant leurs revendications mutuelles.",
    explanation: "Le traité de Rapallo fut signé entre l'Allemagne et la Russie soviétique dans la station balnéaire italienne de Rapallo, rétablissant leurs relations et annulant leurs revendications mutuelles. Il inquiéta la France et le Royaume-Uni, qui avaient exclu les deux puissances de la conférence de paix principale.",
  },
  dura_europos: {
    name: "Doura-Europos",
    clue: "Sur une falaise désertique dominant un fleuve, une ville ensevelie livre la plus ancienne maison chrétienne connue et une synagogue aux peintures murales rares.",
    explanation: "Doura-Europos fut une ville fortifiée sur l'Euphrate, en Syrie, abandonnée après un siège perse puis ensevelie sous le sable, ce qui la préserva remarquablement. Les fouilles y ont révélé la plus ancienne maison-église chrétienne connue et une synagogue aux peintures murales figuratives exceptionnelles.",
  },
  sybaris: {
    name: "Sybaris",
    clue: "Si réputée pour son luxe que son nom est devenu synonyme d'excès, une cité antique fut détruite quand une armée rivale détourna un fleuve pour la submerger.",
    explanation: "Sybaris était une cité grecque du sud de l'Italie, si associée au luxe que le mot « sybarite » désigne encore aujourd'hui une personne portée sur les plaisirs. La cité rivale de Crotone l'aurait détruite en détournant un fleuve sur ses ruines.",
  },
  charles_augustin_de_coulomb: {
    name: "Charles-Augustin de Coulomb",
    clue: "Né en province, un ingénieur découvre la loi décrivant comment des objets chargés s'attirent ou se repoussent, et aide à fonder la mécanique des sols.",
    explanation: "Charles-Augustin de Coulomb est né à Angoulême. Officier du génie, il formula la loi de Coulomb sur la force électrostatique et mena des travaux pionniers sur le frottement et la poussée des terres, à la base de la mécanique des sols moderne.",
  },
  maurice_maeterlinck: {
    name: "Maurice Maeterlinck",
    clue: "Né dans une ville froide du nord, un dramaturge écrivant en langue étrangère à sa région explore la mort et le sens de la vie en drames symbolistes primés.",
    explanation: "Maurice Maeterlinck est né à Gand, en Belgique flamande, mais écrivit son théâtre en français. Ses drames symbolistes, dont Pelléas et Mélisande et L'Oiseau bleu, lui valurent le prix Nobel de littérature.",
  },
  battle_of_the_alamo: {
    name: "Bataille de l'Alamo",
    clue: "Après treize jours de siège, une garnison minoritaire retranchée dans une vieille mission est submergée à l'aube, devenant un cri de ralliement pour la guerre.",
    explanation: "La bataille de l'Alamo vit les forces mexicaines de Santa Anna submerger les défenseurs texans retranchés dans la mission de l'Alamo, près de San Antonio. Malgré la défaite, elle devint le cri de ralliement « Remember the Alamo » pour le reste de la révolution texane.",
  },
  assassination_of_julius_caesar: {
    name: "Assassinat de Jules César",
    clue: "Lors d'une séance du sénat, un dirigeant tout juste proclamé maître à vie est poignardé par ses sénateurs, plongeant sa république dans la guerre civile.",
    explanation: "Jules César fut poignardé à mort par un groupe de sénateurs, dont Brutus et Cassius, lors d'une séance tenue au théâtre de Pompée, à Rome. Ce meurtre déclencha des guerres civiles qui mirent fin à la République romaine.",
  },
  western_wall: {
    name: "Mur des Lamentations",
    clue: "Des fidèles viennent du monde entier glisser des prières écrites dans les fissures d'un mur antique, dernier vestige d'une vaste plateforme sacrée.",
    explanation: "Le mur des Lamentations est le dernier vestige du mur de soutènement qui portait autrefois l'esplanade du Temple à Jérusalem. C'est l'un des lieux les plus saints du judaïsme, où les visiteurs glissent traditionnellement des prières écrites entre les pierres.",
  },
  grand_palace: {
    name: "Grand Palais",
    clue: "Un vaste palais royal aux toits scintillants et flèches dorées sert de résidence officielle à une monarchie depuis plus de deux siècles.",
    explanation: "Le Grand Palais de Bangkok est la résidence officielle des rois de Thaïlande depuis plus de deux siècles. Ses salles du trône et ses temples richement ornés restent parmi les sites les plus visités du pays.",
  },
  eyjafjallajokull_2010: {
    name: "Éruption de l'Eyjafjöll",
    clue: "Un volcan en éruption sous un glacier projette tant de cendres qu'il cloue au sol l'essentiel du trafic aérien d'un continent entier durant des jours.",
    explanation: "L'éruption de l'Eyjafjallajökull, en Islande, envoya un nuage de cendres au-dessus de l'espace aérien européen, clouant au sol des dizaines de milliers de vols et bloquant des millions de voyageurs pendant près d'une semaine.",
  },
  battle_of_kursk: {
    name: "Bataille de Koursk",
    clue: "En pleine campagne, la plus grande bataille de chars de l'histoire fait rage des semaines, son premier jour restant le plus coûteux jamais vu en combat aérien.",
    explanation: "La bataille de Koursk opposa l'Allemagne nazie à l'Union soviétique près de Koursk, en Russie. Elle reste la plus grande bataille de chars jamais menée et l'une des plus coûteuses de la Seconde Guerre mondiale.",
  },
  battle_of_bannockburn: {
    name: "Bataille de Bannockburn",
    clue: "Sur deux jours près d'un ruisseau, une armée minoritaire met en déroute les forces d'un roi envahisseur, un tournant vers l'indépendance des années plus tard.",
    explanation: "À Bannockburn, l'armée de Robert Bruce défit les forces anglaises du roi Édouard II. Cette victoire devint un moment charnière sur la voie de l'indépendance écossaise.",
  },
  battle_of_dunkirk: {
    name: "Bataille de Dunkerque",
    clue: "Acculées à la côte, des centaines de milliers de troupes sont évacuées de plages à découvert par une flotte improvisée de petits bateaux civils.",
    explanation: "La bataille de Dunkerque s'acheva par l'évacuation des troupes alliées depuis les plages françaises, alors que les forces allemandes progressaient. Des « petits navires » civils aidèrent à transporter plus de 300 000 soldats vers la Grande-Bretagne.",
  },
  battle_of_zama: {
    name: "Bataille de Zama",
    clue: "Malgré des dizaines d'éléphants de guerre, l'armée du général le plus redouté de l'histoire perd la bataille qui met fin à la guerre et le force à l'exil.",
    explanation: "À Zama, les forces romaines de Scipion l'Africain défirent l'armée carthaginoise d'Hannibal, mettant fin à la deuxième guerre punique. Carthage capitula et Hannibal fut contraint à l'exil.",
  },
  susa: {
    name: "Suse",
    clue: "L'une des plus anciennes villes du monde sert de capitale d'hiver à un vaste empire antique, et livre un célèbre code de lois emporté comme butin de guerre.",
    explanation: "Suse, dans l'Iran actuel, fut la capitale de l'Élam puis la capitale d'hiver de l'empire perse achéménide. Le Code d'Hammurabi y fut découvert, après avoir été emporté de Babylone comme butin de guerre des siècles plus tôt.",
  },
  steve_jobs: {
    name: "Steve Jobs",
    clue: "Né dans une ville côtière, un étudiant sans diplôme cofonde une entreprise informatique dans un garage, en est écarté, puis revient la mener au succès.",
    explanation: "Steve Jobs est né à San Francisco. Il cofonda Apple dans un garage avec Steve Wozniak, fut écarté de l'entreprise, puis y revint des années plus tard pour la mener vers un redressement spectaculaire.",
  },
  alexander_graham_bell: {
    name: "Alexander Graham Bell",
    clue: "Né dans une capitale froide du nord, un inventeur enseignant aux sourds dépose le brevet du premier appareil à transmettre une voix humaine par fil.",
    explanation: "Alexander Graham Bell est né à Édimbourg. Très investi dans l'éducation des sourds, il déposa le brevet du premier téléphone pratique et cofonda AT&T.",
  },
  carl_sagan: {
    name: "Carl Sagan",
    clue: "Né dans un arrondissement côtier dense, un astronome travaille sur les premières missions vers d'autres planètes puis devient célèbre à la télévision.",
    explanation: "Carl Sagan est né à Brooklyn, à New York. Il travailla sur les missions spatiales Mariner, Viking et Voyager, puis devint une figure familière du public en présentant la série télévisée Cosmos.",
  },
  agatha_christie: {
    name: "Agatha Christie",
    clue: "Née dans une ville balnéaire, une romancière policière disparaît onze jours durant, provoquant une chasse nationale avant de réapparaître sous un faux nom.",
    explanation: "Agatha Christie est née à Torquay, en Angleterre. Elle disparut un jour pendant onze jours, déclenchant d'immenses recherches, avant d'être retrouvée inscrite dans un hôtel sous un faux nom.",
  },
  andy_warhol: {
    name: "Andy Warhol",
    clue: "Né dans une ville industrielle, un artiste transforme boîtes de soupe et portraits de célébrités en art, inventant une formule sur la gloire éphémère.",
    explanation: "Andy Warhol est né à Pittsburgh. Figure majeure du pop art, il transforma les boîtes de soupe Campbell's et des portraits sérigraphiés de célébrités en icônes, popularisant l'expression des « 15 minutes de célébrité ».",
  },
  haruki_murakami: {
    name: "Haruki Murakami",
    clue: "Né dans une ancienne ville impériale, un romancier de fictions oniriques et surréalistes est aussi un marathonien assidu qui a écrit sur la course.",
    explanation: "Haruki Murakami est né à Kyoto. Ses romans oniriques mêlant les genres se sont vendus à des millions d'exemplaires dans le monde, et il a écrit un livre sur sa passion de toujours pour le marathon.",
  },
  black_january: {
    name: "Janvier noir",
    clue: "Alors qu'une vaste union se disloque, des chars entrent dans une ville pétrolière sous décret d'urgence, écrasant un soulèvement né d'émeutes ethniques.",
    explanation: "Janvier noir fut une répression militaire soviétique contre le mouvement nationaliste de Bakou, en Azerbaïdjan, alors que l'URSS s'effondrait. Chars et troupes soviétiques tuèrent des dizaines de civils sous un état d'urgence décrété.",
  },
  library_of_celsus: {
    name: "Bibliothèque de Celsus",
    clue: "Une façade de marbre à deux étages ornait une bibliothèque bâtie en hommage à un père par son fils, abritant jadis des milliers de rouleaux.",
    explanation: "La bibliothèque de Celsus, à Éphèse, fut bâtie comme monument funéraire au gouverneur romain Tiberius Julius Celsus par son fils. Sa façade ornée subsiste, et la bibliothèque abritait jadis des milliers de rouleaux.",
  },
  odeon_of_herodes_atticus: {
    name: "Odéon d'Hérode Atticus",
    clue: "Sur le versant d'une célèbre citadelle antique, un riche mécène bâtit un théâtre de pierre à la mémoire de son épouse, toujours utilisé pour des spectacles.",
    explanation: "L'Odéon d'Hérode Atticus se dresse au pied de l'Acropole d'Athènes. Il fut bâti par le riche sénateur romain Hérode Atticus à la mémoire de son épouse, et accueille encore aujourd'hui concerts et spectacles après restauration.",
  },
  vitus_bering: {
    name: "Vitus Béring",
    clue: "Né dans une petite ville côtière, un navigateur cartographie une côte lointaine pour un vaste empire, et meurt sur une île qui porte son nom.",
    explanation: "Vitus Béring est né à Horsens, au Danemark. Au service de la marine russe, il dirigea deux expéditions qui cartographièrent la côte nord-est de l'Asie et atteignirent l'Amérique du Nord, avant de mourir sur une île du détroit qui porte aujourd'hui son nom.",
  },
  battle_of_iwo_jima: {
    name: "Bataille d'Iwo Jima",
    clue: "Des troupes prennent une petite île volcanique pour ses pistes d'aviation, une photo d'un drapeau hissé au sommet devenant une image marquante de la guerre.",
    explanation: "La bataille d'Iwo Jima vit les forces américaines prendre cette île du Pacifique au Japon pour s'emparer de ses pistes d'aviation. La photo des Marines hissant le drapeau au sommet du mont Suribachi devint l'une des images les plus reproduites de la guerre.",
  },
  paris_agreement: {
    name: "Accord de Paris",
    clue: "Des délégués de près de deux cents pays concluent un accord historique, dans une grande capitale, pour lutter contre le réchauffement de la planète.",
    explanation: "L'Accord de Paris fut adopté lors d'une conférence des Nations unies sur le climat, à Paris, engageant près de 200 pays à agir ensemble pour limiter le réchauffement climatique.",
  },
  roman_forum: {
    name: "Forum romain",
    clue: "Une place rectangulaire fut jadis le cœur politique d'un vaste empire antique, ses ruines encore bordées de temples et de bâtiments officiels effondrés.",
    explanation: "Le Forum romain fut le centre politique, religieux et commercial de la Rome antique. Ses ruines, dont des temples et des bâtiments officiels effondrés, se dressent encore au cœur de la ville moderne.",
  },
  skara_brae: {
    name: "Skara Brae",
    clue: "Une tempête arrache des dunes côtières et révèle un village préhistorique si bien conservé que ses lits et étagères en pierre tiennent encore en place.",
    explanation: "Skara Brae est un village néolithique en pierre des Orcades, en Écosse, révélé quand une violente tempête arracha les dunes qui le recouvraient. Son mobilier de pierre est si bien conservé qu'il est antérieur à Stonehenge et à la grande pyramide de Gizeh.",
  },
  mexico_city_earthquake_1985: {
    name: "Séisme de Mexico",
    clue: "Un séisme au large d'une côte lointaine frappe pourtant durement une capitale distante, son sol d'ancien lac amplifiant violemment les secousses.",
    explanation: "Le séisme de Mexico a son origine à des centaines de kilomètres, sur la côte, mais le sol meuble de l'ancien lac sur lequel repose la capitale a violemment amplifié les secousses, faisant s'effondrer des centaines de bâtiments.",
  },
  siege_of_leningrad: {
    name: "Siège de Léningrad",
    clue: "Une armée bloque une grande ville du nord pendant plus de deux ans, provoquant une famine qui tue plus de civils qu'aucun siège connu, sans jamais la prendre.",
    explanation: "Le siège de Léningrad fut un blocus de la ville soviétique par les forces de l'Axe pendant 872 jours. Environ 1,5 million de personnes moururent, surtout de faim, dans ce qui reste le siège le plus meurtrier de l'histoire.",
  },
  battle_of_borodino: {
    name: "Bataille de la Moskova",
    clue: "La journée la plus meurtrière d'une longue série de guerres se joue aux portes d'une grande ville, tombée aux mains de l'envahisseur peu après.",
    explanation: "La bataille de la Moskova, livrée aux portes de Moscou lors de l'invasion française de la Russie, fut la journée la plus meurtrière des guerres napoléoniennes. Moscou tomba aux mains des Français à peine une semaine plus tard.",
  },
  battle_of_karbala: {
    name: "Bataille de Kerbala",
    clue: "Une petite caravane menée par le petit-fils du fondateur d'une grande religion est encerclée et tuée, un jour pleuré chaque année par des millions de fidèles.",
    explanation: "La bataille de Kerbala vit les forces du calife Yazid Ier encercler et tuer Husayn ibn Ali, petit-fils du prophète Mahomet, avec son petit groupe de compagnons. L'anniversaire, l'Achoura, reste l'un des jours les plus solennellement observés de l'islam chiite.",
  },
  battle_of_yarmouk: {
    name: "Bataille du Yarmouk",
    clue: "Près d'une rivière, une tempête de sable aveugle une armée lors d'une bataille qui met fin au règne d'un empire séculaire sur toute une région.",
    explanation: "La bataille du Yarmouk vit les forces arabes vaincre l'armée byzantine, aidées selon certains récits par une tempête de sable qui aveugla les défenseurs. Cette victoire mit fin à des siècles de domination byzantine sur la Syrie.",
  },
  templo_mayor: {
    name: "Templo Mayor",
    clue: "Une pyramide à double sanctuaire honorant des dieux de la guerre et de la pluie fut rebâtie six fois, avant que des conquérants n'y érigent une cathédrale.",
    explanation: "Le Templo Mayor fut le temple principal de Tenochtitlan, capitale aztèque, dédié aux dieux Huitzilopochtli et Tlaloc. Les conquistadors espagnols le détruisirent et bâtirent une cathédrale sur ses ruines.",
  },
  hedy_lamarr: {
    name: "Hedy Lamarr",
    clue: "Née dans une grande capitale ancienne, une vedette de cinéma coinvente en secret un système radio qui fonde la technologie sans fil actuelle.",
    explanation: "Hedy Lamarr est née à Vienne. Parallèlement à sa carrière hollywoodienne, elle coinventa pendant la Seconde Guerre mondiale un système radio à sauts de fréquence, une idée à l'origine du Wi-Fi et du Bluetooth.",
  },
  marco_polo: {
    name: "Marco Polo",
    clue: "Né dans une ville de lagune, un marchand parcourt une célèbre route commerciale et produit l'un des premiers récits détaillés d'un vaste empire loin à l'est.",
    explanation: "Marco Polo est né à Venise. Ses années passées à parcourir la route de la soie jusqu'à la cour mongole donnèrent naissance à un livre offrant aux Européens leur premier aperçu détaillé de la Chine sous la dynastie Yuan.",
  },
  john_von_neumann: {
    name: "John von Neumann",
    clue: "Né dans une capitale fluviale, un mathématicien conçoit une architecture mémoire-processeur que suivent presque tous les ordinateurs actuels.",
    explanation: "John von Neumann est né à Budapest. Son architecture définissant l'organisation de la mémoire et du processeur d'un ordinateur est devenue le modèle suivi par la quasi-totalité des ordinateurs modernes.",
  },
  edgar_allan_poe: {
    name: "Edgar Allan Poe",
    clue: "Né de comédiens itinérants dans une ville portuaire, un écrivain de contes macabres meurt mystérieusement, retrouvé délirant dans des habits d'emprunt.",
    explanation: "Edgar Allan Poe est né à Boston, de parents comédiens. Des décennies plus tard, il fut retrouvé délirant dans la rue, vêtu d'habits qui n'étaient pas les siens, et mourut peu après ; la cause n'a jamais été établie avec certitude.",
  },
  martin_luther: {
    name: "Martin Luther",
    clue: "Né dans une ville minière, un moine cloue quatre-vingt-quinze griefs sur une porte d'église, divisant une religion et changeant l'histoire d'un continent.",
    explanation: "Martin Luther est né à Eisleben, une ville minière de Saxe. Ses quatre-vingt-quinze thèses contestant les pratiques de l'Église déclenchèrent la Réforme protestante, et sa traduction allemande de la Bible façonna la langue elle-même.",
  },
  first_winter_olympics: {
    name: "Premiers Jeux olympiques d'hiver",
    clue: "Une semaine de sports en montagne enneigée n'est pas appelée Jeux olympiques à l'époque, mais sera reconnue plus tard comme les premiers Jeux d'hiver.",
    explanation: "La semaine des sports d'hiver de Chamonix se déroula dans les Alpes françaises et ne fut reconnue par le Comité international olympique que deux ans plus tard comme les premiers Jeux olympiques d'hiver.",
  },
  evian_accords: {
    name: "Accords d'Évian",
    clue: "Dans une ville thermale au bord d'un lac, des négociateurs actent la fin d'une guerre coloniale et l'indépendance d'une nation de l'autre côté de la mer.",
    explanation: "Les accords d'Évian furent signés dans la station thermale d'Évian-les-Bains, mettant fin à la guerre d'Algérie et actant l'indépendance de l'Algérie vis-à-vis de la France.",
  },
  messina_earthquake_1908: {
    name: "Séisme de Messine",
    clue: "Un séisme centré dans un détroit étroit détruit deux villes se faisant face, le plus meurtrier jamais enregistré sur le continent.",
    explanation: "Le séisme de Messine frappa le détroit de Messine, dévastant à la fois Messine, en Sicile, et Reggio de Calabre, sur le continent. Il reste le séisme le plus meurtrier de l'histoire européenne enregistrée.",
  },
  karl_landsteiner: {
    name: "Karl Landsteiner",
    clue: "Né près d'une grande capitale ancienne, un médecin découvre que le sang humain existe en groupes distincts, rendant enfin les transfusions sûres.",
    explanation: "Karl Landsteiner est né près de Vienne. Sa découverte des groupes sanguins ABO rendit les transfusions sanguines sûres et lui valut le prix Nobel de physiologie ou médecine.",
  },
  lope_de_vega: {
    name: "Lope de Vega",
    clue: "Né dans une grande capitale, un dramaturge écrit plus d'un millier de pièces selon certains, un rival le surnommant un phénix sans cesse renaissant.",
    explanation: "Lope de Vega est né à Madrid. L'un des dramaturges les plus prolifiques de l'histoire, il écrivit bien plus d'un millier de pièces et fut surnommé « le Phénix des esprits » par son confrère Miguel de Cervantès.",
  },
  assassination_of_lincoln: {
    name: "Assassinat d'Abraham Lincoln",
    clue: "Pendant une pièce de théâtre, un président est abattu d'une balle dans la tête par un acteur du camp vaincu d'une guerre civile, et meurt le lendemain.",
    explanation: "Abraham Lincoln fut abattu au théâtre Ford, à Washington, par John Wilkes Booth, sympathisant confédéré, alors qu'il assistait à une pièce. Il mourut le lendemain matin dans une maison de l'autre côté de la rue.",
  },
  assassination_of_gandhi: {
    name: "Assassinat du Mahatma Gandhi",
    clue: "Un vieux dirigeant indépendantiste est abattu en se rendant à une prière du soir dans le jardin d'un manoir, par un extrémiste hostile à son message d'unité.",
    explanation: "Le Mahatma Gandhi fut abattu dans le jardin de la Birla House, à New Delhi, par Nathuram Godse, un extrémiste nationaliste hindou hostile à son message d'unité religieuse.",
  },
  mesa_verde: {
    name: "Mesa Verde",
    clue: "Un peuple ancien bâtit des villages entiers de pierre dans les alcôves de falaises escarpées, puis les abandonna des siècles avant leur redécouverte.",
    explanation: "Le parc national de Mesa Verde protège des habitations troglodytiques bâties par les Ancestraux Puebloans à même les alcôves des falaises. Les sites furent abandonnés bien avant leur redécouverte et restent parmi les mieux conservés du pays.",
  },
  leshan_giant_buddha: {
    name: "Grand Bouddha de Leshan",
    clue: "Taillée dans une falaise au confluent de deux rivières, une figure de pierre assise de plus de soixante-dix mètres mit presque un siècle à être achevée.",
    explanation: "Le grand Bouddha de Leshan fut taillé dans une falaise au confluent des rivières Min et Dadu, en Chine. Avec ses 71 mètres de haut, il reste la plus haute statue de pierre pré-moderne au monde.",
  },
  louisiana_purchase_exposition: {
    name: "Exposition universelle de Saint-Louis",
    clue: "Une immense exposition universelle attire près de vingt millions de visiteurs et est traditionnellement créditée d'avoir popularisé le cornet de glace.",
    explanation: "L'Exposition universelle de Saint-Louis, aussi appelée Foire mondiale de Saint-Louis, attira près de 20 millions de visiteurs. Elle est traditionnellement créditée, non sans débat, d'avoir popularisé le cornet de glace aux États-Unis.",
  },
  battle_of_stamford_bridge: {
    name: "Bataille de Stamford Bridge",
    clue: "Un roi défait une invasion venue d'outre-mer, tuant l'envahisseur et son propre frère, avant de marcher affronter une seconde invasion trois semaines plus tard.",
    explanation: "À Stamford Bridge, le roi Harold Godwinson défit une invasion norvégienne menée par Harald Hardrada, tuant à la fois Hardrada et son propre frère Tostig. Harold marcha ensuite vers le sud, où son armée épuisée fut vaincue à Hastings moins de trois semaines plus tard.",
  },
  first_battle_of_the_marne: {
    name: "Première bataille de la Marne",
    clue: "Une armée à quarante kilomètres d'une capitale est stoppée net, des renforts étant envoyés au front dans une flotte de taxis citadins réquisitionnés.",
    explanation: "La première bataille de la Marne arrêta l'avancée allemande vers Paris au début de la Première Guerre mondiale. Des renforts furent célèbrement acheminés au front dans des taxis parisiens réquisitionnés, les « taxis de la Marne ».",
  },
  california_gold_rush: {
    name: "Ruée vers l'or en Californie",
    clue: "Quelques paillettes de métal trouvées près d'une scierie déclenchent une ruée de près de 300 000 personnes venues creuser et revendiquer des terrains.",
    explanation: "La ruée vers l'or en Californie débuta après la découverte d'or au moulin de Sutter. Environ 300 000 personnes affluèrent en Californie, précipitant son accession au statut d'État tout en dévastant les communautés amérindiennes locales.",
  },
  halicarnassus: {
    name: "Halicarnasse",
    clue: "Une cité côtière bâtit un tombeau si spectaculaire pour un souverain que le nom de l'édifice est devenu, depuis, le mot désignant tout tombeau grandiose.",
    explanation: "Halicarnasse, sur la côte de la Turquie actuelle, bâtit le mausolée de son souverain Mausole, l'une des sept merveilles du monde antique. Le mot « mausolée » vient directement de son nom.",
  },
  miletus: {
    name: "Milet",
    clue: "Un riche port marchand fonde tant de colonies que les historiens débattent encore de leur nombre, et il est vu comme le berceau de la philosophie elle-même.",
    explanation: "Milet, sur la côte de la Turquie actuelle, fut une puissance maritime prospère qui fonda de nombreuses colonies en Méditerranée et en mer Noire. Elle est souvent considérée comme le berceau de la philosophie occidentale, patrie de penseurs comme Thalès.",
  },
  ada_lovelace: {
    name: "Ada Lovelace",
    clue: "Née d'un poète célèbre qui la quitte avant ses deux ans, une mathématicienne écrit le premier programme informatique pour une machine jamais construite.",
    explanation: "Ada Lovelace est née à Londres, fille du poète Lord Byron. En travaillant avec Charles Babbage sur sa machine analytique jamais construite, elle écrivit ce qui est considéré comme le premier programme informatique.",
  },
  vasco_da_gama: {
    name: "Vasco de Gama",
    clue: "Né dans une petite ville côtière, un navigateur devient le premier à atteindre par la mer un lointain sous-continent en contournant un continent austral.",
    explanation: "Vasco de Gama est né à Sines, au Portugal. Il devint le premier Européen à relier directement l'Europe à l'Inde en contournant le cap de Bonne-Espérance, ouvrant une nouvelle route maritime vers l'Asie.",
  },
  niels_bohr: {
    name: "Niels Bohr",
    clue: "Né dans une capitale froide du nord, un physicien modélise l'orbite des électrons autour d'un noyau, transformant la science et lui valant un prix majeur.",
    explanation: "Niels Bohr est né à Copenhague. Son modèle de la structure atomique, décrivant des électrons occupant des niveaux d'énergie fixes, fut fondateur pour la théorie quantique et lui valut le prix Nobel de physique.",
  },
  fyodor_dostoyevsky: {
    name: "Fiodor Dostoïevski",
    clue: "Né dans une grande capitale, un romancier affronte un peloton d'exécution, gracié à la dernière minute et exilé dans un camp de travail à la place.",
    explanation: "Fiodor Dostoïevski est né à Moscou. Condamné à mort pour activité politique, il affronta un peloton d'exécution avant d'être gracié à la dernière minute et envoyé dans un camp de travail sibérien.",
  },
  mark_twain: {
    name: "Mark Twain",
    clue: "Né dans un petit village fluvial, un ancien pilote de bateau à vapeur choisit son nom de plume d'après un cri de marinier mesurant la profondeur sûre de l'eau.",
    explanation: "Mark Twain est né à Florida, dans le Missouri. Avant de devenir écrivain, il fut pilote de bateau à vapeur sur le Mississippi, et tira son nom de plume du cri des mariniers « mark twain », signifiant deux brasses d'eau sûre.",
  },
  treaty_of_brussels: {
    name: "Traité de Bruxelles",
    clue: "Plusieurs nations d'un même continent signent un pacte de défense militaire mutuelle, posant les bases d'une alliance bien plus vaste formée l'année suivante.",
    explanation: "Le traité de Bruxelles créa l'Union occidentale, un pacte de défense entre plusieurs nations d'Europe occidentale, posant les bases qui menèrent directement à la création de l'OTAN l'année suivante.",
  },
  bam_earthquake_2003: {
    name: "Séisme de Bam",
    clue: "Un séisme dévaste une ville désertique réputée pour sa citadelle antique en brique crue, ce même matériau condamnant aussi la plupart de ses maisons modernes.",
    explanation: "Le séisme de Bam frappa la ville iranienne de Bam, connue pour sa citadelle antique en brique crue, l'Arg-e Bam. La plupart des bâtiments modernes, eux aussi en brique crue, s'effondrèrent, tuant des dizaines de milliers de personnes.",
  },
  robert_bunsen: {
    name: "Robert Bunsen",
    clue: "Né dans une ville universitaire, un chimiste analyse la lumière émise par des éléments chauffés et découvre ainsi deux éléments chimiques inconnus.",
    explanation: "Robert Bunsen est né à Göttingen, en Allemagne. Grâce à la spectroscopie de flamme, il découvrit les éléments césium et rubidium. Le bec de laboratoire perfectionné pour ses expériences porte toujours son nom.",
  },
  theophile_gautier: {
    name: "Théophile Gautier",
    clue: "Né dans une ville du sud, un poète et critique invente la formule sur l'art sans autre utilité que sa beauté, influençant toute une génération d'écrivains.",
    explanation: "Théophile Gautier est né à Tarbes. Poète et critique, il défendit « l'art pour l'art », l'idée que la valeur de l'art réside dans sa seule beauté, influençant les écrivains symbolistes et décadents qui suivirent.",
  },
  first_council_of_nicaea: {
    name: "Premier concile de Nicée",
    clue: "Un empereur convoque des chefs religieux pour trancher un différend doctrinal, et leur credo est encore récité mot pour mot dans des églises du monde entier.",
    explanation: "Le premier concile de Nicée fut convoqué par l'empereur Constantin pour trancher des différends sur la doctrine chrétienne. Il produisit le Credo de Nicée, encore récité dans des églises du monde entier.",
  },
  fall_of_kabul: {
    name: "Chute de Kaboul",
    clue: "Un groupe insurgé ayant déjà dirigé le pays reprend la capitale presque sans combat, des foules s'accrochant à des avions en partance.",
    explanation: "La chute de Kaboul vit les forces talibanes s'emparer de la capitale afghane après une offensive rapide, mettant fin à la guerre en Afghanistan. Des scènes chaotiques se déroulèrent à l'aéroport alors que des milliers de personnes tentaient de fuir le pays.",
  },
  edinburgh_castle: {
    name: "Château d'Édimbourg",
    clue: "Une forteresse perchée sur le culot d'un volcan éteint est occupée depuis l'âge du fer, servant d'abord de résidence royale, puis de garnison militaire.",
    explanation: "Le château d'Édimbourg se dresse sur Castle Rock, le culot d'un volcan éteint occupé depuis l'âge du fer. Il servit de résidence royale pendant des siècles avant de devenir surtout une garnison militaire.",
  },
  san_francisco_earthquake_1906: {
    name: "Séisme de San Francisco",
    clue: "Un séisme rompt une faille visible, mais les incendies qui suivent, brûlant des jours durant, détruisent plus de la ville que le séisme lui-même.",
    explanation: "Le séisme de San Francisco rompit la faille de San Andreas. Les incendies qui suivirent brûlèrent pendant des jours et causèrent plus de destruction que le séisme lui-même, contribuant à fonder la sismologie moderne.",
  },
  great_exhibition: {
    name: "Grande Exposition",
    clue: "Dans un immense bâtiment de verre et de fer aux murs de cristal, la première foire industrielle internationale expose les inventions de toute une époque.",
    explanation: "La Grande Exposition se tint au Crystal Palace de Londres, une vaste structure de verre et de fer. Organisée par le prince Albert, elle fut la première d'une longue série d'expositions universelles célébrant l'industrie et la culture.",
  },
  battle_of_plassey: {
    name: "Bataille de Plassey",
    clue: "Une compagnie commerciale gagne une bataille surtout par la corruption, achetant en secret le commandant ennemi, lançant un siècle d'expansion territoriale.",
    explanation: "La bataille de Plassey vit la Compagnie britannique des Indes orientales vaincre le nabab du Bengale, en grande partie grâce à la trahison secrète de son commandant Mir Jafar. Cette victoire lança un siècle d'expansion britannique sur le sous-continent indien.",
  },
  battle_of_crecy: {
    name: "Bataille de Crécy",
    clue: "Des rangées d'archers, appuyés par quelques premiers canons de bataille, abattent des vagues de chevaliers, tôt dans une guerre entre deux maisons royales.",
    explanation: "À Crécy, les archers anglais infligèrent des pertes dévastatrices à la cavalerie française, l'une des défaites les plus déséquilibrées de la guerre de Cent Ans entre l'Angleterre et la France.",
  },
  assassination_of_soleimani: {
    name: "Assassinat de Qassem Soleimani",
    clue: "Un haut général est tué par un missile tiré depuis un drone alors que son convoi quitte un aéroport international, un acte ordonné par un chef d'État étranger.",
    explanation: "Qassem Soleimani, haut général iranien, fut tué par une frappe de drone américaine près de l'aéroport international de Bagdad, une opération ordonnée par le président Donald Trump. Cette mort fit brutalement monter les tensions régionales.",
  },
  uruk: {
    name: "Uruk",
    clue: "Considérée comme la première vraie ville au monde, elle serait aussi le lieu où l'écriture fut inventée, inspirant l'un des plus vieux poèmes épiques connus.",
    explanation: "Uruk, en Mésopotamie antique, est largement considérée comme la première vraie ville au monde et un possible berceau de l'écriture, sous forme cunéiforme. C'est aussi le décor de l'épopée de Gilgamesh, l'une des plus anciennes œuvres littéraires connues.",
  },
  tel_megiddo: {
    name: "Tel Megiddo",
    clue: "Des dizaines de cités antiques furent bâties l'une sur l'autre sur un site disputé des millénaires durant, son nom antique désignant une bataille apocalyptique.",
    explanation: "Tel Megiddo est un tertre formé de plus de vingt couches de cités antiques, disputé pendant des millénaires en raison de sa position stratégique. Son nom grec, Armageddon, en est venu à désigner la bataille finale décrite dans le livre de l'Apocalypse.",
  },
  wernher_von_braun: {
    name: "Wernher von Braun",
    clue: "Né sur un petit domaine rural, un ingénieur ayant conçu des armes pour un régime en guerre conçoit plus tard les fusées menant des astronautes sur la Lune.",
    explanation: "Wernher von Braun est né à Wirsitz, alors en territoire allemand. Il dirigea le développement de la fusée V2 pour le régime nazi, avant de concevoir plus tard les fusées Saturn V qui menèrent les astronautes de la NASA sur la Lune.",
  },
  archimedes: {
    name: "Archimède",
    clue: "Né dans une ville côtière, un mathématicien court dans les rues en criant après une intuition dans son bain, tué des années plus tard en pleine réflexion.",
    explanation: "Archimède est né à Syracuse, en Sicile. Il aurait couru nu dans les rues en criant « Eurêka ! » après avoir compris comment mesurer un volume par déplacement d'eau. Il fut tué par un soldat romain lors du sac de la ville, absorbé dans un problème de géométrie.",
  },
  ernest_hemingway: {
    name: "Ernest Hemingway",
    clue: "Né dans une banlieue tranquille, un romancier au style sobre et économe survit à deux accidents d'avion consécutifs lors d'un même safari.",
    explanation: "Ernest Hemingway est né à Oak Park, dans l'Illinois. Célèbre pour son style dépouillé, il survécut à deux accidents d'avion survenus deux jours de suite lors d'un même safari en Afrique.",
  },
  charles_dickens: {
    name: "Charles Dickens",
    clue: "Né dans une ville portuaire militaire, un romancier est retiré de l'école enfant pour travailler en fabrique de cirage, son père étant emprisonné pour dettes.",
    explanation: "Charles Dickens est né à Portsmouth. Enfant, il fut envoyé travailler dans une fabrique de cirage après l'emprisonnement de son père pour dettes, une expérience qui marqua ses romans sur la pauvreté et l'injustice sociale.",
  },
  gabriel_garcia_marquez: {
    name: "Gabriel García Márquez",
    clue: "Né dans une petite ville tropicale, un romancier élevé par des grands-parents aux histoires de fantômes mêle plus tard le magique et le quotidien en fiction.",
    explanation: "Gabriel García Márquez est né à Aracataca, en Colombie. Élevé en grande partie par ses grands-parents, dont les récits de fantômes et légendes familiales nourrirent sa fiction, il devint un pionnier du réalisme magique et remporta le prix Nobel de littérature.",
  },
  temple_of_zeus_olympia: {
    name: "Temple de Zeus à Olympie",
    clue: "Un temple de style classique abrita jadis une statue géante d'or et d'ivoire comptée parmi les sept merveilles du monde antique, sur le site des jeux originels.",
    explanation: "Le temple de Zeus à Olympie abrita jadis une statue colossale de Zeus en or et en ivoire, l'une des sept merveilles du monde antique, dans le sanctuaire où se tenaient les jeux olympiques antiques.",
  },
  herodium: {
    name: "Hérodion",
    clue: "Un roi bâtit un palais fortifié désertique au sommet d'une colline artificielle en forme de cône visible à des kilomètres, et y fut plus tard enseveli lui-même.",
    explanation: "L'Hérodion fut un palais fortifié bâti par Hérode le Grand au sommet d'une colline artificielle en forme de cône, dans le désert de Judée. Les archéologues y ont découvert ce qui serait sa propre tombe.",
  },
  niels_henrik_abel: {
    name: "Niels Henrik Abel",
    clue: "Né sur une petite île côtière, un mathématicien prouve qu'un problème vieux de deux siècles était impossible à résoudre, puis meurt pauvre dans la vingtaine.",
    explanation: "Niels Henrik Abel est né sur l'île de Finnøy, en Norvège. Il prouva que l'équation générale du cinquième degré ne pouvait être résolue par radicaux, mettant fin à un problème ouvert depuis plus de deux siècles, mais mourut tuberculeux et pauvre à vingt-six ans.",
  },
  bartolome_esteban_murillo: {
    name: "Bartolomé Esteban Murillo",
    clue: "Né dans une ville fluviale du sud, un peintre baroque connu pour ses œuvres religieuses capture aussi des enfants des rues avec un réalisme saisissant.",
    explanation: "Bartolomé Esteban Murillo est né à Séville. Bien que surtout connu pour ses peintures religieuses, il produisit aussi des portraits vivants et réalistes des bouquetières, gamins des rues et mendiants de sa ville.",
  },
};
