import './App.scss';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/NavigationBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
