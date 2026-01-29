import './App.css';
import Header from './components/Header';
import FoodOrder from './components/FoodOrder';
import People from './components/People';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <FoodOrder />
        <div className="container">
          <hr className="my-5" />
        </div>
        <People />
      </main>
      <Footer />
    </div>
  );
}

export default App;
