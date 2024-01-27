import Link from 'next/link';
import { Button } from './components/button';

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-black text-neutral-900 text-xl sm:text-5xl dark:text-neutral-200">
          404
        </p>
        <h1 className="mt-2 text-lg font-bold tracking-tight text-neutral-200 sm:text-3xl dark:text-neutral-800/75">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button outline href="/">
            Go back home
          </Button>
        </div>
      </div>
    </main>
  );
}
