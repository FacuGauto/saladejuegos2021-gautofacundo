export class Usuario {
    email: string;
    pass: string;
    nombre?: string;

    constructor(pEmail: string, pPass: string){
        this.email = pEmail;
        this.pass = pPass;
    }
}

