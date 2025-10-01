import { Routes, Route } from 'react-router-dom';

// Import halaman-halaman
import Home from './pages/home';
import Book from './pages/book';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Import komponen
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      
      <div className="container">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;