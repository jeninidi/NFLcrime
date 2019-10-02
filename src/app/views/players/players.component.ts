import { Component, OnInit } from '@angular/core';
import { TopplayersService } from 'src/app/services/top-players.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

  category;
  topPlayers; 

  constructor(private playerService: TopplayersService,  private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.category = this.route.params.subscribe((params: Params) => {
      this.category = params['category'];

      if(this.category){

         this.playerService.getTopPlayer(this.category).subscribe(res=>
           {
             this.topPlayers = res;
           }

         );
       }

    })
  }

} 