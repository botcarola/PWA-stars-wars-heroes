import PWABadge from './PWABadge.tsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error.tsx';
import Home from './components/Home.tsx';

function App() { 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>    
      <PWABadge />
    </BrowserRouter>
  )
}

export default App;
