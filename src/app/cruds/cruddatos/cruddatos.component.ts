import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-cruddatos',
  templateUrl: './cruddatos.component.html',
  styleUrls: ['./cruddatos.component.scss']
})
export class CruddatosComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  data;
  obj={
    FechaInicio:'',
    FechaFinal:'',
    MsgEnviados:'',
    MsgRecibidos:'',
    IdRobot:''
  }
  id;
  busqueda;
  todo(){this.servicio.pedir_datos().subscribe(res=>{
    this.data=res;
  })}
  insertar(){
    this.servicio.insertar_datos(this.obj).subscribe(res=>{
      this.todo();
    });
  }
  actualizar(){
    this.servicio.actualizar_datos(this.obj,this.id).subscribe(res=>{
      this.todo();
    });
  }
  eliminar(){
    this.servicio.eliminar_datos(this.id).subscribe(res=>{
      this.todo();
    });
  }
  seleccionar(){
    this.servicio.seleccionar_datos(this.obj).subscribe(res=>{
      this.todo();
    })
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
        return res.IdRobot.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f){
    this.id=a;
    this.obj.FechaInicio=b.split('T')[0];
    this.obj.FechaFinal=c.split('T')[0];
    this.obj.MsgEnviados=d;
    this.obj.MsgRecibidos=e;
    this.obj.IdRobot=f;
    

  }
  
  
  ngOnInit() {
   this.todo();
  }
}
