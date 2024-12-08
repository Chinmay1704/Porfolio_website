import "./App.css";
import "./components/fonts_color.css";
import Header from "./components/Header/Header";
import Hero from "./routes/Hero";
import { Routes, Route } from "react-router-dom";
import ProjectDes from "./routes/ProjectDes";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/projects" element={<ProjectDes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
