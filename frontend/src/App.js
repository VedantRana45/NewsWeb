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
          <div className="main-body-container">

            <div className="navBarContainer">
              <Navbar />
              <FieldBar />
            </div>
            <div className={window.innerWidth > 481 ? 'container main-container' : 'main-container'}>
              <Home />
            </div>
          </div>
        </NewsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
