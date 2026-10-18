# Revo — Landing Page (Next.js + TypeScript)

## 1) ارفع الـ APK على GitHub
1. على الريبو بتاعك: **Releases → Draft a new release**.
2. Tag: `v1.12` .
3. اسحب ملف الـ APK **باسم ثابت**: `Revo.apk` (غيّر اسم الملف قبل الرفع).
4. اضغط **Publish release**.

الرابط المباشر لأحدث إصدار بيبقى:
`https://github.com/USERNAME/REPO/releases/latest/download/Revo.apk`

## 2) حط الرابط في المشروع
افتح `lib/config.ts` وعدّل `GITHUB_USER` و `GITHUB_REPO`.
(أو من Vercel: Settings → Environment Variables → `NEXT_PUBLIC_APK_URL` بالرابط الكامل.)

## 3) النشر على Vercel
- ارفع المجلد ده على ريبو GitHub، وبعدها Vercel → Add New → Project → اختار الريبو → Deploy.
- أو محليًا: `npm install` ثم `npm run dev`.

## تغيير الصور
الشاشات في `public/screens/` والنصوص في `SCREENS` داخل `lib/config.ts`.
