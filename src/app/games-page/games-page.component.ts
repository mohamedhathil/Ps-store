import { Component, OnInit } from '@angular/core';
import { GAME_STORE_ITEMS } from '../constants';
import { environment } from 'src/environment';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit{
  allDatas:any
  envData:any
  constructor() { }

  ngOnInit(): void {
    this.allDatas=GAME_STORE_ITEMS
    this.envData = `https://wa.me/${environment.client}`;

}
}
