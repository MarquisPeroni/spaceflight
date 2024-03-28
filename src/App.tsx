import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FetchComponents from "./components/FetchComponents";
import ArticleDetail from "./components/ArticleDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<FetchComponents />} />
            <Route path="/ArticleDetails" element={<ArticleDetail />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
