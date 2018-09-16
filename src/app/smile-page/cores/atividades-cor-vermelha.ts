import { Atividade } from '../atividade-model';

export const AtividadesCorVermelha: Atividade[] = [
    {
        id: 1,
        descricao: 'Qual a cor da maçã?',
        imagem: 'assets/images/Desenhos/icone_Maca.png',
        resposta: 4,
        opcoes: [
            {
                id: 1,
                descricao: 'Amarelo',
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 2,
                descricao: 'Azul',
                imagem: 'assets/images/azul.jpg'
            },
            {
                id: 3,
                descricao: 'Verde',
                imagem: 'assets/images/verde.jpg'
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
        descricao: 'Qual a cor do Coração?',
        imagem: 'assets/images/Desenhos/icone_Coração.png',
        resposta: 1,
        opcoes: [
            {
                id: 1,
                descricao: 'Vermelho',
                imagem: 'assets/images/vermelho.jpg'
            },
            {
                id: 2,
                descricao: 'Verde',
                imagem: 'assets/images/verde.jpg'
            },
            {
                id: 3,
                descricao: 'Amarelo',
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 4,
                descricao: 'Azul',
                imagem: 'assets/images/azul.jpg'
            }
        ]
    },
    {
        id: 3,
        descricao: 'Marque a bolinha vermelha:',
        resposta: 2,
        opcoes: [
            {
                id: 1,
                imagem: 'assets/images/verde.jpg'
            },
            {
                id: 2,
                imagem: 'assets/images/vermelho.jpg'
            },
            {
                id: 3,
                imagem: 'assets/images/amarelo.jpg'
            },
            {
                id: 4,
                imagem: 'assets/images/azul.jpg'
            }
        ]
    },
    {
        id: 4,
        descricao: 'Qual desenho é vermelho?',
        imagem: 'assets/images/vermelho.jpg',
        resposta: 3,
        opcoes: [
            {
                id: 1,
                descricao: 'Sol',
                imagem: 'assets/images/Desenhos/icone_Sol.png'
            },
            {
                id: 2,
                descricao: 'Árvore',
                imagem: 'assets/images/Desenhos/icone_Arvore.png'
            },
            {
                id: 3,
                descricao: 'Coração',
                imagem: 'assets/images/Desenhos/icone_Coração.png'
            },
            {
                id: 4,
                descricao: 'Bala',
                imagem: 'assets/images/Desenhos/icone_Bala.png'
            }
        ]
    }
  ];
