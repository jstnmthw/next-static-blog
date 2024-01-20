import { PostType } from '@/interface/post';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { PostBody } from './components/post-body';
import DateFormatter from '../components/date-formatter';
import Footer from '../components/footer';
import Image from 'next/image';
import { Badge } from '../components/badge';
import Link from 'next/link';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = await getPost({ params });
  return (
    <>
      <article>
        <div className="max-w-xl mx-auto mt-20 mb-10 pb-10">
          <h1 className="text-4xl text-balance tracking-tight font-bold mb-6">
            {post.title}
          </h1>
          <DateFormatter
            dateString={post.date}
            className="pb-5 block dark:text-neutral-500 text-sm"
          />
          {post.categories.map((category: string) => (
            <Link key={category} href={`/category/${category.toLowerCase()}`}>
              <Badge
                color="green"
                className="border font-xs border-green-400/30"
              >
                {category}
              </Badge>
            </Link>
          ))}
        </div>
        <figure className="mb-32 max-w-5xl mx-auto">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={1024}
            height={684}
            className="mb-2"
          />
          <figcaption className="text-xs text-neutral-500 dark:text-neutral-600 italic text-right">
            Image by{' '}
            <a href="https://unsplash.com/@ryoji__iwata">Ryoji Iwata</a>
          </figcaption>
        </figure>
        <PostBody content={post.content} />
      </article>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost({ params }: Params): Promise<PostType> {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'categories',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    ...post,
    content,
  };
}
