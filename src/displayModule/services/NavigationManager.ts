import {INavigationManager} from "./INavigationManager";
import {useLocation, useNavigate} from "react-router-dom";

export class NavigationManager implements INavigationManager {
    private _location = useLocation();
    private navigate = useNavigate();

    addOrReplaceQueryParams(key:string, value:string): void {
        this.navigate( `/${this.getLocation().split("?")}?${key}=${value}`)
    }

    getLocation(): string {
        return this._location.pathname;
    }

    getQueryParamsFromLocation(): Record<string, string> {
        const currentLocation = this.getLocation();
        const queryParams:Record<string, string> = {};
        const urlSearchParams = new URLSearchParams(currentLocation);

        urlSearchParams.forEach((value, key) => {
            queryParams[key] = value;
        })
        return queryParams;
    }
}