import { FC } from 'react';
import { PostType } from '@/interface/post';
import { Badge } from '@/app/components/badge';
import DateFormatter from '@/app/components/date-formatter';
import Link from 'next/link';

const PostHeader: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="max-w-xl mx-auto mt-20 mb-10 pb-10">
      <h1 className="text-4xl text-neutral-900 dark:text-neutral-50 text-balance tracking-tight font-bold mb-6">
        {post.title}
      </h1>
      <DateFormatter
        dateString={post.date}
        className="pb-5 block text-neutral-500 text-sm"
      />
      {post.categories.map((category: string) => (
        <Link key={category} href={`/category/${category.toLowerCase()}`}>
          <Badge color="green" className="border font-xs border-green-400/30">
            {category}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default PostHeader;
