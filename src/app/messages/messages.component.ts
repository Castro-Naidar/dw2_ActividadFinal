/*Importacion de modulos y messageservice*/
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  /*Constructor que inyecta el servicio MessageService como una propiedad pública 'messageService'*/
  constructor(public messageService: MessageService) {}

}                                                                     