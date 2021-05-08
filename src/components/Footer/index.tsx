import React from 'react';

import Image from 'next/image';

import { 
    Container,
    Info,
    Social,
    LogoBox,
    SocialMedia,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YoutubeIcon,
    DiscordIcon,
    InfoSub,
    CreatedBy
 } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <Info>
            <Social>
                <LogoBox>
                    <Image 
                        src='/Brand/brand-blue.png'
                        layout='fill'
                    />
                </LogoBox>
                <span>Novel Mania</span>
                <SocialMedia>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YoutubeIcon/>
                    <DiscordIcon/>
                </SocialMedia>
            </Social>
            <InfoSub>
                <strong>Mapa do site</strong>
                <span>Noticias</span>
                <span>Editoria</span>
                <span>Doacoes</span>
                <span>Regras Setorias</span>
                <span>Politicas de Privacidade</span>
                <span>Contato</span>
            </InfoSub>
            <InfoSub>
                <strong>WebNovel</strong>
                <span>Noticias</span>
                <span>Editoria</span>
                <span>Doacoes</span>
                <span>Regras Setorias</span>
                <span>Politicas de Privacidade</span>
                <span>Contato</span>
            </InfoSub>
            <InfoSub>
                <strong>Doacoes</strong>
                <p>
                    Precisamos da força de todos, uma união 
                    para que possamos continuar, entre no 
                    <span> salão da contribuição</span> para doar 
                    qualquer valor.
                </p>
            </InfoSub>
          </Info>
          <CreatedBy>
                <span>
                  © 2021 Novel Mania, todos 
                  os direitos reservados.
                </span>
                <span>
                    Desenvolvido por Matheus Alves Prando
                </span>
          </CreatedBy>
      </Container>
  );
}

export default Footer;