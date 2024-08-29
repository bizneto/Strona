import Image from "next/image";
import menuImage from "@/public/images/menuImage.png";
import Link from "next/link";

export default function MenuArticle() {
  const SECTION_TITLE = "Rozpocznij projekt";
  const SECTION_TEXT =
    "Pomożemy wprowadzać Twoją markę na rynek. Od loga i strony www do sukcesów sprzedażowych.";

  return (
    <Link
      href={"/digital/kontakt"}
      className={`w-[301px] h-[246px] md:w-full md:max-w-[301px] md:max-h-[281px] md:mx-0 text-black  my-8 md:my-0 mx-auto flex flex-col gap-[18px] rounded-[15px]`}
    >
      <Image src={menuImage} alt='article thumbnail' className='rounded-lg' />
      <span className='font-medium'>
        <p className='text-[18px] leading-[25.2px] md:text-[24px] md:leading-[33.6px]'>
          {SECTION_TITLE}
        </p>
        <p className='text-[14px] leading-[19.6px] md:text-[16px] md:leading-[22.4px] text-[#505050]'>
          {SECTION_TEXT}
        </p>
      </span>
    </Link>
  );
}
