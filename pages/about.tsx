import { Md } from "../components/md";
import { Page } from "../components/page";
import { about } from "../data";

export default function About({ about }: { about: string }) {
  return (
    <Page seo={{ title: "Über uns" }}>
      <div className="container space-y-4 mb-12">
        <Md>{about}</Md>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: { about },
    revalidate: 30,
  };
}
