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
  pearl_harbor: {
    name: "Attaque de Pearl Harbor",
    clue: "Un raid aérien surprise depuis des porte-avions frappe une flotte amarrée dans un port, jetant une nation neutre dans une guerre mondiale du jour au lendemain.",
    explanation: "Le Japon a lancé une attaque aérienne surprise depuis des porte-avions contre la flotte américaine du Pacifique à Pearl Harbor, à Hawaï, tuant plus de 2 400 personnes et poussant les États-Unis à entrer dans la Seconde Guerre mondiale dès le lendemain.",
  },
  machu_picchu: {
    name: "Machu Picchu",
    clue: "Perchée sur une crête escarpée au-dessus d'un canyon, une citadelle de pierre aux terrasses et temples fut bâtie sans mortier, sans outils en fer et sans roue.",
    explanation: "Le Machu Picchu, une citadelle inca perchée en altitude dans les montagnes péruviennes, fut bâti en pierre sèche sans mortier puis abandonné quelques décennies après son achèvement, restant inconnu du monde extérieur pendant des siècles avant que sa redécouverte n'attire l'attention mondiale.",
  },
  woodstock: {
    name: "Woodstock",
    clue: "Un demi-million de personnes se rassemblent dans une ferme laitière pour trois jours de musique sous la pluie, symbole d'une génération contestataire.",
    explanation: "Le Woodstock Music and Art Fair a attiré plusieurs centaines de milliers de personnes dans une ferme laitière de l'État de New York pendant trois jours de pluie et de boue, devenant l'événement emblématique de l'époque contestataire.",
  },
  newton_gravity: {
    name: "Isaac Newton",
    clue: "Sur une petite ferme naît prématurément un futur savant, où une pomme tombée des années plus tard aurait déclenché ses réflexions sur la gravité.",
    explanation: "Isaac Newton est né prématurément au manoir de Woolsthorpe, dans la campagne anglaise, et a publié les Principia Mathematica, formulant les lois du mouvement et de la gravitation universelle qui ont fondé la physique classique pendant des siècles.",
  },
  berne_convention: {
    name: "Convention de Berne",
    clue: "Dix pays se réunissent dans une petite ville pour signer le premier grand traité donnant aux auteurs le contrôle sur la copie de leurs œuvres.",
    explanation: "Des délégués de dix pays européens se sont réunis à Berne, en Suisse, pour signer la Convention de Berne, premier grand traité international établissant une protection du droit d'auteur pour les œuvres littéraires et artistiques, toujours à la base du droit d'auteur aujourd'hui.",
  },
  waterloo: {
    name: "Bataille de Waterloo",
    clue: "De retour d'exil, un général est défait en un jour quand deux armées convergent contre lui, mettant fin à des décennies de guerre sur un continent entier.",
    explanation: "Napoléon Bonaparte, évadé de son exil et revenu au pouvoir en France, fut décisivement vaincu près du village de Waterloo par une armée dirigée par les Britanniques sous Wellington et une armée prussienne sous Blücher, mettant fin pour de bon aux guerres napoléoniennes.",
  },
  giza_pyramid: {
    name: "Grande pyramide de Gizeh",
    clue: "Seule des sept merveilles antiques encore debout, une tombe de souverain forme une pyramide de pierre alignée sur les points cardinaux avec précision.",
    explanation: "Bâtie comme tombeau pour le pharaon Khéops, la grande pyramide de Gizeh est la seule des sept merveilles du monde antique encore largement intacte et resta la plus haute construction humaine sur Terre pendant des millénaires, bien qu'édifiée avec de simples outils de cuivre et de pierre.",
  },
  colosseum: {
    name: "Colisée",
    clue: "Un amphithéâtre elliptique en pierre pour des dizaines de milliers de spectateurs a accueilli combats de gladiateurs et de fausses batailles navales.",
    explanation: "Le Colisée, à Rome, le plus grand amphithéâtre jamais construit dans l'Antiquité, accueillait des combats de gladiateurs et des chasses d'animaux, et, à ses débuts, mettait en scène de fausses batailles navales en inondant l'arène.",
  },
  davinci: {
    name: "Léonard de Vinci",
    clue: "Né hors mariage dans une petite ville de collines, un peintre autodidacte a rempli des carnets de notes en miroir sur l'anatomie, le vol et l'hydraulique.",
    explanation: "Léonard de Vinci est né dans la ville toscane de Vinci et devint peintre, ingénieur et savant dont les carnets, rédigés en écriture spéculaire, anticipaient des idées en anatomie, en ingénierie et en vol bien avant qu'elles ne soient réalisables.",
  },
  treaty_london: {
    name: "Traité de Londres",
    clue: "Une conférence des grandes puissances produit un traité garantissant la neutralité d'un nouveau royaume, invoquée plus tard comme raison d'entrer en guerre.",
    explanation: "Le traité de Londres fut signé par les grandes puissances européennes, les Pays-Bas et la Belgique, garantissant l'indépendance et la neutralité permanente de la Belgique, une garantie que le Royaume-Uni invoqua plus tard comme raison d'entrer dans la Première Guerre mondiale après l'invasion allemande.",
  },
  angkor_wat: {
    name: "Angkor Wat",
    clue: "Le plus grand complexe religieux du monde fait face à l'ouest, pas à l'est comme presque tous les temples semblables, et figure sur le drapeau de son pays.",
    explanation: "Angkor Wat, à Siem Reap, au Cambodge, est un complexe de temples hindou-bouddhiste et le plus grand monument religieux au monde. Il fut construit par le roi khmer Suryavarman II comme temple dédié au dieu hindou Vishnou, avant de devenir un centre de culte bouddhiste, et figure aujourd'hui sur le drapeau national du Cambodge.",
  },
  mali_coup_2020: {
    name: "Coup d'état au Mali",
    clue: "Des soldats d'une base militaire s'emparent d'armes et foncent vers la capitale, arrêtant le président, lors du deuxième coup d'état en moins de dix ans.",
    explanation: "Au Mali, des soldats d'une base militaire près de Bamako se mutinent, s'emparant d'armes et fonçant vers la capitale en chars et véhicules blindés. Ils arrêtent le président Ibrahim Boubacar Keïta, qui démissionne et dissout le gouvernement quelques heures plus tard. C'est la deuxième fois en moins de dix ans que le gouvernement malien est renversé par sa propre armée.",
  },
  elias_canetti: {
    name: "Elias Canetti",
    clue: "Né dans une ville portuaire fluviale, cet écrivain adopta une langue qui n'était pas la sienne et reçut un prix Nobel de littérature.",
    explanation: "Elias Canetti est né à Roussé, une ville portuaire au bord d'un fleuve, dans une famille juive séfarade de marchands qui parlait le judéo-espagnol à la maison. Il écrivit ensuite presque exclusivement en allemand, une langue qu'il ne commença à apprendre que dans son enfance, et reçut le prix Nobel de littérature pour des œuvres telles que le roman Auto-da-fé et l'essai Masse et puissance.",
  },
  tiwanaku: {
    name: "Tiwanaku",
    clue: "Au bord d'un des plus hauts lacs de la planète, une cité de pierre monumentale abritait jusqu'à 20 000 habitants, l'une des plus grandes cités de son époque.",
    explanation: "Tiwanaku, près du lac Titicaca dans les hauts plateaux boliviens, fut une importante cité précolombienne bâtie à partir d'énormes blocs de pierre parfaitement ajustés. À son apogée, elle comptait entre 10 000 et 20 000 habitants, l'une des populations urbaines les plus importantes des Amériques de son temps.",
  },
  klondike_gold_rush: {
    name: "Ruée vers l'or du Klondike",
    clue: "La découverte d'or dans une vallée isolée du nord déclencha une ruée de 100 000 prospecteurs, devant transporter une tonne de vivres par un col de montagne.",
    explanation: "La ruée vers l'or du Klondike attira environ 100 000 prospecteurs vers la région du Yukon, dans le nord-ouest du Canada, après la découverte d'or le long d'un ruisseau local. Les autorités canadiennes exigeaient que chaque prospecteur transporte environ une tonne de vivres par un col de montagne avant d'entrer sur le territoire, et la plupart de ceux qui firent le voyage ne trouvèrent que peu ou pas d'or.",
  },
  sudan_coup_2021: {
    name: "Coup d'état au Soudan",
    clue: "L'armée coupe l'accès à internet dans tout le pays et dissout le conseil au pouvoir; le premier ministre, opposé à la prise de pouvoir, est assigné à résidence.",
    explanation: "Au Soudan, l'armée, dirigée par le général Abdel Fattah al-Burhan, s'empare du pouvoir et dissout le Conseil de souveraineté. Le premier ministre Abdalla Hamdok refuse de cautionner la prise de pouvoir et appelle à la résistance populaire avant d'être assigné à résidence, tandis que l'accès à internet est coupé dans tout le pays et que des responsables, militants et journalistes sont détenus dans des lieux tenus secrets.",
  },
  gateway_arch: {
    name: "Gateway Arch",
    clue: "En acier inoxydable et façonné à la forme d'une chaîne suspendue, un monument devint le plus haut arc du monde, bâti pour une ère d'expansion vers l'ouest.",
    explanation: "Le Gateway Arch, à Saint-Louis, dans le Missouri, est un monument en acier inoxydable de 192 mètres de haut, façonné selon une chaînette pondérée, la courbe que forme une chaîne suspendue. C'est le plus haut arc du monde, construit en monument à l'expansion vers l'ouest des États-Unis, aujourd'hui classé monument historique national et symbole de la ville.",
  },
  auguste_comte: {
    name: "Auguste Comte",
    clue: "Né dans une ville du sud, ce philosophe inventa le mot désignant l'étude scientifique de la société, présenté comme l'aboutissement suprême des sciences.",
    explanation: "Auguste Comte est né à Montpellier et devint un philosophe et écrivain qui formula la doctrine du positivisme, souvent considéré comme le premier philosophe des sciences au sens moderne. Il inventa le terme sociologie et en fit l'aboutissement suprême des sciences.",
  },
  chiang_kaishek_memorial: {
    name: "Chiang Kai-shek Memorial Hall",
    clue: "Un monument bâti sous la loi martiale pour honorer un dirigeant national sert aujourd'hui de lieu de mémoire pour cette même période de loi martiale.",
    explanation: "Le Chiang Kai-shek Memorial Hall, à Taipei, à Taïwan, est un monument national construit pendant la période de loi martiale de Taïwan en hommage à Chiang Kai-shek, ancien président de la République de Chine. Ces dernières années, le site est aussi devenu un lieu de mémoire pour cette même période de loi martiale.",
  },
  first_council_nicaea: {
    name: "Premier concile de Nicée",
    clue: "Un empereur convoqua des évêques en une seule ville pour trancher un différend religieux, produisant un credo récité par des millions de fidèles.",
    explanation: "Le premier concile de Nicée fut une assemblée d'évêques chrétiens convoquée par l'empereur romain Constantin Ier dans la ville de Nicée. Aussi appelé premier concile œcuménique, il trancha un différend majeur sur la doctrine chrétienne et produisit le Credo de Nicée, encore récité dans le culte chrétien aujourd'hui.",
  },
};
