import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { LoginService } from "../services/login.service";

@Injectable()
export class DataServices{    
    constructor(private httpClient:HttpClient, private loginService:LoginService){

    }

    cargarEmpleados(){ // Obtiene la información que existe en la bbdd
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://angularpildoras-1fb47-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
    }

    guardarEmpleados(listaEmpleados:Empleado[]){
        this.httpClient.put('https://angularpildoras-1fb47-default-rtdb.europe-west1.firebasedatabase.app/datos.json', listaEmpleados).subscribe( // Método put reemplaza la información que ya existe en la bbdd, añadiendo solo la nueva.
            response => console.log("Se han guardado los empleados: " + response),
            error => console.log("Error " + error)
        );
    }
    
    actualizarEmpleado(indice:number, empleado:Empleado){

        let url = 'https://angularpildoras-1fb47-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
        
        this.httpClient.put(url, empleado).subscribe( // Método put reemplaza la información que ya existe en la bbdd, añadiendo solo la nueva.
            response => console.log("Se ha modificado el empleado: " + response),
            error => console.log("Error " + error)
        );
        
        /*
        this.httpClient.put(url, empleado).subscribe({ // Método put reemplaza la información que ya existe en la bbdd, añadiendo solo la nueva.
            next: response => {
                console.log("Se ha modificado el empleado: " + response);
            },
            error: (error: string) => {
                console.log("Error " + error);
            }
        })*/         
    }

    eliminarEmpleado(indice:number){

        let url = 'https://angularpildoras-1fb47-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe( // Método put reemplaza la información que ya existe en la bbdd, añadiendo solo la nueva.
            response => console.log("Se ha eliminado el empleado: " + response),
            error => console.log("Error " + error)
        );
    }
}