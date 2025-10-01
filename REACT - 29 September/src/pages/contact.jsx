function Contact() {
  return (
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
                      Jl. Indulu<br/>
                      Tangerang Selatan, 49231<br/>
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
                    <p className="mb-0">+628 xxxx-xxx-xxx</p>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-start">
                  <i className="me-3 mt-1"></i>
                  <div>
                    <h6>Email</h6>
                    <p className="mb-0">bookstore@mail.com</p>
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
  );
}

export default Contact;