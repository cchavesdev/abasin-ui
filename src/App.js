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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <SecondaryHero></SecondaryHero>
      <Promo></Promo>
      <Events></Events>
      <Blog></Blog>
      <TertiaryHero></TertiaryHero>
    </div>
  );
}

export default App;
