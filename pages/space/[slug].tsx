import { Characteristic } from "../../components/characteristic";
import { Img } from "../../components/image";
import { Md } from "../../components/md";
import { VipPackage } from "../../components/vip-package";
import { Page } from "../../components/page";
import { Space } from "../../components/space";
import formatHeadline from "../../utils/text";
import { data } from "../../data";
import { CharacteristicType, SpaceType } from "../../typings";
import { NextSeoProps, ProductJsonLd, ProductJsonLdProps } from "next-seo";
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  space: SpaceType;
  seo: NextSeoProps;
  product?: ProductJsonLdProps;
}

export default function Room({ space, seo, product }: Props) {
  return (
    <Page seo={seo}>
      {product && <ProductJsonLd {...product} />}
      <div className="container space-y-10 md:space-y-20 mb-12">
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

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const spaces = data.spaces;
  return {
    paths: spaces.map((space) => ({
      params: {
        slug: space.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const space = data.spaces.find((it) => it.slug == params?.slug) as SpaceType;
  const seo = {
    title: space?.title,
    description: space?.description[0],
    openGraph: {
      type: "website",
      url: `https://${process.env.NEXT_PUBLIC_HOST_NAME}/space/${space.slug}`,
      title: space?.title,
      description: space?.description[0],
      images: space?.images.map((it) => ({ url: it.src })),
    },
  };
  return {
    props: { space, seo },
    revalidate: 30,
  };
};
