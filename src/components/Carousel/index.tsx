import React, { useRef, useState } from 'react';

import CardCarousel from '../CardCarousel'

import { 
  Container,
  Header,
  CarouselIcon,
  CarouselTitle,
  Body,
  Cards,
  ControllLeft,
  ControllRight,
  GoLeft,
  GoRight
} from './styles';

type CardType = {
  title: string,
  imgSrc: string,
  views: string,
  id: string
}

interface Props{
  title: string,
  data: CardType[]
}

const Carousel: React.FC<Props> = ({ title, data }) => {
  let obj = useRef(null);
  const [x, setX] = useState(0);
  const [left, setLeft] = useState(0);
  const [pressed, setPressed] = useState(false);

  const mouseDownHandler = (e: React.MouseEvent) => {
    setPressed(true);

    setX(e.clientX);
    setLeft(obj.current.scrollLeft);

    obj.current.style.cursor = 'grabbing';
    obj.current.style.userSelect = 'none';
  }

  const mouseMoveHandler = (e: React.MouseEvent) => {
      if(pressed){
        const dx = e.clientX - x;
        obj.current.scrollLeft = left - dx;
      }
  }

  const mouseUpHandler = (e: React.MouseEvent) => {
    setPressed(false);
    obj.current.style.cursor = 'grab';
    obj.current.style.removeProperty('user-select');
  }

  const clickHandler = (e: React.MouseEvent) => {
    const card = document.querySelector('.cards > div');
    const space = card.clientWidth + 20;
    const target = e.currentTarget! as HTMLElement

    if(target.className.includes('left')){
      obj.current.scrollLeft = obj.current.scrollLeft - space

    }else{
      obj.current.scrollLeft = obj.current.scrollLeft + space
    }
    
  }

  return (
      <Container>
        <Header>
          <CarouselIcon/>
          <CarouselTitle>
            {title}
          </CarouselTitle>
        </Header>
        <Body>
          <Cards 
            className="cards"
            onMouseMove={mouseMoveHandler}
            onMouseDown={mouseDownHandler}
            onMouseUp={mouseUpHandler}
            ref={obj}
          >
            {
              data.map(card => (
                <CardCarousel
                  imgSrc={card.imgSrc}
                  title={card.title}
                  views={card.views}
                  key={card.id}
                />
              ))
            }
          </Cards>
          <ControllLeft
            onClick={clickHandler}
            className='left'
          >
            <GoLeft/>
          </ControllLeft>
          <ControllRight
            onClick={clickHandler}
            className='right'
          >
            <GoRight/>
          </ControllRight>
        </Body>
      </Container>
  );
}

export default Carousel;