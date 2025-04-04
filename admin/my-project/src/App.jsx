import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./curd/Update";
import Adminlogin from "./Adminlogin";
import Userdata from "./assets/showdata/Userdata";
import Darshboard from "./assets/Darshboard/Darshboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin />}></Route>
          <Route path="/viewdata" element={<Userdata />}></Route>
          <Route path="/add-product" element={<Darshboard/>}></Route>
          <Route path="/updatedata/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
