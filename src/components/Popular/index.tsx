import React from 'react';

import { 
    Container,
    Header,
    TrophyIcon,
    Novels,
    Button
} from './styles';

import NovelCard from '../NovelCard'

const Popular: React.FC = () => {
  return (
      <Container>
          <Header>
              <TrophyIcon />
              <h2>Populares</h2>
          </Header>
          
          <Novels>
            <NovelCard 
                imgSrc='/NovelCard/novel-1.jpg'
                title='Contra os Deuses'
                author='Mars Gravity'
                views='4,89M'
            />
            <NovelCard 
                imgSrc='/NovelCard/novel-2.jpg'
                title='Imortal Renegado'
                author='Er Gen'
                views='3,39M'
            />
            <NovelCard 
                imgSrc='/NovelCard/novel-3.jpg'
                title='Deus Marcial Asura'
                author='Kindhearted Bee'
                views='2,61M'
            />
            <NovelCard 
                imgSrc='/NovelCard/novel-4.png'
                title='Super Gene'
                author='Twelve-winged Dark Seraphim'
                views='1,77M'
            />
            <NovelCard 
                imgSrc='/NovelCard/novel-5.jpg'
                title='Eu Selarei os Céus'
                author='Er Gen'
                views='1,45M'
            />
            <NovelCard 
                imgSrc='/NovelCard/novel-6.jpg'
                title='Lendário Escultor do Luar'
                author='Nam Heesung'
                views='1,21M'
            />
            <NovelCard 
                imgSrc='/NovelCard/novel-7.jpg'
                title='Marca do Dragão do Deus da Guerra'
                author='Su Yue Xi'
                views='1,19M'
            />
            <NovelCard 
                imgSrc='/NovelCard/novel-8.jpg'
                title='Soberbo Deus da Alquimia'
                author='Ji Xiao Zei'
                views='919k'
            />
          </Novels>

          <Button>
              VEJA MAIS
          </Button>

      </Container>
  );
}

export default Popular;