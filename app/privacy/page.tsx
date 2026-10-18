import type { Metadata } from "next";
import DocPage from "@/components/DocPage";
import { PRIVACY } from "@/lib/docs";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — Revo",
  description: "كيف يجمع تطبيق Revo بياناتك ويستخدمها ويحميها، وما هي خياراتك.",
};

export default function Page() {
  return (
    <DocPage
      current="privacy"
      title="سياسة الخصوصية"
      intro="نشرح هنا بوضوح ما نجمعه من معلومات ولماذا، ومن يراها، وكيف تتحكم فيها."
      sections={PRIVACY}
    />
  );
}
