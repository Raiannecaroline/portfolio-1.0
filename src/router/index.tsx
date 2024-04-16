import {createBrowserRouter} from "react-router-dom";
import Sobre from "../components/Sobre";
import Home from "../pages/Home";
import Projetos from "../components/Projetos";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Principal from "../components/Principal";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '/nav',
    element: <Nav />
  },
  {
    path: '/projetos',
    element: <Projetos/>
  },
  {
    path: '/footer',
    element: <Footer/>
  },
  {
    path: '/principal',
    element: <Principal/>
  }
])

export default router;