import { resolveForwardRef } from "@angular/core";

//fake service to manage auth
export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=>{resolve(this.loggedIn)}, 800) //wait 800ms to simulate authentication process
            }
        );

        return promise;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}