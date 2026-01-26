import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <Header/>
    <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Main menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Footer/>
      Homepage
    </>
  );
}

export default App;
