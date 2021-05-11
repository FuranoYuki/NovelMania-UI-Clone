import styled from 'styled-components';
import { Eye, Star } from '../../styles/Icons';

export const Container = styled.div`
    width: calc(50% - 10px);
    height: 250px;
    flex-shrink:0;
    

    margin-right: 20px;
    overflow: hidden;
    border-radius: 20px;
    font-family: 'Open Sans';
    color: var(--primary);

    > a {
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;


        color: var(--primary);
        text-decoration: none;
    }

    @media(min-width:768px){
        width: calc(33.3% - 15px);
    }

    @media(min-width: 992px){
        width: calc(25% - 15px);
        height: 300px;
    }
`;

export const Info = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    height: 100%;
    padding: 50% 20px 25px;

    background-image: linear-gradient(to bottom,rgba(0,0,0,0) 0,black 100%,rgba(0,0,0,0.9) 100%);

    > strong {
        font-size: 15px;
        line-height: 15px;
        font-weight: 700;
        text-align: left;

        width: 100%;

        @media(min-width: 690px){
            font-size: 18px;
        }
    }

    &:hover {
        > strong {
            transform: translateY(-10px);
            transition: .3 all;
        }
    }
`;

export const Review = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > div {
        margin-top: 5px;
    }
`;

export const Stars = styled.div`
    display: flex;
    line-height: 24px;
`;

export const StarIcon = styled(Star)`
    height: 15px;
    width: 15px;
    fill: var(--yellow-star);
`;

export const Views = styled.div`
    display: flex;
    align-items: center;
    color: var(--primary);

    > span {
        font-size: 14px;
    }
`;

export const EyeIcon = styled(Eye)`
    height: 15px;
    width: 15px;
    fill: var(--primary);
    margin-right: 5px;
`;

