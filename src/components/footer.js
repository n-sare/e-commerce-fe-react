import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropDown"

function Footer() {

  //Footer links generally leads to nowhere, just filled it out so it looks nice
  //It leads to my linkedin page and github page of this project though.
  return (
    <footer className="bg-dark text-center text-muted">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com.tr/" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/?hl=tr" role="button">
            <i className="fab fa-instagram">
            </i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/nesibe-sare-ozkan/" role="button">
            <i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/n-sare/e-commerce-fe-react" role="button">
            <i className="fab fa-github"></i></a>
        </section>
        <section className="">
          <form action="">

            <div className="row d-flex justify-content-center">

              <div className="col-auto">
                <p className="pt-2">
                  <strong>Mail listemize kaydolun</strong>
                </p>
              </div>



              <div className="col-md-5 col-12">

                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" className="form-control" />
                  <label className="form-label" for="form5Example2">E-posta</label>
                </div>
              </div>



              <div className="col-auto">

                <button type="submit" className="btn btn-outline-light mb-4">
                  Kaydol
                </button>
              </div>

            </div>

          </form>
        </section>



        <section className="mb-4">
          <p>
            MeShop! güvenli ve kaliteli hizmet sunan kar amaçlı bir e-ticaret platformudur. Kullanıcıların keyifle alışveriş yapmasına olanak
            sağlarken işletmelerle anlaşma yapmakta ve satıcıyla kullanıcıya aracı olmaktadır.
          </p>
        </section>

        <section className="">

          <div className="row">

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">MeShop!</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Biz Kimiz</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Kariyer</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">İletişim</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Bizimle Satış Yap</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">About us</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Who we are</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Careers</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Opportunities for businesses</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Contact us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Kampanyalar</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Aktif Kampanyalar</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Elit Üyelik</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Hediye Fikirleri</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">MeShop! Fırsatları</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Yardım</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Canlı Yardım</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">Nasıl İade Edebilirim</a>
                </li>
                <li>
                  <a href="#!" className="text-muted text-decoration-none">İşlem Rehberi</a>
                </li>
              </ul>
            </div>

          </div>

        </section>

      </div>



      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}>
        © 2021 Copyright:
        <a className="text-muted text-decoration-none" href="/"> MeShop! Her Hakkı Saklıdır.</a>
      </div>

    </footer>

  );
}

export default Footer;
