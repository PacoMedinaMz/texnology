import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PeticionesService } from '../peticiones.service';
import { PdfMakeWrapper,Img, Table,Txt } from 'pdfmake-wrapper';
import { ITable } from 'pdfmake-wrapper/lib/interfaces';
import { ServicioPDFService } from '../../services/servicio-pdf.service';
@Component({
  selector: 'app-crudconvenio',
  templateUrl: './crudconvenio.component.html',
  styleUrls: ['./crudconvenio.component.scss']
})
export class CrudconvenioComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private servicio:PeticionesService,private servicioPDF:ServicioPDFService) {
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
  texto:String="61b3729d78c8c44d9fe3eb5e";
  bd:string="convenio";
  contenido:any=null;
  usuario:any=null;
  generatePdf(){
    
    this.servicioPDF.getUsers(this.bd,this.texto).subscribe(data=>{
      this.contenido=data[0];
      this.buscarusuario();
      console.log(data)
      
      
    })
  }
  buscarusuario(){
    this.servicioPDF.getUsers("usuario",this.contenido["IdUsuario"]).subscribe(data=>{
      console.log(data[0]);
      this.usuario=data[0];
      this.pdfmaker();
    })
  }
  pdfmaker(){
    const pdf= new PdfMakeWrapper;
      pdf.defaultStyle({
        bold: true,
        fontSize: 15
       });
      
      pdf.pageMargins([40,60])
      pdf.add(new Txt("CONVENIO \n\n\n\n").color('red').alignment("center").fontSize(30).end);
      // async ()=>{
      //   pdf.add(await new Img("https://thumbs.dreamstime.com/b/contrato-que-firma-el-icono-o-logotipo-del-concepto-acuerdo-legal-137953215.jpg").build());
      // } 
      

      pdf.add(new Txt(`CONVENIO QUE CELEBRAN POR UNA PARTE TEXNOLOGY `+
      `REPRESENTADA EN ESTE ACTO POR EL SR. Jose Francisco Medina. A QUIEN EN LO `+ 
      `SUCESIVO SE LE DENOMINARÁ “EL JEFE DE JEFES”, Y POR LA OTRA PARTE ${this.usuario["Empresa"]} `+
      `, REPRESENTADA(S) EN ESTE ACTO POR EL(LOS) SR.(S) ${this.usuario["Nombre"]}  ${this.usuario["ApePat"]} ${this.usuario["ApeMat"]}`+ 
      `, CON FECHA DE NACIMIENTO ${this.usuario["FechaNacimiento"]} A QUIEN EN LO SUCESIVO SE LE(S) DENOMINARÁ “EL CLIENTE”, Y`+ 
      ` CONJUNTAMENTE CON EL PROVEEDOR “LAS PARTES” AL TENOR DE LAS SIGUIENTES DECLARACIONES Y CLÁUSULAS:`+
      `\n\n`).alignment("left").end);

      pdf.add(new Txt(`(a) Cuenta con los conocimientos técnicos, así como con los recursos humanos y materiales `+
      `necesarios para obligarse en los términos del presente Convenio, y que por lo tanto está `+
      `dispuesto a obligarse en los términos del mismo.\n`+
      `b) Que la celebración, entrega y cumplimiento del presente Convenio no viola ni violará ninguna `+
      `ley, reglamento, decreto, acuerdo u otra disposición gubernamental de ninguna clase, y no `+
      `constituye ni constituirá, una violación o incumplimiento de ninguna de las obligaciones `+
      `contractuales del “CLIENTE”.`+
      `\n\n`).alignment("left").end);
      
      pdf.add(this.createTable());
      pdf.add("\n")
      pdf.add(this.createTable2());
      pdf.watermark( new Txt('Texnology').color('blue').opacity(.2).end );
      pdf.create().open();
  }
  createTable():ITable{
    return new Table([
      ["FechaInicio","FechaFinal"],
      [`${this.contenido["FechaInicio"]}`,`${this.contenido["FechaFinal"]}`]   
    ]).end
  }
  createTable2():ITable{
    return new Table([
      ["Descripcion","Clausulas","IdPaquete"],
      [`${this.contenido["Descripcion"]}`,`${this.contenido["Clausulas"]}`,`${this.contenido["IdPaquete"]}`]    
    ]).end
  }
}
