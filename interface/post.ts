import type Author from './author';

export interface PostListType {
  data: PostType[];
  paginatorInfo: PaginatorInfoType;
}

export interface PostType {
  slug: string;
  title: string;
  date: string;
  coverImage: {
    url: string;
    author: {
      name: string;
      url: string;
    };
  };
  categories: string[];
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
}

export interface PaginatorInfoType {
  currentPage: number;
  links: (string | number)[];
  lastPage: number;
  perPage: number;
  total: number;
}
