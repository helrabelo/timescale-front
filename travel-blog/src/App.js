import './App.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
