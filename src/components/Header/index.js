import React from 'react';
import { Container, Logo, SearchInput } from './styled';
import { useState } from 'react';


export default ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search === '' ? false:true);


    //Quando Foca no campo ativa esta função aqui
    const handleInputFocus = () => {
        setInputActive(true);
    }

    // Quando Desfoca o mouse ativa esta 
    const handleInputBlur = () => {
        if( search === '') {
        setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <Container>
            <Logo src='/assets/logo.png' />
            <SearchInput 
            type='text'
            placeholder='Digite um produto'
            value={search}
            onChange={handleChange}
            active={inputActive}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            />
        </Container>
    )
}