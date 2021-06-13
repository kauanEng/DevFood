import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: ${props=>props.active ? '#3a7bd5' : 'transparent'};
    border-radius: 10px;
    margin-botton:10px;
`;

export const LinkIcon = styled.img`
    width: 34px;
    height: auto;

`;