import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import CreateProject from './pages/CreateProjects';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('dark', 'light');
    html.classList.add(darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <div className="content-wrapper">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
              <Route path="/create-project" element={<CreateProject darkMode={darkMode} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;