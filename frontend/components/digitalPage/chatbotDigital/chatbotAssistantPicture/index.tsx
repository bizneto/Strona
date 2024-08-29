import Image from "next/image";
import aiAssistantPic from "@/public/images/aiAssistantDigital.png";

export default function ChatbotAssistantPicture() {
  return (
    <Image
      className='size-full'
      src={aiAssistantPic}
      alt='Ai assistant picture'
    />
  );
}
