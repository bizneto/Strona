// import biznetoDigitalLogo from "@/public/images/biznetoDigitalLogoMobile.png";
import biznetoLogoBlueDot from "@/public/images/biznetoLogoBlueDot.png";
import biznetoDigital from "@/public/svgs/biznetoDigital.svg";
import Image from "next/image";
import {
  BIZNETO_LOGOS,
  GRAY_TEXTS_ARR,
  SOCIAL_MEDIA_LOGOS,
} from "@/components/landingPage/footer/data";
import Link from "next/link";
import {
  BECOME_OUR_CLIENT,
  CONTACT_INFO,
  NAVIGATION_DATA,
  OUR_OTHER_BUSINESS,
  SOCIAL_MEDIA_DATA,
  WAITING_FOR_YOU,
} from "../data";
import whiteArrow from "@/public/svgs/arrowWhite.svg";

export default function FooterMobile() {
  return (
    <>
      <div className='gap-16 flex flex-col w-[91%] mx-auto '>
        <div className='text-white flex flex-col gap-[18px]'>
          <Image src={biznetoLogoBlueDot} alt='logo'></Image>
          <h4 className='w-[60%] text-[24px] leading-[26.4px]'>
            {WAITING_FOR_YOU}
          </h4>
          <div className='flex items-center gap-4 h-fit'>
            <p className='text-white text-[16px] leading-[22.4px]'>
              {BECOME_OUR_CLIENT}
            </p>
            <div className='flex items-center justify-center size-[44px] rounded-[50%] bg-[#006EEF]'>
              <Image src={whiteArrow} alt='arrow icon' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
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
                    <Link href={route} key={label} className={"cursor-pointer"}>
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
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
        </div>
        <div className='flex flex-col w-full h-[90px] justify-between items-start'>
          <p className='text-[#909090] text-[16px] leading-[20.8px]'>
            {OUR_OTHER_BUSINESS}
          </p>
          {BIZNETO_LOGOS.slice(1, 3).map((logo, index) => (
            <Link
              target='_blank'
              key={logo}
              href={index !== 0 ? "/" : "/finanse"}
            >
              <Image className='h-[20px] w-fit' src={logo} alt='logo' />
            </Link>
          ))}
        </div>
        <div className=' font-thin text-white opacity-50 text-[12px] leading-[15.6px] flex flex-col gap-2'>
          <Link target='_blank' href='/pdf/Regulamin.pdf'>
            {GRAY_TEXTS_ARR[0]}
          </Link>
          <Link target='_blank' href='/pdf/PolitykaPrywatnosci.pdf'>
            {GRAY_TEXTS_ARR[1]}
          </Link>
          <p>{GRAY_TEXTS_ARR[2]}</p>
          <span className='max-h-[15px] flex gap-2 '>
            <p>{GRAY_TEXTS_ARR[3]}</p>
            <Image
              src={biznetoDigital}
              className='w-[92.25px] h-[14px]'
              alt='logo'
            />
          </span>
        </div>
      </div>
    </>
  );
}
