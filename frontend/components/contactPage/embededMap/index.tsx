import Image from "next/image";
import mapLegend from "@/public/images/mapLegend.png";
import navigationVector from "@/public/svgs/navigationVectior.svg";
import Link from "next/link";
import mapMobile from "@/public/images/mapMobile.webp";
import mapDesktop from "@/public/images/mapDesktop.png";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

export default async function EmbededMap() {
  const isMobile = await SSRMobileDetection();
  const googleMapsLink =
    "https://www.google.com/maps/dir//Mieszka+I+38,+35-308+Rzesz%C3%B3w/@50.031986,21.9430704,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x473cfb84cfded757:0x1975a87402fbd53b!2m2!1d22.0254707!2d50.0320152?entry=ttu";
  const ADRESS = (
    <>
      <p>Mieszka I 38,</p>
      <p>35-308 Rzeszów</p>
    </>
  );

  return (
    <div className='relative overflow-hidden h-full max-h-[283px] md:max-h-[583px] w-10/12 md:w-[89%] 2xl:w-[1440px] bg-gradient1 mx-auto mb-16 rounded-[8px] '>
      <Image
        src={isMobile ? mapMobile : mapDesktop}
        alt='embeded map'
        className='h-[300px] object-cover md:h-auto w-full'
        quality={100}
      />
      <div className='bg-white bg-opacity-15  bg-gradient   rounded-[5px] absolute border-r  backdrop-blur-3xl border-white w-[191px] h-[135px]  md:w-[378px] md:h-[126px] bottom-4 md:bottom-6 left-6 flex flex-col md:flex-row justify-around items-center '>
        <Image
          src={mapLegend}
          alt='map legend'
          className='-z-10 absolute size-full'
        />
        <div className='z-20 text-white text-[16px] leading-[22.4px]'>
          {ADRESS}
        </div>
        <Link
          href={googleMapsLink}
          className='bg-transparent  overflow-hidden w-[143px] transition-all duration-300 h-[42px]  px-6 py-[10px] border-white border text-white rounded-[100px] hover:cursor-pointer  hover:bg-black hover:invert'
        >
          <span className='size-full flex items-center justify-between gap-3'>
            <p>Nawiguj</p>
            <Image src={navigationVector} alt='vector' className='md:size-5' />
          </span>
        </Link>
      </div>
    </div>
  );
}
