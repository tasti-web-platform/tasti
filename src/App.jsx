import './App.css'
import NavBar from './layouts/NavBar';
import MainPage from './layouts/MainPage';
import Footer from './layouts/Footer';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CamFITool from './pages/CamFITool';
import CamGenTool from './pages/CamGenTool';
import CamTrainTool from './pages/CamTrainTool';
import CamQTool from './pages/CamQTool';
import WhatIsTasti from './pages/WhatIsTasti';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <MainPage>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/what-is-tasti" element={<WhatIsTasti />} />
          {/*<Route path="/contactus" element={<ContactUs />} />
          <Route path="/trydemo" element={<TryDemo />} />*/}
          <Route path="/camfitool" element={<CamFITool />} />
          <Route path="/camgentool" element={<CamGenTool />} />
          <Route path="/camtraintool" element={<CamTrainTool />} />
          <Route path="/camqtool" element={<CamQTool />} />
        </Routes>
      </MainPage>
      <Footer />
    </HashRouter>
  )
}

export default App
