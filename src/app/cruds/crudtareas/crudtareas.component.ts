import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudtareas',
  templateUrl: './crudtareas.component.html',
  styleUrls: ['./crudtareas.component.scss']
})
export class CrudtareasComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    Nombre:'',
    Descripcion:'',
    Actividades:'',
    Estado:'',
    IdEmpleado:'',
    IdRobot:''

  }
  id;
  busqueda;
  todo(){this.servicio.pedir_tareas().subscribe(res=>{
    this.data=res;
  })}
  insertar(){this.servicio.insertar_tareas(this.obj).subscribe(res=>{
    this.todo();
  })}
  actualizar(){
    this.servicio.actualizar_tareas(this.obj,this.id).subscribe(res=>{
      this.todo();
    })
  }
  eliminar(){
    this.servicio.eliminar_tareas(this.id).subscribe(res=>{
  this.todo();
    })
  }
  seleccionar(){}
  open(alta) {
    this.modalService.open(alta);
  }

  openb(baja) {
    this.modalService.open(baja);
  }

  openc(cambio) {
    this.modalService.open(cambio);
  }
  rellenar(a,b,c,d,e,r,f){
    this.id=a;
    this.obj.Nombre=b;
    this.obj.Descripcion=c;
    this.obj.Actividades=d;
    this.obj.Estado=e;
    this.obj.IdEmpleado=r;
    this.obj.IdRobot=f;
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
  ngOnInit() {
   this.todo();
  }

}
