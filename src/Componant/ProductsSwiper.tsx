"use client";

import { Sparkles, ChevronLeft, ChevronRight, Scissors } from "lucide-react";
import ProductCard from "./ProductCard";

// Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CetchenProducts, closesgProducts, floorProducts, goProducts, hairCareProducts, handPeperProducts } from "../data/products";

export default function ProductsSwiper() {
  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden" dir="rtl">
      {/* خلفيات جمالية عصرية */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* ================= قسم منتجات العناية بالشعر ================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-200 px-4 py-1.5 rounded-full text-amber-800 text-sm font-semibold shadow-2xs">
                <Scissors className="w-4 h-4 text-amber-600" />
                <span>جمالك وتألقك يبدأ من هنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                منتجات <span className="text-amber-600">العناية بالشعر و الجسم</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                تركيبات غنية بالزيوت الطبيعية والكيراتين المغذي لحماية شعرك، تقوية بصيلاته، ومنحه لمعاناً ونعومة لا تقاوم.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                id="hair-prev"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                id="hair-next"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation={{ prevEl: "#hair-prev", nextEl: "#hair-next" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-14 pt-2 px-1"
          >
            {hairCareProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         {/* ================= قسم منتجات المنظفات والمطهرات ================= */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 px-4 py-1.5 rounded-full text-blue-700 text-sm font-semibold shadow-2xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>أفضل خيارات النظافة والتعقيم للمنزل</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                تشكيلة منتجات <span className="text-blue-600">المنظفات للملابس</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                حلول التنظيف المتطورة وقاهرة الدهون لضمان أقصى حماية ونظافة فائقة لجميع أركان منزلك ومؤسستك.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                id="cleaning-prev"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                id="cleaning-next"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: "#cleaning-prev", nextEl: "#cleaning-next" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-14 pt-2 px-1"
          >
            {closesgProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         {/* ================= قسم منتجات المنظفات المطبخ و الاواعي ================= */}
          <div className="pt-8 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 px-4 py-1.5 rounded-full text-blue-700 text-sm font-semibold shadow-2xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>أفضل خيارات النظافة والتعقيم للمنزل</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                تشكيلة منتجات <span className="text-blue-600">المنظفات المطبخ</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                حلول التنظيف المتطورة وقاهرة الدهون لضمان أقصى حماية ونظافة فائقة لجميع أركان منزلك ومؤسستك.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                id="cleaning-prev"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                id="cleaning-next"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: "#cleaning-prev", nextEl: "#cleaning-next" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-14 pt-2 px-1"
          >
            {CetchenProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
                           {/* ================= قسم منتجات منظف يدين و مناديل ================= */}

           <div className="pt-8 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 px-4 py-1.5 rounded-full text-blue-700 text-sm font-semibold shadow-2xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>أفضل خيارات النظافة والتعقيم للمنزل</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                تشكيلة منتجات <span className="text-blue-600">مطهر يد و مناديل</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                حلول التنظيف المتطورة وقاهرة الدهون لضمان أقصى حماية ونظافة فائقة لجميع أركان منزلك ومؤسستك.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                id="cleaning-prev"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                id="cleaning-next"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: "#cleaning-prev", nextEl: "#cleaning-next" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-14 pt-2 px-1"
          >
            {handPeperProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
             {/* ================= قسم منتجات منظفات ارضيات ================= */}

           <div className="pt-8 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 px-4 py-1.5 rounded-full text-blue-700 text-sm font-semibold shadow-2xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>أفضل خيارات النظافة والتعقيم للمنزل</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                تشكيلة منتجات <span className="text-blue-600">منظفات ارضيات</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                حلول التنظيف المتطورة وقاهرة الدهون لضمان أقصى حماية ونظافة فائقة لجميع أركان منزلك ومؤسستك.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                id="cleaning-prev"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                id="cleaning-next"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: "#cleaning-prev", nextEl: "#cleaning-next" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-14 pt-2 px-1"
          >
            {floorProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
             {/* ================= قسم منتجات   ================= */}

           <div className="pt-8 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl text-right">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 px-4 py-1.5 rounded-full text-blue-700 text-sm font-semibold shadow-2xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>أفضل خيارات النظافة والتعقيم للمنزل</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                تشكيلة منتجات <span className="text-blue-600">ملمع زجاج و خشب ومعطر جو</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                حلول التنظيف المتطورة وقاهرة الدهون لضمان أقصى حماية ونظافة فائقة لجميع أركان منزلك ومؤسستك.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                id="cleaning-prev"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                id="cleaning-next"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{ prevEl: "#cleaning-prev", nextEl: "#cleaning-next" }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-14 pt-2 px-1"
          >
            {goProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}