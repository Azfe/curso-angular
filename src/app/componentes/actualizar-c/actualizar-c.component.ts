import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/empleados.service';
import { ServicioEmpleadosService } from 'src/app/servicio-empleados.service';

@Component({
  selector: 'app-actualizar-c',
  templateUrl: './actualizar-c.component.html',
  styleUrls: ['./actualizar-c.component.css']
})
export class ActualizarCComponent implements OnInit {

  title = 'Listado de empleados';

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){

  }

  empleados:Empleado[]=[];

  accion:number;

  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id']; // captura el id de la ruta

    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    // Se rellenan los campos del form con los datos del empleado:
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome(){
    this.router.navigate([""]); // Ruta que devuelve a la página Home
  }  

  /*
  actualizaEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadosService.updateEmpleadoServicio(this.indice, miEmpleado);  
    
    this.router.navigate([""]);
  }

  deleteEmpleado(){

    this.empleadosService.deleteEmpleadoServicio(this.indice); 

    this.router.navigate([""]);
  }
  */

  actualizaEmpleado(){

    if(this.accion == 1){
      let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleadosService.updateEmpleadoServicio(this.indice, miEmpleado);  
    
    this.router.navigate([""]);   

    }else{
      this.empleadosService.deleteEmpleadoServicio(this.indice); 

      this.router.navigate([""]);
    } 
    
    setTimeout(function reset() {
      location.reload();
    },200);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  
  indice:number = 0;

}