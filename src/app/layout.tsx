import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "../Componant/Header";
import Footer from "../Componant/Footer";
import { CartProvider } from "../context/CartContext";

// استدعاء خط Cairo من Google Fonts
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "حجاج جروب للمنظفات",
  description: "عالم من النظافة والانتعاش مع مجموعة حجاج جروب",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* تطبيق الخط مباشرة على الـ body */}
      <body className={`${cairo.className} antialiased bg-white text-slate-900`}>
        
        <CartProvider>
          <Header/>
            {children}
            <Footer/>  
        </CartProvider>
                
      </body>
    </html>
  );
}