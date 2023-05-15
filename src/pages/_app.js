import "@/styles/globals.css";
import Navbar from "../components/navbar";
import AppContext from "./../components/AppContext";
import { useState, useEffect } from "react";



export default function App({ Component, pageProps }) {
  const [tasks, setTasks] = useState([
    {
    id:Math.floor(Math.random()*1000000),
    msg:"This is my First Task of the day",
    time:"10:00-12:00"
  },
    {
    id:Math.floor(Math.random()*1000000),
    msg:"This is my Seconed Task of the day",
    time:"12:00-14:00"
  },
    {
    id:Math.floor(Math.random()*1000000),
    msg:"This is my Third Task of the day",
    time:"14:00-16:00"
  },
]);
 

  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      <div className="container mx-auto bg-white">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </AppContext.Provider>
  );
}
