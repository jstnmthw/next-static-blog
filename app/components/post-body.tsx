import { FC } from 'react';

const PostBody: FC<{ content: string }> = ({ content }) => {
  return (
    <div
      className="leading-8 *:pb-8 mx-auto max-w-xl
      prose dark:prose-invert
      prose-neutral
      prose-h2:text-2xl
      prose-h2:pb-0
      prose-blockquote:py-1
      prose-pre:py-4
      dark:prose-blockquote:mb-10"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
