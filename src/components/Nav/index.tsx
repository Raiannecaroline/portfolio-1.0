import React from 'react'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <>
      <header className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto p-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                to="/"
                className="text-white text-2xl font-bold transition-colors duration-200 hover:text-blue-400"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="text-white text-2xl font-bold transition-colors duration-200 hover:text-blue-400"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className="text-white text-2xl font-bold transition-colors duration-200 hover:text-blue-400"
              >
                Projetos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      F
    </>
  )
}

export default Nav
