import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { 
    Container,
    ImageBox,
    Info,
    StarReview,
    StarIcon,
    Views,
    EyeIcon,
    Button,
 } from './styles';

interface Props{
    imgSrc: string,
    title: string,
    author: string,
    views: string
}

const NovelCard: React.FC<Props> = ({
    imgSrc,
    title,
    author,
    views
}) => {
  return (
      <Container>
          <ImageBox>
            <Link href='/'>
                <a>
                    <Image
                        src={imgSrc}
                        alt={title}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='top'
                    />
                </a>
            </Link>
          </ImageBox>
          <Info>
              <strong>{title}</strong>
              <span>Autor: {author}</span>
              <StarReview>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
              </StarReview>
              <Views>
                  <EyeIcon />
                  <span>
                      {views}
                  </span>
              </Views>
              <Button>
                    <Link href='/'>
                        <a>
                            LER NOVEL
                        </a>
                    </Link>
                </Button>
          </Info>
      </Container>
  );
}

export default NovelCard;