import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarRender from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './Public/spinner.css';



function App() {



  return (
    <Router>
      <div className="App">
        <NavbarRender></NavbarRender>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
