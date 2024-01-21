import { FC } from 'react';
import { PostType } from '@/interface/post';
import DateFormatter from '@components/date-formatter';
import PostCategories from './post-categories';

const PostHeader: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="max-w-xl mx-auto mt-20 mb-10 pb-10">
      <h1 className="text-4xl text-neutral-900 dark:text-neutral-50 text-balance tracking-tight font-bold mb-6">
        {post.title}
      </h1>
      <div className="flex items-center gap-x-4 text-sm">
        <DateFormatter dateString={post.date} className="text-neutral-500" />
        <PostCategories categories={post.categories} />
      </div>
    </div>
  );
};

export default PostHeader;
