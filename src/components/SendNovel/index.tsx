import React from 'react';

import { 
    Main,
    Container,
    Button
 } from './styles';

const SendNovel: React.FC = () => {
  return (
      <Main>
          <Container>
            <strong>Mande também a sua novel!</strong>
            <p>
                Se você deseja publicar seu trabalho, 
                junto a diversas outras obras populares 
                e com milhares de leitores, a Novel Mania 
                é a escolha perfeita. Faça a sua avaliação 
                e não perca mais tempo!
            </p>
            <Button>
                SAIBA COMO
            </Button>
        </Container>
      </Main>
  );
}

export default SendNovel;