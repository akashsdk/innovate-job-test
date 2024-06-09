import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./Screen/ErrorPage";
import Search from "./Screen/Search";
import Login from "./Screen/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
