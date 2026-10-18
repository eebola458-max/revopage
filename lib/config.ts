// رابط تنزيل الـ APK المباشر من GitHub Releases
const DEFAULT_APK_URL =
  "https://github.com/eebola458-max/revopage/releases/download/revo/revo.app.apk";

export const REPO_URL = "https://github.com/eebola458-max/revopage";
// للتواصل: بيستخدم صفحة Issues في الريبو. لو عايز تضيف إيميل، اكتبه هنا وهيظهر تلقائيًا.
export const CONTACT_EMAIL = "";

export const APP = {
  name: "Revo",
  tagline: "تشبهك في كل شيء",
  version: "1.12",
  updated: "18 أكتوبر 2026",
  apkUrl: process.env.NEXT_PUBLIC_APK_URL ?? DEFAULT_APK_URL,
  contactUrl: `${REPO_URL}/issues`,
} as const;

export type Screen = {
  id: string;
  src: string;
  alt: string;
  title: string;
  text: string;
};

export const SCREENS: Screen[] = [
  { id: "home", src: "/screens/home.webp", alt: "الصفحة الرئيسية في Revo", title: "الرئيسية", text: "كل المنشورات في مكان واحد، رتّبها حسب الرائج أو الجديد أو الأفضل." },
  { id: "feed", src: "/screens/feed.webp", alt: "منشورات مع تصويت وتعليقات", title: "تصويت وتعليقات", text: "صوّت للمنشور، علّق عليه، أعد نشره أو احفظه لبعدين." },
  { id: "post", src: "/screens/post.webp", alt: "منشور نصي مع صورة", title: "منشورات بالنص والصور", text: "اكتب اللي في بالك وضيف صورك، وشوف عدد المشاهدات." },
  { id: "community", src: "/screens/community.webp", alt: "صفحة مجتمع", title: "المجتمعات", text: "لكل مجتمع صفحته وأعضاؤه ووسومه، وتقدر تنضم أو تغادر بضغطة." },
  { id: "profile", src: "/screens/profile.webp", alt: "الملف الشخصي", title: "حسابك", text: "نقاط ومستويات وشارة توثيق وقصص، وكل منشوراتك وتعليقاتك." },
  { id: "activity", src: "/screens/activity.webp", alt: "شاشة النشاط", title: "النشاط", text: "تعرف مين علّق على منشورك أو بدأ يتابعك أول بأول." },
  { id: "inbox", src: "/screens/inbox.webp", alt: "الرسائل والقصص", title: "الرسائل والقصص", text: "محادثات وطلبات مراسلة وقصص، وسلسلة 🔥 للأيام المتتالية." },
  { id: "settings", src: "/screens/settings.webp", alt: "الإعدادات", title: "الإعدادات", text: "عربي أو English، فاتح أو داكن، بطاقات أو عرض مضغوط." },
];
