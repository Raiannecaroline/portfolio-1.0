import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />{' '}
          {/* Rota para a página inicial */}
          {/* Rotas aninhadas dentro do Layout */}
          <Route element={<Layout />}>
            {' '}
            {/* Rota principal com Layout */}
            <Route path="/sobre" element={<Sobre />} /> {/* Página Sobre */}
            <Route path="/projetos" element={<Projetos />} />{' '}
            {/* Página Projetos */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
