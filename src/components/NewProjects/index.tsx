import React from 'react';

import { 
  Container,
  Devider
} from './styles';

const NewProjects: React.FC = () => {
  return (
      <Container>
          <Devider>
            <h2>
                Combos e novos projetos?
            </h2>
            <p>
              Faça a sua contribuição à equipe
              e receba ainda mais conteúdo!
            </p>
          </Devider>
      </Container>
  );
}

export default NewProjects;