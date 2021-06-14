import React from 'react';
import { Container, CategoryImage } from './styled'; 



export default ({data, activeCategory,setActiveCategory}) => {
    let handleCategoryClick = () => {
        setActiveCategory( data.id );
    }

    return(
        <Container 
        activeCategory={activeCategory} 
        id={data.id}
        onClick={handleCategoryClick}
        data-tip={data.name}
        data-for="tip-top"
        >
            <CategoryImage src={data.image} />
        </Container>
    );
}