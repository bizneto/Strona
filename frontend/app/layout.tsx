import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Scroll from "@/utils/SmoothScrollbar";
import "./globals.css";
import GlobalContextProvider from "@/context/globalContextProvider";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bizneto",
  description:
    "Odkryj kompleksową gamę usług księgowych i doradczych oferowanych przez Bizneto.Pomagamy firmom osiągać sukces finansowy.",
};

const GoogleAnalyticsKey: string = process.env.GOOGLE_ANALYTICS_KEY ?? "";
if (!GoogleAnalytics) console.error("No google analytics key!");

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = await SSRMobileDetection();

  return (
    <html lang='pl'>
      <body id='body' className={montserrat.className}>
        <GoogleAnalytics gaId={GoogleAnalyticsKey} />
        <GlobalContextProvider>
          {isMobile ? <> {children} </> : <Scroll>{children}</Scroll>}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
