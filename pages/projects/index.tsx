import Head from "next/head";
import Layout from "../../modules/app/components/layout";
import Container from "../../modules/app/utils/container";
import Intro from "../../modules/markdown_comp/projects/components/intro";
import Project from "../../modules/markdown_comp/projects/interfaces/project";
import HeroProject from "../../modules/markdown_comp/projects/components/hero-project";
import MoreProjects from "../../modules/markdown_comp/projects/components/moreProjects";
import { getAllProjects } from "../../lib/projectApi";
import { useState } from "react";
import Filters from "../utils/Filters";
import removeDuplicates from "../utils/removeDuplicate";

type Props = {
  allProjects: Project[];
};

export default function Projects({ allProjects }: Props) {
  // const filters = removeDuplicates([...allProjects.map((project) => project.techs).flat()]);
  // allProjects.map((project) => project.techs)
  
  // const [useFilter, setUseFilter] = useState<string[]>(filters);
  const heroProject = allProjects.length > 0 ? allProjects[0] : null;
  const moreProjects = allProjects.length > 1 ? allProjects.slice(1) : null;
  return (
    <>
      <Layout>
        <Head>
          <title>Gnark Blog</title>
        </Head>
        <Container>
          <Intro />
          {/* <Filters filters={filters} setUseFilter={setUseFilter} /> */}
          {heroProject && (
            <HeroProject
              title={heroProject.title}
              coverImage={heroProject.coverImage}
              date={heroProject.date}
              slug={heroProject.slug}
              techs={heroProject.techs}
              excerpt={heroProject.excerpt}
              ogImage={heroProject.ogImage}
              content={heroProject.content}
            />
          )}
          {moreProjects.length > 0 && <MoreProjects projects={moreProjects} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "techs",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects },
  };
};