import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'acercade', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'wok', component: WokComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'resetpass', component: ResetpassComponent },
  { path: 'more', component: MoreComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'signinemp', component: SigninempComponent },
  { path: '**', component: HomeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  
 }
