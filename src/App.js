import logo from "./logo.svg";
import "./App.css";
import Banner from "./Page/Home/Banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./Page/Home/AboutUs/AboutUs";
import Services from "./Page/Home/Services/Services";
import ChooseUs from "./Page/Home/ChooseUs/ChooseUs";
import LatestBlog from "./Page/Home/LatestBlog/LatestBlog";
import OrderUs from "./Page/Home/OrderUs/OrderUs";
function App() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <ChooseUs />
      <LatestBlog />
      <br />
      <br />
      <br />
      <OrderUs />
    </div>
  );
}

export default App;
// https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg
