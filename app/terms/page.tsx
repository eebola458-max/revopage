import type { Metadata } from "next";
import DocPage from "@/components/DocPage";
import { TERMS } from "@/lib/docs";

export const metadata: Metadata = {
  title: "الشروط والأحكام — Revo",
  description: "شروط وأحكام استخدام تطبيق Revo: الحساب والمحتوى والسلوك المحظور والمسؤولية.",
};

export default function Page() {
  return (
    <DocPage
      current="terms"
      title="الشروط والأحكام"
      intro="القواعد التي تحافظ على Revo مكانًا آمنًا ومحترمًا للجميع. باستخدامك للتطبيق فأنت توافق عليها."
      sections={TERMS}
    />
  );
}
