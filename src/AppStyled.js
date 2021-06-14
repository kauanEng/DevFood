import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 100vh;
background-color: #00bbf9;
`;

export const Menu = styled.div`
display:flex;
justify-content: center;
align-items: center;
background: #52c234;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #061700, #52c234);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #061700, #52c234); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width:80px;
flex-direction: column;
`;

export const PageBody = styled.div`
display:flex;
background-image: url('./assets/bg1.jpg');
background-color: #00bbf9;
background-size: cover;
background-position: center;
flex:1;
overflow-y: auto;
`;