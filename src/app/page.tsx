import Image from "next/image";
import Banner from "./components/Banner";
import WeddingCollection from "./components/WeddingCollection";
import AboutSection from "./components/AboutSection";
import CTA from "./components/cta";
import ShopCategories from "./components/ShopCategories";
import Testimonials from "./components/testimonials";
import OfferSection from "./components/OfferSection";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
    <Banner />
    <AboutSection />
    <WeddingCollection />
    <CTA />
    <ShopCategories />
    <Testimonials />
    <OfferSection />
    <FAQ />
    </>
  );
}
