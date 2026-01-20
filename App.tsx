import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen w-full flex-col">
        <Header />

        <main className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
