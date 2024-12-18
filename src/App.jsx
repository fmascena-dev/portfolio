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
        {/* <Route path="/technologies" element={<Technologies />} />{' '}
        <Route path="/projects" element={<Projects />} />{' '}
        <Route path="/contact" element={<Contact />} />{' '}
        <Route path="/about" element={<About />} />{' '} */}
      </Routes>
    </BrowserRouter>
  );
}
