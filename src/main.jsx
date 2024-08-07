import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./app-container.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import "animate.css";
import "./css/scroll-velocity-banner-styles.css";
import "./css/base.css";
import "./css/index.css";
import ErrorPage from "./pages/error-page.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Branches from "./pages/branches.jsx";
import Symbols from "./pages/symbols-guide.jsx";
import Products from "./pages/products.jsx";
import Product from "./pages/product.jsx";
import SampleBooks from "./pages/sample-books.jsx";
import ContactUs from "./pages/contact-us.jsx";

import { pdfjs } from "react-pdf";
import '@react-pdf-viewer/core/lib/styles/index.css';
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/p/:id",
        element: <Product />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/branches",
        element: <Branches />,
      },
      {
        path: "/sample-books",
        element: <SampleBooks />,
      },
      {
        path: "/symbols-guide",
        element: <Symbols />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
