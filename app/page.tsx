import ScribbleIcon from '@components/icons/scribble-icon';
import { getPosts } from '@/lib/api';
import Posts from './components/posts';
import PostsPagination from './components/posts-pagination';
import Footer from './components/footer';

function getData(page: number = 1) {
  const posts = getPosts(page, 2, [
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
    <>
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
      <div className="pt-24 sm:pt-32 px-10 sm:px-15 mx-auto max-w-2xl">
        {searchParams.page === '1' && (
          <div className="flex justify-between sm:pb-12 sm:mb-12 border-b border-neutral-200 dark:border-neutral-800">
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
        )}
        <Posts
          posts={posts.data}
          className="mb-8 pb-16 border-b border-neutral-200 dark:border-neutral-800"
        />
        <PostsPagination
          links={posts.paginatorInfo.links}
          paginatorInfo={posts.paginatorInfo}
        />
      </div>
      <Footer />
    </>
  );
}
