import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectSlugs(locale: string = 'en') {
  return fs
          .readdirSync(join(projectsDirectory, `${locale}`))
}

export function getProjectBySlug(slug: string, fields: string[] = [], locale: string = 'en') {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectsDirectory, `${locale}`, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects(fields: string[] = [], locale: string = 'en') {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields, locale))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1))
    console.log(projects)
  return projects
}

