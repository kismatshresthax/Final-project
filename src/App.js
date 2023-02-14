import {  CssBaseline } from "@mui/material";
import { Layout } from "./Commponents/Layout";
import { PrivateRouter } from "./Commponents/PrivateRouter";
import './App.css'
import  './scss/index.scss'
import { useState } from "react";
import Header from "./Commponents/header/Header";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  
  return (
    
    <div className="App" data-theme={theme}>
      <Header changeTheme={changeTheme} currentTheme={theme}/>
      <CssBaseline/>
      <Layout >
        <PrivateRouter/>
      </Layout>
    </div>
  );
}

export default App;
