import Cooperation from "@/components/digitalPage/cooperation";
import CategoriesContextProvider from "@/context/blogPageContext";

export default function RealizationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CategoriesContextProvider>
        {children}
        <Cooperation />
      </CategoriesContextProvider>
    </div>
  );
}
