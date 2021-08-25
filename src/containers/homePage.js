import NavbarComponent from "../components/navBar";
import Carousel from "../components/carousel";
import CategoriesHomepage from "../components/categoriesHomepage";
import Footer from "../components/footer";

function HomePage() {
  //HomePage Container - consists of Carousel and categorieshomepage
  return (
    <div className="home-page">
      <NavbarComponent />
      <Carousel />
      <CategoriesHomepage />
      <Footer />

    </div>
  );
}

export default HomePage;
