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
import Admin from './Pages/Admin/getMentor/User.jsx'
import Unauth_access from "./unauth_access/unauth_access.jsx";
import Register from "./student/register-student.jsx/register.jsx";
import HomePage from "./admin/homepage/home.jsx";
import GetMentor from "./admin/get_all_mentor/get_mentor.jsx";
import AddMentor from "./admin/add_mentor/add_mentor.jsx";
import AchievementSingle from "./Pages/achievementSingle/achievementSingle.jsx";
import GetAchievements from "./student/getAchievements/getAchievements.jsx";
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
    path:'/admin',
    element:<HomePage/>
  },
  
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/getAllMentor',
    element: <GetMentor/>
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
    path:'/achievementsAll',
    element:<Achievement/>
  },
  {
    path:'/AchievementSingle/:id',
    element:<AchievementSingle/>
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
    path:'/getAchievements/:id',
    element:<GetAchievements/>
  },
  {
    path:'/showdata/:id',
    element:<Data/>
  },
  {
    path:'/applyBonafie/:id',
    element:<Bonafide/>
  },
  {
    path:'/admin',
    element:<Admin/>
  },
  {
    path:'/unauth',
    element:<Unauth_access/>
  },
  {
    path:'/addMentor',
    element:<AddMentor/>
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
