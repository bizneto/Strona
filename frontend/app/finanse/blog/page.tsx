import { Metadata } from "next";
import FinanceBlogPage from "@/components/finance/blog/FinanceBlogPage";

export const metadata: Metadata = {
  title: "Blog Finansowy | Bizneto - Księgowość i Finanse",
  description: "Najnowsze artykuły o księgowości, finansach i prowadzeniu biznesu. Praktyczne porady dla przedsiębiorców.",
  keywords: "blog finansowy, księgowość, finanse, biznes, porady księgowe, podatki",
};

export default function FinanceBlogPageRoute() {
  return <FinanceBlogPage />;
}
