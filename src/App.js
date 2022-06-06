// import logo from './logo.svg';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Frontend/Footer/Footer';
import Header from './Frontend/Header/Header';
import Home from './Frontend/Pages/Home/Home';
import useBlogs from './Hooks/useBlogs';
import Signup from './Frontend/Auth/Signup';
import Signin from './Frontend/Auth/Signin';
import RequireAuth from './Frontend/Auth/RequireAuth'
import BlogDetails from './Frontend/BlogDetails/BlogDetails';
import Privacy from './Frontend/Pages/Privacy-Terms/Privacy';
import Terms from './Frontend/Pages/Privacy-Terms/Terms';
import Notfound from './Frontend/NotFound/Notfound';
import Backend from './Backend/Pages/Backend';
import Users from './Backend/Users/Users';
import AddCategory from './Backend/Categories/AddCategory';
import UpdateCategory from './Backend/Categories/UpdateCategory';
import AllCategory from './Backend/Categories/AllCategory';
import AllProduct from './Backend/Products/AllProduct';
import AddProduct from './Backend/Products/AddProduct';
import UpdateProduct from './Backend/Products/UpdateProduct';
import AllBlog from './Backend/Blogs/AllBlog';
import AddBlog from './Backend/Blogs/AddBlog';
import UpdateBlog from './Backend/Blogs/UpdateBlog';
import useProducts from './Hooks/useProducts';
import Products from './Frontend/Products/Products';
import ProductDetails from './Frontend/ProductDetails/ProductDetails';
import useCategories from './Hooks/useCategories';
import useCarts from './Hooks/useCarts';
import Carts from './Frontend/Carts/Carts';
import useMyOrder from './Hooks/useMyOrder';
import Checkout from './Frontend/Checkout/Checkout';

export const productContext = createContext()


function App() {
  const {products, setProducts, isLoad, setIsLoad} = useProducts();
  const {blogs} = useBlogs();
  const {categories}=useCategories();
  const{myorders}=useMyOrder();


  return (
    <>
    <productContext.Provider value={{products, setProducts, isLoad, setIsLoad, blogs, categories, myorders}}>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Carts/>}/>
        <Route path='/checkout/:id' element={<Checkout/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
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
          <Route path="updateCategory/:id" element={<UpdateCategory/>}></Route>

          <Route path="products" element={<AllProduct/>}></Route>
          <Route path="addProduct" element={<AddProduct/>}></Route>
          <Route path="updateProduct/:id" element={<UpdateProduct/>}></Route>

          <Route path="blogs" element={<AllBlog/>}></Route>
          <Route path="addBlog" element={<AddBlog/>}></Route>
          <Route path="updateBlog/:id" element={<UpdateBlog/>}></Route>

        </Route>

        {/* ==== Not Found === */}
        <Route to="*" element={<Notfound/>}/>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </productContext.Provider>
    </>
  );
}

export default App;
