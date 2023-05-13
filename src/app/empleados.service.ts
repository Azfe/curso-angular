import { Injectable, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './database/data.services';



@Injectable({
  providedIn: 'root'
})
export class EmpleadosService implements OnInit {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataServices:DataServices){

   }

  ngOnInit() {
    /*this.dataServices.guardarEmpleados().subscribe(res => {
      this.empleados = res;*/
  }

  empleados:Empleado[]=[];

  /*
  empleados:Empleado[]=[

    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Matias", "Vicepresidente", 6800),
    new Empleado("María", "Fernandez", "Jefa Departamento", 5200),
    new Empleado("Laura", "López", "Administrativo", 2500)
  ];*/

  setEmpleados(empleados:Empleado[]){
    this.empleados = empleados;
  }

  obtenerEmpleados(){
    return this.dataServices.cargarEmpleados();
  }

  addEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("Nueva persona a añadir: \n" + 
    empleado.nombre + " " + empleado.apellido + "\n" +
    "Salario: " + empleado.salario + " €");

    this.empleados.push(empleado); // Añade al array el empleado insertado

    this.dataServices.guardarEmpleados(this.empleados);
  }

  updateEmpleadoServicio(indice:number, empleado:Empleado){
    let empleadoUpdated = this.empleados[indice];
    
    empleadoUpdated.nombre = empleado.nombre;
    empleadoUpdated.apellido = empleado.apellido;
    empleadoUpdated.cargo = empleado.cargo;
    empleadoUpdated.salario = empleado.salario;

    this.dataServices.actualizarEmpleado(indice, empleado);    
  }

  deleteEmpleadoServicio(indice:number){
    this.empleados.splice(indice, 1);

    this.dataServices.eliminarEmpleado(indice);

    if( this.empleados != null){
      this.dataServices.guardarEmpleados(this.empleados); // volver a ordenar los indices del array en la bbdd
    }
  }

  encontrarEmpleado(indice:number){

    let empleado:Empleado = this.empleados[indice];

    return empleado;
  }
}
