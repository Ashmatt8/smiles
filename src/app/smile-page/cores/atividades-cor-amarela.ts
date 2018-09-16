import { Atividade } from '../atividade-model';

export const AtividadesCorAmarela: Atividade[] = [
    {
        id: 1,
        descricao: 'Qual a cor da banana?',
        imagem: 'assets/images/Desenhos/icone_Banana.png',
        resposta: 1,
        opcoes: [
            {
                id: 1,
                descricao: 'Amarelo',
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 2,
                descricao: 'Verde',
                imagem: 'assets/images/verde.jpg'
            },
            {
                id: 3,
                descricao: 'Azul',
                imagem: 'assets/images/azul.jpg'
            },
            {
                id: 4,
                descricao: 'Vermelho',
                imagem: 'assets/images/vermelho.jpg'
            }
        ]
    },
    {
        id: 2,
        descricao: 'Qual a cor do sol?',
        imagem: 'assets/images/Desenhos/icone_Sol.png',
        resposta: 2,
        opcoes: [
            {
                id: 1,
                descricao: 'Vermelho',
                imagem: 'assets/images/vermelho.jpg'
            },
            {
                id: 2,
                descricao: 'Amarelo',
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 3,
                descricao: 'Verde',
                imagem: 'assets/images/verde.jpg'
            },
            {
                id: 4,
                descricao: 'Azul',
                imagem: 'assets/images/azul.jpg'
            },
        ]
    },
    {
        id: 3,
        descricao: 'Marque a bolinha amarela:',
        resposta: 4,
        opcoes: [
            {
                id: 1,
                imagem: 'assets/images/azul.jpg'
            },
            {
                id: 2,
                imagem: 'assets/images/verde.jpg'
            },
            {
                id: 3,
                imagem: 'assets/images/vermelho.jpg'
            },
            {
                id: 4,
                imagem: 'assets/images/amarelo.jpg'
            }
        ]
    },
    {
        id: 4,
        descricao: 'Qual desenho é da cor amarela?',
        imagem: 'assets/images/amarelo.jpg',
        resposta: 2,
        opcoes: [
            {
                id: 1,
                descricao: 'Coração',
                imagem: 'assets/images/Desenhos/icone_Coração.png'
            },
            {
                id: 2,
                descricao: 'Sol',
                imagem: 'assets/images/Desenhos/icone_Sol.png'
            },
            {
                id: 3,
                descricao: 'Bala',
                imagem: 'assets/images/Desenhos/icone_Bala.png'
            },
            {
                id: 4,
                descricao: 'Árvore',
                imagem: 'assets/images/Desenhos/icone_Arvore.png'
            }
        ]
    }
];
