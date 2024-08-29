import Image from "next/image";
import biznetoDigital from "@/public/svgs/biznetoDigitalLogoDesktop.svg";
import biznetoDigitalGray from "@/public/svgs/biznetoDigitalLogoGray.svg";
import whiteArrow from "@/public/svgs/arrowWhite.svg";
import Link from "next/link";
import {
  BECOME_OUR_CLIENT,
  CONTACT_INFO,
  NAVIGATION_DATA,
  OUR_OTHER_BUSINESS,
  SOCIAL_MEDIA_DATA,
  WAITING_FOR_YOU,
} from "../data";
import {
  BIZNETO_LOGOS,
  GRAY_TEXTS_ARR_DESKTOP,
} from "@/components/landingPage/footer/data";

export default function FooterDesktop() {
  return (
    <footer className='py-16'>
      <div className='md:w-[89%] 2xl:w-[1440px] mx-auto '>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-row w-full justify-between'>
            <div className='flex flex-col gap-12'>
              <Image src={biznetoDigital} alt='logo' />
              <p className='text-white w-[80%] text-[32px] leading-[35.2px]'>
                {WAITING_FOR_YOU}
              </p>
            </div>
            <div className='w-full max-w-[800px] flex justify-between'>
              {Object.entries(CONTACT_INFO).map(([key, value]) => (
                <div className='flex flex-col items-start gap-4' key={key}>
                  <h4 className='text-[16px] leading-[20.8px] text-[#909090]'>
                    {key}
                  </h4>
                  <div className='text-white flex flex-col'>
                    {value.map((item, index) => (
                      <span key={item} className={index === 2 ? "mt-4" : ""}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {Object.entries(NAVIGATION_DATA).map(([key, value]) => (
                <div
                  key={key}
                  className='w-[263px] h-[153px]  flex flex-col gap-4 items-start'
                >
                  <h4 className='text-[16px] leading-[20.8px] text-[#909090]'>
                    {key}
                  </h4>
                  <div className='text-white grid grid-cols-2 gap-x-[35px] gap-3'>
                    {value.map(({ label, route }) => {
                      return (
                        <Link
                          href={route}
                          key={label}
                          className={"cursor-pointer"}
                        >
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
              {Object.entries(SOCIAL_MEDIA_DATA).map(([key, value]) => (
                <div className='flex flex-col items-start gap-4' key={key}>
                  <h4 className='text-[16px] leading-[20.8px] text-[#909090]'>
                    {key}
                  </h4>
                  <div className='text-white flex flex-col gap-2'>
                    {value.map((item) => (
                      <div
                        key={item}
                        className='cursor-pointer items-center w-[145px] flex justify-between'
                      >
                        <span>{item}</span>
                        <Image
                          className='size-[12px] -rotate-45'
                          src={whiteArrow}
                          alt='white arrow'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-between w-full '>
            <Link
              href={"/digital/kontakt"}
              className='group flex items-center gap-4 h-fit'
            >
              <p className='text-white text-[16px] leading-[22.4px]'>
                {BECOME_OUR_CLIENT}
              </p>
              <div className='group-hover:-rotate-45 transition-all duration-300 flex items-center  justify-center size-[44px] rounded-[50%] bg-[#006EEF]'>
                <Image src={whiteArrow} alt='arrow icon' />
              </div>
            </Link>
            <div className='flex w-full max-w-[800px] justify-between items-center'>
              <p className='text-[#909090] text-[16px] leading-[20.8px]'>
                {OUR_OTHER_BUSINESS}
              </p>

              <Link href={"/finanse"}>
                <Image
                  className='h-[20px] w-fit'
                  src={BIZNETO_LOGOS[1]}
                  alt='logo'
                ></Image>
              </Link>
              <Link href={"/"}>
                <Image
                  className='h-[20px] w-fit'
                  src={BIZNETO_LOGOS[0]}
                  alt='logo'
                ></Image>
              </Link>
            </div>
          </div>
          <div className='text-[#909090] flex flex-row justify-between w-full h-full'>
            <p className='flex text-[14px] leading-[18.2px] text-[#909090]'>
              {GRAY_TEXTS_ARR_DESKTOP[0]}
            </p>
            <Link target='_blank' href='/pdf/Regulamin.pdf'>
              {GRAY_TEXTS_ARR_DESKTOP[1]}
            </Link>
            <Link target='_blank' href='/pdf/PolitykaPrywatnosci.pdf'>
              {GRAY_TEXTS_ARR_DESKTOP[2]}
            </Link>
            <div className='flex items-center'>
              <p className='flex text-[14px] leading-[18.2px] text-[#909090]'>
                {GRAY_TEXTS_ARR_DESKTOP[3]}
              </p>
              <Image
                className='pl-2'
                src={biznetoDigitalGray}
                alt='logo'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
