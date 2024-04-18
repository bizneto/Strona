import ButtonWithArrow from "@/components/buttonWithArrow";
// import Link from "next/link";
import HeaderNavbarImage from "../headerNavbarImage";

export default function HeaderNavbarDesktop() {
  const CONTACT_BTN = "Kontakt";
  // const NAVBAR_ROUTES = ["O nas", "Oferta", "Klienci", "Produkty", "Kontakt"];

  return (
    <>
      <HeaderNavbarImage />
      <div className='flex sm:gap-4 lg:gap-14 text-[16px]'>
        {/* {NAVBAR_ROUTES.slice(0, NAVBAR_ROUTES.length - 1).map((opt, index) => (
          <Link
            // Temporary routing
            href={"/kontakt"}
            // onMouseEnter={() =>
            //   arrItemsIntoRoutes(opt, NAVBAR_ROUTES, setRoute)
            // }
            className='hover:cursor-pointer'
            key={index}
          >
            {opt}
          </Link>
        ))} */}
      </div>
      <ButtonWithArrow text={CONTACT_BTN} color={"#FFF"} arrowColor='white' />
    </>
  );
}
