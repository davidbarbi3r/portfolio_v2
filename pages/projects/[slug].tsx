import { useRouter } from "next/router";
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
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header type="project" />
        {router.isFallback ? (
          <ProjectTitle>Loading…</ProjectTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {project.title} | David Blog
                </title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <ProjectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
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
};

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "techs",
    "content",
    "ogImage",
    "coverImage",
  ]);
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

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
