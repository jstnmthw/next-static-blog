import { FC } from 'react';
import Image from 'next/image';
import { PostType } from '@/interface/post';

const PostImage: FC<{ post: PostType }> = ({ post }) => {
  return (
    <figure className="mb-32 max-w-5xl mx-auto">
      <Image
        src={post.coverImage.url}
        alt={post.title}
        width={1024}
        height={684}
        className="mb-2"
      />
      <figcaption className="text-xs pr-2 text-neutral-400 dark:text-neutral-600 italic text-right">
        Image by <a href="https://unsplash.com/@ryoji__iwata">Ryoji Iwata</a>
      </figcaption>
    </figure>
  );
};
