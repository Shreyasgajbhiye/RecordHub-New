import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/home";
import Students from "./Pages/Students/students";
import New from "./Pages/New/new";
import Product from "./Pages/Product/product";
import Single from "../src/student/Single/single.jsx";
import Login from "./Pages/Login/login"
import Achievement from "./Pages/Achievements/achievements";
import AchievementForm from "./student/AchievementForm/achievementForm.jsx";
import SignUp from "./Pages/SignUp/SignUp";
import Request from './Pages/Request/Request.jsx'
import Data from "./student/SubmittedData/Data.jsx";
import Bonafide from "./student/ApplyForBonafide/Bonafide.jsx";
const router = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
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
    path:'/student/:id',
    element:<Single/>
  },
  {
    path:'/product/:id',
    element:<Single/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/register',
    element:<SignUp/>
  },
  {
    path:'/achievementsAll',
    element:<Achievement/>
  },
  {
    path:'/achievement_form/:id',
    element:<AchievementForm/>
  },
  {
    path:'/request',
    element:<Request/>
  },
  {
    path:'/showdata/:id',
    element:<Data/>
  },
  {
    path:'/applyBonafie/:id',
    element:<Bonafide/>
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
