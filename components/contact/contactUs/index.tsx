"use client";

import ContactPageProvider from "@/context/contactPageContext";
import ContactUsContactForm from "./contactUsContactForm";
import ContactUsInfo from "./contactUsContactInfo";
import ContactUsHeader from "./contactUsHeader";
import ContactUsServices from "./contactUsServices";
import ContactUsPopUp from "./contactUsPopUp";

export default function ContactUs() {
  return (
    <ContactPageProvider>
      <div className='relative md:flex md:gap-12 lg:gap-14 md:justify-between mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px] h-full py-8 md:py-16 '>
      <ContactUsPopUp />
        <div className='md:w-[350px] lg:w-3/4 xl:w-full'>
          <ContactUsHeader />
          <span className='hidden md:block'>
            <ContactUsInfo />
          </span>
        </div>
        <div className='xl:w-[664px]'>
          <ContactUsServices />
          <ContactUsContactForm />
          <span className='block md:hidden'>
            <ContactUsInfo />
          </span>
        </div>
      </div>
    </ContactPageProvider>
  );
}
