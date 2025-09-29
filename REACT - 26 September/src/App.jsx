import { Routes, Route } from 'react-router-dom'

// Import halaman-halaman
import Home from './pages/home'
import Team from './pages/team'
import Contact from './pages/contact'

// Import komponen
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;