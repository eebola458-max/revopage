import Link from "next/link";
import { APP, REPO_URL } from "@/lib/config";

export default function SiteFooter() {
  return (
    <footer className="wrap foot">
      <span>© {new Date().getFullYear()} {APP.name}</span>
      <nav className="foot-nav" aria-label="روابط التذييل">
        <Link href="/about">عن التطبيق</Link>
        <Link href="/privacy">سياسة الخصوصية</Link>
        <Link href="/terms">الشروط والأحكام</Link>
        <a href={APP.contactUrl} rel="noopener">تواصل معنا</a>
        <a href={REPO_URL} rel="noopener">GitHub</a>
      </nav>
    </footer>
  );
}
