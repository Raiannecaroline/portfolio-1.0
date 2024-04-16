import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const Principal: React.FC = () => {
 

  const [displayedText1, setDisplayedText1] = useState('')
  const [displayedText2, setDisplayedText2] = useState('')
  const [displayedText3, setDisplayedText3] = useState('')

  const text1 = 'Olá, eu sou a'
  const text2 = 'Raiane Caroline'
  const text3 = 'Desenvolvedora FullStack'

  const typeEffect = (text: string, setText: React.Dispatch<React.SetStateAction<string>>, delay = 100) => {
    let index = 0
    const interval = setInterval(() => {
      setText(text.slice(0, index + 1))
      index += 1
      if (index === text.length) {
        clearInterval(interval)
      }
    }, delay)
  }

  useEffect(() => {
    typeEffect(text1, setDisplayedText1)
    typeEffect(text2, setDisplayedText2, 120)
    typeEffect(text3, setDisplayedText3, 140)
  }, [])

  return (
    <>
      <main className="bg-black min-h-screen flex items-center justify-center">
        <section className="container mx-auto px-4">
          <section className="grid lg:grid-cols-2 items-center justify-center text-white space-y-6 lg:space-y-0">
            {/* Imagem */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://tinyurl.com/msvzd5fr"
                alt="Raiane Caroline"
                className="w-60 h-60 rounded-full object-cover transition-transform transform hover:scale-105"
              />
            </div>

            {/* Conteúdo de Texto */}
            <div className="flex flex-col space-y-4 lg:space-y-6 lg:pl-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-semibold">{displayedText1}</h2>
                <h1 className="text-5xl font-bold">{displayedText2}</h1>
                <h2 className="text-3xl font-semibold">{displayedText3}</h2>
              </div>

              {/* Links Sociais */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/Raiannecaroline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-400"
                >
                  <FaGithubSquare />
                </a>
                <a
                  href="https://www.linkedin.com/in/raiannecaroline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-gray-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default Principal
