import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";

/* Importing the axios library. */
import axios from "axios";

export default function App() {
  // exemple d'une requete qui récupere les performances de l'utilisateur
  useEffect(() => {
    axios
      .get("http://localhost:3030/user/12/performance")
      .then((res) => console.log(res.data.data));
  }, []);

  return (
    <div className="container">
      <Header />
      <Dashboard />
    </div>
  );
}
