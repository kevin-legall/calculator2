import React from 'react';
import "./assets/styles/index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./displayModule/components/Navbar";
import {CalculatriceLayout} from "./displayModule/layouts/CalculatriceLayout";
import {HistoriqueLayout} from "./displayModule/layouts/HistoriqueLayout";
import {ConvertisseurLayout} from "./displayModule/layouts/ConvertisseurLayout";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<CalculatriceLayout />}></Route>
          <Route path={"/calculatrice"} element={<CalculatriceLayout />}></Route>
          <Route path={"/historique"} element={<HistoriqueLayout />}></Route>
          <Route path={"/convertisseur"} element={<ConvertisseurLayout />}></Route>
          <Route path={"*"} element={<ConvertisseurLayout />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
