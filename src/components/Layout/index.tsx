import { Outlet } from 'react-router-dom'
import Nav from '../Nav'
import React from 'react'

const Layout: React.FC = () => (
  <>
    <div>
      <Nav /> {/* Inclua o menu fixo */}{' '}
      {/* Adicione margem para compensar o menu fixo */}
      <Outlet /> {/* Renderiza o conteúdo específico de cada rota */}
    </div>
  </>
)

export default Layout
