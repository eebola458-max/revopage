import Image from "next/image";
import Link from "next/link";
import { APP } from "@/lib/config";

export default function SiteHeader() {
  return (
    <header className="wrap top">
      <Link className="brand" href="/">
        <Image src="/logo.png" alt="" width={40} height={40} priority />
        <span>{APP.name}</span>
      </Link>
      <nav className="nav" aria-label="التنقل الرئيسي">
        <Link href="/about">عن التطبيق</Link>
        <Link href="/privacy">الخصوصية</Link>
        <Link href="/terms">الشروط والأحكام</Link>
        <a className="nav-dl" href={APP.apkUrl} download rel="noopener">تنزيل</a>
      </nav>
    </header>
  );
}
