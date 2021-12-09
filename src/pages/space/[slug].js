import { Characteristic } from "@/components/characteristic";
import { Img } from "@/components/image";
import { Md } from "@/components/md";
import { VipPackage } from "@/components/vip-package";
import { Page } from "@/components/page";
import { Space } from "@/components/space";
import formatHeadline from "@/lib/utils/text";
import { data } from "src/data";

export default function Room({ space }) {
  return (
    <Page seo={space.seo}>
      <div className="container space-y-10 md:space-y-20">
        <Space space={space} className="h-full" isFull />
        <Section title="Die Technik.">
          <Md>{space.technology.description}</Md>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {space.technology.images?.slice(0, 4).map((img, i) => (
              <Img
                key={i}
                image={img}
                className="object-cover w-full h-32 md:h-full inline"
              />
            ))}
          </div>
        </Section>
        <Section title="Unsere Ausstattung.">
          <p>
            Bei uns finden Sie 47 Parkplätze und einen großzügigen Stellplatz
            für Fahrräder. In Ihrer Tagung sind die Basics inkludiert.
          </p>
          <CharacteristicsGroup items={space.characteristics.equipment} />
        </Section>
        <Section title="Erlebnispaket.">
          <p>
            Wir bieten Ihnen die Möglichkeit, Ihre Konferenz, Schulung oder Ihr
            Businessmeeting angemessen ausklingen zu lassen. Nutzen Sie unsere
            Erlebnispakete für ein gemeinsames Zusammensein nach der Arbeit.
            Dafür bereiten wir für Sie unser Foyer Spectrum oder nach Wunsch
            unsere Terrasse für ein Genusserlebnis vor.
          </p>
          <div className="grid lg:grid-cols-3 gap-7">
            {space.vip.map((it) => (
              <VipPackage
                key={it.title}
                title={it.title}
                description={it.description}
                image={it.image}
              />
            ))}
          </div>
        </Section>
        <Section title="Fahrservice.">
          <Md>{`Mit unserem exklusiven Fahrservice haben Sie die Möglichkeit, stilgerecht zu Ihrer Schulung zu erscheinen. Als das gewisse Extra bieten wir Ihnen einen individuellen Fahrdienst mit Chauffeur, der Ihr perfektes Meeting abrundet.
Lassen Sie Ihre Kunden vom Hotel abholen, oder sorgen Sie dafür, dass Ihr Team stressfrei vom Flughafen zur Location kommt. Unser Fahrdienst ist genau wie Sie – flexibel und hochprofessionell. Sprechen Sie uns an für ein ganz auf Sie zugeschnittenes Angebot.
`}</Md>
        </Section>
        <Section title="Extras.">
          <p>
            Für Ihr erfolgreiches Meeting bieten wir zusätzlich noch folgende
            Leistungen an.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <CharacteristicsGroup items={space.extras.catering} />
            </div>
            <div>
              <CharacteristicsGroup items={space.extras.equipment} />
            </div>
          </div>
        </Section>
      </div>
    </Page>
  );
}

export const Section = ({ title, children }) => {
  return (
    <div className="space-y-6">
      <h3>{formatHeadline(title)}</h3>
      {children}
    </div>
  );
};

export const CharacteristicsGroup = ({ items }) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {items.map((kc, i) => (
        <Characteristic it={kc} key={kc.name + i} />
      ))}
    </div>
  );
};

export async function getStaticPaths() {
  const spaces = data.spaces;
  return {
    paths: spaces.map((space) => ({
      params: {
        slug: space.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const space = data.spaces.find((it) => it.slug == params.slug);
  space.seo = {
    metaTitle: space.title,
    metaDescription: space.description,
    shareImage: space.images[0],
  };
  return {
    props: { space: space },
    revalidate: 30,
  };
}
