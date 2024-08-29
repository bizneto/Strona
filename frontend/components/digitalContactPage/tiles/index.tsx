import Image from "next/image";
import mapBackground from "@/public/images/mapDigital.png";
import whiteArrow from "@/public/svgs/arrowWhite.svg";
import vectorBlack from "@/public/svgs/VectorBlack.svg";
import Link from "next/link";

const HAVE_A_QUESTION = "Masz pytanie?";
const SET_UP_MEETING = "Umów spotkanie";
const NAVIGATE = "Nawiguj";
const googleMapsLink =
  "https://www.google.com/maps/dir//Mieszka+I+38,+35-308+Rzesz%C3%B3w/@50.031986,21.9430704,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x473cfb84cfded757:0x1975a87402fbd53b!2m2!1d22.0254707!2d50.0320152?entry=ttu";

export default function Tiles() {
  return (
    <section className='py-8 md:py-8'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-4 mx-auto w-[91%] md:w-[89%] 2xl:w-[1440px]'>
        <Link
          href="https://calendly.com/biznetodigital/meet"
          className=' h-[184px] md:h-[312px] relative flex flex-col justify-end  bg-[#006EEF] hover:bg-black transition-colors duration-300 rounded-[8px]'
        >
          <Image
            className='absolute top-5 right-5 size-[32px] -rotate-45'
            src={whiteArrow}
            alt='arrow icon'
          />
          <div className='text-white p-8 flex flex-col gap-2'>
            <p className='text-[32px] leading-[38.4px]'>{HAVE_A_QUESTION}</p>
            <p className='text-[18px] leading-[21.6px]'>{SET_UP_MEETING}</p>
          </div>
        </Link>
        <div className='relative h-[312px] flex flex-col justify-end '>
          <Image
            className='absolute size-full object-cover rounded-[8px]'
            src={mapBackground}
            alt='map image'
          />
          <Link
            href={googleMapsLink}
            className='group hover:text-white hover:bg-[#006EEF] transition-colors duration-300 m-8 gap-4 text-[16px] leading-[22.4px] flex justify-center items-center rounded-[100px] z-40 bg-white w-[153px] h-[50px] text-black'
          >
            {NAVIGATE}
            <Image
              className='transition-all duration-300 group-hover:invert'
              src={vectorBlack}
              alt='vector'
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
