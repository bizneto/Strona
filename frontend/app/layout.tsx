import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Scroll from "@/utils/SmoothScrollbar";
import "./globals.css";
import GlobalContextProvider from "@/context/globalContextProvider";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bizneto - Profesjonalne Usługi Księgowe i Digital Marketing",
  description:
    "Odkryj kompleksową gamę usług księgowych i doradczych oferowanych przez Bizneto. Pomagamy firmom osiągać sukces finansowy. Księgowość, doradztwo podatkowe, web design, branding.",
  keywords: "bizneto, księgowość, usługi księgowe, doradztwo podatkowe, web design, branding, digital marketing",
  authors: [{ name: "Bizneto Sp. z o.o." }],
  creator: "Bizneto Sp. z o.o.",
  publisher: "Bizneto Sp. z o.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bizneto.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bizneto - Profesjonalne Usługi Księgowe i Digital Marketing",
    description: "Kompleksowe usługi księgowe, doradztwo podatkowe, web design i branding. Zaufaj ekspertom z 20-letnim doświadczeniem.",
    url: 'https://bizneto.pl',
    siteName: 'Bizneto',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
