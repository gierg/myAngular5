import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  pageTitle: string;
  hero: Heroes;
  news: News;

  constructor(
    private heroService: HeroesService
  ) { }

  ngOnInit() {
    this.pageTitle = 'Heroes are comeback';
    this.hero = {
      firstName: 'Gie',
      lastName: 'Rg',
      age: '28',
      skill: 'Fullstack Javascript Developer'
    };

    this.heroService.getDummyData().subscribe(
      (resp) => {
        this.news = resp;
      }
    );
    console.log(this.hero);

  }

}

interface Heroes {
  firstName: string;
  lastName: string;
  age: string;
  skill: string;
}

interface News {
  userId: string;
  id: number;
  title: string;
  body: string;
}
