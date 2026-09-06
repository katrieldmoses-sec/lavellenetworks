import type { Metadata } from "next";
import StubPage from "@/components/page/StubPage";

export const metadata: Metadata = {
  title: "Find a Lavelle Partner",
  description:
    "Locate an authorised Lavelle Networks partner for enterprise networking deployment and support.",
};

export default function PartnerLocatorRoute() {
  return <StubPage heading="Find a Lavelle Partner" />;
}
