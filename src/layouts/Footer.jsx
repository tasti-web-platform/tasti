import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_tasti_light.png';
import AcdLogo from '../assets/AcdLogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="TASTI Logo" className="h-32 md:h-3/4 w-auto object-contain" />
            
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/camfitool" className="hover:text-white transition-colors">CamFITool</Link>
              </li>
              <li>
                <Link to="/camgentool" className="hover:text-white transition-colors">CamGenTool</Link>
              </li>
              <li>
                <Link to="/camtraintool" className="hover:text-white transition-colors">CamTrainTool</Link>
              </li>
              <li>
                <Link to="/camqtool" className="hover:text-white transition-colors">CamQTool</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-2 mb-4">
                <ul className="space-y-2 mb-4">
                  <li>tasti.web.site@gmail.com</li>
                  <li>acd@acd.com.tr </li>
                  <li>+90 222 236 20 10</li>
                </ul>
                <div className="space-y-2 mb-4">
                  <p>Büyükdere Mah. Prof.Dr.Nabi Avcı Bulvarı,</p>
                  <p>Eskişehir Osmangazi Üniversitesi Teknoparkı</p>
                  <p>No: 4/59 B24 Odunpazarı ESKİŞEHİR</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12269.430887167388!2d30.474389!3d39.747059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc1785efd82aa9%3A0xde6e726c5756c249!2sESOG%C3%9C%20TEKNOKENT!5e0!3m2!1str!2sus!4v1744151716656!5m2!1str!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="TASTI Location"
                  />
                </div>
                <img src={AcdLogo} alt="ACD Logo" className="w-36 h-14 mt-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} TASTI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 