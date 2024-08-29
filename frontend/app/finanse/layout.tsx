import Footer from "@/components/financePage/footer";
import MobileMenu from "@/components/financePage/header/headerMobileMenu";
import Chatbot from "@/components/financePage/chatbotFinance";
import CookiesNotice from "@/components/shared/cookiesNotice";
import { getClientID } from "@/utils/cookies";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function FinanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clientID = await getClientID("finance");

  return (
    <div className={montserrat.className}>
      <MobileMenu />
      {children}
      <CookiesNotice clientID={clientID} page='finance' />
      {clientID && <Chatbot />}
      <Footer />
    </div>
  );
}
