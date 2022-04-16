// import logo from './logo.svg';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Frontend/Footer/Footer';
import Header from './Frontend/Header/Header';
import Home from './Frontend/Pages/Home/Home';
import ProductDetails from './Frontend/ProductDetails/ProductDetails';
import useBreakFast from './Hooks/useBreakFast';
import Signup from './Frontend/Users/Signup';
import Signin from './Frontend/Users/Signin';
import Users from './Frontend/Users/Users';

export const productContext = createContext()

function App() {
  const [breakfasts] = useBreakFast();
  return (
    <productContext.Provider value={[breakfasts]}>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/user' element={<Users/>}></Route>
      </Routes>
      <Footer></Footer>
    </productContext.Provider>
  );
}

export default App;
