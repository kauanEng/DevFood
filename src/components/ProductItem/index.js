import React from 'react';
import { 
    Container,
    ProductInfoArea,
    ProductPhotoArea,
    ProductButtonArea,
    ProductPhoto,
    ProductName,
    ProductPrice,
    ProductsIngredients,
    ProductButton
} from './styled';

export default ({data, onClick}) => {

    const handleClick = () => {
        onClick(data)
    }

    return (
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductsIngredients>{data.ingredients}</ProductsIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>

    );
}
