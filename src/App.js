// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Frontend/Header/Header';
import Home from './Frontend/Pages/Home/Home';


function App() {
  return (
    <>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
