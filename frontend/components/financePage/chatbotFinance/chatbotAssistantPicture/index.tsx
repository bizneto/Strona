import Image from "next/image";
import aiAssistantPic from "@/public/images/aiAssistant.png";

export default function ChatbotAssistantPicture() {
  return (
    <Image
      className='object-cover'
      src={aiAssistantPic}
      alt='Ai assistant picture'
    />
  );
}
