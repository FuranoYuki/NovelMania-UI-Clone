import React from 'react';
import Image from 'next/image';
import { useRef } from 'react'
import { 
    Container, 
    Navbar, 
    Logo,
    Menu, 
    MenuIcon, 
    HomeIcon,
    BookIcon,
    EditIcon,
    MailIcon,
    MenuControllBox,
    MenuControll,
    PerfilBox,
    Perfil,
    MenuResponsive
 } from './styles';

const Header: React.FC = () => {
    const responsive_menu = useRef(null)

    const controllMenu = () => {
        responsive_menu.current.style.maxHeight === "60px" ?
        responsive_menu.current.style.maxHeight = '400px' :
        responsive_menu.current.style.maxHeight = '60px'
    }

  return (
      <Container ref={responsive_menu}>

        <Navbar>
            <Logo>
                <Image
                    src="/brand.png"
                    alt="brand"
                    height={50}
                    width={130}
                />
            </Logo>

            <Menu>
                <MenuIcon>
                    <HomeIcon/>
                    <span>Home</span>
                </MenuIcon>
                <MenuIcon>
                    <BookIcon/>
                    <span>Novels</span>
                </MenuIcon>
                <MenuIcon>
                    <EditIcon/>
                    <span>Editoria</span>
                </MenuIcon>
                <MenuIcon>
                    <MailIcon/>
                    <span>Contanto</span>
                </MenuIcon>
            </Menu>

            <MenuControllBox onClick={controllMenu}>
                <MenuControll/>
            </MenuControllBox>

            <PerfilBox>
                <Perfil/>
            </PerfilBox>
        </Navbar>

        <MenuResponsive>
            <MenuIcon>
                <HomeIcon/>
                <span>Home</span>
            </MenuIcon>
            <MenuIcon>
                <BookIcon/>
                <span>Novels</span>
            </MenuIcon>
            <MenuIcon>
                <EditIcon/>
                <span>Editoria</span>
            </MenuIcon>
            <MenuIcon>
                <MailIcon/>
                <span>Contanto</span>
            </MenuIcon>
        </MenuResponsive>

      </Container>
  );
}

export default Header;