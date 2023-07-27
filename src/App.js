import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { myContext } from "./User/Context";
import { useState } from "react";
import './App.css'
import Login from "./User/Login";
import Signup from "./User/Signup";
import Home from "./User/Home";
import Dog from "./User/Dog";
import Cat from "./User/Cat";
import Contact from "./User/Contact";
import productData from "./User/Products";
import Viewproduct from "./User/Viewproduct";
import Cart from "./User/Cart";
import Payment from "./User/Payment";
import Store from "./User/Store";
import Adminlogin from "./Admin/Adminlogin";
import Adminproduct from "./Admin/Adminproduct";
import Updateproduct from "./Admin/Updateproduct";
import AddProduct from "./Admin/Addproduct";
import Adminuser from "./Admin/Adminuser";


function App() {
  const[login,setLogin]=useState(false)
  const[user,setUser]=useState([])
  const [products, setProducts] = useState(productData);
  const [cart,setCart]=useState([])
  const [admin,setAdmin]=useState({username:'admin',password:'admin123'})

  return (
    <Router>
      <myContext.Provider value={{user,setUser,login,setLogin,products,setProducts,cart,setCart,admin,setAdmin}}>
      <div>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/dog" element={<Dog/>}/>
          <Route path="/cat" element={<Cat/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/viewproduct/:id" element={<Viewproduct/>}/>
          <Route path="/payment/:id" element={<Payment/>}/>
          <Route path="/Store" element={<Store/>}/>
          <Route path="/Adminlogin" element={<Adminlogin/>}/>
          <Route path="/Adminproduct" element={<Adminproduct/>}/>
          <Route path="/updateproduct/:id" element={<Updateproduct/>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/adminuser" element={<Adminuser/>}/>
          
          
        </Routes>
      </div>
      </myContext.Provider>
    </Router>
  )
  
  
}

export default App;
