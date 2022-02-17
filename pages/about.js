import { Md } from "../components/md";
import { Page } from "../components/page";
import { about } from "src/data";

export default function About({ about }) {
  return (
    <Page>
      <div className="container space-y-4">
        <Md>{about}</Md>
      </div>
    </Page>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: { about },
    revalidate: 30,
  };
}
