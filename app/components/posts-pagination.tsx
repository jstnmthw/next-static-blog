import { FC } from 'react';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from './pagination';
import { PaginatorInfoType } from '@/interface/post';

const PostsPagination: FC<{
  paginatorInfo: PaginatorInfoType;
  links: (number | string)[];
}> = ({ links, paginatorInfo }) => {
  return (
    <Pagination>
      {paginatorInfo.currentPage > 1 ? (
        <PaginationPrevious href={'?page=' + (paginatorInfo.currentPage - 1)} />
      ) : (
        <PaginationPrevious />
      )}
      <PaginationList>
        {links.map((link, idx) => {
          if (link === '...') {
            return <PaginationGap key={idx}></PaginationGap>;
          }
          return (
            <PaginationPage
              key={idx}
              href={`?page=${link}`}
              current={paginatorInfo.currentPage === link}
            >
              {link.toString()}
            </PaginationPage>
          );
        })}
      </PaginationList>
      {paginatorInfo.currentPage === paginatorInfo.lastPage ? (
        <PaginationNext />
      ) : (
        <PaginationNext href={'?page=' + (paginatorInfo.currentPage + 1)} />
      )}
    </Pagination>
  );
};

export default PostsPagination;
