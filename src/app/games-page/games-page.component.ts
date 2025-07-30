import { Component, OnInit } from '@angular/core';
import { GAME_STORE_ITEMS } from '../constants';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit{
  allDatas:any
  constructor() { }

  ngOnInit(): void {
    this.allDatas=GAME_STORE_ITEMS

}
}
