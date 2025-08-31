import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'src/data/projects')

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory)
  const allData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getFeaturedProjectsData(ids) {
  
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory)
  const allData = []
  fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    if ( ids.includes(id) ) {
      // Combine the data with the id
      allData.push({
        id,
        ...matterResult.data
      });
    }
  })

  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getRelatedProjects(current_id, limit = 3) {
  const fileNames = fs.readdirSync(projectsDirectory);

  // Load all
  const all = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return { id, ...matterResult.data };
  });

  // Find current to know its category
  const current = all.find(p => p.id === current_id);
  const currentCategory = current?.category ?? null;

  // Exclude current
  const others = all.filter(p => p.id !== current_id);

  // Same-category first
  const sameCat = currentCategory ? others.filter(p => p.category === currentCategory) : [];
  const difCat  = currentCategory ? others.filter(p => p.category !== currentCategory) : others;

  // Sort within groups (optional: by date desc if you have date)
  const byDateDesc = (a, b) => (new Date(b.date || 0)) - (new Date(a.date || 0));
  sameCat.sort(byDateDesc);
  difCat.sort(byDateDesc);

  // Combine and limit
  return [...sameCat, ...difCat].slice(0, limit);
}

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}