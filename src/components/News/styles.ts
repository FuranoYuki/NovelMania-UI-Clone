import styled from 'styled-components';
import { FindInPageSharp } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction:column;

    margin-top: 50px;
    margin-bottom: 1rem;
    padding:0 15px;

    @media(max-width:767px){
        margin:auto;
        max-width:540px ;
    }

    @media(max-width:991px) and (min-width:768px){
        margin:auto;
        max-width:720px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 28px;
    font-weight: 300;

    > span {
        margin-left: 10px;
    }
`;

export const NewsIcon = styled(FindInPageSharp)`
    height: 30px !important;
    width: 30px !important;
`;

export const LastNews = styled.div`
    @media(min-width:500px){
        &::nth-child(1){
            width: 50%!important;
        }
    }
`;

export const SeeAllNews = styled.div`
    width: 100%;
    text-align: end;
    
    font-size: 16px;
    font-family: 'Open Sans';
    font-weight: 400;
    color:var(--blue);

    &:hover{
        cursor: pointer;
        color:var(--dark-blue);
        text-decoration: underline;
    }
`;
