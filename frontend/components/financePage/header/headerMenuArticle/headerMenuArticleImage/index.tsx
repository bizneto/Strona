import Image, { StaticImageData } from "next/image";

interface IHeaderMenuArticleImage {
  thumbnail: StaticImageData;
}

export default function HeaderMenuArticleImage({ thumbnail }: IHeaderMenuArticleImage) {
  return (
    <Image src={thumbnail} alt='article thumbnail' className='rounded-lg' />
  );
}
