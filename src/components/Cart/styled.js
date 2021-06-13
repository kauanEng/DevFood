import styled from "styled-components";

export const CartArea = styled.div`
    background: #314755;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #26a0da, #314755);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #26a0da, #314755); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    position:fixed;
    bottom: 0px;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display:flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin-left:10px;
    margin-right:10px;

`;

export const CartText = styled.div`
    color: #FFF;
    font-size:17px;

`;

export const CartBody = styled.div``;