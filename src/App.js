import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import FormPage from "./pages/FormPage/FormPage";
import "./styles.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<FormPage />} />
    </Route>
  ),
  { basename: "/argo-forrms" }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
