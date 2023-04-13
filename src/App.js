import './App.css';
import { Toaster } from 'react-hot-toast';
import Main from './pages/Main';
import Sentiment from './pages/Sentiment';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  document.body.style.background = "#f3f0ec"
  return <>
    <Toaster />
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/emotions" element={<Sentiment />} />
        </Routes>
      </BrowserRouter>
  </>
}

export default App;
