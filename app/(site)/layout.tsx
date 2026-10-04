import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Chrome for the public site. Mockup routes live outside this group. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
