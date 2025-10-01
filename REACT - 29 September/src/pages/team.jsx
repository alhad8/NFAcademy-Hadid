function Team() {
  return (
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
              <h5 className="card-title">Hamilton</h5>
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
              <h5 className="card-title">Vettel</h5>
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
  );
}

export default Team;