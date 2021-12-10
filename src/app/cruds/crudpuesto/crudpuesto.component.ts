import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
@Component({
  selector: 'app-crudpuesto',
  templateUrl: './crudpuesto.component.html',
  styleUrls: ['./crudpuesto.component.scss']
})
export class CrudpuestoComponent implements OnInit {

 
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
    Estado:'',
    IdEmpleado:''
  }
  id;
  busqueda;
  todo(){this.servicio.pedir_puestos().subscribe(res=>{
    this.data=res;
  })}
  insertar(){this.servicio.insertar_puestos(this.obj).subscribe(res=>{
    this.todo();
  })}
  actualizar(){this.servicio.actualizar_puestos(this.obj,this.id).subscribe(res=>{
    this.todo();
  })}
  eliminar(){this.servicio.eliminar_puestos(this.id).subscribe(res=>{
    this.todo();
  })}
  seleccionar(){this.servicio.seleccionar_puestos(this.obj).subscribe(res=>{
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
  rellenar(a,b,c,d,e){
    this.id=a;
    this.obj.Nombre=b;
    this.obj.Descripcion=d;
    this.obj.Estado=c;
    this.obj.IdEmpleado=e;
   
    

  }
  ngOnInit() {
    this.todo();
   
  }
}
