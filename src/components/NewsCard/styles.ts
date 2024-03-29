import styled, { css } from 'styled-components';

import { WatchLaterSharp, PersonSharp } from '../../styles/Icons';

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  margin:5px 0;
  overflow: hidden;

  border-radius:8px;
  box-shadow:0 3px 7px rgba(0,0,0,.25),0 4px 10px rgba(0,9,128,.035);

  &:hover{
      cursor: pointer;
      background-color:var(--white-hover);
  }

    @media(min-width: 768px){
    }

    @media(min-width: 992px){
    }

    @media(min-width: 1200px){
    }
`;

export const ImageBox = styled.div`
    position: relative;
    width: 33.3%;
    flex-shrink: 0;
    overflow: hidden;
`;
export const Body = styled.div`
    display: flex;
    flex-direction:column;
    padding: 8px;
    flex-grow: 1;

    @media(min-width: 576px){
        padding: 16px;
    }
`;
export const Title = styled.div`
    font-size: 15px;
    color:var(--text-black);
    font-weight:600;

    &::after{
        background-color:#007bff;
        content: '';
        display: block;
        height: 2px;
        margin: 5px 0;
        width: 100px;
    }

    @media(min-width: 576px){
        font-size: 16px;
    }
`;
export const Info = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    
    font-size: 11px;
    color:#777;
    font-family: 'Open Sans';

    @media(max-width: 500px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`;


export const Date = styled.div`
    display:flex;
    align-items:center;
    margin-right:10px;
`;
export const Author = styled.div`
    display:flex;
    align-items:center;
`;

const iconsCss = css`
    height: 15px!important;
    width: 15px!important;
    margin-right: 2px;
`;

export const WatchIcon = styled(WatchLaterSharp)`
    ${iconsCss};
`;
export const PersonIcon= styled(PersonSharp)`
    ${iconsCss};
`;
