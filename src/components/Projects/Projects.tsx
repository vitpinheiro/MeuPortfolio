type Project = {
  title: string
  description: string
}

function Projects() {
  const projects: Project[] = [
    { title: 'Portfólio React', description: 'Meu site pessoal' },
    { title: 'Todo List', description: 'Lista de tarefas' },
  ]

  return (
    <section>
      <h2>Projetos</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects
