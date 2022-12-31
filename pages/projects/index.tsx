import Head from "next/head";
import Layout from "../../modules/app/components/layout";
import Container from "../../modules/app/utils/container";
import Intro from "../../modules/projects/components/intro";
import Project from "../../modules/projects/interfaces/project";
import { getAllProjects } from "../../lib/projectApi";
import HeroProject from "../../modules/projects/components/hero-project";
import MoreProjects from "../../modules/projects/components/moreProjects";

type Props = {
  allProjects: Project[];
};

export default function Projects({ allProjects }: Props) {
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