import './App.css';
import './MyComponents/nav/nav.css'
import './MyComponents/header/header.css'
import './MyComponents/Search/search.css'
import './MyComponents/random/random.css'
import './MyComponents/categories/categories.css'
import './MyComponents/alphabet/alphabet.css'
import './MyComponents/footer/footer.css'
import Nav from './MyComponents/nav/nav';
import Header from './MyComponents/header/header';
import Search from './MyComponents/Search/search';
import Random from './MyComponents/random/random';
import Categories from './MyComponents/categories/categories';
import Alphabet from './MyComponents/alphabet/alphabet';
import Footer from './MyComponents/footer/footer';
function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Search/>
    <Random/>
    <Categories/>
    <Alphabet/>
    <Footer/>
    </>
  );
}

export default App;
