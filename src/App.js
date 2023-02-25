import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Projetos from './components/pages/Projetos';
import Projeto from './components/pages/Projeto';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import NovoProjeto from './components/pages/NovoProjeto';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projetos />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/newproject" element={<NovoProjeto />} />
          <Route path="/project/:id" element={<Projeto />} />
      </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
