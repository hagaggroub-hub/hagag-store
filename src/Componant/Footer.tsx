"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* شبكة من 3 أعمدة متناسقة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              
              {/* اللوجو الخاص بالشركة */}
              <div className="relative w-12 h-12 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="حجاج جروب"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-xl font-bold text-white tracking-wide">
                حجاج جروب
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              شركة رائدة في مجال تصنيع وتوريد المنظفات والمطهرات ذات الجودة العالية، نوفر أفضل المكونات والتركيبات لضمان أقصى حماية ونظافة.
            </p>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/share/1DQTQbo7vh/"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok Icon SVG 🎵 */}
              <a
                href="https://www.tiktok.com/@user966703326706?_r=1&_t=ZS-9AkEREqK45i"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all border border-transparent hover:border-slate-700"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.28 2.56.02 1.04.57 2.03 1.44 2.58.82.52 1.88.62 2.8.28.89-.31 1.6-1.04 1.87-1.96.11-.47.16-.96.15-1.45.02-4.99.01-9.97.01-14.96z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:justify-self-center">
            <h4 className="text-white font-semibold text-lg mb-4 border-r-4 border-blue-500 pr-3">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-blue-400 transition-colors">
                  قائمة المنتجات
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-r-4 border-blue-500 pr-3">
              معلومات الاتصال
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>قنا . دشنا . فاو بحري</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span dir="ltr">01091832103</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span dir="ltr">01027766403</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>info@hajjaggroup.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>©  حجاج جروب للمنظفات. جميع الحقوق محفوظة.</p>
          <p className="font-medium text-slate-400">
            تم تطويره بواسطة <span className="text-blue-400 font-bold">ALI RABEA</span>
          </p>
        </div>

      </div>
    </footer>
  );
}