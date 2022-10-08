import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarRender from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Tools from './components/tools/Tools'
import Games from './components/games/Games'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
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
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
