import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  mensajes: any;
  socket: any;
  nombre: any;

  constructor() {
    let sock: any = io('https://api-tex.rmaafs.com/');
    this.socket = sock;
    //Al recibir algún mensaje...
    sock.on('messages', (msg: any) => {
      this.mensajes = msg;
    });

    sock.on('nombre', (msg: any) => {
      this.nombre = msg;
    });
  }

  ngOnInit(): void {}

  public handleOnClick() {
    const element = <HTMLInputElement>document.getElementById('text_area_msg');
    const msg = element.value;
    console.log('Clickeado', msg);

    element.value = '';
    this.submitChatMessage(msg);
  }

  submitChatMessage(text: any) {
    //Si no escribió un mensaje, ignoramos
    if (text.length <= 0) return;
    //Creamos el objeto que será enviado al socket.
    let msg = {
      autor: 'Usuario ' + this.nombre,
      texto: text,
      fecha: getDateFormat(),
    };
    this.socket.emit('new-message', msg);
  }
}

function getDateFormat() {
  let date = new Date();
  let hours = date.getHours();
  let minutes: any = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
