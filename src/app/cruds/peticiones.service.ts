import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  url='http://localhost:20404/';
  
  constructor(private http:HttpClient) { }
  pedir_contratos(){
return this.http.get(`${this.url}contrato`);
  }
  pedir_convenios(){
return this.http.get(`${this.url}convenio`);
  }
  pedir_datos(){
return this.http.get(`${this.url}datos`);
  }
  pedir_empleados(){
return this.http.get(`${this.url}empleado`);
  }
  pedir_pagos(){
return this.http.get(`${this.url}pago`);
  }
  pedir_paquetes(){
return this.http.get(`${this.url}paquete`);
  }
  pedir_puestos(){
return this.http.get(`${this.url}puesto`);
  }
  pedir_recibos(){
return this.http.get(`${this.url}recibo`);
  }
  pedir_reuniones(){
return this.http.get(`${this.url}reunion`);
  }
  pedir_robots(){
return this.http.get(`${this.url}robot`);
  }
  pedir_tareas(){
return this.http.get(`${this.url}tareas`);
  }
  pedir_usuarios(){
return this.http.get(`${this.url}usuario`);
  }
  ////////////////////
  insertar_contratos(data){
  return this.http.post(`${this.url}contrato`,data);
  }
  insartar_convenios(data){
  return this.http.post(`${this.url}convenio`,data);
  }
  insertar_datos(data){
  return  this.http.post(`${this.url}datos`,data);
  }
  insertar_empleados(data){
return this.http.post(`${this.url}empleado`,data);
  }
  insertar_pagos(data){
return this.http.post(`${this.url}pago`,data);
  }
  insertar_paquetes(data){
return this.http.post(`${this.url}paquete`,data);
  }
  insertar_puestos(data){
return this.http.post(`${this.url}puesto`,data);
  }
  insertar_recibos(data){
return this.http.post(`${this.url}recibo`,data);
  }
  insertar_reuniones(data){
return this.http.post(`${this.url}reunion`,data);
  }
  insertar_robots(data){
return this.http.post(`${this.url}robot`,data);
  }
  insertar_tareas(data){
return this.http.post(`${this.url}tareas`,data);
  }
  insertar_usuarios(data){
    
    return this.http.post(`${this.url}usuario`,data);
 

  }
//////////////////////////////////
  actualizar_contratos(data,id){
  return   this.http.patch(`${this.url}contrato/${id}`,data);
  }
  actualizar_convenios(data,id){
  return   this.http.patch(`${this.url}convenio/${id}`,data);
  }
  actualizar_datos(data,id){
   return  this.http.patch(`${this.url}datos/${id}`,data);
  }
  actualizar_empleados(data,id){
  return   this.http.patch(`${this.url}empleado/${id}`,data);
  }
  actualizar_pagos(data,id){
  return   this.http.patch(`${this.url}pago/${id}`,data);
  }
  actualizar_paquetes(data,id){
  return   this.http.patch(`${this.url}paquete/${id}`,data);
  }
  actualizar_puestos(data,id){
  return   this.http.patch(`${this.url}puesto/${id}`,data);
  }
  actualizar_recibos(data,id){
  return   this.http.patch(`${this.url}recibo/${id}`,data);
  }
  actualizar_reuniones(data,id){
  return   this.http.patch(`${this.url}reunion/${id}`,data);
  }
  actualizar_robots(data,id){
  return   this.http.patch(`${this.url}robot/${id}`,data);
  }
  actualizar_tareas(data,id){
  return   this.http.patch(`${this.url}tareas/${id}`,data);
  }
  actualizar_usuarios(data,id){
  return   this.http.patch(`${this.url}usuario/${id}`,data);
  }
/////////////////////////////////////////
  eliminar_contratos(data){
  return   this.http.delete(`${this.url}contrato/${data}`);
  }
  eliminar_convenios(data){
  return   this.http.delete(`${this.url}convenio/${data}`);
  }
  eliminar_datos(data){
  return   this.http.delete(`${this.url}datos/${data}`);
  }
  eliminar_empleados(data){
  return   this.http.delete(`${this.url}empleado/${data}`);
  }
  eliminar_pagos(data){
  return   this.http.delete(`${this.url}pago/${data}`);
  }
  eliminar_paquetes(data){
  return   this.http.delete(`${this.url}paquete/${data}`);
  }
  eliminar_puestos(data){
  return   this.http.delete(`${this.url}puesto/${data}`);
  }
  eliminar_recibos(data){
  return   this.http.delete(`${this.url}recibo/${data}`);
  }
  eliminar_reuniones(data){
  return   this.http.delete(`${this.url}reunion/${data}`);
  }
  eliminar_robots(data){
  return   this.http.delete(`${this.url}robot/${data}`);
  }
  eliminar_tareas(data){
   return  this.http.delete(`${this.url}tareas/${data}`);
  }
  eliminar_usuarios(data){
  return   this.http.delete(`${this.url}usuario/${data}`);
  }
//////////////////////////////////////
  seleccionar_contratos(data){
  return   this.http.get(`${this.url}contrato/${data}`);
  }
  seleccionar_convenios(data){
  return   this.http.get(`${this.url}convenio/${data}`);
  }
  seleccionar_datos(data){
   return  this.http.get(`${this.url}datos/${data}`);
  }
  seleccionar_empleados(data){
  return   this.http.get(`${this.url}empleado/${data}`);
  }
  seleccionar_pagos(data){
  return   this.http.get(`${this.url}pago/${data}`);
  }
  seleccionar_paquetes(data){
   return  this.http.get(`${this.url}paquete/${data}`);
  }
  seleccionar_puestos(data){
   return  this.http.get(`${this.url}puesto/${data}`);
  }
  seleccionar_recibos(data){
   return  this.http.get(`${this.url}recibo/${data}`);
  }
  seleccionar_reuniones(data){
   return  this.http.get(`${this.url}reunion/${data}`);
  }
  seleccionar_robots(data){
  return   this.http.get(`${this.url}robot/${data}`);
  }
  seleccionar_tareas(data){
  return   this.http.get(`${this.url}tareas/${data}`);
  }
  seleccionar_usuarios(data){
  return   this.http.get(`${this.url}usuario/${data}`);
  }
}
