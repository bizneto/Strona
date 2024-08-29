export default function ContactUsInfo() {
  const DATA = [
    {
      subSectionName: "Email",
      dataToMap: ["biuro@bizneto.pl", "praca@bizneto.pl"],
    },
    {
      subSectionName: "Telefon",
      dataToMap: ["177 852 631", "788 489 558"],
    },
    {
      dataToMap: ["NIP: 8133793363", "REGON: 381513359", "KRS: 0000752177"],
    },
  ];

  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:w-[477px] gap-4 md:gap-8 py-8 md:py-16 '>
      {DATA.map(({ subSectionName, dataToMap }, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <p className='font-medium text-[#909090] text-[16px] leading-[22.4px]'>
            {subSectionName?.toUpperCase()}
          </p>
          {dataToMap.map((el) => (
            <p className='font-medium text-[18px] leading-[25.2px]' key={el}>
              {el}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
