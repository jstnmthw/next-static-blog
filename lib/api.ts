import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { PostListType, PostType } from '@/interface/post';

const postsDirectory = join(process.cwd(), '_posts');

/**
 * Get all post slugs
 *
 * @returns string[]
 */
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Get post by slug
 *
 * @param slug
 * @param fields
 * @returns PostType
 */
export function getPostBySlug(
  slug: string,
  fields: string[] = [],
): PostType | null {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  try {
    fs.accessSync(fullPath, fs.constants.R_OK);
  } catch (err) {
    return null;
  }

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

/**
 * Get all posts and return them as list
 *
 * @param fields
 * @returns PostType[]
 */
export function getAllPosts(fields: string[] = []): PostType[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post): post is PostType => post !== null)
    .sort((post1, post2) =>
      (post1?.date ?? '') > (post2?.date ?? '') ? -1 : 1,
    );
  return posts;
}

/**
 * Get all posts and return them paginated
 *
 * @param page
 * @param limit
 * @param fields
 * @returns PostListType
 */
export function getPosts(
  page: number = 1,
  limit: number = 10,
  fields: string[] = [],
) {
  const start = (page - 1) * limit;
  const end = page * limit;
  const slugs = getPostSlugs();
  const allPosts = slugs.map((slug) => getPostBySlug(slug, fields));
  const total = allPosts.length;
  const lastPage = Math.ceil(total / limit);
  const minPage = 1;
  const maxPage = 5;
  const currentPage = page;
  const posts = allPosts
    .filter((post): post is PostType => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(start, end);

  let links = [];
  for (let i = 1; i <= lastPage; i++) {
    links.push(i);
  }

  if (links.length > maxPage) {
    if (currentPage <= 3) {
      links = [...links.slice(0, maxPage), '...', lastPage];
    } else if (currentPage > 3 && currentPage < lastPage - 2) {
      links = [
        minPage,
        '...',
        ...links.slice(currentPage - 2, currentPage + 1),
        '...',
        lastPage,
      ];
    } else {
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
  } as PostListType;
}
