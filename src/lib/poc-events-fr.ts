// French translations for POC_EVENTS, keyed by event id.
// Kept separate from poc-events.ts so the English data stays the source of truth.

export type EventTranslation = {
  name: string;
  clue: string;
  explanation: string;
};

export const POC_EVENTS_FR: Record<string, EventTranslation> = {
  hastings: {
    name: "Bataille d'Hastings",
    clue: "Un duc traverse la mer depuis son propre duché, bat et tue un roi au combat, puis fonde une nouvelle dynastie régnante.",
    explanation:
      "Guillaume, duc de Normandie, vainquit le roi Harold II à Hastings, devenant roi d'Angleterre et instaurant la domination normande sur le pays.",
  },
  bastille: {
    name: "Prise de la Bastille",
    clue: "Une foule prend d'assaut une forteresse-prison honnie, tue son gouverneur et promène sa tête au bout d'une pique, déclenchant un soulèvement national.",
    explanation:
      "Les Parisiens prirent d'assaut la forteresse de la Bastille, symbole de la tyrannie royale, marquant le début de la Révolution française.",
  },
  constantinople: {
    name: "Chute de Constantinople",
    clue: "Après un siège de 53 jours, une antique capitale tombe, mettant fin à un empire vieux de plus de mille ans.",
    explanation:
      "Les forces ottomanes du sultan Mehmed II s'emparèrent de Constantinople après 53 jours de siège, mettant fin à plus de 1 000 ans d'Empire byzantin.",
  },
  trafalgar: {
    name: "Bataille de Trafalgar",
    clue: "La flotte d'un amiral mortellement blessé détruit deux flottes ennemies combinées au large d'un cap rocheux, assurant la domination navale pour un siècle.",
    explanation:
      "La flotte britannique de l'amiral Nelson détruisit les flottes combinées française et espagnole au large du cap Trafalgar, assurant la suprématie navale britannique pour un siècle.",
  },
  wright: {
    name: "Premier vol des frères Wright",
    clue: "Sur des dunes côtières balayées par le vent, deux frères réalisent le premier vol contrôlé et soutenu d'un appareil motorisé.",
    explanation:
      "Orville et Wilbur Wright réalisèrent le premier vol contrôlé et soutenu d'un aéronef motorisé à Kitty Hawk, en Caroline du Nord.",
  },
  chernobyl: {
    name: "Catastrophe de Tchernobyl",
    clue: "Un réacteur d'une centrale électrique explose et brûle pendant plus d'une semaine, provoquant le pire accident nucléaire de l'histoire.",
    explanation:
      "Un réacteur de la centrale nucléaire de Tchernobyl explosa, libérant une contamination radioactive massive à travers l'Europe, le pire accident nucléaire de l'histoire.",
  },
  machupicchu: {
    name: "Redécouverte du Machu Picchu",
    clue: "Des agriculteurs locaux guident un historien étranger jusqu'à une citadelle abandonnée des siècles plus tôt, cachée en haute montagne.",
    explanation:
      "L'historien américain Hiram Bingham fut guidé jusqu'aux ruines du Machu Picchu par des agriculteurs locaux, faisant connaître la citadelle inca au monde entier.",
  },
  romefire: {
    name: "Grand incendie de Rome",
    clue: "Un incendie ravage pendant six jours une capitale antique ; son dirigeant est accusé d'en avoir profité pour persécuter une minorité religieuse.",
    explanation:
      "Un incendie majeur ravagea Rome pendant six jours, détruisant une grande partie de la ville ; l'empereur Néron fut plus tard accusé d'avoir utilisé cet événement comme prétexte pour persécuter les chrétiens.",
  },
  waterloo: {
    name: "Bataille de Waterloo",
    clue: "Un ancien empereur livre son dernier combat contre une coalition de trois armées, sur un champ boueux près d'une capitale, mettant fin à son règne pour de bon.",
    explanation:
      "Une coalition de forces britanniques, néerlandaises et prussiennes vainquit Napoléon Bonaparte près de Waterloo, mettant fin définitivement à son règne et aux guerres napoléoniennes.",
  },
  titanic: {
    name: "Naufrage du Titanic",
    clue: "Un paquebot vanté comme « insubmersible » heurte un iceberg lors de son voyage inaugural et coule en une nuit, tuant plus de 1 500 personnes.",
    explanation:
      "Le RMS Titanic heurta un iceberg dans l'Atlantique Nord et coula en pleine nuit, tuant plus de 1 500 personnes lors de son voyage inaugural.",
  },
  pearlharbor: {
    name: "Attaque de Pearl Harbor",
    clue: "Un raid aérien surprise mené par des avions décollés de porte-avions frappe une base navale insulaire, entraînant une nation réticente dans une guerre mondiale.",
    explanation:
      "Le Japon lança une attaque surprise sur la base navale américaine de Pearl Harbor, à Hawaï, entraînant les États-Unis dans la Seconde Guerre mondiale.",
  },
  tutankhamun: {
    name: "Découverte de la tombe de Toutânkhamon",
    clue: "Un archéologue découvre la tombe presque intacte d'un jeune souverain après plus de 3 000 ans.",
    explanation:
      "L'archéologue Howard Carter découvrit la tombe presque intacte du jeune pharaon Toutânkhamon dans la Vallée des Rois, en Égypte.",
  },
  berlinwall: {
    name: "Chute du mur de Berlin",
    clue: "Des foules abattent une barrière de béton qui divisait une ville en deux depuis 28 ans.",
    explanation:
      "Les autorités est-allemandes ouvrirent le mur de Berlin après des manifestations massives, et des foules en liesse commencèrent à le démolir, symbolisant la fin de la division de la guerre froide.",
  },
  krakatoa: {
    name: "Éruption du Krakatoa",
    clue: "Une île volcanique dans un détroit étroit produit le bruit le plus fort jamais enregistré, puis des tsunamis submergent les côtes voisines.",
    explanation:
      "L'île volcanique du Krakatoa entra en éruption de façon catastrophique, produisant un bruit entendu à des milliers de kilomètres et déclenchant des tsunamis qui tuèrent des dizaines de milliers de personnes.",
  },
  columbus: {
    name: "Christophe Colomb atteint les Amériques",
    clue: "Un navigateur naviguant sous pavillon étranger accoste sur une petite île, persuadé jusqu'à sa mort d'avoir atteint les Indes.",
    explanation:
      "L'expédition de Christophe Colomb, financée par l'Espagne, accosta sur une île des Bahamas, marquant le début du contact durable entre l'Europe et les Amériques.",
  },
  stalingrad: {
    name: "Bataille de Stalingrad",
    clue: "Un siège brutal de plusieurs mois s'achève par la reddition forcée d'une armée entière encerclée, un tournant d'une guerre mondiale.",
    explanation:
      "La bataille de Stalingrad fut l'une des plus meurtrières de l'histoire ; la victoire soviétique marqua un tournant majeur contre l'Allemagne nazie.",
  },
  indianindependence: {
    name: "Indépendance de l'Inde",
    clue: "À minuit précis, le premier dirigeant d'une nation tout juste libérée prononce son discours du « rendez-vous avec le destin » devant la foule, dans sa capitale.",
    explanation:
      "L'Inde devint indépendante de la domination coloniale britannique, le Premier ministre Jawaharlal Nehru prononçant son célèbre discours de minuit.",
  },
  hearttransplant: {
    name: "Première greffe du cœur",
    clue: "Un chirurgien réalise la première greffe du cœur entre humains dans une ville côtière au pied d'une montagne au sommet plat.",
    explanation:
      "Le chirurgien sud-africain Christiaan Barnard réalisa la première greffe du cœur entre humains à l'hôpital Groote Schuur du Cap.",
  },
  gettysburg: {
    name: "Bataille de Gettysburg",
    clue: "Un affrontement de trois jours dans une petite ville fait environ 50 000 victimes, la bataille la plus meurtrière d'une guerre civile.",
    explanation:
      "La bataille de Gettysburg fut la plus meurtrière de la guerre de Sécession et un tournant en faveur de l'Union.",
  },
  franzferdinand: {
    name: "Assassinat de l'archiduc François-Ferdinand",
    clue: "L'assassinat d'un archiduc et de son épouse en visite officielle déclenche un engrenage vers la guerre mondiale.",
    explanation:
      "L'assassinat de l'archiduc François-Ferdinand d'Autriche-Hongrie à Sarajevo déclencha un enchaînement d'alliances qui mena à la Première Guerre mondiale.",
  },
  marathon: {
    name: "Bataille de Marathon",
    clue: "Une armée inférieure en nombre stoppe une invasion sur une plaine côtière ; la course d'un messager donnera son nom à une épreuve sportive.",
    explanation:
      "Les forces athéniennes vainquirent une force d'invasion perse bien plus nombreuse à Marathon ; selon la légende, un messager courut ensuite jusqu'à Athènes pour annoncer la victoire.",
  },
  thermopylae: {
    name: "Bataille des Thermopyles",
    clue: "Une petite troupe tient un col de montagne étroit pendant trois jours, jusqu'à ce qu'un habitant trahisse un sentier permettant son encerclement.",
    explanation:
      "Une petite force grecque menée par le roi Léonidas de Sparte contint une immense armée perse au col étroit des Thermopyles pendant trois jours.",
  },
  caesarassassination: {
    name: "Assassinat de Jules César",
    clue: "Un dictateur est poignardé une vingtaine de fois par des sénateurs à l'intérieur d'un complexe théâtral, le jour d'une assemblée fatidique.",
    explanation:
      "Des sénateurs romains assassinèrent Jules César dans le théâtre de Pompée, craignant son pouvoir grandissant.",
  },
  pompeii: {
    name: "Destruction de Pompéi",
    clue: "Une éruption volcanique ensevelit une ville sous la cendre, si bien préservée que du plâtre coulé dans la cendre recrée la pose exacte des victimes.",
    explanation:
      "L'éruption du Vésuve ensevelit les villes romaines de Pompéi et d'Herculanum sous la cendre et la pierre ponce, les préservant remarquablement intactes.",
  },
  actium: {
    name: "Bataille d'Actium",
    clue: "Une bataille navale oppose une reine et son amant, un général, à l'ancien allié de celui-ci, pour décider qui dirigera un empire.",
    explanation:
      "La flotte d'Octave vainquit les forces combinées de Marc Antoine et de Cléopâtre à Actium, ouvrant la voie à l'Empire romain.",
  },
  greatpyramid: {
    name: "Achèvement de la grande pyramide de Gizeh",
    clue: "Des ouvriers achèvent la plus haute structure sur Terre, un record que le monument conservera pendant près de 4 000 ans.",
    explanation:
      "La grande pyramide de Gizeh, construite comme tombeau pour le pharaon Khéops, fut la plus haute structure construite par l'homme pendant près de 4 000 ans.",
  },
  firstolympics: {
    name: "Premiers Jeux olympiques",
    clue: "Des athlètes se rassemblent dans un sanctuaire sacré pour les premiers jeux enregistrés en l'honneur du roi des dieux.",
    explanation:
      "Les premiers Jeux olympiques enregistrés eurent lieu à Olympie, en Grèce, dans le cadre d'une fête religieuse en l'honneur de Zeus.",
  },
  cannae: {
    name: "Bataille de Cannes",
    clue: "Une manœuvre en tenaille permet à une armée réduite d'encercler et détruire une force plus nombreuse en un jour, parmi les plus meurtriers de l'Antiquité.",
    explanation:
      "L'armée carthaginoise d'Hannibal encercla et détruisit une armée romaine bien plus nombreuse à Cannes, l'une des plus grandes victoires tactiques de l'histoire.",
  },
  rubicon: {
    name: "Franchissement du Rubicon",
    clue: "Un général fait traverser une petite rivière à sa légion, bravant la loi et déclenchant une guerre civile.",
    explanation:
      "Jules César fit franchir le Rubicon à son armée pour entrer en Italie, défiant la loi romaine et déclenchant une guerre civile, d'où l'expression « franchir le Rubicon ».",
  },
  gaugamela: {
    name: "Bataille de Gaugamèles",
    clue: "L'armée réduite d'un jeune conquérant met en déroute une force impériale bien plus nombreuse en plaine, mettant fin à un empire vieux de plusieurs siècles.",
    explanation:
      "L'armée d'Alexandre le Grand, pourtant inférieure en nombre, vainquit de façon décisive Darius III de Perse à Gaugamèles, mettant pratiquement fin à l'Empire achéménide.",
  },
  magnacarta: {
    name: "Signature de la Magna Carta",
    clue: "Des barons rebelles forcent un roi à sceller une charte limitant son propre pouvoir, dans une prairie au bord d'une rivière.",
    explanation:
      "Des barons anglais forcèrent le roi Jean sans Terre à sceller la Magna Carta à Runnymede, établissant le principe que le roi était soumis à la loi.",
  },
  sackofrome410: {
    name: "Sac de Rome",
    clue: "L'armée d'un roi envahisseur franchit les murs d'une antique capitale pour la première fois depuis près de 800 ans.",
    explanation:
      "Les Wisigoths menés par le roi Alaric mirent Rome à sac, la première fois que la ville tombait aux mains d'un ennemi étranger depuis près de 800 ans.",
  },
  baghdadfounding: {
    name: "Fondation de Bagdad",
    clue: "Un chef religieux et politique fonde une nouvelle ville circulaire destinée à devenir un centre de savoir et de commerce.",
    explanation:
      "Le calife abbasside al-Mansur fonda Bagdad comme nouvelle capitale, qui devint un grand centre de commerce, de science et de culture.",
  },
  genghiskhan: {
    name: "Proclamation de Gengis Khan",
    clue: "Un chef tribal reçoit un nouveau titre en étant proclamé souverain de tous les peuples de la steppe lors d'une grande assemblée.",
    explanation:
      "Lors d'une grande assemblée (kurultai), Temüjin fut proclamé Gengis Khan, souverain de toutes les tribus mongoles et turques, fondant l'Empire mongol.",
  },
  blackdeath: {
    name: "La peste noire atteint l'Europe",
    clue: "Des rats porteurs de la peste débarquent de navires marchands dans un port, déclenchant une pandémie qui tuera environ un tiers de la population.",
    explanation:
      "Des navires transportant des rats porteurs de la peste accostèrent à Messine, en Sicile, introduisant la peste noire en Europe, qui tua environ un tiers de la population.",
  },
  fallofgranada: {
    name: "Chute de Grenade",
    clue: "Le dernier bastion d'un royaume vieux de plusieurs siècles se rend à une armée royale, achevant une reconquête entamée des siècles plus tôt.",
    explanation:
      "L'émirat de Grenade, dernier bastion musulman d'Espagne, se rendit aux Rois Catholiques, achevant la Reconquista entamée des siècles plus tôt.",
  },
  agincourt: {
    name: "Bataille d'Azincourt",
    clue: "Une armée largement inférieure en nombre, composée d'archers, anéantit une force montée dans la boue.",
    explanation:
      "L'armée anglaise du roi Henri V, inférieure en nombre mais composée en grande partie d'archers, vainquit de façon décisive les Français à Azincourt pendant la guerre de Cent Ans.",
  },
  siegeoforleans: {
    name: "Levée du siège d'Orléans",
    clue: "Une paysanne de 17 ans mène une armée pour lever un siège de plusieurs mois sur une ville assiégée.",
    explanation:
      "Jeanne d'Arc, âgée de 17 ans, inspira les forces françaises à lever le siège anglais d'Orléans, un tournant de la guerre de Cent Ans.",
  },
  vascodagama: {
    name: "Vasco de Gama atteint Calicut",
    clue: "La flotte d'un explorateur double un grand cap austral, achevant la première route maritime directe vers un lointain port marchand d'épices.",
    explanation:
      "L'explorateur portugais Vasco de Gama arriva à Calicut, en Inde, après avoir trouvé la première route maritime directe entre l'Europe et l'Asie.",
  },
  magellancircumnavigation: {
    name: "Fin du tour du monde de Magellan",
    clue: "Un seul navire et une poignée de marins reviennent d'une expédition, ayant achevé le premier tour du monde en bateau de l'histoire.",
    explanation:
      "Le Victoria, dernier navire survivant de l'expédition de Magellan, revint en Espagne, achevant le premier tour du monde de l'histoire.",
  },
  mayflower: {
    name: "Débarquement du Mayflower",
    clue: "Les passagers signent un pacte de gouvernement autonome à bord du navire, avant que quiconque ne pose le pied à terre.",
    explanation:
      "Des colons pèlerins à bord du Mayflower débarquèrent à Plymouth, fondant l'une des premières colonies anglaises permanentes d'Amérique du Nord.",
  },
  greatfireoflondon: {
    name: "Grand incendie de Londres",
    clue: "Un incendie de boulangerie se propage à travers une ville en bois densément peuplée, brûlant pendant quatre jours.",
    explanation:
      "Un incendie parti d'une boulangerie de Pudding Lane se propagea à travers Londres, détruisant l'essentiel de la ville médiévale en quatre jours.",
  },
  newtonprincipia: {
    name: "Publication des Principia de Newton",
    clue: "Un savant reclus publie un ouvrage exposant les lois qui régissent le mouvement et la gravité.",
    explanation:
      "Isaac Newton publia les Principia Mathematica, exposant ses lois du mouvement et de la gravitation universelle.",
  },
  stpetersburgfounding: {
    name: "Fondation de Saint-Pétersbourg",
    clue: "Un souverain fonde une nouvelle capitale sur un marécage, conçue comme une fenêtre ouverte sur l'Occident.",
    explanation:
      "Le tsar Pierre le Grand fonda Saint-Pétersbourg sur la côte baltique comme « fenêtre sur l'Occident » de la Russie, qui en fit plus tard sa capitale impériale.",
  },
  usdeclaration: {
    name: "Déclaration d'indépendance américaine",
    clue: "Des délégués signent un document rompant formellement avec le pouvoir d'un roi lointain, dans une salle de brique rouge.",
    explanation:
      "Des délégués réunis à Philadelphie adoptèrent la Déclaration d'indépendance, annonçant formellement la rupture des colonies américaines avec la couronne britannique.",
  },
  winterpalace: {
    name: "Prise du palais d'Hiver",
    clue: "Des forces révolutionnaires prennent d'assaut un palais fastueux presque sans résistance, renversant en une nuit un gouvernement provisoire.",
    explanation:
      "Des révolutionnaires bolcheviques prirent d'assaut le palais d'Hiver à Petrograd, renversant le gouvernement provisoire russe.",
  },
  louisxviexecution: {
    name: "Exécution de Louis XVI",
    clue: "Un roi déchu est exécuté à la guillotine devant une foule immense, sur une grande place publique.",
    explanation:
      "Le roi Louis XVI de France fut exécuté à la guillotine à Paris pendant la Révolution française.",
  },
  congressofvienna: {
    name: "Ouverture du congrès de Vienne",
    clue: "Les grandes puissances se réunissent pour redessiner la carte après des années de guerre, si absorbées par les bals qu'on ironise qu'il danse sans avancer.",
    explanation:
      "Le congrès de Vienne réunit les puissances européennes pour redessiner les frontières du continent après les guerres napoléoniennes, et ses bals incessants étaient si notoires qu'un diplomate ironisa : « Le congrès danse, mais il ne marche pas. »",
  },
  ayacucho: {
    name: "Bataille d'Ayacucho",
    clue: "Une bataille décisive en haute montagne met pratiquement fin à la domination coloniale sur tout un continent.",
    explanation:
      "La bataille décisive d'Ayacucho, dans les Andes péruviennes, mit pratiquement fin à la domination coloniale espagnole en Amérique du Sud.",
  },
  greekindependence: {
    name: "Déclaration de l'indépendance grecque",
    clue: "Des clercs et des rebelles hissent un drapeau dans un monastère de montagne, déclarant la révolte contre un empire.",
    explanation:
      "Des rebelles grecs déclarèrent l'indépendance vis-à-vis de l'Empire ottoman, déclenchant la guerre d'indépendance grecque.",
  },
  suezcanal: {
    name: "Ouverture du canal de Suez",
    clue: "Un canal est creusé à travers un désert plat, sans aucune écluse, reliant deux mers et raccourcissant le trajet entre continents.",
    explanation:
      "Le canal de Suez fut inauguré après une décennie de travaux menés par le diplomate français Ferdinand de Lesseps. Creusé au niveau de la mer, sans écluse, il permit aux navires de relier directement la Méditerranée et la mer Rouge au lieu de contourner tout le continent africain, bouleversant le commerce mondial.",
  },
  transatlanticcable: {
    name: "Premier câble transatlantique",
    clue: "Des ingénieurs achèvent un câble tendu sur le fond océanique, reliant deux continents par fil pour la première fois.",
    explanation:
      "Le premier câble télégraphique transatlantique fut achevé, permettant pour la première fois une communication quasi instantanée entre l'Europe et l'Amérique du Nord.",
  },
  darwinorigin: {
    name: "Publication de L'Origine des espèces de Darwin",
    clue: "Un naturaliste publie un livre controversé proposant que les espèces évoluent par sélection naturelle.",
    explanation:
      "Charles Darwin publia L'Origine des espèces, exposant sa théorie de l'évolution par sélection naturelle.",
  },
  meijirestoration: {
    name: "Restauration Meiji",
    clue: "Le pouvoir impérial est restauré dans une ancienne capitale, mettant fin à des siècles de gouvernement par des gouverneurs militaires héréditaires.",
    explanation:
      "La restauration Meiji rétablit le pouvoir impérial au Japon, mettant fin à des siècles de gouvernement shogunal et amorçant une modernisation rapide.",
  },
  siegeofparis1871: {
    name: "Fin du siège de Paris",
    clue: "Un siège de quatre mois force une capitale à se rendre, hâtant l'unification d'une nouvelle grande puissance.",
    explanation:
      "Le siège prussien de Paris se termina par la reddition de la ville, un moment décisif de la guerre franco-prussienne.",
  },
  bellfirstcall: {
    name: "Premier appel téléphonique de Bell",
    clue: "Un inventeur passe le premier appel réussi sur un appareil transmettant la voix, demandant à son assistant dans la pièce voisine de venir le voir.",
    explanation:
      "Alexander Graham Bell passa le premier appel téléphonique réussi, prononçant la célèbre phrase « Mr. Watson, venez, j'ai besoin de vous ».",
  },
  eiffeltower: {
    name: "Achèvement de la tour Eiffel",
    clue: "Une tour de fer controversée est achevée pour une exposition universelle, censée ne durer que vingt ans.",
    explanation:
      "La tour Eiffel fut achevée comme arche d'entrée de l'Exposition universelle de Paris, et devait initialement être démontée après vingt ans.",
  },
  battleofsomme: {
    name: "Début de la bataille de la Somme",
    clue: "L'une des batailles les plus meurtrières de l'histoire commence le long d'une paisible vallée fluviale, faisant plus d'un million de victimes des deux côtés.",
    explanation:
      "La bataille de la Somme fut l'une des plus meurtrières de la Première Guerre mondiale, avec plus d'un million de victimes des deux côtés.",
  },
  armistice1918: {
    name: "Armistice de la Première Guerre mondiale",
    clue: "Des délégués signent un armistice dans un wagon de chemin de fer en forêt, mettant fin à quatre années de guerre.",
    explanation:
      "Un armistice signé dans un wagon près de Compiègne mit fin aux combats sur le front occidental de la Première Guerre mondiale.",
  },
  treatyofversailles: {
    name: "Signature du traité de Versailles",
    clue: "Des diplomates signent un traité de paix à l'intérieur d'un palais somptueux, mettant fin à une guerre mondiale et imposant des conditions sévères au vaincu.",
    explanation:
      "Le traité de Versailles, signé dans la galerie des Glaces, mit officiellement fin à la Première Guerre mondiale et imposa des conditions sévères à l'Allemagne.",
  },
  gallipoli: {
    name: "Débarquement de Gallipoli",
    clue: "Des troupes alliées débarquent sur une péninsule accidentée, entamant une campagne de huit mois qui s'achève par un retrait total.",
    explanation:
      "Des troupes alliées débarquèrent sur la péninsule de Gallipoli pour tenter d'éliminer l'Empire ottoman de la Première Guerre mondiale ; la campagne se solda par un échec.",
  },
  wallstreetcrash: {
    name: "Krach de Wall Street",
    clue: "Des investisseurs pris de panique déclenchent un effondrement boursier sur une étroite rue financière, ouvrant une décennie de dépression économique.",
    explanation:
      "Le krach de Wall Street anéantit des milliards de valeur et déclencha la Grande Dépression.",
  },
  hitlerchancellor: {
    name: "Hitler nommé chancelier",
    clue: "Un président vieillissant nomme à contrecœur un chef de parti extrémiste à la tête du gouvernement.",
    explanation:
      "Le président allemand Paul von Hindenburg nomma Adolf Hitler chancelier, une étape clé de l'accession des nazis au pouvoir.",
  },
  dday: {
    name: "Débarquement du jour J",
    clue: "Les forces alliées lancent la plus grande invasion amphibie de l'histoire, prenant d'assaut des plages à l'aube.",
    explanation:
      "Les forces alliées débarquèrent sur les plages de Normandie lors de la plus grande invasion amphibie de l'histoire, ouvrant un front décisif de la Seconde Guerre mondiale.",
  },
  hiroshima: {
    name: "Bombardement atomique d'Hiroshima",
    clue: "Une seule bombe dévaste une ville en un instant, tuant des dizaines de milliers de personnes sur le coup et inaugurant l'ère nucléaire.",
    explanation:
      "Les États-Unis larguèrent une bombe atomique sur Hiroshima, au Japon, tuant instantanément des dizaines de milliers de personnes et menant à la capitulation du Japon.",
  },
  germansurrender: {
    name: "Capitulation de l'Allemagne nazie",
    clue: "Des chefs militaires signent une capitulation sans conditions dans une école, mettant fin à des années de guerre.",
    explanation:
      "Les chefs militaires allemands signèrent une capitulation sans conditions à Reims, mettant fin à la Seconde Guerre mondiale en Europe.",
  },
  munichagreement: {
    name: "Signature des accords de Munich",
    clue: "Des dirigeants signent un accord cédant une région frontalière pour éviter une nouvelle guerre, un accord rompu avant la fin de l'année.",
    explanation:
      "Les accords de Munich permirent à l'Allemagne nazie d'annexer les Sudètes tchécoslovaques, dans une tentative avortée d'apaisement.",
  },
  kristallnacht: {
    name: "La Nuit de Cristal",
    clue: "Des foules brisent les vitrines de commerces et de synagogues juifs lors d'une nuit de violence coordonnée.",
    explanation:
      "Des paramilitaires nazis et des civils attaquèrent en une nuit des maisons, commerces et synagogues juifs à travers l'Allemagne, lors d'un pogrom connu sous le nom de Nuit de Cristal.",
  },
  warsawghetto: {
    name: "Début du soulèvement du ghetto de Varsovie",
    clue: "Les habitants mal armés d'un quartier isolé se soulèvent contre les forces d'occupation, dans le plus grand soulèvement armé de l'Holocauste.",
    explanation:
      "Les habitants juifs du ghetto de Varsovie lancèrent un soulèvement armé contre les forces nazies, le plus important acte de résistance juive pendant l'Holocauste.",
  },
  auschwitzliberation: {
    name: "Libération d'Auschwitz",
    clue: "Des soldats avançant depuis l'est libèrent le plus grand camp nazi, où plus d'un million de personnes furent tuées, révélant l'ampleur de l'horreur.",
    explanation:
      "Les troupes soviétiques libérèrent le camp de concentration d'Auschwitz, révélant au monde l'horreur de l'Holocauste nazi.",
  },
  cubanmissilecrisis: {
    name: "Crise des missiles de Cuba",
    clue: "Des avions espions photographient des sites de missiles secrets sur une petite île, déclenchant un blocus naval tendu de 13 jours.",
    explanation:
      "La découverte de missiles nucléaires soviétiques à Cuba déclencha une confrontation tendue de 13 jours entre les États-Unis et l'URSS, l'un des moments où le monde fut le plus proche d'une guerre nucléaire.",
  },
  jfkassassination: {
    name: "Assassinat de JFK",
    clue: "Un président est abattu alors qu'il traverse une place du centre-ville en voiture.",
    explanation:
      "Le président américain John F. Kennedy fut assassiné alors qu'il traversait Dealey Plaza, à Dallas, en cortège.",
  },
  apollo11launch: {
    name: "Lancement d'Apollo 11",
    clue: "Une fusée imposante décolle d'un pas de tir côtier, emportant l'équipage qui va devenir le premier à poser le pied sur un autre monde.",
    explanation:
      "Apollo 11 décolla de Cap Canaveral, en Floride, emportant les astronautes qui allaient devenir les premiers humains à marcher sur la Lune.",
  },
  fallofsaigon: {
    name: "Chute de Saïgon",
    clue: "Les derniers hélicoptères évacuent le personnel du toit d'une ambassade alors que la capitale tombe.",
    explanation:
      "Les forces nord-vietnamiennes s'emparèrent de Saïgon, mettant fin à la guerre du Viêt Nam et provoquant une évacuation chaotique de l'ambassade américaine.",
  },
  mlkassassination: {
    name: "Assassinat de Martin Luther King",
    clue: "Un leader des droits civiques est abattu alors qu'il se tient sur le balcon d'un motel.",
    explanation:
      "Le leader des droits civiques Martin Luther King fut assassiné sur le balcon du Lorraine Motel, à Memphis.",
  },
  mandelareleased: {
    name: "Libération de Nelson Mandela",
    clue: "Après 27 ans, un prisonnier politique retrouve la liberté depuis une ferme pénitentiaire, poing levé devant une foule en liesse.",
    explanation:
      "Nelson Mandela fut libéré après 27 ans d'emprisonnement, devenant un symbole mondial de la lutte contre l'apartheid en Afrique du Sud.",
  },
  tiananmen: {
    name: "Manifestations de la place Tiananmen",
    clue: "Un manifestant isolé se tient devant une colonne de chars près d'une vaste place publique.",
    explanation:
      "Pendant les manifestations de la place Tiananmen, un homme non identifié se tint face à une colonne de chars, devenant une image durable de la résistance.",
  },
  prcfounding: {
    name: "Fondation de la Chine populaire",
    clue: "Un dirigeant révolutionnaire proclame une nouvelle république depuis une porte dominant l'une des plus grandes places du monde, en hissant un drapeau inédit.",
    explanation:
      "Mao Zedong proclama la fondation de la République populaire de Chine depuis la porte de Tiananmen, à Pékin, tandis que le nouveau drapeau à cinq étoiles était hissé pour la première fois sur la place.",
  },
  rosettastone: {
    name: "Découverte de la pierre de Rosette",
    clue: "Des soldats reconstruisant un fort déterrent une dalle gravée en trois écritures différentes, qui permettra un jour de percer le secret d'une langue ancienne.",
    explanation:
      "Des soldats français reconstruisant un fort près de Rosette, en Égypte, découvrirent une pierre gravée en trois écritures, qui permit plus tard aux savants de déchiffrer les hiéroglyphes égyptiens.",
  },
  penicillin: {
    name: "Découverte de la pénicilline",
    clue: "Un scientifique remarque qu'une moisissure a tué des bactéries dans une boîte de culture oubliée, et la médecine change à jamais.",
    explanation:
      "Alexander Fleming remarqua qu'une moisissure ayant contaminé une boîte de Petri avait tué les bactéries environnantes, menant à la découverte de la pénicilline, le premier antibiotique.",
  },
  poliovaccine: {
    name: "Annonce du succès du vaccin contre la polio",
    clue: "Un nouveau vaccin contre la polio, testé sur plus d'un million d'enfants lors du plus vaste essai médical de l'histoire, se révèle sûr et efficace.",
    explanation:
      "Des chercheurs annoncèrent que le vaccin de Jonas Salk contre la polio s'était révélé sûr et efficace, une avancée contre une maladie qui paralysait chaque année des millions d'enfants, déclenchant aussitôt une campagne de fabrication et de distribution à grande échelle.",
  },
  dnadiscovery: {
    name: "Découverte de la structure de l'ADN",
    clue: "Deux jeunes chercheurs annoncent avoir élucidé la structure en double hélice de la molécule de l'hérédité.",
    explanation:
      "James Watson et Francis Crick annoncèrent avoir déterminé la structure en double hélice de l'ADN, une découverte majeure en biologie.",
  },
  sputnik: {
    name: "Lancement de Spoutnik 1",
    clue: "Une sphère métallique qui émet des signaux est mise en orbite depuis une steppe désertique isolée, lançant une course à l'espace.",
    explanation:
      "L'Union soviétique lança Spoutnik 1, le premier satellite artificiel, depuis le cosmodrome de Baïkonour, donnant le coup d'envoi de la course à l'espace.",
  },
  plainsofabraham: {
    name: "Bataille des plaines d'Abraham",
    clue: "Deux jeunes généraux tombent tous deux lors d'une bataille brève et décisive, livrée sur un plateau dominant une rivière.",
    explanation:
      "Les forces britanniques vainquirent les Français sur les plaines d'Abraham, près de Québec, une bataille décisive dans la lutte pour le contrôle du Canada.",
  },
  louisianapurchase: {
    name: "Signature du traité de la Louisiane",
    clue: "Des diplomates signent un traité achetant un vaste territoire pour 15 millions de dollars, doublant du jour au lendemain la taille d'une jeune nation.",
    explanation:
      "Les États-Unis achetèrent le vaste territoire de la Louisiane à la France pour 15 millions de dollars, doublant à peu près la taille du pays.",
  },
  panamacanal: {
    name: "Ouverture du canal de Panama",
    clue: "D'immenses écluses soulèvent les navires à travers un isthme tropical miné par les maladies, reliant deux océans après des décennies de travaux.",
    explanation:
      "Le canal de Panama ouvrit après des décennies de construction, créant un raccourci entre l'océan Atlantique et l'océan Pacifique.",
  },
  deadseascrolls: {
    name: "Découverte des manuscrits de la mer Morte",
    clue: "Un berger à la recherche d'une chèvre égarée pénètre dans une grotte contenant d'anciens rouleaux sacrés.",
    explanation:
      "Un berger bédouin à la recherche d'une chèvre perdue découvrit d'anciens manuscrits juifs dans une grotte près de Qumrân, aujourd'hui connus sous le nom de manuscrits de la mer Morte.",
  },
  tereshkova: {
    name: "Première femme dans l'espace",
    clue: "Une ancienne ouvrière du textile devient la première femme à orbiter la Terre, effectuant 48 tours depuis une base de lancement désertique isolée.",
    explanation:
      "La cosmonaute soviétique Valentina Terechkova devint la première femme dans l'espace, effectuant 48 orbites autour de la Terre à bord de Vostok 6.",
  },
  gandhiassassination: {
    name: "Assassinat du Mahatma Gandhi",
    clue: "Un leader pacifiste est abattu par un extrémiste alors qu'il se rend à une réunion de prière dans une propriété privée.",
    explanation:
      "Le Mahatma Gandhi, leader du mouvement indépendantiste indien, fut assassiné par un nationaliste hindou à New Delhi.",
  },
  verdun: {
    name: "Début de la bataille de Verdun",
    clue: "Une bataille parmi les plus longues et coûteuses d'une guerre mondiale débute près d'une ville fortifiée, inspirant le cri « on ne passe pas ».",
    explanation:
      "La bataille de Verdun fut l'une des plus longues et des plus coûteuses de la Première Guerre mondiale, livrée autour de la ville fortifiée de Verdun.",
  },
  cookbotanybay: {
    name: "Cook débarque à Botany Bay",
    clue: "Le navire d'un explorateur mouille dans une large baie après avoir cartographié une côte orientale inconnue, revendiquant un continent austral pour son roi.",
    explanation:
      "L'explorateur britannique James Cook débarqua à Botany Bay, devenant le premier Européen à cartographier la côte est de l'Australie et à la revendiquer pour la Grande-Bretagne.",
  },
  waitangi: {
    name: "Signature du traité de Waitangi",
    clue: "Des représentants coloniaux et des chefs locaux signent un traité sur une pelouse dominant une baie, ses deux versions linguistiques n'ayant pas le même sens.",
    explanation:
      "Des représentants britanniques et des chefs maoris signèrent le traité de Waitangi, établissant la souveraineté britannique sur la Nouvelle-Zélande.",
  },
  adwa: {
    name: "Bataille d'Adoua",
    clue: "L'armée d'un royaume indépendant met en déroute une force coloniale en montagne, la contraignant à signer un traité reconnaissant sa pleine souveraineté.",
    explanation:
      "Les forces éthiopiennes, plus nombreuses que l'armée italienne envahissante, lui infligèrent une défaite décisive à Adoua, contraignant l'Italie à signer un traité reconnaissant la pleine souveraineté de l'Éthiopie, en pleine ruée coloniale européenne sur l'Afrique.",
  },
  maligoldenage: {
    name: "Âge d'or de Tombouctou",
    clue: "Le pèlerinage fastueux d'un souverain est si somptueux qu'il ferait chuter le cours de l'or, tandis que sa capitale légendaire atteint l'apogée de son âge d'or.",
    explanation:
      "Sous Mansa Moussa, la ville de Tombouctou, dans l'empire du Mali, devint un centre renommé du commerce de l'or et du savoir islamique, rendu célèbre par son somptueux pèlerinage à La Mecque.",
  },
  gritodedolores: {
    name: "Cri de Dolores",
    clue: "Un curé de paroisse sonne la cloche de l'église et appelle ses paroissiens à se révolter contre le pouvoir colonial.",
    explanation:
      "Le prêtre Miguel Hidalgo sonna la cloche de l'église de Dolores et appela à la révolte, lançant la guerre d'indépendance mexicaine.",
  },
  haitiindependence: {
    name: "Déclaration d'indépendance d'Haïti",
    clue: "Des chefs rebelles proclament officiellement la naissance de la première république noire libre, née d'une révolte d'esclaves.",
    explanation:
      "Haïti déclara son indépendance vis-à-vis de la France, devenant la première nation née d'une révolte d'esclaves réussie.",
  },
  angkorwat: {
    name: "Achèvement d'Angkor Vat",
    clue: "Des ouvriers achèvent un immense complexe de temples, le plus vaste monument religieux jamais construit.",
    explanation:
      "Angkor Vat, achevé sous le roi khmer Suryavarman II, est le plus vaste monument religieux du monde, construit à l'origine comme temple hindou.",
  },
  plassey: {
    name: "Bataille de Plassey",
    clue: "La petite armée d'une compagnie commerciale vainc un souverain local puissant après avoir corrompu son propre général, ouvrant la voie à la conquête coloniale.",
    explanation:
      "La Compagnie britannique des Indes orientales vainquit le nabab du Bengale à Plassey, une victoire qui marqua le début de la domination coloniale britannique sur l'Inde.",
  },
  hijra: {
    name: "L'Hégire vers Médine",
    clue: "Un chef religieux et ses disciples migrent vers une ville-oasis du désert, marquant le début d'un nouveau calendrier.",
    explanation:
      "Le prophète Mahomet et ses disciples migrèrent de La Mecque à Médine, un événement appelé l'Hégire qui marque le début du calendrier islamique.",
  },
  tsushima: {
    name: "Bataille de Tsushima",
    clue: "La marine d'une nation modernisée anéantit la flotte d'un empire lointain dans un détroit, l'une des plus grandes surprises navales de l'histoire moderne.",
    explanation:
      "La marine japonaise anéantit la flotte russe lors de la bataille du détroit de Tsushima, un revirement stupéfiant qui marqua l'arrivée du Japon comme puissance navale moderne.",
  },
  kush_conquest_egypt: {
    name: "Conquête koushite de l'Égypte",
    clue: "Un roi étranger conquiert un royaume fracturé en aval d'un fleuve, puis écrit que les chevaux affamés d'un rival l'ont plus ému que toute traîtrise de guerre.",
    explanation:
      "Piye, roi du royaume de Koush, conquit l'Égypte et fonda la 25e dynastie, régnant depuis sa capitale d'origine près de Jebel Barkal plutôt que depuis une ville égyptienne. Sa dynastie continua longtemps à construire des pyramides royales aux parois abruptes sur les sites funéraires nubiens, bien après que l'Égypte eut cessé d'en édifier.",
  },
  aksum_christianity: {
    name: "Conversion d'Aksoum au christianisme",
    clue: "Un monarque adopte une nouvelle foi et remplace l'emblème de ses pièces par une croix, la première apparition connue de ce symbole sur une monnaie.",
    explanation:
      "Le roi Ezana d'Aksoum fit du christianisme la religion officielle de son royaume, faisant d'Aksoum l'un des premiers États au monde à franchir ce pas. Ses stèles de pierre sculptées, parmi les plus hauts blocs de pierre jamais dressés par une civilisation, se dressent encore dans la ville aujourd'hui, l'une d'elles ayant été pillée puis restituée en morceaux.",
  },
  destruction_of_carthage: {
    name: "Destruction de Carthage",
    clue: "Un siège de trois ans s'achève en six jours dans une cité portuaire ; cinquante mille survivants vendus en esclavage, ruines inhabitées un siècle.",
    explanation:
      "Les troupes romaines commandées par Scipion Émilien rasèrent Carthage à la fin de la troisième guerre punique. En la regardant brûler, Scipion aurait pleuré et cité un vers d'Homère sur la chute de Troie, disant craindre que le même sort attende un jour sa propre ville.",
  },
  great_zimbabwe_construction: {
    name: "Grand Zimbabwe",
    clue: "Des bâtisseurs assemblent sans mortier des blocs de granite en murs incurvés de onze mètres, la plus grande structure de pierre de ce type de la région.",
    explanation:
      "Longtemps attribué à tort par des auteurs de l'époque coloniale à des bâtisseurs étrangers, le complexe fortifié aujourd'hui connu sous le nom de Grand Zimbabwe fut en réalité l'œuvre des ancêtres du peuple shona, dont les descendants vivent toujours dans la région, et qui donna son nom au pays moderne.",
  },
  kilwa_kisiwani_ibn_battuta: {
    name: "L'âge d'or de Kilwa Kisiwani",
    clue: "Un érudit très voyagé la juge parmi les plus belles cités marchandes qu'il ait vues ; ses pièces resurgissent plus tard sur un célèbre site de ruines lointain.",
    explanation:
      "Le voyageur Ibn Battuta loua Kilwa Kisiwani lors de sa visite, à l'époque où la cité insulaire contrôlait le commerce de l'or venu de l'intérieur des terres et frappait sa propre monnaie depuis environ cinq siècles. Sa grande mosquée, construite en pierre de corail, comptait alors parmi les plus grandes mosquées de la région.",
  },
  kongo_king_baptism: {
    name: "Baptême de Nzinga a Nkuwu",
    clue: "Un monarque se convertit à la foi d'un royaume visiteur et prend le nom exact de son propre roi, baptisé au cours d'une même cérémonie avec sa reine et sa cour.",
    explanation:
      "Nzinga a Nkuwu, souverain du royaume du Kongo, fut baptisé sous le nom de João après l'arrivée à sa cour de missionnaires portugais, amorçant des décennies de contacts diplomatiques entre les deux royaumes. Il se détourna plus tard d'une pratique stricte de la nouvelle foi, contrairement à son fils et successeur, qui resta un converti fervent tout au long de son règne.",
  },
  golden_stool_asante: {
    name: "Fondation du Tabouret d'or",
    clue: "Un prêtre unit des chefs rivaux sous un même trône en réduisant en cendres leurs cheveux et ongles, mêlés à du vin de palme bu par chacun en signe de serment.",
    explanation:
      "Selon la tradition asante, le prêtre Okomfo Anokye fit apparaître le tabouret d'or pour le nouveau roi Osei Tutu, unifiant des chefferies rivales en un seul royaume. Le tabouret était considéré si sacré que, des siècles plus tard, l'exigence d'un gouverneur colonial de s'y asseoir déclencha un soulèvement armé.",
  },
  dahomey_amazons_war: {
    name: "Deuxième guerre franco-dahoméenne",
    clue: "La seule armée féminine de première ligne attestée de l'histoire moderne défend un royaume envahi, perdant 417 soldats en une bataille contre six assaillants.",
    explanation:
      "Le régiment féminin des Mino du Dahomey, comptant plusieurs milliers de combattantes à son apogée, mena deux guerres contre des forces coloniales avant d'être dissous après la perte d'indépendance du royaume. Des observateurs européens les décrivaient comme plus acharnées au combat que les soldats du royaume.",
  },
  benin_expedition_1897: {
    name: "Expédition du Bénin",
    clue: "Des envahisseurs incendient la capitale d'un royaume, exilent son souverain et saisissent des milliers de plaques de bronze, vendues pour payer l'invasion.",
    explanation:
      "Les forces britanniques détruisirent le palais royal du royaume du Bénin et déposèrent son souverain, l'oba Ovonramwen, s'emparant de ce qu'on appelle désormais les bronzes du Bénin. Environ quarante pour cent des œuvres pillées furent placées dans un musée national, et ces objets restent aujourd'hui au cœur d'une campagne internationale pour leur restitution.",
  },
  algerian_independence_referendum: {
    name: "Référendum sur l'indépendance de l'Algérie",
    clue: "Un référendum met fin à une longue guerre coloniale par un résultat sans appel : près de six millions de voix pour l'indépendance, contre à peine seize mille.",
    explanation:
      "Les Algériens votèrent massivement pour l'indépendance vis-à-vis de la France lors d'un référendum organisé après les accords d'Évian, mettant fin à une guerre de huit ans. L'indépendance fut proclamée officiellement quelques jours plus tard, et des célébrations massives envahirent les rues d'Alger.",
  },
  ghana_independence_flag: {
    name: "Indépendance du Ghana",
    clue: "Quand le drapeau d'une nouvelle nation est hissé, son étoile noire honore une compagnie maritime fondée par un dirigeant nationaliste d'un autre pays.",
    explanation:
      "Le Ghana, dirigé par Kwame Nkrumah, devint la première colonie au sud du Sahara à obtenir son indépendance, inspirant des mouvements d'indépendance à travers le continent. L'étoile noire de son nouveau drapeau faisait référence à la Black Star Line, une compagnie maritime fondée par le militant jamaïcain Marcus Garvey.",
  },
  congo_independence_speech: {
    name: "Discours d'indépendance de Lumumba",
    clue: "Lors d'une cérémonie d'indépendance, le futur premier ministre improvise une réplique à l'ancien monarque colonial, qualifiant le passé d'esclavage humiliant.",
    explanation:
      "Le discours improvisé de Patrice Lumumba à Léopoldville survint juste après que le roi belge Baudouin eut fait l'éloge de la colonisation, choquant les journalistes étrangers par sa franchise. Lumumba devint le premier ministre du pays mais fut écarté du pouvoir et tué quelques mois plus tard.",
  },
  sharpeville_massacre: {
    name: "Massacre de Sharpeville",
    clue: "La police tire plus de mille coups sur une foule désarmée opposée à des laissez-passer, visant surtout le dos, jour devenu symbole antidiscrimination mondial.",
    explanation:
      "La police tua des dizaines de manifestants lors d'un rassemblement à Sharpeville contre des lois obligeant les habitants noirs à porter en permanence des documents d'identité. L'indignation internationale suscitée par le massacre contribua à l'isolement croissant du pays et à son départ du Commonwealth l'année suivante.",
  },
  rwandan_genocide_start: {
    name: "Début du génocide rwandais",
    clue: "Un missile abat deux dirigeants nationaux à bord d'un même vol, déclenchant des massacres qui feront des centaines de milliers de morts en cent jours.",
    explanation:
      "L'attentat qui abattit l'avion du président Habyarimana au-dessus de Kigali déclencha le massacre de masse des Tutsi et des Hutu modérés à travers le Rwanda, organisé avec l'aide d'émissions radio et de responsables locaux. Les violences déplacèrent environ deux millions de personnes devenues réfugiées avant qu'elles ne cessent.",
  },
  anglo_zanzibar_war: {
    name: "Guerre anglo-zanzibarite",
    clue: "Le bombardement du palais d'un sultan achève en moins d'une heure la guerre la plus courte connue, cinq cents défenseurs tués contre un seul assaillant blessé.",
    explanation:
      "Des navires de guerre britanniques bombardèrent le palais du nouveau sultan de Zanzibar après qu'il eut pris le trône sans l'aval des autorités coloniales à la suite de la mort soudaine du sultan précédent. La guerre dura moins de quarante minutes avant que les défenseurs ne se rendent.",
  },
  tunisian_revolution_bouazizi: {
    name: "Immolation de Mohamed Bouazizi",
    clue: "Un marchand s'immole après la saisie de son étal ; sa mort, semaines après, déclenche des soulèvements renversant des gouvernements, du nom d'une saison.",
    explanation:
      "Mohamed Bouazizi mourut de graves brûlures après s'être immolé par le feu à Sidi Bouzid, un acte qui alluma des manifestations nationales forçant le président à fuir après plus de deux décennies au pouvoir. Bouazizi reçut à titre posthume le prix des droits de l'homme du Parlement européen.",
  },
  battle_of_mogadishu_1993: {
    name: "Bataille de Mogadiscio",
    clue: "Deux hélicoptères sont abattus par des roquettes lors d'un raid prévu en moins d'une heure, jour le plus meurtrier en décennies pour les troupes d'une nation.",
    explanation:
      "Les forces des États-Unis, menant un raid contre le bastion d'un chef de guerre local à Mogadiscio, se retrouvèrent piégées toute la nuit après que deux hélicoptères Black Hawk eurent été abattus. Un pilote capturé fut libéré après onze jours de détention, et deux soldats ayant défendu un site de crash reçurent à titre posthume la plus haute distinction militaire du pays.",
  },
  lalibela_rock_churches: {
    name: "Églises rupestres de Lalibela",
    clue: "Un monarque fait tailler une cité sainte dans la roche, des églises creusées en un seul bloc sous le sol, substitut à un pèlerinage devenu trop dangereux.",
    explanation:
      "Le roi Lalibela commanda la construction de onze églises taillées dans la roche massive sur environ deux décennies, reliées par des tunnels et des tranchées, destinées à recréer Jérusalem pour les pèlerins qui ne pouvaient plus s'y rendre en sécurité. Ces églises restent aujourd'hui des lieux de culte et de pèlerinage actifs.",
  },
  hangul_creation: {
    name: "Création du hangeul",
    clue: "Un souverain et des lettrés créent un alphabet dont chaque lettre imite la forme prise par la bouche pour la prononcer, afin que le peuple puisse enfin lire.",
    explanation:
      "Le roi Sejong le Grand et les lettrés du Pavillon des Talents créèrent le hangeul, une écriture conçue scientifiquement à laquelle on attribue une forte hausse de l'alphabétisation en Corée.",
  },
  korean_armistice: {
    name: "Armistice de la guerre de Corée",
    clue: "Des commandants ennemis signent une trêve dans un village bâti pour l'occasion, après des années de combats ; la guerre n'est toujours pas officiellement finie.",
    explanation:
      "Des représentants du Commandement des Nations unies, de la Corée du Nord et de la Chine signèrent l'armistice à Panmunjom, mettant fin aux combats mais laissant les deux Corées techniquement toujours en guerre.",
  },
  persepolis_founding: {
    name: "Fondation de Persépolis",
    clue: "Un monarque bâtit une capitale cérémonielle sur une immense plateforme de pierre, ses escaliers sculptés de délégués apportant des présents de tout son empire.",
    explanation:
      "Darius le Grand fonda Persépolis comme capitale cérémonielle de l'Empire achéménide, les reliefs de la salle d'Apadana représentant des délégués de 23 nations sujettes apportant un tribut.",
  },
  battle_of_talas: {
    name: "Bataille de Talas",
    clue: "Une armée bat un empire rival près d'un fleuve ; des fabricants de papier capturés diffusent leur art vers l'ouest, transformant l'écrit d'une vaste région.",
    explanation:
      "Les forces de la dynastie Tang et du califat abbasside s'affrontèrent près du fleuve Talas, et des fabricants de papier chinois faits prisonniers contribuèrent à introduire la fabrication du papier dans le monde islamique.",
  },
  terracotta_army_discovery: {
    name: "Découverte de l'armée en terre cuite",
    clue: "Des paysans creusant un puits heurtent une tête d'argile, révélant des milliers de soldats uniques, enterrés pour protéger un souverain dans l'au-delà.",
    explanation:
      "Des paysans près de Lintong découvrirent par hasard l'armée enterrée de Qin Shi Huang, premier empereur de Chine, dont les archers, chars et cavaliers grandeur nature ont chacun un visage sculpté individuellement.",
  },
  zheng_he_voyage_departure: {
    name: "Départ de la flotte au trésor de Zheng He",
    clue: "Une flotte de plus de 200 navires et de dizaines de milliers de marins quitte un port fluvial sous un amiral de cour, premier de plusieurs voyages lointains.",
    explanation:
      "L'amiral Zheng He conduisit la flotte au trésor de la dynastie Ming depuis Liujiagang, près de l'embouchure du Yangtsé, première de sept expéditions qui atteignirent finalement la péninsule Arabique et l'Afrique de l'Est.",
  },
  mongol_invasion_typhoon: {
    name: "Le typhon kamikaze",
    clue: "Une flotte d'invasion de milliers de navires est détruite par une tempête soudaine avant même l'assaut, un événement vu plus tard comme une intervention divine.",
    explanation:
      "Une flotte d'invasion mongole commandée par Kubilaï Khan fut détruite par un typhon au large de la baie de Hakata, un événement resté dans les mémoires sous le nom de kamikaze, ou vent divin, un terme réutilisé des siècles plus tard pour les pilotes suicide.",
  },
  taj_mahal_completion: {
    name: "Achèvement du Taj Mahal",
    clue: "Un souverain achève un mausolée de marbre pour son épouse après deux décennies de travaux, ses pierres incrustées venues de terres à des milliers de kilomètres.",
    explanation:
      "L'empereur moghol Shah Jahan acheva le Taj Mahal à Agra, un tombeau pour son épouse Mumtaz Mahal, employant plus de 20 000 ouvriers et des matériaux tels que le jade de Chine et le lapis-lazuli d'Afghanistan.",
  },
  kalinga_war_ashoka: {
    name: "Guerre du Kalinga et édits d'Ashoka",
    clue: "Horrifié par les morts de sa conquête, un monarque renonce à la violence et fait graver son nouveau code éthique sur des parois rocheuses de son royaume.",
    explanation:
      "L'empereur maurya Ashoka fut si bouleversé par le carnage de la guerre du Kalinga, menée près de l'actuelle Bhubaneswar, qu'il embrassa le bouddhisme et fit inscrire des édits prônant la non-violence sur des sites dont celui de Dhauli.",
  },
  borobudur_completion: {
    name: "Achèvement du Borobudur",
    clue: "Des ouvriers empilent 1,6 million de blocs de pierre en une pyramide à degrés couronnée de stupas en cloche, le plus grand monument de sa foi sur Terre.",
    explanation:
      "Construit par la dynastie Sailendra à Java, le Borobudur fut plus tard abandonné, enseveli sous la cendre volcanique et la jungle pendant des siècles, avant d'être dégagé et restauré à l'époque moderne.",
  },
  battle_of_mactan: {
    name: "Bataille de Mactan",
    clue: "Un explorateur en armure menant un petit groupe est tué en eaux peu profondes par des guerriers insulaires, stoppant son tour du monde à la voile.",
    explanation:
      "Ferdinand Magellan fut tué par les forces du chef Lapu-Lapu sur l'île de Mactan, et le reste de son équipage acheva sans lui le premier tour du monde par voie maritime.",
  },
  cyclone_nargis: {
    name: "Cyclone Nargis",
    clue: "Une tempête pousse l'eau de mer sur des dizaines de kilomètres dans un delta en une nuit, et les dirigeants militaires du pays bloquent l'aide extérieure.",
    explanation:
      "Le cyclone Nargis frappa le delta de l'Ayeyarwady, au Myanmar, tuant bien plus de 100 000 personnes, l'une des tempêtes les plus meurtrières jamais enregistrées, tandis que les restrictions imposées à l'aide par le gouvernement au pouvoir suscitèrent une condamnation internationale.",
  },
  fall_of_ayutthaya: {
    name: "Chute d'Ayutthaya",
    clue: "Une armée envahit et rase une capitale vieille de plusieurs siècles, décapitant des statues religieuses ; une tête est retrouvée dans les racines d'un arbre.",
    explanation:
      "Une armée birmane détruisit Ayutthaya, capitale du royaume siamois, et une tête de Bouddha laissée à Wat Mahathat se retrouva célèbrement enlacée dans les racines d'un banian, un site encore visité aujourd'hui.",
  },
  second_temple_destruction: {
    name: "Destruction du Second Temple",
    clue: "Après un siège, des soldats incendient un temple sur une colline, n'en laissant qu'un pan de mur, un site de prière parmi les plus sacrés d'une foi mondiale.",
    explanation:
      "Les forces romaines commandées par Titus détruisirent le Second Temple de Jérusalem au terme de la première guerre judéo-romaine, et la section survivante de son mur occidental demeure un site central de la prière juive.",
  },
  petra_rediscovery: {
    name: "Redécouverte de Petra",
    clue: "Déguisé en voyageur local, un explorateur convainc un guide de le mener à une cité taillée dans la roche rose, premier étranger à la voir depuis des siècles.",
    explanation:
      "L'explorateur suisse Johann Ludwig Burckhardt, déguisé en érudit musulman, persuada son guide de l'emmener à Petra sous prétexte d'un vœu religieux, documentant les ruines nabatéennes pour la première fois depuis des siècles.",
  },
  sigiriya_fortress: {
    name: "Forteresse rocheuse de Sigiriya",
    clue: "Un monarque bâtit un palais au sommet d'un rocher abrupt de près de 200 mètres, sa paroi ornée à mi-hauteur de fresques de femmes parvenues jusqu'à aujourd'hui.",
    explanation:
      "Le roi Kashyapa bâtit son palais au sommet du Sigiriya, un ancien conduit de magma volcanique solidifié au Sri Lanka, et les fresques survivantes comptent parmi les plus anciennes peintures de ce genre, antérieures d'un millénaire à la Renaissance.",
  },
  lumbini_ashoka_pillar: {
    name: "Le pilier d'Ashoka à Lumbini",
    clue: "Un souverain visite un village dit être le lieu de naissance du fondateur d'une grande religion et y fait ériger un pilier de pierre exempté d'impôts.",
    explanation:
      "L'empereur Ashoka visita Lumbini, vénéré comme le lieu de naissance de Siddhartha Gautama, et y fit inscrire un pilier de grès dont le texte est aujourd'hui la plus ancienne inscription conservée au Népal.",
  },
  ulugh_beg_observatory: {
    name: "L'observatoire d'Ulugh Beg",
    clue: "Un souverain astronome construit un quadrant géant de plus de 60 mètres, enfoncé dans une tranchée à flanc de colline, pour calculer l'année à la minute près.",
    explanation:
      "Le souverain timouride et astronome Ulugh Beg fit construire son observatoire à Samarcande ; il fut démoli par des opposants religieux peu après sa mort, et ses vestiges enfouis ne furent redécouverts par des archéologues que des siècles plus tard.",
  },
  hong_kong_handover: {
    name: "Rétrocession de Hong Kong",
    clue: "À minuit, dans un palais des congrès en bord de mer, un drapeau descend et un autre monte, mettant fin à un siècle et demi de domination étrangère.",
    explanation:
      "Le Royaume-Uni rétrocéda officiellement Hong Kong à la Chine lors d'une cérémonie au Hong Kong Convention and Exhibition Centre, mettant fin à 156 ans de domination coloniale et inaugurant un régime « un pays, deux systèmes » garanti pour 50 ans.",
  },
  everest_first_ascent: {
    name: "Première ascension de l'Everest",
    clue: "Deux alpinistes, l'un étranger et l'autre guide local, sont les premiers confirmés au point le plus élevé de la planète, après des décennies d'échecs.",
    explanation:
      "L'alpiniste néo-zélandais Edmund Hillary et le sherpa népalais Tenzing Norgay atteignirent le sommet lors d'une expédition britannique dirigée par John Hunt, dont la nouvelle parvint à Londres à temps pour le couronnement de la nouvelle reine.",
  },
  tenochtitlanfall: {
    name: "Chute de Tenochtitlan",
    clue: "Après un long siège, des envahisseurs et leurs alliés prennent une capitale insulaire bâtie sur un lac, capturant le souverain qui fuyait en canoë.",
    explanation:
      "Hernán Cortés dirigea le siège qui fit tomber la capitale aztèque, aujourd'hui Mexico ; l'empereur capturé, Cuauhtémoc, eut plus tard les pieds brûlés lors d'une tentative infructueuse pour lui faire révéler un trésor caché.",
  },
  cajamarcaransom: {
    name: "Rançon et exécution d'Atahualpa",
    clue: "Un souverain capturé promet de remplir une pièce d'or une fois et d'argent deux fois, la plus grande rançon jamais payée, mais il est exécuté malgré tout.",
    explanation:
      "La petite troupe de Francisco Pizarro captura l'empereur inca Atahualpa à Cajamarca, dans le Pérou actuel ; bien que la rançon fût payée intégralement, il fut baptisé puis étranglé au garrot à l'issue d'un procès truqué.",
  },
  gritodoipiranga: {
    name: "Cri de l'indépendance du Brésil",
    clue: "De retour de la côte, un prince arrache le brassard qui le lie à une couronne lointaine et proclame l'indépendance ou la mort au bord d'un petit cours d'eau.",
    explanation:
      "Le prince Pedro, fils du roi du Portugal, proclama l'indépendance du Brésil au bord du ruisseau Ipiranga, près de São Paulo, en retirant le brassard bleu et blanc symbolisant l'allégeance au Portugal ; il fut couronné empereur de la nouvelle nation quelques mois plus tard.",
  },
  cheguevaraexecution: {
    name: "Exécution de Che Guevara",
    clue: "Un chef guérillero capturé est exécuté dans l'école d'un village de montagne ; ses mains seront sectionnées pour l'identifier par empreintes digitales.",
    explanation:
      "Des forces de l'armée bolivienne capturèrent et tuèrent le révolutionnaire marxiste Che Guevara dans le village de La Higuera après l'effondrement de sa campagne de guérilla ; sa dépouille resta des décennies dans une fosse commune secrète avant d'être découverte.",
  },
  worldcup1978final: {
    name: "Première Coupe du monde de l'Argentine",
    clue: "Un pays hôte gagne pour la première fois le trophée suprême du sport après prolongation, sous des confettis, battant une équipe à sa deuxième finale de suite.",
    explanation:
      "L'Argentine battit les Pays-Bas 3-1 après prolongation à l'Estadio Monumental de Buenos Aires ; la pluie de confettis en papier déchiré devint un rituel durable lors des matchs de football argentins, toujours pratiqué des décennies plus tard.",
  },
  bogotazoassassination: {
    name: "Assassinat de Jorge Eliécer Gaitán",
    clue: "Un candidat présidentiel très populaire est abattu en pleine rue, et la foule en furie tue son meurtrier en quelques minutes, déclenchant des jours d'émeutes.",
    explanation:
      "Le dirigeant politique colombien Jorge Eliécer Gaitán fut abattu à Bogotá, déclenchant des émeutes qui firent des milliers de morts et contribuèrent à l'embrasement d'une longue période de conflit civil en Colombie connue sous le nom de La Violencia.",
  },
  portroyalearthquake: {
    name: "Engloutissement de Port Royal",
    clue: "Un repaire de pirates réputé s'enfonce aux deux tiers dans la mer en quelques minutes lors d'un séisme massif, le sol se liquéfiant brièvement sous lui.",
    explanation:
      "Un séisme suivi d'un tsunami détruisit la ville de Port Royal, en Jamaïque, submergeant une grande partie de la cité sous le port ; les ruines englouties restent l'une des rares villes noyées que les archéologues peuvent encore explorer aujourd'hui.",
  },
  vinlandsettlement: {
    name: "Colonie norroise de L'Anse aux Meadows",
    clue: "Des marins bâtissent un petit campement à la pointe d'une grande île, premier débarquement confirmé sur un lointain continent, avant un voyage plus célèbre.",
    explanation:
      "Des archéologues mirent au jour les vestiges d'un campement norrois à L'Anse aux Meadows, à Terre-Neuve, au Canada, le seul site d'établissement norrois confirmé dans les Amériques, bâti bien avant que le voyage de Christophe Colomb n'amorce un contact durable avec l'Europe.",
  },
  halifaxexplosion: {
    name: "Explosion de Halifax",
    clue: "Deux navires entrent en collision dans un port ; l'un, chargé d'explosifs, cause la plus grande explosion artificielle connue, rasant un quartier entier.",
    explanation:
      "Le cargo Mont-Blanc, chargé d'explosifs puissants, entra en collision avec le navire Imo dans le port de Halifax, en Nouvelle-Écosse ; l'explosion tua environ deux mille personnes et resta la plus puissante explosion artificielle de l'histoire jusqu'à la mise au point de l'arme nucléaire.",
  },
  alamobattle: {
    name: "Bataille de l'Alamo",
    clue: "Une garnison retranchée dans une ancienne mission tient treize jours face à une armée bien plus nombreuse ; tous ceux restés au combat y périssent.",
    explanation:
      "Les forces mexicaines du général Santa Anna submergèrent les défenseurs de la mission de l'Alamo à San Antonio, au Texas, pendant la révolution texane ; la défaite devint un cri de ralliement qui galvanisa la victoire rebelle finale.",
  },
  salemwitchtrials: {
    name: "Procès des sorcières de Salem",
    clue: "La sorcellerie effraie une petite ville : plus d'une douzaine de personnes sont pendues sur une colline après des procès fondés sur des attaques spectrales.",
    explanation:
      "Dix-neuf personnes furent pendues et un homme mourut écrasé sous des pierres après une vague d'accusations de sorcellerie à Salem, dans le Massachusetts ; la colline exacte où eurent lieu les pendaisons resta longtemps non identifiée, jusqu'à ce que des historiens la localisent grâce à d'anciennes cartes et archives.",
  },
  woodstockfestival: {
    name: "Festival de Woodstock",
    clue: "Plus de 400 000 personnes convergent vers une ferme laitière pour un concert en plein air de trois jours, débordant les portes jusqu'à l'entrée déclarée libre.",
    explanation:
      "Le Woodstock Music and Art Fair se tint sur la ferme de Max Yasgur, à Bethel, dans l'État de New York, avec des artistes tels que Jimi Hendrix et Janis Joplin, devenant un symbole marquant du mouvement de contre-culture de son époque.",
  },
  trinitynucleartest: {
    name: "Essai nucléaire de Trinity",
    clue: "Dans un désert isolé, des scientifiques font exploser la première arme nucléaire de l'histoire, vitrifiant le sable en un minéral qui prendra le nom du site.",
    explanation:
      "Les États-Unis testèrent la première bombe atomique au monde, surnommée « le Gadget », sur le site de Trinity, dans le désert du Nouveau-Mexique, dans le cadre du projet Manhattan ; le verre verdâtre qu'elle produisit, appelé trinitite, recouvre encore certaines parties du site.",
  },
  santodomingofounding: {
    name: "Fondation de Santo Domingo",
    clue: "Le frère cadet d'un colonisateur fonde une bourgade sur un fleuve, plus ancienne ville bâtie par des étrangers habitée sans interruption dans l'hémisphère.",
    explanation:
      "Barthélemy Colomb, frère de Christophe Colomb, fonda Santo Domingo sur les rives du fleuve Ozama, dans l'actuelle République dominicaine ; la ville abrite encore la première cathédrale, la première université et la première rue pavée du Nouveau Monde.",
  },
  mountpeleeeruption: {
    name: "Éruption de la montagne Pelée",
    clue: "Un volcan rase une ville portuaire en quelques minutes, tuant des dizaines de milliers de personnes ; un prisonnier survit grâce aux murs épais de sa cellule.",
    explanation:
      "La montagne Pelée entra en éruption sur l'île de la Martinique, détruisant la ville de Saint-Pierre sous une nuée ardente qui tua environ trente mille personnes en quelques minutes ; le survivant Ludger Sylbaris tourna ensuite dans un cirque comme l'un des rares rescapés de la catastrophe.",
  },
  valdiviaearthquake: {
    name: "Grand séisme du Chili",
    clue: "Le séisme le plus puissant jamais mesuré frappe une région côtière, envoyant à travers un océan une vague qui tue des habitants d'un littoral lointain.",
    explanation:
      "Un séisme de magnitude 9,5, le plus puissant jamais mesuré, frappa près de Valdivia, dans le sud du Chili, provoquant un tsunami qui fit des victimes à Hawaï et au Japon et laissa environ deux millions de personnes sans abri.",
  },
  costaricamilitaryabolition: {
    name: "Abolition de l'armée au Costa Rica",
    clue: "Après un bref conflit civil, le nouveau dirigeant d'une nation dissout ses forces armées, brisant à coups de masse un mur de forteresse pour marquer le moment.",
    explanation:
      "Le président José Figueres Ferrer abolit l'armée du Costa Rica après avoir remporté une brève guerre civile, et inscrivit cette décision dans la nouvelle constitution ; l'ancienne forteresse militaire devint le Musée national, et le Costa Rica demeure l'un des rares pays sans armée permanente.",
  },
  easter_island_discovery: {
    name: "Découverte européenne de l'île de Pâques",
    clue: "Des explorateurs débarquent sur une île isolée déjà couverte d'immenses statues de pierre sculptées, et la nomment d'après le jour de leur arrivée.",
    explanation:
      "L'expédition du navigateur néerlandais Jacob Roggeveen fut la première d'Européens confirmée à atteindre l'île, qu'il baptisa du nom de la fête chrétienne du jour de son arrivée ; les statues moaï qu'ils y découvrirent avaient été sculptées des siècles plus tôt par le peuple rapa nui.",
  },
  cookdeath_kealakekua: {
    name: "Mort du capitaine Cook",
    clue: "Un navigateur célèbre est tué lors d'un affrontement sur une plage alors qu'il tente de prendre en otage un chef local pour récupérer une embarcation volée.",
    explanation:
      "L'explorateur britannique James Cook fut tué dans la baie de Kealakekua, sur la grande île d'Hawaï, après qu'une dispute autour du vol d'une chaloupe eut dégénéré ; une partie de son corps fut secrètement rendue à son équipage avant que le reste ne soit immergé en mer.",
  },
  rainbow_warrior_bombing: {
    name: "Attentat contre le Rainbow Warrior",
    clue: "Des agents étrangers fixent des mines explosives sur un navire écologiste amarré dans un port, le coulant et tuant un photographe resté à bord.",
    explanation:
      "Des agents des services secrets français coulèrent le navire amiral de Greenpeace, le Rainbow Warrior, dans le port d'Auckland pour l'empêcher de protester contre un essai nucléaire ; deux agents plaidèrent ensuite coupables d'homicide involontaire dans le cadre d'un accord judiciaire.",
  },
  castle_bravo_test: {
    name: "Essai nucléaire Castle Bravo",
    clue: "Un essai de bombe à hydrogène sur un atoll explose deux fois et demie plus fort que prévu, couvrant un bateau de pêche lointain de retombées radioactives.",
    explanation:
      "Les États-Unis firent détoner l'engin Castle Bravo sur l'atoll de Bikini, dans les îles Marshall, leur essai nucléaire le plus puissant jamais réalisé ; les retombées contaminèrent aussi des habitants des îles voisines, alimentant des protestations mondiales contre les essais atmosphériques.",
  },
  kontiki_raroia_landing: {
    name: "Fin de l'expédition du Kon-Tiki à Raroia",
    clue: "Un radeau de troncs de balsa, sans moteur, construit pour tester une théorie de migration ancienne, dérive des milliers de kilomètres avant de heurter un récif.",
    explanation:
      "Le radeau Kon-Tiki de l'explorateur norvégien Thor Heyerdahl, parti d'Amérique du Sud, s'échoua sur le récif de l'atoll de Raroia, dans les îles Tuamotu, après 101 jours en mer, semblant confirmer sa théorie d'un peuplement venu de l'est.",
  },
  bounty_mutineers_pitcairn: {
    name: "Mutins du Bounty à Pitcairn",
    clue: "Des mutins abandonnent leur capitaine en mer, s'installent sur une île isolée inhabitée, puis brûlent leur navire dans une baie pour en effacer toute trace.",
    explanation:
      "Après s'être mutinés contre le capitaine William Bligh à bord du Bounty, Fletcher Christian et huit autres marins, accompagnés de compagnons tahitiens, s'installèrent sur l'île de Pitcairn et brûlèrent le navire dans la baie aujourd'hui appelée Bounty Bay ; la plupart des moins de cinquante habitants actuels sont leurs descendants directs.",
  },
  sydney_opera_house_opens: {
    name: "Inauguration de l'Opéra de Sydney",
    clue: "L'architecte d'une salle de spectacle en forme de voiles démissionne des années avant son achèvement, pour des raisons de coûts, et boycotte son inauguration.",
    explanation:
      "L'architecte danois Jørn Utzon conçut les célèbres toits en coquilles de l'Opéra de Sydney ; la reine Élisabeth II inaugura officiellement le bâtiment, plus tard classé au patrimoine mondial de l'UNESCO pour son importance architecturale.",
  },
  uluru_handback: {
    name: "Restitution d'Uluru",
    clue: "Un gouvernement restitue un rocher sacré du désert à ses propriétaires traditionnels, qui le relouent aussitôt au service des parcs pour 99 ans.",
    explanation:
      "Le gouvernement australien restitua le titre de propriété d'Uluru, l'immense monolithe de grès au cœur du parc national d'Uluru-Kata Tjuta, au peuple anangu, qui le reloue au service des parcs nationaux sous la houlette d'un comité de gestion conjoint à majorité anangu.",
  },
  tasman_murderers_bay: {
    name: "Rencontre de Tasman à Golden Bay",
    clue: "Les navires d'un explorateur ancrent près d'une côte inconnue ; des pirogues tuent quatre marins, il nomme la baie d'après le massacre et repart sans débarquer.",
    explanation:
      "L'explorateur néerlandais Abel Tasman mouilla au large de l'île du Sud de la Nouvelle-Zélande, le premier Européen connu à le faire, mais se retira après que des pirogues maories eurent percuté une de ses embarcations et tué quatre marins ; il nomma le site la baie des Meurtriers, aujourd'hui appelée Golden Bay.",
  },
  hokulea_maiden_voyage: {
    name: "Premier voyage du Hokulea à Tahiti",
    clue: "Une pirogue à double coque traverse l'océan sans instrument, guidée par les étoiles, accueillie par une foule dépassant la moitié des habitants locaux.",
    explanation:
      "La pirogue de voyage hawaïenne Hokulea effectua sa première grande traversée océanique, d'Hawaï à Tahiti, en utilisant la navigation traditionnelle polynésienne sous la direction du maître navigateur Mau Piailug, démontrant que le Pacifique aurait pu être peuplé par des voyages intentionnels plutôt que par dérive accidentelle.",
  },
  chicxulub_crater: {
    name: "Cratère d'impact de Chicxulub",
    clue: "Un vaste cratère, à moitié sous des champs et à moitié sous la mer, est cerné de cendres riches en un métal courant dans les astéroïdes mais rare sur Terre.",
    explanation:
      "Il s'agit du cratère de Chicxulub, dans la péninsule du Yucatán au Mexique, formé par l'impact d'un astéroïde qui déclencha l'extinction de masse ayant rayé les dinosaures non aviaires de la surface du globe. Les géologues l'ont d'abord cartographié à partir de données de prospection pétrolière, la majeure partie du cratère étant enfouie sous terre ou sous le golfe du Mexique.",
  },
  lascaux_cave: {
    name: "Grotte de Lascaux",
    clue: "Un chien tombe dans un trou caché en suivant une odeur, menant son maître à une salle peinte si fragile que le souffle humain la fera fermer pour de bon.",
    explanation:
      "Il s'agit de la grotte de Lascaux, dans le sud-ouest de la France. Sa salle principale, appelée la salle des Taureaux, contient une figure d'aurochs longue de plus de cinq mètres, l'une des plus grandes représentations animales de tout l'art pariétal, et le site reste aujourd'hui fermé au public, qui découvre une réplique grandeur nature construite à proximité.",
  },
  gobekli_tepe: {
    name: "Mégalithes de Göbekli Tepe",
    clue: "Des chasseurs-cueilleurs dressent ici d'immenses piliers de pierre sculptée, avant même l'agriculture, la poterie, les outils en métal ou l'écriture.",
    explanation:
      "Il s'agit de Göbekli Tepe, près de Şanlıurfa dans le sud-est de la Turquie. Ses bâtisseurs ont fini par enterrer les enceintes à piliers sous des tonnes de gravats et de terre, un remblaiement délibéré qui explique en partie pourquoi le site s'est aussi bien conservé jusqu'à sa découverte par les archéologues.",
  },
  blombos_cave: {
    name: "Dessin de la grotte de Blombos",
    clue: "Sur un petit éclat de pierre dans une grotte côtière, quelqu'un grave un motif quadrillé avec un crayon minéral, le plus ancien dessin humain jamais retrouvé.",
    explanation:
      "Il s'agit de la grotte de Blombos, sur la côte sud de l'Afrique du Sud. Le site a aussi livré des perles en coquillages de nasse percés, portées en bijoux, parmi les plus anciennes parures personnelles connues fabriquées par des humains.",
  },
  laetoli_footprints: {
    name: "Empreintes de Laetoli",
    clue: "Des cendres volcaniques durcissent sur une piste d'empreintes bipèdes, préservée des millions d'années avant qu'existe un cerveau assez grand pour des outils.",
    explanation:
      "Il s'agit des empreintes de Laetoli, dans le nord de la Tanzanie, très probablement laissées par Australopithecus afarensis, la même espèce que le célèbre squelette de Lucy. La piste conserve les traces d'au moins deux individus marchant côte à côte.",
  },
  denisova_cave: {
    name: "Os de doigt de Denisova",
    clue: "Un minuscule os de doigt d'enfant, trouvé en grotte de montagne, révèle assez de matériel génétique pour définir une branche humaine au crâne inconnu.",
    explanation:
      "Il s'agit de la grotte de Denisova, dans les monts Altaï en Sibérie. Le site a ensuite livré un fragment d'os d'une adolescente née d'une mère néandertalienne et d'un père dénisovien, preuve directe que ces deux groupes humains anciens s'étaient croisés.",
  },
  iphone_unveiled: {
    name: "Présentation du premier iPhone",
    clue: "Un présentateur dévoile un appareil qui fusionne un baladeur à écran tactile, un téléphone et un outil de communication internet, sans aucun bouton clavier.",
    explanation:
      "Steve Jobs présenta l'appareil lors d'une conférence Macworld, déclarant attendre ce jour depuis deux ans et demi, et l'appareil fut mis en vente six mois plus tard.",
  },
  falcon9_landing: {
    name: "Premier atterrissage de fusée réutilisable",
    clue: "Le premier étage d'une fusée orbitale redescend seul et se pose debout, intact, pour la première fois, juste après avoir lancé des satellites en orbite.",
    explanation:
      "Cette fusée, construite par une entreprise privée, a aussi placé onze satellites de communication en orbite et repris ses vols moins de six mois après l'explosion d'un précédent véhicule du même programme au décollage.",
  },
  higgs_boson_discovery: {
    name: "Découverte du boson de Higgs",
    clue: "Des physiciens d'un collisionneur souterrain annoncent, avec une certitude de cinq écarts-types, la découverte d'une particule qui donne leur masse aux autres.",
    explanation:
      "Deux équipes de détecteurs indépendantes, sur le même collisionneur, repérèrent chacune une nouvelle particule d'environ 125 fois la masse d'un proton, confirmant la dernière pièce manquante du modèle standard de la physique des particules, un cadre théorique testé par les physiciens pendant des années.",
  },
  fukushima_disaster: {
    name: "Catastrophe nucléaire de Fukushima",
    clue: "Un tsunami frappe une centrale électrique côtière et provoque la fusion de trois cœurs de réacteur, forçant plus de 164 000 personnes à fuir.",
    explanation:
      "L'accident fut classé au niveau maximal 7 sur l'échelle internationale des événements nucléaires, un niveau atteint par une seule autre catastrophe, après que des explosions d'hydrogène eurent endommagé plusieurs bâtiments réacteurs.",
  },
  indian_ocean_tsunami: {
    name: "Tsunami de l'océan Indien",
    clue: "Un séisme parmi les plus puissants jamais enregistrés déchire le fond océanique et lance des vagues à travers tout un océan, tuant des gens dans douze pays.",
    explanation:
      "Des scientifiques de la NASA calculèrent que la magnitude du séisme, parmi les plus fortes jamais mesurées, avait été assez forte pour raccourcir la durée du jour terrestre de quelques microsecondes et déplacer le pôle nord de la planète de plusieurs centimètres.",
  },
  eyjafjallajokull_eruption: {
    name: "Un volcan paralyse le trafic aérien européen",
    clue: "Un volcan sous un glacier entre en éruption ; son nuage de cendres cloue au sol plus de 100 000 vols et ferme l'espace aérien d'un continent durant des jours.",
    explanation:
      "L'éruption, provenant d'un volcan sous une calotte glaciaire islandaise, ferma d'un coup l'espace aérien d'une vingtaine de pays et coûta aux compagnies aériennes environ 1,7 milliard de dollars de revenus perdus.",
  },
  first_samesex_marriage: {
    name: "Premiers mariages homosexuels légaux",
    clue: "Juste après minuit, un maire marie quatre couples de même sexe, faisant de ce pays le premier au monde à reconnaître légalement ce type d'union.",
    explanation:
      "Le maire Job Cohen présida la cérémonie à l'hôtel de ville, mariant trois couples d'hommes et un couple de femmes, dans ce qui fut le premier mariage homosexuel légalement reconnu au monde.",
  },
  wittenberg_theses: {
    name: "Affichage des 95 thèses",
    clue: "Un moine cloue 95 thèses contre la vente d'indulgences sur la porte d'une église, fracturant pour des siècles l'unité religieuse d'un continent.",
    explanation:
      "Les Quatre-vingt-quinze thèses de Martin Luther, affichées sur la porte de l'église du Château à Wittenberg, condamnaient la vente d'indulgences et sont traditionnellement considérées comme l'étincelle de la Réforme protestante, qui divisa le christianisme occidental.",
  },
  gutenberg_press: {
    name: "Invention de l'imprimerie de Gutenberg",
    clue: "Un orfèvre invente des caractères métalliques mobiles et une encre à l'huile, pour imprimer des pages identiques par centaines au lieu de les copier à la main.",
    explanation:
      "Johannes Gutenberg mit au point sa presse à imprimer à Mayence et l'utilisa pour produire sa célèbre Bible, faisant chuter le coût des livres et accélérant la diffusion de l'alphabétisation et des idées.",
  },
  gdansk_agreement: {
    name: "Accords de Gdańsk",
    clue: "Des ouvriers grévistes d'un chantier naval obtiennent le droit de former un syndicat indépendant du parti au pouvoir, une première dans la région.",
    explanation:
      "Les ouvriers du chantier naval Lénine à Gdańsk, menés par l'électricien Lech Wałęsa, forcèrent le gouvernement communiste à reconnaître Solidarność, le premier syndicat indépendant du bloc de l'Est.",
  },
  velvet_revolution: {
    name: "Révolution de velours",
    clue: "Des foules envahissent une place chaque soir en agitant des clés, et en quelques semaines un régime à parti unique vieux de décennies tombe sans un coup de feu.",
    explanation:
      "Les manifestations de masse concentrées place Venceslas à Prague forcèrent la direction communiste de la Tchécoslovaquie à abandonner son monopole du pouvoir, une transition si pacifique comparée aux bouleversements voisins qu'elle fut surnommée la révolution de velours.",
  },
  althing_founding: {
    name: "Fondation de l'Althing",
    clue: "Des paysans libres d'une île isolée se réunissent dans une vallée de rift pour réciter les lois de mémoire, fondant une assemblée qui siège encore aujourd'hui.",
    explanation:
      "L'Althing islandais fut fondé à Þingvellir, un site choisi en partie parce qu'il se situe à l'endroit où deux plaques tectoniques s'écartent l'une de l'autre, et il est largement considéré comme l'une des plus anciennes institutions parlementaires encore en activité au monde.",
  },
  mont_blanc_first_ascent: {
    name: "Première ascension du Mont Blanc",
    clue: "Deux alpinistes atteignent en premier le plus haut sommet d'un massif, preuve barométrique à l'appui, une ascension vue comme le début de l'alpinisme moderne.",
    explanation:
      "L'ascension fut réalisée par un médecin local et un chercheur de cristaux, qui remportèrent une récompense en argent offerte des décennies plus tôt par un riche scientifique à quiconque trouverait le premier un chemin vers le sommet.",
  },
  first_nobel_prize_ceremony: {
    name: "Première remise des prix Nobel",
    clue: "Les premiers prix financés par le testament d'un inventeur de la dynamite sont remis en salle de concert, sauf un, décerné le même jour dans une autre capitale.",
    explanation:
      "Ces récompenses, créées par testament par un inventeur et industriel, sont encore remises chaque année à la date anniversaire de sa mort, dans des catégories allant des sciences à la littérature et à la paix.",
  },
  brunelleschi_dome: {
    name: "Dôme de Brunelleschi achevé",
    clue: "Un architecte achève un immense dôme sur une cathédrale sans échafaudage en bois pour le soutenir, toujours le plus grand dôme en maçonnerie jamais construit.",
    explanation:
      "Le dôme de Filippo Brunelleschi pour la cathédrale de Florence utilisa un appareillage de briques en arête de poisson et une double coque autoportante, résolvant un problème d'ingénierie qui avait longtemps déjoué les architectes.",
  },
  lisbon_earthquake: {
    name: "Tremblement de terre de Lisbonne",
    clue: "Un séisme massif frappe une capitale un matin de fête religieuse ; tsunami et incendies détruisent l'essentiel de la ville en quelques heures.",
    explanation:
      "Le séisme qui frappa Lisbonne tua des dizaines de milliers de personnes et ébranla profondément la pensée des Lumières, poussant des philosophes de tout le continent à remettre en question l'idée que les catastrophes naturelles étaient des punitions divines.",
  },
  spanish_armada_gravelines: {
    name: "Défaite de l'Armada espagnole",
    clue: "Une immense flotte d'invasion est dispersée de nuit par des brûlots, vaincue le lendemain, puis brisée par des tempêtes en fuyant une nation insulaire.",
    explanation:
      "Une flotte massive assemblée pour envahir l'Angleterre fut mise en déroute au large de Gravelines après que des brûlots l'eurent forcée à rompre sa formation. Ses survivants, meurtris, furent détruits par des tempêtes en rentrant par le nord de l'Écosse et de l'Irlande, affaiblissant sa puissance navale pour des années.",
  },
};
