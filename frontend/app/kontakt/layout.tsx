import MobileMenu from "@/components/financePage/header/headerMobileMenu";
import GlobalContextProvider from "@/context/globalContextProvider";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContextProvider>
      <MobileMenu />
      {children}
    </GlobalContextProvider>
  );
}
