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
  liveUrl?: string
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
    let fullPath = path.join(projectsDirectory, `${id}.${language}.md`)
    
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(projectsDirectory, `${id}.md`)
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const languageContent = extractLanguageContent(content, language)

    return {
      metadata: data as ProjectMetadata,
      content: languageContent
    }
  } catch (error) {
    console.error(`Error reading project ${id}:`, error)
    return null
  }
}

function extractLanguageContent(content: string, language: 'nl' | 'fr' | 'en'): string {
  const languageHeaders = ['# nl', '# fr', '# en']
  
  const langHeader = `# ${language}`
  const startIndex = content.indexOf(langHeader)
  
  if (startIndex === -1) {
    return content
  }
  
  let endIndex = content.length
  for (const header of languageHeaders) {
    if (header !== langHeader) {
      const nextIndex = content.indexOf(header, startIndex + langHeader.length)
      if (nextIndex !== -1 && nextIndex < endIndex) {
        endIndex = nextIndex
      }
    }
  }
  
  let extracted = content.substring(startIndex + langHeader.length, endIndex).trim()
  
  if (extracted.endsWith('---')) {
    extracted = extracted.substring(0, extracted.lastIndexOf('---')).trim()
  }
  
  return extracted
}

export function getAllProjects(): Project[] {
  const ids = getAllProjectIds()
  return ids
    .map(id => getProjectData(id))
    .filter((project): project is Project => project !== null)
}
