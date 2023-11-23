import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Timeline from "./Pages/Timeline";
import Article from "./Pages/Article";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/article/:Id" element={<Article/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
