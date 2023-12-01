import React, {useEffect, useState} from 'react';
import {NavbarEnum} from "../enums/NavbarEnum";
import  {INavigationManager} from "../services/INavigationManager";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    let _navManager: INavigationManager;

    const leftStyle = { left: "0%" }
    const middleStyle = { left: "33%" }
    const rightStyle = { left: "67%" }

    const [lineStyle, setLineStyle] = useState<{left:string}>();

    useEffect(() => {
        //  à l'initialisation du composant, on vérifie l'url pour orienter le style de la navbar
        let location :NavbarEnum = _navManager.getLocation();
        handleNavbarStyle(location);
    }, []);

    let handleNavbarStyle = (navbarEnum:NavbarEnum) => {
        switch (navbarEnum) {
            case NavbarEnum.CALCULATRICE : setLineStyle(leftStyle); break;
            case NavbarEnum.HISTORIQUE : setLineStyle(middleStyle); break;
            case NavbarEnum.CONVERTISSEUR : setLineStyle(rightStyle); break;
            default : setLineStyle(leftStyle);
        }
    }

    return (
        <nav>
            <ul className="nav-ul">
                <li><NavLink to={'/calculatrice'} onClick={()=> handleNavbarStyle(NavbarEnum.CALCULATRICE)} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Calculatrice</NavLink></li>
                <li><NavLink to={'/historique'}  onClick={()=> handleNavbarStyle(NavbarEnum.HISTORIQUE)} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Historique</NavLink></li>
                <li><NavLink to={'/convertisseur'} onClick={()=> handleNavbarStyle(NavbarEnum.CONVERTISSEUR)} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Convertisseur</NavLink></li>
            </ul>
            <div className="nav-line">
                <div className="colored-line" style={lineStyle}></div>
            </div>
        </nav>
    );
};