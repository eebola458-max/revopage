import Image from "next/image";
import Gallery from "@/components/Gallery";
import HeroPhones from "@/components/HeroPhones";
import { APP } from "@/lib/config";

const FEATURES = [
  { title: "مجتمعات", text: "انضم لمجتمعات تهمك أو ابدأ مجتمعك، بوسوم تنظّم المنشورات وصفحة تعرّف بالأعضاء." },
  { title: "منشورات وتعليقات", text: "نص وصور، تصويت لفوق ولتحت، تعليقات وردود، وحفظ للمنشورات اللي تهمك." },
  { title: "رسائل وقصص", text: "تراسل أصحابك، تشوف طلبات المراسلة، وتنشر قصصك." },
  { title: "سلسلة الأيام", text: "كل يوم تتكلم فيه مع صاحبك يزود السلسلة 🔥 ويخليكم على تواصل." },
  { title: "مظهر مريح", text: "واجهة عربية بالكامل وإنجليزية كمان، فاتح أو داكن، وبطاقات أو عرض مضغوط." },
];

function DownloadButton({ children }: { children: React.ReactNode }) {
  return (
    <a className="btn" href={APP.apkUrl} download rel="noopener">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main>
      <header className="wrap top">
        <a className="brand" href="#">
          <Image src="/logo.png" alt="" width={40} height={40} priority />
          <span>{APP.name}</span>
        </a>
        <a className="top-link" href="#download">
          تنزيل
        </a>
      </header>

      <section className="wrap hero">
        <div className="hero-copy">
          <h1 className="h1">{APP.tagline}</h1>
          <p className="lead">
            مجتمعات ومنشورات ورسائل وقصص في تطبيق واحد، بواجهة عربية مريحة للعين.
          </p>
          <div className="hero-actions">
            <DownloadButton>تنزيل لأندرويد</DownloadButton>
            <a className="ghost" href="#screens">
              شوف الشاشات
            </a>
          </div>
          <p className="fine">الإصدار {APP.version} · ملف APK</p>
        </div>
        <HeroPhones />
      </section>

      <Gallery />

      <section className="wrap features" aria-labelledby="features-title">
        <h2 id="features-title" className="h2">
          إيه اللي هتلاقيه
        </h2>
        <dl className="feature-list">
          {FEATURES.map((f) => (
            <div className="feature" key={f.title}>
              <dt>{f.title}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="download" className="download">
        <div className="wrap download-inner">
          <Image src="/logo.png" alt="" width={96} height={96} className="download-logo" />
          <h2 className="h2 h2--light">نزّل Revo لأندرويد</h2>
          <DownloadButton>تنزيل الـ APK</DownloadButton>
          <p className="fine fine--light">
            الإصدار {APP.version}. لو ظهرت رسالة أمان وقت التثبيت، اسمح بالتثبيت من هذا المصدر من إعدادات الجهاز.
          </p>
        </div>
      </section>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} {APP.name}</span>
      </footer>
    </main>
  );
}
