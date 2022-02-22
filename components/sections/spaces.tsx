import { SpaceType } from "../../typings";
import { Space } from "../space";

interface Props {
  spaces: SpaceType[];
  width: number;
}

export default function SpacesSection({ spaces, width }: Props) {
  return (
    <>
      {spaces &&
        spaces.map((space) => (
          <Space
            key={space.slug}
            space={space}
            className={`${width >= 1024 ? "slide" : "pt-10"}`}
          />
        ))}
    </>
  );
}
