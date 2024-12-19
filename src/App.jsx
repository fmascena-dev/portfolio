import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {' '}
        <Route path="/" element={<Home />} />{' '}
        {/* <Route path="/tecnologias" element={<Tecnologias />} />{' '}
        <Route path="/projetos" element={<Projetos />} />{' '}
        <Route path="/contato" element={<Contato />} />{' '}
        <Route path="/sobre" element={<SobreMim />} />{' '} */}
      </Routes>
    </BrowserRouter>
  );
}
