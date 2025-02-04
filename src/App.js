import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Achievement from './components/Achievement';
import Whatcompanyoffers from './components/Whatcompanyoffers';
import Footer from './components/footer';
import Usecase from './components/usecases';
import ScaleAndGrow from './components/scaleandgrow';
import Quality from './components/quality';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Achievement />
      <Whatcompanyoffers />
      <Quality />
      <ScaleAndGrow />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
