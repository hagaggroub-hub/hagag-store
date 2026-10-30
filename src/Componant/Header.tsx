"use client";
import Image from "next/image";
import { ShoppingBag, X, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart, totalItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();

  // إرسال طلب السلة بالكامل عبر الواتساب
  const checkoutWhatsApp = () => {
    let message = "مرحباً حجاج جروب، أريد طلب المنتجات التالية:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n   - العبوة: ${item.product.size}\n   - الكمية: ${item.quantity}\n\n`;
    });
    message += "أرجو تأكيد الطلب وتكلفة الشحن.";

    const url = `https://wa.me/201091832103?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* الشعار واسم الشركة */}
          <div className="flex items-center gap-3">
            <div className="w-13 h-13 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20">
              <Image
              src="/logo.jpeg"
              alt="logo"
              width={200}
              height={340}
              />
            </div>
            <div>
              <span className="text-lg font-black text-slate-900 block leading-none">حجاج جروب</span>
              <span className="text-[11px] font-semibold text-blue-600">للمنظفات </span>
            </div>
          </div>

          {/* 🔗 الروابط والأقسام الرئيسية */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#products" className="hover:text-blue-600 transition-colors">
              المنتجات
            </a>
            <a 
              href="https://wa.me/201027766403" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-600 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>تواصل معنا</span>
            </a>
          </nav>

          {/* زر سلة التسوق في الهيدر */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2.5 bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-600 px-5 py-2.5 rounded-2xl transition-all cursor-pointer border border-slate-200/60"
            aria-label="سلة التسوق"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-xs font-bold hidden sm:inline">سلة المنتجات</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[11px] font-extrabold w-6 h-6 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {totalItems}
              </span>
            )}
          </button>

        </div>
      </header>

      {/* 📌 نافذة سلة التسوق الجانبية (Cart Drawer) */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-slate-950/60 backdrop-blur-xs flex justify-end transition-all animate-fadeIn"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* رأس السلة */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-black text-slate-900">سلة طلباتك ({totalItems})</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* محتوى السلة */}
            <div className="flex-grow py-6 space-y-4 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-3">
                  <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto stroke-1" />
                  <p className="text-slate-500 font-bold text-sm">سلة المنتجات فارغة حالياً</p>
                  <p className="text-slate-400 text-xs">تصفح المنتجات وأضف ما يعجبك لتطلبه دفعة واحدة!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-xl ${item.product.image ? "bg-white" : `bg-gradient-to-tr `} flex items-center justify-center shrink-0 overflow-hidden`}>
                        {item.product.image ? (
                          <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain" />
                        ) : (
                          <ShoppingBag className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{item.product.name}</h4>
                        <span className="text-[11px] text-slate-500 block">العبوة: {item.product.size}</span>
                        <span className="text-xs font-extrabold text-blue-600 mt-1 block">الكمية: {item.quantity}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="w-9 h-9 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* تذييل السلة وإرسال الطلب للواتساب */}
            {cart.length > 0 && (
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <button
                  type="button"
                  onClick={checkoutWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-6 py-4 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>إرسال الطلب كاملاً عبر واتساب</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}