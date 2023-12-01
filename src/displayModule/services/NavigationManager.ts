import {INavigationManager} from "./INavigationManager";
import {useLocation} from "react-router-dom";
import {NavbarEnum} from "../enums/NavbarEnum";

export class NavigationManager implements INavigationManager {
    private _location = useLocation();

    getLocation(): NavbarEnum {
        switch(this._location.pathname) {
            case "calculatrice" : return NavbarEnum.CALCULATRICE;
            case "historique" : return NavbarEnum.HISTORIQUE;
            case "convertisseur" : return NavbarEnum.CONVERTISSEUR;
            default : return NavbarEnum.CALCULATRICE;
        }
    }
}