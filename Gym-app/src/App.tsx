import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from "../pages/Classes";
import ClassInfo from "../pages/ClassInfo";
import Trainers from "../pages/Trainers";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Classes />} />
              <Route path="/class-info" element={<ClassInfo />} />
              <Route path="/trainers" element={<Trainers />} />
            </Routes>
          </BrowserRouter>
        </StrictMode>
      </div>
    </>
  );
}

export default App;
