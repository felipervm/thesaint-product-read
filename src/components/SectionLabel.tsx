export default function SectionLabel({
  number,
  title,
  aside,
}: {
  number: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="section-label flex items-start justify-between gap-6">
      <p>
        <span>{number}</span> / {title}
      </p>
      {aside && <span className="aside">{aside}</span>}
    </div>
  );
}
