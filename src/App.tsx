import PWABadge from './PWABadge.tsx';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error.tsx';
import Home from './components/Home.tsx';
import Footer from './components/Footer.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
      <PWABadge />
    </BrowserRouter>
  )
}

export default App;
