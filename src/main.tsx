import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Skills from "./routes/Skills.tsx";
import Experience from "./routes/Experience.tsx";
import Contact from "./routes/Contact.tsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Skills", element: <Skills /> },
  { path: "/Experience", element: <Experience /> },
  { path: "/Contact", element: <Contact /> },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
