import styled from 'styled-components';

export const Container = styled.div`

    padding: 0 15px;
    margin: auto;

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

export const Devider = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    margin: 1rem auto;
    padding: 13.6px 20px;
    border-radius: .25rem;

    color: #fff;
    background-color: #09c;
    box-shadow: 0 3px 7px rgba(0,0,0,.25),0 4px 10px rgba(0,9,128,.035);


    > h2{
        font-size: 1.75rem;
        line-height: 1.2;
        font-weight: 300;
        margin-right: 5px;
    }

    > p {
        font-size: 16px;
        line-height: 24px;
    }
`;
