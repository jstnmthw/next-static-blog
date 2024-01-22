import { FC } from 'react';
import { Badge } from './badge';

const PostCategories: FC<{ categories: string[] }> = ({ categories }) => {
  return (
    <div className="flex items-center gap-x-2 text-xs">
      {categories.map((category: string) => (
        <Badge
          key={category}
          color="green"
          className="border font-xs border-green-400/30"
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default PostCategories;
