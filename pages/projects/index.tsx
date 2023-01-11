import Head from "next/head";
import Layout from "../../modules/app/components/layout";
import Container from "../../modules/app/utils/container";
import Intro from "../../modules/markdown_comp/projects/components/intro";
import Project from "../../modules/markdown_comp/projects/interfaces/project";
import HeroProject from "../../modules/markdown_comp/projects/components/hero-project";
import MoreProjects from "../../modules/markdown_comp/projects/components/moreProjects";
import { getAllProjects } from "../../lib/projectApi";
import { useState } from "react";
import Filters from "../../modules/markdown_comp/utils/Filters";
import removeDuplicates from "../../modules/markdown_comp/utils/removeDuplicate";

type Props = {
  allProjects: Project[];
};

export default function Projects({ allProjects }: Props) {
  const allFilters = removeDuplicates([...allProjects.map((project) => project.techs).flat()]);
  
  const [filters, setFilters] = useState<string[]>([]);

  const filter = {
    addFilter : (filter: string): void => {
      setFilters((prev) => [...prev, filter])
    },

    removeFilter: (filter: string): void => {
      setFilters((prev) => [...prev].filter((s) => s != filter))
    }
  }

allProjects = allProjects.filter((project) => {
  if (filters.length === 0) {
    return project
  } else {
    return project.techs.some((tech) => filters.includes(tech))
  }
})

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
          <Filters allFilters={allFilters} filters={filters} add={filter.addFilter} remove={filter.removeFilter} />
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
          {moreProjects && <MoreProjects projects={moreProjects} />}
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
    "content"
  ]);

  return {
    props: { allProjects },
  };
};