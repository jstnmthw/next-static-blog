import ScribbleIcon from '@/app/components/icons/scribble-icon';
import { getAllPosts } from '@/lib/api';
import Posts from './components/posts';
import Footer from './components/footer';
import PostsPagination from './components/posts-pagination';

function getData(page: number = 1) {
  const posts = getAllPosts(page, 1, [
    'title',
    'categories',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  if (!posts) {
    throw new Error('Something went wrong');
  }

  return posts;
}

export default function Page({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams.page) {
    searchParams.page = '1';
  }
  const posts = getData(Number(searchParams.page));
  return (
    <div className="pt-24 pb-16 sm:pt-32 px-10 sm:px-15">
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl text-balance font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
            Scribbles of a <br /> software engineer
          </h2>
          <p className="mt-2 text-lg leading-8 text-balance text-neutral-600 dark:text-neutral-400">
            Random thoughts, ideas, and opinions on software engineering,
            technology, and life.
          </p>
        </div>
        <ScribbleIcon className="w-36 text-balance text-neutral-900 dark:text-neutral-100" />
      </div>
      <Posts
        posts={posts.data}
        className="mb-8 pb-16 border-b border-neutral-200 dark:border-neutral-800"
      />
      <PostsPagination
        links={posts.paginatorInfo.links}
        paginatorInfo={posts.paginatorInfo}
      />
      <Footer />
    </div>
  );
}
