"use client";

/**
 * The Signal series. Every variant keeps Signal's structure — orbit hero,
 * grain-blue panels, roadmap decade, oversized sign-off — and folds in the
 * strongest ideas from Bloom, Solara and Atlas.
 */
import SignalHero, { FlowStrip } from "./hero";
import { SIGNAL_SERIES, type SignalVariant } from "./series";
export { SIGNAL_SERIES };
import { SignalNav, SignalFooter } from "./parts";
import {
  StatsBento,
  StatsRuled,
  StatsSignal,
  ProductsOrbit,
  ProductsStack,
  ProductsBento,
  ArchOrbit,
  ArchAtlas,
  WhyTiles,
  WhyNumbered,
  IndDeep,
  IndAccordion,
  IndBloom,
  Proven,
  TimelineGantt,
  TimelinePinned,
  Insights,
  RecogInvest,
  FinalSignal,
  FinalHorizon,
  FinalAtlas,
} from "./sections";

export default function Signal({ variant }: { variant: SignalVariant }) {
  const persona = SIGNAL_SERIES[variant - 1].persona;
  return (
    <div className="mk-root bg-white font-m-body text-lv-ink antialiased">
      <SignalNav />
      <SignalHero persona={persona} />

      {variant === 1 && (
        <>
          <FlowStrip />
          <StatsBento />
          <ProductsStack />
          <ArchOrbit />
          <WhyNumbered />
          <div className="py-10" />
          <IndBloom />
          <Proven inkFirst />
          <TimelineGantt />
          <Insights />
          <RecogInvest />
          <FinalSignal />
        </>
      )}

      {variant === 2 && (
        <>
          <StatsRuled figures={false} />
          <ProductsBento />
          <ArchOrbit />
          <WhyTiles />
          <IndAccordion />
          <Proven />
          <TimelinePinned />
          <Insights />
          <RecogInvest />
          <FinalHorizon />
        </>
      )}

      {variant === 3 && (
        <>
          <StatsSignal />
          <ProductsOrbit />
          <ArchAtlas />
          <WhyNumbered />
          <div className="py-10" />
          <IndDeep />
          <Proven />
          <TimelineGantt />
          <Insights />
          <RecogInvest />
          <FinalAtlas />
        </>
      )}

      {variant === 4 && (
        <>
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
      )}

      {variant === 5 && (
        <>
          <StatsRuled />
          <ProductsStack />
          <ArchOrbit />
          <WhyTiles />
          <IndAccordion />
          <Proven />
          <TimelineGantt />
          <Insights />
          <RecogInvest />
          <FinalAtlas />
        </>
      )}

      <SignalFooter />
    </div>
  );
}
