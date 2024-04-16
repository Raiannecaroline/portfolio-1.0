import React from 'react'
import Nav from '../Nav'

const Sobre: React.FC = () => {
  return (
    <>
      <Nav />
      <section className="bg-black text-white min-h-screen py-12 flex items-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Sobre Mim</h2>
            <p className="text-lg text-gray-400 mt-2">Eunápolis, BA</p>
          </div>

          {/* Bloque de Introdução */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4">
              Um pouco sobre minha história
            </h3>
            <p className="text-lg leading-relaxed">
              Olá, eu sou a Raiane Caroline, tenho 30 anos e sou desenvolvedora
              FullStack. Atualmente, estou cursando Análise e Desenvolvimento de
              Sistemas no IFBA Campus de Eunápolis. Sou apaixonada por
              tecnologia e por aprender coisas novas, e estou sempre em busca de
              novos desafios e oportunidades.
            </p>
          </div>

          {/* Bloco de Habilidades */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4">Habilidades</h3>
            <p className="text-lg leading-relaxed">
              Possuo habilidade em Desenvolvimento Web, utilizando tecnologias
              como HTML, CSS, JavaScript, ReactJS, Java, Angular, NodeJS,
              TypeScript, MySQL, MongoDB, Git, Git Flow, entre outras. Além
              disso, tenho conhecimento em metodologias ágeis, como Scrum e
              Kanban.
            </p>
          </div>

          {/* Bloco de Hobbies */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-4">Hobbies</h3>
            <p className="text-lg leading-relaxed">
              Meus hobbies incluem ler, estudar, passar tempo com meu esposo,
              tenho uma coleção de mangás e amo assistir séries e filmes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre
