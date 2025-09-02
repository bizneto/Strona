import HeaderCarousel from "./headerCarousel";
import HeaderNavbar from "./headerNavbar";
import HeaderImage from "./headerImage";
import HeaderDesktopMenu from "./headerDesktopMenu";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import { CityData, getCityWithPreposition } from "@/data/cities";

interface BlogPostData {
  title: string;
  description?: string;
  excerpt?: string;
  category: string;
  headerimageId?: string;
  publishedAt?: string;
  createdAt?: string;
}

interface HeaderProps {
  cityData?: CityData;
  blogPost?: BlogPostData;
}

export default async function Header({ cityData, blogPost }: HeaderProps) {
  const isMobile = await SSRMobileDetection();

  let MAIN_TEXT, SUB_TEXT;

  if (blogPost) {
    // Dla artykułu bloga
    MAIN_TEXT = blogPost.title;
    SUB_TEXT = blogPost.description || blogPost.excerpt || "Przeczytaj nasz najnowszy artykuł z bloga finansowego";
  } else if (cityData) {
    // Dla stron miast
    MAIN_TEXT = `Biuro Rachunkowe ${cityData.name} | Księgowość`;
    SUB_TEXT = `Profesjonalne usługi księgowe ${getCityWithPreposition(cityData)} | Doradztwo podatkowe | 20 lat doświadczenia`;
  } else {
    // Dla strony głównej
    MAIN_TEXT = "Biuro Rachunkowe | Księgowość | Usługi Księgowe";
    SUB_TEXT = "Profesjonalne usługi księgowe | Doradztwo podatkowe | 20 lat doświadczenia";
  }
  
  return (
    <header
      id='header'
      className={`w-full h-[65vh] md:h-[88.5vh] ${
        !isMobile && "bg-gradient1 "
      } relative flex flex-col overflow-hidden justify-between  items-baseline  text-white `}
    >
      <HeaderImage blogPostImageId={blogPost?.headerimageId} />
      <span className='w-full'>
        <HeaderNavbar />
        <HeaderDesktopMenu />
      </span>
      <div className={`w-full flex flex-col mb-[3%]`}>
        <div
          className={`mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]  flex flex-col`}
        >
          <div
            className={`font-medium  text-[32px] min-[420px]:text-[36px] text-left w-full lg:w-4/5 xl:w-3/5 2xl:w-4/5 md:mb-8`}
          >
            <h1 className={`md:text-[64px] md:leading-[78.02px] md:mb-10`}>
              {MAIN_TEXT}
            </h1>
            <h6
              className={`text-[18px] mt-8 mb-4 md:text-[24px] md:leading-[26.4px] md:mt-0 md:mb-0`}
            >
              {SUB_TEXT}
            </h6>
            {blogPost && (blogPost.publishedAt || blogPost.createdAt) && (
              <div className="text-white/80 mt-4 text-sm md:text-base">
                Opublikowano: {new Date(blogPost.publishedAt || blogPost.createdAt || '').toLocaleDateString('pl-PL')}
              </div>
            )}
          </div>
        </div>
        <HeaderCarousel blogPost={blogPost} />
      </div>
    </header>
  );
}
