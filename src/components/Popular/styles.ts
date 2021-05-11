import styled from 'styled-components';
import { Trophy } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;

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
    color: #1f2129;
    padding: 0 15px;
    margin-bottom: 10px;

    > h2{
        font-size: 28px;
        font-weight: 300;
        font-family:'Open Sans';

        @media(min-width: 768px){
            font-size: 2.5rem;
            font-weight: 300;
        }
    }
`;

export const TrophyIcon = styled(Trophy)`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`;

export const Novels = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    justify-content: center;
`;

export const Button = styled.div`
    color:#fff;
    display: flex;
    line-height: 36px;
    padding: 0 2rem;
    border-radius: 20px;
    text-align: center;
    vertical-align: middle;
    background-color: #09c;
    border-color:#09c;
    width: 150px;
    margin:auto;


    &:hover{
        cursor: pointer;
        transition: .1s;
        opacity: .9;
        background-color: #0086b3;
    }
`;
