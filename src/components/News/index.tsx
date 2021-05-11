import React from 'react';

import NewsCard from '../NewsCard'

import { 
    Container,
    Header,
    NewsIcon,
    LastNews,
    PrimaryNews,
    SecondaryNews,
    SeeAllNews
 } from './styles';

const News: React.FC = () => {
  return (
      <Container>
          <Header>
              <NewsIcon/>
              <span>Notícias</span>
          </Header>

          <LastNews>
            <PrimaryNews>
                <NewsCard
                    imgSrc="/News/news-1.jpg"
                    title="Chess'Extra, um jogo de 
                    xadrez peculiar e interessante."
                    date="Há 2 meses"
                    author="Furano Yukihira"
                />
            </PrimaryNews>
            <SecondaryNews>
                <NewsCard
                    imgSrc="/News/news-2.jpg"
                    title="O Fim de Douluo Dalu"
                    date="Há 2 meses"
                    author="Furano Yukihira"
                />
                <NewsCard
                    imgSrc="/News/news-3.png"
                    title="Recomendação Semanal #01"
                    date="Há 2 meses"
                    author="Furano Yukihira"
                />
                <NewsCard
                    imgSrc="/News/news-4.jpg"
                    title="RECRUTAMENTO"
                    date="Há 2 meses"
                    author="Furano Yukihira"
                />
                <SeeAllNews>
                    Ver todas as notícias...
                </SeeAllNews>
            </SecondaryNews>
          </LastNews>
      </Container>
  );
}

export default News;