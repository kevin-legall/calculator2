export enum NavbarEnum {
    CALCULATRICE,
    HISTORIQUE,
    CONVERTISSEUR
}
export class NavbarModel {
    private _navbarElement: NavbarEnum = NavbarEnum.CALCULATRICE;

    constructor(navbarElement: NavbarEnum) {
        this._navbarElement = navbarElement;
    }

    get navbarElement(): NavbarEnum { return this._navbarElement; }

    set navbarElement(value: NavbarEnum) { this._navbarElement = value; }
}

