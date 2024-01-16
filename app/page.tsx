import ScribbleIcon from '@/app/components/icons/scribble-icon';
import { getAllPosts } from '@/lib/api';
import Posts from './components/posts';
import Footer from './components/footer';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from './components/pagination';

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
          <h2 className="text-3xl text-balance font-bold tracking-tight text-gray-900 sm:text-4xl">
            Scribbles of a <br /> software engineer
          </h2>
          <p className="mt-2 text-lg leading-8 text-balance text-gray-600">
            Random thoughts, ideas, and opinions on software engineering,
            technology, and life.
          </p>
        </div>
        <ScribbleIcon className="w-36 text-balance" />
      </div>
      <pre className="font-sans p-5 bg-gray-100 overflow-scroll my-10">
        {JSON.stringify(posts, null, 2)}
      </pre>
      <Posts posts={posts.data} />
      <Pagination>
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">65</PaginationPage>
          <PaginationPage href="?page=66">66</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>
      <Footer />
    </div>
  );
}
