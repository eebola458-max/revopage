import Link from "next/link";
import { APP, CONTACT_EMAIL } from "@/lib/config";
import { DownloadBand } from "./Download";
import type { DocSection } from "@/lib/docs";

type Props = {
  title: string;
  intro: string;
  sections: DocSection[];
  withDate?: boolean;
  current: "about" | "privacy" | "terms";
};

const PAGES = [
  { id: "about", href: "/about", label: "عن التطبيق" },
  { id: "privacy", href: "/privacy", label: "سياسة الخصوصية" },
  { id: "terms", href: "/terms", label: "الشروط والأحكام" },
] as const;

export default function DocPage({ title, intro, sections, withDate = true, current }: Props) {
  const toc = [...sections.map((s) => ({ id: s.id, title: s.title })), { id: "contact", title: "تواصل معنا" }];
  return (
    <>
      <div className="wrap doc-head">
        <h1 className="h1 h1--doc">{title}</h1>
        <p className="lead lead--doc">{intro}</p>
        {withDate && <p className="fine">آخر تحديث: {APP.updated} · الإصدار {APP.version}</p>}
      </div>

      <div className="wrap doc">
        <aside className="doc-side" aria-label="محتويات الصفحة">
          <p className="doc-side-title">في هذه الصفحة</p>
          <ol>
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`}>{t.title}</a></li>
            ))}
          </ol>
          <p className="doc-side-title doc-side-title--gap">صفحات أخرى</p>
          <ul>
            {PAGES.filter((p) => p.id !== current).map((p) => (
              <li key={p.id}><Link href={p.href}>{p.label}</Link></li>
            ))}
          </ul>
        </aside>

        <article className="doc-body">
          {sections.map((s) => (
            <section id={s.id} key={s.id}>
              <h2>{s.title}</h2>
              {s.body.map((b, i) =>
                typeof b === "string" ? (
                  <p key={i}>{b}</p>
                ) : (
                  <ul key={i}>
                    {b.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
          <section id="contact">
            <h2>تواصل معنا</h2>
            <p>
              لأي سؤال أو ملاحظة بخصوص هذه الصفحة أو التطبيق، تقدر تتواصل معنا من{" "}
              <a href={APP.contactUrl} rel="noopener">صفحة التواصل على GitHub</a>
              {CONTACT_EMAIL ? <> أو على البريد: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></> : null}.
            </p>
          </section>
        </article>
      </div>
      <DownloadBand title="جرّب Revo بنفسك" />
    </>
  );
}
