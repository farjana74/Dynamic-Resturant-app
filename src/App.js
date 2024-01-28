import logo from './logo.svg';
import './App.css';
import Banner from './Page/Home/Banner/Banner';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from './Page/Home/AboutUs/AboutUs';
import Services from './Page/Home/Services/Services';
function App() {
  return (
    <div>
     <Banner/>
     <AboutUs/>
     <Services/>
    </div>
  );
}

export default App;
// https://cafeu.vercel.app/_next/static/media/banner-bg.563b99ab.jpg