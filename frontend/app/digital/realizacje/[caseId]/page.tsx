import dynamic from "next/dynamic";
import NextProject from "@/components/caseStudyPage/nextProject";
import { fetchCaseStudyByID } from "@/utils/caseStudies";
import Navbar from "@/components/digitalPage/digitalPageNavbar";

const componentsMap = {
  "component.header": dynamic(
    () => import("@/components/caseStudyPage/header")
  ),
  "component.thumbnail": dynamic(
    () => import("@/components/caseStudyPage/thumbnail")
  ),
  "component.intro": dynamic(() => import("@/components/caseStudyPage/intro")),
  "component.images-pair": dynamic(
    () => import("@/components/caseStudyPage/imagePair")
  ),
  "component.big-image": dynamic(
    () => import("@/components/caseStudyPage/bigImage")
  ),
  "component.small-image": dynamic(
    () => import("@/components/digitalPage/smallImage")
  ),
  "component.opinion": dynamic(
    () => import("@/components/caseStudyPage/opinion")
  ),
  "component.goal": dynamic(
    () => import("@/components/caseStudyPage/objective")
  ),
};

export default async function CaseStudyPage({
  params,
}: {
  params: { caseId: number };
}) {
  const components: { __component: string }[] =
    (await fetchCaseStudyByID(params.caseId)) ?? [];

  return (
    <>
      <Navbar UIColor='dark' />
      {components.map((component, index) => {
        const Component =
          componentsMap[component.__component as keyof typeof componentsMap];
        if (!Component) {
          return null;
        }
        return (
          <Component
            key={index}
            title={""}
            data={undefined}
            image={{
              data: {
                attributes: {
                  url: "",
                  width: 0,
                  height: 0,
                },
              },
            }}
            sectionTitle={""}
            longText={""}
            imagesPair={{
              data: [{ attributes: { height: 0, url: "", width: 0 } }],
            }}
            opinionAuthor={""}
            opinionAuthorPostion={""}
            opinion={""}
            {...component}
          />
        );
      })}
      <NextProject params={params} />
    </>
  );
}
