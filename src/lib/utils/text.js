export default function formatHeadline(headline) {
  return headline.split(".").map((part) =>
    part.length > 0 ? (
      <>
        {part}
        <span className="text-primary">.</span>
        <br />
      </>
    ) : undefined
  );
}
