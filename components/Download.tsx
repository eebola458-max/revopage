import Image from "next/image";
import { APP } from "@/lib/config";

export function DownloadButton({ children }: { children: React.ReactNode }) {
  return (
    <a className="btn" href={APP.apkUrl} download rel="noopener">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </a>
  );
}

export function DownloadBand({ title = "نزّل Revo لأندرويد" }: { title?: string }) {
  return (
    <section id="download" className="download">
      <div className="wrap download-inner">
        <Image src="/logo.png" alt="" width={96} height={96} className="download-logo" />
        <h2 className="h2 h2--light">{title}</h2>
        <DownloadButton>تنزيل الـ APK</DownloadButton>
        <p className="fine fine--light">
          الإصدار {APP.version}. لو ظهرت رسالة أمان وقت التثبيت، اسمح بالتثبيت من هذا المصدر من إعدادات الجهاز.
        </p>
      </div>
    </section>
  );
}
