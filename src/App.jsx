import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ItemDetails from "./pages/ItemDetails";
import Men from "./pages/categories/Men";
import Women from "./pages/categories/Women";
import Kids from "./pages/categories/Kids";
import Beauty from "./pages/categories/Beauty";
import More from "./pages/categories/More";
import SearchResults from "./pages/categories/SearchResults";
import AppLayout from "./components/AppLayout";

export default function App() {
  // Why not <BrowserRouter>?
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "men", element: <Men /> },
        { path: "women", element: <Women /> },
        { path: "kids", element: <Kids /> },
        { path: "beauty", element: <Beauty /> },
        { path: "more", element: <More /> },
        { path: "item", element: <ItemDetails /> },
        { path: "search", element: <SearchResults /> },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "wishlist", element: <Wishlist /> },
    { path: "cart", element: <Cart /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home count={count} addItems={addItems} />} />
          <Route path="men" element={<Men mensStyles={mensStyles} count={count} addItems={addItems} loading={loading} />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="beauty" element={<Beauty />} />
          <Route path="more" element={<More />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
