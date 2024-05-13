interface StoreLinkProps {
  image: string;
  smallText: string;
  bigText: string;
  className?: string;
  link: string;
}

export default function StoreLink({
  image,
  smallText,
  bigText,
  className,
  link,
}: StoreLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex gap-3 rounded-lg px-4 py-2 ${className}`}
    >
      <img src={image} alt="image" className="w-5" />
      <div className="text-xs">
        <p>{smallText}</p>
        <p>{bigText}</p>
      </div>
    </a>
  );
}
