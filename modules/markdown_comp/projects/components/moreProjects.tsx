import ProjectPreview from "./project-preview";
import type Project from "../interfaces/project";

type Props = {
  projects: Project[];
};

const MoreStories = ({ projects }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        Voir plus
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            techs={project.techs}
            slug={project.slug}
            excerpt={project.excerpt}
            ogImage={project.ogImage}
            content={project.content}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
