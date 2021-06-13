import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

import { Container } from './styled';
import Header from '../../components/Header';


export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
        </Container>
    );
}