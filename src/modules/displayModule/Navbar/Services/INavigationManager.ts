import {NavbarEnum} from "../Models/enums/NavbarEnum";
import {Location, Navigate} from "react-router-dom";

export interface INavigationManager {

    /**
     * Récupérer l’url courant
     *
     * @return {string} l'url
     */
    getLocation(location: Location):NavbarEnum;

    /**
     * Redirige vers l’url souhaité
     * @param pathname
     */
    navigateTo(pathname: string):void;

}