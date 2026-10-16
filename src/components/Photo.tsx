import { asset } from "@/lib/site";
type Props = {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};
export default function Photo({
  name,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 700px) 88vw, 50vw",
}: Props) {
  return (
    <picture className={`photo ${className}`}>
      <source
        type="image/webp"
        srcSet={`${asset(`images/${name}-480.webp`)} 480w, ${asset(`images/${name}-960.webp`)} 960w, ${asset(`images/${name}-1440.webp`)} 1440w`}
        sizes={sizes}
      />
      <img
        src={asset(`images/${name}-960.webp`)}
        alt={alt}
        width={960}
        height={1200}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
