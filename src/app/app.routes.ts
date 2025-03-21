import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListCharacterComponent } from './pages/character/list-character/list-character.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'personagens',
        component: ListCharacterComponent
    }
];
