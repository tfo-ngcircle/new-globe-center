import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const pages = await fetchApi<Entities<PageType>>(
    `/pages?filters[slug][$eq]=${params?.slug}&_locale=${locale}&populate=%2A`
  );
  return {
    props: { page: pages.data[0].attributes },
  };
};
