import books from '../utils/books';

function Home() {
  return (
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
            {books.slice(0, 6).map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="card-img-top"
                    style={{height: '225px', objectFit: 'cover'}}
                  />
                  <div className="card-body">
                    <p className="card-text fw-bold">
                      {book.title}
                    </p>
                    <p className="text-muted small">{book.author}</p>
                    <p className="text-primary fw-bold">Rp {book.price.toLocaleString('id-ID')}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;