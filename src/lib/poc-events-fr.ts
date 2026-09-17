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
};
