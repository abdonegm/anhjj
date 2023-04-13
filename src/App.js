import react from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Statices from "../src/Components/statices info/Statices";
import Stages from "../src/Components/learning-stages/Stages";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Down from "./Components/download-app/Down";

function App() {
  return (
    <div className="App">
      <div className="navbar-header">
        <Navbar />
        <Header />
      </div>
      <Statices />
      <Stages />
      <Content />
      <learningStage />
      <Down />
      <Footer />
    </div>
  );
}

export default App;
