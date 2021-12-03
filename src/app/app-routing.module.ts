import { NgModule } from '@angular/core';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { WokComponent } from './wok/wok.component';
import { SigninComponent } from './signin/signin.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { MoreComponent } from './more/more.component';
import { CrudComponent } from './crud/crud.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { SigninempComponent } from './signinemp/signinemp.component';
import { ChatComponent } from './chat/chat.component';
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

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'acercade', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'wok', component: WokComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'resetpass', component: ResetpassComponent },
  { path: 'more', component: MoreComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'signinemp', component: SigninempComponent },
  { path: 'soporte', component: ChatComponent },
  { path: 'crudcontrato', component: CrudcontratoComponent},
  { path: 'crudconvenio', component: CrudconvenioComponent},
  { path: 'cruddatos', component: CruddatosComponent},
  { path: 'crudempleado', component: CrudempleadoComponent},
  { path: 'crudpago', component: CrudpagoComponent},
  { path: 'crudpaquete', component: CrudpaqueteComponent},
  { path: 'crudpuesto', component: CrudpuestoComponent},
  { path: 'crudrecibo', component: CrudreciboComponent},
  { path: 'crudreunion', component: CrudreunionComponent},
  { path: 'crudrobot', component: CrudrobotComponent},
  { path: 'crudtareas', component: CrudtareasComponent},
  { path: 'crudusuario', component: CrudusuarioComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
