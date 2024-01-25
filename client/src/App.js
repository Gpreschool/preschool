import logo from './logo.svg';
// import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About.jsx'
import ClassSkill from './components/pages/ClassSkill.jsx';
import Contact from './components/pages/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParentsCorner from './components/pages/ParentsCorner.jsx';
import Franchise from './components/pages/Franchise.jsx';
import Curriculum from './components/pages/Curriculum.jsx';
import HighLights from './components/pages/HighLights.jsx';
import Footer from './components/common/Footer.jsx';
import Admission from './components/pages/Admission.jsx';
function App() {
  return (
    <Router>
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<About />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />       
         <Route path="/franchise" element={<Franchise/>} />

        <Route path="/parentscorner" element={<ParentsCorner/>} />
        <Route path="/highlight" element={<HighLights/>} />
        <Route path="/Admission" element={<Admission/>} />
      </Routes>
    </div>

  </Router>
  );
}

export default App;
