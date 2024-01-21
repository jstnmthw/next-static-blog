import { FC } from 'react';
import Image from 'next/image';
import { PostType } from '@/interface/post';

const PostImage: FC<{ image: PostType['coverImage']; alt?: string }> = ({
  image,
  alt,
}) => {
  return (
    <figure className="mb-32 max-w-5xl mx-auto">
      <Image
        src={image.url}
        alt={alt ?? ''}
        width={1024}
        height={684}
        className="mb-2"
      />
      <figcaption className="text-xs pr-2 text-neutral-400 dark:text-neutral-600 italic text-right">
        Image by <a href={image.author.url}>{image.author.name}</a>
      </figcaption>
    </figure>
  );
};

export default PostImage;
