export default function formatHeadline(headline) {
  return headline.split(".").map((part, i) =>
    part.length > 0 ? (
      <span key={i}>
        {part}
        <span className="text-primary">.</span>
        <br />
      </span>
    ) : undefined
  );
}
