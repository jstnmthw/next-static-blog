import { FC } from 'react';

export const PostBody: FC<{ content: string }> = ({ content }) => {
  return (
    <div
      className="leading-8 *:pb-8 mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
