import { Component, OnInit } from '@angular/core';
import { TopcrimesService } from 'src/app/services/top-crimes.service';

@Component({
  selector: 'app-crimes',
  templateUrl: './crimes.component.html',
  styleUrls: ['./crimes.component.css']
})
export class CrimesComponent implements OnInit {

  topCrimes;
  filteredcrimes;
  searchTerm;
  constructor(private crimeService: TopcrimesService) { }

  ngOnInit() {
    this.crimeService.getTopCrimes().subscribe(res => {
      this.filteredcrimes = this.topCrimes = res;
     });
  }

}
