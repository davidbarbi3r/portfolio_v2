import { useRouter } from "next/router";
import { motion, useScroll, useSpring } from "framer-motion";
import ErrorPage from "next/error";
import Container from "../../modules/app/utils/container";
import PostBody from "../../modules/markdown_comp/blog/post_component/post-body";
import Header from "../../modules/markdown_comp/components/header";
import PostHeader from "../../modules/markdown_comp/blog/post_component/post-header";
import Layout from "../../modules/app/components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/postApi";
import PostTitle from "../../modules/markdown_comp/blog/post_component/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../modules/markdown_comp/blog/interfaces/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { scrollYProgress } = useScroll();
  // useSpring is used to smooth out the animation with velocity
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Layout preview={preview}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#5594b5] origin-[0%]"
        style={{ scaleX }}
      />
      <Container>
        <Header type="blog" />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | David Barbier</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                tags={post.themes}
                content={post.content}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
  locale;
};

export async function getStaticProps({ params, locale }: Params) {
  const post = getPostBySlug(
    params.slug,
    ["title", "date", "slug", "author", "content", "ogImage", "coverImage"],
    locale
  );
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const posts = getAllPosts(["slug"]);

  return {
    paths: locales!.flatMap((locale) =>
      posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
          locale,
        };
      })
    ),
    fallback: false,
  };
}
