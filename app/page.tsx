import ScribbleIcon from '@/app/components/icons/ScribbleIcon';
import { getAllPosts } from '@/lib/api';
import Posts from './components/Posts';
import Footer from './components/Footer';

function getData() {
  const posts = getAllPosts([
    'title',
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
      <Posts posts={posts} />
      <Footer />
    </div>
  );
}
