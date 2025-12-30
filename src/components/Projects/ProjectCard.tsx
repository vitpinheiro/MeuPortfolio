type ProjectCardProps = {
  title: string
  description: string
  link?: string
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank">Ver Projeto</a>}
    </div>
  )
}

export default ProjectCard
