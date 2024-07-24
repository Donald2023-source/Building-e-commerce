import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/Route";
import "./App.css";

/*You look at the routes object in the routes file*/
const router = createBrowserRouter([routes]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
