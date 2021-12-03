import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CrudComponent implements OnInit {

  public arr:Array<Object> = [
    {id: 1, text: 'Contrato',ruta: 'crudcontrato'},
    {id: 2, text: 'Convenio',ruta: 'crudconvenio'},
    {id: 3, text: 'Datos',ruta: 'cruddatos'},
    {id: 4, text: 'Empleado',ruta: 'crudempleado'},
    {id: 5, text: 'Pago',ruta: 'crudpago'},
    {id: 6, text: 'Paquete',ruta: 'crudpaquete'},
    {id: 7, text: 'Puesto',ruta: 'crudpuesto'},
    {id: 8, text: 'Recibo',ruta: 'crudrecibo'},
    {id: 9, text: 'Reunion',ruta: 'crudreunion'},
    {id: 10, text: 'Robot',ruta: 'crudrobot'},
    {id: 11, text: 'Tareas',ruta: 'crudtareas'},
    {id: 12, text: 'Usuario',ruta: 'crudusuario'},
];

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    
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
  
  ngOnInit() {
   
  }

}
