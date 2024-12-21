import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Tecnologias from './components/Tecnologias/Tecnologias.jsx';
import Contato from './components/Contato/Contato.jsx';
import Projetos from './components/Projetos/Projetos.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import Socials from './components/RedesSociais/Socials.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
