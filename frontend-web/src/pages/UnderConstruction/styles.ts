import styled from 'styled-components';

export const ConstructionText = styled.div`
  z-index: 3;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header{
    font-size: 48px;
    font-weight: bold;
    font-family: Roboto;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

  }

  p{
    font-size: 36px;
    font-family: Roboto;
    font-weight: bold;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
`;

export const ConstructionContainer = styled.div`
  
  display: flex;
  flex: 1;
  padding: 20%;
  justify-content: center;
  align-items: center;

  

`;