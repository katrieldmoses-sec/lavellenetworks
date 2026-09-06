import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Products from "@/components/sections/Products";
import Architecture from "@/components/sections/Architecture";
import WhyChoose from "@/components/sections/WhyChoose";
import Industries from "@/components/sections/Industries";
import Proven from "@/components/sections/Proven";
import Timeline from "@/components/sections/Timeline";
import Insights from "@/components/sections/Insights";
import Recognition from "@/components/sections/Recognition";
import BuiltInIndia from "@/components/sections/BuiltInIndia";
import Investment from "@/components/sections/Investment";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
        <Hero />
        <Stats />
        <Products />
        <Architecture />
        <WhyChoose />
        <Industries />
        <Proven />
        <Timeline />
        <Insights />
        <Recognition />
        <BuiltInIndia />
        <Investment />
        <FinalCTA />
    </>
  );
}
