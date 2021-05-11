import styled from 'styled-components';
import { Newspaper } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    margin: auto;
    width: 100%;
    
    padding: 0 15px;

    @media(min-width: 576px){
        max-width: 540px;
    }

    @media(min-width: 768px){
        max-width: 720px;
    }

    @media(min-width: 992px){
        max-width: 960px;
    }

    @media(min-width: 1200px){
        max-width: 1140px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 0 15px;

    font-size: 28px;
    font-weight: 300;

    > span {
        margin-left: 10px;
    }
`;

export const NewsIcon = styled(Newspaper)`
    height: 30px !important;
    width: 30px !important;
`;

export const LastNews = styled.div`
    @media(min-width: 768px){
        display: flex;
    }
`;

export const PrimaryNews = styled.div`
    display: flex;

    @media(min-width: 768px){
        width: 50%;
        padding: 0 15px;

        > div {
            flex-direction: column;
            height: 300px;

            > *:first-child{
                width: 100%;
                height: 190px;
            }
        }
    }
`;

export const SecondaryNews = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 768px){
        width: 50%;
        padding: 0 15px;
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
