import React from 'react';
import "./assets/styles/index.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {NavbarComponent} from "./modules/displayModule/Navbar/Components/NavbarComponent";
import {CalculatriceLayout} from "./layouts/calculatriceLayout/CalculatriceLayout";
import {HistoriqueLayout} from "./layouts/historiqueLayout/HistoriqueLayout";
import {ConvertisseurLayout} from "./layouts/convertisseurLayout/ConvertisseurLayout";

// dependency injections
import { NavigationManager } from "./modules/displayModule/Navbar/Services/NavigationManager";

function App() {
  return (
      <BrowserRouter>
        <NavbarComponent navManager={ new NavigationManager() } />
        <Routes>
          <Route path={"/calculatrice"} element={<CalculatriceLayout />}></Route>
          <Route path={"/historique"} element={<HistoriqueLayout />}></Route>
          <Route path={"/convertisseur"} element={<ConvertisseurLayout />}></Route>
          <Route path={"*"} element={<Navigate to={"/calculatrice"} replace />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
