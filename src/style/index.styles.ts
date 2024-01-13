import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import { theme } from './theme';

interface LayoutCardsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isDragging: boolean;
}

export const GoogleFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap');
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1a1a1a;
    color: #f2f2f2;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
  }
`;

export const FlexContainer = `
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FormCenter = `
  align-items: center;
`;

export const FlexTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5rem;
  & span{
    font-size:50px
  }
`;

export const MainContainer = `
  min-height: 90vh;
`;

export const Title = `
  padding: 2rem 0;
  gap: .5rem;
`;

export const TitleH1 = `
  font-size: 2rem;
  font-weight: 900;
`;

export const TitleSpan = styled.span`
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: lighter;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 0 5rem;
  width: 100%;
  @media screen and (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
`;

export const LayoutCards = styled.div`
  border: 2px solid #ffffff8c;
  border-radius: ${theme.borderRadius};
  transition: all 0.3s linear;
  @media screen and (max-width: 800px) {
    .layout-cards {
      overflow-y: scroll;
      height: 250px;
      min-height: 150px;
      max-height: 250px;
    }
  }
`;

export const LayoutCardsP = styled.p`
  border-radius: ${theme.borderRadius};
  background-color: black;
  text-align: center;
  padding: 1rem 0;
  font-weight: bold;
  text-transform: capitalize;
`;

export const LayoutDragging = styled.div`
  background: #ffffff17;
  border: 2px dashed #ffffff8c;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 10;
    transform: translateY(0);
  }
`;

export const CardContainer = styled.div`
  margin: 1rem 1rem 0 1rem;
  background-color: slateblue;
  border-radius: ${theme.borderRadius};
  padding: 1rem;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-in-out;
  & em {
    text-decoration: line-through;
  }
`;

export const CardContainerProcess = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 1rem 1rem 1rem 1rem;
  background-color: slateblue;
  border-radius: ${theme.borderRadius};
  padding: 7.5rem 1rem;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-in-out;
  & h2 {
    font-size: 40px;
  }
  & p {
    font-size: 1.5rem;
  }
`;

export const CardContainerPreparing = styled.div`
  display: grid;
  text-align: center;
  background-color: slateblue;
  border-radius: ${theme.borderRadius};
  padding: 1rem;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-in-out;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 73vh;
`;

export const ModalDist = styled.div`
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  background: 'black',
  width: '50rem',
  height: '30rem',
  display: 'flex',
  align-items: 'center',
  justify-content: 'center'
`;

export const CardContainerP = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const LayoutCardsCondition = styled.div<LayoutCardsProps>`
  border: 2px solid #ffffff8c;
  border-radius: 5px;
  transition: all 0.3s linear;
  ${(props) =>
    props.isDragging &&
    css`
      background: #ffffff17;
      border: 2px dashed #ffffff8c;
    `}
`;

export const ButtonMore = styled.button`
  transition: all 0.6s ease-in-out;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  color: white;
  & span {
    font-size: 30px;
  }
  &:hover {
    background: gray;
    color: black;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContenedorModal = styled.div`
  width: 373px;
  height: 400px;
  margin-left: 30px;
  position: relative;
  border-radius: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 200px 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
`;

export const OrderButtons = styled.div`
  display: flex;
  margin: 0px 10px;
  justify-content: center;
  flex-direction: row;
`;

export const OrderButtonNewOrder = styled.div`
  display: flex;
  justify-content: end;
`;

export const BotonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  border-radius: 5px;
  color: black;
`;

export const DivPosition = styled.div`
  display: flex;
`;

export const FormModalButtonsInCan = styled.button`
  border: 1px solid slateblue;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 900;
  color: slateblue;
  background: none;
  margin: 0px 15px;
`;

export const FormStyleContainer = styled.form`
  ${FlexContainer}
  ${FormCenter}
  border: 1px solid slateblue;
  padding: 80px;
  color: slateblue;
  gap: 10px;
  font-size: 20px;
  font-weight: 900;
  border-radius: 63px;
  & label {
    margin-top: 5px;
  }
  & input {
    padding: 7px;
    margin-left: 10px;
  }
`;

export const FlexMainContainer = styled.div`
  ${FlexContainer}
  ${MainContainer}
`;

export const FlexTitle = styled.div`
  ${FlexContainer}
  ${Title}
  ${TitleH1}
`;

