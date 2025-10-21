import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ProjectMetadata {
  id: string
  title: {
    nl: string
    fr: string
    en: string
  }
  category: 'mobile' | 'web' | 'tools'
  company: string
  year: string
  status: {
    nl: string
    fr: string
    en: string
  }
  image: string
  technologies: string[]
}

export interface Project {
  metadata: ProjectMetadata
  content: string
}

const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

export function getAllProjectIds(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading projects directory:', error)
    return []
  }
}

export function getProjectData(id: string, language: 'nl' | 'fr' | 'en' = 'nl'): Project | null {
  try {
    // Try to load language-specific file first (e.g., project.nl.md)
    let fullPath = path.join(projectsDirectory, `${id}.${language}.md`)
    
    // If language-specific file doesn't exist, fall back to default .md file
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(projectsDirectory, `${id}.md`)
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      metadata: data as ProjectMetadata,
      content
    }
  } catch (error) {
    console.error(`Error reading project ${id}:`, error)
    return null
  }
}

export function getAllProjects(): Project[] {
  const ids = getAllProjectIds()
  return ids
    .map(id => getProjectData(id))
    .filter((project): project is Project => project !== null)
}
