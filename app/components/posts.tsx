import { FC } from 'react';
import PostType from '@/interface/post';
import DateFormatter from './date-formatter';
import classNames from 'classnames';

const Posts: FC<{ posts: PostType[]; className?: string }> = ({
  posts,
  className,
}) => {
  return (
    <div className={classNames(className, 'mx-auto')}>
      <div className="mt-10 space-y-16 border-t border-neutral-200 pt-10 sm:mt-16 sm:pt-16 dark:border-neutral-800">
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
              <a
                href={post.category}
                className="relative z-10 rounded-full bg-neutral-50 px-3 py-1.5 font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300"
              >
                {post.category}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600 dark:text-neutral-300 dark:group-hover:text-neutral-100">
                <a href={post.slug}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                {post.excerpt}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-center dark:bg-neutral-800">
                <span className="text-lg select-none font-medium leading-none text-neutral-500 dark:text-neutral-400">
                  {post.author.name[0]}
                </span>
              </div>
              <div className="text-sm leading-6">
                <p className="font-semibold text-neutral-900 dark:text-neutral-400">
                  <a href={post.author.name}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
