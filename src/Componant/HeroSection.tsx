import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-blue-50/30 to-white py-16 lg:py-24" dir="rtl">
      {/* Background Subtle Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 px-4 py-1.5 rounded-full text-blue-700 text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>جودة فائقة ونظافة تدوم طويلاً</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.25] tracking-tight">
              عالم من النظافة والانتعاش مع{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent block mt-1">
                مجموعة حجاج جروب
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              نقدم لكم أقوى حلول التنظيف للمنازل والمؤسسات بأعلى معايير الجودة والأمان. منظفات متطورة تضمن لك نظافة عميقة ورائحة منعشة تدوم.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-slate-700 text-sm font-medium">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>منظفات آمنة 100%</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>سرعه توصيل</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>أسعار تنافسية</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#products"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/25 transition-all hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>استكشف منتجاتنا</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
            href="tel:⁦+20 10 27766403⁩"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-4 rounded-xl border border-slate-200 transition-all shadow-sm text-base"
              >
                <span>تواصل مع المبيعات</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase (مكان الصورة) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-sky-400 to-blue-600 p-1 shadow-2xl shadow-blue-500/20">
              
              {/* الحاوية الرئيسية بجمالية متناسقة */}
              <div className="w-full h-full bg-slate-900 rounded-[22px] overflow-hidden relative flex flex-col items-center justify-center p-4 border border-white/20">
                
                {/* 📌 الصورة تظهر كاملة بالكامل وبدون أي قص */}
                <div className="relative w-full h-full pb-10">
                  <Image
                    src="/homeImage.jpeg"
                    alt="حجاج جروب للمنظفات"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating Badge Example */}
              
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}