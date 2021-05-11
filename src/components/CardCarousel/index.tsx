import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { 
    Container,
    Info,
    Review,
    Stars,
    StarIcon,
    Views,
    EyeIcon
} from './styles';

interface Props {
    imgSrc: string,
    title: string,
    views: string,
}

const CardCarousel: React.FC<Props> = ({
    imgSrc, 
    title,
    views
}) => {
  return (
      <Container>
          <Link href='/'>
            <a>
                <Image
                    src={imgSrc}
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='top'
                />
                <Info>
                    <strong>
                        {title}
                    </strong>
                    <Review>
                        <Stars>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </Stars>
                        <Views>
                            <EyeIcon/>
                            <span>{views}</span>
                        </Views>
                    </Review>
                </Info>
            </a>
          </Link>
      </Container>
  );
}

export default CardCarousel;