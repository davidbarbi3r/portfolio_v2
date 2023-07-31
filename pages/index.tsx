import Head from "next/head";
import About from "../modules/app/components/about";
import Hero from "../modules/app/components/hero";
import LastOnes from "../modules/app/components/lastOnes";
import Layout from "../modules/app/components/layout";
import { getAllProjects } from "../lib/projectApi";
import { getAllPosts } from "../lib/postApi";
import Project from "../modules/markdown_comp/projects/interfaces/project";
import PostType from "../modules/markdown_comp/blog/interfaces/post";
import { Client } from "@notionhq/client"

type Props = {
  allProjects: Project[];
  allPosts: PostType[];
};

const notion = new Client({ auth: process.env.NOTION_SECRET })
const clientsDatabaseId = process.env.NOTION_CLIENTS_DATABASE_ID

function index({ allProjects, allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>David Barbier</title>
        </Head>
        <Hero />
        <About />
        <LastOnes lastPost={allPosts[0]} lastProject={allProjects[0]} />
      </Layout>
    </>
  );
}

export default index;

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "techs",
    "coverImage",
    "excerpt",
    "content"
  ]);

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content"
  ]);

  const response = await notion.databases.retrieve({
    database_id: clientsDatabaseId,
  })
  
    console.log(response)
  

  return {
    props: { allProjects, allPosts },
  };
};
