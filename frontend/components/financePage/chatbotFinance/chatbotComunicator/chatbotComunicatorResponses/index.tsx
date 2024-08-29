import Image from "next/image";
import ChatbotAssistantPicture from "../../chatbotAssistantPicture";
import userIcon from "@/public/svgs/userIcon.svg";
import loadingGif from "@/public/gifs/loading.gif";

interface IChatbotResponse {
  index: number;
  role: string;
  content: string;
  loading?: boolean;
}

export default function ChatbotMessages({
  index,
  role,
  content,
  loading,
}: IChatbotResponse) {
  if (loading) {
    return (
      <li key={index} className='flex flex-col ml-2 gap-2 py-4 '>
        <div className='flex items-center gap-2'>
          <div className='rounded-[30.88px] size-[22px] overflow-hidden'>
            <ChatbotAssistantPicture />
          </div>
          <p className='text-[12px] leading-[12.74px] font-semibold'>Marla</p>
        </div>
        <div className='px-[27.27px] py-[15.96px] font-medium text-[13.89px] leading-[22.23px] bg-[#FCFCFC] max-w-[112px] max-h-[50.45px] rounded-tl-[2px] rounded-[18.53px]'>
          <Image src={loadingGif} alt='loading gif' />
        </div>
      </li>
    );
  }

  if (role === "assistant") {
    return (
      <li key={index} className='flex flex-col ml-2 gap-2 py-4 '>
        <div className='flex items-center gap-2'>
          <div className='rounded-[30.88px] size-[22px] overflow-hidden'>
            <ChatbotAssistantPicture />
          </div>
          <p className='text-[12px] leading-[12.74px] font-semibold'>Marla</p>
        </div>
        <div className='px-[27.27px] py-[15.96px] font-medium text-[13.89px] leading-[22.23px] bg-[#FCFCFC] max-w-[300px] rounded-tl-[2px] rounded-[18.53px]'>
          {content}
        </div>
      </li>
    );
  }

  return (
    <li key={index} className='flex flex-col items-end py-4 '>
      <div className='flex flex-row-reverse items-center gap-1'>
        <Image src={userIcon} className='size-full' alt='user icon' />
        <p className='text-[12px] leading-[12.74px] font-semibold'>Ty</p>
      </div>
      <div className='px-[27.27px] py-[15.96px] font-medium text-[13.89px] leading-[22.23px] bg-[#FF3C50] text-white max-w-[300px] rounded-tr-[2px] rounded-[18.53px]'>
        {content}
      </div>
    </li>
  );
}
