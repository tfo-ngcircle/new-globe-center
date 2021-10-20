import { Space } from "../space";

export default function SpacesSection({ spaces }) {
  return (
    <>
      {spaces &&
        spaces.map((space) => (
          <Space
            key={space.slug}
            space={space}
            className="slide w-full pl-5 lg:pl-12 xl:pl-36"
          />
        ))}
    </>
  );
}
