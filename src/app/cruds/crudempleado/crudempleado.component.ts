import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudempleado',
  templateUrl: './crudempleado.component.html',
  styleUrls: ['./crudempleado.component.scss']
})
export class CrudempleadoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    Nombre:'',
    ApePat:'',
    ApeMat:'',
    RFC:'',
    FechaNacimiento:Date,
    Correo:'',
    Password:''
  }
  id;
  busqueda;
  todo(){this.servicio.pedir_empleados().subscribe(res=>{
    this.data=res;
  })}
  insertar(){
    this.servicio.insertar_empleados(this.obj).subscribe(res=>{this.todo();})
  }
  actualizar(){
    this.servicio.actualizar_empleados(this.obj,this.id).subscribe(res=>{this.todo();})
  }
  eliminar(){
    this.servicio.eliminar_empleados(this.id).subscribe(res=>{this.todo();})
  }
  seleccionar(){
    this.servicio.seleccionar_empleados(this.obj).subscribe(res=>{this.todo();})
  }

  open(alta) {
    this.modalService.open(alta);
  }

  openb(baja) {
    this.modalService.open(baja);
  }

  openc(cambio) {
    this.modalService.open(cambio);
  }
  
  ngOnInit() {
   this.todo();
  }
  busqueda_por(event){
    if(this.busqueda==""){
    
      this.todo();
    }else{
      
      this.data= this.data.filter(res=>{
        return res.Nombre.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f,g,h){
    this.id=a;
    this.obj.Nombre=b;
    this.obj.ApeMat=c;
    this.obj.ApePat=d;
    this.obj.RFC=e;
    this.obj.FechaNacimiento=f.split('T')[0];
    this.obj.Correo=g;
    this.obj.Password;

  }

}
