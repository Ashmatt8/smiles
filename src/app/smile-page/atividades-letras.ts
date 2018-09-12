import { Atividade } from './atividade-model';

export const AtividadesLetras: Atividade[] = [
    {
        id: 1,
        descricao: 'Complete a palavra:',
        imagem: 'assets/images/bola-palavra.png',
        resposta: 4,
        opcoes: [
            {
                id: 1,
                imagem: 'assets/images/BO.png'
            },
            {
                id: 2,
                imagem: 'assets/images/BA.png'
            },
            {
                id: 3,
                imagem: 'assets/images/LO.png'
            },
            {
                id: 4,
                imagem: 'assets/images/LA.png'
            }
        ]
    },
    {
        id: 2,
        descricao: 'Complete a palavra:',
        imagem: 'assets/images/banana-palavra.png',
        resposta: 1,
        opcoes: [
            {
                id: 1,
                imagem: 'assets/images/NA.png'
            },
            {
                id: 2,
                imagem: 'assets/images/NO.png'
            },
            {
                id: 3,
                imagem: 'assets/images/BA.png'
            },
            {
                id: 4,
                imagem: 'assets/images/LA.png'
            }
        ]
    },
  ];
