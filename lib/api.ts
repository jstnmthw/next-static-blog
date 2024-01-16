import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import PostType from '@/interface/post';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  const itemsUnknown = items as unknown;
  return itemsUnknown as PostType;
}

export function getAllPosts(
  page: number = 1,
  limit: number = 10,
  fields: string[] = [],
) {
  const start = (page - 1) * limit;
  const end = page * limit;

  const slugs = getPostSlugs();
  const allPosts = slugs.map((slug) => getPostBySlug(slug, fields));
  const total = allPosts.length;
  const posts = allPosts
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(start, end);

  const lastPage = Math.ceil(total / limit);
  const minPage = 1;
  const maxPage = 5;
  const currentPage = page;

  let links = [];
  for (let i = 1; i <= lastPage; i++) {
    links.push(i);
  }

  // If there are more than maxPage pages, we need to truncate the links
  if (links.length > maxPage) {
    if (currentPage <= 3) {
      // Current page near the start
      links = [...links.slice(0, maxPage), '...', lastPage];
    } else if (currentPage > 3 && currentPage < lastPage - 2) {
      // Current page somewhere in the middle
      links = [
        minPage,
        '...',
        ...links.slice(currentPage - 2, currentPage + 1),
        '...',
        lastPage,
      ];
    } else {
      // Current page near the end
      links = [minPage, '...', ...links.slice(-maxPage)];
    }
  }

  return {
    data: posts,
    paginatorInfo: {
      total,
      currentPage: page,
      perPage: limit,
      lastPage,
      links,
    },
  };
}
