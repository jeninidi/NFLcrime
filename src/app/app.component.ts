import { Component } from '@angular/core';
import { TopcrimesService } from './services/top-crimes.service';
import { TopplayersService } from './services/top-players.service';
import { TopteamsService } from './services/top-teams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NFLcrime';
  private apiURL = 'http://nflarrest.com/api/v1/';
  data: any = {};

  constructor(){
  }

}
