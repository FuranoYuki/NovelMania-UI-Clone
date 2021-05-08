import styled from 'styled-components';

export const Main = styled.div`
  background:url('/Background/background.jpg') left bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align:left; 
  padding: 70px 20px;
  color: #fff;
  background-color: rgba(0,0,0,.4);



  > strong{
      font-size: 24px;
      text-shadow:0 1px 2px rgba(0,0,0,.88);
      margin-bottom: .5rem;
      line-height: 1.2;
      text-transform:uppercase;
  }

  > p {
      font-family: 'Open Sans';
      line-height: 1.5;
      text-shadow:0 1px 2px rgba(0,0,0,.88);
      font-size: 18px;
      max-width: 530px;
  }
`;

export const Button = styled.button`
    line-height: 32px;
    letter-spacing: .5px;
    padding:0 1.5rem;
    text-align: center;
    vertical-align: middle;
    border-radius: 20px;
    box-shadow:0 3px 7px rgba(0,0,0,.25),0 4px 10px rgba(0,9,128,.035);
    font-size: 1rem;
    border: 1px solid #fff;
    font-family: 'Open Sans';
    background-color: transparent;
    color: #fff;
    margin-top: 1.5rem;
    width: 155px;

    cursor: pointer;

    &:hover{
        opacity: .9;
        transition: .1s;
        background-color: #0fc3ff;
        border: 1px solid #00bfff;        
    }
`;
