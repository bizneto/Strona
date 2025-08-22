'use client';

interface HTMLContentProps {
  content: string;
  className?: string;
}

export default function HTMLContent({ content, className = '' }: HTMLContentProps) {
  return (
    <div
      className={`${className} prose-img:max-w-full prose-img:h-auto prose-img:rounded-lg prose-img:shadow-md prose-img:my-6`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
