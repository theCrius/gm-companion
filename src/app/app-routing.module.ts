import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { PlayersComponent } from './components/players/players.component';
import { NpcsComponent } from './components/npcs/npcs.component';
import { MapsComponent } from './components/maps/maps.component';
import { AudioComponent } from './components/audio/audio.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'campaigns',
        component: CampaignsComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    },
    {
        path: 'npcs',
        component: NpcsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'audio',
        component: AudioComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
