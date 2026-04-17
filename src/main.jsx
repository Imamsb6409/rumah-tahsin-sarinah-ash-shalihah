import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Route, Routes, BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import Hadist from "./pages/Hadist.jsx";
import BlogList from "./pages/BlogList.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import About from "./pages/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />} />
          <Route path="/hadist" element={<Hadist />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />}/>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
