import Gallery from "@/components/Gallery";
import HeroPhones from "@/components/HeroPhones";
import { DownloadBand, DownloadButton } from "@/components/Download";
import { APP } from "@/lib/config";
import Link from "next/link";

const FEATURES = [
  { title: "مجتمعات", text: "انضم لمجتمعات تهمك أو ابدأ مجتمعك، بوسوم تنظّم المنشورات وصفحة تعرّف بالأعضاء." },
  { title: "منشورات وتعليقات", text: "نص وصور، تصويت لفوق ولتحت، تعليقات وردود، وحفظ للمنشورات اللي تهمك." },
  { title: "رسائل وقصص", text: "تراسل أصحابك بالصور والصوت والملصقات، وتنشر قصصك." },
  { title: "سلسلة الأيام", text: "كل يوم تتكلم فيه مع صاحبك يزود السلسلة 🔥 ويخليكم على تواصل." },
  { title: "خصوصية بإيدك", text: "حساب خاص، حظر، وتحكم في من يراسلك ومن يشوف متابعينك." },
  { title: "مظهر مريح", text: "واجهة عربية بالكامل وإنجليزية كمان، فاتح أو داكن، وبطاقات أو عرض مضغوط." },
];

export default function Page() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-copy">
          <h1 className="h1">
            <span>تشبهك</span> <span>في كل شيء</span>
          </h1>
          <p className="hero-lead">
            مجتمعات ومنشورات ورسائل وقصص في تطبيق واحد، بواجهة عربية مريحة للعين.
          </p>
          <div className="hero-actions">
            <DownloadButton>تنزيل لأندرويد</DownloadButton>
            <a className="ghost" href="#screens">شوف الشاشات</a>
          </div>
          <p className="fine">الإصدار {APP.version} · ملف APK</p>
          <ul className="hero-facts" aria-label="مميزات سريعة">
            <li>عربي بالكامل</li>
            <li>فاتح وداكن</li>
            <li>خصوصية بإيدك</li>
          </ul>
        </div>
        <HeroPhones />
      </section>

      <Gallery />

      <section className="wrap features" aria-labelledby="features-title">
        <h2 id="features-title" className="h2">إيه اللي هتلاقيه</h2>
        <dl className="feature-list">
          {FEATURES.map((f) => (
            <div className="feature" key={f.title}>
              <dt>{f.title}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>
        <p className="more">
          عايز تعرف أكتر؟ <Link href="/about">اقرأ التعريف الكامل بالتطبيق</Link>.
        </p>
      </section>

      <DownloadBand />
    </>
  );
}
