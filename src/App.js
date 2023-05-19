import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/card" element={<Card />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
