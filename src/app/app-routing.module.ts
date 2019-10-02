import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './views/navigation/navigation.component';
import { CrimesComponent } from './views/crimes/crimes.component';
import { PlayersComponent } from './views/players/players.component';



export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/navigation',
        pathMatch: 'full'
    },
    {
        path: 'crimes',
        component: CrimesComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    },
    {
        path: 'teams',
        component: CrimesComponent
    },
    {
        path: 'navigation',
        component: NavigationComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }