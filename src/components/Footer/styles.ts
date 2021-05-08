import styled, { css } from 'styled-components';

import {
    Facebook, 
    Twitter, 
    Instagram, 
    Youtube, 
    Discord, 
} from '../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    color:var(--simple-black);
    border-top: 1px solid var(--dark-white);
    background-color: var(--white-hover);
    font-family: 'Open Sans';
`;

export const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 70px 0;
    margin: auto;

    > div {
        padding: 0 15px;
    }

    div:not(:last-child){
        margin-bottom: 1.5rem;
    }

    @media(max-width: 767px){
        flex-direction: column;
    }

    @media(min-width: 768px){
        max-width: 720px;
        padding: 70px 15px;
        align-items: flex-start;

        > div {
            width: 50%;
        }
    }

    @media(min-width: 992px){
        max-width: 960px;

        > div {
            width: 25%;
        }
    }

    @media(min-width: 1200px){
        max-width: 1140px;
        padding: 70px 15px;
    }

`;
export const Social = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        font-size: 18px;
        letter-spacing: 3px;
        width: 100%;
        text-align: center;
    }

    @media(min-width: 768px){
        > span {
            text-align:right;
        }
    }
`;
export const LogoBox = styled.div`
    position: relative;
    height: 70px;
    width: 194px;
`;
export const SocialMedia = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;
    width: 100%;
`;

const IconCss = css`
    width: 36px;
    height: 36px;
    padding: 5px;
    border-radius: 50%;
    fill: #333;
    background-color: var(--dark-white);
    border: 1px solid #dad9d9;
    margin-right: .5rem;

    &:hover{
        cursor: pointer;
        fill: #fff;
        background-color: #009acf;
    }

`;

export const FacebookIcon = styled(Facebook)`
    ${IconCss}
`;
export const TwitterIcon = styled(Twitter)`
    ${IconCss}
`;
export const InstagramIcon = styled(Instagram)`
    ${IconCss}
`;
export const YoutubeIcon = styled(Youtube)`
    ${IconCss}
`;
export const DiscordIcon = styled(Discord)`
    ${IconCss}
`;

export const InfoSub = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #333;

    > strong {
        font-size: 20px;
        margin-bottom: .5rem;
        width: 100%;
        text-align: center;
    }

    > span {
        font-size: 1rem;
        text-align: center;
        line-height: 1.5;
        width: 100%;
    }

    > span:hover{
        cursor: pointer;
        text-decoration: underline;
    } 

    > p {
        font-size: 16px;
        text-align: center;
        width: 100%;

        > span {
            color: #1a53ff;

            &:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }

    @media(min-width: 768px){
        p, span, strong{
            text-align: left;
        }
    }
`;

export const CreatedBy = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    border-top: 1px solid var(--dark-white);
    color: #525252;
    font-size: 12px;
    text-align: center;

    @media(min-width:768px){
        flex-direction: row;
        justify-content: space-around;
    }
`;

