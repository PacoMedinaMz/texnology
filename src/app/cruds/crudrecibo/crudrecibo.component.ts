import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudrecibo',
  templateUrl: './crudrecibo.component.html',
  styleUrls: ['./crudrecibo.component.scss']
})
export class CrudreciboComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    
  }
  data;
  obj={
    Descripcion:'',
    Monto:'',
    Pago:'',
    Fecha:'',
    IdConvenio:''
  }
  busqueda;
  id;
  todo(){this.servicio.pedir_recibos().subscribe(res=>{
    this.data=res;
  })}
  insertar(){this.servicio.insertar_recibos(this.obj).subscribe(res=>{
    this.todo();
  })}
  actualizar(){this.servicio.actualizar_recibos(this.obj,this.id).subscribe(res=>{
    this.todo();
  })}
  eliminar(){this.servicio.eliminar_recibos(this.id).subscribe(res=>{
    this.todo();
  })}
  seleccionar(){this.servicio.seleccionar_recibos(this.obj).subscribe(res=>{
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
        return res.IdConvenio.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f){
    this.id=a;
    this.obj.Descripcion=b;
    this.obj.Monto=c;
    this.obj.Pago=d;
    this.obj.Fecha=e.split('T')[0];
    this.obj.IdConvenio=f;
    

  }
  

  ngOnInit() {
   this.todo();
  }
}
