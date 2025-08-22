import Image from "next/image";
import headerBackground from "@/public/images/headerDesktopBackground.webp";
import headerBackgroundMobile from "@/public/images/headerMobileBackground.png";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

interface HeaderImageProps {
  blogPostImageId?: string;
}

export default async function HeaderImage({ blogPostImageId }: HeaderImageProps) {
  const isMobile = await SSRMobileDetection();

  // Jeśli jest obrazek z artykułu bloga, użyj go
  if (blogPostImageId) {
    return (
      <Image
        priority
        id='header-background'
        src={`/api/espo-image/${blogPostImageId}`}
        alt='header background image'
        fill
        className={`absolute h-full w-full object-cover z-[-10]`}
      />
    );
  }

  // W przeciwnym razie użyj domyślnych obrazków
  return (
    <Image
      priority
      id='header-background'
      src={isMobile ? headerBackgroundMobile : headerBackground}
      alt='header background image'
      fill
      className={`absolute h-full w-full object-cover z-[-10]`}
    />
  );
}
