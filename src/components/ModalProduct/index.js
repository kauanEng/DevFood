import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, 
        ProductArea, 
        ProductButtons,
        ProductInfoArea,
        ProductPhoto,
        ProductDetails,
        ProductQuantityArea,
        ProductName,
        ProductIngredients,
        ProductButton,
        ProductQuantity,
        ProductQtimage,
        ProductQtText,
        ProductPrice,
    } from './styled';


export default ({data, setStatus }) => {
    const dispatch = useDispatch();
    const [qt, setQt] = useState(1);

    useEffect(() => {
        setQt(1);
    }, [data]);


    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleMinusQt =() => {
        if(qt > 1) {
            setQt(qt - 1);
        }
    }

    const handlePlusQt = () => {
        setQt(qt + 1);
    }

    const handleAddToCart = () => {
        //juntar as info //mandar isso p/reducer 
        dispatch({
            type:'ADD_PRODUCT',
            payload: { data, qt }
        })
        //fechar o modal
        setStatus(false)


    }


    return(
        <Container>
            <ProductArea>
               <ProductPhoto src={data.image} />  
               <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtimage onClick={handleMinusQt} src='/assets/menos.png' />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtimage onClick={handlePlusQt} src="/assets/mais.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>  
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>

    );
}