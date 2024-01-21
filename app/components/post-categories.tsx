import Link from 'next/link';
import { FC } from 'react';
import { Badge } from './badge';

const PostCategories: FC<{ categories: string[] }> = ({ categories }) => {
  return (
    <div className="flex items-center gap-x-2 text-xs">
      {categories.map((category: string) => (
        <Link key={category} href={`/category/${category.toLowerCase()}`}>
          <Badge color="green" className="border font-xs border-green-400/30">
            {category}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default PostCategories;
