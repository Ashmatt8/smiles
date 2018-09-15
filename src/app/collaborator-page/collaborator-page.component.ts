import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-collaborator-page',
    templateUrl: './collaborator-page.component.html',
    styleUrls: ['./collaborator-page.component.scss', '../../styles/style.scss']
})
export class CollaboratorPageComponent implements OnInit {
    vitoriaDownLogo: string;

    constructor() {
        this.vitoriaDownLogo = 'assets/images/vitoriaDownLogo.png';
    }

    ngOnInit() {}
}
