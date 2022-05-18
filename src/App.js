// import logo from './logo.svg';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Frontend/Footer/Footer';
import Header from './Frontend/Header/Header';
import Home from './Frontend/Pages/Home/Home';
import useBreakFast from './Hooks/useBreakFast';
import useLunch from './Hooks/useLunch';
import useDinner from './Hooks/useDinner';
import useBlogs from './Hooks/useBlogs';
import Signup from './Frontend/Auth/Signup';
import Signin from './Frontend/Auth/Signin';
import RequireAuth from './Frontend/Auth/RequireAuth'
import BreakfastDetails from './Frontend/ProductDetails/BreakfastDetails';
import DinnerDetails from './Frontend/ProductDetails/DinnerDetails';
import LunchDetails from './Frontend/ProductDetails/LunchDetails';
import Breakfasts from './Frontend/Products/Breakfasts';
import Dinners from './Frontend/Products/Dinners';
import Lunches from './Frontend/Products/Lunches';
import BlogDetails from './Frontend/BlogDetails/BlogDetails';
import Privacy from './Frontend/Pages/Privacy-Terms/Privacy';
import Terms from './Frontend/Pages/Privacy-Terms/Terms';
import Notfound from './Frontend/NotFound/Notfound';
import Backend from './Backend/Pages/Bakend';

export const productContext = createContext()

function App() {
  const {breakfasts} = useBreakFast();
  const {lunches} = useLunch();
  const {dinners} = useDinner();
  const {blogs} = useBlogs();
 
  return (
    <productContext.Provider value={{breakfasts, lunches, dinners, blogs}}>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
        <Route path='/breakfasts' element={<Breakfasts/>}/>
        <Route path='/breakfast/:id' element={<BreakfastDetails/>}/>
        <Route path='/dinners' element={<Dinners/>}/>
        <Route path='/dinners/:id' element={<DinnerDetails/>}/>
        <Route path='/lunches/:id' element={<LunchDetails/>}/>
        <Route path='/lunches' element={<Lunches/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        {/* <Route path='/user' element={<Users/>}/> */}
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms/>}/>
  
        {/* ===============Backend Route============= */}
         <Route path="/dashboard" element={<RequireAuth><Backend /></RequireAuth>} >
          <Route index element={<Backend/>}></Route>
          {/* <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}
        </Route>

        {/* ==== Not Found === */}
        <Route to="*" element={<Notfound/>}/>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </productContext.Provider>
  );
}

export default App;
