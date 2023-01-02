import Head from "next/head"
import About from "../modules/app/components/about"
import Hero from "../modules/app/components/hero"
import LastOnes from "../modules/app/components/lastOnes"
import Layout from "../modules/app/components/layout"
import { getAllProjects } from "../lib/projectApi"
import { getAllPosts } from "../lib/postApi"
import Project from "../modules/projects/interfaces/project"
import PostType from "../modules/blog/interfaces/post"

type Props = {
  allProjects: Project[];
  allPosts: PostType[];
};

function index({ allProjects, allPosts }:Props, ) {
  return (
    <>
      <Layout>
        <Head>
          <title>Gnark Projects</title>
        </Head>
        <Hero/>
        <About/>
        <LastOnes lastPost={allPosts[0]} lastProject={allProjects[0]} />
      </Layout>
    </>
  )
}

export default index

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "techs",
    "coverImage",
    "excerpt",
  ]);

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects, allPosts },
  };
};
