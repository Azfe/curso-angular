import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class LoginService{
    constructor(private router:Router, private cookies:CookieService){}

    token:string;

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password).then( // se autentica el usuario en firebase
            response => {
                firebase.auth().currentUser?.getIdToken().then( // se solicita el token
                    token=>{
                        this.token = token; // se genera el token
                        this.cookies.set("token", this.token); // se guarda el token en una cookie
                        this.router.navigate(['/']); // se redirecciona al index
                    }
                )
            }
        );
    }

    getIdToken(){
        //return this.token;
        return this.cookies.get("token");
    }

    isLoggedIn(){
        //return this.token;
        return this.cookies.get("token");
    }

    isLoggedOut(){
        firebase.auth().signOut().then(()=>{
            this.token = ""; // se vacía el token cuando se presiona logout   
            this.cookies.set("token", this.token); // se guarda el token vacío en la cookie         
            this.router.navigate(['/']); // se redirecciona al index
            window.location.reload(); //refresca la página
        });        
    }    
}