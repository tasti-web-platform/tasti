import './App.css'
import NavBar from './layouts/NavBar';
import MainPage from './layouts/MainPage';
import Footer from './layouts/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import TryDemo from './pages/TryDemo';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <MainPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/trydemo" element={<TryDemo />} />
        </Routes>
      </MainPage>
      <Footer />
    </BrowserRouter>
  )
}

export default App
