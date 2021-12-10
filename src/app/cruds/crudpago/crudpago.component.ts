import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudpago',
  templateUrl: './crudpago.component.html',
  styleUrls: ['./crudpago.component.scss']
})
export class CrudpagoComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    
    Monto:'',
    Fecha:'',
    Concepto:'',
    Banco:'',
    Cuenta:'',
    IdContrato:''
  }
  id;
  busqueda;
  todo(){this.servicio.pedir_pagos().subscribe(res=>{
    this.data=res;
  })}
  insertar(){
    this.servicio.insertar_pagos(this.obj).subscribe(res=>{
      this.todo();
    });
  }
  actualizar(){
    this.servicio.actualizar_pagos(this.obj,this.id).subscribe(res=>{
      this.todo();
    });;
  }
  eliminar(){this.servicio.eliminar_pagos(this.id).subscribe(res=>{
    this.todo();
  });}
  seleccionar(){
    this.servicio.seleccionar_pagos(this.obj).subscribe(res=>{
      this.todo();
    });
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
  busqueda_por(event){
    if(this.busqueda==""){
    
      this.todo();
    }else{
      
      this.data= this.data.filter(res=>{
        return res.IdContrato.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f,h){
    this.id=a;
    this.obj.Monto=b;
    this.obj.Fecha=c.split('T')[0];
    this.obj.Concepto=d;
    this.obj.Banco=e;
    this.obj.Cuenta=f;
    this.obj.IdContrato=h;
    

  }
  ngOnInit() {
   this.todo();
  }

}
