import Phone from "./Phone";
import { SCREENS } from "@/lib/config";

export default function Gallery() {
  return (
    <section id="screens" className="gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <h2 id="gallery-title" className="h2">
          شوف التطبيق من جوه
        </h2>
        <p className="lead">اسحب يمين وشمال، ومرّر على أي شاشة عشان تتعدل في وشك.</p>
      </div>
      <ul className="rail" tabIndex={0} aria-label="شاشات التطبيق">
        {SCREENS.map((s) => (
          <li className="rail-item" key={s.id}>
            <div className="rail-phone">
              <Phone src={s.src} alt={s.alt} sizes="(max-width: 800px) 60vw, 260px" />
            </div>
            <h3 className="rail-title">{s.title}</h3>
            <p className="rail-text">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
