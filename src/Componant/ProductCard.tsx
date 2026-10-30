"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  Star,
  ShoppingBag,
  MessageCircle,
  Heart,
  Droplets,
  X,
  Plus,
  Minus,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export interface Product {
  id: number;
  name: string;
  size: string;
  add: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);

  const { addToCart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const openModal = () => {
    setQuantity(1);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsOpen(false);
  };

  const modalContent = isOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md transition-all animate-fadeIn"
      onClick={closeModal}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto border border-slate-100"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        {/* زر الإغلاق */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 left-4 z-20 w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-slate-50 shadow-lg transition-all cursor-pointer border border-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* الجزء المخصص للصورة */}
        <div
          className={`w-full md:w-5/12 ${
            product.image
              ? "bg-slate-900"
              : `bg-gradient-to-tr `
          } relative flex flex-col items-center justify-center text-white shrink-0 min-h-[260px] overflow-hidden`}
        >
          {product.image ? (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
              <Droplets className="w-16 h-16 opacity-90 drop-shadow-lg mb-3 animate-pulse relative z-10" />
            </>
          )}
        </div>

        {/* تفاصيل المنتج والمعلومات */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-right bg-gradient-to-b from-white to-slate-50/50">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 font-extrabold text-xs mb-1.5"></div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {product.name}
              </h3>
              <div className="relative z-10 mt-auto p-6 flex flex-col items-center text-center w-full">
                <span className="text-lg font-semibold text-black">
                  حجم العبوة: {product.size}
                </span>
                <span className="text-lg font-semibold  text-black">
                   عدد القطع الموجوده في الكرتونه: {product.add}
                </span>
              </div>
            </div>

            {/* المميزات الرئيسية */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <div className="space-y-2"></div>
            </div>
          </div>

          {/* اختيار الكمية وأزرار الإضافة للسلة أو الواتساب */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs">
              <span className="text-xs font-bold text-slate-800">
                الكمية المطلوبة:
              </span>
              <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-bold text-sm text-slate-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* زر إضافة للسلة */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-sm font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>إضافة إلى سلة الطلبات</span>
            </button>

            {/* زر طلب مباشر عبر واتساب */}
            <a
              href={`https://wa.me/201027766403?text=${encodeURIComponent(
                `مرحباً حجاج جروب، أريد طلب هذا المنتج مباشرة:\n- الاسم: ${product.name}\n- العبوة: ${product.size}\n- الكمية: ${quantity}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>طلب مباشر عبر واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* 📌 كارد المنتج الرئيسي */}
      <div
        onClick={openModal}
        className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden relative cursor-pointer select-none"
      >
        {/* Visual Area */}
        <div className="relative w-full h-56 overflow-hidden bg-slate-100">
          {product.image ? (
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-tr  flex flex-col items-center justify-center text-white p-6 transition-transform duration-700 group-hover:scale-110 relative`}
            >
              <div className="absolute inset-0 bg-black/10" />
              <Droplets className="w-16 h-16 opacity-90 drop-shadow-lg mb-3 animate-pulse relative z-10" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

          {/* Favorite Button */}
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1 text-amber-500 font-extrabold"></div>
              <span className="bg-slate-100/80 text-slate-700 px-3 py-1 rounded-lg font-bold text-[11px]">
                العبوة: {product.size}
              </span>
              <span className="bg-slate-100/80 text-slate-700 px-3 py-1 rounded-lg font-bold text-[11px]">
                الكرتونه: {product.add} قطع
              </span>
            </div>

            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug min-h-[3rem] flex items-center">
              {product.name}
            </h3>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-center">
            <span className="w-full text-center text-xs text-blue-600 font-bold bg-blue-50/80 group-hover:bg-blue-600 group-hover:text-white py-3 rounded-xl transition-all shadow-2xs">
              عرض التفاصيل والطلب
            </span>
          </div>
        </div>
      </div>

      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
}
