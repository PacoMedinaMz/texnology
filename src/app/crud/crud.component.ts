import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../cruds/peticiones.service';

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

  constructor(config: NgbModalConfig, private modalService: NgbModal,private servicio:PeticionesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    
  }
  single: any[]= [
  ];
  multi: any[]= [
  ];
  triple: any[]= [
  ];
  view: any[] = [800, 200];
  view2: any[] = [800, 100];
  view3: any[] = [800, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 's';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'ganancia';
  showYAxis:boolean=true;
  showXAxis:boolean=true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#1A3AA4','#9A7A76']
  };
  colorScheme2 = {
    domain: ['#A10A28', '#C7B42C', '#AAAAAA','#1A3AA4','#9A7A76']
  };
  colorScheme3 = {
    domain: ['#E0594F', '#9F3340', '#EAB4B4','#CF000D','#00C05F','#D1D4A4',
  '#7F97B2','#A10A28', '#C7B42C']
  };
  data1;
  data2;
  cuenta1=0;
  cuenta2=0;
  cuenta3=0;
  cuenta4=0;
  cuenta5=0;
  cuenta6=0; 
  mes1=0;
  mes2=0
  mes3=0
  mes4=0
  mes5=0
  mes6=0
  mes7=0
  mes8=0
  mes9=0
  mes10=0
  mes11=0
  mes12=0

  datosgrafica(){
    this.servicio.pedir_convenios().subscribe(res=>{
      this.data1=res;
    this.data1.forEach(element => {
    if(element.FechaInicio.split('-')[1]=='01'){
      this.mes1=this.mes1+1;
    }
    if(element.FechaInicio.split('-')[1]=='02'){
      this.mes2=this.mes2+1;
    }
    if(element.FechaInicio.split('-')[1]=='03'){
      this.mes3=this.mes3+1;
    }
    if(element.FechaInicio.split('-')[1]=='04'){
      this.mes4=this.mes4+1;
    }
    if(element.FechaInicio.split('-')[1]=='05'){
      this.mes5=this.mes5+1;
    }
    if(element.FechaInicio.split('-')[1]=='06'){
      this.mes6=this.mes6+1;
    }
    if(element.FechaInicio.split('-')[1]=='07'){
      this.mes7=this.mes7+1;
    }
    if(element.FechaInicio.split('-')[1]=='08'){
      this.mes8=this.mes8+1;
    }
    if(element.FechaInicio.split('-')[1]=='09'){
      this.mes9=this.mes9+1;
    }
    if(element.FechaInicio.split('-')[1]=='10'){
      this.mes10=this.mes10+1;
    }
    if(element.FechaInicio.split('-')[1]=='11'){
      this.mes11=this.mes11+1;
    }
    if(element.FechaInicio.split('-')[1]=='12'){
      this.mes12=this.mes12+1;
    }
    var mes1={
      "name": "Enero",
      "value": this.mes1
    }
    var mes2={
      "name": "Febrero",
      "value": this.mes2
    }
    var mes3={
      "name": "Marzo",
      "value": this.mes3
    }
    var mes4={
      "name": "Abril",
      "value": this.mes4
    }
    var mes5={
      "name": "Mayo",
      "value": this.mes5
    }
    var mes6={
      "name": "Junio",
      "value": this.mes6
    }
    var mes7={
      "name": "Julio",
      "value": this.mes7
    }
    var mes8={
      "name": "Agosto",
      "value": this.mes8
    }
    var mes9={
      "name": "Septiembre",
      "value": this.mes9
    }
    var mes10={
      "name": "Octubre",
      "value": this.mes10
    }
    var mes11={
      "name": "Noviembre",
      "value": this.mes11
    }
    var mes12={
      "name": "Diciemre",
      "value": this.mes12
    }

    this.triple=[]
    this.triple.push(mes1,mes2, mes3, mes4, mes5, mes6, mes7, mes8, mes9, mes10,mes11,mes12 )
    this.triple = [...this.triple]
      if(element.IdPaquete=='61b3714978c8c44d9fe3eb4c'){
      this.cuenta1=this.cuenta1+1;
      }
      if(element.IdPaquete=='61b3718278c8c44d9fe3eb4f'){
        this.cuenta2=this.cuenta2+1;
      }
      if(element.IdPaquete=='61b371a678c8c44d9fe3eb52'){
        this.cuenta3=this.cuenta3+1;
      }
      if(element.IdPaquete=='61b371d978c8c44d9fe3eb55'){
        this.cuenta4=this.cuenta4+1;
      }
      if(element.IdPaquete=='61b3752478c8c44d9fe3eb6a'){
        this.cuenta5=this.cuenta5+1;
      }
      if(element.IdPaquete=='61b3756578c8c44d9fe3eb6d'){
        this.cuenta6=this.cuenta6+1;
      }
     
     
      });
      var ob1={
        "name": "gratis",
        "value": this.cuenta1
      }
      var ob2={
        "name": "basico",
        "value": this.cuenta2
      }
      var ob3={
        "name": "pro",
        "value": this.cuenta3
      }
      var ob4={
        "name": "ultimate",
        "value": this.cuenta4
      }
      var ob5={
        "name": "supremo",
        "value": this.cuenta5
      }
      var ob6={
        "name": "todo",
        "value": this.cuenta6
      }
      this.single=[]
      this.single.push(ob1,ob2,ob3,ob4,ob5,ob6)
      this.single = [...this.single]
    })

    this.servicio.pedir_paquetes().subscribe(res=>{
      var precio1,precio2,precio3,precio4,precio5,precio6=0;
      var res1:number,res2:number,res3:number,res4:number,res5:number=0;
      this.data2=res;
      console.log(this.data2)
      this.data2.forEach(element => {

        if(element._id=='61b3718278c8c44d9fe3eb4f'){
          res1=+element.Precio;
          precio1=res1 * this.cuenta2;
        }
        if(element._id=='61b371a678c8c44d9fe3eb52'){
          res2=+element.Precio;
          precio2=res2 * this.cuenta3;
        }
        if(element._id=='61b371d978c8c44d9fe3eb55'){
          res3=+element.Precio;
          precio3=res3 * this.cuenta4;
        }
        if(element._id=='61b3752478c8c44d9fe3eb6a'){
          res4=+element.Precio;
          precio4=res4 * this.cuenta5;
        }
        if(element._id=='61b3756578c8c44d9fe3eb6d'){
          res5=+element.Precio;
          precio5=res5 * this.cuenta6;
        }
       
        });
        
        var ob1={
          "name": "ganancias",
          "series": [
            {
              "name":"basico",
              "value":precio1
            },
            {
              "name":"pro",
              "value":precio2
            },
            {
              "name":"ultimate",
              "value":precio3
            },
            {
              "name":"supremo",
              "value":precio4
            },
            {
              "name":"todo",
              "value":precio5
            },
          ]
        }

        this.multi=[]
        this.multi.push(ob1)
        this.multi = [...this.multi]

    })
    


  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
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
this.datosgrafica();
   
  }

}
