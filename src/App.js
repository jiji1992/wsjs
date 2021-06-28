import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/HeadBar';
import { Footer, Title }  from './components/Footer';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Title/>
      <Footer/>
      <Products/>
    </div>
  );
}

export default App;
