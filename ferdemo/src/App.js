import logo from './logo.svg';
import FoodOrder from './components/FoodOrder';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import People from './people';
function App() {
  return (
    <div>
      <People/>
      <FoodOrder />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
