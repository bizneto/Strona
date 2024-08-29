interface ICarousel {
  optionsArr: string[];
}

export default function CarouselAlt({ optionsArr }: ICarousel) {
  return (
    <div
      className={`md:flex md:flex-col md:gap-[16px]   md:w-[89%] 2xl:w-[1440px]  md:flex-wrap`}
    >
      <div className='.no-scrollbar .no-scrollbar::-webkit-scrollbar py-2 flex justify-normal overflow-x-hidden  flex-nowrap whitespace-nowrap '>
        <div className='animate-[slide_17s_linear_infinite]'>
          {optionsArr.map((opt) => {
            return (
              <span
                key={opt}
                className={`text-center border rounded-[60.843px] px-[14px] py-[6px] ml-[9px] backdrop-blur-[1.216854214668274px] text-[14px] leading-[140%]`}
              >
                {opt}
              </span>
            );
          })}
        </div>
        <div className='animate-[slide_17s_linear_infinite]'>
          {optionsArr.map((opt) => {
            return (
              <span
                key={opt}
                className={`text-center border rounded-[60.843px] px-[14px] py-[6px] ml-[9px] backdrop-blur-[1.216854214668274px] text-[14px] leading-[140%]`}
              >
                {opt}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
