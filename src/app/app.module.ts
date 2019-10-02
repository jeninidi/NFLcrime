import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//import { appRoutes} from './app.routes';
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
    AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  HttpModule: any
 }
