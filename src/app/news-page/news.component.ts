import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { News } from './news.model';
import { Noticia } from './news-mock';
import { Evento } from './events-mock';


export enum TipoConteudoEnum {
    NOTICIA = 'Notícias',
    EVENTO = 'Eventos',
}

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    animations: [routerTransition()]
})

export class NewsComponent implements OnInit {
    mithOrTrueLogo: string;
    tipoConteudo: string;
    tipoConteudos = [TipoConteudoEnum.NOTICIA, TipoConteudoEnum.EVENTO];
    noticias = Noticia;
    eventos = Evento;
    videos = false;
    imagemVideo : string;

    constructor() {
        this.imagemVideo = 'assets/images/crescerComSindromeDown.jpg';
    }

    ngOnInit() {
        this.tipoConteudo = TipoConteudoEnum.NOTICIA;
    }

    public start() {
        this.noticias;
    }

    onButtomConteudo(tipoConteudo: TipoConteudoEnum) {
        this.tipoConteudo = tipoConteudo;

        if (tipoConteudo === TipoConteudoEnum.NOTICIA) {
            this.noticias = Noticia;
            this.eventos = null;
        } else if (tipoConteudo === TipoConteudoEnum.EVENTO) {
            this.eventos = Evento;
            this.noticias = null;
        }
    }
}
