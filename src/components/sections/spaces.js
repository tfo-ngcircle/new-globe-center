import { Space } from "../space";

const spaces = [
  {
    slug: "connect",
    title: "Connect.",
    subtitle: "Deine vernetzung.",
    description:
      "Für deine digitale Zusammenarbeit über alle Grenzen hinaus bieten wir dir im Raum CONNECT hochmoderne Konferenzsysteme. Verbinde dich mit der Welt und genieße den volldigital ausgestatteten Besprechungsraum",
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
  },
  {
    slug: "create",
    title: "Create.",
    subtitle: "Deine kreativität.",
    description:
      "Effizientes Arbeiten in anregender Umgebung, natürliches Tageslicht und ein traumhaftes Ambiente – das bieten wir dir mit dem Raum CREATE. Um beste Ergebnisse zu erzielen arbeitet ihr gemeinsam, schafft effektive Workflows und könnt gemeinsam Grenzen überwinden.",
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
  },
  {
    slug: "inspire",
    title: "Inspire.",
    subtitle: "Deine inspiration.",
    description:
      "Wir setzen Grenzen nur um Sie zu überwinden. Im Raum INSPIRE erwartet dich eine Premium Ausstattung für deine Meetings. Für eine inspirierende Umgebung für berauschende Erfolge.",
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
  },
];

export default function SpacesSection() {
  return (
    <>
      {spaces &&
        spaces.map((space) => <Space key={space.slug} space={space} />)}
    </>
  );
}
