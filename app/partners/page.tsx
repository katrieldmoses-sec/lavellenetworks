import type { Metadata } from "next";
import StubPage from "@/components/page/StubPage";

export const metadata: Metadata = { title: "Partners" };

export default function PartnersRoute() {
  return <StubPage heading="Partners Page" />;
}
