export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dion Van Hecke",
    "jobTitle": "Junior Full Stack Developer",
    "description": "Junior Full Stack Developer with 9 years of coding passion. Specializing in Next.js, React, TypeScript, Laravel, and modern web technologies.",
    "url": "https://dionvanhecke.dev",
    "email": "dionvh@icloud.com",
    "nationality": "Belgian",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Artevelde Hogeschool",
        "location": "Gent, Belgium"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Het Spectrum",
        "location": "Belgium"
      }
    ],
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Laravel",
      "NestJS",
      "PHP",
      "C#",
      "Tauri",
      "Web Development",
      "Full Stack Development",
      "Cross-platform Development"
    ],
    "sameAs": [
      "https://github.com/dionvanhecke",
      "https://be.linkedin.com/in/dionvanhecke"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Simcogroup"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
