import React from "react";
import "./App.css";
import AboutUs from "./pages/AboutUs";
//Global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
