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
    clue: "Aux portes du delta du Nil, une pyramide géante construite comme tombeau royal est restée la structure la plus haute au monde pendant plus de 3 800 ans.",
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
    clue: "En Bavière, la plus grande fête de la bière au monde a débuté comme un mariage princier, et remplit chaque année d'immenses tentes de visiteurs.",
    explanation: "L'Oktoberfest a commencé comme une célébration publique d'un mariage princier et est devenu une fête populaire annuelle combinant tentes à bière et attractions foraines.",
  },
  first_modern_olympics: {
    name: "Premiers Jeux Olympiques modernes",
    clue: "Les premiers Jeux olympiques modernes ont réuni des athlètes de plusieurs nations dans le même stade où se déroulaient les jeux antiques.",
    explanation: "Les Jeux ont été relancés par un aristocrate français passionné de compétition sportive internationale. Ils se sont déroulés dans un stade de marbre construit pour l'occasion, faisant revivre une tradition antique.",
  },
  battle_of_waterloo: {
    name: "Bataille de Waterloo",
    clue: "Au plat pays des frites et de la bande dessinée, un empereur vaincu livre sa dernière bataille, alors que des armées coalisées convergent de plusieurs côtés.",
    explanation: "La défaite de Napoléon à Waterloo a mis fin à son règne pour de bon et l'a contraint à l'exil sur une île isolée pour le reste de sa vie.",
  },
  october_revolution_petrograd: {
    name: "Révolution d'Octobre",
    clue: "Dans une capitale impériale sur la Neva, des révolutionnaires prennent un palais de nuit, renversent le gouvernement et fondent le premier État communiste.",
    explanation: "Le soulèvement de Petrograd a été mené par les bolcheviks de Lénine et a déclenché une longue guerre civile dans le pays avant que le nouveau gouvernement n'obtienne le plein contrôle.",
  },
  fall_of_constantinople: {
    name: "Chute de Constantinople",
    clue: "Une armée immense assiège 53 jours une capitale fortifiée sur le Bosphore, perçant ses murailles à coups de canons et mettant fin à un empire millénaire.",
    explanation: "Le siège de 53 jours a mis fin à l'empire byzantin et a transformé sa capitale en nouveau centre de l'empire ottoman. D'énormes canons de bronze ont percé des murailles vieilles de plus de mille ans.",
  },
  battle_of_hastings: {
    name: "Bataille de Hastings",
    clue: "L'armée d'un duc traverse la Manche, débarque sur la côte sud et vainc le roi en une journée, conquête brodée ensuite sur une célèbre tapisserie.",
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
    clue: "Tout juste maître de Vienne, un empereur marche vers le nord et piège deux armées alliées plus nombreuses, gagnant la bataille dite des trois empereurs.",
    explanation: "La victoire de Napoléon à Austerlitz a pratiquement détruit la troisième coalition et est souvent considérée comme la plus grande victoire tactique de sa carrière.",
  },
  olympic_flame_debut: {
    name: "Débuts de la flamme olympique",
    clue: "Dans une ville de canaux au pays des tulipes et des moulins, les Jeux olympiques ont pour la première fois allumé une flamme brûlant en continu.",
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
    clue: "Dans le sud des monts Zagros, une capitale cérémonielle fut bâtie avec des escaliers sculptés de soldats et de porteurs de tributs, avant d'être incendiée.",
    explanation: "Persépolis servait de capitale cérémonielle à l'empire perse achéménide. Elle fut incendiée lors de la conquête d'Alexandre le Grand, bien que les historiens débattent encore du caractère volontaire ou accidentel de l'incendie.",
  },
  terracotta_army: {
    name: "Armée en terre cuite",
    clue: "Près du point de départ de la route de la soie, des milliers de soldats d'argile gardent la tombe d'un empereur, chacun avec un visage différent.",
    explanation: "Les statues ont été construites pour la tombe de Qin Shi Huang, premier empereur de Chine, et ont été redécouvertes par des paysans creusant un puits, par pur hasard.",
  },
  borobudur_temple: {
    name: "Borobudur",
    clue: "Sur une île volcanique proche de l'équateur, le plus grand monument bouddhiste du monde est un mandala de pierre, gravi niveau par niveau vers l'éveil.",
    explanation: "Borobudur a été abandonné pendant des siècles, enseveli sous la cendre volcanique et la jungle, avant d'être redécouvert et restauré avec soin.",
  },
  stockholm_1912_olympics: {
    name: "Jeux olympiques de Stockholm",
    clue: "Dans une ville bâtie sur des îles de la Baltique, les Jeux olympiques ont utilisé chronomètres électriques et télégraphe pour transmettre les résultats.",
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
    clue: "Sur la rive nord de la Baltique, les Jeux olympiques voient un rival de la guerre froide concourir pour la première fois en décennies, symbole de rivalité.",
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
    clue: "Depuis la fenêtre d'un asile, dans une ville perchée du sud, un peintre observe la nuit et en tire l'une des images les plus célèbres de l'art.",
    explanation: "Vincent van Gogh peignit La Nuit étoilée alors qu'il était patient volontaire à l'asile de Saint-Paul-de-Mausole, près de Saint-Rémy-de-Provence, en s'inspirant semble-t-il de la vue depuis la fenêtre de sa chambre avant le lever du jour. Né dans le village néerlandais de Groot-Zundert, il ne vendit qu'une poignée de tableaux de son vivant mais compte aujourd'hui parmi les artistes les plus reconnus de l'histoire.",
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
    clue: "Dans une chapelle, de l'autre côté du fleuve face à un centre historique, les fresques d'un jeune peintre introduisent une perspective inédite dans l'art.",
    explanation: "Masaccio peignit ses fresques les plus influentes dans la chapelle Brancacci de Santa Maria del Carmine, à Florence, maîtrisant la perspective et une lumière naturaliste qui marqua des générations de peintres venus les étudier, dont Michel-Ange. Il mourut subitement à vingt-six ans, peu après avoir achevé l'œuvre.",
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
    clue: "Allongé sur un échafaudage au-dessus d'une chapelle où l'on élit les papes, un sculpteur peint un plafond parmi les plus grands chefs-d'œuvre de l'art.",
    explanation: "Michel-Ange peignit le plafond de la chapelle Sixtine presque entièrement seul, sur plusieurs années, en travaillant sur un échafaudage qu'il avait lui-même conçu. Né dans le petit village toscan de Caprese, il sculpta aussi sa célèbre statue de David dans un bloc de marbre que deux sculpteurs avant lui avaient abandonné comme irrécupérable.",
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
    name: "Naissance d'Andersen",
    clue: "Sur une île entre la mer du Nord et la Baltique, cette ville vit naître un fils de cordonnier qui écrivit des contes de sirènes et de vilains petits canards.",
    explanation: "Hans Christian Andersen est né à Odense, dans une famille pauvre. Ses contes de fées, dont beaucoup adaptés d'anciens récits populaires, ont été traduits dans plus de langues que presque toute autre œuvre littéraire.",
  },
  stonehenge: {
    name: "Stonehenge",
    clue: "Sur une plaine crayeuse au sud du cours supérieur de la Tamise, un cercle d'immenses pierres dressées fut aligné sur le soleil au jour le plus long de l'année.",
    explanation: "Stonehenge se dresse sur la plaine de Salisbury. Certaines de ses plus petites pierres bleues furent transportées depuis des carrières situées à environ 200 kilomètres, un exploit extraordinaire pour la technologie de l'époque, et le monument reste aligné avec le lever et le coucher du soleil aux solstices.",
  },
  pompeii: {
    name: "Pompéi",
    clue: "Une cité antique prospère fut ensevelie si soudainement sous la cendre volcanique que bâtiments, œuvres d'art et corps des victimes furent préservés intacts.",
    explanation: "Pompéi fut ensevelie sous plusieurs mètres de cendre et de pierre ponce après l'éruption d'un volcan voisin. La cendre durcit autour de matières organiques qui se décomposèrent ensuite, laissant des cavités que les archéologues remplirent de plâtre pour révéler les poses exactes des habitants et des animaux au moment de la catastrophe.",
  },
  darwin_birth: {
    name: "Charles Darwin",
    clue: "Sur un archipel volcanique du Pacifique, à cheval sur l'équateur, un naturaliste étudie pinsons et tortues géantes qui inspireront une théorie de l'évolution.",
    explanation: "Charles Darwin passa cinq semaines à étudier la faune des îles Galápagos lors de son tour du monde à bord du Beagle. Les pinsons et les tortues de l'archipel, subtilement différents d'une île à l'autre, devinrent des décennies plus tard des preuves clés lorsqu'il publia sa théorie de l'évolution par sélection naturelle.",
  },
  edison_birth: {
    name: "Thomas Edison",
    clue: "Dans un laboratoire conçu pour l'invention, dans une petite ville, un inventeur prolifique met au point une ampoule électrique pratique.",
    explanation: "Thomas Edison construisit l'un des premiers laboratoires de recherche industrielle à Menlo Park, dans le New Jersey, où des équipes d'employés l'aidèrent à développer et breveter des inventions à un rythme remarquable, lui valant le surnom de magicien de Menlo Park. Il détint au total plus d'un millier de brevets, dont le phonographe et une des premières caméras de cinéma.",
  },
  copernicus_birth: {
    name: "Nicolas Copernic",
    clue: "Dans une ville-cathédrale au bord d'une lagune, un astronome passe des décennies à établir, en secret, que le soleil, non la terre, est le centre de l'univers.",
    explanation: "Nicolas Copernic travailla pendant des décennies sur son modèle héliocentrique tout en exerçant comme chanoine à la cathédrale de Frombork, surplombant la lagune de la Vistule. Il retarda la publication de sa théorie par crainte du ridicule, ne recevant, dit-on, un exemplaire imprimé de son livre que le jour de sa mort.",
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
    clue: "Dans une ville des Balkans, un héritier royal fut assassiné par un nationaliste, peu après l'échec d'un premier attentat, étincelle d'une guerre mondiale.",
    explanation: "L'archiduc François-Ferdinand survécut à un premier attentat à la grenade ce matin-là, avant d'être abattu avec son épouse plus tard dans la journée, après que son chauffeur eut pris un mauvais virage, passant droit devant le tireur. Ce meurtre déclencha une chaîne d'alliances qui entraîna une grande partie du monde dans la guerre en quelques semaines.",
  },
  gettysburg: {
    name: "Bataille de Gettysburg",
    clue: "Menée sur trois jours, cette bataille fit plus de morts qu'aucune autre d'une guerre civile, avant d'accueillir l'un des discours les plus cités de l'histoire.",
    explanation: "La bataille de Gettysburg repoussa une invasion du Nord et est souvent considérée comme le tournant de la guerre. Des mois plus tard, le président prononça un court discours lors de l'inauguration du cimetière du champ de bataille, devenu l'un des plus cités de l'histoire du pays.",
  },
  columbus_birth: {
    name: "Christophe Colomb",
    clue: "Sur une petite île d'un archipel turquoise, le voyage vers l'ouest d'un marin touche terre sur un territoire qu'aucune carte ne montrait encore.",
    explanation: "Christophe Colomb toucha terre sur une île des Bahamas après avoir navigué vers l'ouest depuis l'Espagne, persuadé d'avoir atteint les abords de l'Asie. Il effectua trois autres voyages à travers l'Atlantique mais n'admit jamais avoir découvert un continent inconnu des Européens, affirmant jusqu'à sa mort avoir atteint les confins des Indes.",
  },
  chaplin_birth: {
    name: "Charlie Chaplin",
    clue: "Né dans la pauvreté au cœur d'une ville grise et surpeuplée, un garçon devient la figure comique la plus reconnue du cinéma, célèbre pour son chapeau melon.",
    explanation: "Chaplin crée le personnage du Vagabond, un errant miséreux mais digne, dont les films font de lui l'une des toutes premières vedettes mondiales du cinéma, reconnu sur tous les continents.",
  },
  disney_birth: {
    name: "Walt Disney",
    clue: "Dans un ancien champ d'orangers devenu parc d'attractions, un dessinateur ouvre le premier parc à thème bâti autour d'un seul univers imaginaire.",
    explanation: "Walt Disney ouvrit Disneyland sur d'anciennes terres d'orangers à Anaheim, en Californie, le premier parc à thème conçu autour d'un univers imaginaire unifié plutôt que d'attractions foraines éparses. Son studio avait déjà produit l'un des premiers longs métrages d'animation, et il fit construire plus tard un second parc, bien plus grand, en Floride, qu'il ne vit jamais achevé.",
  },
  nobel_birth: {
    name: "Alfred Nobel",
    clue: "Né au bord de la Baltique, un chimiste invente un puissant explosif destiné aux mines, puis finance des prix récompensant la paix et les sciences.",
    explanation: "Alfred Nobel détient plus de 350 brevets au cours de sa vie et est troublé par une nécrologie le qualifiant à tort de marchand de mort, ce qui le pousse à léguer sa fortune pour récompenser des réalisations bénéfiques à l'humanité.",
  },
  bach_birth: {
    name: "Jean-Sébastien Bach",
    clue: "Maître de chœur dans une ville marchande animée, un compositeur écrit et joue une nouvelle cantate sacrée presque chaque semaine, des années durant.",
    explanation: "Johann Sebastian Bach fut cantor de l'église Saint-Thomas de Leipzig pendant vingt-sept ans, composant des centaines d'œuvres pour orgue, chœur et orchestre, et repose dans cette même église. Sa musique tomba en désuétude après sa mort et fut largement redécouverte des décennies plus tard grâce à des compositeurs admiratifs.",
  },
  tolstoy_birth: {
    name: "Léon Tolstoï",
    clue: "Né dans une famille noble sur un vaste domaine rural, un écrivain produit des romans fleuves sur la guerre et la société parmi les plus admirés jamais écrits.",
    explanation: "Tolstoï finit par renoncer à sa fortune et à son titre, adoptant une philosophie simple et non-violente qui influencera plus tard des dirigeants politiques à la tête de grands mouvements pour les droits civiques et l'indépendance.",
  },
  hokusai_birth: {
    name: "Katsushika Hokusai",
    clue: "Né dans la vaste capitale des shoguns au bord d'une baie, cet artiste devint célèbre pour l'estampe d'une immense vague, parmi les images les plus reproduites.",
    explanation: "Hokusai crée des milliers d'estampes et de peintures au cours d'une longue carrière, signant ses dernières œuvres sous le nom de vieillard fou de dessin, perfectionnant encore sa technique jusqu'à ses derniers jours.",
  },
  battle_of_stalingrad: {
    name: "Bataille de Stalingrad",
    clue: "Le long de la Volga, une bataille de plusieurs mois pour une ville tourne aux combats de rue durant un hiver glacial, tournant décisif d'une guerre mondiale.",
    explanation: "La bataille s'achève par l'encerclement complet d'une armée contrainte de se rendre, une défaite si importante qu'elle marque un basculement durable de l'élan en faveur du camp qui se défendait, pour le reste du conflit.",
  },
  jfk_assassination: {
    name: "Assassinat de John F. Kennedy",
    clue: "Un président est abattu en voiture décapotable devant une foule en liesse dans une ville du Texas, l'instant filmé sous plusieurs angles et débattu sans fin.",
    explanation: "Kennedy est tué alors qu'il saluait la foule depuis un cortège officiel, et la scène est filmée par un témoin, devenant l'une des images les plus étudiées jamais réalisées, alimentant des décennies de théories concurrentes sur les responsables.",
  },
  bin_laden_killing: {
    name: "Mort d'Oussama ben Laden",
    clue: "Dans une ville paisible des contreforts de l'Himalaya, près d'une académie militaire, des soldats d'élite donnent l'assaut de nuit à l'homme le plus recherché.",
    explanation: "L'opération met fin à une décennie de traque de l'homme responsable d'un attentat terroriste majeur, et son corps est ensuite immergé en mer pour empêcher que sa tombe ne devienne un lieu de pèlerinage.",
  },
  gateway_arch: {
    name: "Gateway Arch",
    clue: "Au confluent du Missouri et du Mississippi, d'où partaient les colons vers l'Ouest, une arche étincelante en acier s'élève, la plus haute du monde.",
    explanation: "Le Gateway Arch adopte une courbe en chaînette conçue pour que sa hauteur soit égale à la distance entre ses deux pieds au sol, et un système de tramway intérieur transporte les visiteurs jusqu'à une plateforme d'observation à son sommet.",
  },
  abu_simbel: {
    name: "Abou Simbel",
    clue: "Loin en amont sur le Nil, vers le sud du désert, d'immenses statues d'un roi taillées dans la falaise gardent un temple déplacé pour fuir le lac d'un barrage.",
    explanation: "Les temples d'Abou Simbel sont découpés en blocs et reconstruits en hauteur lors d'une vaste opération internationale de sauvetage, après qu'un nouveau barrage a menacé d'engloutir le site, l'un des projets de préservation du patrimoine les plus ambitieux jamais menés.",
  },
  pasteur_birth: {
    name: "Louis Pasteur",
    clue: "Dans un laboratoire privé d'une vieille capitale, un chimiste teste un traitement expérimental contre la rage sur un garçon mordu par un chien infecté.",
    explanation: "Louis Pasteur testa son vaccin expérimental contre la rage sur un garçon de neuf ans grièvement mordu par un chien infecté, dans son laboratoire parisien. Le traitement réussit, et l'institut fondé plus tard pour poursuivre ses travaux demeure aujourd'hui un centre de référence en recherche sur les maladies infectieuses.",
  },
  amundsen_birth: {
    name: "Roald Amundsen",
    clue: "Au point le plus au sud de la Terre, où toute direction mène vers le nord, une équipe polaire en skis et traîneaux à chiens arrive avant une équipe rivale.",
    explanation: "Roald Amundsen mena la première expédition à atteindre le pôle Sud, se déplaçant efficacement sur la glace grâce à des skis et des traîneaux à chiens. Une expédition rivale britannique, qui comptait sur des poneys et des traîneaux tirés à la main, arriva plusieurs semaines plus tard et périt sur le chemin du retour.",
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
    clue: "Là où le Tage rejoint l'Atlantique, des soldats renversent en un jour une vieille dictature, et des civils glissent des fleurs rouges dans leurs fusils.",
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
    clue: "Dans un port pluvieux du sud, côté Pacifique des Andes, le plus puissant séisme jamais mesuré secoue le sol dix minutes et lance des tsunamis sur l'océan.",
    explanation: "Le séisme de Valdivia, au Chili, reste le plus puissant jamais enregistré par des instruments modernes, avec une magnitude comprise entre 9,4 et 9,6. Il a dévasté la ville de Valdivia et déclenché des vagues de tsunami qui ont traversé l'océan Pacifique, causant encore des dégâts et des morts jusqu'à Hawaï, au Japon et aux Philippines, de nombreuses heures après la fin de la secousse.",
  },
  krakatoa_eruption: {
    name: "Éruption du Krakatoa",
    clue: "Dans le plus grand archipel du monde, une île volcanique coincée entre deux grandes îles explose dans le son le plus fort jamais enregistré.",
    explanation: "L'éruption du Krakatoa a détruit la majeure partie de l'île en une série d'explosions, dont la plus forte fut entendue à environ 4 800 kilomètres de distance et reste le son le plus fort jamais enregistré scientifiquement. L'éruption a provoqué des vagues de tsunami qui ont tué des dizaines de milliers de personnes et teinté les couchers de soleil d'un rouge étrange partout dans le monde pendant des mois.",
  },
  mexico_1968_olympics: {
    name: "Jeux olympiques de Mexico",
    clue: "Dans une capitale d'altitude cernée de volcans, au pays des anciens Aztèques, l'air raréfié aide à battre des records et deux sprinteurs lèvent un poing ganté.",
    explanation: "Les Jeux olympiques de Mexico ont été les premiers organisés en Amérique latine et les premiers en haute altitude, ce qui a contribué à un record du monde du saut en longueur resté imbattu pendant des décennies. Sur le podium, les sprinteurs Tommie Smith et John Carlos ont chacun levé un poing ganté de noir pendant l'hymne, dans une protestation silencieuse devenue l'une des images les plus célèbres de l'histoire olympique.",
  },
  antwerp_1920_olympics: {
    name: "Jeux olympiques d'Anvers",
    clue: "Dans un port sur l'Escaut en reconstruction après la Grande Guerre, des colombes sont lâchées et un drapeau à cinq anneaux flotte pour la première fois.",
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
    clue: "Sur le plus haut sommet du monde, un apiculteur et son compagnon de cordée sont les premiers grimpeurs confirmés à l'atteindre, encordés jusqu'au bout.",
    explanation: "Edmund Hillary et l'alpiniste sherpa Tenzing Norgay devinrent les premiers grimpeurs confirmés à atteindre le sommet de l'Everest, dans le cadre d'une expédition menée par les Britanniques. Hillary, né près d'Auckland, avait travaillé comme apiculteur avant de se tourner vers l'alpinisme. Il consacra une grande partie de sa vie ultérieure à collecter des fonds pour construire des écoles et des hôpitaux pour les communautés sherpas de la région de l'Everest.",
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
    clue: "Au bord de la mer d'Azov, les défenseurs d'une ville portuaire assiégée résistent dans une immense aciérie, tenant des semaines sous terre avant de se rendre.",
    explanation: "Le siège de Marioupol s'inscrit dans l'invasion de l'Ukraine par la Russie. Après des semaines de bombardements, les derniers défenseurs de la ville résistèrent dans l'aciérie d'Azovstal avant de recevoir l'ordre de se rendre.",
  },
  independence_hall: {
    name: "Independence Hall",
    clue: "Dans une salle en briques près du fleuve Delaware, des délégués de treize colonies signent le texte proclamant l'indépendance de leur nation face à son roi.",
    explanation: "Independence Hall, à Philadelphie, est le lieu où la déclaration d'indépendance et la Constitution des États-Unis furent débattues puis adoptées. Le site est classé au patrimoine mondial de l'UNESCO.",
  },
  tangshan_earthquake: {
    name: "Séisme de Tangshan",
    clue: "Près de la mer Jaune, un séisme matinal rase une ville industrielle en quelques secondes, le plus meurtrier jamais enregistré, son bilan réel restant contesté.",
    explanation: "Le séisme de Tangshan frappa la ville industrielle chinoise de Tangshan alors que la plupart des habitants dormaient. Le bilan officiel dépasse 242 000 morts, bien que de nombreux historiens estiment le bilan réel supérieur à 300 000.",
  },
  worlds_columbian_exposition: {
    name: "Exposition universelle de Chicago",
    clue: "Au bord du lac Michigan, une exposition bâtie presque du jour au lendemain dévoile la première grande roue et un éclairage électrique d'une ampleur inédite.",
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
    clue: "Sur un archipel volcanique perdu dans un vaste océan, des navires deviennent les premiers connus à atteindre des rivages qu'aucune carte n'avait tracés.",
    explanation: "Les navires de James Cook touchèrent terre dans l'archipel d'Hawaï, une première pour des Européens recensée dans l'histoire. Cook, qui avait aussi cartographié la côte est de l'Australie lors de ses voyages dans le Pacifique pour la marine royale britannique, y retourna l'année suivante et fut tué lors d'un affrontement avec des habitants de la baie de Kealakekua.",
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
    clue: "Après treize jours de siège, une garnison minoritaire retranchée dans une vieille mission texane est submergée à l'aube, devenant un cri de ralliement.",
    explanation: "La bataille de l'Alamo vit les forces mexicaines de Santa Anna submerger les défenseurs texans retranchés dans la mission de l'Alamo, près de San Antonio. Malgré la défaite, elle devint le cri de ralliement « Remember the Alamo » pour le reste de la révolution texane.",
  },
  assassination_of_julius_caesar: {
    name: "Assassinat de Jules César",
    clue: "Au bord du Tibre, un dirigeant tout juste proclamé maître à vie est poignardé par ses propres sénateurs, plongeant sa république dans la guerre civile.",
    explanation: "Jules César fut poignardé à mort par un groupe de sénateurs, dont Brutus et Cassius, lors d'une séance tenue au théâtre de Pompée, à Rome. Ce meurtre déclencha des guerres civiles qui mirent fin à la République romaine.",
  },
  western_wall: {
    name: "Mur des Lamentations",
    clue: "Dans une ville sainte pour trois religions, des fidèles glissent des prières écrites dans les fissures d'un mur antique, dernier vestige d'un vaste temple.",
    explanation: "Le mur des Lamentations est le dernier vestige du mur de soutènement qui portait autrefois l'esplanade du Temple à Jérusalem. C'est l'un des lieux les plus saints du judaïsme, où les visiteurs glissent traditionnellement des prières écrites entre les pierres.",
  },
  grand_palace: {
    name: "Grand Palais",
    clue: "Au bord du fleuve Chao Phraya, un vaste palais royal aux toits scintillants et flèches dorées sert de résidence à une monarchie depuis plus de deux siècles.",
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
    clue: "Dans un garage de la Silicon Valley, deux amis construisent les premiers ordinateurs d'une entreprise qui deviendra l'une des plus valorisées au monde.",
    explanation: "Steve Jobs et Steve Wozniak fondèrent Apple dans le garage familial des Jobs, à Los Altos, en Californie. Jobs, qui avait abandonné ses études, fut plus tard évincé de l'entreprise qu'il avait cofondée, avant d'y revenir des années plus tard pour mener son redressement et en faire l'une des entreprises les plus valorisées au monde.",
  },
  alexander_graham_bell: {
    name: "Alexander Graham Bell",
    clue: "Dans un atelier d'une ville côtière, un inventeur qui enseignait aux sourds prononce les premiers mots jamais transmis par fil à un assistant.",
    explanation: "Alexander Graham Bell passa le premier appel téléphonique réussi depuis son atelier de Boston, disant à son assistant Thomas Watson, à travers le fil, Monsieur Watson, venez, j'ai besoin de vous. Profondément impliqué dans l'éducation des élèves sourds, Bell breveta l'appareil et cofonda l'entreprise devenue AT&T.",
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
    clue: "Dans un studio tapissé d'aluminium, lieu de passage d'artistes et de célébrités, un peintre fait de boîtes de soupe des images parmi les plus célèbres de l'art.",
    explanation: "Andy Warhol dirigeait son studio new-yorkais, surnommé la Factory, à la fois comme lieu de travail et comme lieu de rassemblement social pour artistes, musiciens et célébrités. Il y produisit en série des images sérigraphiées de boîtes de soupe Campbell's et des portraits de célébrités devenus des icônes du pop art, et popularisa la formule quinze minutes de célébrité.",
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
    clue: "Au pied d'une citadelle couronnée d'un temple de marbre dédié à la déesse protectrice de la cité, un riche mécène bâtit un théâtre en mémoire de son épouse.",
    explanation: "L'Odéon d'Hérode Atticus se dresse au pied de l'Acropole d'Athènes. Il fut bâti par le riche sénateur romain Hérode Atticus à la mémoire de son épouse, et accueille encore aujourd'hui concerts et spectacles après restauration.",
  },
  vitus_bering: {
    name: "Vitus Béring",
    clue: "Naufragé sur une île isolée et sans arbres d'une mer froide du nord, un navigateur au service d'un empire lointain meurt échoué sur l'île qui porte son nom.",
    explanation: "Vitus Béring fit naufrage sur une île inhabitée du détroit qu'il avait lui-même cartographié au service de la marine russe, et y mourut avec plusieurs membres de son équipage. L'île, le détroit et la mer environnante portent depuis son nom, en hommage à ses deux expéditions qui cartographièrent la côte nord-est de l'Asie et atteignirent l'Amérique du Nord.",
  },
  battle_of_iwo_jima: {
    name: "Bataille d'Iwo Jima",
    clue: "Des troupes prennent une petite île volcanique pour ses pistes d'aviation, une photo d'un drapeau hissé au sommet devenant une image marquante de la guerre.",
    explanation: "La bataille d'Iwo Jima vit les forces américaines prendre cette île du Pacifique au Japon pour s'emparer de ses pistes d'aviation. La photo des Marines hissant le drapeau au sommet du mont Suribachi devint l'une des images les plus reproduites de la guerre.",
  },
  paris_agreement: {
    name: "Accord de Paris",
    clue: "Dans une grande capitale sur la Seine, des délégués de près de deux cents pays concluent un accord historique pour lutter contre le réchauffement de la planète.",
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
    name: "Naissance de Hedy Lamarr",
    clue: "Cette grande capitale ancienne vit naître une vedette de cinéma qui coinventa en secret un système radio à l'origine de la technologie sans fil actuelle.",
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
    clue: "Sur la porte de l'église d'un château, dans une petite ville, un moine affiche quatre-vingt-quinze griefs qui divisent en deux une grande religion.",
    explanation: "Martin Luther afficha ses quatre-vingt-quinze thèses contestant les pratiques de l'Église sur la porte de l'église du château de Wittenberg, un geste qui déclencha la Réforme protestante. Né dans la ville minière d'Eisleben, Luther traduisit plus tard la Bible en allemand, façonnant la langue elle-même.",
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
    clue: "Là où le Missouri rejoint le Mississippi, une immense exposition universelle attire près de vingt millions de visiteurs et aurait popularisé le cornet de glace.",
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
    clue: "Sur une côte d'épices d'un vaste sous-continent, une flotte devient la première à s'y rendre par la mer, en contournant un continent austral.",
    explanation: "La flotte de Vasco de Gama atteignit Calicut, sur la côte de Malabar en Inde, après avoir contourné le cap de Bonne-Espérance en Afrique, devenant ainsi la première à relier l'Inde par la mer. Cette nouvelle route brisa le monopole terrestre sur le commerce des épices et ouvrit plus d'un siècle de domination portugaise sur l'océan Indien.",
  },
  niels_bohr: {
    name: "Niels Bohr",
    clue: "Né dans une capitale froide du nord, un physicien modélise l'orbite des électrons autour d'un noyau, transformant la science et lui valant un prix majeur.",
    explanation: "Niels Bohr est né à Copenhague. Son modèle de la structure atomique, décrivant des électrons occupant des niveaux d'énergie fixes, fut fondateur pour la théorie quantique et lui valut le prix Nobel de physique.",
  },
  fyodor_dostoyevsky: {
    name: "Fiodor Dostoïevski",
    clue: "Dans une prison-forteresse aux confins d'une immense frontière gelée, un romancier purge quatre ans de travaux forcés après une grâce de dernière minute.",
    explanation: "Fiodor Dostoïevski purgea quatre ans de travaux forcés dans une prison-forteresse d'Omsk, en Sibérie, après avoir été condamné à mort pour activité politique et gracié à la toute dernière minute devant un peloton d'exécution. Cette expérience inspira plus tard son roman Souvenirs de la maison des morts.",
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
    clue: "Dans un laboratoire universitaire au bord d'une rivière, un chimiste analyse la lumière d'éléments chauffés et en découvre deux inconnus jusque-là.",
    explanation: "Robert Bunsen, travaillant à l'université de Heidelberg avec le physicien Gustav Kirchhoff, utilisa la spectroscopie de flamme pour découvrir les éléments césium et rubidium. Le brûleur de laboratoire perfectionné pour ses expériences porte toujours son nom.",
  },
  theophile_gautier: {
    name: "Théophile Gautier",
    clue: "Né dans une ville du sud, un poète et critique invente la formule sur l'art sans autre utilité que sa beauté, influençant toute une génération d'écrivains.",
    explanation: "Théophile Gautier est né à Tarbes. Poète et critique, il défendit « l'art pour l'art », l'idée que la valeur de l'art réside dans sa seule beauté, influençant les écrivains symbolistes et décadents qui suivirent.",
  },
  first_council_of_nicaea: {
    name: "Premier concile de Nicée",
    clue: "Près du Bosphore, un empereur convoque des chefs religieux pour trancher un différend doctrinal ; leur credo est encore récité mot pour mot dans les églises.",
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
    clue: "Dans une ville de baie enrichie par une ruée vers l'or, un séisme rompt une faille, mais les incendies qui suivent ravagent plus que le séisme lui-même.",
    explanation: "Le séisme de San Francisco rompit la faille de San Andreas. Les incendies qui suivirent brûlèrent pendant des jours et causèrent plus de destruction que le séisme lui-même, contribuant à fonder la sismologie moderne.",
  },
  great_exhibition: {
    name: "Grande Exposition",
    clue: "Voulue par l'époux de la reine Victoria, une immense halle de verre et de fer aux murs de cristal accueille la première foire industrielle internationale.",
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
    clue: "Sur une île isolée d'une mer presque fermée et peu salée, une fusée conçue pour un régime en guerre devient le premier objet humain à atteindre l'espace.",
    explanation: "Wernher von Braun dirigea le développement de fusées sur un site d'essai isolé, sur l'île d'Usedom, où le vol d'essai de la fusée V2 devint le premier objet fabriqué par l'homme à atteindre l'espace. Cette fusée fut conçue comme une arme pour le régime nazi et tua des milliers de civils lors d'attaques contre des villes alliées ; von Braun dirigea plus tard l'équipe qui conçut les fusées Saturn V ayant emmené les astronautes de la NASA vers la Lune.",
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
  plato_birth: {
    name: "Platon",
    clue: "Né dans une famille noble d'une cité dont les penseurs façonnent encore le monde, ce philosophe forma dans son Académie le prochain grand penseur de l'histoire.",
    explanation: "Platon étudia auprès de Socrate, puis fonda l'Académie à Athènes, où il enseigna à Aristote. Ses écrits, surtout des dialogues mettant en scène Socrate, posèrent les fondations de la philosophie occidentale.",
  },
  augustine_of_hippo_birth: {
    name: "Augustin d'Hippone",
    clue: "Né d'une mère chrétienne et d'un père païen dans l'arrière-pays de Carthage, ce saint et théologien écrivit des mémoires avouant sa jeunesse folle.",
    explanation: "Augustin écrivit les Confessions, l'une des premières autobiographies occidentales, racontant sa jeunesse agitée puis sa conversion. Il devint évêque et l'un des penseurs les plus influents de la théologie chrétienne.",
  },
  kurosawa_birth: {
    name: "Akira Kurosawa",
    clue: "Né dans une immense capitale en vue du mont Fuji, ce cinéaste réalisa une épopée de samouraïs plus tard adaptée en western sur sept pistoleros.",
    explanation: "Akira Kurosawa réalisa Les Sept Samouraïs, un classique du cinéma mondial dont l'histoire de guerriers engagés pour défendre un village fut ensuite adaptée sous le titre Les Sept Mercenaires. Il est considéré comme l'un des réalisateurs les plus influents de l'histoire du cinéma.",
  },
  fallingwater: {
    name: "Frank Lloyd Wright",
    clue: "Dans les forêts des Appalaches, un architecte bâtit une maison juste au-dessus d'une cascade, ses terrasses de pierre en porte-à-faux sur le cours d'eau.",
    explanation: "Frank Lloyd Wright conçut Fallingwater comme résidence de week-end pour la famille Kaufmann, bâtie au-dessus d'une cascade existant déjà sur leur propriété. Elle est largement considérée comme l'une des plus grandes œuvres architecturales jamais réalisées.",
  },
  bruce_lee_birth: {
    name: "Bruce Lee",
    clue: "Né par hasard près du Golden Gate lors d'une tournée de la troupe d'opéra de ses parents, cet artiste martial devint une star mondiale du cinéma.",
    explanation: "Bruce Lee naquit pendant que la compagnie d'opéra de son père était en tournée aux États-Unis. Il popularisa ensuite les films d'arts martiaux dans le monde entier et fonda sa propre philosophie de combat, le Jeet Kune Do.",
  },
  rumi_birth: {
    name: "Rûmî",
    clue: "Né dans une ville marchande sur une ancienne route de caravanes, ce poète mystique inspira un ordre dont les membres tournent lentement sur eux-mêmes en prière.",
    explanation: "Rûmî était un poète mystique dont les disciples fondèrent l'ordre mevlevi, connu pour la danse tournoyante et méditative de ses derviches. Sa poésie a depuis été traduite dans des dizaines de langues et reste largement lue aujourd'hui.",
  },
  battle_of_okinawa: {
    name: "Bataille d'Okinawa",
    clue: "Sur un archipel au sud de Kyushu, la plus grande invasion terre-mer de toute la guerre du Pacifique s'éternisa près de trois mois, île après île.",
    explanation: "La bataille d'Okinawa fut le plus grand assaut amphibie du théâtre Pacifique durant la Seconde Guerre mondiale. Les pertes immenses des deux côtés pesèrent sur la décision d'utiliser l'arme atomique plutôt que de lancer une invasion similaire des îles principales.",
  },
  siege_of_baghdad_1258: {
    name: "Siège de Bagdad",
    clue: "Une armée venue de la steppe assiégea la capitale d'un califat sur le Tigre, brûlant ses bibliothèques et noircissant d'encre, dit-on, le fleuve.",
    explanation: "Le siège fut mené par une armée de l'empire mongol sous Hulagu Khan, qui détruisit la Maison de la Sagesse et une grande partie des bibliothèques de la ville. Cet événement est traditionnellement vu comme la fin de l'âge d'or islamique, même si les historiens débattent de la netteté de cette rupture.",
  },
  alaska_purchase_sitka: {
    name: "Achat de l'Alaska",
    clue: "Sur la côte sud pluvieuse d'une terre glacée face à la Sibérie, par-delà le détroit de Béring, un drapeau est abaissé et un autre hissé, scellant la vente.",
    explanation: "La cérémonie officielle de transfert eut lieu à Sitka, où la souveraineté sur l'Alaska passa de la Russie aux États-Unis pour 7,2 millions de dollars. À l'époque, des critiques moquaient cet achat comme un gaspillage d'argent pour des terres gelées et vides.",
  },
  treaty_of_tordesillas: {
    name: "Traité de Tordesillas",
    clue: "Réunis dans une petite ville au bord du Douro, des négociateurs de deux royaumes rivaux tracèrent une ligne partageant toute future découverte d'outre-mer.",
    explanation: "Le traité de Tordesillas partagea les terres nouvellement revendiquées hors d'Europe entre les couronnes de Castille et du Portugal, le long d'un méridien. C'est la raison pour laquelle le Brésil parle portugais alors que ses voisins parlent espagnol, la ligne ayant croisé sa côte orientale.",
  },
  february_revolution_1917: {
    name: "Révolution de Février",
    clue: "Des pénuries de pain et des soldats mutinés dans une capitale glacée sur la Neva forcèrent un monarque dont la famille régnait depuis trois siècles à abdiquer.",
    explanation: "La révolution de Février entraîna l'abdication de l'empereur Nicolas II, mettant fin à trois cents ans de règne de la dynastie des Romanov. Un gouvernement provisoire prit le pouvoir, avant d'être lui-même renversé plus tard la même année.",
  },
  assassination_shinzo_abe: {
    name: "Assassinat de Shinzo Abe",
    clue: "Dans une ancienne capitale célèbre pour ses cerfs en liberté, un ancien chef de gouvernement est abattu avec une arme artisanale pendant un discours de rue.",
    explanation: "Shinzo Abe, ancien premier ministre, fut assassiné alors qu'il faisait campagne devant une gare. Son agresseur utilisa une arme à feu rudimentaire et fabriquée maison, et l'attaque choqua un pays parmi ceux où la violence par arme à feu est la plus rare au monde.",
  },
  tower_of_london: {
    name: "Tour de Londres",
    clue: "Une forteresse au bord d'un large fleuve à marées a servi de palais royal, de prison, d'arsenal et d'écrin pour les joyaux de la couronne d'un royaume.",
    explanation: "La Tour de Londres fut fondée par Guillaume le Conquérant dans le cadre de la conquête normande et a rempli de nombreux rôles depuis, dont ceux de résidence royale et de prison d'État. La légende veut que le royaume tombe si les corbeaux venaient à quitter la Tour.",
  },
  karnak_temple_complex: {
    name: "Complexe de Karnak",
    clue: "Le long du Nil, face à la vallée où reposent les pharaons, des dynasties successives agrandirent le plus vaste complexe religieux, avec son allée de béliers.",
    explanation: "Karnak s'est développé sur près de deux mille ans, chaque souverain y ajoutant des constructions, ce qui en fait le plus vaste complexe religieux jamais bâti. Sa grande salle hypostyle contient à elle seule plus d'une centaine de colonnes de pierre massives.",
  },
  chile_earthquake_2010: {
    name: "Séisme du Chili",
    clue: "Dans un pays long et étroit entre les Andes et le Pacifique, un séisme côtier parmi les plus puissants jamais enregistrés fit trembler le sol trois minutes.",
    explanation: "Le séisme de magnitude 8,8 frappa au large de la région du Maule et fut l'un des plus puissants jamais enregistrés par les instruments modernes. Les scientifiques ont calculé qu'il avait raccourci la durée d'une journée terrestre d'une fraction de microseconde.",
  },
  motherland_calls_statue: {
    name: "La Mère Patrie appelle",
    clue: "Sur une colline dominant la Volga, une femme colossale brandissant une épée rappelle une bataille de rue dans une ville rebaptisée.",
    explanation: "La Mère Patrie appelle commémore les défenseurs de la bataille de Stalingrad, l'une des batailles les plus meurtrières de l'histoire. Haute de 85 mètres, elle fut la statue la plus haute du monde lors de son achèvement, et la ville elle-même fut plus tard renommée Volgograd.",
  },
  berners_lee_www: {
    name: "Tim Berners-Lee",
    clue: "Dans un laboratoire de physique conçu pour faire s'entrechoquer des atomes, un scientifique écrivit le logiciel devenu le World Wide Web.",
    explanation: "Tim Berners-Lee inventa le World Wide Web alors qu'il travaillait au CERN, le laboratoire de physique des particules à cheval sur la frontière entre la France et la Suisse. Il offrit cette technologie gratuitement, sans la breveter, afin qu'elle puisse se répandre aussi largement que possible.",
  },
  gutenberg_printing_press: {
    name: "Johannes Gutenberg",
    clue: "Né dans une ville fluviale au sein d'une famille de marchands, cet artisan construisit une machine capable de produire en série des pages identiques.",
    explanation: "Johannes Gutenberg inventa la presse à caractères mobiles, qui accéléra considérablement la production de livres. Son œuvre la plus célèbre, la Bible de Gutenberg, est considérée comme l'un des livres imprimés les plus précieux qui existent.",
  },
  monet_birth: {
    name: "Claude Monet",
    clue: "Né dans une ville capitale, ce peintre a étudié un bassin de jardin et ses nymphéas, pour un mouvement peignant la lumière fugace plutôt que le détail exact.",
    explanation: "Les tableaux de Claude Monet représentant le bassin et les nymphéas de son jardin sont devenus l'une des séries les plus reconnaissables de l'art. Il fut une figure fondatrice d'un mouvement qui privilégiait les impressions visuelles de lumière et de couleur plutôt que le détail précis et réaliste.",
  },
  jules_verne_birth: {
    name: "Jules Verne",
    clue: "Né dans une ville portuaire, ce romancier a envoyé ses personnages au fond des océans, sous terre et autour du monde entier avant que cela soit possible.",
    explanation: "Les romans d'aventure de Jules Verne imaginaient des sous-marins explorant les fonds marins, des explorateurs descendant à travers la croûte terrestre et des voyageurs faisant le tour du globe à toute vitesse, des décennies avant que la technologie réelle ne rattrape ses idées.",
  },
  socrates_birth: {
    name: "Socrate",
    clue: "Né dans une cité qui prisait le débat public, ce philosophe fut condamné à mort par sa propre cité et choisit le poison plutôt que l'exil.",
    explanation: "Socrate passa sa vie à interroger ses concitoyens sur la place publique, développant une méthode de questionnement permanent. Condamné par un jury pour corruption de la jeunesse et irrespect de la tradition, il accepta la sentence de mort et but une coupe de poison plutôt que de fuir en exil.",
  },
  mary_shelley_frankenstein: {
    name: "Mary Shelley",
    clue: "Au bord d'un grand lac entre deux pays, une réunion orageuse défia des écrivains d'inventer des histoires de fantômes ; celle d'un savant devint un classique.",
    explanation: "Pendant une période de temps froid et orageux, Mary Shelley rejoignit un petit cercle d'écrivains séjournant au bord du lac et, mise au défi d'écrire une histoire de fantôme, commença le roman qui deviendrait son œuvre la plus célèbre, celle d'un savant qui crée puis abandonne une créature vivante assemblée à partir de tissus morts.",
  },
  helen_keller_birth: {
    name: "Helen Keller",
    clue: "Née dans une petite ville, aveugle et sourde depuis l'enfance, cette autrice apprit à communiquer quand son institutrice lui épela un mot dans la main.",
    explanation: "Helen Keller devint sourde et aveugle après une maladie infantile. Son institutrice réussit à la toucher en lui épelant le mot pour l'eau dans la main tout en pompant de l'eau dessus, une percée qui lui ouvrit l'accès au langage. Keller devint ensuite autrice, conférencière et militante politique, la première personne sourde-aveugle à obtenir un diplôme universitaire.",
  },
  tolkien_birth: {
    name: "J.R.R. Tolkien",
    clue: "Né sur le haut plateau entre l'Orange et le Vaal, loin de l'île où il enseigna plus tard, cet écrivain bâtit un monde d'elfes autour d'un anneau maudit.",
    explanation: "J.R.R. Tolkien naquit sur un autre continent que celui où sa famille retourna peu après. Il devint professeur de langues et passa des décennies à construire tout un monde fantastique avec ses propres langues et histoires inventées, publiant des romans sur un périlleux voyage pour détruire un anneau puissant et corrupteur.",
  },
  spielberg_birth: {
    name: "Steven Spielberg",
    clue: "Né au bord de l'Ohio, ce cinéaste a réalisé un film de requin qui a vidé les plages, puis un extraterrestre échoué et le garçon qui le cache.",
    explanation: "Steven Spielberg réalisa un film à suspense sur un grand requin blanc terrorisant une ville balnéaire, devenu l'un des tout premiers grands succès estivaux et qui donna aux spectateurs peur d'entrer dans l'eau. Il réalisa plus tard un film familial sur un garçon qui se lie d'amitié avec un extraterrestre égaré et l'aide à rentrer chez lui.",
  },
  munich_agreement_1938: {
    name: "Accords de Munich",
    clue: "Réunis dans une ville de Bavière, des dirigeants de puissances plus fortes laissèrent démembrer un territoire voisin pour éviter une guerre venue un an après.",
    explanation: "Lors d'un sommet, les dirigeants de plusieurs puissances plus fortes acceptèrent de laisser démembrer un pays voisin plus petit, sans consulter le gouvernement de ce pays, espérant que cette concession empêcherait une guerre plus large. Elle survint tout de même, moins d'un an plus tard.",
  },
  glorious_revolution_landing: {
    name: "Glorieuse Révolution",
    clue: "Un prince étranger a débarqué sur un littoral avec une flotte d'invasion et, en quelques semaines, a pris le trône du royaume insulaire presque sans combattre.",
    explanation: "Un prince étranger appareilla depuis le continent avec une immense flotte d'invasion et débarqua sur la côte sud. Face aux défections parmi ses propres officiers, le roi en exercice s'enfuit en exil, et l'envahisseur fut couronné souverain conjoint avec son épouse, dans un changement de pouvoir resté célèbre pour avoir fait si peu de victimes.",
  },
  korean_armistice_agreement: {
    name: "Armistice de Corée",
    clue: "Le long d'une vallée fluviale sur une péninsule divisée, un accord a mis fin à trois ans de combats sans jamais déclarer la guerre officiellement terminée.",
    explanation: "Après trois années de combats, des commandants militaires signèrent un armistice qui arrêta les combats le long d'une ligne fortifiée à peu près là où le conflit avait commencé. Aucun traité de paix ne suivit jamais, si bien que les deux camps restent techniquement encore en guerre aujourd'hui.",
  },
  magellan_birth: {
    name: "Ferdinand Magellan",
    clue: "Né dans les collines verdoyantes au nord du Douro, ce navigateur organisa la première flotte à faire le tour du monde, mort avant d'achever lui-même le voyage.",
    explanation: "Ferdinand Magellan mena une flotte de cinq navires vers l'ouest à travers un océan à la recherche d'une nouvelle route vers de précieuses îles à épices. Il fut tué lors d'une bataille en cours de route, mais l'un de ses navires et une petite partie de l'équipage achevèrent le tour complet du globe, prouvant enfin que la Terre pouvait être contournée par la mer.",
  },
  leif_erikson_birth: {
    name: "Leif Erikson",
    clue: "Né sur une île volcanique du grand nord atlantique, cet explorateur a atteint un nouveau continent des siècles avant le voyage plus célèbre qui en a le mérite.",
    explanation: "Leif Erikson mena une expédition vers l'ouest depuis une colonie et devint le premier Européen connu à avoir posé le pied sur le continent nord-américain, y débarquant des siècles avant la traversée transatlantique aujourd'hui bien plus célèbre.",
  },
  vespucci_birth: {
    name: "Amerigo Vespucci",
    clue: "Né dans une ville fluviale réputée pour l'art, la banque et le commerce, ce navigateur a vu son propre prénom donner leur nom à une paire entière de continents.",
    explanation: "Amerigo Vespucci explora le littoral d'un continent nouvellement atteint et soutint qu'il ne faisait pas partie de l'Asie, mais qu'il s'agissait d'une terre entièrement distincte inconnue des géographes précédents. Un cartographe utilisa plus tard une forme latinisée de son prénom pour désigner ce nouveau continent, et le nom finit par s'étendre aux deux continents de l'hémisphère occidental.",
  },
  fleming_birth: {
    name: "Alexander Fleming",
    clue: "Né dans une ferme, ce scientifique revint de vacances et trouva une moisissure ayant tué des bactéries dans une boîte oubliée, menant au premier antibiotique.",
    explanation: "Alexander Fleming remarqua qu'une moisissure ayant contaminé par hasard l'une de ses cultures bactériennes avait tué les bactéries environnantes. Il identifia la substance active produite par la moisissure, qui devint le premier antibiotique largement utilisé et sauva d'innombrables vies menacées par des infections auparavant mortelles.",
  },
  lindbergh_birth: {
    name: "Charles Lindbergh",
    clue: "Né dans une ville fluviale, cet aviateur devint le premier à traverser un océan en solitaire sans escale, à bord d'un avion monomoteur pendant plus d'un jour.",
    explanation: "Charles Lindbergh traversa l'océan Atlantique en solitaire et sans escale à bord d'un petit avion monomoteur, un vol qui dura plus de trente-trois heures et le rendit instantanément célèbre dans le monde entier. Ce fut la première traversée en solitaire et sans escale de cet océan en avion, bien que des vols antérieurs l'aient déjà traversé avec un équipage.",
  },
  bobby_fischer_1972_match: {
    name: "Bobby Fischer",
    clue: "Dans un pays reculé du grand nord, ce prodige des échecs a battu un champion en titre d'une puissance rivale, dans un match suivi dans le monde entier.",
    explanation: "Bobby Fischer battit le champion du monde d'échecs en titre lors d'un match très médiatisé organisé dans un petit pays du nord choisi comme terrain neutre. Le match fut suivi de près à travers le monde comme un affrontement symbolique entre deux puissances rivales, et la victoire de Fischer fit de lui le premier joueur de son pays à détenir le titre mondial.",
  },
  cortes_birth: {
    name: "Hernán Cortés",
    clue: "Né dans une petite ville, ce soldat mena une petite expédition qui renversa un vaste empire riche grâce à des alliances locales et une épidémie dévastatrice.",
    explanation: "Hernán Cortés mena quelques centaines de soldats au cœur d'un puissant empire, nouant des alliances avec des peuples qui en voulaient à leurs dirigeants et profitant d'une vague de maladies importées qui décima la population de l'empire. En deux ans, la capitale était tombée et le souverain de l'empire était mort, ce qui donna à Cortés le contrôle d'un immense nouveau territoire.",
  },
  alaska_earthquake_1964: {
    name: "Grand séisme de l'Alaska",
    clue: "Le long d'un littoral adossé à une longue chaîne de montagnes, le deuxième séisme le plus puissant jamais enregistré a secoué le sol près de cinq minutes.",
    explanation: "Un puissant séisme sous-marin déclencha de violentes secousses qui durèrent plusieurs minutes et provoqua des tsunamis qui frappèrent les communautés côtières. Il reste le séisme le plus puissant jamais enregistré dans sa région et l'un des plus puissants jamais mesurés sur Terre.",
  },
  asimov_birth: {
    name: "Isaac Asimov",
    clue: "Né dans un petit village, cet écrivain de science-fiction publia plus de 500 livres et inventa les trois lois du comportement des robots dans ses récits.",
    explanation: "Isaac Asimov était un écrivain et biochimiste américain d'origine russe, l'un des auteurs les plus prolifiques de l'histoire. Il est surtout connu pour son cycle de Fondation et pour ses trois lois de la robotique, qui ont durablement influencé la façon dont la fiction représente les robots.",
  },
  kubrick_birth: {
    name: "Stanley Kubrick",
    clue: "Né dans la ville des gratte-ciel et des taxis jaunes, ce réalisateur tourna une épopée spatiale et un film d'horreur dans un hôtel hanté et enneigé.",
    explanation: "Stanley Kubrick était un cinéaste américain dont les films méticuleux, traversant de nombreux genres, incluent une épopée de science-fiction devenue un classique et un film d'horreur culte se déroulant dans un hôtel hanté. Il est considéré comme l'un des réalisateurs les plus influents de l'histoire du cinéma.",
  },
  brando_birth: {
    name: "Marlon Brando",
    clue: "Né dans une ville des plaines, cet acteur contribua à un style de jeu naturaliste et interpréta plus tard un vieux parrain du crime dans un film culte.",
    explanation: "Marlon Brando était un acteur américain largement considéré comme l'un des plus grands et des plus influents interprètes du cinéma, crédité d'avoir popularisé une méthode de jeu naturaliste. Il remporta deux Oscars, dont un pour son rôle de chef d'une famille du crime organisé.",
  },
  elizabeth_taylor_birth: {
    name: "Elizabeth Taylor",
    clue: "Née dans la capitale des bus rouges à impériale, cette actrice aux yeux violets partit enfant devenir une star d'Hollywood aux huit mariages.",
    explanation: "Elizabeth Taylor était une actrice britannico-américaine devenue l'une des plus grandes stars de l'âge d'or hollywoodien, célèbre autant pour son jeu que pour sa vie privée, marquée par huit mariages. Elle remporta deux Oscars de la meilleure actrice.",
  },
  stephen_king_birth: {
    name: "Stephen King",
    clue: "Né dans une ville côtière, cet auteur écrivit des romans d'horreur mettant en scène un clown tueur, une adolescente télékinésiste et une voiture possédée.",
    explanation: "Stephen King est un auteur américain connu pour ses romans d'horreur, de suspense et de fantasy, dont plusieurs ont été adaptés en films et séries à succès.",
  },
  carl_jung_birth: {
    name: "Carl Jung",
    clue: "Né au bord d'un lac partagé par trois pays, ce psychiatre imagina un inconscient commun aux symboles universels et inventa les mots introverti et extraverti.",
    explanation: "Carl Jung était un psychiatre suisse qui fonda la psychologie analytique après avoir rompu avec son collaborateur Sigmund Freud. Ses idées sur les archétypes et un inconscient collectif restent très influentes en psychologie comme dans la culture populaire.",
  },
  malala_yousafzai_birth: {
    name: "Malala Yousafzai",
    clue: "Née dans une vallée, cette militante fut blessée par des hommes armés pour son combat pour l'éducation des filles, plus jeune lauréate d'un prix de la paix.",
    explanation: "Malala Yousafzai est une militante pakistanaise pour l'éducation des filles qui survécut à une tentative d'assassinat par des talibans pakistanais en réaction à son engagement. Elle devint ensuite la plus jeune personne à recevoir le prix Nobel de la paix.",
  },
  rembrandt_birth: {
    name: "Rembrandt",
    clue: "Né dans une ville universitaire, ce peintre devint l'un des plus célèbres artistes de l'histoire, connu pour son jeu de lumière et quatre-vingts autoportraits.",
    explanation: "Rembrandt van Rijn était un peintre et graveur néerlandais largement considéré comme l'un des plus grands artistes visuels de l'histoire de l'art occidental. Entre peintures, gravures et dessins, il laissa un nombre inhabituellement élevé d'autoportraits, réalisés tout au long de sa carrière.",
  },
  alexandre_dumas_birth: {
    name: "Alexandre Dumas",
    clue: "Né dans une petite ville de Picardie, ce romancier écrivit les aventures d'un homme emprisonné à tort cherchant vengeance et de duellistes fidèles à leur roi.",
    explanation: "Alexandre Dumas était un écrivain français dont les romans d'aventures, dont Le Comte de Monte-Cristo et Les Trois Mousquetaires, comptent parmi les plus lus au monde.",
  },
  vivaldi_birth: {
    name: "Antonio Vivaldi",
    clue: "Né dans une ville de lagune réputée pour ses canaux, ce prêtre compositeur, surnommé pour ses cheveux roux, écrivit quatre concertos représentant les saisons.",
    explanation: "Antonio Vivaldi était un compositeur, violoniste et prêtre catholique italien surnommé le Prêtre roux en raison de sa chevelure rousse. Son ensemble de quatre concertos pour violon, connu sous le nom des Quatre Saisons, demeure l'une des œuvres les plus jouées du répertoire classique.",
  },
  mendeleev_birth: {
    name: "Dmitri Mendeleïev",
    clue: "Né cadet d'une famille nombreuse dans une ville lointaine, ce chimiste classa les éléments connus par poids dans un tableau, prédisant des éléments inconnus.",
    explanation: "Dmitri Mendeleïev était un chimiste russe qui créa une des premières versions du tableau périodique des éléments. Il laissa des cases vides pour des éléments dont il pensait l'existence probable mais qui n'avaient pas encore été découverts, et ses prédictions sur leurs propriétés se révélèrent exactes.",
  },
  hitchcock_birth: {
    name: "Alfred Hitchcock",
    clue: "Né à la lisière d'une grande capitale, ce cinéaste réalisa des thrillers devenus des classiques et apparaissait brièvement dans presque tous ses films.",
    explanation: "Alfred Hitchcock était un cinéaste anglais surnommé le maître du suspense, célèbre pour des thrillers explorant l'angoisse, le voyeurisme et la culpabilité. Il apparaissait brièvement dans la plupart des plus de cinquante longs métrages qu'il réalisa.",
  },
  hawking_birth: {
    name: "Stephen Hawking",
    clue: "Né dans une ville universitaire, ce physicien écrivit un livre à succès sur l'univers, perdant peu à peu, sur des décennies, ses mouvements puis la parole.",
    explanation: "Stephen Hawking était un physicien théoricien et cosmologiste anglais qui étudia les trous noirs et les origines de l'univers. Diagnostiqué jeune avec une maladie du motoneurone, il poursuivit ses recherches pendant des décennies, finissant par communiquer uniquement grâce à un synthétiseur vocal.",
  },
  sun_tzu_birth: {
    name: "Sun Tzu",
    clue: "Né à une époque de royaumes en guerre, ce stratège écrivit un traité sur la ruse militaire encore étudié par des officiers et des chefs d'entreprise.",
    explanation: "Sun Tzu était un général et stratège traditionnellement crédité de la paternité de L'Art de la guerre, un traité ancien sur la stratégie et la ruse militaires. Il reste l'un des textes militaires les plus influents jamais écrits et il est aussi largement lu en dehors des cercles militaires.",
  },
  stravinsky_birth: {
    name: "Igor Stravinsky",
    clue: "Né dans une ville côtière face à la capitale impériale sur la Neva, ce compositeur écrivit un ballet au rythme si choquant que sa première déclencha une émeute.",
    explanation: "Igor Stravinsky était un compositeur d'origine russe, l'une des figures les plus influentes de la musique classique moderne. Son ballet Le Sacre du printemps, avec ses harmonies dissonantes et ses rythmes irréguliers, provoqua une quasi-émeute dans le public lors de sa première à Paris.",
  },
  schrodinger_birth: {
    name: "Erwin Schrödinger",
    clue: "Né dans une vieille capitale, ce physicien imagina une expérience avec une boîte scellée, un poison et un chat vivant et mort tant qu'il n'est pas observé.",
    explanation: "Erwin Schrödinger était un physicien autrichien qui apporta des contributions majeures à la mécanique quantique, dont l'équation d'onde qui porte son nom. Son expérience de pensée sur un chat dans un état incertain visait à illustrer l'étrangeté de la superposition quantique, non à décrire une expérience réelle.",
  },
  hanshin_earthquake_1995: {
    name: "Séisme de Kobe",
    clue: "Ce séisme renversa une autoroute surélevée et rompit une ligne à grande vitesse, dans un grand port de la mer intérieure de Seto, bâti sur des remblais.",
    explanation: "Le grand séisme de Hanshin frappa la ville portuaire japonaise de Kobe, tuant plus de six mille personnes et causant d'importants dégâts aux autoroutes, aux voies ferrées et aux îles artificielles du port. Il entraîna d'importantes réformes dans la préparation aux séismes et les normes de construction du pays.",
  },
  christchurch_earthquake_2011: {
    name: "Séisme de Christchurch",
    clue: "Dans la plus grande ville de l'île du Sud, un séisme à midi abat la flèche de la cathédrale, plus meurtrier qu'un séisme plus fort quelques mois avant.",
    explanation: "Ce séisme frappa Christchurch, en Nouvelle-Zélande, pendant l'heure du déjeuner, se révélant bien plus meurtrier qu'un séisme plus puissant ayant frappé la même région quelques mois auparavant. Il causa d'importantes destructions dans le centre-ville, dont l'effondrement partiel de la cathédrale qui symbolisait de longue date la ville.",
  },
  descartes_birth: {
    name: "René Descartes",
    clue: "Né au bord d'une rivière, ce philosophe jugea que la seule chose dont il ne pouvait douter était qu'il doutait, et bâtit une philosophie sur ce fait.",
    explanation: "René Descartes est surtout connu pour la formule « je pense, donc je suis », point de départ de sa philosophie. Il a aussi inventé le système de coordonnées utilisé pour repérer des points sur un graphique, d'où le nom de coordonnées cartésiennes.",
  },
  kepler_birth: {
    name: "Johannes Kepler",
    clue: "Né dans une petite ville, cet astronome utilisa les observations minutieuses d'un confrère pour prouver que les orbites sont des ellipses, non des cercles.",
    explanation: "Johannes Kepler utilisa les observations détaillées de l'astronome Tycho Brahe pour établir ses trois lois du mouvement des planètes, montrant pour la première fois que les planètes se déplacent en ellipses autour du soleil plutôt qu'en cercles parfaits.",
  },
  faraday_birth: {
    name: "Michael Faraday",
    clue: "Né dans la famille d'un forgeron, ce savant autodidacte montra qu'un aimant en mouvement produit un courant dans un fil, base de tout générateur actuel.",
    explanation: "Michael Faraday découvrit l'induction électromagnétique, le principe selon lequel un champ magnétique changeant crée un courant électrique. Sa découverte est à la base de tous les générateurs et transformateurs utilisés aujourd'hui, malgré une scolarité quasi inexistante.",
  },
  avicenna_birth: {
    name: "Avicenne",
    clue: "Né près d'une ville-oasis de la route de la soie, non loin de l'Amou-Daria, ce médecin écrivit un manuel qui forma encore des médecins cinq siècles plus tard.",
    explanation: "Avicenne, né Ibn Sina, écrivit le Canon de la médecine, une vaste encyclopédie qui organisa les connaissances médicales existantes et devint un manuel de référence dans le monde musulman puis dans les universités européennes pendant des siècles.",
  },
  omar_khayyam_birth: {
    name: "Omar Khayyam",
    clue: "Né dans une ville marchande, ce mathématicien conçut un calendrier précis à un jour près sur des milliers d'années, et écrivit une poésie encore lue partout.",
    explanation: "Omar Khayyam contribua à concevoir le calendrier djalali, dont la durée moyenne de l'année était plus précise que celle du calendrier utilisé par la majeure partie du monde aujourd'hui. Il est aussi célèbre pour les Rubaiyat, un recueil de quatrains traduit dans des dizaines de langues.",
  },
  zheng_he_birth: {
    name: "Zheng He",
    clue: "Né loin des côtes, cet amiral commanda une flotte de plus de 300 navires, la plus grande jamais vue, pour rencontrer des souverains lointains.",
    explanation: "Zheng He mena sept grandes expéditions navales avec des dizaines de milliers de marins, atteignant la péninsule arabique et la côte est de l'Afrique, des décennies avant les fameux grands voyages d'exploration européens.",
  },
  humboldt_birth: {
    name: "Alexander von Humboldt",
    clue: "Né dans une famille noble, ce naturaliste grimpa plus haut sur un volcan qu'aucun humain avant lui, un record d'altitude qui tint plusieurs décennies.",
    explanation: "La tentative d'Alexander von Humboldt d'atteindre le sommet du Chimborazo, dans les Andes, établit un record d'altitude en alpinisme. Ses observations lors de cette ascension contribuèrent à fonder la biogéographie, l'étude de la répartition des espèces dans le monde.",
  },
  ptolemy_birth: {
    name: "Ptolémée",
    clue: "Né le long du Nil, cet astronome et cartographe traça le premier une grille numérotée sur une carte du monde connu, méthode encore utilisée aujourd'hui.",
    explanation: "La Géographie de Ptolémée introduisit une grille de coordonnées de latitude et de longitude dans la cartographie, et son modèle astronomique, bien que plus tard réfuté, domina la pensée scientifique pendant plus de mille ans.",
  },
  mendel_birth: {
    name: "Gregor Mendel",
    clue: "Né dans une famille de paysans, ce moine suivit sept générations de petits pois dans un jardin monastique et révéla les règles cachées de l'hérédité.",
    explanation: "Les expériences minutieuses de Gregor Mendel sur les petits pois révélèrent comment les caractères se transmettent des parents à leur descendance, posant les bases mathématiques de la génétique moderne, bien que son travail soit resté largement ignoré jusqu'à des décennies après sa mort.",
  },
  lavoisier_birth: {
    name: "Antoine Lavoisier",
    clue: "Né dans l'aisance, ce chimiste à qui l'on prête « rien ne se perd, rien ne se crée » prouva que la combustion consomme un gaz de l'air.",
    explanation: "Antoine Lavoisier identifia le rôle de l'oxygène dans la combustion et la rouille, réfutant la théorie du phlogistique et contribuant à établir la loi de conservation de la masse, des idées fondatrices de la chimie moderne.",
  },
  giordano_bruno_birth: {
    name: "Giordano Bruno",
    clue: "Né près du volcan qui ensevelit jadis une célèbre ville antique, ce moine disait le soleil une étoile parmi d'autres, ce qui lui valut un procès.",
    explanation: "Giordano Bruno proposa que l'univers était infini et peuplé d'innombrables étoiles semblables au soleil, chacune potentiellement entourée de planètes. Son refus de renier ces idées, entre autres, mena à son exécution.",
  },
  fibonacci_birth: {
    name: "Fibonacci",
    clue: "Né dans une cité marchande maritime, ce fils de négociant popularisa le système décimal encore utilisé partout, ainsi qu'une suite de nombres portant son nom.",
    explanation: "Le livre de Fibonacci, le Liber Abaci, introduisit le système de numération indo-arabe auprès des marchands et des savants, remplaçant des méthodes de calcul plus anciennes et lourdes. La suite de nombres qui porte son nom apparaît partout dans la nature, des pétales de fleurs aux coquillages en spirale.",
  },
  naguib_mahfouz_birth: {
    name: "Naguib Mahfouz",
    clue: "Né dans un vieux quartier d'une ville fortifiée, ce romancier devint le premier écrivain de sa langue maternelle à recevoir le prix Nobel de littérature.",
    explanation: "Naguib Mahfouz écrivit des dizaines de romans retraçant la vie de plusieurs générations dans sa ville natale. Il devint le premier écrivain de langue arabe à recevoir le prix Nobel de littérature.",
  },
  li_bai_birth: {
    name: "Li Bai",
    clue: "Né dans une oasis de la route de la soie, loin à l'ouest de l'empire, ce poète Tang erra en chantant le vin et la lune, parmi les plus grands de sa langue.",
    explanation: "Li Bai est traditionnellement classé aux côtés de Du Fu parmi les plus grands poètes de la tradition classique de sa langue. Des milliers de ses poèmes ont survécu, célébrant souvent la nature, l'amitié et le vin, et il reste aujourd'hui largement mémorisé et cité.",
  },
  laozi_birth: {
    name: "Laozi",
    clue: "Selon la tradition, ce sage né dans la plaine du fleuve Jaune écrivit un court livre sur la Voie, devenu le grand rival de l'école de Confucius.",
    explanation: "Laozi est traditionnellement considéré comme l'auteur du Tao-tö-king, un texte bref mais d'une influence immense sur l'harmonie avec l'ordre naturel. On sait très peu de choses vérifiables sur sa vie, et certains historiens doutent même de son existence.",
  },
  paul_the_apostle_birth: {
    name: "Paul de Tarse",
    clue: "Fils d'un fabricant de tentes né près de la côte sud de l'Anatolie, il persécuta une foi nouvelle avant qu'une conversion le rende célèbre par ses écrits.",
    explanation: "Paul de Tarse persécuta d'abord les partisans du mouvement chrétien naissant avant de vivre une expérience de conversion soudaine. Il écrivit ensuite une grande partie des lettres qui composent le Nouveau Testament et voyagea beaucoup pour répandre la nouvelle foi.",
  },
  orwell_birth: {
    name: "George Orwell",
    clue: "Né dans la plaine du Gange, au pied de l'Himalaya, sous administration coloniale, cet écrivain inventa « police de la pensée » et « grand frère ».",
    explanation: "George Orwell, né Eric Arthur Blair, écrivit des romans satiriques et dystopiques mettant en garde contre le contrôle totalitaire et la propagande. Les termes qu'il inventa pour désigner la surveillance et le langage manipulé sont entrés dans l'usage courant de nombreuses langues.",
  },
  goethe_birth: {
    name: "Naissance de Goethe",
    clue: "Au bord du Main, cette ville vit naître un écrivain : son héros le plus célèbre, un savant, vend son âme au diable pour tout connaître.",
    explanation: "Le drame en deux parties de Johann Wolfgang von Goethe suit un érudit qui conclut un pacte avec le diable dans sa quête effrénée de savoir et d'expérience. L'histoire est devenue une expression courante pour désigner le fait de vendre son âme contre le pouvoir ou la réussite.",
  },
  arthur_conan_doyle_birth: {
    name: "Arthur Conan Doyle",
    clue: "Né dans une ville perchée au nord, cet écrivain a créé un détective fumeur de pipe qui résout des crimes par pure déduction, aidé d'un fidèle ami médecin.",
    explanation: "Arthur Conan Doyle était médecin avant de se consacrer entièrement à l'écriture après le succès de ses récits policiers. Sherlock Holmes résout ses enquêtes par l'observation minutieuse et la pure logique, aidé de son ami et biographe le docteur Watson, et reste l'un des personnages de fiction les plus adaptés au monde.",
  },
  lewis_carroll_birth: {
    name: "Lewis Carroll",
    clue: "Né dans un petit village, cet auteur et mathématicien a écrit une fillette tombée dans un terrier, au pays des animaux parlants et des thés extravagants.",
    explanation: "Lewis Carroll, de son vrai nom Charles Dodgson, était enseignant en mathématiques et a écrit Les Aventures d'Alice au pays des merveilles pour une jeune amie, puis une suite, De l'autre côté du miroir. Son goût du jeu de mots et du non-sens, notamment dans le poème Jabberwocky, reste célébré pour son mélange de logique et de fantaisie.",
  },
  hg_wells_birth: {
    name: "H. G. Wells",
    clue: "Né dans une ville de marché, ce romancier a imaginé des Martiens envahissant la Terre en tripodes géants, et une machine capable de voyager dans le temps.",
    explanation: "H. G. Wells a écrit certains des premiers récits de science-fiction les plus influents, imaginant une invasion extraterrestre dans La Guerre des mondes et un engin capable de voyager dans le temps dans La Machine à explorer le temps. Son œuvre a contribué à fonder le genre et a été adaptée d'innombrables fois au cinéma, à la radio et dans les livres.",
  },
  rosalind_franklin_birth: {
    name: "Cliché 51 de Rosalind Franklin",
    clue: "Dans ce laboratoire universitaire prestigieux, le cliché aux rayons X d'une chimiste révéla la double hélice, le plan transmis par chaque cellule.",
    explanation: "Rosalind Franklin était une chimiste dont les images de diffraction aux rayons X de fibres d'ADN, en particulier l'une d'elles connue comme le cliché 51, ont fourni des preuves essentielles pour établir la structure en double hélice de la molécule. Elle est morte avant que l'importance de sa découverte soit pleinement reconnue, et n'a reçu une reconnaissance plus large que plus tard.",
  },
  edmond_halley_birth: {
    name: "Edmond Halley",
    clue: "Né dans une capitale portuaire animée, cet astronome a calculé qu'une comète vue depuis des siècles reviendrait après sa mort, ce qui s'est produit comme prévu.",
    explanation: "Edmond Halley a étudié des relevés d'observations passées de comètes et a compris qu'une même comète revenait régulièrement selon un cycle fixe. Il a prédit sa prochaine apparition, survenue comme annoncé après sa mort, et la comète, désormais appelée comète de Halley, porte son nom depuis.",
  },
  nostradamus_birth: {
    name: "Nostradamus",
    clue: "Né dans une ville ensoleillée du sud, cet astrologue a écrit des centaines de quatrains cryptiques, encore lus aujourd'hui comme des prédictions de l'avenir.",
    explanation: "Nostradamus était apothicaire et médecin, et a aussi écrit Les Propheties, un recueil de courts quatrains ambigus que des lecteurs interprètent depuis longtemps comme des prédictions de guerres, de catastrophes et d'autres événements à venir. Les chercheurs estiment généralement que ces textes sont assez vagues pour être réinterprétés après coup afin de correspondre à presque n'importe quel événement.",
  },
  jacques_cousteau_birth: {
    name: "Jacques Cousteau",
    clue: "Né près d'un large estuaire côtier, cet officier de marine a conçu l'un des premiers appareils pour plonger en profondeur, puis a filmé ce qu'il a découvert.",
    explanation: "Jacques Cousteau a coinventé le scaphandre autonome, l'un des premiers systèmes de plongée autonome, qui lui a permis d'explorer et de filmer l'océan plus librement que les plongeurs équipés de lourdes combinaisons à casque avant lui. Ses documentaires et émissions de télévision ont fait découvrir la vie marine à des millions de spectateurs.",
  },
  steve_irwin_birth: {
    name: "Steve Irwin",
    clue: "Né près d'une grande ville du sud, cet animateur attrapait des crocodiles à mains nues, mort quand une raie lui a transpercé la poitrine en tournage.",
    explanation: "Steve Irwin dirigeait un parc animalier fondé par ses parents et est devenu mondialement connu pour manipuler des animaux dangereux, en particulier des crocodiles, devant la caméra avec un commentaire plein d'enthousiasme. Il est mort après qu'une raie lui a transpercé la poitrine avec son dard alors qu'il tournait un documentaire sur un récif corallien.",
  },
  paulo_coelho_birth: {
    name: "Paulo Coelho",
    clue: "Né dans une ville au carnaval célèbre, au pied de montagnes vertes, ce romancier écrivit un best-seller sur un berger traversant le désert en quête d'un trésor.",
    explanation: "Paulo Coelho a d'abord été parolier avant de se tourner vers la fiction. Son roman L'Alchimiste, qui suit un berger quittant sa maison pour chercher un trésor après un rêve récurrent, est devenu l'un des livres les plus vendus de l'histoire et a été traduit dans des dizaines de langues.",
  },
  margaret_atwood_birth: {
    name: "Margaret Atwood",
    clue: "Née dans une capitale du nord proche du Saint-Laurent, cette romancière a imaginé une théocratie forçant les femmes fertiles à enfanter pour les puissants.",
    explanation: "Margaret Atwood est une romancière et poétesse dont le roman dystopique La Servante écarlate imagine un État totalitaire qui prive les femmes de leurs droits et force certaines d'entre elles à la procréation forcée pour la classe dirigeante. Le roman a depuis été adapté en une série télévisée très suivie.",
  },
  srinivasa_ramanujan_birth: {
    name: "Srinivasa Ramanujan",
    clue: "Né pauvre dans une ville de temples, ce mathématicien autodidacte a envoyé ses théorèmes à un mathématicien réputé à l'étranger, qui y a vu un génie pur.",
    explanation: "Srinivasa Ramanujan n'avait presque aucune formation mathématique formelle, mais a développé seul des milliers de résultats originaux en théorie des nombres et en séries infinies. Il a envoyé certaines de ses découvertes au mathématicien G. H. Hardy, à Cambridge, qui a reconnu leur brillance et l'a fait venir pour collaborer avec lui.",
  },
  david_livingstone_victoria_falls: {
    name: "David Livingstone",
    clue: "Le long d'un grand fleuve traversant un continent, un explorateur documente une chute d'eau large d'un kilomètre, la nommant pour une reine restée au pays.",
    explanation: "David Livingstone était un missionnaire et explorateur qui a parcouru l'intérieur de l'Afrique, cartographiant des fleuves et militant contre la traite des esclaves. Il a nommé la chute d'eau Victoria Falls en l'honneur de la reine de Grande-Bretagne, et elle reste l'une des plus grandes chutes d'eau du monde par sa largeur et sa hauteur combinées.",
  },
  thomas_aquinas_birth: {
    name: "Thomas Aquinas",
    clue: "Né fils de comte dans un château perché de la péninsule en forme de botte, ce frère écrivit une œuvre massive expliquant la foi chrétienne par la logique.",
    explanation: "Thomas d'Aquin était un frère dominicain dont l'œuvre massive, la Somme théologique, tentait d'expliquer systématiquement la foi chrétienne par la logique et l'argumentation raisonnée plutôt que par la seule foi. Sa synthèse entre la foi et la philosophie aristotélicienne reste fondatrice pour la théologie catholique et une grande partie de la philosophie occidentale.",
  },
  toni_morrison_birth: {
    name: "Toni Morrison",
    clue: "Née près de vastes lacs d'eau douce à cheval sur une frontière, cette romancière a raconté une mère hantée par la fille tuée pour lui épargner l'esclavage.",
    explanation: "Le roman de Toni Morrison, Beloved, suit une ancienne esclave hantée par le fantôme de la fille qu'elle a tuée plutôt que de la voir renvoyée en esclavage. Le roman a remporté d'importantes récompenses littéraires, et Morrison a ensuite reçu le prix Nobel de littérature pour l'ensemble de son œuvre.",
  },
  noam_chomsky_birth: {
    name: "Noam Chomsky",
    clue: "Né dans une grande ville de l'est, ce linguiste a proposé une grammaire universelle innée, transformant la linguistique, l'un des savants les plus cités.",
    explanation: "Noam Chomsky a proposé que les humains naissent avec une capacité innée pour le langage, une idée connue comme la grammaire universelle, qui a transformé le champ de la linguistique. Il a aussi beaucoup écrit sur la politique et les médias, et compte parmi les universitaires les plus cités, toutes disciplines confondues.",
  },
  tchaikovsky_birth: {
    name: "Piotr Ilitch Tchaïkovski",
    clue: "Né dans une petite ville industrielle, ce compositeur a écrit un ballet où un casse-noisette prend vie et affronte un roi des souris, joué chaque hiver.",
    explanation: "Piotr Ilitch Tchaïkovski a composé Casse-Noisette, un ballet où le casse-noisette en bois d'une fillette prend vie et affronte un roi des souris, ainsi que d'autres ballets et œuvres orchestrales largement joués. Sa musique fut parmi les premières compositions de son pays à connaître un succès durable à l'étranger.",
  },
  hypatia_birth: {
    name: "Hypatie",
    clue: "Née dans une grande ville portuaire méditerranéenne, cette philosophe et astronome fut l'une des premières mathématiciennes bien documentées de l'histoire.",
    explanation: "Hypatie a enseigné les mathématiques, l'astronomie et la philosophie à Alexandrie, attirant des élèves venus de loin et conseillant des responsables de la ville. Elle a été tuée par une foule lors d'une période de conflits politiques et religieux dans la ville, et sa vie est devenue le symbole à la fois du savoir et des dangers de la violence politique.",
  },
  sergey_brin_birth: {
    name: "Sergey Brin",
    clue: "Né dans une grande capitale du bloc de l'Est aux hivers rigoureux, cet entrepreneur émigré enfant a cofondé un moteur de recherche devenu un verbe.",
    explanation: "Sergey Brin a émigré enfant puis a rencontré Larry Page alors qu'il était étudiant en doctorat, et ensemble ils ont construit un moteur de recherche qui classait les résultats selon le nombre d'autres pages qui y renvoyaient. Cette entreprise est devenue l'une des plus valorisées au monde, et son nom est devenu un verbe courant pour désigner une recherche en ligne.",
  },
  vermeer_birth: {
    name: "Johannes Vermeer",
    clue: "Né dans une petite ville de canaux du pays des moulins, près de la mer du Nord, ce peintre a peint une jeune fille au turban bleu et à la boucle de perle.",
    explanation: "Johannes Vermeer est né à Delft, une ville néerlandaise sillonnée de canaux, où il a passé presque toute sa vie. Son tableau d'une jeune fille au turban bleu et à la boucle de perle est aujourd'hui l'une des images les plus reproduites de l'histoire de l'art, parfois surnommée la Joconde du Nord.",
  },
  raphael_birth: {
    name: "Raphaël",
    clue: "Né dans une ville de collines, la fresque de ce peintre représentant des philosophes antiques orne le palais d'un chef religieux, sommet de la peinture.",
    explanation: "Raphaël est né à Urbino, une ville de collines du centre de l'Italie. Sa fresque L'École d'Athènes, qui réunit les philosophes de l'Antiquité grecque, orne une salle du palais apostolique du Vatican et compte parmi les sommets de la Haute Renaissance.",
  },
  goya_birth: {
    name: "Francisco Goya",
    clue: "Né dans un village de la vallée de l'Èbre, ce peintre a peint une exécution nocturne au fusil, éclairée par une lanterne, tableau bouleversant contre la guerre.",
    explanation: "Francisco Goya est né près de Saragosse, une ville sur l'Èbre, dans le nord de l'Espagne. Son tableau montrant des civils exécutés au fusil, la nuit, éclairés par une seule lanterne, reste l'une des dénonciations les plus puissantes de la guerre dans l'histoire de l'art.",
  },
  cezanne_birth: {
    name: "Paul Cézanne",
    clue: "Né dans une ville de collines du sud, ce peintre a peint sans cesse la même montagne, décomposant ses formes en volumes géométriques annonçant l'art moderne.",
    explanation: "Paul Cézanne est né à Aix-en-Provence, dans le sud de la France. Il a peint des dizaines de fois la montagne Sainte-Victoire toute proche, simplifiant ses formes en plans géométriques, une approche qui a aidé à relier l'impressionnisme aux mouvements d'art abstrait qui ont suivi.",
  },
  pollock_birth: {
    name: "Jackson Pollock",
    clue: "Né dans une petite ville d'éleveurs, ce peintre projetait et laissait couler la peinture sur des toiles posées au sol, fondant un style abstrait très influent.",
    explanation: "Jackson Pollock est né à Cody, une petite ville d'éleveurs du Wyoming. Il est devenu une figure majeure de l'expressionnisme abstrait en projetant et en laissant couler la peinture sur des toiles posées au sol, une technique qui a changé la façon de peindre.",
  },
  matisse_birth: {
    name: "Henri Matisse",
    clue: "Né dans une ville textile, cet artiste s'est mis à découper des formes dans du papier peint sur le tard, quand la maladie l'empêchait de tenir un chevalet.",
    explanation: "Henri Matisse est né au Cateau-Cambrésis, une ville connue pour son industrie textile. Sur la fin de sa vie, la maladie le confinait largement à un fauteuil roulant, et il s'est alors mis à découper des formes audacieuses dans du papier peint plutôt que d'utiliser un pinceau, une technique qu'il appelait dessiner aux ciseaux.",
  },
  handel_birth: {
    name: "Georg Friedrich Haendel",
    clue: "Né dans une ville marchande de sel, ce compositeur a écrit un oratorio dont le chœur triomphal se chante encore debout, dans le monde entier chaque hiver.",
    explanation: "Georg Friedrich Haendel est né à Halle, une ville enrichie par le commerce du sel. Son oratorio Le Messie comprend le chœur du Hallelujah, un morceau si saisissant que le public se lève traditionnellement pour l'écouter, surtout lors des concerts d'hiver.",
  },
  verdi_birth: {
    name: "Giuseppe Verdi",
    clue: "Né dans un village agricole de la plaine du Pô, ce compositeur écrivit un air d'opéra sur une femme inconstante devenu l'un des airs les plus sifflés au monde.",
    explanation: "Giuseppe Verdi est né près de Busseto, un petit village agricole. Son opéra Rigoletto comprend l'air La donna è mobile, sur une femme inconstante, devenu l'un des airs les plus reconnus et sifflés de tout l'opéra.",
  },
  bergman_birth: {
    name: "Ingmar Bergman",
    clue: "Né dans une ville universitaire, ce réalisateur a filmé un chevalier jouant aux échecs contre la mort sur une plage venteuse, scène depuis souvent parodiée.",
    explanation: "Ingmar Bergman est né à Uppsala, une ville universitaire suédoise. Son film Le Septième Sceau montre un chevalier jouant aux échecs contre une figure de la mort sur une plage venteuse, une image depuis reprise et parodiée dans d'innombrables films et séries.",
  },
  fellini_birth: {
    name: "Federico Fellini",
    clue: "Né dans une station balnéaire de l'Adriatique, ce réalisateur filma une actrice entrant tout habillée dans une fontaine la nuit, symbole d'un luxe extravagant.",
    explanation: "Federico Fellini est né à Rimini, une ville balnéaire sur l'Adriatique. Son film La Dolce Vita comprend une scène où une actrice entre dans une fontaine la nuit, en robe de soirée, une image devenue le symbole d'un luxe décadent.",
  },
  satyajit_ray_birth: {
    name: "Satyajit Ray",
    clue: "Né dans une grande ville portuaire, ce réalisateur a financé une trilogie en noir et blanc sur l'enfance d'un garçon pauvre, chef d'œuvre du cinéma mondial.",
    explanation: "Satyajit Ray est né à Calcutta. Il a financé une grande partie de son premier film sur ses propres économies, achevant une trilogie en noir et blanc qui suit l'enfance et la jeunesse d'un garçon pauvre, aujourd'hui considérée comme un jalon du cinéma mondial.",
  },
  eratosthenes_birth: {
    name: "Ératosthène",
    clue: "Né dans une ville côtière, ce savant a dirigé une bibliothèque légendaire, calculant la taille de la planète via des ombres de midi dans deux villes éloignées.",
    explanation: "Ératosthène est né à Cyrène, une ville côtière d'Afrique du Nord. Il devint plus tard le grand bibliothécaire d'Alexandrie, où il calcula la circonférence de la Terre en comparant l'angle de l'ombre du soleil de midi dans deux villes très éloignées l'une de l'autre, obtenant un résultat étonnamment précis.",
  },
  rontgen_birth: {
    name: "Wilhelm Röntgen",
    clue: "Né dans une ville d'une région vallonnée, ce physicien a découvert un rayon mystérieux capable de photographier les os d'une main vivante, révolution médicale.",
    explanation: "Wilhelm Röntgen est né à Lennep, une petite ville d'une région vallonnée d'Allemagne. En expérimentant avec un tube à rayons cathodiques dans son laboratoire, il découvrit une forme de rayonnement capable de traverser la chair et de photographier les os d'une main vivante, qu'il baptisa rayons X.",
  },
  watt_birth: {
    name: "James Watt",
    clue: "Né dans une ville portuaire de construction navale, cet ingénieur a amélioré une machine transformant la vapeur en mouvement rotatif pour les usines.",
    explanation: "James Watt est né à Greenock, une ville portuaire de construction navale sur la côte ouest de l'Écosse. Ses améliorations de la machine à vapeur lui ont permis de transformer la poussée de la vapeur en un mouvement rotatif régulier, rendant possible l'entraînement des machines dans les moulins et les usines.",
  },
  euler_birth: {
    name: "Leonhard Euler",
    clue: "Né dans une ville entourée de montagnes, ce mathématicien resta si prolifique qu'après avoir perdu la vue, il continuait à dicter de nouveaux travaux.",
    explanation: "Leonhard Euler est né à Bâle, une ville entourée de collines proches des montagnes. Il resta extraordinairement productif même après avoir perdu presque toute sa vue, dictant de nouveaux travaux et calculs à des assistants et continuant à publier pendant des années.",
  },
  ibn_al_haytham_birth: {
    name: "Ibn al-Haytham",
    clue: "Né dans un port proche du confluent du Tigre et de l'Euphrate, ce savant prouva que l'on voit car la lumière entre dans l'œil, avec une chambre noire.",
    explanation: "Ibn al-Haytham est né à Bassora, une ville sur un delta fluvial au Moyen-Orient. Il renversa l'idée ancienne selon laquelle l'œil émettrait des rayons pour voir, montrant au contraire que la vision fonctionne parce que la lumière entre dans l'œil, et il démontra la propagation de la lumière grâce à une pièce sombre percée d'un petit trou projetant une image sur le mur opposé.",
  },
  pauling_birth: {
    name: "Linus Pauling",
    clue: "Né dans une ville du Nord-Ouest pacifique pluvieux, ce chimiste reçut un Nobel pour avoir expliqué la liaison des atomes, puis un autre contre l'arme nucléaire.",
    explanation: "Linus Pauling est né à Portland, une ville de la côte pacifique des États-Unis. Il a reçu le prix Nobel de chimie pour avoir expliqué comment les atomes se lient entre eux, puis, des années plus tard, le prix Nobel de la paix pour sa campagne contre les essais d'armes nucléaires.",
  },
  raman_birth: {
    name: "C. V. Raman",
    clue: "Né dans une ville aux temples sur une rivière, ce physicien a découvert un léger changement de couleur de la lumière traversant une matière transparente.",
    explanation: "C. V. Raman est né à Tiruchirapalli, une ville aux temples sur la rivière Kaveri, dans le sud de l'Inde. Il découvrit que la lumière traversant une matière transparente change légèrement de longueur d'onde, un effet aujourd'hui appelé diffusion Raman et utilisé comme technique d'identification des matériaux.",
  },
  pavlov_birth: {
    name: "Ivan Pavlov",
    clue: "Né dans une famille de prêtre, dans une ville sur l'Oka, au pays des tsars, il entraîne des chiens à saliver au son d'une cloche, preuve d'un réflexe appris.",
    explanation: "Les expériences d'Ivan Pavlov sur le conditionnement classique, où des chiens apprenaient à saliver à un signal associé à la nourriture, ont fait de lui un fondateur des sciences du comportement et lui ont valu un prix Nobel pour ses travaux sur la digestion.",
  },
  hubble_birth: {
    name: "Edwin Hubble",
    clue: "Né dans une petite ville agricole du Midwest, cet astronome, qui a donné son nom à un célèbre télescope spatial, prouva l'existence d'autres galaxies.",
    explanation: "Les observations d'Edwin Hubble ont prouvé que de nombreux objets pris pour des nuages de gaz dans notre propre galaxie étaient en fait des galaxies distinctes, et que celles-ci s'éloignent les unes des autres à mesure que l'univers s'étend.",
  },
  pascal_birth: {
    name: "Blaise Pascal",
    clue: "Né dans la famille d'un fonctionnaire des impôts, ce mathématicien construit adolescent une des premières machines à calculer pour aider son père.",
    explanation: "Blaise Pascal a construit sa machine à calculer pour accélérer le travail fiscal de son père, avant de poser les bases de la théorie des probabilités et d'étudier la pression dans les fluides, dont une unité porte aujourd'hui son nom.",
  },
  gauss_birth: {
    name: "Carl Friedrich Gauss",
    clue: "Né pauvre dans une ville ducale du pays de Bach et des frères Grimm, ce mathématicien stupéfia son instituteur en additionnant d'un coup les nombres de 1 à 100.",
    explanation: "Carl Friedrich Gauss a ensuite apporté des contributions majeures à la théorie des nombres, aux statistiques et à l'astronomie, et reste considéré comme l'un des plus grands mathématiciens de l'histoire.",
  },
  anne_boleyn_birth: {
    name: "Anne Boleyn",
    clue: "Née dans une famille noble, elle devient la seconde épouse d'un roi, avant d'être décapitée sur son ordre un peu plus de trois ans après leur mariage.",
    explanation: "Le mariage d'Anne Boleyn avec Henri VIII, et son désir désespéré d'y mettre fin, a contribué à la rupture de l'Angleterre avec Rome. Elle fut exécutée pour trahison, et sa fille devint plus tard une reine célèbre à part entière.",
  },
  tasman_birth: {
    name: "Abel Tasman",
    clue: "Né dans un village agricole, ce marin dirige la flotte d'une compagnie commerciale et devient le premier capitaine à atteindre une île qui portera son nom.",
    explanation: "Les voyages d'Abel Tasman pour la Compagnie néerlandaise des Indes orientales ont fait de lui le premier Européen connu à atteindre l'île appelée plus tard Tasmanie, et il a aussi longé les côtes de ce qui deviendra la Nouvelle-Zélande, sans jamais poser le pied sur le continent de l'un ou l'autre pays.",
  },
  chagall_birth: {
    name: "Marc Chagall",
    clue: "Né dans une famille juive pauvre d'une petite ville, ce peintre peuple ses toiles d'amoureux, de violonistes et de vaches flottant au-dessus des toits.",
    explanation: "Marc Chagall s'est inspiré des souvenirs de sa ville natale pour ses images oniriques, avant de devenir célèbre pour ses grands vitraux et ses plafonds peints dans des bâtiments publics du monde entier.",
  },
  munch_birth: {
    name: "Edvard Munch",
    clue: "Né dans une famille marquée par la maladie et des deuils précoces, ce peintre peint une silhouette hurlante sous un ciel tourbillonnant, rouge sang.",
    explanation: "Le tableau d'Edvard Munch représentant une silhouette hurlant sur un pont est devenu l'une des images les plus reproduites de l'histoire de l'art, expression de l'angoisse qui a marqué une grande partie de sa vie.",
  },
  joseph_conrad_birth: {
    name: "Joseph Conrad",
    clue: "Né dans une famille exilée pour s'être opposée à une domination étrangère, il devient marin puis romancier célèbre dans une langue apprise à l'âge adulte.",
    explanation: "Joseph Conrad a passé près de vingt ans en mer avant de s'installer en Angleterre et d'écrire des romans dans sa troisième langue, s'inspirant largement de ses propres voyages vers des fleuves et des côtes lointaines.",
  },
  robert_boyle_birth: {
    name: "Robert Boyle",
    clue: "Né dans un château au bord d'une rivière, au sud de l'île d'Émeraude, ce fils de noble montra qu'un gaz comprimé de moitié voit sa pression doubler.",
    explanation: "Les expériences de Robert Boyle avec des pompes à air ont établi la relation entre la pression et le volume d'un gaz, et son insistance sur l'expérience rigoureuse a contribué à fonder la chimie moderne.",
  },
  dalton_birth: {
    name: "John Dalton",
    clue: "Né chez des tisserands près du mur d'Hadrien, ce savant qui voyait mal les couleurs étudia ce trouble et pensa la matière faite d'atomes de poids fixe.",
    explanation: "Le daltonisme de John Dalton l'a conduit à publier la première étude scientifique de cette particularité visuelle, encore appelée ainsi dans plusieurs langues, et sa théorie atomique est devenue un fondement de la chimie moderne.",
  },
  diego_rivera_birth: {
    name: "Diego Rivera",
    clue: "Né dans une ville minière des hauts plateaux au nord de l'ancienne capitale aztèque, ce peintre couvre les murs publics de fresques d'ouvriers et de rebelles.",
    explanation: "Les fresques monumentales de Diego Rivera, peintes sur les murs de bâtiments gouvernementaux puis dans des villes à l'étranger, ont contribué à faire de la peinture murale un art majeur et un moyen de raconter l'histoire d'une nation au grand public.",
  },
  pissarro_birth: {
    name: "Camille Pissarro",
    clue: "Né sur une petite île des îles Vierges, aux Caraïbes, ce peintre aida à fonder un grand mouvement captant en extérieur les effets fugaces de la lumière.",
    explanation: "Camille Pissarro fut une figure fondatrice de l'impressionnisme, exposant à chacune des expositions du groupe, et devint plus tard le mentor de plusieurs peintres plus jeunes qui développèrent le style à leur tour.",
  },
  oprah_winfrey_birth: {
    name: "Oprah Winfrey",
    clue: "Née dans la pauvreté d'une petite ville du Mississippi rural, cette animatrice bâtit un empire médiatique et devient la première femme noire milliardaire.",
    explanation: "L'émission de télévision d'Oprah Winfrey a été diffusée en syndication nationale pendant vingt-cinq ans, et son entreprise médiatique, son club de lecture et ses actions philanthropiques ont fait d'elle l'une des femmes les plus influentes au monde.",
  },
  sappho_birth: {
    name: "Sappho",
    clue: "Née sur une petite île dans l'Antiquité, cette poétesse doit à ses vers sur l'amour et le désir d'être la plus célèbre poétesse du monde antique.",
    explanation: "La poésie lyrique de Sappho, écrite pour être chantée avec un instrument à cordes, ne nous est parvenue aujourd'hui que sous forme de fragments, mais les auteurs anciens la comptaient parmi les plus grands poètes de tous les temps.",
  },
  solzhenitsyn_birth: {
    name: "Alexandre Soljenitsyne",
    clue: "Né peu après la mort de son père, cet écrivain est emprisonné des années dans des camps de travail forcé, avant de dénoncer ce système dans un livre majeur.",
    explanation: "Alexandre Soljenitsyne a passé des années dans des camps de travail forcé après avoir critiqué les dirigeants de son pays, avant d'écrire un récit monumental de ce système concentrationnaire qui a contribué à le faire connaître au monde entier, ce qui lui valut le prix Nobel de littérature.",
  },
  ohm_birth: {
    name: "Georg Ohm",
    clue: "Né dans la famille d'un serrurier autodidacte en mathématiques, ce physicien, enseignant de métier, établit le lien exact entre tension, courant et résistance.",
    explanation: "La loi de Georg Ohm décrivant la relation entre tension, courant et résistance fut d'abord accueillie avec scepticisme, mais elle est aujourd'hui l'une des règles de base enseignées en électronique, et une unité de résistance porte son nom.",
  },
  sima_qian_birth: {
    name: "Sima Qian",
    clue: "Né au bord du fleuve Jaune, sur le plateau de lœss, cet historien de cour fut mutilé pour avoir défendu un général, mais acheva une histoire de deux mille ans.",
    explanation: "Sima Qian choisit d'endurer la castration plutôt que d'accepter l'exécution, afin de pouvoir achever son histoire monumentale, une œuvre qui devint le modèle des histoires officielles pendant les deux mille années suivantes.",
  },
  capek_birth: {
    name: "Karel Čapek",
    clue: "Né dans une petite ville, ce dramaturge a écrit une pièce sur des humains artificiels produits en série, qui a donné au monde le mot robot.",
    explanation: "Karel Čapek était un écrivain tchèque dont la pièce la plus célèbre imagine une usine fabriquant des ouvriers artificiels, qui finissent par se retourner contre leurs créateurs humains. Son frère a suggéré ce nom, emprunté à un ancien mot désignant le travail forcé, qui s'est vite répandu dans toutes les langues.",
  },
  lorca_birth: {
    name: "Federico García Lorca",
    clue: "Né dans un village agricole d'Andalousie, ce poète et dramaturge a été fusillé dans les premiers jours d'une guerre civile qui a déchiré son pays.",
    explanation: "Federico García Lorca était un poète et dramaturge espagnol célèbre pour une œuvre mêlant tradition populaire et images vivement musicales. Quelques jours après le début de la guerre civile espagnole, il fut arrêté par les forces nationalistes et exécuté près de sa région natale ; son corps n'a jamais été retrouvé.",
  },
  diderot_birth: {
    name: "Denis Diderot",
    clue: "Né dans une petite ville, ce philosophe a dirigé pendant des décennies une équipe qui a produit une encyclopédie immense rassemblant tout le savoir humain.",
    explanation: "Denis Diderot était un philosophe et écrivain français des Lumières, rédacteur en chef de l'Encyclopédie, une vaste œuvre de référence couvrant les sciences, l'industrie et les arts. Le projet a affronté des années de censure avant que ses nombreux volumes ne soient enfin achevés.",
  },
  tom_cruise_birth: {
    name: "Tom Cruise",
    clue: "Né dans une ville proche des rives du lac Ontario, cet acteur a bâti sa carrière sur une saga d'espionnage et un film de pilotes de chasse, sans doublure.",
    explanation: "Tom Cruise est un acteur américain connu pour une longue saga d'espionnage et pour avoir incarné un pilote de chasse casse-cou en début de carrière. Il a réalisé nombre de ses propres cascades, dont s'accrocher au flanc d'un avion en vol et escalader le plus haut gratte-ciel du monde.",
  },
  jim_carrey_birth: {
    name: "Jim Carrey",
    clue: "Né dans une petite ville au nord du lac Ontario, ce comédien a joué un détective animalier loufoque, un homme incapable de mentir et un vilain au teint vert.",
    explanation: "Jim Carrey est un acteur et comédien canado-américain connu pour ses expressions faciales élastiques et son énergie débordante à l'écran. Il s'est ensuite tourné vers des rôles dramatiques plus sérieux, salués pour révéler un côté plus sombre et réfléchi de son talent.",
  },
  anthony_quinn_birth: {
    name: "Anthony Quinn",
    clue: "Né dans une petite ville, cet acteur a remporté deux récompenses de jeu, puis a incarné un insulaire fantasque apprenant à un visiteur à danser sans retenue.",
    explanation: "Anthony Quinn était un acteur mexicano-américain connu pour ses personnages excentriques et hauts en couleur dans plus d'une centaine de films. Son rôle le plus aimé le voit apprendre à un timide visiteur étranger à se libérer et à savourer la vie, dansant avec lui sur une plage dans la scène finale du film.",
  },
  el_greco_birth: {
    name: "Le Greco",
    clue: "Né sur une grande île méditerranéenne, ce peintre a développé un style distinctif fait de figures allongées et flamboyantes, en avance sur son temps.",
    explanation: "Le Greco s'est formé comme peintre d'icônes avant de s'installer d'abord en Italie puis en Espagne, où il produisit les figures dramatiques et allongées pour lesquelles on le connaît. Longtemps jugée excentrique, son œuvre fut redécouverte des générations plus tard et exerça une influence majeure sur l'art moderne.",
  },
  grieg_birth: {
    name: "Edvard Grieg",
    clue: "Né dans une ville côtière entourée de fjords, il écrivit une musique de trolls dansant dans une salle de montagne, culte dans les dessins animés.",
    explanation: "Edvard Grieg était un compositeur norvégien dont la musique de scène pour une pièce de théâtre comprend ce morceau galopant et de plus en plus rapide connu sous le nom du Hall du roi de la montagne. Il puisait largement dans les mélodies populaires norvégiennes, donnant à la musique de son pays une identité reconnue dans le monde entier.",
  },
  hillenburg_birth: {
    name: "Stephen Hillenburg",
    clue: "Né dans une petite ville, cet ancien professeur de biologie marine a créé un dessin animé sur une éponge de mer joyeuse, l'un des plus regardés au monde.",
    explanation: "Stephen Hillenburg était un animateur américain et éducateur en sciences marines, créateur de Bob l'éponge, qui s'est appuyé sur ses années d'enseignement de la biologie marine pour concevoir une distribution de personnages sous-marins. La série est devenue l'une des plus longues et des plus traduites de l'histoire de la télévision.",
  },
  dawkins_birth: {
    name: "Richard Dawkins",
    clue: "Né dans une grande ville, ce biologiste a écrit un livre influent affirmant que la sélection naturelle agit vraiment sur les gènes, non les organismes.",
    explanation: "Richard Dawkins est un biologiste évolutionniste britannique dont le livre a popularisé une vision de l'évolution centrée sur les gènes, présentant les êtres vivants comme des véhicules construits par des gènes en compétition pour se répliquer. L'ouvrage a aussi introduit un terme aujourd'hui très répandu pour désigner une unité d'information culturelle qui se propage entre les personnes.",
  },
  lawrence_bragg_birth: {
    name: "Lawrence Bragg",
    clue: "Né dans une ville de la côte sud du continent-île, ce physicien devint le plus jeune lauréat d'un Nobel scientifique, partagé avec son propre père.",
    explanation: "Lawrence Bragg était un physicien né en Australie qui mit au point, avec son père, une méthode pour déterminer la structure atomique des cristaux à l'aide des rayons X. Il avait vingt-cinq ans lorsqu'ils reçurent ensemble le prix, un record pour un Nobel scientifique qui tient toujours.",
  },
  heyerdahl_birth: {
    name: "Thor Heyerdahl",
    clue: "Né dans une ville côtière, cet aventurier a construit un radeau de balsa et navigué des milliers de km pour tester une théorie sur des migrations anciennes.",
    explanation: "Thor Heyerdahl était un ethnographe norvégien convaincu que d'anciens peuples d'Amérique du Sud avaient pu peupler des îles du Pacifique à bord de radeaux rudimentaires. Pour le prouver, lui et un petit équipage traversèrent l'océan à bord d'un radeau de balsa construit à la main, se nourrissant de poissons et d'eau de pluie tout au long du voyage.",
  },
  leonov_birth: {
    name: "Alexeï Leonov",
    clue: "Né dans un petit village sibérien, ce cosmonaute est devenu le premier être humain de l'histoire à quitter son vaisseau et à flotter librement dans l'espace.",
    explanation: "Alexeï Leonov était un cosmonaute russe qui sortit de sa capsule, relié par un câble, pendant une douzaine de minutes, devenant le premier homme à marcher dans l'espace. Sa combinaison gonfla tellement dans le vide qu'il eut du mal à rentrer par le sas, un détail dangereux resté longtemps discret. L'exploit survint en pleine rivalité spatiale entre deux grandes puissances mondiales.",
  },
  tu_youyou_birth: {
    name: "Tu Youyou",
    clue: "Née dans un port près de l'embouchure du Yangzi, cette chimiste chercha dans de vieux textes un remède au paludisme et isola un composé qui sauva des millions.",
    explanation: "Tu Youyou est une chimiste pharmaceutique chinoise qui a dirigé un programme de recherche chargé de trouver de nouveaux traitements contre le paludisme. En relisant un texte séculaire sur les remèdes à base de plantes, elle a identifié un composé de l'armoise annuelle, aujourd'hui à la base du traitement antipaludique le plus efficace au monde.",
  },
  ronald_ross_birth: {
    name: "Ronald Ross",
    clue: "Né au pied des plus hauts sommets du monde, fils de général, ce médecin prouva qu'un insecte piqueur transmet le paludisme, découverte couronnée d'un Nobel.",
    explanation: "Ronald Ross était un médecin britannique travaillant comme médecin militaire en Inde lorsqu'il disséqua des moustiques et trouva des parasites du paludisme se développant dans leur estomac, prouvant comment la maladie se transmet. Sa découverte a ouvert la voie à des programmes de lutte antimoustique qui ont sauvé d'innombrables vies.",
  },
  bardeen_birth: {
    name: "John Bardeen",
    clue: "Né dans une ville de lacs à l'ouest du lac Michigan, ce physicien co-inventa le transistor, interrupteur minuscule des ordinateurs, et reçut deux fois le Nobel.",
    explanation: "John Bardeen était un physicien américain qui, avec deux collègues dans un laboratoire de recherche, construisit le premier transistor fonctionnel, remplaçant les tubes à vide encombrants et fragiles dans les appareils électroniques. Il reçut un second prix de physique pour avoir expliqué comment certains matériaux perdent toute résistance électrique à très basse température.",
  },
  townes_birth: {
    name: "Charles Townes",
    clue: "Né dans une petite ville, ce physicien a construit le premier appareil à produire un faisceau pur de micro-ondes, posant les bases du laser et un prix Nobel.",
    explanation: "Charles Townes était un physicien américain qui construisit d'abord un appareil amplifiant les micro-ondes par émission stimulée, puis élabora la théorie permettant de faire de même avec la lumière visible. Ce travail théorique a permis à d'autres chercheurs de construire le premier laser fonctionnel, une technologie aujourd'hui utilisée en chirurgie, dans les communications et dans de nombreux appareils du quotidien.",
  },
  cabral_birth: {
    name: "Pedro Álvares Cabral",
    clue: "Né dans une petite ville, la flotte de ce navigateur en route vers un comptoir lointain dériva et toucha une terre qui redessina la carte d'un continent.",
    explanation: "Pedro Álvares Cabral était un noble portugais envoyé ouvrir une route maritime commerciale vers l'Inde. En s'éloignant loin dans l'Atlantique pour profiter de vents favorables, sa flotte dériva vers l'ouest et aperçut une terre qui se révéla être la côte du Brésil, qu'il revendiqua pour le Portugal avant de poursuivre sa route vers l'Inde.",
  },
  dennis_hopper_birth: {
    name: "Dennis Hopper",
    clue: "Né dans une ville de bétail légendaire du Far West, cet acteur-réalisateur tourna un road trip à moto fauché qui transforma le cinéma de son pays.",
    explanation: "Dennis Hopper a été à la fois acteur et réalisateur d'Easy Rider, un road movie contestataire tourné avec un tout petit budget, devenu un succès énorme qui a contribué à lancer tout un courant de films plus provocateurs et à petit budget.",
  },
  paul_allen_birth: {
    name: "Paul Allen",
    clue: "Né dans un port pluvieux sur le Pacifique, un programmeur et son ami d'enfance codent pour un kit d'ordinateur et fondent un géant de l'informatique.",
    explanation: "Paul Allen a cofondé Microsoft avec Bill Gates après avoir lu un article de magazine sur un kit d'ordinateur pionnier et décidé qu'il fallait agir immédiatement. Il a ensuite financé des projets scientifiques et philanthropiques, dont une recherche de signaux radio extraterrestres.",
  },
  julian_assange_birth: {
    name: "Julian Assange",
    clue: "Né dans une ville côtière sous les tropiques, un rédacteur fonde un site qui publie des documents militaires et diplomatiques, provoquant un tollé mondial.",
    explanation: "Julian Assange a fondé WikiLeaks, qui a publié des rapports militaires américains classifiés et des câbles diplomatiques transmis par une analyste du renseignement militaire, provoquant des réactions furieuses de gouvernements du monde entier.",
  },
  maryam_mirzakhani_birth: {
    name: "Naissance de Maryam Mirzakhani",
    clue: "Au pied des monts Alborz, cette capitale vit naître la première femme à remporter la plus prestigieuse récompense des mathématiques.",
    explanation: "Maryam Mirzakhani a reçu la médaille Fields pour ses travaux sur la géométrie des surfaces courbes, devenant à la fois la première femme et la première Iranienne à la recevoir. Elle est morte d'un cancer à 40 ans, et sa victoire reste un moment marquant pour les femmes en mathématiques.",
  },
  selma_lagerlof_birth: {
    name: "Selma Lagerlöf",
    clue: "Née sur un domaine familial dans les forêts au nord du lac Vänern, une romancière devient la première femme à recevoir le prix Nobel de littérature.",
    explanation: "Selma Lagerlöf s'est inspirée du folklore et des légendes suédoises dans ses romans et recueils de récits, et sa victoire a ouvert le prix Nobel de littérature aux femmes pour la première fois de son histoire.",
  },
  brahmagupta_birth: {
    name: "Brahmagupta",
    clue: "Né dans une ville marchande du désert du Rajasthan, sur une route caravanière, un mathématicien est le premier à traiter le zéro comme un vrai nombre.",
    explanation: "Le traité de Brahmagupta a donné au zéro un traitement mathématique formel pour la première fois, avec des règles de calcul incluant le zéro et les nombres négatifs, des idées qui se sont ensuite répandues vers l'ouest et ont transformé les mathématiques.",
  },
  humphry_davy_birth: {
    name: "Humphry Davy",
    clue: "Né dans un petit port sur une côte rocheuse, un chimiste invente une lampe qui protège les mineurs des gaz inflammables, évitant des explosions mortelles.",
    explanation: "La lampe de sécurité de Humphry Davy utilisait un fin grillage métallique pour empêcher la flamme d'atteindre le gaz dans les mines de charbon, sauvant d'innombrables vies sous terre. Il a aussi utilisé le courant électrique pour isoler plusieurs éléments chimiques pour la première fois, dont le potassium et le sodium.",
  },
  robert_wilson_birth: {
    name: "Robert Wilson",
    clue: "Né dans une grande ville pétrolière du Texas, un astronome relie un grésillement capté par une antenne en cornet à la chaleur restée du début de l'univers.",
    explanation: "Robert Wilson et un collègue ont d'abord soupçonné une interférence, allant jusqu'à blâmer des fientes de pigeon dans leur antenne, avant de comprendre qu'ils avaient détecté un rayonnement résiduel des tout premiers instants de l'univers, l'une des preuves les plus solides de la façon dont il a commencé.",
  },
  emanuel_lasker_birth: {
    name: "Emanuel Lasker",
    clue: "Né dans une petite ville entourée de lacs et de forêts, un joueur d'échecs devient champion du monde et bat le record de longévité au sommet du jeu.",
    explanation: "Emanuel Lasker a détenu le titre de champion du monde d'échecs pendant 27 ans, le règne le plus long de tout champion officiellement reconnu, tout en travaillant aussi comme mathématicien et philosophe en parallèle de sa carrière aux échecs.",
  },
  chandrasekhar_birth: {
    name: "Subrahmanyan Chandrasekhar",
    clue: "Né dans une grande ville du Pendjab, un astrophysicien calcule la masse limite au-delà de laquelle une étoile mourante s'effondre en objet plus dense.",
    explanation: "Subrahmanyan Chandrasekhar a effectué ce calcul alors qu'il était jeune, durant une longue traversée en bateau, montrant que toute étoile mourante plus lourde que cette limite doit s'effondrer davantage, en une étoile à neutrons ou un trou noir. La découverte a d'abord été rejetée par un astronome plus âgé, mais elle est aujourd'hui considérée comme fondamentale pour l'étude de la mort des étoiles.",
  },
  john_wayne_birth: {
    name: "John Wayne",
    clue: "Né dans une étendue de prairie balayée par le vent, cet acteur est devenu le visage du cow-boy robuste dans des dizaines de films western sur cinq décennies.",
    explanation: "John Wayne, né Marion Morrison, a joué dans des dizaines de films western et de guerre pendant l'âge d'or de Hollywood, devenant un symbole durable de la frontière américaine. Il a reçu à titre posthume la plus haute distinction civile du pays.",
  },
  quentin_tarantino_birth: {
    name: "Quentin Tarantino",
    clue: "Né dans l'État de la musique country et d'Elvis, ce réalisateur signe des polars ultraviolents racontés dans le désordre, primés au plus grand festival.",
    explanation: "Le film qui a lancé la carrière de Quentin Tarantino, un récit de gangsters raconté à travers des chapitres non chronologiques entrelacés, a remporté la Palme d'or au Festival de Cannes. Ses films sont connus pour leur violence stylisée, leurs dialogues truffés de références à la culture populaire et leurs hommages au cinéma.",
  },
  fitzgerald_birth: {
    name: "F. Scott Fitzgerald",
    clue: "Né dans une ville résidentielle tranquille, ce romancier écrivit un roman sur les fêtes d'un millionnaire mystérieux, données pour reconquérir un amour perdu.",
    explanation: "Le roman de F. Scott Fitzgerald Gatsby le Magnifique, narré par un jeune agent de change, dépeint le faste et le vide moral de la richesse des années folles. Malgré un succès commercial limité de son vivant, il est devenu un classique des lectures scolaires américaines.",
  },
  vonnegut_birth: {
    name: "Kurt Vonnegut",
    clue: "Né dans une ville du centre du pays, prisonnier de guerre, il survécut à un bombardement et écrivit un roman antiguerre à la phrase répétée à chaque mort.",
    explanation: "Kurt Vonnegut était prisonnier de guerre à Dresde, en Allemagne, lors du bombardement allié qui a détruit la ville. Il en a tiré Abattoir 5, un roman antiguerre teinté de science-fiction dont le narrateur répète 'c'est la vie' après chaque mort.",
  },
  sienkiewicz_birth: {
    name: "Naissance de Sienkiewicz",
    clue: "Dans les plaines à l'est de la Vistule, ce manoir vit naître un romancier qui raconta les fidèles persécutés d'une foi nouvelle dans un empire antique.",
    explanation: "Henryk Sienkiewicz a reçu le prix Nobel de littérature pour ses romans historiques. Son livre le plus connu, Quo Vadis, suit des chrétiens persécutés dans la Rome antique sous l'empereur Néron, et a été adapté en une somptueuse superproduction hollywoodienne.",
  },
  mussorgsky_birth: {
    name: "Modeste Moussorgski",
    clue: "Né dans un domaine rural près des sources de la Volga, ce compositeur dépeignit un sabbat de sorcières sur une montagne, animé plus tard avec un démon cornu.",
    explanation: "Le poème symphonique de Modeste Moussorgski, Une nuit sur le mont Chauve, dépeint un sabbat démoniaque et a ensuite été réorchestré pour la séquence du démon 'Tchernobog' dans le film d'animation Fantasia de Walt Disney, l'une des apparitions les plus célèbres de la musique classique à l'écran.",
  },
  rimsky_korsakov_birth: {
    name: "Nikolaï Rimski-Korsakov",
    clue: "Né dans une ville de province à l'est de la capitale impériale sur la Neva, cet officier de marine devenu compositeur imita le vol frénétique d'un bourdon.",
    explanation: "Nikolaï Rimski-Korsakov a composé Le Vol du bourdon comme interlude orchestral pour un opéra. Le morceau est depuis devenu l'une des mélodies les plus citées de la culture populaire, arrangé pour d'innombrables instruments et utilisé dans des dessins animés, des films et des jeux vidéo.",
  },
  pearl_buck_birth: {
    name: "Pearl S. Buck",
    clue: "Née au pied des Appalaches mais élevée à l'étranger par des missionnaires, cette écrivaine reçut un Nobel pour une saga paysanne située là où elle a grandi.",
    explanation: "Pearl S. Buck a grandi en Chine, où ses parents étaient missionnaires. Son roman La Terre chinoise, sur les difficultés d'une famille de paysans chinois, a remporté le prix Pulitzer et a contribué à faire d'elle la première Américaine à recevoir le prix Nobel de littérature.",
  },
  romanov_execution: {
    name: "Exécution de la famille Romanov",
    clue: "Dans les monts Oural, un monarque déchu et sa famille furent abattus par des gardes révolutionnaires au sous-sol d'une maison, fin d'une dynastie tricentenaire.",
    explanation: "Le tsar Nicolas II de Russie, son épouse et leurs cinq enfants ont été exécutés par des révolutionnaires bolcheviques dans une maison d'Ekaterinbourg, mettant fin au règne de trois siècles de la dynastie des Romanov. Le sort de la plus jeune fille, Anastasia, a inspiré des décennies de légendes et de fausses prétendantes.",
  },
  siege_of_yorktown: {
    name: "Siège de Yorktown",
    clue: "Au bord de la baie de Chesapeake, une armée impériale prise en étau par des troupes et une flotte alliées se rend, scellant une guerre d'indépendance coloniale.",
    explanation: "Le général britannique Cornwallis a rendu son armée à Yorktown après que les forces américaines et françaises l'ont acculé contre la rivière York, tandis qu'une flotte française bloquait toute fuite par la mer, mettant fin de fait aux combats de la guerre d'indépendance américaine.",
  },
  battle_of_gaugamela: {
    name: "Bataille de Gaugamèles",
    clue: "Dans une plaine proche des ruines de Ninive, un jeune roi dont l'armée avait conquis l'est de la Méditerranée brisa le plus grand empire de l'histoire.",
    explanation: "Alexandre le Grand a vaincu de façon décisive Darius III de l'empire perse achéménide à Gaugamèles, près de l'actuelle Mossoul en Irak. Cette victoire a livré à Alexandre l'intégralité de l'empire perse, alors le plus grand que le monde ait connu.",
  },
  battle_of_carrhae: {
    name: "Bataille de Carrhes",
    clue: "Dans les plaines sèches entre le haut Euphrate et le Tigre, une infanterie est encerclée par des archers montés tirant vers l'arrière en feignant de fuir.",
    explanation: "À Carrhes, une armée romaine commandée par Crassus fut anéantie par les archers à cheval parthes, qui feignaient de fuir pour mieux tirer vers l'arrière sur leurs poursuivants, une manœuvre appelée le tir du Parthe. L'expression anglaise 'parting shot' en serait, selon certains, dérivée.",
  },
  karlov_assassination: {
    name: "Assassinat d'Andreï Karlov",
    clue: "Dans une capitale du plateau anatolien, un policier abat un diplomate dans le dos en plein discours dans une galerie d'art, une image primée partout.",
    explanation: "L'ambassadeur russe Andreï Karlov a été assassiné à Ankara, en Turquie, par un policier hors service protestant contre l'implication russe dans la guerre civile syrienne. Une photographie de l'assassin debout au-dessus du corps de Karlov a remporté le prix World Press Photo de l'année.",
  },
  siege_of_belgrade_1456: {
    name: "Siège de Belgrade",
    clue: "Trois ans après la prise de Constantinople, l'armée d'un sultan est repoussée sur le Danube par une petite garnison, victoire saluée par les cloches de midi.",
    explanation: "Les forces hongroises et croisées, très inférieures en nombre, menées par Janos Hunyadi, ont brisé un siège ottoman massif de Belgrade. En célébration, le pape a ordonné que les cloches des églises de la chrétienté sonnent à midi, une tradition qui perdure aujourd'hui dans de nombreux pays.",
  },
  michelson_birth: {
    name: "Albert A. Michelson",
    clue: "Né dans les plaines du bassin de la Vistule, ce physicien mesura la vitesse de la lumière, premier de son pays d'adoption à gagner un Nobel scientifique.",
    explanation: "Les mesures précises de la vitesse de la lumière réalisées par Albert Michelson, notamment la célèbre expérience de Michelson-Morley, ont contribué à réfuter la théorie d'un éther porteur de lumière. Il devint le premier Américain à remporter un prix Nobel dans une discipline scientifique.",
  },
  abdus_salam_birth: {
    name: "Abdus Salam",
    clue: "Né dans une ville agricole du Pendjab, ce physicien montra que deux forces de la nature n'en sont qu'une, premier de sa foi à gagner un Nobel scientifique.",
    explanation: "Abdus Salam a partagé le prix Nobel de physique pour avoir unifié les forces électromagnétique et nucléaire faible en une seule théorie. Né dans ce qui est aujourd'hui le Pakistan, il fut le premier lauréat musulman dans les sciences.",
  },
  isidor_rabi_birth: {
    name: "Isidor Isaac Rabi",
    clue: "Né au creux de collines, la réaction perplexe de ce physicien face à une étrange particule est devenue une réplique culte : 'qui a commandé ça ?'",
    explanation: "Isidor Isaac Rabi a mis au point une méthode de résonance pour étudier les noyaux atomiques, à l'origine de l'IRM. En apprenant la découverte inattendue du muon, une particule sans rôle clair dans la théorie de l'époque, il aurait lancé : 'Qui a commandé ça ?'",
  },
  berzelius_birth: {
    name: "Jöns Jacob Berzelius",
    clue: "Né près d'un grand lac, au pays qui créera plus tard les prix Nobel, ce chimiste conçut les symboles d'une ou deux lettres désignant encore chaque élément.",
    explanation: "Jöns Jacob Berzelius a introduit le système moderne de symboles chimiques, comme O pour l'oxygène et Fe pour le fer, remplaçant d'anciennes notations picturales. Il a aussi déterminé les masses atomiques de nombreux éléments et est considéré comme un fondateur de la chimie moderne.",
  },
  metchnikoff_birth: {
    name: "Élie Metchnikoff",
    clue: "Né au bord d'une rivière, sur un domaine rural, ce biologiste découvrit des cellules sanguines qui engloutissent les germes, enseigné en cours de biologie.",
    explanation: "Élie Metchnikoff a découvert la phagocytose, le processus par lequel des globules blancs spécialisés engloutissent et détruisent des bactéries et d'autres envahisseurs, une découverte fondatrice de l'immunologie qui lui valut un prix Nobel partagé.",
  },
  ernest_lawrence_birth: {
    name: "Ernest Lawrence",
    clue: "Né dans les grandes plaines du nord, ce physicien inventa une machine à aimants pour accélérer des particules, à la base de certains appareils contre le cancer.",
    explanation: "Ernest Lawrence a inventé le cyclotron, un accélérateur de particules circulaire qui utilisait des champs magnétiques pour faire tourner des particules chargées à grande vitesse. Cette conception reste la base de nombreux accélérateurs de particules modernes, y compris certains utilisés en protonthérapie contre le cancer.",
  },
  battle_of_adwa: {
    name: "Bataille d'Adoua",
    clue: "L'armée d'un royaume montagneux, avec fusils, lances et canons pris, écrase une force coloniale envahissante et force son retrait, préservant son indépendance.",
    explanation: "La bataille d'Adoua vit les forces éthiopiennes sous l'empereur Ménélik II vaincre une armée italienne envahissante, garantissant la souveraineté de l'Éthiopie et en faisant l'un des rares États de son continent que les puissances coloniales ne conquirent jamais.",
  },
  battle_of_talas: {
    name: "Bataille de Talas",
    clue: "Une armée dirigée par un chef religieux et politique bat un rival près d'un fleuve ; des artisans papetiers captifs répandent leur savoir-faire vers l'ouest.",
    explanation: "La bataille de Talas s'acheva par une victoire abbasside sur une expédition de la dynastie Tang près de la rivière Talas. Des fabricants de papier chinois capturés lors de la bataille sont traditionnellement crédités d'avoir propagé la fabrication du papier vers le monde musulman puis vers l'Europe.",
  },
  battle_of_the_hydaspes: {
    name: "Bataille de l'Hydaspe",
    clue: "L'armée d'un conquérant affronte des éléphants de guerre pour la première fois sur une rive ; admirative du courage du roi vaincu, elle le rétablit au pouvoir.",
    explanation: "À la bataille de l'Hydaspe, Alexandre le Grand vainquit le roi Poros, dont les forces comprenaient des éléphants de guerre inconnus de l'armée envahissante. Impressionné par son courage, Alexandre rétablit Poros à la tête d'un territoire agrandi.",
  },
  zanzibar_revolution: {
    name: "Révolution de Zanzibar",
    clue: "Le monarque d'une île est renversé peu après l'indépendance de son royaume, quand la population majoritaire se soulève contre une minorité au pouvoir.",
    explanation: "La révolution de Zanzibar renversa le sultan de Zanzibar et son gouvernement à majorité arabe, quelques semaines après l'indépendance de Zanzibar vis-à-vis de la Grande-Bretagne. Le nouveau gouvernement fusionna bientôt avec le continent voisin pour former la Tanzanie.",
  },
  treaty_of_fes: {
    name: "Traité de Fès",
    clue: "Le monarque d'un royaume, assiégé dans son palais par une rébellion, cède l'administration de son pays à une puissance étrangère pour plus de quatre décennies.",
    explanation: "Le traité de Fès établit un protectorat français sur le Maroc. Le sultan Abd al-Hafid le signa alors qu'un soulèvement contre l'influence étrangère l'assiégeait dans son propre palais. L'administration française du pays dura plus de quatre décennies avant l'indépendance.",
  },
  gujarat_earthquake_2001: {
    name: "Séisme du Gujarat",
    clue: "Un puissant séisme pendant un défilé national frappe une région de marais salants asséchés, atteignant le degré maximal de l'échelle de dégâts à douze niveaux.",
    explanation: "Le séisme du Gujarat frappa l'ouest de l'Inde le jour de la fête de la République, tuant des dizaines de milliers de personnes. La ville la plus proche de l'épicentre fut presque entièrement détruite.",
  },
  rudolf_clausius_birth: {
    name: "Rudolf Clausius",
    clue: "Né dans une petite ville côtière, ce physicien nomme le concept d'entropie et pose l'une des lois fondamentales de la thermodynamique.",
    explanation: "Rudolf Clausius naquit à Koszalin, sur la côte de la Baltique. Il introduisit le concept d'entropie et formula l'un des premiers énoncés clairs du second principe de la thermodynamique.",
  },
  gottlob_frege_birth: {
    name: "Gottlob Frege",
    clue: "Né dans une petite ville portuaire, ce savant invente une logique symbolique qui fonde les mathématiques modernes, bien qu'ignoré de son vivant.",
    explanation: "Gottlob Frege naquit dans la ville portuaire de Wismar. Il développa la logique des prédicats moderne et est considéré comme un fondateur de la philosophie analytique, bien que la reconnaissance de son travail vint surtout après sa mort.",
  },
  robert_millikan_birth: {
    name: "Robert Millikan",
    clue: "Né dans une petite ville agricole, ce physicien conçoit une expérience à gouttelettes d'huile chargées pour mesurer la charge exacte d'un électron.",
    explanation: "Robert Millikan naquit à Morrison, dans l'Illinois. Son expérience de la goutte d'huile fournit la première mesure précise de la charge de l'électron, un travail pour lequel il reçut plus tard un prix de physique.",
  },
  preah_vihear_temple: {
    name: "Temple de Preah Vihear",
    clue: "Un temple bâti au sommet d'une falaise sur une crête devient le centre d'un différend frontalier vieux de décennies entre deux pays voisins.",
    explanation: "Le temple de Preah Vihear se dresse au sommet d'une falaise dans les monts Dangrek. La possession du site est disputée entre le Cambodge et la Thaïlande depuis des décennies, la question ayant été portée deux fois devant la Cour internationale de justice.",
  },
  amarna_akhetaten: {
    name: "Amarna",
    clue: "Un chef religieux et politique bâtit une capitale neuve vouée à un dieu solaire unique, délaissant l'ancien panthéon ; elle est désertée après sa mort.",
    explanation: "Amarna fut bâtie sous le nom d'Akhetaton, nouvelle capitale du pharaon Akhenaton, qui promut le culte du disque solaire Aton au détriment des dieux traditionnels de l'Égypte. La ville fut abandonnée quelques années après sa mort.",
  },
  tiwanaku: {
    name: "Tiwanaku",
    clue: "Près d'un vaste lac d'altitude, une civilisation bâtit une cité de blocs de pierre énormes tirés de carrières lointaines, sans roues ni bêtes de trait.",
    explanation: "Tiwanaku, près du lac Titicaca dans les Andes, fut le centre cérémoniel d'une civilisation qui influença les cultures andines ultérieures, y compris celle des Incas. Ses bâtisseurs déplacèrent d'énormes blocs de pierre sans véhicules à roues.",
  },
  arch_of_reunification: {
    name: "Arche de la Réunification",
    clue: "Une arche de béton figurant deux silhouettes drapées tendues l'une vers l'autre enjambe une route vers une frontière fortifiée, symbole d'une réunification.",
    explanation: "L'Arche de la Réunification se dressait au sud de Pyongyang, enjambant l'autoroute menant à la zone démilitarisée séparant la Corée du Nord et la Corée du Sud. Elle fut démolie après que la Corée du Nord eut abandonné l'objectif d'une réunification pacifique.",
  },
  tristan_tzara_birth: {
    name: "Tristan Tzara",
    clue: "Né dans une petite ville de marché, ce poète, partisan de poèmes composés en tirant des mots de journaux au hasard, cofonde un mouvement fondé sur le non-sens.",
    explanation: "Tristan Tzara naquit à Moinesti. Il devint une figure majeure d'un courant artistique anticonformiste qui rejetait l'esthétique conventionnelle par la performance absurde et la poésie, influençant plus tard le surréalisme et au-delà.",
  },
  sinclair_lewis_birth: {
    name: "Sinclair Lewis",
    clue: "Né dans une petite ville de la prairie qui inspira son roman le plus connu, cet écrivain devient le premier de son pays à remporter un prix littéraire majeur.",
    explanation: "Sinclair Lewis naquit à Sauk Centre, dans le Minnesota, ville qui inspira la ville fictive de son roman Main Street. Il devint le premier écrivain des États-Unis à remporter le prix Nobel de littérature.",
  },
  gabriela_mistral_birth: {
    name: "Gabriela Mistral",
    clue: "Née dans une petite ville de vallée montagneuse, cette poétesse devient la première personne de tout son continent à remporter le prix Nobel de littérature.",
    explanation: "Il s'agit de Gabriela Mistral, née à Vicuña, au Chili, qui a remporté le prix Nobel de littérature, devenant la première autrice d'Amérique latine à l'obtenir. Son portrait figure aujourd'hui sur les billets chiliens.",
  },
  zhu_xi_birth: {
    name: "Zhu Xi",
    clue: "Né dans une ville de vallée fluviale, ce lettré rédige des commentaires qui deviennent la référence des examens d'État pendant six siècles.",
    explanation: "Il s'agit de Zhu Xi, né à Youxi, dont la synthèse de la pensée confucéenne est devenue la base officielle des examens de la fonction publique impériale pendant environ six siècles, influençant l'éducation dans toute l'Asie de l'Est bien après sa mort.",
  },
  rudolf_steiner_birth: {
    name: "Rudolf Steiner",
    clue: "Né dans un petit village frontalier, ce penseur fonde un mouvement scolaire présent dans plus de mille écoles, bien avant la mode de l'agriculture biologique.",
    explanation: "Il s'agit de Rudolf Steiner, né dans l'actuelle Donji Kraljevec, fondateur du mouvement pédagogique Waldorf, qui compte aujourd'hui plus de mille écoles dans le monde, et de l'agriculture biodynamique, précurseur de l'agriculture biologique.",
  },
  nadine_gordimer_birth: {
    name: "Nadine Gordimer",
    clue: "Née dans une ville minière, cette romancière voit ses livres interdits par son gouvernement des décennies avant de remporter le prix Nobel de littérature.",
    explanation: "Il s'agit de Nadine Gordimer, née près de Springs, en Afrique du Sud, dont les romans dénonçant l'apartheid ont été interdits à plusieurs reprises par le gouvernement avant qu'elle ne reçoive le prix Nobel de littérature.",
  },
  temple_of_literature_hanoi: {
    name: "Temple de la Littérature",
    clue: "Un temple honorant un maître vénéré sert des siècles d'académie nationale, sa cour bordée de 82 stèles posées sur des tortues, nommant chacune un diplômé.",
    explanation: "Il s'agit du temple de la Littérature à Hanoï, qui a abrité l'Académie impériale, la toute première université nationale du pays, pendant plus de sept siècles. Ses stèles de pierre encore visibles, posées sur des tortues sculptées, portent les noms de plus d'un millier de lauréats des examens.",
  },
  mazar_e_quaid: {
    name: "Mazar-e-Quaid",
    clue: "Un mausolée de marbre blanc aux parois ajourées de cuivre est bâti pour le fondateur d'une nation, gardé par des soldats relevés chaque heure, jour et nuit.",
    explanation: "Il s'agit du Mazar-e-Quaid à Karachi, le mausolée de Muhammad Ali Jinnah, fondateur du Pakistan. Une garde d'honneur y change de poste toutes les heures, jour et nuit.",
  },
  freedom_monument_riga: {
    name: "Monument de la Liberté",
    clue: "Une colonne de pierre surmontée d'une statue de femme en cuivre tenant trois étoiles est financée par des dons publics, plus tard symbole indépendantiste.",
    explanation: "Il s'agit du monument de la Liberté à Riga, entièrement financé par des dons privés. Sa statue de cuivre, surnommée Milda, tient trois étoiles représentant les régions historiques du pays, et le site est devenu un point de ralliement pour le mouvement indépendantiste qui a suivi.",
  },
  chen_ning_yang_birth: {
    name: "Chen-Ning Yang",
    clue: "Né dans une ville fluviale, ce scientifique démontre qu'une loi de symétrie jugée fiable peut être brisée, partageant le prix Nobel l'année de sa confirmation.",
    explanation: "Il s'agit de Chen-Ning Yang, né à Hefei, qui démontre avec Tsung-Dao Lee que la symétrie de parité ne se vérifie pas toujours dans la nature. La prédiction est confirmée en quelques mois, et les deux scientifiques partagent le prix Nobel de physique la même année.",
  },
  scott_south_pole: {
    name: "Dernier camp de Scott",
    clue: "Un explorateur et ses compagnons meurent sous leur tente près d'un dépôt de ravitaillement, chargés de fossiles rocheux ramenés depuis l'extrémité du monde.",
    explanation: "Il s'agit du dernier campement de Robert Falcon Scott, sur le chemin du retour depuis le pôle Sud, à seulement une vingtaine de kilomètres du dépôt de ravitaillement le plus proche. Leur traîneau transportait encore des fossiles, les tout premiers jamais recueillis en Antarctique.",
  },
  korolev_baikonur: {
    name: "Base de lancement de Baïkonour",
    clue: "L'ingénieur en chef de cette base de lancement isolée reste secret des années, même après l'envoi du premier satellite et du premier humain dans l'espace.",
    explanation: "Il s'agit du cosmodrome de Baïkonour, dans la steppe kazakhe, dirigé par l'ingénieur en chef Sergueï Korolev, dont le nom et le rôle sont restés secrets pendant toute sa vie. Le premier satellite et le premier vol spatial habité ont tous deux été lancés depuis ce site.",
  },
  union_of_krewo: {
    name: "Union de Krewo",
    clue: "Dans un château, les promesses de mariage d'un jeune souverain unissent deux royaumes, formant plus tard l'une des plus grandes puissances de la région.",
    explanation: "Il s'agit de l'union de Krewo, signée au château de Krewo, par laquelle le grand-duc de Lituanie s'engage à épouser la reine de Pologne et à se convertir au christianisme, unissant les deux royaumes sous une même famille régnante et donnant naissance, à terme, à la République des Deux Nations.",
  },
  prespa_agreement: {
    name: "Accord de Prespa",
    clue: "Deux pays voisins mettent fin à un différend de plusieurs décennies sur le nom de l'un d'eux, en signant un accord au bord d'un lac qui touche trois pays.",
    explanation: "Il s'agit de l'accord de Prespa, signé au bord du lac Prespa, par lequel la Grèce et son voisin du nord règlent un différend vieux de vingt-sept ans sur l'usage du nom Macédoine.",
  },
  romanian_revolution_1989: {
    name: "Révolution roumaine",
    clue: "Le discours télévisé d'un dirigeant au pouvoir de longue date est interrompu par les huées de la foule ; il fuit en hélicoptère puis est vite exécuté.",
    explanation: "Il s'agit de la révolution roumaine, qui met fin au régime de Nicolae Ceaușescu après que son dernier discours public dans la capitale est perturbé par des huées, diffusées en direct avant la coupure du signal. Lui et son épouse s'enfuient en hélicoptère, sont capturés, puis exécutés après un procès militaire expéditif.",
  },
  lobachevsky_birth: {
    name: "Nikolaï Lobatchevski",
    clue: "Né dans une ville portuaire fluviale, ce mathématicien montre qu'un point admet plusieurs parallèles à une droite, une idée raillée puis dite révolutionnaire.",
    explanation: "Il s'agit de Nikolaï Lobatchevski, né près de Nijni Novgorod, dont la géométrie non euclidienne a été rejetée par le monde scientifique de son vivant avant de lui valoir, plus tard, le surnom de Copernic de la géométrie.",
  },
  abbasid_revolution: {
    name: "Révolution abbasside",
    clue: "Un soulèvement parti d'une ville oasis renverse une dynastie, déplaçant le pouvoir d'un empire vers une nouvelle capitale et ouvrant un âge d'or du savoir.",
    explanation: "Il s'agit de la révolution abbasside, partie de l'oasis de Merv, qui renverse le califat omeyyade et déplace le siège du pouvoir vers la ville nouvellement fondée de Bagdad, ouvrant une longue période d'essor scientifique et culturel.",
  },
  ashgabat_earthquake_1948: {
    name: "Séisme d'Achgabat",
    clue: "Un puissant séisme a rasé une capitale désertique, mais le secret imposé par le pouvoir en place a caché le vrai bilan humain au monde pendant des décennies.",
    explanation: "Ce séisme a détruit une capitale d'Asie centrale, tuant environ 100 000 personnes, mais le pouvoir en place a étouffé la nouvelle du désastre pendant des années, cachant son ampleur réelle au monde.",
  },
  sulawesi_earthquake_tsunami_2018: {
    name: "Séisme et tsunami de Sulawesi",
    clue: "Une ville côtière frappée par un séisme et un tsunami a vu le sol se liquéfier en quelques minutes, engloutissant des quartiers entiers sans prévenir.",
    explanation: "Un séisme près de Sulawesi, en Indonésie, a déclenché un tsunami et une liquéfaction du sol, un phénomène rare où un sol saturé d'eau se comporte soudain comme un liquide, engloutissant des quartiers entiers en quelques instants.",
  },
  western_xia_mausoleums: {
    name: "Mausolées des Xia occidentaux",
    clue: "Au pied de montagnes, neuf tombeaux royaux et des centaines d'autres marquent un empire si détruit que son écriture resta illisible pendant des siècles.",
    explanation: "Ce sont les tombeaux de l'empire Xia occidental, dont les souverains tangoutes utilisaient une écriture propre, mais qui fut anéanti si complètement par les conquérants mongols que sa langue resta indéchiffrée pendant des siècles.",
  },
  millennium_of_russia: {
    name: "Millénaire de la Russie",
    clue: "Un monument de bronze en forme de cloche, couvert de statues de souverains et de penseurs, marque mille ans depuis qu'un prince étranger fut invité à régner.",
    explanation: "Ce monument de Novgorod marque la fondation traditionnelle de l'État russe, lorsqu'un prince varègue nommé Riourik aurait été invité à gouverner des tribus locales rivales, fondant une dynastie qui dura des siècles.",
  },
  chan_chan: {
    name: "Chan Chan",
    clue: "Un empire sans écriture ni véhicules à roues a construit la plus grande ville de son époque presque entièrement en briques de boue séchées au soleil.",
    explanation: "Voici Chan Chan, capitale de l'empire chimú sur la côte du Pérou et la plus grande ville des Amériques précolombiennes. Construite presque entièrement en briques d'adobe, elle était dirigée par une noblesse héréditaire, sans écriture ni transport à roues, avant d'être conquise par les Incas.",
  },
  por_bazhyn: {
    name: "Por-Bazhyn",
    clue: "Sur une île au milieu d'un lac, des nomades ont bâti un palais copiant le style d'une civilisation lointaine, puis l'ont abandonné presque aussitôt achevé.",
    explanation: "Cette forteresse insulaire isolée du sud de la Sibérie fut construite par des khagans ouïghours dans un style emprunté à la Chine des Tang, puis transformée en monastère et abandonnée en quelques années, avant d'être détruite par un séisme et un incendie.",
  },
  lothal: {
    name: "Lothal",
    clue: "Dans un delta, une civilisation sans souverain connu construisit l'un des premiers chantiers navals au monde, puis s'éteignit quand la voie d'eau s'ensabla.",
    explanation: "Voici Lothal, une ville de la civilisation de la vallée de l'Indus, qui abritait l'un des plus anciens chantiers navals connus au monde. Comme le reste de cette civilisation, elle n'a laissé aucune écriture déchiffrée nommant un souverain, et déclina après que son chenal fluvial se fut déplacé.",
  },
  minamata_convention: {
    name: "Convention de Minamata",
    clue: "Des diplomates de plus de cent pays ont signé un traité mondial contre le mercure dans la ville même dont la catastrophe d'empoisonnement l'a inspiré.",
    explanation: "La Convention de Minamata sur le mercure, un traité mondial visant à réduire la pollution au mercure, a été signée à Minamata, au Japon, la ville où une catastrophe industrielle d'empoisonnement au mercure a donné son nom à la maladie.",
  },
  sijilmasa: {
    name: "Sijilmasa",
    clue: "Dans une oasis alimentée par une rivière descendant de montagnes proches, une ville du désert s'est enrichie en taxant des caravanes chargées d'or et de sel.",
    explanation: "Voici Sijilmasa, ville marocaine médiévale à la lisière nord du Sahara, qui s'est enrichie en contrôlant et en taxant le commerce transsaharien de l'or et du sel, avant de décliner quand les routes commerciales se sont déplacées ailleurs.",
  },
  berlin_olympics_1936: {
    name: "Jeux olympiques de Berlin",
    clue: "Un sprinteur noir remporte quatre médailles d'or aux Jeux olympiques que le régime nazi avait organisés pour vanter ses idées de supériorité raciale.",
    explanation: "Les Jeux de Berlin devaient servir de vitrine à la propagande du régime d'Hitler. Jesse Owens remporta le 100 m, le 200 m, le saut en longueur et le relais, et ces Jeux inaugurèrent aussi le relais de la flamme partie d'Olympie.",
  },
  munich_olympics_1972: {
    name: "Jeux olympiques de Munich",
    clue: "Pendant les Jeux olympiques, des hommes armés prennent une équipe en otage au village des athlètes; un sauvetage raté sur un aérodrome fait onze morts.",
    explanation: "Des membres du groupe Septembre noir prirent en otage des athlètes et entraîneurs israéliens dans le village olympique de Munich. Le sauvetage raté sur la base aérienne de Fürstenfeldbruck se solda par la mort des onze otages, mais les Jeux reprirent après une seule journée de deuil.",
  },
  compiegne_armistice_1940: {
    name: "Armistice de Rethondes",
    clue: "Dans une clairière, un dictateur fait signer sa reddition à un pays vaincu dans le wagon même où sa propre nation avait capitulé des années plus tôt.",
    explanation: "Hitler exigea que l'armistice soit signé dans la clairière de Rethondes, près de Compiègne, dans le wagon même où l'Allemagne avait signé l'armistice mettant fin à la guerre précédente. Le wagon fut ensuite emporté à Berlin comme trophée.",
  },
  treaty_of_fontainebleau_1814: {
    name: "Traité de Fontainebleau",
    clue: "Dans un palais au cœur d'une forêt royale, un empereur vaincu abdique, accepte l'exil sur une petite île et fait ses adieux émus à sa garde.",
    explanation: "Napoléon signa son abdication au château de Fontainebleau et reçut l'île d'Elbe à gouverner. Ses adieux à la Vieille Garde, dans la cour aujourd'hui appelée cour des Adieux, sont restés l'une des scènes les plus célèbres de sa vie. Il s'échappa de l'île moins d'un an plus tard.",
  },
  rfk_assassination: {
    name: "Assassinat de Robert F. Kennedy",
    clue: "Juste après avoir fêté une victoire aux primaires, un candidat à la présidence est abattu dans les cuisines d'un hôtel, cinq ans après le meurtre de son frère.",
    explanation: "Robert F. Kennedy fut abattu à l'hôtel Ambassador de Los Angeles juste après avoir remporté la primaire de Californie, et mourut le lendemain. Son frère, le président John F. Kennedy, avait été tué à Dallas.",
  },
  march_on_rome: {
    name: "Marche sur Rome",
    clue: "Des milliers de miliciens en chemise noire convergent vers la capitale, et le roi, plutôt que de résister, invite leur chef à former un gouvernement.",
    explanation: "Les squadristes fascistes de Benito Mussolini marchèrent sur Rome, et le roi Victor-Emmanuel III refusa de décréter l'état de siège, nommant Mussolini président du Conseil. Mussolini lui-même arriva confortablement en train de nuit plutôt qu'à pied.",
  },
  siege_of_sarajevo: {
    name: "Siège de Sarajevo",
    clue: "Une ancienne ville hôte des Jeux d'hiver subit près de quatre ans d'obus et de snipers depuis les collines, le plus long siège d'une capitale moderne.",
    explanation: "Les forces serbes de Bosnie assiégèrent Sarajevo depuis les collines environnantes pendant la guerre de Bosnie. Les habitants traversaient en courant des rues exposées, surnommées Sniper Alley, et faisaient entrer vivres et armes par un tunnel creusé sous la piste de l'aéroport.",
  },
  great_sphinx_giza: {
    name: "Grand Sphinx de Gizeh",
    clue: "Le long du Nil, un lion colossal à tête humaine a été taillé directement dans la roche à côté des pyramides, et il a perdu son nez depuis des siècles.",
    explanation: "Le grand Sphinx de Gizeh est la plus ancienne sculpture monumentale connue d'Égypte, taillée dans un seul affleurement de calcaire. La légende accuse les soldats de Napoléon de lui avoir cassé le nez, mais des dessins bien antérieurs à leur arrivée le montrent déjà sans.",
  },
  reina_sofia_museum: {
    name: "Musée Reina Sofía",
    clue: "Le musée d'art d'une capitale expose une immense toile en noir et blanc d'une ville bombardée, que son auteur refusa de voir entrer au pays sans démocratie.",
    explanation: "Le musée Reina Sofía, à Madrid, abrite le Guernica de Picasso, peint après le bombardement de la ville basque. Picasso refusa que la toile entre en Espagne tant que Franco gouvernait, si bien qu'elle resta des décennies à New York avant de rentrer.",
  },
  ho_chi_minh_mausoleum: {
    name: "Mausolée de Hô Chi Minh",
    clue: "Près du fleuve Rouge, un mausolée de granit expose le corps embaumé d'un président révolutionnaire qui avait pourtant demandé à être incinéré.",
    explanation: "Hô Chi Minh voulait que ses cendres soient dispersées au nord, au centre et au sud du Vietnam, mais le parti le fit embaumer et bâtit ce mausolée sur la place Ba Dinh, à Hanoï, où il avait lu la déclaration d'indépendance du pays.",
  },
  battle_of_alesia: {
    name: "Siège d'Alésia",
    clue: "Un général encercle une forteresse perchée de deux lignes de murs et affame le chef d'une coalition de tribus, jusqu'à ce qu'il dépose les armes à ses pieds.",
    explanation: "Jules César assiégea Vercingétorix à Alésia, avec une ligne de fortifications pour enfermer les défenseurs et une seconde tournée vers l'extérieur contre l'armée de secours. La reddition de Vercingétorix scella la conquête de la Gaule par Rome.",
  },
  loma_prieta_earthquake: {
    name: "Séisme de Loma Prieta",
    clue: "Juste avant un match de finale de baseball, dans une baie souvent noyée de brouillard, un séisme effondre une autoroute à deux étages et un pan de pont.",
    explanation: "Le séisme de Loma Prieta frappa la baie de San Francisco juste avant le troisième match des World Series entre les deux équipes de la région, si bien que les secousses furent diffusées en direct. Il écrasa le viaduc de Cypress Street à Oakland et fit tomber une partie du tablier supérieur du Bay Bridge.",
  },
  council_of_chalcedon: {
    name: "Concile de Chalcédoine",
    clue: "Dans une ville face à une capitale impériale, par-delà un détroit, un concile déclare son sauveur divin et humain à la fois; des églises font sécession.",
    explanation: "Le concile de Chalcédoine se réunit sur la rive asiatique du Bosphore, face à Constantinople, dans ce qui est aujourd'hui un quartier d'Istanbul. Sa définition des deux natures du Christ fut rejetée par les Églises copte, arménienne et les autres Églises orthodoxes orientales, une séparation qui dure encore.",
  },
  kumsusan_palace_of_the_sun: {
    name: "Palais du Soleil Kumsusan",
    clue: "Dans la capitale d'un État fermé sur une péninsule montagneuse, une ex-résidence présidentielle expose les corps embaumés de ses deux premiers dirigeants.",
    explanation: "Le palais du Soleil Kumsusan, à Pyongyang, était la résidence officielle de Kim Il-sung avant de devenir son mausolée, puis aussi celui de son fils Kim Jong-il. Les visiteurs passent sous des souffleries pour retirer la poussière et doivent s'incliner devant chaque corps.",
  },
  iranian_coup_1953: {
    name: "Coup d'État en Iran",
    clue: "Dans une capitale au pied de sommets enneigés, des services secrets étrangers aident à renverser un chef de gouvernement élu qui avait nationalisé le pétrole.",
    explanation: "Le Premier ministre Mohammad Mossadegh avait nationalisé l'Anglo-Iranian Oil Company. Un coup d'État organisé avec la CIA et le MI6 le renversa à Téhéran et renforça le pouvoir du chah, une ingérence étrangère qui laissa un ressentiment durable en Iran.",
  },
  noto_earthquake_2024: {
    name: "Séisme de Noto",
    clue: "Le premier jour de l'année, un puissant séisme soulève la côte d'une péninsule de jusqu'à quatre mètres, laissant des ports de pêche à sec.",
    explanation: "Le séisme de Noto frappa la péninsule de Noto, sur la côte de la mer du Japon. Le soulèvement repoussa le rivage de jusqu'à 200 mètres par endroits, et un incendie détruisit le célèbre quartier du marché du matin de Wajima.",
  },
  treaty_of_verdun: {
    name: "Traité de Verdun",
    clue: "Trois petits-fils d'un grand empereur se partagent son empire en trois royaumes, esquissant deux futures nations séparées par une bande de terre disputée.",
    explanation: "Le traité de Verdun partagea l'empire de Charlemagne entre Lothaire, Louis le Germanique et Charles le Chauve. Les royaumes de l'ouest et de l'est préfiguraient la France et l'Allemagne, tandis que le royaume du milieu fut disputé pendant des siècles.",
  },
  honnoji_incident: {
    name: "Incident du Honnō-ji",
    clue: "Un seigneur de guerre sur le point d'unifier son pays est trahi par l'un de ses propres généraux et meurt dans l'incendie du temple où il séjournait.",
    explanation: "Oda Nobunaga séjournait au temple Honnō-ji, à Kyoto, quand son vassal Akechi Mitsuhide retourna son armée contre lui. Nobunaga mourut, très probablement par suicide rituel, pendant que le temple brûlait, et Mitsuhide fut lui-même vaincu moins de deux semaines plus tard.",
  },
  tsar_bell: {
    name: "Tsar Kolokol",
    clue: "La plus grande cloche du monde n'a jamais sonné: un incendie l'a fissurée encore dans sa fosse de coulée, et un morceau de onze tonnes s'en est détaché.",
    explanation: "La cloche du Tsar fut coulée à l'intérieur du Kremlin de Moscou. Lors d'un incendie, l'eau jetée sur le métal brûlant la fissura avant qu'elle ait pu être hissée, et elle repose depuis sur un socle dans l'enceinte du Kremlin, à côté de son fragment.",
  },
  tokyo_olympics_1964: {
    name: "Jeux olympiques de Tokyo",
    clue: "Premiers Jeux olympiques de leur continent, ouverts juste après un train à grande vitesse; la flamme est allumée par un coureur né le jour d'une bombe atomique.",
    explanation: "Les Jeux de Tokyo furent les premiers organisés en Asie et la vitrine du redressement du Japon. Le Shinkansen fut inauguré juste avant, et le dernier porteur de la flamme, Yoshinori Sakai, était né dans la préfecture d'Hiroshima le jour du bombardement.",
  },
  rome_olympics_1960: {
    name: "Jeux olympiques de Rome",
    clue: "Un coureur remporte le marathon olympique pieds nus, franchissant la ligne d'arrivée à la lueur des torches sous un arc de triomphe antique.",
    explanation: "L'Éthiopien Abebe Bikila remporta le marathon des Jeux de Rome sans chaussures, devenant le premier champion olympique noir africain. La course s'acheva de nuit au pied de l'arc de Constantin, éclairé par des torches tenues le long du parcours.",
  },
  july_revolution_1830: {
    name: "Révolution de Juillet",
    clue: "Trois jours de barricades dans les rues renversent un roi et inspirent un tableau célèbre: une femme à la poitrine nue brandit un drapeau au-dessus des morts.",
    explanation: "Pendant les Trois Glorieuses, les Parisiens se soulevèrent contre Charles X, qui abdiqua et fut remplacé par son cousin Louis-Philippe. La Liberté guidant le peuple d'Eugène Delacroix, aujourd'hui au Louvre, fut peinte en son honneur.",
  },
  russian_constitutional_crisis_1993: {
    name: "Crise constitutionnelle russe",
    clue: "Dans la capitale du plus vaste pays du monde, des chars bombardent le parlement après que les députés ont défié un président qui les avait dissous.",
    explanation: "Boris Eltsine prononça la dissolution du Parlement, dont les députés se retranchèrent dans la Maison-Blanche de Moscou. Après des combats de rue, des chars de l'armée bombardèrent le bâtiment, et une nouvelle constitution donnant de larges pouvoirs au président fut adoptée quelques semaines plus tard.",
  },
  wallace_monument: {
    name: "Monument à Wallace",
    clue: "Sur un piton dominant le pont de sa célèbre victoire, une tour honore un chevalier rebelle qu'un film à succès montra le visage peint en bleu.",
    explanation: "Le monument national à Wallace se dresse sur l'Abbey Craig, près de Stirling, face au lieu de la victoire de William Wallace au pont de Stirling. Le film Braveheart a ravivé l'intérêt pour lui, et une statue à l'effigie de Mel Gibson est restée des années au pied de la colline.",
  },
  monument_peoples_heroes: {
    name: "Monument aux héros du peuple",
    clue: "Au cœur d'une des plus grandes places du monde, un obélisque de granit honore les martyrs révolutionnaires, face à une porte ornée du portrait géant d'un chef.",
    explanation: "Le monument aux héros du peuple se dresse sur la place Tian'anmen, à Pékin, face à la porte de la Paix céleste et à son portrait de Mao Zedong. Son socle est sculpté de bas-reliefs d'épisodes révolutionnaires remontant aux guerres de l'opium.",
  },
  al_haouz_earthquake: {
    name: "Séisme d'Al Haouz",
    clue: "Dans l'Atlas, un séisme en pleine nuit rase des villages en terre crue et ravage une mosquée historique, faisant près de trois mille morts.",
    explanation: "Le séisme d'Al Haouz frappa le Haut Atlas au sud de Marrakech, le plus meurtrier du Maroc depuis des décennies. Des villages berbères isolés, bâtis en terre et en pierre, s'effondrèrent, et la mosquée médiévale de Tinmel fut en grande partie détruite.",
  },
  laquila_earthquake: {
    name: "Séisme de L'Aquila",
    clue: "Dans les Apennins, un séisme dévaste une ville médiévale, et des experts qui avaient rassuré les habitants quelques jours plus tôt sont ensuite condamnés.",
    explanation: "Le séisme de L'Aquila fit plus de 300 morts dans le centre de l'Italie. Sept membres d'une commission des risques furent condamnés pour homicide involontaire pour avoir minimisé le danger après une série de secousses; la plupart furent acquittés en appel.",
  },
  qumran_dead_sea_scrolls: {
    name: "Grottes de Qumrân",
    clue: "Près de la mer Morte, un jeune berger cherchant une chèvre trouve dans une grotte des jarres de rouleaux, parmi les plus vieilles copies de textes bibliques.",
    explanation: "Les manuscrits de la mer Morte furent découverts dans des grottes proches des ruines de Qumrân, en Cisjordanie. Écrits surtout sur parchemin, ils contiennent des fragments de presque tous les livres de la Bible hébraïque, environ mille ans plus anciens que les plus vieilles copies connues jusque-là.",
  },
  battle_of_bosworth: {
    name: "Bataille de Bosworth",
    clue: "Sur ce champ de bataille tombe un roi à qui l'on prêtera « mon royaume pour un cheval », le dernier roi de son pays tué au combat.",
    explanation: "Richard III fut tué à Bosworth, dernier roi d'Angleterre mort au combat, et Henri Tudor prit la couronne, mettant fin à la guerre des Deux-Roses. Son squelette fut retrouvé sous un parking municipal de Leicester puis réinhumé dans la cathédrale.",
  },
  battle_on_the_ice: {
    name: "Bataille du lac Peïpous",
    clue: "Sur le lac Peïpous gelé, l'armée d'un prince repousse des chevaliers croisés, un affrontement devenu plus tard un film célèbre à la musique grandiose.",
    explanation: "Le prince Alexandre Nevski de Novgorod vainquit la branche livonienne de l'ordre Teutonique sur le lac gelé situé entre l'Estonie et la Russie actuelles. Le film Alexandre Nevski de Sergueï Eisenstein, sur une musique de Prokofiev, rendit la bataille légendaire.",
  },
  council_of_ephesus: {
    name: "Concile d'Éphèse",
    clue: "Dans un port célèbre pour le temple géant d'une déesse de la chasse, un concile condamne un archevêque à propos du titre donné à la mère de Jésus.",
    explanation: "Le concile d'Éphèse, sur la côte égéenne de l'Anatolie, condamna Nestorius, archevêque de Constantinople, et proclama Marie Theotokos, mère de Dieu. Éphèse abritait le grand temple d'Artémis.",
  },
  doha_agreement_2020: {
    name: "Accord de Doha",
    clue: "Dans la capitale d'une petite péninsule désertique riche en gaz, une superpuissance promet son retrait aux insurgés qu'elle combattait depuis vingt ans.",
    explanation: "Les États-Unis et les talibans signèrent l'accord de Doha au Qatar, s'engageant au retrait de toutes les troupes étrangères d'Afghanistan. Le départ fut achevé l'année suivante, alors que les talibans reprenaient Kaboul.",
  },
  maidens_tower_istanbul: {
    name: "Tour de Léandre",
    clue: "Sur un îlot rocheux à l'entrée d'un détroit entre deux mers, une tour est liée à la légende d'une princesse tuée par un serpent caché dans un panier de fruits.",
    explanation: "La tour de Léandre, ou tour de la Jeune Fille, se dresse sur un îlot à l'entrée sud du Bosphore, face à Üsküdar, à Istanbul. Selon la légende, un sultan y enferma sa fille pour déjouer une prophétie de mort par morsure de serpent, mais un serpent l'atteignit dans une corbeille de fruits.",
  },
  uffington_white_horse: {
    name: "Cheval blanc d'Uffington",
    clue: "Sur une colline de craie d'une terre verte et pluvieuse, un cheval stylisé de plus de 100 m est creusé dans le gazon et entretenu depuis trois mille ans.",
    explanation: "Le cheval blanc d'Uffington, dans l'Oxfordshire, est formé de tranchées remplies de craie blanche concassée. Sans le nettoyage régulier des habitants, l'herbe l'aurait recouvert depuis longtemps, et on le voit mieux depuis le ciel ou les collines d'en face.",
  },
  union_of_lublin: {
    name: "Union de Lublin",
    clue: "Lors d'une diète réunie dans une ville au bord d'une rivière, un royaume et un grand-duché fusionnent en un seul État, avec un roi élu et une assemblée commune.",
    explanation: "L'union de Lublin transforma l'union personnelle entre la Pologne et la Lituanie en République des Deux Nations, l'un des plus grands États d'Europe, gouverné par un roi élu en commun et une diète unique.",
  },
  convention_of_peking: {
    name: "Convention de Pékin",
    clue: "Après le pillage et l'incendie du vaste palais d'été d'un empereur par des troupes étrangères, son frère signe des traités cédant une péninsule portuaire.",
    explanation: "Le prince Gong signa la convention de Pékin avec la Grande-Bretagne, la France et la Russie après la destruction de l'ancien palais d'Été par les troupes franco-britanniques, mettant fin à une guerre liée au commerce de l'opium. La Chine céda Kowloon aux Britanniques et de vastes terres du nord à la Russie.",
  },
  saur_revolution: {
    name: "Révolution de Saur",
    clue: "Des officiers prennent un palais présidentiel et tuent le président et sa famille, portant des communistes au pouvoir un an avant une invasion étrangère.",
    explanation: "Lors de la révolution de Saur, des officiers fidèles au Parti démocratique populaire, communiste, prirent Kaboul et tuèrent le président Mohammed Daoud Khan. Les révoltes contre le nouveau régime poussèrent une superpuissance voisine à envahir l'Afghanistan l'année suivante.",
  },
  skopje_earthquake: {
    name: "Séisme de Skopje",
    clue: "Un séisme rase presque toute une ville; sa gare en ruine, horloge figée à l'heure du choc, devient un musée, et un grand architecte étranger la redessine.",
    explanation: "Le séisme de Skopje fit plus d'un millier de morts dans la capitale de l'actuelle Macédoine du Nord. L'ancienne gare en ruine, son horloge arrêtée à 5 h 17, abrite aujourd'hui le musée de la ville, et l'architecte japonais Kenzo Tange dessina le plan de reconstruction du centre.",
  },
  exposition_universelle_1900: {
    name: "Exposition universelle du Grand Palais",
    clue: "Dans une ville déjà coiffée d'une tour de fer d'une exposition passée, une nouvelle exposition dévoile un trottoir roulant, un palais vitré et un pont doré.",
    explanation: "L'Exposition universelle attira environ 50 millions de visiteurs à Paris. Elle a laissé le Grand Palais, le Petit Palais et le pont Alexandre-III, et la première ligne de métro de la ville ouvrit pendant qu'elle se tenait.",
  },
  los_angeles_olympics_1932: {
    name: "Jeux olympiques de Los Angeles",
    clue: "Dans la ville d'Hollywood, les Jeux olympiques logent les athlètes masculins dans le premier village olympique, un ensemble de cottages sur une colline.",
    explanation: "Les Jeux de Los Angeles se tinrent au Memorial Coliseum en pleine crise économique, si bien que peu d'athlètes firent le voyage. Ils inaugurèrent le village olympique, le podium aux Jeux d'été et la photo-finish.",
  },
  liberation_of_paris: {
    name: "Libération de Paris",
    clue: "En pleine insurrection, alors que des chars approchent, le commandant d'une capitale occupée refuse de faire sauter ponts et monuments, épargnant la ville.",
    explanation: "Le général Dietrich von Choltitz désobéit à l'ordre d'Hitler de laisser Paris en ruines. Après l'insurrection de la Résistance, la division blindée de Leclerc entra dans la ville, et de Gaulle descendit les Champs-Élysées devant une foule en liesse.",
  },
  great_siege_of_malta: {
    name: "Grand Siège de Malte",
    clue: "Sur une petite île au milieu de la Méditerranée, un ordre de chevaliers croisés résiste près de quatre mois à une immense flotte d'invasion.",
    explanation: "Les chevaliers Hospitaliers, menés par Jean de Valette, défendirent les forts du port de Malte contre une armada ottomane. La nouvelle capitale bâtie après la victoire, La Valette, porte son nom.",
  },
  pyramid_of_djoser: {
    name: "Pyramide de Djéser",
    clue: "Le long du Nil, la plus ancienne pyramide de ce type s'élève en six marches géantes, conçue par un architecte vénéré plus tard comme un dieu.",
    explanation: "La pyramide à degrés de Djéser, à Saqqarah, est le plus ancien grand édifice en pierre d'Égypte, fait de plateformes de plus en plus petites empilées. Son architecte, Imhotep, fut vénéré pendant des siècles comme un dieu de la médecine et de la sagesse.",
  },
  circus_maximus: {
    name: "Circus Maximus",
    clue: "Le plus grand champ de courses de chars d'un empire antique, avec peut-être 150 000 places, n'est plus qu'un creux herbeux entre deux collines de sa capitale.",
    explanation: "Le Circus Maximus s'étendait entre le Palatin et l'Aventin, à Rome. Ses courses de chars attiraient les plus grandes foules de tous les spectacles romains, et les empereurs les suivaient depuis leur palais dominant la piste.",
  },
  kashmir_earthquake_2005: {
    name: "Séisme du Cachemire",
    clue: "Dans une région de montagne disputée par deux puissances nucléaires voisines, un séisme matinal fait plus de 80 000 morts, dont beaucoup d'écoliers.",
    explanation: "Le séisme du Cachemire frappa près de Muzaffarabad, au Cachemire sous administration pakistanaise, un jour de classe. Des milliers d'écoles mal construites s'effondrèrent, et l'Inde et le Pakistan ouvrirent brièvement des points de passage sur leur ligne de cessez-le-feu pour laisser passer l'aide.",
  },
  izmit_earthquake: {
    name: "Séisme d'İzmit",
    clue: "Sur la mer de Marmara, un séisme en pleine nuit fait quelque 17 000 morts et embrase une immense raffinerie pendant plusieurs jours.",
    explanation: "Le séisme d'İzmit rompit la faille nord-anatolienne, au nord-ouest de la Turquie, l'une des régions les plus industrielles du pays. L'incendie de la raffinerie Tüpraş dura plusieurs jours, et la catastrophe entraîna de nouvelles normes de construction.",
  },
  helsinki_accords: {
    name: "Accords d'Helsinki",
    clue: "Sur la Baltique, des dirigeants des deux côtés d'un continent divisé signent un acte final reconnaissant les frontières d'après-guerre et les droits de l'homme.",
    explanation: "Trente-cinq États, dont les États-Unis, le Canada et tous les États communistes d'Europe sauf l'Albanie, signèrent l'acte final d'Helsinki au palais Finlandia. Des dissidents s'appuyèrent ensuite sur ses clauses sur les droits de l'homme pour demander des comptes à leurs gouvernements.",
  },
  monument_of_the_discoveries: {
    name: "Monument aux Découvertes",
    clue: "Au bord du Tage, une proue de navire géante en pierre porte des statues d'explorateurs menés par un prince qui finança des voyages sans guère naviguer.",
    explanation: "Le Padrão dos Descobrimentos, dans le quartier de Belém à Lisbonne, rend hommage aux Grandes Découvertes portugaises. Henri le Navigateur se tient à la proue, suivi notamment de Vasco de Gama et de Magellan.",
  },
  albert_memorial: {
    name: "Albert Memorial",
    clue: "Face à une grande salle de concert ronde baptisée du même nom, la statue dorée du mari d'une reine trône sous un dais orné de flèches.",
    explanation: "La reine Victoria commanda l'Albert Memorial, dans les jardins de Kensington, après la mort du prince Albert. Il fait face au Royal Albert Hall, et sa statue tient le catalogue de la Grande Exposition qu'il avait soutenue.",
  },
  coup_of_18_brumaire: {
    name: "Coup d'État du 18 Brumaire",
    clue: "Des députés sont transférés dans un palais sur une colline dominant un fleuve, où les grenadiers d'un général vident leur salle et lui livrent le pouvoir.",
    explanation: "Le coup d'État de Napoléon Bonaparte eut lieu au château de Saint-Cloud, à l'ouest de Paris, où les assemblées avaient été transférées. Après que les députés l'eurent hué, les soldats menés par Murat les chassèrent, et le Consulat fut créé.",
  },
  belgian_revolution: {
    name: "Révolution belge",
    clue: "Dans une capitale basse et pluvieuse, un duo patriotique à l'opéra jette le public dans la rue, lançant l'émeute qui mène les provinces à l'indépendance.",
    explanation: "Une représentation de La Muette de Portici d'Auber au théâtre de la Monnaie, à Bruxelles, déclencha des émeutes contre la domination néerlandaise. Les provinces du sud quittèrent le royaume uni des Pays-Bas pour former la Belgique.",
  },
  council_of_florence: {
    name: "Concile de Florence",
    clue: "Dans une ville fluviale entourée de collines, célèbre pour sa coupole de brique, un concile réunit un temps les deux grandes branches de la chrétienté.",
    explanation: "L'empereur byzantin Jean VIII vint à Florence en espérant une aide militaire contre les Ottomans, et le concile proclama l'union des Églises latine et grecque. L'union s'effondra peu après, et l'aide espérée ne vint jamais vraiment.",
  },
  angel_of_independence: {
    name: "Ange de l'Indépendance",
    clue: "Sur une grande avenue d'une capitale d'altitude qui s'enfonce peu à peu, une victoire ailée dorée coiffe une colonne à laquelle on a dû ajouter des marches.",
    explanation: "L'Ange de l'Indépendance, sur le Paseo de la Reforma à Mexico, marque le centenaire de la guerre d'indépendance. La ville est bâtie sur un lac asséché, si bien que 14 marches ont été ajoutées à sa base à mesure que le sol s'affaissait.",
  },
  treaty_of_london_1839: {
    name: "Traité de Londres",
    clue: "Dans la capitale d'une grande puissance, la neutralité d un jeune royaume est garantie, promesse traitée plus tard de chiffon de papier lors d'une invasion.",
    explanation: "Le traité de Londres reconnut l'indépendance de la Belgique et fit des grandes puissances les garantes de sa neutralité. Quand l'Allemagne envahit la Belgique des décennies plus tard, son chancelier qualifia le traité de chiffon de papier, et la Grande-Bretagne déclara la guerre.",
  },
  kumamoto_earthquakes: {
    name: "Séismes de Kumamoto",
    clue: "Deux forts séismes à un jour d'écart, le second plus fort; les murs d'un célèbre château s'écroulent et une tourelle tient sur une seule pile de pierres.",
    explanation: "Les séismes de Kumamoto frappèrent Kyushu, au Japon, avec une première secousse suivie d'un choc principal plus fort. Les remparts du château de Kumamoto s'effondrèrent par endroits, et sa tourelle Iidamaru resta debout sur un seul angle de pierres empilées.",
  },
  mother_armenia: {
    name: "Mère Arménie",
    clue: "Dans un parc au-dessus d'une capitale, la statue géante d'une femme tenant une épée en travers du corps remplace celle, déboulonnée, d'un dictateur.",
    explanation: "Mère Arménie domine Erevan depuis le parc de la Victoire. Elle a remplacé une immense statue de Staline démontée après sa disgrâce, et le socle abrite aujourd'hui un musée militaire.",
  },
  sanxingdui: {
    name: "Sanxingdui",
    clue: "Des fosses pleines de masques de bronze aux yeux saillants révèlent une culture absente des écrits, découverte par hasard par un paysan creusant un fossé.",
    explanation: "Sanxingdui, au Sichuan, abritait une culture antique différente de tout ce que décrivent les textes chinois. Ses fosses sacrificielles contenaient des têtes de bronze géantes, un arbre en bronze de près de quatre mètres et quantité d'or, de jade et d'ivoire.",
  },
  london_olympics_1908: {
    name: "Jeux olympiques de Londres à White City",
    clue: "Le marathon olympique est allongé jusqu'aux 42,195 km actuels pour partir au pied d'un château royal et finir devant la loge royale.",
    explanation: "Aux Jeux de Londres, le marathon relia le château de Windsor au stade de White City, et sa distance inhabituelle devint ensuite la norme. Le coureur en tête, Dorando Pietri, épuisé, fut aidé à franchir la ligne par des officiels puis disqualifié.",
  },
  paris_olympics_1924: {
    name: "Jeux olympiques de Paris à Colombes",
    clue: "Un sprinteur très pieux refuse de courir le jour du repos sacré et gagne une course plus longue, à des Jeux que la même ville accueillera un siècle plus tard.",
    explanation: "Aux Jeux de Paris, l'Écossais Eric Liddell renonça aux séries du 100 m disputées un dimanche et remporta le 400 m, une histoire racontée par le film Les Chariots de feu. Le stade principal était à Colombes, et Paris a de nouveau accueilli les Jeux un siècle plus tard.",
  },
  sunda_strait_tsunami_2018: {
    name: "Tsunami du détroit de la Sonde",
    clue: "Quand le jeune volcan né d'une île à l'explosion légendaire s'effondre dans la mer, un tsunami surgit sans alerte et emporte un groupe en concert sur une plage.",
    explanation: "Une partie de l'Anak Krakatau, le volcan né dans la caldeira du Krakatoa, glissa dans le détroit de la Sonde. Sans séisme pour déclencher l'alerte, les vagues surprirent les côtes de Java et de Sumatra, dont un concert sur la plage du groupe Seventeen.",
  },
  mexico_earthquake_2017: {
    name: "Séisme de Puebla",
    clue: "Dans une capitale d'altitude, un séisme meurtrier frappe le jour anniversaire exact du pire séisme de la ville, quelques heures après un exercice d'évacuation.",
    explanation: "Le séisme de Puebla frappa le centre du Mexique le jour anniversaire de la catastrophe qui avait ravagé la capitale des décennies plus tôt. Des dizaines d'immeubles s'effondrèrent à Mexico, dont l'école Enrique Rébsamen, peu après l'exercice annuel d'évacuation.",
  },
  victoria_memorial_london: {
    name: "Victoria Memorial",
    clue: "Devant un palais royal, au bout d'une grande avenue de parade, un monument de marbre coiffé d'une victoire ailée dorée honore une reine qui régna 63 ans.",
    explanation: "Le Victoria Memorial se dresse devant le palais de Buckingham, au bout du Mall, à Londres. La reine Victoria y est assise face à l'avenue, et le monument entier fut taillé dans plus de 2 000 tonnes de marbre blanc.",
  },
  black_sea_grain_initiative: {
    name: "Accord céréalier de la mer Noire",
    clue: "Dans une ville à cheval sur deux continents, deux pays en guerre signent des accords laissant les céréaliers quitter des ports bloqués de la mer Noire.",
    explanation: "La Russie et l'Ukraine signèrent chacune l'accord céréalier avec la Turquie et les Nations unies au palais de Dolmabahçe, à Istanbul. Il permit à l'Ukraine d'exporter des dizaines de millions de tonnes de céréales avant le retrait russe un an plus tard.",
  },
  partition_of_babylon: {
    name: "Partage de Babylone",
    clue: "Le long de l'Euphrate, dans la grande cité où un jeune conquérant vient de mourir, ses généraux se partagent son immense empire.",
    explanation: "Après la mort d'Alexandre le Grand à Babylone, à 32 ans, ses généraux s'y réunirent et se partagèrent les satrapies d'un empire allant de la Grèce à l'Inde. Leurs rivalités menèrent vite à des décennies de guerres entre ses successeurs.",
  },
  assassination_of_jovenel_moise: {
    name: "Assassinat de Jovenel Moïse",
    clue: "Sur une île des Caraïbes partagée entre deux nations, un président en exercice est abattu dans sa chambre par un commando de mercenaires étrangers.",
    explanation: "Le président haïtien Jovenel Moïse fut tué chez lui, sur les hauteurs de Port-au-Prince, par un commando composé surtout d'anciens militaires colombiens. Son épouse fut blessée, et l'assassinat aggrava la crise politique du pays.",
  },
  second_battle_of_el_alamein: {
    name: "Seconde bataille d'El Alamein",
    clue: "Près d'une halte ferroviaire côtière du Sahara, une armée arrête pour de bon le « renard du désert », victoire qu'un dirigeant appela la fin du commencement.",
    explanation: "À El Alamein, en Égypte, la 8e armée de Montgomery brisa l'Afrika Korps de Rommel et le repoussa à travers l'Afrique du Nord. Churchill déclara que ce n'était pas la fin, ni le début de la fin, mais peut-être la fin du commencement.",
  },
  battle_of_leipzig: {
    name: "Bataille de Leipzig",
    clue: "Surnommée la bataille des nations, le plus vaste choc du continent avant les guerres mondiales voit des alliés écraser un empereur près d'une cité de foires.",
    explanation: "Plus de 500 000 soldats combattirent à Leipzig, où la Russie, la Prusse, l'Autriche et la Suède battirent Napoléon. La défaite mit fin à la puissance française à l'est du Rhin, et un immense monument fut élevé sur le champ de bataille un siècle plus tard.",
  },
  luxor_temple: {
    name: "Temple de Louxor",
    clue: "Le long du Nil, la porte d'un temple garde l'un de ses deux obélisques jumeaux; l'autre se dresse au milieu d'une célèbre place d'une capitale lointaine.",
    explanation: "Le temple de Louxor, relié à Karnak par une allée de sphinx, fut bâti surtout sous Amenhotep III et Ramsès II. L'Égypte offrit à la France l'un de ses deux obélisques d'entrée, qui se dresse depuis sur la place de la Concorde, à Paris.",
  },
  georgia_guidestones: {
    name: "Georgia Guidestones",
    clue: "Dans les terres agricoles d'un État du sud chaud et humide, des dalles de granit gravées de dix préceptes en huit langues sont détruites par une bombe.",
    explanation: "Les Georgia Guidestones furent commandées sous un pseudonyme et gravées de conseils comme maintenir la population humaine sous 500 millions. Longtemps cible des théories du complot, elles furent endommagées par une bombe puis démolies.",
  },
  czechoslovak_coup_1948: {
    name: "Coup de Prague",
    clue: "Dans une capitale fluviale aux cent clochers, les communistes prennent le pouvoir; peu après, le chef de la diplomatie est retrouvé mort sous sa fenêtre.",
    explanation: "Les communistes prirent le contrôle total à Prague avec l'appui de milices ouvrières armées. Le ministre des Affaires étrangères Jan Masaryk, fils du fondateur du pays, fut retrouvé mort sous la fenêtre de sa salle de bains, écho aux célèbres défenestrations de la ville.",
  },
  squaw_valley_olympics_1960: {
    name: "Jeux d'hiver de Squaw Valley",
    clue: "Près d'un lac de montagne profond et limpide, un magnat du dessin animé orchestre l'ouverture de Jeux d'hiver, premiers à offrir des ralentis télévisés.",
    explanation: "Les Jeux de Squaw Valley, en Californie, près du lac Tahoe, furent construits presque à partir de rien dans une vallée peu aménagée. Walt Disney organisa les cérémonies, et la chaîne CBS y eut l'idée du ralenti instantané.",
  },
  rome_statute: {
    name: "Statut de Rome",
    clue: "Dans une capitale antique, 120 nations votent la création de la première cour permanente pour le génocide et les crimes de guerre, qui siège dans un autre pays.",
    explanation: "Le statut de Rome fut adopté lors d'une conférence des Nations unies tenue au siège de la FAO, à Rome. Il créa la Cour pénale internationale, installée à La Haye, qui peut juger des individus, y compris des chefs d'État.",
  },
  first_council_of_constantinople: {
    name: "Premier concile de Constantinople",
    clue: "Dans une capitale impériale, un concile complète un credo encore récité et place l'évêque de la ville juste derrière celui de l'ancienne capitale.",
    explanation: "Convoqué par l'empereur Théodose Ier, le concile compléta le symbole de Nicée en affirmant la divinité du Saint-Esprit. Il donna aussi à l'évêque de Constantinople le premier rang après celui de Rome, source de rivalités ultérieures.",
  },
  operation_nemesis: {
    name: "Opération Némésis",
    clue: "Dans la rue d'une capitale étrangère, un rescapé d'un génocide abat l'ancien ministre en exil qui avait organisé les massacres, et un jury l'acquitte.",
    explanation: "Dans le cadre de l'opération Némésis, Soghomon Tehlirian tua Talaat Pacha, l'un des principaux organisateurs du génocide arménien, à Berlin. Un jury allemand acquitta Tehlirian à l'issue d'un procès qui révéla les massacres au grand public.",
  },
  canterbury_earthquake_2010: {
    name: "Séisme de Canterbury",
    clue: "Un puissant séisme avant l'aube ouvre une faille dans une plaine agricole du sud sans faire de mort directe, des mois avant un choc plus faible mais meurtrier.",
    explanation: "Le séisme de Canterbury frappa près de Darfield, en Nouvelle-Zélande, et ouvrit une rupture en surface de près de 30 km. Survenu la nuit, il épargna des vies, mais l'une de ses répliques, plus proche de Christchurch, fit 185 morts en février suivant.",
  },
  wikipedia_monument: {
    name: "Monument à Wikipédia",
    clue: "Dans une ville frontalière au bord d'une rivière, des figures soulèvent un globe en pièces de puzzle, en hommage aux bénévoles d'une encyclopédie en ligne.",
    explanation: "Le monument à Wikipédia de Słubice, en Pologne, fait face à Francfort-sur-l'Oder de l'autre côté de la rivière. Ce fut le premier monument consacré à l'encyclopédie en ligne, financé par la ville et conçu par des étudiants d'une université locale.",
  },
  sapporo_olympics_1972: {
    name: "Jeux d'hiver de Sapporo",
    clue: "Sur l'île enneigée d'Hokkaido, au nord, les premiers Jeux d'hiver de leur continent voient les sauteurs à ski locaux rafler tout le podium.",
    explanation: "Les Jeux de Sapporo furent les premiers Jeux d'hiver organisés en Asie. Les sauteurs japonais menés par Yukio Kasaya prirent l'or, l'argent et le bronze au petit tremplin, et la ville est aussi célèbre pour son festival annuel de sculptures sur neige.",
  },
  grenoble_olympics_1968: {
    name: "Jeux d'hiver de Grenoble",
    clue: "Dans une ville de vallée cernée par les Alpes, un skieur du pays hôte gagne les trois courses de ski alpin des premiers Jeux d'hiver avec contrôles antidopage.",
    explanation: "Aux Jeux de Grenoble, Jean-Claude Killy remporta la descente, le slalom géant et le slalom devant le public français. Ce furent aussi les premiers Jeux d'hiver avec des contrôles antidopage et des tests de féminité.",
  },
  battle_of_moscow: {
    name: "Bataille de Moscou",
    clue: "En vue des clochers de la capitale, les chars d'une armée d'invasion gèlent dans un hiver glacial, repoussés par des troupes fraîches en camouflage blanc.",
    explanation: "Les forces allemandes arrivèrent à une trentaine de kilomètres de Moscou avant d'être stoppées par le froid et une résistance acharnée. Des renforts frais venus d'Extrême-Orient lancèrent alors une contre-offensive qui fit reculer l'envahisseur pour la première fois de la guerre.",
  },
  siege_of_jerusalem_1099: {
    name: "Siège de Jérusalem",
    clue: "Des croisés poussent des tours de siège contre les murs d'une ville sainte pour trois religions, massacrent ses habitants et y fondent un royaume.",
    explanation: "La première croisade s'acheva par la prise de Jérusalem aux Fatimides. Le massacre qui suivit marqua les mémoires pendant des siècles, et Godefroy de Bouillon devint le premier souverain du nouveau royaume de Jérusalem.",
  },
  trajans_column: {
    name: "Colonne Trajane",
    clue: "Sur le forum d'une capitale antique, une colonne à frise en spirale raconte les guerres d'un empereur au nord du Danube; un saint la couronne aujourd'hui.",
    explanation: "La colonne Trajane, à Rome, montre plus de 2 500 personnages sculptés de la conquête de la Dacie, l'actuelle Roumanie, par l'empereur. Les cendres de Trajan furent placées dans sa base, et une statue de saint Pierre a remplacé la sienne au sommet.",
  },
  dover_castle: {
    name: "Château de Douvres",
    clue: "Sur des falaises blanches, face au point le plus étroit de la Manche, un château médiéval coiffe les tunnels où fut planifiée une célèbre évacuation.",
    explanation: "Le château de Douvres, surnommé la clé de l'Angleterre, garde la traversée la plus courte vers la France. Depuis les tunnels creusés dans ses falaises, l'amiral Ramsay dirigea l'opération Dynamo, l'évacuation des troupes alliées de Dunkerque.",
  },
  elysee_treaty: {
    name: "Traité de l'Élysée",
    clue: "Dans un palais présidentiel, un vieux général et un vieux chancelier scellent l'amitié de deux nations qui s'étaient fait trois guerres en un siècle.",
    explanation: "Charles de Gaulle et Konrad Adenauer signèrent le traité de l'Élysée à Paris, engageant la France et l'Allemagne à se consulter régulièrement. Il lança aussi des échanges de jeunes qui ont depuis réuni des millions de jeunes.",
  },
  egyptian_coup_2013: {
    name: "Coup d'État en Égypte",
    clue: "Au bord du Nil, après d'immenses manifestations, le chef de l'armée renverse le premier président librement élu, puis prend lui-même la présidence.",
    explanation: "Le général Abdel Fattah al-Sissi renversa au Caire le président Mohamed Morsi, issu des Frères musulmans, un an après son élection. Quelques semaines plus tard, les forces de sécurité tuèrent des centaines de partisans de Morsi dans un sit-in, et Sissi devint président l'année suivante.",
  },
  may_revolution: {
    name: "Révolution de Mai",
    clue: "Sur le Río de la Plata, un conseil municipal destitue le vice-roi lors d'une semaine vue comme la naissance du pays; la grande place porte le nom du mois.",
    explanation: "À Buenos Aires, le cabildo destitua le vice-roi Baltasar Hidalgo de Cisneros et forma la Primera Junta, premier gouvernement local de l'Argentine. La place de Mai et la fête nationale du 25 mai en gardent le souvenir.",
  },
  amatrice_earthquake_2016: {
    name: "Séisme d'Amatrice",
    clue: "Dans les Apennins, un séisme nocturne rase un village perché qui a donné son nom à une célèbre sauce pour pâtes, quelques jours avant sa fête gastronomique.",
    explanation: "Le séisme du centre de l'Italie fit environ 300 morts, pour la plupart à Amatrice, berceau des spaghetti all'amatriciana. Des restaurants du monde entier vendirent ensuite ce plat pour financer la reconstruction du village.",
  },
  hualien_earthquake_2024: {
    name: "Séisme de Hualien",
    clue: "Sur une île montagneuse face à un rival géant de l'autre côté d'un détroit, le plus fort séisme depuis 25 ans laisse un immeuble penché en un angle saisissant.",
    explanation: "Le séisme de Hualien fut le plus fort à Taïwan depuis vingt-cinq ans. L'immeuble Uranus penché, dans la ville de Hualien, en devint l'image marquante, tandis que des normes de construction strictes limitèrent le bilan pour un choc aussi puissant.",
  },
  capernaum: {
    name: "Capharnaüm",
    clue: "Au bord d'un lac d'eau douce sous le niveau de la mer, le village de pêcheurs dont Jésus fit sa base garde une synagogue blanche et la maison d'un disciple.",
    explanation: "Capharnaüm, sur la rive nord du lac de Tibériade, est l'endroit où les Évangiles situent une grande partie du ministère de Jésus. Une église moderne est suspendue au-dessus des vestiges attribués à la maison de saint Pierre.",
  },
  hermannsdenkmal: {
    name: "Hermannsdenkmal",
    clue: "Dans une forêt vallonnée et fraîche, la statue géante d'un chef de tribu brandit l'épée vers l'ouest, en souvenir de son embuscade contre trois légions.",
    explanation: "Le Hermannsdenkmal, près de Detmold, en Allemagne, honore Arminius, qui anéantit trois légions romaines dans la forêt de Teutobourg. Bâti comme symbole de l'unité nationale, il est tourné vers l'ouest, vers la France, rivale d'autrefois.",
  },
  geneva_conference_1954: {
    name: "Conférence de Genève",
    clue: "Dans une ville lacustre de diplomates, des pourparlers tenus après la chute d'une forteresse dans une vallée coupent une ex-colonie en deux selon un parallèle.",
    explanation: "La conférence de Genève mit fin à la guerre de la France en Indochine après sa défaite à Diên Biên Phu. Le Vietnam fut coupé au 17e parallèle en attendant des élections qui n'eurent jamais lieu, ouvrant la voie à la guerre suivante.",
  },
  thai_coup_2014: {
    name: "Coup d'État en Thaïlande",
    clue: "Dans une capitale fluviale chaude et inondable, un chef d'armée décrète la loi martiale puis prend le pouvoir deux jours après, douzième putsch réussi du pays.",
    explanation: "Le général Prayut Chan-o-cha prit le pouvoir à Bangkok après des mois de manifestations contre le gouvernement. Il dirigea ensuite la Thaïlande pendant près de dix ans, d'abord à la tête de la junte puis comme Premier ministre élu.",
  },
  fourth_lateran_council: {
    name: "Quatrième concile du Latran",
    clue: "Dans le palais-cathédrale d'un pape, un concile rend la confession annuelle obligatoire et impose aux minorités religieuses des vêtements distinctifs.",
    explanation: "Le pape Innocent III réunit le quatrième concile du Latran, à Rome. Il définit la transsubstantiation, imposa la confession et la communion annuelles et obligea juifs et musulmans à porter des signes vestimentaires distinctifs.",
  },
  pereiaslav_agreement: {
    name: "Accord de Pereïaslav",
    clue: "Dans une petite ville au bord d'une rivière, une armée rebelle de cavaliers jure fidélité à un monarque lointain, serment vu plus tard comme une union.",
    explanation: "À Pereïaslav, le chef cosaque Bohdan Khmelnytsky prêta serment au tsar russe pour obtenir son soutien contre la Pologne-Lituanie. Son sens, alliance ou annexion, divise encore historiens ukrainiens et russes.",
  },
  vrancea_earthquake_1977: {
    name: "Séisme de Vrancea",
    clue: "Un séisme profond sous le coude d'une chaîne de montagnes abat des dizaines d'immeubles dans une capitale à 150 km, où meurent la plupart de ses 1 500 victimes.",
    explanation: "Le séisme de Vrancea frappa très en profondeur sous la courbure des Carpates, mais ses ondes touchèrent surtout Bucarest, où plus de 30 grands immeubles s'effondrèrent. Le dirigeant roumain se servit ensuite des dégâts comme prétexte pour raser de vieux quartiers.",
  },
  sigismunds_column: {
    name: "Colonne de Sigismond",
    clue: "Dans la vieille ville d'une capitale, une colonne portant un roi avec croix et épée honore celui qui y installa la capitale; abattue en guerre, on la refit.",
    explanation: "La colonne de Sigismond, place du Château à Varsovie, honore le roi Sigismond III Vasa, qui transféra la capitale polonaise depuis Cracovie. Premier monument profane de la ville, elle fut abattue pendant l'insurrection de Varsovie puis reconstruite.",
  },
  london_olympics_1948: {
    name: "Jeux olympiques de l'austérité",
    clue: "Dans une capitale marquée par le Blitz, les Jeux de l'austérité logent les athlètes en casernes, et une sprinteuse mère de deux enfants gagne quatre ors.",
    explanation: "Les Jeux de Londres ne construisirent aucun site et utilisèrent le stade de Wembley, en plein rationnement. La Néerlandaise Fanny Blankers-Koen, surnommée la ménagère volante, remporta quatre médailles d'or, et l'Allemagne et le Japon ne furent pas invités.",
  },
  garmisch_olympics_1936: {
    name: "Jeux d'hiver de Garmisch",
    clue: "Dans les Alpes, quelques mois avant des Jeux d'été dans sa capitale, le régime nazi organise les Jeux d'hiver, où le ski alpin fait ses débuts.",
    explanation: "Les Jeux d'hiver se tinrent dans les villages bavarois jumeaux de Garmisch et Partenkirchen, fusionnés pour l'occasion. Les panneaux hostiles aux Juifs furent retirés le temps de rassurer les visiteurs étrangers.",
  },
  cortina_olympics_1956: {
    name: "Jeux d'hiver de Cortina",
    clue: "Dans les Dolomites, un skieur de 20 ans venu d'un pays voisin gagne les trois courses alpines des premiers Jeux d'hiver retransmis en direct à la télé.",
    explanation: "À Cortina d'Ampezzo, l'Autrichien Toni Sailer remporta la descente, le slalom et le slalom géant, premier skieur à réussir ce triplé. Le patinage de vitesse eut lieu sur le lac gelé de Misurina, et les Jeux furent diffusés en direct dans toute l'Europe.",
  },
  pisco_earthquake_2007: {
    name: "Séisme de Pisco",
    clue: "Sur la côte pacifique au pied des Andes, un séisme abat une église coloniale pendant la messe, dans un port qui a donné son nom à une eau-de-vie de raisin.",
    explanation: "Le séisme du Pérou dévasta Pisco et les villes voisines de la côte sud. L'église San Clemente s'effondra sur les fidèles venus à une messe du soir, et une grande partie des maisons en adobe de la ville fut détruite.",
  },
  crete_earthquake_365: {
    name: "Séisme et tsunami de Crète",
    clue: "Au large de la Crète, un séisme soulève une partie de la côte de près de neuf mètres, et son tsunami jette des navires sur des toits de l'autre côté de la mer.",
    explanation: "L'antique séisme de Crète souleva tant l'ouest de l'île que d'anciens ports se trouvent aujourd'hui bien au-dessus de l'eau. L'historien Ammien Marcellin décrivit des navires échoués sur les toits des maisons d'Alexandrie après le tsunami.",
  },
  berne_convention: {
    name: "Convention de Berne",
    clue: "Dans une capitale montagnarde connue pour sa fosse aux ours, des pays s'engagent à protéger les œuvres des auteurs étrangers, à l'appel d'un grand romancier.",
    explanation: "La convention de Berne, signée à Berne, en Suisse, est le traité fondateur du droit d'auteur international. L'association littéraire de Victor Hugo l'avait réclamée, et elle lie encore la plupart des pays du monde.",
  },
  operation_panzerfaust: {
    name: "Opération Panzerfaust",
    clue: "Sur le Danube, un commando enroule le fils d'un régent dans un tapis et s'empare de la colline du château, forçant le régent à renoncer à quitter la guerre.",
    explanation: "Quand le régent hongrois Miklós Horthy annonça un armistice, le commando SS d'Otto Skorzeny enleva son fils à Budapest et prit le château de Buda. Horthy démissionna, et un gouvernement fasciste maintint la Hongrie dans la guerre.",
  },
  battle_of_the_pyramids: {
    name: "Bataille des Pyramides",
    clue: "En vue des pyramides, les carrés d'un général envahisseur écrasent une célèbre cavalerie; il avait dit à ses soldats que quarante siècles les contemplaient.",
    explanation: "L'armée de Napoléon mit en déroute la cavalerie mamelouke de Mourad Bey près du Caire, pendant la campagne d'Égypte. Sa phrase sur les quarante siècles qui contemplent les soldats du haut des pyramides est restée célèbre.",
  },
  battle_of_mohacs: {
    name: "Bataille de Mohács",
    clue: "Sur le Danube, l'armée d'un sultan envahisseur écrase en deux heures environ les chevaliers d'un royaume, et son jeune roi se noie dans un ruisseau en fuyant.",
    explanation: "À Mohács, l'armée ottomane de Soliman le Magnifique anéantit l'armée hongroise, et le roi Louis II se noya en battant en retraite. La Hongrie resta partagée pendant plus de 150 ans entre Ottomans et Habsbourg.",
  },
  arch_of_titus: {
    name: "Arc de Titus",
    clue: "Sur le forum d'une capitale antique, un arc de triomphe montre des soldats emportant le chandelier à sept branches du temple qu'ils venaient de détruire.",
    explanation: "L'arc de Titus, à Rome, célèbre la prise de Jérusalem et la destruction du Second Temple. Son relief de la ménorah portée en triomphe a inspiré l'emblème de l'État d'Israël.",
  },
  baths_of_caracalla: {
    name: "Thermes de Caracalla",
    clue: "Dans une capitale antique, les ruines géantes des thermes d'un empereur accueillent l'opéra l'été; trois ténors célèbres y chantèrent ensemble la première fois.",
    explanation: "Les thermes de Caracalla, à Rome, pouvaient accueillir environ 1 600 baigneurs à la fois et comptaient aussi bibliothèques et jardins. Dans leurs ruines, Carreras, Domingo et Pavarotti donnèrent le premier concert des Trois Ténors, la veille d'une finale de Coupe du monde.",
  },
  spire_of_dublin: {
    name: "Flèche de Dublin",
    clue: "Sur la grande rue d'une capitale insulaire pluvieuse, une aiguille d'acier de 120 mètres s'élève là où une colonne honorant un héros naval avait sauté.",
    explanation: "La Flèche se dresse sur O'Connell Street, à Dublin, à l'emplacement de la colonne Nelson, détruite par une bombe posée par des républicains. Les habitants ont donné à ce monument élancé de nombreux surnoms moqueurs.",
  },
  worker_and_kolkhoz_woman: {
    name: "L'Ouvrier et la Kolkhozienne",
    clue: "Deux géants d'acier brandissant marteau et faucille couronnaient un pavillon d'exposition universelle à l'étranger; ils se dressent dans une capitale enneigée.",
    explanation: "La statue de Vera Moukhina coiffait le pavillon de Moscou à l'Exposition universelle de Paris, face au pavillon allemand. Elle se dresse aujourd'hui au parc des expositions VDNKh, à Moscou, et figure dans le logo du studio Mosfilm.",
  },
  nigerien_coup_2023: {
    name: "Coup d'État au Niger",
    clue: "Dans une capitale brûlante au bord d'un grand fleuve, aux portes du désert, la garde présidentielle séquestre le président élu qu'elle devait protéger.",
    explanation: "La garde du général Abdourahamane Tiani retint le président Mohamed Bazoum dans sa résidence de Niamey. La junte expulsa ensuite les troupes françaises et se rapprocha de la Russie, rejoignant les régimes militaires voisins du Sahel.",
  },
  treaty_creation_of_ussr: {
    name: "Traité de création de l'URSS",
    clue: "Réunies dans le grand théâtre d'une capitale enneigée, quatre républiques approuvent un traité créant une union qui deviendra le plus vaste pays du monde.",
    explanation: "Le traité, approuvé au théâtre Bolchoï de Moscou, réunit la Russie, l'Ukraine, la Biélorussie et une république transcaucasienne en un seul État fédéral. Cette union dura près de sept décennies avant que ses propres dirigeants ne la dissolvent.",
  },
  second_council_of_lyon: {
    name: "Deuxième concile de Lyon",
    clue: "Au confluent de deux rivières, un concile réunit un temps les églises d'est et d'ouest et ordonne d'enfermer les cardinaux jusqu'à ce qu'ils élisent un pape.",
    explanation: "Le pape Grégoire X réunit le deuxième concile de Lyon après une élection pontificale qui avait traîné près de trois ans. Son union avec l'Église grecque échoua vite, mais sa règle du conclave fermé régit encore l'élection des papes.",
  },
  zagreb_earthquake_2020: {
    name: "Séisme de Zagreb",
    clue: "En plein confinement dû à une pandémie, un séisme matinal brise le sommet d'une des deux flèches d'une cathédrale et chasse les habitants dans le froid.",
    explanation: "Le séisme de Zagreb fut le plus fort à toucher la capitale croate en plus de cent ans. Il frappa alors que les habitants étaient confinés, et la flèche sud de la cathédrale dut ensuite être entièrement démontée.",
  },
  algiers_agreement_1975: {
    name: "Accord d'Alger",
    clue: "Deux puissances pétrolières rivales partagent leur fleuve frontalier au fond d'un golfe; cinq ans plus tard, l'une déchire l'accord en envahissant l'autre.",
    explanation: "Négocié à Alger, l'accord fixa la frontière entre l'Iran et l'Irak sur le thalweg du Chatt al-Arab, et l'Iran cessa d'aider les rebelles kurdes d'Irak. Saddam Hussein le dénonça avant d'envahir l'Iran.",
  },
  einsiedeln_abbey: {
    name: "Abbaye d'Einsiedeln",
    clue: "Dans une vallée d'un pays de montagne enclavé, une abbaye baroque abrite une statue de la mère de Jésus noircie par les cierges, lieu de pèlerinage millénaire.",
    explanation: "L'abbaye d'Einsiedeln, au centre de la Suisse, est l'un des plus grands lieux de pèlerinage marial d'Europe. Sa Vierge noire se trouve dans une chapelle à l'intérieur de l'église, sur une étape du chemin de Saint-Jacques.",
  },
  lake_placid_olympics_1932: {
    name: "Jeux d'hiver de Lake Placid",
    clue: "Dans les Adirondacks, un ancien champion de boxe gagne l'or en bobsleigh, seul champion olympique d'été et d'hiver dans deux sports différents.",
    explanation: "Aux Jeux de Lake Placid, dans l'État de New York, Eddie Eagan ajouta l'or du bobsleigh au titre de boxe gagné aux Jeux d'été douze ans plus tôt. Peu d'équipes traversèrent l'océan, si bien que les hôtes dominèrent.",
  },
  oslo_olympics_1952: {
    name: "Jeux d'hiver d'Oslo",
    clue: "Au bord d'un fjord, les premiers Jeux d'hiver dans une capitale allument leur flamme dans l'âtre d'un pionnier du ski; un tremplin attire 100 000 personnes.",
    explanation: "Pour les Jeux d'Oslo, la flamme fut allumée à Morgedal dans la cheminée de Sondre Norheim, père du ski moderne, lors du premier relais de la flamme d'hiver. Environ 150 000 spectateurs suivirent le saut à Holmenkollen.",
  },
  paris_exposition_1937: {
    name: "Exposition internationale de Paris",
    clue: "Au pied d'une tour de fer d'une exposition passée, les pavillons de deux dictatures rivales se font face, près d'un tableau montrant une ville bombardée.",
    explanation: "À l'Exposition de Paris, les pavillons de Berlin et de Moscou se faisaient face près de la tour Eiffel, et le Guernica de Picasso était exposé dans le pavillon espagnol. Le palais de Chaillot fut construit pour l'occasion.",
  },
  agadir_earthquake_1960: {
    name: "Séisme d'Agadir",
    clue: "Sur la côte atlantique, au pied de l'Atlas, un séisme de 15 secondes tue un tiers des habitants d'une ville portuaire, rebâtie ensuite un peu plus loin.",
    explanation: "Le séisme d'Agadir était de magnitude modeste mais frappa juste sous la ville en pleine nuit, détruisant sa vieille kasbah. Le Maroc reconstruisit Agadir quelques kilomètres plus au sud, avec des règles de construction plus strictes.",
  },
  battle_of_crete: {
    name: "Bataille de Crète",
    clue: "En Crète, la première invasion menée surtout par les airs prend l'île, mais les pertes des parachutistes sont telles qu'on ne la refera plus à cette échelle.",
    explanation: "Les parachutistes et troupes de planeurs allemands prirent la Crète aux forces britanniques, du Commonwealth et grecques, aidés par la prise de l'aérodrome de Maleme. Leurs pertes poussèrent Hitler à renoncer aux grandes opérations aéroportées.",
  },
  battle_of_kadesh: {
    name: "Bataille de Qadesh",
    clue: "Sur l'Oronte, deux empires livrent peut-être la plus grande bataille de chars de l'histoire, qui mènera plus tard à l'un des plus vieux traités de paix connus.",
    explanation: "Ramsès II d'Égypte affronta le roi hittite Muwatalli II près de Qadesh, dans l'actuelle Syrie, avec des milliers de chars. Les deux camps revendiquèrent la victoire, et leurs royaumes signèrent ensuite un traité de paix dont une copie est exposée aux Nations unies.",
  },
  battle_of_sedan_1870: {
    name: "Bataille de Sedan",
    clue: "Sur la Meuse, un empereur est fait prisonnier avec toute son armée, et son empire s'effondre en quelques jours.",
    explanation: "À Sedan, les armées prussiennes et allemandes encerclèrent l'armée française, et Napoléon III se rendit avec plus de 100 000 hommes. La Troisième République fut proclamée à Paris deux jours plus tard.",
  },
  leptis_magna: {
    name: "Leptis Magna",
    clue: "Sur la rive méditerranéenne, au bord du désert, la ville natale d'un empereur devient une vitrine de forums de marbre, puis dort sous le sable des siècles.",
    explanation: "Leptis Magna, à l'est de Tripoli, en Libye, fut somptueusement rebâtie par Septime Sévère, premier empereur né en Afrique. Le sable recouvrit une grande partie de la ville après son déclin, ce qui aida à préserver ses ruines.",
  },
  red_pyramid: {
    name: "Pyramide rouge",
    clue: "Le long du Nil, la première pyramide à faces lisses réussie doit son nom à la teinte rouille de sa pierre, bâtie pour le père du roi de la grande pyramide.",
    explanation: "La pyramide rouge de Dahchour fut bâtie pour Snéfrou, père de Khéops, après que la pyramide rhomboïdale voisine, trop pentue, eut dû changer d'angle à mi-hauteur. Son calcaire rougeâtre lui donne son nom.",
  },
  pula_arena: {
    name: "Arènes de Pula",
    clue: "Sur l'Adriatique, dans un port à la pointe d'une péninsule, se dresse le seul amphithéâtre antique qui a gardé ses quatre tours latérales en pierre.",
    explanation: "Les arènes de Pula, en Croatie, sur la péninsule d'Istrie, comptent parmi les six plus grands amphithéâtres romains conservés. Venise envisagea un temps de les déplacer pierre par pierre, et elles accueillent aujourd'hui concerts et festival de cinéma.",
  },
  mansudae_grand_monument: {
    name: "Grand monument de Mansudae",
    clue: "Dans la capitale du pays le plus fermé du monde, deux statues de bronze de 22 m du père et du fils au pouvoir dominent des visiteurs tenus de s'incliner.",
    explanation: "Le grand monument de Mansudae, à Pyongyang, montre Kim Il-sung et Kim Jong-il côte à côte. Les touristes étrangers doivent s'incliner et déposer des fleurs, et les photos doivent montrer les statues en entier.",
  },
  burgos_cathedral: {
    name: "Cathédrale de Burgos",
    clue: "Sur un haut plateau froid, une cathédrale hérissée de flèches abrite le tombeau d'un chevalier légendaire qui servit des souverains des deux religions.",
    explanation: "La cathédrale de Burgos, au nord de l'Espagne, étape du chemin de Saint-Jacques, abrite les restes de Rodrigo Díaz de Vivar, le Cid, et de son épouse Chimène. Ce fut la première cathédrale espagnole inscrite au patrimoine mondial.",
  },
  jiji_earthquake_1999: {
    name: "Séisme de Jiji",
    clue: "Sur une île montagneuse face à un vaste continent, un séisme avant l'aube fait plus de 2 000 morts et ondule la piste d'une école, devenue musée.",
    explanation: "Le séisme de Jiji, appelé 921 à Taïwan, rompit la faille de Chelungpu au centre de l'île. Le collège Guangfu dévasté, avec sa piste ondulée, est devenu le musée du séisme 921.",
  },
  treaty_of_bretigny: {
    name: "Traité de Brétigny",
    clue: "Dans un village d'une plaine à blé, des envoyés signent une trêve dans une guerre qui durera un siècle et fixent la rançon d'un roi captif à trois millions.",
    explanation: "Signé à Brétigny, près de Chartres, le traité libéra Jean II le Bon, capturé à Poitiers, contre une énorme rançon. Édouard III renonça au trône de France en échange d'une Aquitaine agrandie, mais les combats reprirent neuf ans plus tard.",
  },
  sudanese_coup_2021: {
    name: "Coup d'État au Soudan",
    clue: "Dans une capitale du désert au confluent de deux bras d'un grand fleuve, l'armée dissout la transition civile et fait arrêter le chef du gouvernement.",
    explanation: "Le général Abdel Fattah al-Burhane prit le pouvoir à Khartoum, mettant fin au partage du pouvoir conclu après la chute d'Omar el-Béchir. D'immenses manifestations suivirent, et la rivalité au sein de l'armée tourna plus tard à la guerre civile.",
  },
  third_council_of_constantinople: {
    name: "Troisième concile de Constantinople",
    clue: "Dans une capitale impériale, un concile déclare que son sauveur avait deux volontés et non une, et condamne comme hérétique un pape mort depuis longtemps.",
    explanation: "Le troisième concile de Constantinople, réuni au palais impérial, rejeta le monothélisme, l'idée que le Christ n'avait qu'une volonté divine. Il anathématisa aussi le pape Honorius Ier, un jugement cité plus tard dans les débats sur l'infaillibilité pontificale.",
  },
  pakistan_monument: {
    name: "Monument du Pakistan",
    clue: "Sur une colline dominant une capitale planifiée, un monument de granit en forme de fleur qui s'ouvre compte quatre grands pétales, un par province.",
    explanation: "Le monument du Pakistan, à Islamabad, se dresse sur les collines de Shakarparian. Ses quatre grands pétales représentent les provinces et ses trois petits les territoires, et des fresques intérieures montrent des sites nationaux.",
  },
  treaty_of_meerssen: {
    name: "Traité de Meerssen",
    clue: "Deux frères rois se partagent le royaume du milieu de leur neveu défunt, déplaçant la frontière entre leurs royaumes de l'ouest et de l'est.",
    explanation: "À Meerssen, près de Maastricht, Charles le Chauve et Louis le Germanique se partagèrent la Lotharingie après la mort de Lothaire II. Le traité redessina la frontière entre la Francie occidentale et la Francie orientale, ancêtres de la France et de l'Allemagne.",
  },
  innsbruck_olympics_1976: {
    name: "Jeux d'hiver d'Innsbruck",
    clue: "Dans les Alpes, une ville accueille les Jeux d'hiver une seconde fois après le refus des électeurs de la ville prévue, et allume deux flammes, une par édition.",
    explanation: "Innsbruck prit le relais après le refus des électeurs de Denver d'en payer le coût. Deux vasques brûlèrent au stade du Bergisel, une pour chaque édition, et le héros local Franz Klammer remporta une descente restée légendaire.",
  },
  st_moritz_olympics_1948: {
    name: "Jeux d'hiver de Saint-Moritz",
    clue: "Dans les Alpes, une station ensoleillée déjà hôte vingt ans plus tôt organise les premiers Jeux d'hiver d'après-guerre, sans deux nations vaincues.",
    explanation: "Saint-Moritz, en Suisse neutre, fut choisie car elle avait échappé aux destructions de la guerre. L'Allemagne et le Japon ne furent pas invités, et la station devint l'un des rares lieux à accueillir deux fois les Jeux d'hiver.",
  },
  battle_of_marengo: {
    name: "Bataille de Marengo",
    clue: "Dans la plaine du Pô, un premier consul change une quasi-défaite en victoire le soir venu; la légende dit que son cuisinier créa un poulet à son nom.",
    explanation: "À Marengo, près d'Alexandrie, Napoléon perdait face aux Autrichiens jusqu'à l'arrivée du général Desaix et de ses renforts; Desaix fut tué en menant la contre-attaque. La victoire consolida le pouvoir de Napoléon en France.",
  },
  battle_of_the_milvian_bridge: {
    name: "Bataille du pont Milvius",
    clue: "Près d'un pont aux portes d'une capitale antique, un empereur ayant vu un signe dans le ciel bat son rival, noyé dans le fleuve, puis se tourne vers la croix.",
    explanation: "Constantin battit Maxence au pont Milvius, sur le Tibre, au nord de Rome. Il attribua sa victoire à un symbole chrétien aperçu avant la bataille et accorda peu après aux chrétiens la liberté de culte.",
  },
  dieppe_raid: {
    name: "Raid sur Dieppe",
    clue: "Sur la côte de la Manche, un raid allié contre une ville portuaire tourne au carnage, mais ses leçons serviront aux grands débarquements deux ans plus tard.",
    explanation: "Le raid sur Dieppe fut mené surtout par des troupes canadiennes, dont plus de la moitié furent tués, blessés ou capturés en quelques heures. Les stratèges en retinrent qu'il ne fallait pas attaquer de front un port défendu, avant le débarquement de Normandie.",
  },
  battle_of_caporetto: {
    name: "Bataille de Caporetto",
    clue: "Sur l'Isonzo, une attaque surprise au gaz et par infiltration met en déroute toute une armée, un effondrement raconté ensuite dans un roman célèbre.",
    explanation: "Les troupes austro-hongroises et allemandes percèrent le front italien à Caporetto, aujourd'hui Kobarid en Slovénie, et le repoussèrent d'environ 100 km. Ernest Hemingway décrivit la retraite dans L'Adieu aux armes.",
  },
  great_mosque_of_samarra: {
    name: "Grande Mosquée de Samarra",
    clue: "Sur le Tigre, une mosquée jadis la plus grande du monde possède un minaret qui s'élève sur 52 mètres en rampe hélicoïdale, comme une coquille d'escargot géante.",
    explanation: "La grande mosquée de Samarra, en Irak, fut bâtie par le calife abbasside al-Mutawakkil quand Samarra remplaça un temps Bagdad comme capitale. On gravit son minaret Malwiya par une rampe extérieure sans garde-corps.",
  },
  sumela_monastery: {
    name: "Monastère de Sumela",
    clue: "Dans les montagnes dominant la mer Noire, un monastère s'accroche à une falaise vertigineuse au-dessus d'une vallée boisée noyée de brume.",
    explanation: "Le monastère de Sumela, près de Trabzon, en Turquie, fut fondé par des moines orthodoxes grecs et bâti dans une falaise à environ 1 200 mètres d'altitude. Longtemps abandonné, il accueille aujourd'hui un office annuel le jour de l'Assomption.",
  },
  domus_aurea: {
    name: "Domus aurea",
    clue: "Dans une capitale antique, un empereur tyran bâtit un palais doré après un grand incendie; ses salles peintes ensevelies donneront plus tard le mot grotesque.",
    explanation: "Néron fit bâtir la Domus aurea à Rome après le grand incendie, avec une salle à manger tournante et une statue géante à son effigie. Ses successeurs l'enterrèrent, et des artistes de la Renaissance descendus dans ces salles semblables à des grottes copièrent les peintures qu'ils appelèrent grotesques.",
  },
  fort_ross: {
    name: "Fort Ross",
    clue: "Sur la côte pacifique, une palissade de bois avec une chapelle à bulbe fut l'avant-poste le plus lointain d'un empire de la fourrure venu d'outre-océan.",
    explanation: "Fort Ross, au nord de San Francisco, fut fondé par la Compagnie russe d'Amérique pour chasser la loutre de mer et nourrir ses colonies d'Alaska. Il fut revendu quelques décennies plus tard, une fois les loutres presque exterminées.",
  },
  tomb_of_unknown_soldier_moscow: {
    name: "Tombe du Soldat inconnu de Moscou",
    clue: "Au pied des murailles de brique rouge d'une forteresse d'une capitale enneigée, une flamme éternelle brûle sur un soldat inconnu tombé en défendant la ville.",
    explanation: "La tombe se trouve dans le jardin d'Alexandre, au pied du mur du Kremlin. Les restes du soldat furent ramenés d'une fosse commune à 41 km de Moscou, sur la route du nord-ouest, là où l'avancée ennemie vers la capitale fut stoppée.",
  },
  new_cathedral_of_salamanca: {
    name: "Nouvelle cathédrale de Salamanque",
    clue: "Dans une ville universitaire de pierre dorée sur un haut plateau sec, le portail d'une cathédrale cache un petit astronaute sculpté lors d'une restauration.",
    explanation: "La nouvelle cathédrale de Salamanque fut bâtie à côté de l'ancienne, conservée plutôt que démolie. Lors d'une restauration, un tailleur de pierre ajouta à sa Puerta de Ramos un astronaute et un dragon mangeant une glace.",
  },
  yogyakarta_earthquake_2006: {
    name: "Séisme de Yogyakarta",
    clue: "Sur une île volcanique très peuplée, un séisme à l'aube fait près de 6 000 morts près d'une vieille ville de sultan et abîme de hauts temples de pierre.",
    explanation: "Le séisme de Yogyakarta frappa le centre de Java, en Indonésie, détruisant plus de 100 000 maisons. Les temples hindous de Prambanan furent endommagés, tandis que Borobudur, tout proche, fut presque épargné.",
  },
  guinean_coup_2021: {
    name: "Coup d'État en Guinée",
    clue: "Dans une capitale sur une étroite péninsule océane, un chef des forces spéciales arrête un président de 83 ans qui avait changé la constitution pour rester.",
    explanation: "Le colonel Mamady Doumbouya arrêta le président Alpha Condé à Conakry après sa réélection contestée pour un troisième mandat. Ancien de la Légion étrangère française, le colonel prit la tête du pays.",
  },
  entente_cordiale: {
    name: "Entente cordiale",
    clue: "Dans la capitale d'un empire insulaire, deux vieux rivaux scellent une entente amicale sur leurs colonies, mettant fin à des siècles d'hostilité.",
    explanation: "Signée à Londres, l'Entente cordiale laissa à la France les mains libres au Maroc et à la Grande-Bretagne en Égypte, et régla d'autres querelles coloniales. Elle prépara l'alliance militaire ultérieure des deux pays.",
  },
  ecuador_earthquake_2016: {
    name: "Séisme d'Équateur",
    clue: "Un séisme côtier presque exactement sur l'équateur fait environ 670 morts et rase des villes balnéaires, le plus meurtrier du pays depuis des décennies.",
    explanation: "Le séisme frappa près de Muisne et de Pedernales, sur la côte pacifique, et toucha durement les ports de Manta et Portoviejo. Ce fut la pire catastrophe du pays depuis plus d'un demi-siècle.",
  },
  malaga_cathedral: {
    name: "Cathédrale de Malaga",
    clue: "Dans un port ensoleillé du sud, une cathédrale surnommée la manchote n'a jamais eu sa seconde tour; l'argent aurait aidé une colonie lointaine à s'affranchir.",
    explanation: "La cathédrale de Malaga est surnommée La Manquita car sa tour sud n'a jamais été achevée. Une histoire populaire veut que les fonds aient financé la guerre d'indépendance américaine, mais ils ont peut-être servi à construire des routes.",
  },
  second_vienna_award: {
    name: "Second arbitrage de Vienne",
    clue: "Dans un palais baroque, les chefs de la diplomatie de deux dictateurs forcent un royaume à céder à son voisin la moitié d'une région cernée de montagnes.",
    explanation: "Au palais du Belvédère, à Vienne, Ribbentrop et Ciano obligèrent la Roumanie à céder la Transylvanie du Nord à la Hongrie. L'arbitrage fut annulé après la guerre et la région revint à la Roumanie.",
  },
  innsbruck_olympics_1964: {
    name: "Jeux d'hiver d'Innsbruck des blocs de glace",
    clue: "Dans les Alpes, un hiver sans neige oblige des soldats à monter des milliers de blocs de glace et des tonnes de neige sur les pistes des Jeux d'hiver.",
    explanation: "Les Jeux d'Innsbruck connurent l'un des hivers les plus doux depuis des décennies, si bien que l'armée autrichienne transporta quelque 20 000 blocs de glace pour les pistes de luge et de bobsleigh et 40 000 mètres cubes de neige pour les pistes de ski.",
  },
  gadsden_purchase: {
    name: "Achat Gadsden",
    clue: "Au sud de la rivière Gila, une jeune république achète à son voisin du sud une bande de désert pour y poser un chemin de fer, son dernier grand achat de terres.",
    explanation: "Négocié par James Gadsden, l'achat déplaça la frontière entre les États-Unis et le Mexique vers le sud, englobant le sud de l'actuel Arizona et une partie du Nouveau-Mexique, dont Tucson. Il offrait un tracé plat pour un chemin de fer transcontinental au sud.",
  },
  albania_earthquake_2019: {
    name: "Séisme d'Albanie",
    clue: "Sur l'Adriatique, un séisme avant l'aube abat hôtels et immeubles dans une ville portuaire balnéaire, le plus fort à frapper le pays depuis des décennies.",
    explanation: "Le séisme d'Albanie fit 51 morts, surtout à Durrës et dans la ville voisine de Thumanë. Des immeubles récents mal construits s'effondrèrent, et les pays voisins envoyèrent des équipes de secours.",
  },
  aegean_sea_earthquake_2020: {
    name: "Séisme de la mer Égée",
    clue: "Sur la mer Égée, un séisme abat des tours d'habitation dans un grand port face à une île, et une fillette est sortie vivante des décombres après quatre jours.",
    explanation: "Le séisme frappa entre l'île grecque de Samos et la côte turque. Presque toutes ses 119 victimes moururent à İzmir, où Ayda Gezgin, trois ans, fut sauvée après 91 heures sous un immeuble effondré.",
  },
  siege_of_vienna_1529: {
    name: "Premier siège de Vienne",
    clue: "Sur le Danube, le premier siège d'une grande capitale impériale par un sultan envahisseur échoue, son armée enlisée par de fortes pluies d'automne.",
    explanation: "Soliman le Magnifique assiégea Vienne après sa victoire de Mohács, mais la pluie l'obligea à laisser son artillerie lourde et ses sapeurs ne parvinrent pas à percer les murs. Les Ottomans retentèrent leur chance plus de 150 ans plus tard.",
  },
  battle_of_kulikovo: {
    name: "Bataille de Koulikovo",
    clue: "Sur le haut Don, l'armée d'un grand-prince écrase en rase campagne les troupes d'une horde, et le prince reçoit un surnom tiré du fleuve.",
    explanation: "Le grand-prince Dmitri de Moscou vainquit Mamaï, de la Horde d'or, au champ de Koulikovo et fut surnommé Dmitri Donskoï, c'est-à-dire du Don. L'emprise de la Horde sur les principautés russes fut affaiblie, mais pas encore brisée.",
  },
  battle_of_the_catalaunian_plains: {
    name: "Bataille des champs Catalauniques",
    clue: "Dans une vaste plaine, un empire déclinant et ses alliés barbares arrêtent un roi surnommé le fléau de Dieu, qui détourne ensuite son invasion ailleurs.",
    explanation: "Le général Aetius et les Wisigoths arrêtèrent Attila, roi des Huns, dans l'actuelle Champagne. Attila se retira et envahit l'Italie l'année suivante.",
  },
  konigsberg: {
    name: "Königsberg",
    clue: "Sur la Baltique, une ville fondée par des chevaliers croisés inspire un célèbre casse-tête sur la traversée de ses sept ponts, puis change de nom et de pays.",
    explanation: "Königsberg fut fondée par les chevaliers Teutoniques et devint la capitale de la Prusse. La preuve de Leonhard Euler qu'aucune promenade ne franchit ses sept ponts une seule fois chacun fonda la théorie des graphes, et la ville s'appelle aujourd'hui Kaliningrad, en Russie.",
  },
  cyrene: {
    name: "Cyrène",
    clue: "Sur un plateau verdoyant dominant la Méditerranée, une colonie fondée par des insulaires s'enrichit d'une plante médicinale cueillie jusqu'à l'extinction.",
    explanation: "Cyrène, dans l'est de la Libye, fut fondée par des colons venus de l'île de Théra. Sa richesse venait du silphium, plante prisée comme épice et remède, si surexploitée qu'elle disparut, et qui figurait sur les monnaies de la ville.",
  },
  nimrud: {
    name: "Nimroud",
    clue: "Sur le Tigre, une capitale antique gardée par des taureaux ailés à tête humaine est dynamitée par des miliciens après près de trois mille ans d'existence.",
    explanation: "Nimroud, au sud de Mossoul, en Irak, fut la capitale du roi assyrien Assurnasirpal II. Les reliefs de son palais et ses gardiens de porte ornent des musées du monde entier, et le groupe État islamique rasa et fit sauter une grande partie de ce qui restait.",
  },
  new_york_worlds_fair_1939: {
    name: "Exposition universelle de New York",
    clue: "Sur une ancienne décharge d'une immense ville portuaire, une expo promet le monde de demain avec une sphère blanche géante et montre la télévision au public.",
    explanation: "L'Exposition universelle de New York fut bâtie à Flushing Meadows, dans le Queens, sur un site décrit comme une vallée de cendres dans Gatsby le Magnifique. Le Trylon et la Perisphere devinrent des icônes, et le discours d'ouverture de Franklin Roosevelt fut diffusé à la télévision naissante.",
  },
  new_start_treaty: {
    name: "New START",
    clue: "Dans un château dominant une capitale aux cent clochers, deux superpuissances nucléaires limitent leurs ogives déployées à 1 550 chacune.",
    explanation: "Barack Obama et Dmitri Medvedev signèrent New START au château de Prague. Le traité limitait aussi missiles et bombardiers et prévoyait des inspections mutuelles, avant que la Russie ne suspende sa participation.",
  },
  tsar_cannon: {
    name: "Tsar Pouchka",
    clue: "Dans une forteresse aux murs rouges d'une capitale enneigée, un canon de bronze de 39 tonnes, jamais utilisé à la guerre, voisine une énorme cloche brisée.",
    explanation: "Le canon du Tsar fut coulé par Andreï Tchokhov et compte parmi les plus gros calibres jamais fabriqués. Il se trouve au Kremlin de Moscou, et ses énormes boulets de fonte furent ajoutés plus tard comme décor; ils sont trop gros pour être tirés.",
  },
  malian_coup_2020: {
    name: "Coup d'État au Mali",
    clue: "Sur un grand fleuve de la savane, des soldats d'une ville de garnison déjà auteurs d'un putsch huit ans plus tôt arrêtent le président, qui démissionne la nuit.",
    explanation: "Des mutins du camp militaire de Kati arrêtèrent le président Ibrahim Boubacar Keïta à Bamako après des mois de manifestations. Le colonel Assimi Goïta prit ensuite tout le pouvoir lors d'un second coup d'État.",
  },
  leon_cathedral: {
    name: "Cathédrale de León",
    clue: "Dans une ville qui doit son nom à une légion antique, une cathédrale surnommée la maison de la lumière compte près de 1 800 m² de vitraux médiévaux.",
    explanation: "La cathédrale de León, au nord-ouest de l'Espagne, sur le chemin de Saint-Jacques, possède l'une des plus grandes collections de vitraux médiévaux d'Europe. Ses murs très fins faillirent s'effondrer et furent largement restaurés.",
  },
  kumanovo_agreement: {
    name: "Accord de Kumanovo",
    clue: "Dans une ville frontalière, des généraux signent le retrait d'une armée d'une province rebelle après 78 jours de frappes aériennes; une force de paix entre.",
    explanation: "Signé à Kumanovo, en Macédoine du Nord, l'accord entre l'OTAN et Belgrade mit fin à la campagne de bombardements de la guerre du Kosovo. Les forces serbes quittèrent le Kosovo et la force de paix KFOR prit le relais.",
  },
  second_council_of_constantinople: {
    name: "Deuxième concile de Constantinople",
    clue: "Dans une capitale impériale, le concile d'un empereur condamne trois théologiens morts depuis longtemps; le pape, retenu dans la ville, refuse d'y siéger.",
    explanation: "L'empereur Justinien Ier convoqua le concile pour condamner les Trois Chapitres, écrits jugés favorables à Nestorius. Le pape Vigile, retenu à Constantinople pendant des années, le boycotta avant de céder.",
  },
  exposition_universelle_1878: {
    name: "Exposition de la tête de la Liberté",
    clue: "À une exposition universelle, les visiteurs montent dans la tête géante en cuivre d'une statue expédiée ensuite outre-océan pour brandir une torche sur un port.",
    explanation: "À l'Exposition universelle de Paris, la tête achevée de la statue de la Liberté de Bartholdi fut présentée dans les jardins du nouveau palais du Trocadéro. Le téléphone de Graham Bell et le phonographe d'Edison y étaient aussi exposés.",
  },
  battle_of_covadonga: {
    name: "Bataille de Covadonga",
    clue: "Dans les monts Cantabriques, une poignée de montagnards bat une armée d'invasion bien plus nombreuse près d'une grotte sainte, début mythique de la reconquête.",
    explanation: "À Covadonga, le chef asturien Pélage vainquit une troupe omeyyade dans une étroite vallée au pied d'une grotte sainte. La victoire fonda le royaume des Asturies, vu comme la première étape de la Reconquista chrétienne de l'Espagne.",
  },
  battle_of_the_granicus: {
    name: "Bataille du Granique",
    clue: "Près des Dardanelles, un jeune roi tout juste passé sur l'autre continent remporte sa première grande bataille contre un vaste empire et manque d'y mourir.",
    explanation: "Alexandre le Grand battit les satrapes perses sur le Granique peu après avoir débarqué en Asie Mineure. Son ami Cleitos lui sauva la vie en tranchant le bras d'un Perse sur le point de le frapper.",
  },
  battle_of_lake_trasimene: {
    name: "Bataille du lac Trasimène",
    clue: "Un général qui avait franchi les Alpes avec des éléphants cache son armée dans le brouillard du matin et piège toute une armée ennemie contre la rive d'un lac.",
    explanation: "Hannibal piégea l'armée du consul Flaminius entre les collines et la rive nord du lac Trasimène, au centre de l'Italie. Environ 15 000 Romains périrent, dont Flaminius, l'une des plus grandes embuscades de l'histoire militaire.",
  },
  battle_of_poltava: {
    name: "Bataille de Poltava",
    clue: "Dans la steppe près du Dniepr, l'armée d'un empire montant écrase l'armée d'invasion d'un roi guerrier, dont le pays cesse d'être une grande puissance.",
    explanation: "Pierre le Grand battit Charles XII de Suède à Poltava, dans l'actuelle Ukraine, pendant la grande guerre du Nord. Charles s'enfuit en territoire ottoman, et la Russie remplaça la Suède comme grande puissance de la Baltique.",
  },
  edessa: {
    name: "Édesse",
    clue: "Près du haut Euphrate, une ville antique garde un bassin de carpes sacrées où, selon la légende, le feu destiné à brûler un grand patriarche se changea en eau.",
    explanation: "Édesse, aujourd'hui Şanlıurfa au sud-est de la Turquie, fut un foyer précoce du christianisme et la capitale du premier État croisé. La tradition y place le bûcher d'Abraham, changé en bassin aux poissons de Balıklıgöl.",
  },
  mausoleum_of_augustus: {
    name: "Mausolée d'Auguste",
    clue: "Dans une capitale antique, l'immense tombeau circulaire de son premier empereur servit plus tard de forteresse, d'arène taurine et de salle de concert.",
    explanation: "Le mausolée d'Auguste, à Rome, accueillit les cendres du premier empereur et de sa famille. Au fil des siècles, il devint place forte d'une famille noble, jardin, arène pour corridas et feux d'artifice, puis salle de concert, avant de rouvrir comme monument.",
  },
  caernarfon_castle: {
    name: "Château de Caernarfon",
    clue: "Dans un port fortifié face à une île, un château aux tours de pierre à bandes, bâti par un roi conquérant, accueille l'investiture de l'héritier du trône.",
    explanation: "Édouard Ier bâtit le château de Caernarfon au nord du pays de Galles après l'avoir conquis, avec des murs rayés comme ceux de Constantinople. Charles y fut investi prince de Galles, comme Édouard VIII avant lui.",
  },
  great_pyramid_of_cholula: {
    name: "Grande pyramide de Cholula",
    clue: "La plus grande pyramide du monde en volume se cache sous une colline herbeuse coiffée d'une église coloniale, face à des volcans enneigés.",
    explanation: "La grande pyramide de Cholula, près de Puebla, au Mexique, fut bâtie par étapes pendant des siècles puis envahie par la végétation. Les Espagnols construisirent à son sommet l'église Nuestra Señora de los Remedios, et des tunnels permettent aujourd'hui de la visiter de l'intérieur.",
  },
  haiti_earthquake_2021: {
    name: "Séisme de la péninsule sud d'Haïti",
    clue: "Un mois après l'assassinat de son président, un pays insulaire des Caraïbes est frappé par un séisme qui dévaste sa longue péninsule du sud.",
    explanation: "Le séisme frappa la péninsule de Tiburon, en Haïti, près des Cayes, faisant plus de 2 200 morts. Une tempête tropicale arriva quelques jours plus tard, compliquant les secours dans un pays déjà en crise politique.",
  },
  exposition_universelle_1867: {
    name: "Exposition du palais ovale",
    clue: "Dans une capitale impériale tout juste percée de grands boulevards, une exposition couvre un champ de manœuvres d'un immense palais ovale de fer et de verre.",
    explanation: "L'Exposition universelle de Paris couvrit le Champ-de-Mars d'un palais elliptique de fer et de verre. Le Japon participa pour la première fois à une exposition universelle, lançant la vogue de l'art japonais appelée japonisme.",
  },
  columbus_circle: {
    name: "Columbus Circle",
    clue: "À l'angle d'un vaste parc rectangulaire d'une ville de gratte-ciel, la statue d'un explorateur sur une colonne marque le point zéro des distances de la ville.",
    explanation: "Columbus Circle se trouve à l'angle sud-ouest de Central Park, à Manhattan. Sa statue de Christophe Colomb en marbre fut financée par des Italo-Américains, et les distances routières officielles depuis New York sont mesurées à partir d'elle.",
  },
  chiapas_earthquake_2017: {
    name: "Séisme du Chiapas",
    clue: "Au large d'une côte tropicale près d'un isthme étroit, le plus fort séisme du pays en un siècle survient douze jours avant celui de sa capitale d'altitude.",
    explanation: "Le séisme du Chiapas frappa de nuit au large de la côte pacifique du sud du Mexique et dévasta Juchitán, sur l'isthme de Tehuantepec. Douze jours plus tard, le séisme de Puebla fit s'effondrer des immeubles à Mexico.",
  },
  partial_nuclear_test_ban_treaty: {
    name: "Traité d'interdiction partielle des essais",
    clue: "Dans une capitale enneigée, trois puissances nucléaires renoncent aux essais de bombes dans l'air, dans l'espace et sous l'eau, mais pas sous terre.",
    explanation: "Le traité d'interdiction partielle des essais nucléaires fut signé à Moscou par les ministres des Affaires étrangères des États-Unis, du Royaume-Uni et du pays hôte. Les essais souterrains continuèrent, mais les retombées radioactives dans l'atmosphère chutèrent ensuite fortement.",
  },
  stockholm_convention: {
    name: "Convention de Stockholm",
    clue: "Dans une capitale répartie sur quatorze îles, des nations interdisent une douzaine de produits toxiques persistants, sauf un insecticide contre le paludisme.",
    explanation: "La convention de Stockholm sur les polluants organiques persistants visait des produits comme les PCB et les dioxines, qui s'accumulent dans la chaîne alimentaire. Le DDT ne resta autorisé que contre les moustiques porteurs du paludisme.",
  },
  coup_of_18_fructidor: {
    name: "Coup d'État du 18 Fructidor",
    clue: "Des soldats cernent l'assemblée et arrêtent des députés proches des royalistes, dont beaucoup sont déportés vers un bagne tropical surnommé la guillotine sèche.",
    explanation: "À Paris, trois membres du Directoire utilisèrent les troupes du général Augereau pour annuler des élections gagnées par les royalistes. Des dizaines de députés et de journalistes furent déportés en Guyane.",
  },
  sumatra_earthquake_2012: {
    name: "Séismes au large de Sumatra",
    clue: "Le plus grand séisme de coulissage horizontal jamais enregistré secoue le fond de l'océan loin d'une grande île, mais ne lève qu'un petit tsunami.",
    explanation: "Le séisme de magnitude 8,6 frappa le fond de l'océan Indien au large de Sumatra, suivi d'une réplique de 8,2. Comme les plaques glissèrent latéralement et non verticalement, les vagues restèrent faibles et il y eut peu de victimes.",
  },
  anti_comintern_pact: {
    name: "Pacte anti-Komintern",
    clue: "Dans une capitale, deux puissances expansionnistes aux deux bouts d'un immense continent signent un pacte contre une ligue communiste mondiale; une autre suit.",
    explanation: "L'Allemagne nazie et le Japon signèrent le pacte anti-Komintern à Berlin, contre l'Internationale communiste dirigée depuis Moscou. L'Italie le rejoignit l'année suivante, rapprochant les trois puissances.",
  },
};
