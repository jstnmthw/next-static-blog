import { getPostBySlug, getAllPosts } from '@/lib/api';
import { PostBody } from '@/app/components/post-body';
import { PostType } from '@/interface/post';
import markdownToHtml from '@/lib/markdownToHtml';
import PostImage from '@/app/components/post-image';
import PostHeader from '@/app/components/post-header';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = await getPost({ params });
  return (
    <article>
      <PostHeader post={post} />
      <PostImage image={post.coverImage} alt={post.title} />
      <PostBody content={post.content} />
    </article>
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
