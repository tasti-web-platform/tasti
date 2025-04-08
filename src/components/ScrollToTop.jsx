import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => { //Her yeni sayfaya geçişte scroll pozisyonunun otomatik olarak en üste dönmesi için
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 