import {NavbarEnum} from "../enums/NavbarEnum";

export interface INavigationManager {

    /**
     * Méthode pour récupérer l'url courant
     *
     * @return {string} l'url
     */
    getLocation():NavbarEnum;

}