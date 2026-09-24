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
};
