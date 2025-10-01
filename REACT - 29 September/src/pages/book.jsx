import books from '../utils/books';

function Book() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Koleksi Buku</h1>
        <p className="lead text-muted">Temukan buku favorit Anda di sini</p>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card shadow-sm h-100">
              <img 
                src={book.cover} 
                alt={book.title}
                className="card-img-top"
                style={{height: '300px', objectFit: 'cover'}}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="text-muted">{book.author}</p>
                <p className="card-text">{book.description}</p>
                <p className="text-primary fw-bold fs-5">
                  Rp {book.price.toLocaleString('id-ID')}
                </p>
                <button className="btn btn-primary w-100">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;