import {INavigationManager} from "./INavigationManager";
import {Navigate} from 'react-router-dom';
import {Location} from "react-router-dom";
import {NavbarEnum} from "../Models/enums/NavbarEnum";
import {NavbarException} from "../Exceptions/NavbarException";

export class NavigationManager implements INavigationManager {

    getLocation = (location: Location): NavbarEnum => {
        switch(location?.pathname) {
            case "/calculatrice" : return NavbarEnum.CALCULATRICE;
            case "/historique" : return NavbarEnum.HISTORIQUE;
            case "/convertisseur" : return NavbarEnum.CONVERTISSEUR;
            default : return NavbarEnum.CALCULATRICE;
        }
    }

    navigateTo(pathname: string) {
        if(!pathname)
            throw new NavbarException("L'url de redirection ne peut être vide");
        Navigate({to: pathname, replace: true})
    }
}