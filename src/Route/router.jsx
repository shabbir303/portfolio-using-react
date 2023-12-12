
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About";
import Resume from "../Pages/Resume";
import Works from "../Pages/Works";
import Blog from "../Pages/Blog";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <About></About>,
      },
      {
        path: '/resume',
        element: <Resume></Resume>
      },
      {
        path: '/works',
        element: <Works></Works>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/skills',
        element:<Skills></Skills>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

export default router;