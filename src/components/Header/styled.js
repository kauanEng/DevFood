import styled from "styled-components";

export const Container = styled.div`
    background: #52c234;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #061700, #52c234);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #061700, #52c234); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 10px;
    padding:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width:auto;
    height:70px;
`;

export const SearchInput = styled.input`
    border: 0px;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: #FFF;
    background-image: url('assets/search.png');
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline: 0;
    padding-left: 40px;
    transition: all ease 0.2s;
    cursor: pointer;
    font-size: 15px;

    &:focus {
        cursor: text;
    }
    
`;