/*Importacion de modulos, hero y hero service*/
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
/*import { HEROES } from '../mock-heroes';*/

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*heroes = HEROES;
  selectedHero!: Hero;*/
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  getHeroes(): void {
    /*Llama al método 'getHeroes' del servicio HeroService y se suscribe a los resultados*/
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}