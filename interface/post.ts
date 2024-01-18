import type Author from './author';

export type PostListType = {
  data: PostType[];
  paginatorInfo: PaginatorInfoType;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  categories: string[];
  author: Author;
  excerpt: string;
  image: {
    url: string;
  };
  content: string;
};

export type PaginatorInfoType = {
  currentPage: number;
  links: (string | number)[];
  lastPage: number;
  perPage: number;
  total: number;
};
