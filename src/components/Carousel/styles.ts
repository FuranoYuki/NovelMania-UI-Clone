import styled from 'styled-components';
import { Compass } from '../../styles/Icons';
import {
    KeyboardArrowRight,
    KeyboardArrowLeft
} from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 100%;
    padding: 0 15px;
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
  line-height: 24px;
  margin-bottom: 20px;
`;

export const CarouselIcon = styled(Compass)`
    width: 30px;
    height: 30px;
    fill: var(--simple-black);
    margin-right: 20px;
`;

export const CarouselTitle = styled.div`
    font-size: 28px;
    font-weight: 300;
    font-family: 'Quicksand';

    @media(min-width: 768px){
        font-size: 2.5rem;
    }
`;

export const Body = styled.div`
    width:auto;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
`;

export const Cards = styled.div`
    display: flex;
    width: auto;    
    margin: auto;
    
    cursor: grab;
    overflow: hidden;

    scroll-behavior: smooth;
`;

export const ControllLeft = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    height: 90px;
    width: 50px;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateY(-50%);
    background-color: linear-gradient(to left,rgba(0,0,0,0.45),rgba(0,0,0,0));

    &:hover{
        cursor: pointer;
    }
`;

export const ControllRight = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    height: 90px;
    width: 50px;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateY(-50%);

    background-color: linear-gradient(to left,rgba(0,0,0,0.45),rgba(0,0,0,0)) !important;

    &:hover{
        cursor: pointer;
    }
`;

export const GoLeft = styled(KeyboardArrowLeft)`
    font-size: 58px;
    fill: var(--primary);
`;

export const GoRight = styled(KeyboardArrowRight)`
    font-size: 58px;
    fill: var(--primary);
`;