import React from 'react'
import Principal from '../../components/Principal'
import Sobre from '../../components/Sobre'
import Nav from '../../components/Nav'
import Projetos from '../../components/Projetos'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white">
        <Nav />
        <Principal />
        <Sobre />
        <Projetos />
        <Footer />
      </div>
    </>
  )
}

export default Home
