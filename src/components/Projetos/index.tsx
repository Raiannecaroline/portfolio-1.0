import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import Nav from '../Nav'

type Projetos = {
  id: number
  name: string
  description: string | null
  language: string | null
  html_url: string
}

const Projetos: React.FC = () => {
  const [projects, setProjects] = useState<Projetos[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Projetos[]>(
          'https://api.github.com/users/Raiannecaroline/repos'
        )
        setProjects(response.data)
      } catch (error) {
        console.error('Erro ao buscar projetos:', error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <>
      <Nav />
      <section className="bg-black text-white min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projetos</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-gray-700"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-300 mb-4">{project.description}</p>
                )}
                <div className="mb-4 text-gray-400">
                  <strong>Tecnologia:</strong>{' '}
                  {project.language || 'Não especificado'}
                </div>
                <div className="flex justify-end space-x-4">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithubSquare />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projetos
