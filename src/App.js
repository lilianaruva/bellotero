import { Routes, Route } from "react-router-dom";
import "./mystyle.scss";
import Nav from "./components/nav";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
