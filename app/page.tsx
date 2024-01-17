import ScribbleIcon from '@/app/components/icons/scribble-icon';
import { getAllPosts } from '@/lib/api';
import Posts from './components/posts';
import Footer from './components/footer';
import PostsPagination from './components/posts-pagination';

function getData() {
  const posts = getAllPosts(1, 1, [
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

export default function Page() {
  const posts = getData();
  return (
    <div className="py-24 sm:py-32 px-10 sm:px-15">
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
      {/* <pre className="overflow-scroll mt-10 text-green-400 text-xs">
        {JSON.stringify(posts, null, 2)}
      </pre> */}
      <Posts
        posts={posts.data}
        className="mb-8 pb-16 border-b border-neutral-200 dark:border-neutral-800"
      />
      <PostsPagination links={posts.paginatorInfo.links} />
      <Footer />
    </div>
  );
}
