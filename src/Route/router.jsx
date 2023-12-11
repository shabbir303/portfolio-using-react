
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <About></About>
      }
    ]
  },
]);

export default router;