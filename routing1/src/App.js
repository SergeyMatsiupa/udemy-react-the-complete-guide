import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    // path: "/",
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "/",
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        // path: "/products",
        element: <ProductsPage />,
      },
      {
        // path: "/products/:productId",
        path: "products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

// const routeDefinitions = createRoutesFromElements(<Route>
//   <Route path="/" element={<HomePage />}/>
//   <Route path="/products" element={<ProductsPage />}/>
// </Route>);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    // <div></div>
    <RouterProvider router={router} />
  );
}

export default App;
