import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { SigninComponent } from './signin/signin.component';
import { WokComponent } from './wok/wok.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { MoreComponent } from './more/more.component';
import { CrudComponent } from './crud/crud.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { SigninempComponent } from './signinemp/signinemp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudcontratoComponent } from './cruds/crudcontrato/crudcontrato.component';
import { CrudconvenioComponent } from './cruds/crudconvenio/crudconvenio.component';
import { CruddatosComponent } from './cruds/cruddatos/cruddatos.component';
import { CrudempleadoComponent } from './cruds/crudempleado/crudempleado.component';
import { CrudpagoComponent } from './cruds/crudpago/crudpago.component';
import { CrudpaqueteComponent } from './cruds/crudpaquete/crudpaquete.component';
import { CrudpuestoComponent } from './cruds/crudpuesto/crudpuesto.component';
import { CrudreciboComponent } from './cruds/crudrecibo/crudrecibo.component';
import { CrudreunionComponent } from './cruds/crudreunion/crudreunion.component';
import { CrudrobotComponent } from './cruds/crudrobot/crudrobot.component';
import { CrudtareasComponent } from './cruds/crudtareas/crudtareas.component';
import { CrudusuarioComponent } from './cruds/crudusuario/crudusuario.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import {ServicioPDFService } from '../app/services/servicio-pdf.service';
import { PdfComponent } from './pdf/pdf.component';
import { PdfConvenioComponent } from './pdf-convenio/pdf-convenio.component';

PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AcercaDeComponent,
    ContactoComponent,
    FooterComponent,
    FaqComponent,
    SigninComponent,
    WokComponent,
    ResetpassComponent,
    MoreComponent,
    CrudComponent,
    IngresoComponent,
    SigninempComponent,
    ChatComponent,
    CrudcontratoComponent,
 CrudconvenioComponent ,
 CruddatosComponent ,
 CrudempleadoComponent ,
 CrudpagoComponent ,
 CrudpaqueteComponent ,
 CrudpuestoComponent, 
 CrudreciboComponent ,
 CrudreunionComponent ,
 CrudrobotComponent ,
 CrudtareasComponent,
 CrudusuarioComponent,
 PdfComponent,
    PdfConvenioComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [ServicioPDFService],
  bootstrap: [AppComponent],
})
export class AppModule {}
