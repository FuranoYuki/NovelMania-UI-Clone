import styled from 'styled-components';

import { Star, Eye } from '../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding:0 15px;
    width: 50%;

    @media(min-width: 768px){
        width: 33.3%;
    }

    @media(min-width: 992px){
        max-width: 25%;

        & > *:first-child{
            height: 298px;
        }
    }

    @media(min-width: 1200px){
        max-width: 1140px;
    }
`;

export const ImageBox = styled.div`
    position: relative;
    border-radius: 20px;
    overflow:hidden;
    width:100%;
    height: 248px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    font-family: 'Open Sans';

    > strong{
        font-size: 1rem;
        line-height: 1.2;
        margin-bottom: .25rem;
        color: #1f2129; 
    }

    > span{
        line-height: 19.5px;
        font-size: 13px;
        color: #333;
    }
`;

export const StarReview = styled.div`

`;

export const StarIcon = styled(Star)`
    height: 15px;
    width: 15px;
    fill: #ffc107;
    margin-right: 3px;
    line-height: 18px;
`;

export const Views = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    color: #333;
    font-size: 14px;
    font-family: 'Open Sans';
    line-height: 21px;
`;

export const EyeIcon = styled(Eye)`
    height: 15px;
    width: 15px;
    fill: #333;
    margin-right: 5px;
`;

export const Button = styled.button`
    font-size: 13px;
    line-height: 1;
    padding: 5px 12px;
    height: 25px;
    background: 0 0;
    border: 1px solid #36f;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    vertical-align: middle;
    letter-spacing: .5px;
    background-color: transparent;
    width: 100px;
    display: flex;

    > a {
        color: #36f;
        text-decoration: none;
    }

    &:hover{
        > a {
            color: #ffffff;
        }

        cursor: pointer;
        transition: .1s;
        background-color: #36f;
        box-shadow:0 3px 7px rgba(0,0,0,.3),0 4px 10px rgba(0,9,128,.035);

    }
`;
