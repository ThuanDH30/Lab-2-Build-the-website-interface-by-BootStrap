import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Pizza House</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger" type="submit">Q</button>
              </form>
            </div>
          </div>
        </nav>

        {/* Hero Section with Carousel */}
        <header className="hero bg-primary text-white text-center">
          <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Neapolitan Pizza</h5>
                  <p>If you are looking for a traditional Italian Pizza, the Neapolitan is the best option!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://www.shutterstock.com/image-photo/fresh-homemade-italian-pizza-margherita-600nw-1829205563.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Neapolitan Pizza</h5>
                  <p>If you are looking for a traditional Italian Pizza, the Neapolitan is the best option!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/1349560792/vi/anh/nhi%E1%BB%81u-l%C3%A1t-pizza-%C4%91%C6%B0%E1%BB%A3c-xem-tr%C3%AAn-n%E1%BB%81n-t%E1%BB%91i.jpg?s=612x612&w=0&k=20&c=T1dZjP1HTh-beVoIMezQI2iE67A3_aTvi7Nu94vOZ-Y=" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Neapolitan Pizza</h5>
                  <p>If you are looking for a traditional Italian Pizza, the Neapolitan is the best option!</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </header>

        {/* Our Menu Section */}
        <section className="menu-section py-5 bg-dark text-white">
          <div className="container">
            <h2 className="text-center mb-5">Our Menu</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src="https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" className="card-img-top" alt="Margherita Pizza" />
                  <div className="card-body">
                    <h5 className="card-title">Margherita Pizza</h5>
                    <p className="card-text text-muted"><del>$40.00</del> <span className="text-danger">$24.00</span></p>
                    <button className="btn btn-dark">Buy</button>
                  </div>
                  <div className="badge bg-warning text-dark position-absolute" style={{ top: '10px', left: '10px' }}>SALE</div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://www.shutterstock.com/image-photo/fresh-homemade-italian-pizza-margherita-600nw-1829205563.jpg" className="card-img-top" alt="Mushroom Pizza" />
                  <div className="card-body">
                    <h5 className="card-title">Mushroom Pizza</h5>
                    <p className="card-text text-muted">$25.00</p>
                    <button className="btn btn-dark">Buy</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://media.istockphoto.com/id/1349560792/vi/anh/nhi%E1%BB%81u-l%C3%A1t-pizza-%C4%91%C6%B0%E1%BB%A3c-xem-tr%C3%AAn-n%E1%BB%81n-t%E1%BB%91i.jpg?s=612x612&w=0&k=20&c=T1dZjP1HTh-beVoIMezQI2iE67A3_aTvi7Nu94vOZ-Y=" className="card-img-top" alt="Hawaiian Pizza" />
                  <div className="card-body">
                    <h5 className="card-title">Hawaiian Pizza</h5>
                    <p className="card-text text-muted">$30.00</p>
                    <button className="btn btn-dark">Buy</button>
                  </div>
                  <div className="badge bg-success position-absolute" style={{ top: '10px', left: '10px' }}>NEW</div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://media.istockphoto.com/id/938742222/vi/anh/cheesy-pepperoni-pizza.jpg?s=1024x1024&w=is&k=20&c=iXQn7yhBaK8IYlTQcAhTTUVsQf3dZqhgpCmtXOlyZFY=" className="card-img-top" alt="Pesto Pizza" />
                  <div className="card-body">
                    <h5 className="card-title">Pesto Pizza</h5>
                    <p className="card-text text-muted"><del>$50.00</del> <span className="text-danger">$30.00</span></p>
                    <button className="btn btn-dark">Buy</button>
                  </div>
                  <div className="badge bg-warning text-dark position-absolute" style={{ top: '10px', left: '10px' }}>SALE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Your Table Section */}
        <section className="booking-section py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Book Your Table</h2>
            <form>
              <div className="row g-3">
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Your Name *" required />
                </div>
                <div className="col-md-4">
                  <input type="email" className="form-control" placeholder="Your Email *" required />
                </div>
                <div className="col-md-4">
                  <select className="form-select" required>
                    <option value="">Select a Service</option>
                    <option value="Dine In">Dine In</option>
                    <option value="Take Away">Take Away</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <textarea className="form-control" rows="5" placeholder="Please write your comment" required></textarea>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col text-center">
                  <button type="submit" className="btn btn-warning">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white text-center text-lg-start mt-auto py-3">
          <div className="container">
            <p className="text-muted mb-0">© 2024 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}

export default App;
