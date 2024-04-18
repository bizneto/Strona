import Image from "next/image";
import headerBackground from "@/public/images/headerDesktopBackground.webp";
import headerBackgroundMobile from "@/public/images/headerMobileBackground.png";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

export default async function HeaderImage() {
  const isMobile = await SSRMobileDetection();

  return (
    <Image
      priority
      id='header-background'
      src={isMobile ? headerBackgroundMobile : headerBackground}
      alt='header background image'
      className={`absolute h-full w-full object-cover z-[-10]`}
    />
  );
}
