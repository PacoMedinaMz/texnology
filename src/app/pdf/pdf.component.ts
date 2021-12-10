import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper,Img, Table,Txt } from 'pdfmake-wrapper';
import { ITable } from 'pdfmake-wrapper/lib/interfaces';
import { ServicioPDFService } from '../services/servicio-pdf.service';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  
  constructor(private servicioPDF:ServicioPDFService) { 
    
  }
  texto:string="61b2d3d3d55c0f38b238638e";
  contenido:any;
  bd:string="contrato";
  
  
  ngOnInit(): void {
    
    
  }
  result:any=[];
  generatePdf(){
    this.servicioPDF.getUsers(this.bd,this.texto).subscribe(data=>{
      console.log(data)
      this.contenido=data[0];
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
      pdf.add(new Txt("COPIA CONTRATO \n\n\n\n").color('red').alignment("center").fontSize(30).end);
      // async ()=>{
      //   pdf.add(await new Img("https://thumbs.dreamstime.com/b/contrato-que-firma-el-icono-o-logotipo-del-concepto-acuerdo-legal-137953215.jpg").build());
      // } 
      // new Img("https://gradoceroprensa.files.wordpress.com/2018/10/images6.jpeg",false).build()
      // .then(img=>{
      //   pdf.add(img);
      // });

      pdf.add(new Txt("TEXNOLOGY se obliga a tratar confidencialmente todos aquellos datos," +
      "documentación y demás información que hayan sido suministrados por el CLIENTE durante la vigencia"+
      " del presente contrato. Así mismo se compromete a no comunicar esta información a ninguna otra persona "+
      "o entidad, exceptuando sus propios empleados y sólo en la medida necesaria para la correcta ejecución del"+
      "contrato. \n\n\n\n").alignment("left").end);
      pdf.add(new Txt("Los servicios y funciones descritos en el pacto anterior se prestarán"+
      " por parte de TEXNOLOGY por un plazo inicial posteriormente descrito,"+
      "  que se renovará tácitamente por periodos anuales, de no "+
      "mediar preaviso, al menos, con un mes de antelación a su término. \n\n\n\n")
      .alignment("left").end);
      pdf.add(this.createTable());
      pdf.add("\n")
      pdf.add(this.createTable2());
      pdf.watermark( new Txt('Texnology').color('blue').opacity(.2).end );
      pdf.create().open();
  }

  createTable():ITable{
    return new Table([
      ["FechaInicio","FechaFinal"],
      [`${this.contenido["FechaInicio"]}`,`${this.contenido["FechaFinal"]}`],    
    ]).end
  }
  createTable2():ITable{
    return new Table([
      ["Clausulas","Estado","IdEmpleado"],
      [`${this.contenido["Clausulas"]}`,`${this.contenido["Estado"]}`,`${this.contenido["IdEmpleado"]}`]
    ]).end
  }


}
