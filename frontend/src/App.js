import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Timeline from "./Pages/Timeline";
import Article from "./Pages/Article";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/article" element={<Article/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
