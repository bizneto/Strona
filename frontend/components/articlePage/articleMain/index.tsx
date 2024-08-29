import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface IArticleMain {
  articleMain: [];
}

export default function ArticleMain({ articleMain }: IArticleMain) {
  return (
    <main className='py-8'>
      <div className='md:flex md:gap-24'>
        <div className='font-medium flex flex-col gap-8 '>
          <div className='font-medium text-[16px] leading-[22.4px] md:text-[18px] md:leading-[25.2px]'>
            <BlocksRenderer content={articleMain} />
          </div>
        </div>
      </div>
    </main>
  );
}
