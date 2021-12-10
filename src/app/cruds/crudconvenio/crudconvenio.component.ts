import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudconvenio',
  templateUrl: './crudconvenio.component.html',
  styleUrls: ['./crudconvenio.component.scss']
})
export class CrudconvenioComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    Descripcion:'',
    Clausulas:'',
    FechaInicio:'',
    FechaFinal:'',
    IdUsuario:'',
    IdPaquete:'',
    //estado:''
    
  }
  id;
  busqueda;
  todo(){this.servicio.pedir_convenios().subscribe(res=>{
    this.data=res;
  })}
  insertar(){
    this.servicio.insartar_convenios(this.obj).subscribe(res=>{
      this.todo();
    });
  }
  actualizar(){
    this.servicio.actualizar_convenios(this.obj,this.id).subscribe(res=>{
      this.todo();
    });;
  }
  eliminar(){
    this.servicio.eliminar_convenios(this.id).subscribe(res=>{
      this.todo();
    });;
  }
  seleccionar(){
    this.servicio.seleccionar_convenios(this.obj).subscribe(res=>{
      this.todo();
    });;
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
        return res.IdUsuario.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f,g){
    this.id=a;
    this.obj.Descripcion=b;
    this.obj.Clausulas=c;
    this.obj.FechaInicio=d.split('T')[0];
    this.obj.FechaFinal=e.split('T')[0];
    this.obj.IdUsuario=f;
    this.obj.IdPaquete=g;

  }
  ngOnInit() {
   this.todo();
  }
}
