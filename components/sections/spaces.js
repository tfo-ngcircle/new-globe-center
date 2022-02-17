import { Space } from "../space";

export default function SpacesSection({ spaces, width }) {
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
