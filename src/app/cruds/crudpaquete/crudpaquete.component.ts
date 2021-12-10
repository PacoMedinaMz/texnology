import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudpaquete',
  templateUrl: './crudpaquete.component.html',
  styleUrls: ['./crudpaquete.component.scss']
})
export class CrudpaqueteComponent implements OnInit {

  
  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    Nombre:'',
    Precio:'',
    Duracion:'',
    Contenido:''
  }
  busqueda;
  id;
  todo(){this.servicio.pedir_paquetes().subscribe(res=>{
    this.data=res;
  })}
  insertar(){this.servicio.insertar_paquetes(this.obj).subscribe(res=>{this.todo();})}
  actualizar(){this.servicio.actualizar_paquetes(this.obj,this.id).subscribe(res=>{this.todo();})}
  eliminar(){this.servicio.eliminar_paquetes(this.id).subscribe(res=>{this.todo();})}
  seleccionar(){this.servicio.seleccionar_paquetes(this.obj).subscribe(res=>{this.todo();})}

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
  rellenar(a,b,c,d,e){
    this.id=a;
    this.obj.Nombre=b;
    this.obj.Precio=c;
    this.obj.Duracion=d;
    this.obj.Contenido=e;
  }
}
