export const data = {
  landing: {
    headline: "Dein Raum. Dein Meeting.",
    description:
      "Entdecke unsere Schulungs- und Konferenzräume in Wolfsburg. Buche modernste Ausstattung und digitalen Komfort für deine Schulung, Tagung oder dein Businessmeeting. Mit unserem Rund-Um-Glücklich Prinzip sorgen wir für deine perfekte Kommunikation.",
    background: {
      src: require("../public/images/room.jpg"),
      alt: "",
    },
  },
  gallery: {
    headline: "Unsere Galerie.",
    description:
      "Stöbere in unserer Galerie und überzeuge dich selbst von modernem Design und toller Ausstattung.",
    images: [
      {
        src: "https://media.spacebase.com/media/cache/spaces/7472/dsc_9761_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/7472/dsc_9758_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/7472/dsc_8772_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8068_df_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8008_df_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8001_df_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8003_df_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8093_df_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/12383/640a6691_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/12383/img_4403_1280.jpg",
        alt: "",
      },
      {
        src: "https://media.spacebase.com/media/cache/spaces/12383/small-space-taunusanlage-layouts_1280.jpg",
        alt: "",
      },
    ],
  },
  about: {
    headline: "Wir vernetzen die Region. Wir schaffen Verbundenheit.",
    description: [
      "Vermietung von Schulungs- und Konferenzräumen",
      "Perfekte Anbindung zur Autobahn, oder in die schöne Autostadt Wolfsburg",
      "Hochwertige und innovative Ausstattungstechnik",
      "Wunderschöne, ruhige Lage mit schöner Außenanlage",
      "Rund-Um-Glücklich Paket mit individuellem Catering",
    ],
    image: {
      src: require("../public/images/about.jpg"),
      alt: "",
    },
  },
  features: {
    headline: "Dein Meeting. Unsere Ausstattung.",
    description: "Das bieten wir dir für dein Meeting.",
    image: {
      src: require("../public/images/facilities_main.jpg"),
      alt: "",
    },
    features: [
      {
        title: "Getränke und Catering.",
        icon: "phone",
        description: "Nach deinen Wünschen zusammengestellt.",
      },
      {
        title: "E-Ladesäulen.",
        icon: "marker",
        description: "Um das nachhaltige Fahren der Zukunft zu ermöglichen.",
      },
      {
        title: "Erlebnispakete.",
        icon: "phone",
        description: "Für dein ganz besonderes Meeting.",
      },
      {
        title: "Barrierefreiheit.",
        icon: "marker",
        description: "Lorem ipsum dolor sit amet, consetetur.",
      },
      {
        title: "Location.",
        icon: "marker",
        description: "Lorem ipsum dolor sit amet, consetetur.",
      },
      {
        title: "Gartennutzung.",
        icon: "marker",
        description: "Wohlfühlen und Work-Life-Balance in Einklang bringen.",
      },
      {
        title: "Parkmöglichkeiten.",
        icon: "phone",
        description:
          "47 Parkplätze und eine großzügige Stellfläche für Fahrräder.",
      },
      {
        title: "Technik und Ausstattung.",
        icon: "marker",
        description: "Hochmoderne Konferenzsysteme für stressfreies Arbeiten.",
      },
    ],
  },
  spaces: [
    {
      slug: "connect",
      title: "Connect.",
      subtitle: "Deine Vernetzung.",
      description: [
        "Für deine digitale Zusammenarbeit über alle Grenzen hinaus bieten wir dir im Raum CONNECT hochmoderne Konferenzsysteme. Verbinde dich mit der Welt und genieße den volldigital ausgestatteten Besprechungsraum.",
        "Der Konferenzraum CONNECT vernetzt dich stressfrei mit deinen Kunden, Mitarbeitern oder Partnern. Hochmoderne Konferenzsysteme sorgen für einen reibungslosen Ablauf deiner Meetings. Ob mit zwei Teilnehmern oder mit dem ganzen Team – CONNECT bietet dir ein stressfreies und bequemes Erlebnis. Verbinde dich mit der Welt und genieße unseren volldigital ausgestatteten Konferenzraum. Für deine digitale Zusammenarbeit.",
      ],
      images: [
        {
          src: "https://media.spacebase.com/media/cache/spaces/7472/dsc_9761_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/7472/dsc_9758_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/7472/dsc_8772_1280.jpg",
          alt: "",
        },
      ],
      availability: ["Mon - Fri • 8:00 - 18:00", "Mon - Fri • 8:00 - 18:00"],
      price: ["Halbtagspauschale", "Ganztagspauschale", "Wochenendpauschale"],
      characteristics: {
        key: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
        ],
        equipment: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
        ],
      },
      extras: {
        catering: [
          { name: "area", label: "22m2", premium: false },
          { name: "people", label: "Max 7 Persons", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "22m2", premium: false },
          { name: "people", label: "Max 7 Persons", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "22m2", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "Mundo Vinum", premium: true },
          { name: "people", label: "Vivre la France", premium: true },
          { name: "seating", label: "Habano from Cuba", premium: true },
        ],
        equipment: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
        ],
      },
    },
    {
      slug: "create",
      title: "Create.",
      subtitle: "Deine Kreativität.",
      description: [
        "Effizientes Arbeiten in anregender Umgebung, natürliches Tageslicht und ein traumhaftes Ambiente – das bieten wir dir mit dem Raum CREATE. Um beste Ergebnisse zu erzielen arbeitet ihr gemeinsam, schafft effektive Workflows und könnt gemeinsam Grenzen überwinden.",
        "Im Schulungsraum CREATE steht dir die Welt offen. Egal ob Meetings mit deinem ganzen Team, Schulungen oder Workshops. Der großzügige Tageslicht durchflutete Raum bietet dir ungeahnte Flexibilität. Mit dem Blick auf unsere traumhafte Grünanlage und der Möglichkeit zur Terrassennutzung bietet CREATE die beste Umgebung, um kreativ zu arbeiten, Dinge zu schaffen und Ergebnisse zu erzielen. Der Raum ist so flexibel wie du – durch die eingebaute Trennwand kann schnell ein Rückzugsort für kleinere Gruppen geschaffen werden. Schafft gemeinsam effektive Workflows und überwindet Grenzen. Für das Arbeiten der Zukunft.",
      ],
      images: [
        {
          src: "https://media.spacebase.com/media/cache/spaces/12383/640a6691_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/12383/img_4403_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/12383/small-space-taunusanlage-layouts_1280.jpg",
          alt: "",
        },
      ],
      availability: ["Mon - Fri • 8:00 - 18:00", "Mon - Fri • 8:00 - 18:00"],
      price: ["Halbtagspauschale", "Ganztagspauschale", "Wochenendpauschale"],
      characteristics: {
        key: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
        ],
        equipment: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
        ],
      },
      extras: {
        catering: [
          { name: "area", label: "22m2", premium: false },
          { name: "people", label: "Max 7 Persons", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "22m2", premium: false },
          { name: "people", label: "Max 7 Persons", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "22m2", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "Mundo Vinum", premium: true },
          { name: "people", label: "Vivre la France", premium: true },
          { name: "seating", label: "Habano from Cuba", premium: true },
        ],
        equipment: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
        ],
      },
    },
    {
      slug: "inspire",
      title: "Inspire.",
      subtitle: "Deine Inspiration.",
      description: [
        "Wir setzen Grenzen nur um Sie zu überwinden. Im Raum INSPIRE erwartet dich eine Premium Ausstattung für deine Meetings. Für eine inspirierende Umgebung für berauschende Erfolge.",
        "Der Konferenzraum INSPIRE ist deine Wahl, wenn du deine Meetings professionell und in inspirierender Atmosphäre abhalten willst. Hier hast du die Möglichkeit, zusammen mit deinen Kollegen, Kunden oder Partnern große Dinge zu schaffen. Überzeuge dich selbst von INSPIRE schaffe innovative Ansätze. Für deinen grenzenlosen Erfolg.",
      ],
      images: [
        {
          src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8068_df_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8008_df_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8001_df_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8003_df_1280.jpg",
          alt: "",
        },
        {
          src: "https://media.spacebase.com/media/cache/spaces/7994/2376_8093_df_1280.jpg",
          alt: "",
        },
      ],
      availability: ["Mon - Fri • 8:00 - 18:00", "Mon - Fri • 8:00 - 18:00"],
      price: ["Halbtagspauschale", "Ganztagspauschale", "Wochenendpauschale"],
      characteristics: {
        key: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
        ],
        equipment: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Personen" },
          { name: "seating", label: "Tischinsel" },
        ],
      },
      extras: {
        catering: [
          { name: "area", label: "22m2", premium: false },
          { name: "people", label: "Max 7 Persons", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "22m2", premium: false },
          { name: "people", label: "Max 7 Persons", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "22m2", premium: false },
          { name: "seating", label: "Tischinsel", premium: false },
          { name: "area", label: "Mundo Vinum", premium: true },
          { name: "people", label: "Vivre la France", premium: true },
          { name: "seating", label: "Habano from Cuba", premium: true },
        ],
        equipment: [
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
          { name: "seating", label: "Tischinsel" },
          { name: "area", label: "22m2" },
          { name: "people", label: "Max 7 Persons" },
        ],
      },
    },
  ],
  contact: {
    headline: "Überzeugt? Jetzt ein unverbindliches Angebot anfordern.",
    email: "info@newglobecenter.com",
    phone: "+49 5308 5231220",
    background: {
      src: "https://as2.ftcdn.net/v2/jpg/02/04/18/31/1000_F_204183167_eLpT1Fyt9egBbeJ6AXdWqhoiBRc9AREf.jpg",
      alt: "About",
    },
    location: {
      lat: 52.371,
      lng: 10.747,
    },
  },
};
