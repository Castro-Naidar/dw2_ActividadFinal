/*Importacion de modulo, servicio, constante, componentes, etc*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }
  /*Método 'getHeroes' que devuelve un Observable de un array de objetos Hero*/
  getHeroes(): Observable<Hero[]> {
    /*Crea un Observable a partir de la constante HEROES*/
    const heroes = of(HEROES);
    this.messageService.add('Servicio de pagina: productos encontrados');
    return heroes;
  }
  /*Método 'getHero' que devuelve un Observable de un objeto Hero según su ID*/
  getHero(id: number): Observable<Hero> {
    /*Busca el héroe correspondiente al ID proporcionado en la constante HEROES*/
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Servicio de la pagina: ID de produco encontrado=${id}`);
    return of(hero);
  }
}