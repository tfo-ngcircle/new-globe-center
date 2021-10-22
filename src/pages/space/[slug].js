import { Characteristic } from "@/components/characteristic";
import { Img } from "@/components/image";
import { Page } from "@/components/page";
import { Space } from "@/components/space";
import formatHeadline from "@/lib/utils/text";
import { data } from "src/data";

export default function Room({ space }) {
  return (
    <Page>
      <div className="container space-y-10 md:space-y-20 mb-9">
        <Space space={space} className="h-full" isFull />
        <div className="space-y-6">
          <h3>{formatHeadline("Die Technik.")}</h3>
          <p>
            Im CONNECT erwartet dich ein vollausgestattetes Tagungssystem mit 2
            xx“ Bildschirmen, auf denen du deine Ideen teilen und alle deine
            Partner virtuell begrüßen kannst. Das System beinhaltet eine
            hochauflösende Kamera sowie Lautsprecher und eine
            Jabra-Mikrofonanlage.
          </p>
          <div className="grid grid-cols-4 gap-4">
            {data.gallery.images.slice(0, 4).map((img, i) => (
              <Img
                key={i}
                image={img}
                className="object-cover w-full h-full inline"
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
          <div className="grid grid-cols-2 gap-8">
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
      {items.map((kc) => (
        <Characteristic it={kc} key={kc.name} />
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
