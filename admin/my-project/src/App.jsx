import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewdata from "./curd/Viewdata";
import Update from "./curd/Update";
import Adminlogin from "./Adminlogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin />}></Route>
          <Route path="/viewdata" element={<Viewdata />}></Route>
          <Route path="/updatedata/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
