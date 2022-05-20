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
import Backend from './Backend/Pages/Backend';
import Users from './Backend/Users/Users';
import Sidebar from './Backend/Sidebar/Sidebar';
import AddCategory from './Backend/Categories/AddCategory';
import UpdateCategory from './Backend/Categories/UpdateCategory';
import AllCategory from './Backend/Categories/AllCategory';
import AllProduct from './Backend/Products/AllProduct';
import AddProduct from './Backend/Products/AddProduct';
import UpdateProduct from './Backend/Products/UpdateProduct';
import AllBlog from './Backend/Blogs/AllBlog';
import AddBlog from './Backend/Blogs/AddBlog';
import UpdateBlog from './Backend/Blogs/UpdateBlog';

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
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms/>}/>
  
        {/* ===============Backend Route============= */}
        <Route path="/dashboard" element={<RequireAuth><Backend/></RequireAuth>} >
          <Route index element={<Users/>}></Route>
          <Route path="users" element={<Users/>}></Route>

          <Route path="categories" element={<AllCategory/>}></Route>
          <Route path="addCategory" element={<AddCategory/>}></Route>
          <Route path="updateCategory" element={<UpdateCategory/>}></Route>

          <Route path="products" element={<AllProduct/>}></Route>
          <Route path="addProduct" element={<AddProduct/>}></Route>
          <Route path="updateProduct" element={<UpdateProduct/>}></Route>

          <Route path="blogs" element={<AllBlog/>}></Route>
          <Route path="addBlog" element={<AddBlog/>}></Route>
          <Route path="updateBlog" element={<UpdateBlog/>}></Route>

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
