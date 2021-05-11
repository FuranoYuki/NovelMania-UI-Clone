import styled, { css } from 'styled-components';
import  {
    Home, 
    JournalWhills,
    FileSignature,
    EnvelopeOpenText,
    AccountCircleSharp,
    MenuSharp
} from '../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    width: 100%;
    max-height: 60px;
    box-shadow: 0 0 20px -9px rgba(0,0,0,.82);
    border: 1px solid #dedede;

    font-family: 'Open Sans';
    overflow: hidden;
    transition: max-height .5s;
`;

export const Navbar = styled.div`
    display: flex;
    padding: 0 max(20px, 2rem);
    align-items: center;
    width: 100%;
    min-height: 60px;

    @media(max-width: 500px){
        padding: 0 0;
    }

`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow:1;
    height: 100%;
    
    &:hover{
        cursor:pointer;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1rem;

    @media(max-width: 1000px){
        display: none
    }
`;
export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;

    &:hover{
        cursor: pointer;
    }

    &:hover svg, span{
        fill: rgba(0, 0, 0, .7);
        color: rgba(0, 0, 0, .7);
    }

    > span {
        font-size: 16px;
        line-height: 24px;
        margin-left: 4px;
    }

    @media(max-width: 1000px){
        padding: 10px;
    }
`;

const IconCss = css`
    width: 17.5px; 
    height: 17.5px;
`;

export const HomeIcon = styled(Home)`
    ${IconCss}
`;
export const BookIcon = styled(JournalWhills)`
    ${IconCss}
`;
export const EditIcon = styled(FileSignature)`
    ${IconCss}
`;
export const MailIcon = styled(EnvelopeOpenText)`
    ${IconCss}
`;

export const MenuControllBox = styled.div`
    height: 100%;

    display: none;
    align-items:center;
    justify-content: center;

    background-color: var(--primary);
    border-left: 1px solid var(--dark-white);

    &:hover{
        background-color:var(--white-hover);
    }

    @media(max-width: 1000px){
        display: flex;
    }
`;

export const MenuControll = styled(MenuSharp)`
    height: 30px !important;
    width: 30px !important;
    color: var(--gray);
    margin:20px;

    &:hover{
        cursor: pointer;
    }
`;

export const PerfilBox = styled.div`
    height: 60px;
    width: 60px;

    display: flex;
    align-items:center;
    justify-content: center;

    background-color: var(--primary);
    border-left: 1px solid var(--dark-white);
    border-right: 1px solid var(--dark-white);

    &:hover{
        background-color:var(--white-hover);
    }
`;

export const Perfil = styled(AccountCircleSharp)`
    width: 40px !important;
    height: 40px !important;

    color: var(--gray);

    &:hover{
        cursor: pointer;
    }
`;

export const MenuResponsive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > div {
        width: 100%;
    }
`;
