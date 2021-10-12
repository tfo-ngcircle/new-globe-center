import { Space } from "../space";
import { spaces } from "../../data";

export default function SpacesSection() {
  return (
    <>
      {spaces &&
        spaces.map((space) => <Space key={space.slug} space={space} />)}
    </>
  );
}
