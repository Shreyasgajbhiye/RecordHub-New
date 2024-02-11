import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/home";
import Students from "./Pages/Students/students";
import New from "./Pages/New/new";
import Product from "./Pages/Product/product";
import Single from "./Pages/Single/single";
import Login from "./Pages/Login/login"
import Register from "./Pages/Register/register"
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/students',
    element:<Students/>
  },
  {
    path:'/product',
    element:<Product/>
  },
  {
    path:'/product/:id/productId/new',
    element:<New/>
  },
  {
    path:'/customer/:id/customerId/new',
    element:<New/>
  },
  {
    path:'/customer/:id',
    element:<Single/>
  },
  {
    path:'/product/:id',
    element:<Single/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
])
function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
