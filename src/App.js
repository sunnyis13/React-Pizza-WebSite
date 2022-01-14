import './App.css';
import Hero from './components/Hero';
import Products from './components/Products'
import Feature from './components/Feature';
import Footer from './components/Footer';
import { productData, productDataTwo } from './components/Products/data'
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <>
    <GlobalStyle/>
    <Hero />
    <Products heading='Choose your favorite' data={productData}/>
    <Feature/>
    <Products heading='Sweet Treats for You' data={productDataTwo}/>
    <Footer/>
    </>
  );
}

export default App;
