import React from 'react';

const MainPage = ({ children }) => {
  return (
    <main className="bg-blue-100 min-h-screen px-4 sm:px-8 md:px-16 lg:px-40 py-4 sm:py-6 md:py-8 lg:py-10">
      {children}
    </main>
  );
};

export default MainPage; 