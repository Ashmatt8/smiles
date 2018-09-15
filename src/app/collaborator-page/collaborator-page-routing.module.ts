import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollaboratorPageComponent} from './collaborator-page.component';

const routes: Routes = [
    {
        path: '',
        component: CollaboratorPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollaboratorPageRoutingModule {}
