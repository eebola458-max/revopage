import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

/** إطار iPhone مرسوم بـ CSS. العرض بيتحكم فيه المتغير --w من العنصر الأب. */
export default function Phone({ src, alt, priority = false, sizes = "260px" }: Props) {
  return (
    <div className="phone">
      <span className="phone-btn phone-btn--action" aria-hidden />
      <span className="phone-btn phone-btn--up" aria-hidden />
      <span className="phone-btn phone-btn--down" aria-hidden />
      <span className="phone-btn phone-btn--power" aria-hidden />
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1530}
          sizes={sizes}
          priority={priority}
          draggable={false}
        />
        <span className="phone-island" aria-hidden />
      </div>
    </div>
  );
}
