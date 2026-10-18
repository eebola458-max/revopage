import type { Metadata } from "next";
import DocPage from "@/components/DocPage";
import { ABOUT } from "@/lib/docs";

export const metadata: Metadata = {
  title: "عن Revo — تطبيق المجتمعات العربي",
  description: "تعرّف على Revo: المجتمعات والمنشورات والرسائل والقصص والخصوصية وطريقة التثبيت على أندرويد.",
};

export default function Page() {
  return (
    <DocPage
      current="about"
      title="تعرّف على Revo"
      intro="كل اللي محتاج تعرفه عن التطبيق: إيه اللي فيه، وإزاي تتحكم في خصوصيتك، وإزاي تنزّله."
      sections={ABOUT}
      withDate={false}
    />
  );
}
