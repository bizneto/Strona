import MobileMenu from "@/components/financePage/header/headerMobileMenu";
import Footer from "@/components/landingPage/footer";
import Header from "@/components/landingPage/header";
import Main from "@/components/landingPage/main";

export default function LandingPage() {
  return (
    <>
      <MobileMenu />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
