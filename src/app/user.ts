export class User {

    username!: string;
    email!: string;
    phone!: number;

    constructor(username:string, email:string, phone:number){
        this.username = username;
        this.email = email;
        this.phone =phone;
    }

}
