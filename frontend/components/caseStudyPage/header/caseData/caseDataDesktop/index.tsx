import { IPassedData } from "..";

export default function CaseDataDesktop({ data }: IPassedData) {
  return (
    <div className='hidden lg:flex justify-between items-center  max-h-[67px] '>
      {Object.entries(data).map(([label, value], index) => (
        <span key={index} className='flex flex-col gap-3 max-h-[67px]'>
          <p className='text-[14px] leading-[19.6px] text-[#505050]'>{label}</p>
          <span className='flex gap-2 text-[18px] leading-[25.2px]'>
            {Array.isArray(value) ? (
              value.map((el) => (
                <span
                  className='xl:px-6 lg:px-3 py-[10px] rounded-[100px] border-[1.2px] border-black'
                  key={el}
                >
                  {el}
                </span>
              ))
            ) : (
              <p>{value}</p>
            )}
          </span>
        </span>
      ))}
    </div>
  );
}
