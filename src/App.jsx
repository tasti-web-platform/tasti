import './App.css'
import NavBar from './layouts/NavBar';
import MainPage from './layouts/MainPage';
import Footer from './layouts/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import TryDemo from './pages/TryDemo';
import CamFITool from './pages/CamFITool';
import CamGenTool from './pages/CamGenTool';
import CamTrainTool from './pages/CamTrainTool';
import CamQTool from './pages/CamQTool';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <MainPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/trydemo" element={<TryDemo />} />
          <Route path="/camfitool" element={<CamFITool />} />
          <Route path="/camgentool" element={<CamGenTool />} />
          <Route path="/camtraintool" element={<CamTrainTool />} />
          <Route path="/camqtool" element={<CamQTool />} />
        </Routes>
      </MainPage>
      <Footer />
    </BrowserRouter>
  )
}

export default App
