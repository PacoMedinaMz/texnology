import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudcontrato',
  templateUrl: './crudcontrato.component.html',
  styleUrls: ['./crudcontrato.component.scss']
})
export class CrudcontratoComponent implements OnInit {

   constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

busqueda;
  open(alta) {
    this.modalService.open(alta);
  }

  openb(baja) {
    this.modalService.open(baja);
  }

  openc(cambio) {
    this.modalService.open(cambio);
  }
  obj={
    FechaInicio:'',
    FechaFinal:'',
    Clausulas:'',
    Estado:'',
    IdEmpleado:''
  }
  data;
  id;
  todo(){this.servicio.pedir_contratos().subscribe(res=>{
    this.data=res;
  })}
  insertar(){
    console.log('entro');
    this.servicio.insertar_contratos(this.obj).subscribe(res=>{this.todo()});
  }
  actualizar(){
    this.servicio.actualizar_contratos(this.obj,this.id).subscribe(res=>{this.todo()});;
  }
  eliminar(){
    this.servicio.eliminar_contratos(this.id).subscribe(res=>{this.todo()});;

  }
  seleccionar(){
this.servicio.seleccionar_contratos(this.obj).subscribe(res=>{this.todo()});;
  }
  
  ngOnInit() {
   this.todo();
  }
  busqueda_por(event){
    if(this.busqueda==""){
    
      this.todo();
    }else{
      
      this.data= this.data.filter(res=>{
        return res.IdEmpleado.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f){
    this.id=a;
    this.obj.FechaInicio=b.split('T')[0];
    this.obj.FechaFinal=c.split('T')[0];
    this.obj.Clausulas=d;
    this.obj.Estado=e;
    this.obj.IdEmpleado=f;

  }
}
