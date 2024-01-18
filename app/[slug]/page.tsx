import { PostType } from '@/interface/post';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { PostBody } from './components/post-body';
import DateFormatter from '../components/date-formatter';
import Footer from '../components/footer';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = await getPost({ params });
  return (
    <>
      <article className="max-w-xl mx-auto">
        <h1 className="text-4xl text-balance tracking-tight font-bold mt-20 mb-8 pb-10 border-b border-neutral-100 dark:border-neutral-800">
          {post.title}
        </h1>
        <DateFormatter
          dateString={post.date}
          className="pb-5 block dark:text-neutral-500"
        />
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
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    ...post,
    content,
  };
}
