import React from "react";
import { AppStyles } from "./App.styled";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Timer from "./components/Timer";

function App() {
  return (
    <AppStyles>
      <Header />
      <Sidebar />
      <Timer />
    </AppStyles>
  );
}

export default App;
