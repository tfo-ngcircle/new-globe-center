import { Characteristic } from "../../components/characteristic";
import { Img } from "../../components/image";
import { Md } from "../../components/md";
import { VipPackage } from "../../components/vip-package";
import { Page } from "../../components/page";
import { Space } from "../../components/space";
import formatHeadline from "../../utils/text";
import {
  CharacteristicType,
  Entities,
  PageType,
  SpaceType,
} from "../../typings";
import { ProductJsonLd, ProductJsonLdProps } from "next-seo";
import React from "react";
import { GetServerSideProps } from "next";
import { stringify } from "qs";
import { fetchApi } from "../../lib/api";

interface Props {
  space: SpaceType;
  page: PageType;
  product?: ProductJsonLdProps;
}

export default function Room({ space, page, product }: Props) {
  return (
    <Page page={page}>
      {product && <ProductJsonLd {...product} />}
      <div className="container space-y-10 md:space-y-20 mb-12">
        <Space space={space} className="h-full" isFull />
        <Section title="Die Technik.">
          <Md>{space.technology.description}</Md>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {space.technology.images?.data?.slice(0, 4).map((img, i) => (
              <Img
                key={i}
                image={img.attributes}
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
          <CharacteristicsGroup
            items={space.characteristics.equipment.data!.map(
              (it) => it.attributes
            )}
          />
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
            {space.vip_packages.data?.map((it) => (
              <VipPackage
                key={it.id}
                title={it.attributes.title}
                description={it.attributes.description}
                image={it.attributes.image.data.attributes}
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
              <CharacteristicsGroup
                items={space.extras.key.data!.map((it) => it.attributes)}
              />
            </div>
            <div>
              <CharacteristicsGroup
                items={space.extras.equipment.data!.map((it) => it.attributes)}
              />
            </div>
          </div>
        </Section>
      </div>
    </Page>
  );
}

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-6">
      <h3>{formatHeadline(title)}</h3>
      {children}
    </div>
  );
};

export const CharacteristicsGroup = ({
  items,
}: {
  items: CharacteristicType[];
}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {items.map((kc, i) => (
        <Characteristic it={kc} key={kc.name + i} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const query = stringify(
    {
      fields: [
        "title",
        "slug",
        "subtitle",
        "shortDescription",
        "longDescription",
        "availability",
      ],
      filters: {
        slug: {
          $eq: params?.slug,
        },
      },
      populate: {
        characteristics: {
          populate: "*",
        },
        extras: {
          populate: "*",
        },
        technology: {
          populate: "*",
        },
        images: {
          populate: "*",
        },
        prices: {
          populate: "*",
        },
        vip_packages: {
          populate: "*",
        },
      },
      _locale: locale,
    },
    {
      encodeValuesOnly: true,
    }
  );

  const spaces = await fetchApi<Entities<SpaceType>>(`/spaces?${query}`);

  if (spaces.data!.length < 1) return { notFound: true };

  const space = spaces.data![0].attributes;

  const page = {
    title: space.title,
    description: space.shortDescription,
    images: space.images,
  };

  return {
    props: { space, page },
  };
};
