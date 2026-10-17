import HomeHero from "@/components/site/home/Hero";
import {
  StatsBento,
  ProductsBento,
  ArchAtlas,
  WhyTiles,
  IndDeep,
  Proven,
  TimelinePinned,
  Insights,
  RecogInvest,
  FinalHorizon,
} from "@/components/site/home/sections";

/** Homepage — design.md §7.1. */
export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsBento />
      <ProductsBento />
      <ArchAtlas />
      <WhyTiles />
      <IndDeep />
      <Proven inkFirst />
      <TimelinePinned />
      <Insights />
      <RecogInvest />
      <FinalHorizon />
    </>
  );
}
