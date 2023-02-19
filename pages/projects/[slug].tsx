import { useRouter } from "next/router";
import { motion, useScroll, useSpring } from "framer-motion";
import ErrorPage from "next/error";
import Container from "../../modules/app/utils/container";
import ProjectBody from "../../modules/markdown_comp/projects/project_component/project-body";
import Header from "../../modules/markdown_comp/components/header";
import ProjectHeader from "../../modules/markdown_comp/projects/project_component/project-header";
import Layout from "../../modules/app/components/layout";
import ProjectTitle from "../../modules/markdown_comp/projects/project_component/project-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import Project from "../../modules/markdown_comp/projects/interfaces/project";
import { getAllProjects, getProjectBySlug } from "../../lib/projectApi";

type Props = {
  project: Project;
  moreProjects: Project[];
  preview?: boolean;
};

export default function Post({ project, moreProjects, preview }: Props) {
  const router = useRouter();
  console.log(moreProjects);

  if (!router.isFallback && !project?.slug) {
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
        <Header type="project" />
        {router.isFallback ? (
          <ProjectTitle>Loading…</ProjectTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{project.title} | David Barbier</title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <ProjectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                content={project.content}
              />
              <ProjectBody content={project.content} />
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
  const project = getProjectBySlug(
    params.slug,
    ["title", "date", "slug", "techs", "content", "ogImage", "coverImage"],
    locale
  );
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths({ locales }) {
  const projects = getAllProjects(["slug"]);

  return {
    paths: locales!.flatMap((locale) =>
      projects.map((project) => {
        return {
          params: {
            slug: project.slug,
          },
          locale,
        };
      })
    ),
    fallback: false,
  };
}
