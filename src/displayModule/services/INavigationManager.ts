export interface INavigationManager {

    /**
     * Méthode pour récupérer l'url courant
     *
     * @return {string} l'url
     */
    getLocation():string;

    /**
     * Méthode pour récupérer les paramètres de l'url sous forme de Record.
     *
     * @return {Record<string, string>} Les paramètres de l'url.
     */
    getQueryParamsFromLocation():Record<string, string>;

    /**
     * Méthode pour ajouter ou remplacer (si existant) des paramètres d'url.
     * @param key
     * @param value
     */
    addOrReplaceQueryParams(key:string, value:string):void;

}