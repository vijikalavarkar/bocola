import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import ProductModel from './components/ProductModel/ProductModel';
import Listing from './Pages/Listing';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


const myContext = createContext();


function App() {

  const [isOpenProductModel, setisOpenProductModel] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountryList(response.data);
      //console.log(response.data[0].name)
    };
    fetchCountries();
  }, []);


  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModel,
    setisOpenProductModel,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin
  }


  return (
    <>
      <BrowserRouter>

        <myContext.Provider value={values}>

          {
            isHeaderFooterShow === true && <Header />
          }

          
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/cat/:id" exact={true} element={<Listing />} />
            <Route path="/products/:id" exact={true} element={<ProductDetails />} />
            <Route path="/cart/:id" exact={true} element={<Cart />} />
            <Route path="/signin" exact={true} element={<SignIn />} />
            <Route path="/signup" exact={true} element={<SignUp />} />
          </Routes>

          {
            isHeaderFooterShow === true && <Footer />
          }

            {
              isOpenProductModel === true && <ProductModel/> 
            }

        </myContext.Provider>

      </BrowserRouter>

    </>
  );
}

export default App;

export { myContext }