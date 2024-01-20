import { FC } from 'react';

export const PostBody: FC<{ content: string }> = ({ content }) => {
  return (
    <div
      className="leading-8 *:pb-8 mx-auto max-w-xl text-neutral-600 dark:text-neutral-300 prose dark:prose-invert prose-h2:text-2xl dark:prose-blockquote:bg-neutral-950 dark:prose-blockquote:border-neutral-800 dark:prose-blockquote:mb-10 prose-blockquote:py-1"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
