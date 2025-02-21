import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import ContactPage from './pages/Contact';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add other routes here */}
          </Routes>
          <Footer />
        </div>
      </Router>


    </div>
  );
}

export default App;
