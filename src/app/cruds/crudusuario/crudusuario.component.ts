import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudusuario',
  templateUrl: './crudusuario.component.html',
  styleUrls: ['./crudusuario.component.scss']
})
export class CrudusuarioComponent implements OnInit {

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
    Empresa:'',
    FechaNacimiento:Date,
    Correo:'',
    Password:''
  }
  id;
  busqueda;
  todo(){this.servicio.pedir_usuarios().subscribe(res=>{
    this.data=res;
    console.log(res);
  })}
  insertar(){this.servicio.insertar_usuarios(this.obj).subscribe(res=>{
    this.todo();
  })}
  actualizar(){this.servicio.actualizar_usuarios(this.obj,this.id).subscribe(res=>{
    this.todo();
  })}
  eliminar(){this.servicio.eliminar_usuarios(this.id).subscribe(res=>{
    this.todo();
  })}
  seleccionar(){this.servicio.seleccionar_usuarios(this.obj).subscribe(res=>{
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
        return res.Nombre.toLocaleLowerCase().match(this.busqueda.toLocaleLowerCase());
      })
    }
    
  }
  rellenar(a,b,c,d,e,f,g,h){
    this.id=a;
    this.obj.Nombre=b;
    this.obj.ApeMat=c;
    this.obj.ApePat=d;
    this.obj.Empresa=e;
    this.obj.FechaNacimiento=f.split('T')[0];
    this.obj.Correo=g;
    this.obj.Password;

  }
  
  ngOnInit() {
   this.todo();
  }

}
