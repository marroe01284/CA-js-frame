import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Contact } from "./pages/Contact";
import { SpecificProduct } from "./routes/Specific";
import { Checkout } from "./pages/CheckOut";
import { CheckoutSucceeded } from "./pages/CheckoutSuccs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "contact", element: <Contact /> },
      { path: "checkout", element: <Checkout /> },
      { path: "checkout-success", element: <CheckoutSucceeded /> },
      { path: "/:id", element: <SpecificProduct /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
