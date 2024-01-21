import { FC } from 'react';
import { Badge } from '@components/badge';
import { PostType } from '@/interface/post';
import Link from 'next/link';
import classNames from 'classnames';
import PostAuthor from '@components/post-author';
import DateFormatter from '@components/date-formatter';
import PostCategories from './post-categories';

const Posts: FC<{ posts: PostType[]; className?: string }> = ({
  posts,
  className,
}) => {
  return (
    <div className={classNames(className, 'mx-auto')}>
      <div className="space-y-16">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <DateFormatter
                dateString={post.date}
                className="text-neutral-600"
              />
              <PostCategories categories={post.categories} />
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600 dark:text-neutral-300 dark:group-hover:text-neutral-100">
                <Link href={post.slug}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {post.excerpt}
              </p>
            </div>
            <PostAuthor author={post.author} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
