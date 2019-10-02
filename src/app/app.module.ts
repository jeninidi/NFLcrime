import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from "./material-module";
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { CrimesComponent } from './views/crimes/crimes.component';
import { PlayersComponent } from './views/players/players.component';
import { TeamsComponent } from './views/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CrimesComponent,
    PlayersComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    MatListModule,
    MatTableModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  HttpModule: any
 }
