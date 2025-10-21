import { NextRequest, NextResponse } from 'next/server'
import { getProjectData } from '@/lib/projects'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { searchParams } = new URL(request.url)
  const language = (searchParams.get('lang') || 'nl') as 'nl' | 'fr' | 'en'
  
  try {
    const project = getProjectData(id, language)
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
