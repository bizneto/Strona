import Footer from "@/components/blogPage/footer";
import CategoriesContextProvider from "@/context/blogPageContext";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={montserrat.className}>
      <CategoriesContextProvider>
        {children}
        <Footer />
      </CategoriesContextProvider>
    </div>
  );
}
