import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import ProyectsPage from './Pages/ProyectsPage/ProyectsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutPage title='AK - About' />} />
        <Route path="/services" element={<ServicesPage title='AK - Services' />} />
        <Route path="/proyects" element={<ProyectsPage title='AK - Proyects' />} />
        <Route path="/fullpage" element={<HomePage title='AK - Home' />} />
        <Route path="*" element={<Navigate to='/fullpage' replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
