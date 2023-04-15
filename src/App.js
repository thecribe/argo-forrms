import Footer from "./components/Footer/Footer";
import FormTable, { formFieldLoader } from "./components/FormTable/FormTable";
import Navigation from "./components/Navigation/Navigation";
import FormField from "./pages/FormField/FormField";

import FormPage from "./pages/FormPage/FormPage";
import SingleEntry, {
  singleEntryLoader,
} from "./pages/SingleEntry/SingleEntry";
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
      <Route path="/form-entries" element={<FormField />}>
        <Route
          path="/form-entries"
          element={<FormTable />}
          loader={formFieldLoader}
        />
        <Route
          path="/form-entries/:id"
          element={<SingleEntry />}
          loader={singleEntryLoader}
        />
      </Route>
    </Route>
  ),
  { basename: "/argo-forrms" }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
