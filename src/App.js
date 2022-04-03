import './App.css';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Review></Review>
    </div>
  );
}

export default App;
