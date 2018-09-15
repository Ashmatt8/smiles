import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CollaboratorPageRoutingModule} from './collaborator-page-routing.module';
import {CollaboratorPageComponent} from './collaborator-page.component';

@NgModule({
    imports: [CommonModule, CollaboratorPageRoutingModule],
    declarations: [CollaboratorPageComponent]
})
export class CollaboratorPageModule {}
