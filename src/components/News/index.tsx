import React from 'react';

import NewsCard from '../NewsCard'

import { 
    Container,
    Header,
    NewsIcon,
    LastNews,
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
            <NewsCard
                imgSrc="/News/news-1.jpg"
                title="Chess'Extra, um jogo de 
                xadrez peculiar e interessante."
                date="Há 2 meses"
                author="Furano Yukihira"
            />
            <NewsCard
                imgSrc="/News/news-2.jpg"
                title="Chess'Extra, um jogo de 
                xadrez peculiar e interessante."
                date="Há 2 meses"
                author="Furano Yukihira"
            />
            <NewsCard
                imgSrc="/News/news-3.png"
                title="Chess'Extra, um jogo de 
                xadrez peculiar e interessante."
                date="Há 2 meses"
                author="Furano Yukihira"
            />
            <NewsCard
                imgSrc="/News/news-4.jpg"
                title="Chess'Extra, um jogo de 
                xadrez peculiar e interessante."
                date="Há 2 meses"
                author="Furano Yukihira"
            />
          </LastNews>

          <SeeAllNews>
              Ver todas as notícias...
          </SeeAllNews>
      </Container>
  );
}

export default News;