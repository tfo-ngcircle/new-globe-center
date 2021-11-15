import { Characteristic } from "@/components/characteristic";
import { Img } from "@/components/image";
import { Md } from "@/components/md";
import { Page } from "@/components/page";
import { Space } from "@/components/space";
import formatHeadline from "@/lib/utils/text";
import { data } from "src/data";

export default function Room({ space }) {
  return (
    <Page>
      <div className="container space-y-10 md:space-y-20">
        <Space space={space} className="h-full" isFull />
        <div className="space-y-6">
          <h3>{formatHeadline("Die Technik.")}</h3>
          <Md>{space.technology.description}</Md>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {space.technology.images.slice(0, 4).map((img, i) => (
              <Img
                key={i}
                image={img}
                className="object-cover w-full h-32 md:h-full inline"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3>{formatHeadline("Unsere Ausstattung.")}</h3>
          <p>
            Bei uns findest du 47 Parkplätze und einen großzügigen Stellplatz
            für Fahrräder. Für deine Tagung bekommst du von uns natürlich die
            Basics gestellt: Notizzettel, Stifte und Blöcke. Zusätzlich
            versorgen wir dich mit Kaffee, Tee, Wasser und ein paar Knabbereien.
          </p>
          <CharacteristicsGroup items={space.characteristics.equipment} />
        </div>
        <div className="space-y-6">
          <h4>Extras</h4>
          <p>
            Für dein erfolgreiches Meeting bieten wir zusätzlich noch folgende
            Leistungen an.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <CharacteristicsGroup items={space.extras.catering} />
            </div>
            <div>
              <CharacteristicsGroup items={space.extras.equipment} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

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
  return {
    props: { space: space },
    revalidate: 30,
  };
}
