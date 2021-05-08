import React from 'react';
import Image from 'next/image'

import { 
    Container,
    ImageBox,
    Body,
    Title,
    Info,
    Date,
    WatchIcon,
    Author,
    PersonIcon
 } from './styles';

interface Props{
    imgSrc: string,
    title: string,
    date: string,
    author: string
}

const NewsCard: React.FC<Props> = ({imgSrc, title, date, author}) => {
  return (
      <Container>
          <ImageBox>
              <Image
                src={imgSrc}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
          </ImageBox>
          <Body>
            <Title>
                {title}
            </Title>
            <Info>
                <Date>
                    <WatchIcon/>
                    <span>{date}</span>
                </Date>
                <Author>
                    <PersonIcon/>
                    <span>{author}</span>
                </Author>
            </Info>
          </Body>
      </Container>
  );
}

export default NewsCard;