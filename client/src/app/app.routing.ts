import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';

import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { ScoresComponent } from './components/scores/scores.component';

const appRoutes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'me',
        component: GameComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tap',
        component: ScoresComponent,
        canActivate: [AuthGuard]
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);