interface IStickySectionTitle {
  sectionTitle: string;
  color: "#006EEF" | "#FF3C50" | "#000" | "#FFF";
  nonStick?: boolean;
}

export default function SectionTitle({
  sectionTitle,
  color,
  nonStick,
}: IStickySectionTitle) {
  return (
    <span>
      <div
        className={`h-fit md:w-[177px] ${
          color ? `text-[${color}]` : "text-[#006EEF]"
        }  md:text-[16px] md:leading-[22.4px] text-[14px] leading-[19.6px] ${
          !nonStick && "md:sticky md:top-4"
        }`}
      >
        <span className='flex items-center'>
          <span className='font-black text-2xl mr-2'>&bull;</span>
          {sectionTitle}
        </span>
      </div>
    </span>
  );
}
