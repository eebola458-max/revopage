// ✏️ عدّل هنا بس:
// بعد ما ترفع الـ APK في GitHub Releases، حط اسم حسابك واسم الريبو.
// اسم الملف لازم يفضل ثابت (Revo.apk) عشان الرابط يفضل شغال مع كل إصدار جديد.
const GITHUB_USER = "YOUR_USERNAME";
const GITHUB_REPO = "YOUR_REPO";
const APK_FILE = "Revo.apk";

export const APP = {
  name: "Revo",
  tagline: "تشبهك في كل شيء",
  version: "1.12",
  // رابط تنزيل مباشر لأحدث إصدار. ممكن تتخطاه بمتغير NEXT_PUBLIC_APK_URL في Vercel.
  apkUrl:
    process.env.NEXT_PUBLIC_APK_URL ??
    `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/latest/download/${APK_FILE}`,
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
