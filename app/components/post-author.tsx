import Author from '@/interface/author';
import classNames from 'classnames';
import { FC } from 'react';

const PostAuthor: FC<{ author: Author; className?: string }> = ({
  author,
  className,
}) => {
  return (
    <div
      className={classNames(
        className,
        'relative mt-8 flex items-center gap-x-4',
      )}
    >
      <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-center dark:bg-neutral-800">
        <span className="text-lg select-none font-medium leading-none text-neutral-500 dark:text-neutral-400">
          {author.name[0]}
        </span>
      </div>
      <div className="text-sm leading-6">
        <p className="font-semibold text-neutral-900 dark:text-neutral-400">
          <span className="absolute inset-0" />
          {author.name}
        </p>
      </div>
    </div>
  );
};

export default PostAuthor;
