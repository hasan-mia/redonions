// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Frontend/Footer/Footer';
import Header from './Frontend/Header/Header';
import Home from './Frontend/Pages/Home/Home';
import ProductDetails from './Frontend/ProductDetails/ProductDetails';


function App() {
  return (
    <>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productdetails' element={<ProductDetails/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
