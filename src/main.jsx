import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Route, Routes, BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Main from "./layout/Main.jsx";
import Hadist from "./layout/Hadist.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />} />
          <Route path="/hadist" element={<Hadist />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
