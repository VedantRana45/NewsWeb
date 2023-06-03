import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import FieldBar from './Components/Navbar/FieldBar';
import { NewsContextProvider } from './Components/Home/NewsContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <NewsContextProvider>
          <div className="container main-container">
            <Navbar />
            <FieldBar />
            <Home />
          </div>
        </NewsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
