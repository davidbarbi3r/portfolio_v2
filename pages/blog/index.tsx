import Container from "../../modules/app/utils/container";
import MoreStories from "../../modules/markdown_comp/blog/components/more-stories";
import HeroPost from "../../modules/markdown_comp/blog/components/hero-post";
import Intro from "../../modules/markdown_comp/blog/components/intro";
import Layout from "../../modules/app/components/layout";
import { getAllPosts } from "../../lib/postApi";
import Head from "next/head";
import Post from "../../modules/markdown_comp/blog/interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Gnark Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              ogImage={heroPost.ogImage}
              content={heroPost.content}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
