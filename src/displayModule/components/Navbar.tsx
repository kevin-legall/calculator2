import React, {useEffect, useState} from 'react';
import {NavbarEnum} from "../models/NavbarModel";
import {NavLink} from "react-router-dom";


export const Navbar = () => {

    const leftStyle = { left: "0%" }
    const middleStyle = { left: "33%" }
    const rightStyle = { left: "67%" }

    const [lineStyle, setLineStyle] = useState<{}>();

    useEffect(() => {

    }, []);

    let handleNavbarClicked = (navbarEnum:NavbarEnum) => {
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
                <li><NavLink to={'/calculatrice'} onClick={()=> handleNavbarClicked(NavbarEnum.CALCULATRICE)} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Calculatrice</NavLink></li>
                <li><NavLink to={'/historique'}  onClick={()=> handleNavbarClicked(NavbarEnum.HISTORIQUE)} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Historique</NavLink></li>
                <li><NavLink to={'/convertisseur'} onClick={()=> handleNavbarClicked(NavbarEnum.CONVERTISSEUR)} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>Convertisseur</NavLink></li>
            </ul>
            <div className="nav-line">
                <div className="colored-line" style={lineStyle}></div>
            </div>
        </nav>
    );
};