import logo from './logo.svg';
import './App.scss';
import './scss/variables.scss';
import './scss/homepage.scss';
import './scss/navigation.scss';
import './scss/standardPage.scss';
import { Header } from './header/Header';
import { Hero } from './homePage/Hero';
import { SecondaryHero } from './homePage/SecondaryHero';
import { Promo } from './homePage/Promo';
import { Events } from './homePage/Events';
import { Blog } from './homePage/Blog';
import { TertiaryHero } from './homePage/TertiaryHero';
import { Footer } from './footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './homePage/HomePage';
import { StandardPage } from './standardPage/StandardPage';
import { ListingPage } from './listingPage/ListingPage';
import { Pattern } from './pattern/Pattern';
import { SnowReport } from './snowreport/SnowReport';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/standard' Component={StandardPage}></Route>
          <Route path='/listing' Component={ListingPage}></Route>
          <Route path='/snow-report' Component={SnowReport}></Route>
          <Route path='/pattern-library' Component={Pattern}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
