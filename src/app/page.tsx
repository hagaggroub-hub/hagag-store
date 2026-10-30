import Image from "next/image";
import { Suspense } from "react";
import ProductsSwiper from "../Componant/ProductsSwiper";
import HeroSection from "../Componant/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Suspense fallback={<div>loading ...</div>}>
              <ProductsSwiper/>

      </Suspense>
    </div>
  );
}
