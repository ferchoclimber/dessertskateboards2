// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => (
  <div>
    <Header />
    <ProductList />
    <Cart />
    <Footer />
  </div>
);

export default Home;
