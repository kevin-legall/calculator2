export class NavbarException extends Error {
    public message : string = "";

    constructor(message: string) {
        super(message);
    }
}