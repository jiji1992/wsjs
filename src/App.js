import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadBar from './components/HeadBar';
import { Footer, Title }  from './components/Footer';
function App() {
  return (
    <div className="App">
      <HeadBar/>
      <Title/>
      <Footer/>
      <Products/>
    </div>
  );
}

export default App;
