"use client";

import ContactPageProvider from "@/context/contactPageContext";
import ContactUsContactForm from "./contactForm";
import ContactUsInfo from "./contactInfo";
import ContactUsHeader from "./header";
import ContactUsServices from "./services";
import ContactUsPopUp from "./popUp";

export default function ContactUs() {
  return (
    <ContactPageProvider>
      <div className='relative md:flex md:gap-12 lg:gap-14 md:justify-between mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px] py-8 md:py-16 '>
        <ContactUsPopUp />
        <div className='md:w-[350px] lg:w-3/4 xl:w-full h-full'>
          <ContactUsHeader />
          <span className='hidden md:block'>
            <ContactUsInfo />
          </span>
        </div>
        <div className='xl:w-[664px] h-full'>
          <ContactUsServices />
          <ContactUsContactForm />
          <div className='block md:hidden'>
            <ContactUsInfo />
          </div>
        </div>
      </div>
    </ContactPageProvider>
  );
}
