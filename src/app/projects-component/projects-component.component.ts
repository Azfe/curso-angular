import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {
  
  title = 'Listado de empleados';

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){

  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  volverHome(){

    this.router.navigate([""]); // Ruta que devuelve a la página Home

  }

  empleados:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);

    this.empleadosService.addEmpleadoServicio(miEmpleado);  
    
    this.router.navigate([""]);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
