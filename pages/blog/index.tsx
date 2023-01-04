import Container from "../../modules/app/utils/container";
import MoreStories from "../../modules/markdown_comp/blog/components/more-stories";
import HeroPost from "../../modules/markdown_comp/blog/components/hero-post";
import Intro from "../../modules/markdown_comp/blog/components/intro";
import Layout from "../../modules/app/components/layout";
import { getAllPosts } from "../../lib/postApi";
import Head from "next/head";
import Post from "../../modules/markdown_comp/blog/interfaces/post";
import removeDuplicates from "../../modules/markdown_comp/utils/removeDuplicate";
import { useState } from "react";
import Filters from "../../modules/markdown_comp/utils/Filters";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {

  const allFilters = removeDuplicates([...allPosts.map((post) => post.themes).flat()]);
  
  const [filters, setFilters] = useState<string[]>([]);

  const filter = {
    addFilter : (filter: string): void => {
      setFilters((prev) => [...prev, filter])
    },

    removeFilter: (filter: string): void => {
      setFilters((prev) => [...prev].filter((s) => s != filter))
    }
  }

allPosts = allPosts.filter((post) => {
  if (filters.length === 0) {
    return post
  } else {
    return post.themes.some((tech) => filters.includes(tech))
  }
})


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
          <Filters allFilters={allFilters} filters={filters} add={filter.addFilter} remove={filter.removeFilter} />
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
              themes={heroPost.themes}
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
    "themes",
  ]);

  return {
    props: { allPosts },
  };
};
