import './App.scss';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/NavigationBar';
import PortfolioGrid from './components/portfolio-grid/PortfolioGrid';
import Home from './pages/Home';
import port from './config/portfolio'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PortfolioGrid portfolio={port} />
      <Footer />
    </div>
  );
}

export default App;
