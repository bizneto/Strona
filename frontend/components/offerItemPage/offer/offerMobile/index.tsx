import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import Image from "next/image";
import { IOffer } from "..";
import { imageUrl } from "@/shared";

export default function OfferMobile({ Offer }: IOffer) {
  return (
    <section className='min-[880px]:hidden w-full py-8'>
      <div className='w-[91%] mx-auto'>
        {Offer.map(
          ({
            Title = "",
            Image: OfferImage,
            Text = "",
            id = "",
            ButtonText = "",
          }) => (
            <div key={id}>
              <Image
                className='rounded-lg size-full h-[360px] object-cover'
                src={imageUrl(OfferImage?.data?.attributes?.url)}
                alt='image'
                width={OfferImage?.data?.attributes?.width ?? 1500}
                height={OfferImage?.data?.attributes?.height ?? 1500}
              />
              <div className='h-[460px] flex flex-col justify-between p-6 mx-auto'>
                <span className='font-medium flex flex-col gap-4'>
                  <h3 className='text-[32px] leading-[44.8px]'>{Title}</h3>
                  <p className='text-[16px] leading-[22.4px]'>{Text}</p>
                </span>
                <ButtonWithArrow
                  arrowColor='white'
                  color='#FFF'
                  fillColor='#006EEF'
                  altHeight={50}
                  text={ButtonText}
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
