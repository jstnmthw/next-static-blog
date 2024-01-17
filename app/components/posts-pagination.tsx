import { FC } from 'react';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from './pagination';

const PostsPagination: FC<{ links: (number | string)[] }> = ({ links }) => {
  return (
    <Pagination>
      <PaginationPrevious href="?page=2" />
      <PaginationList>
        {links.map((link) => (
          <PaginationPage href={`?page=${link}`} key={link}>
            {link.toString()}
          </PaginationPage>
        ))}
      </PaginationList>
      <PaginationNext href="?page=4" />
    </Pagination>
  );
};

export default PostsPagination;
