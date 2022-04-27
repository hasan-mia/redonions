// import logo from './logo.svg';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Frontend/Footer/Footer';
import Header from './Frontend/Header/Header';
import Home from './Frontend/Pages/Home/Home';
import useBreakFast from './Hooks/useBreakFast';
import useLunch from './Hooks/useLunch';
import useDinner from './Hooks/useDinner';
import useBlogs from './Hooks/useBlogs';
import Signup from './Frontend/Auth/Signup';
import Signin from './Frontend/Auth/Signin';
// import Users from './Frontend/Auth/Users';
import BreakfastDetails from './Frontend/ProductDetails/BreakfastDetails';
import DinnerDetails from './Frontend/ProductDetails/DinnerDetails';
import LunchDetails from './Frontend/ProductDetails/LunchDetails';
import Breakfasts from './Frontend/Products/Breakfasts';
import Dinners from './Frontend/Products/Dinners';
import Lunches from './Frontend/Products/Lunches';
import BlogDetails from './Frontend/BlogDetails/BlogDetails';

export const productContext = createContext()

function App() {
  const [breakfasts] = useBreakFast();
  const [lunches] = useLunch();
  const [dinners] = useDinner();
  const [blogs] = useBlogs();
 
  return (
    <productContext.Provider value={[breakfasts, lunches, dinners, blogs]}>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog/:id' element={<BlogDetails/>}></Route>
        {/* <Route path='/breakfasts' element={<Breakfasts/>}></Route> */}
        <Route path='/breakfasts' element={<Breakfasts/>}></Route>
        <Route path='/breakfast/:id' element={<BreakfastDetails/>}></Route>
        <Route path='/dinners' element={<Dinners/>}></Route>
        <Route path='/dinners/:id' element={<DinnerDetails/>}></Route>
        <Route path='/lunches/:id' element={<LunchDetails/>}></Route>
        <Route path='/lunches' element={<Lunches/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        {/* <Route path='/user' element={<Users/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </productContext.Provider>
  );
}

export default App;
