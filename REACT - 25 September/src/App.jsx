import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Function untuk ganti halaman
  const showPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#"
              onClick={() => showPage('home')}
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a 
                href="#" 
                onClick={() => showPage('home')} 
                className="nav-link px-2"
              >
                Home
              </a>
            </li>
            <li><a href="#" className="nav-link px-2">Book</a></li>
            <li>
              <a 
                href="#" 
                onClick={() => showPage('team')} 
                className="nav-link px-2"
              >
                Team
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={() => showPage('contact')} 
                className="nav-link px-2"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>

        {currentPage === 'home' && (
          <>
            <div className="container my-5">
              <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                    Atomic Habits: Perubahan kecil yang Memberikan hasil luar biasa
                  </h1>
                  <p className="lead">
                    Cara mudah dan terbukti untuk membentuk kebiasaan baik dan
                    menghilangkan kebiasaan buruk
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg px-4"
                    >
                      Detail
                    </button>
                  </div>
                </div>

                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                  <img
                    className="rounded-3 img-fluid"
                    src="https://picsum.photos/720/600"
                    alt="Hero"
                    width="720"
                  />
                </div>
              </div>
            </div>

            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Best Selling Book</h1>
                  <p className="lead text-body-secondary">
                    Something short and leading about the collection below—its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don't simply skip over it entirely.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                    <a href="#" className="btn btn-secondary my-2">Other Book</a>
                  </p>
                </div>
              </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {Array.from({ length: 6 }).map((_, idx) => {
                    const bookCovers = [
                      "https://otimages.com/Bookcover/2255/9781590302255.jpg",
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg05wdZqt4-1GoNidh-k2MD9imEf0rdaI0Q&s",
                      "https://images.thegreatestbooks.org/bxhcb1vedy2zjjytojrqsqxaxroc", 
                      "https://images.thegreatestbooks.org/sjgwsul1as680aj6mt68izewif4x",
                      "https://images.thegreatestbooks.org/2lg73ocsv9m277nyi4bl4ggr5au9",
                      "https://images.thegreatestbooks.org/zczsb1tdkvo582f59slp0oam4vg5"
                    ]

                    const bookDescriptions = [
                      "Atomic Habits",
                      "Ulysses",
                      "In Search of Lost Time",
                      "The Great Gatsby",
                      "The Catcher",
                      "One Hundred Years of Solitude"
                    ]

                    return (
                      <div className="col" key={idx}>
                        <div className="card shadow-sm">
                          <img 
                            src={bookCovers[idx]} 
                            alt={`Book Cover ${idx + 1}`}
                            className="card-img-top"
                            style={{height: '225px', objectFit: 'cover'}}
                          />
                          <div className="card-body">
                            <p className="card-text fw-bold">
                              {bookDescriptions[idx]}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                  View
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                  Edit
                                </button>
                              </div>
                              <small className="text-body-secondary"></small>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}

        {currentPage === 'team' && (
          <div className="container my-5">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold">Meet Our Team</h1>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <img 
                        src="https://i.pinimg.com/1200x/96/42/e7/9642e74afac16dc20017d4c5fae33ddb.jpg" 
                        alt="Hamilton"
                        className="rounded-circle"
                        style={{width: '120px', height: '120px', objectFit: 'cover'}}
                      />
                    </div>
                    <h5 className="card-title"> Hamilton </h5>
                    <p className="text-muted">Software Developer</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <img 
                        src="https://i.pinimg.com/736x/9b/ae/8d/9bae8dac08839511f369b7bf8e873228.jpg" 
                        alt="Vettel"
                        className="rounded-circle"
                        style={{width: '120px', height: '120px', objectFit: 'cover'}}
                      />
                    </div>
                    <h5 className="card-title"> Vettel </h5>
                    <p className="text-muted">Project Manager</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <img 
                        src="https://i.pinimg.com/736x/54/ab/d1/54abd1e23c4d596bf040713775f3109b.jpg" 
                        alt="Max"
                        className="rounded-circle"
                        style={{width: '120px', height: '120px', objectFit: 'cover'}}
                      />
                    </div>
                    <h5 className="card-title">Max</h5>
                    <p className="text-muted">Quality Assurance</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        )}

        {currentPage === 'contact' && (
          <div className="container my-5">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold">Contact Us</h1>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h3 className="card-title mb-4">Get In Touch</h3>
                    
                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <i className="me-3 mt-1"></i>
                        <div>
                          <h6>Alamat</h6>
                          <p className="text-muted mb-0">
                            Jl. Sudirman No. 123<br/>
                            Jakarta Pusat, 10220<br/>
                            Indonesia
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <i className="me-3 mt-1"></i>
                        <div>
                          <h6>Telepon</h6>
                          <p className="mb-0">+62 21 1234-5678</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <i className="me-3 mt-1"></i>
                        <div>
                          <h6>Email</h6>
                          <p className="mb-0">info@bookstore.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <i className="me-3 mt-1"></i>
                        <div>
                          <h6>Jam Operasional</h6>
                          <p className="text-muted mb-0">
                            Senin - Jumat: 09:00 - 18:00<br/>
                            Sabtu - Minggu: 10:00 - 16:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h3 className="card-title mb-4">Send Message</h3>
                    
                    <div className="mb-3">
                      <label className="form-label">Nama</label>
                      <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Masukkan email Anda" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input type="text" className="form-control" placeholder="Subject pesan" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Pesan</label>
                      <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda disini..."></textarea>
                    </div>

                    <button type="button" className="btn btn-primary w-100">
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>     
          </div>
        )}

        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" onClick={() => showPage('home')} className="nav-link px-2 text-body-secondary">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">Book</a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => showPage('team')} className="nav-link px-2 text-body-secondary">Team</a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => showPage('contact')} className="nav-link px-2 text-body-secondary">Contact</a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2025 NF Academy</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;