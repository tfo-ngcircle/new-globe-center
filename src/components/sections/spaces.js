import { Space } from "../space";

const spaces = [
  {
    tag: "connect",
    title: "Connect.",
    subtitle: "Deine vernetzung.",
    description:
      "Für deine digitale Zusammenarbeit über alle Grenzen hinaus bieten wir dir im Raum CONNECT hochmoderne Konferenzsysteme. Verbinde dich mit der Welt und genieße den volldigital ausgestatteten Besprechungsraum",
  },
  {
    tag: "create",
    title: "Create.",
    subtitle: "Deine kreativität.",
    description:
      "Effizientes Arbeiten in anregender Umgebung, natürliches Tageslicht und ein traumhaftes Ambiente – das bieten wir dir mit dem Raum CREATE. Um beste Ergebnisse zu erzielen arbeitet ihr gemeinsam, schafft effektive Workflows und könnt gemeinsam Grenzen überwinden.",
  },
  {
    tag: "inspire",
    title: "Inspire.",
    subtitle: "Deine inspiration.",
    description:
      "Wir setzen Grenzen nur um Sie zu überwinden. Im Raum INSPIRE erwartet dich eine Premium Ausstattung für deine Meetings. Für eine inspirierende Umgebung für berauschende Erfolge.",
  },
];

export default function SpacesSection() {
  return (
    <>
      <Space id="connect" />
      <Space id="create" />
      <Space id="inspire" />
    </>
  );
}
