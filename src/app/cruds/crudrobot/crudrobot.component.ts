import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudrobot',
  templateUrl: './crudrobot.component.html',
  styleUrls: ['./crudrobot.component.scss']
})
export class CrudrobotComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    Nombre:'',
    Description:'',
    Disenio:'',
    Numero:0,
    IdUsuario:''
  }
  id;
  busqueda;
  todo(){this.servicio.pedir_robots().subscribe(res=>{
    console.log(res)
    this.data=res;
  })}
  insertar(){this.servicio.insertar_robots(this.obj).subscribe(res=>{
  this.todo();
  })}
  actualizar(){this.servicio.actualizar_robots(this.obj,this.id).subscribe(res=>{
   this.todo();
  })}
  eliminar(){this.servicio.eliminar_robots(this.id).subscribe(res=>{
    this.todo();
  })}
  seleccionar(){this.servicio.seleccionar_robots(this.obj).subscribe(res=>{
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
        return res.Nombre.toLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f){
    this.id=a;
    this.obj.Nombre=b;
    this.obj.Disenio=c;;
    this.obj.Numero=d;
    this.obj.IdUsuario=e;

  }
  
  
  ngOnInit() {
   this.todo();
  }

}
