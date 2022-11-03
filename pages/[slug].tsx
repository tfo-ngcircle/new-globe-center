import { GetStaticProps } from "next";
import { stringify } from "qs";
import { Md } from "../components/md";
import { Page } from "../components/page";
import { fetchApi } from "../lib/api";
import { Entities, PageType } from "../typings";

interface Props {
  page?: PageType;
}

export default function SimplePage({ page }: Props) {
  return (
    <Page page={page}>
      <div className="container space-y-4 mb-12">
        <Md>{page?.markdown}</Md>
      </div>
    </Page>
  );
}

export async function getStaticPaths() {
  const query = stringify({ fields: "slug" }, { encodeValuesOnly: true });
  const pages = await fetchApi<Entities<PageType>>(`/pages?${query}`);
  return {
    paths: pages.data?.map((page) => {
      return { params: { slug: page.attributes.slug } };
    }),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const query = stringify(
    {
      filters: {
        slug: {
          $eq: params?.slug,
        },
      },
      populate: "*",
      _locale: locale,
    },
    {
      encodeValuesOnly: true,
    }
  );

  const pages = await fetchApi<Entities<PageType>>(`/pages?${query}`);

  if (pages.data!.length < 1)
    return { redirect: { destination: "/", permanent: false } };

  return {
    props: { page: pages.data![0].attributes },
  };
};
