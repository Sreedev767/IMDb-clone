import { Route,Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
