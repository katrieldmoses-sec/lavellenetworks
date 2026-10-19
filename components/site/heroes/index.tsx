/**
 * Page-hero scenes: which picture each inner page shows beside its headline.
 * Keyed by route path; pages not listed keep the shared HeroSystem.
 */
import type { ReactNode } from "react";
import { Cable } from "lucide-react";
import {
  PathsScene,
  FailoverScene,
  BranchScene,
  ShieldScene,
  ZeroTrustScene,
  TelemetryScene,
  AiOpsScene,
  ExperienceScene,
  EdgeScene,
  HubScene,
  ControllerScene,
  MultiCloudScene,
  AnywhereScene,
} from "./network";
import { IndiaScene } from "./places";
import {
  StoryScene,
  TeamScene,
  CareersScene,
  InvestorsScene,
  LibraryScene,
  PlatformScene,
  ConversationScene,
  EcosystemScene,
} from "./company";

const SCENES: Record<string, () => ReactNode> = {
  /* products */
  "/products/sd-wan": () => <PathsScene />,
  "/products/sase": () => <ShieldScene />,
  "/products/ai-operations": () => <AiOpsScene />,
  "/products/ztna": () => <ZeroTrustScene />,
  "/products/cloudport-edge": () => <EdgeScene />,
  "/products/cloudport-gateway": () => <HubScene />,
  "/products/cloudstation-controller": () => <ControllerScene />,
  "/products/cloudstation-insights": () => <TelemetryScene variant="insights" />,
  "/products/cloud-connectivity": () => <MultiCloudScene fabric={Cable} />,
  "/products/digital-experience": () => <ExperienceScene />,
  "/products/network-analytics": () => <TelemetryScene variant="analytics" />,
  "/products/secure-branch": () => <BranchScene />,
  "/products/secure-internet": () => <ShieldScene variant="internet" />,

  /* solutions */
  "/solutions/bfsi": () => <IndiaScene variant="bfsi" />,
  "/solutions/branch-transformation": () => <BranchScene />,
  "/solutions/hybrid-workforce": () => <AnywhereScene />,
  "/solutions/information-technology": () => <IndiaScene variant="it" />,
  "/solutions/logistics": () => <IndiaScene variant="logistics" />,
  "/solutions/education": () => <IndiaScene variant="education" />,
  "/solutions/government": () => <IndiaScene variant="government" />,
  "/solutions/healthcare": () => <IndiaScene variant="healthcare" />,
  "/solutions/manufacturing": () => <IndiaScene variant="manufacturing" />,
  "/solutions/multi-cloud": () => <MultiCloudScene branches={3} />,
  "/solutions/retail": () => <IndiaScene variant="retail" />,

  /* use cases */
  "/use-cases/application-availability": () => <FailoverScene />,
  "/use-cases/branch-transformation": () => <BranchScene />,
  "/use-cases/enterprise-network-monitoring": () => <TelemetryScene variant="monitoring" />,
  "/use-cases/hybrid-wan": () => <PathsScene links={2} />,
  "/use-cases/hybrid-workforce": () => <AnywhereScene />,
  "/use-cases/microsoft-365-performance": () => <ExperienceScene variant="m365" />,
  "/use-cases/multi-cloud": () => <MultiCloudScene />,
  "/use-cases/multi-cloud-connectivity": () => <MultiCloudScene />,
  "/use-cases/network-monitoring": () => <TelemetryScene variant="monitoring" />,

  /* resources */
  "/resources/blogs": () => <LibraryScene variant="blogs" />,
  "/resources/case-studies": () => <LibraryScene variant="case-studies" />,
  "/resources/datasheets": () => <LibraryScene variant="datasheets" />,

  /* company */
  "/company/about": () => <StoryScene />,
  "/company/careers": () => <CareersScene />,
  "/company/contact": () => <IndiaScene variant="contact" />,
  "/company/investors": () => <InvestorsScene />,
  "/company/leadership": () => <TeamScene />,

  /* contact and partners */
  "/contact/partner-with-us": () => <EcosystemScene join />,
  "/contact/request-demo": () => <PlatformScene />,
  "/contact/talk-to-expert": () => <ConversationScene />,
  "/partners": () => <EcosystemScene />,
  "/partners/locator": () => <IndiaScene variant="partners" />,
};

export function hasHeroScene(path?: string): path is string {
  return !!path && path in SCENES;
}

export function HeroScene({ path }: { path: string }) {
  const scene = SCENES[path];
  return scene ? <>{scene()}</> : null;
}
