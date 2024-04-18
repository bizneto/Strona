import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import MobileDataProvider from "@/context/mobileDataProvider";
import Scroll from "@/utils/SmoothScrollbar";
import Footer from "@/components/footer";
import "./globals.css";
import MobileMenu from "@/components/header/headerMobileMenu";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bizneto",
  description:
    "Odkryj kompleksową gamę usług księgowych i doradczych oferowanych przez Bizneto.Pomagamy firmom osiągać sukces finansowy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body id='body' className={montserrat.className}>
        <MobileDataProvider>
          <Scroll>
            <MobileMenu />
            {children}
            <Footer />
          </Scroll>
        </MobileDataProvider>
      </body>
    </html>
  );
}
