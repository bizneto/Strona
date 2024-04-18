import HeaderNavbarMobile from "./headerNavbarMobile";
import HeaderNavbarDesktop from "./headerNavbarDesktop";

export default function HeaderNavbar() {
  return (
    <div className='w-full mt-8 '>
      <div className='w-10/12 md:hidden  flex mx-auto justify-between items-center '>
        <HeaderNavbarMobile />
      </div>
      <div className='hidden md:flex md:w-[89%] 2xl:w-[1440px] mx-auto justify-between items-center'>
        <HeaderNavbarDesktop />
      </div>
    </div>
  );
}
