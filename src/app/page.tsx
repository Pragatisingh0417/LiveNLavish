import Image from "next/image";
import Banner from "./components/Banner";
import WeddingCollection from "./components/WeddingCollection";
import AboutSection from "./components/AboutSection";
import CTA from "./components/cta";
import ShopCategories from "./components/ShopCategories";
import Testimonials from "./components/testimonials";
import OfferSection from "./components/OfferSection";
import FAQ from "./components/FAQ";
import Catalogs from "./components/Catalogs-section";
import AboutBlock from "./components/AboutBlock";
import ServicesBlock from "./components/ServicesBlock";

export default function Home() {
  return (
    <>
    <Banner />
    <AboutBlock />
    <ServicesBlock />
    <WeddingCollection />
    <CTA />
    <ShopCategories />
    <Catalogs />
    <Testimonials />
    {/* <OfferSection /> */}
    <FAQ />
    </>
  );
}
