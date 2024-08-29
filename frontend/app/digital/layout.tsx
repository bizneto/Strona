import CookiesNotice from "@/components/shared/cookiesNotice";
import Footer from "@/components/digitalPage/footer";
import DigitalMobileMenu from "@/components/digitalPage/header/headerMobileMenu";
import { getClientID } from "@/utils/cookies";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const NeueHaasDisplay = localFont({
  src: "../../public/fonts/NeueHaasDisplay-Roman.woff2",
  display: "swap",
});

const Chatbot = dynamic(() => import("@/components/digitalPage/chatbotDigital"));

export default async function DigitalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientID = await getClientID("digital");

  return (
    <div className={`${NeueHaasDisplay.className} bg-[#F8F8F8]`}>
      <DigitalMobileMenu />
      {children}
      <CookiesNotice page="digital" clientID={clientID} />
      {clientID && <Chatbot />}
      <Footer />
    </div>
  );
}
