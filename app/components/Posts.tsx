import { FC } from 'react';
import PostType from '@/interface/post';
import DateFormatter from './DateFormatter';

const Posts: FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="flex max-w-xl flex-col items-start justify-between"
        >
          <div className="flex items-center gap-x-4 text-xs">
            <DateFormatter dateString={post.date} className="text-gray-600" />
            <a
              href={post.category}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.category}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href={post.slug}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {post.excerpt}
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-center">
              <span className="text-lg select-none font-medium leading-none text-gray-500">
                {post.author.name[0]}
              </span>
            </div>
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
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
  );
};

export default Posts;
