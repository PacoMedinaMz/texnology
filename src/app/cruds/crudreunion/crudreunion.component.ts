import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudreunion',
  templateUrl: './crudreunion.component.html',
  styleUrls: ['./crudreunion.component.scss']
})
export class CrudreunionComponent implements OnInit {

 
  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    Fecha:'',
    Hora:'',
    Notas:'',
    Enlace:'',
    IdEmpleado:''

  }
  id;
  busqueda;
  todo(){this.servicio.pedir_reuniones().subscribe(res=>{
    this.data=res;
  })}
  insertar(){this.servicio.insertar_reuniones(this.obj).subscribe(res=>{
  this.todo();
  })}
  actualizar(){this.servicio.actualizar_reuniones(this.obj,this.id).subscribe(res=>{
    this.todo();
  })}
  eliminar(){this.servicio.eliminar_reuniones(this.id).subscribe(res=>{
    this.todo();
  })}
  seleccionar(){this.servicio.seleccionar_reuniones(this.obj).subscribe(res=>{
    this.todo();
  })}
  open(alta) {
    this.modalService.open(alta);
  }

  openb(baja) {
    this.modalService.open(baja);
  }

  openc(cambio) {
    this.modalService.open(cambio);
  }
  busqueda_por(event){
    if(this.busqueda==""){
      this.todo();
    }else{
      this.data= this.data.filter(res=>{
        return res.Enlace.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f){
    this.id=a;
    this.obj.Fecha=b.split('T')[0];
    this.obj.Hora=c;
    this.obj.Notas=d;
    this.obj.Enlace=e;
    this.obj.IdEmpleado=f;
    

  }
  
  
  ngOnInit() {
   this.todo();
  }

}
