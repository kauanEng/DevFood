import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    CartArea,
    CartBody,
    CartHeader,
    CartIcon,
    CartText,
    ProductArea,
    ProductItem,
    ProductPhoto,
    ProductName,
    ProductPrice,
    ProducatQuantityArea,
    ProductQtIcon,
    ProductQtText,
    ProductTitleCoupon,
    ProductAddressTitle,
    ProductAddress,
    ProductAreaAddress,
    ProductAddressComplement,
    ProductAddressPublicPlace,
    ProductAddressStateCity,
    ProductAddressIcon,
    ProductAreaCoupon,
    ProductInputCoupon,
    ProductValuesArea,
    ProductAreaDiscount,
    Discount,
    ValuesDiscount,
    ProductButtomBuy,
    ProductinfoArea

} from './styled';

export default ({ data }) => {
    const [qt, setQt] = useState(1);

    useEffect(() => {
        setQt(1);
    }, [data]);


    const dispatch = useDispatch()

    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(true)

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: { key, type }
        });
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src='/assets/cart.png' />
                <CartText>Meu Carrinho ({products.length})</CartText>

                {show &&
                    <CartIcon src="/assets/down.png" />
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductinfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {(item.price * qt).toFixed(2)}</ProductPrice>
                            </ProductinfoArea>
                            <ProducatQuantityArea>
                                <ProductQtIcon
                                    src='/assets/menos.png'
                                    onClick={() => handleProductChange(index, '-')}
                                />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon
                                    src='/assets/mais.png'
                                    onClick={() => handleProductChange(index, '+')}

                                />
                            </ProducatQuantityArea>
                        </ProductItem>
                    ))}
                </ProductArea>
                <ProductAddressTitle>Entrega</ProductAddressTitle>
                <ProductAddress>
                    <ProductAreaAddress>
                        <ProductAddressComplement>Minha Casa</ProductAddressComplement>
                        <ProductAddressPublicPlace>Rua: Imperatriz, 255A</ProductAddressPublicPlace>
                        <ProductAddressStateCity>Olinda, PE</ProductAddressStateCity>
                    </ProductAreaAddress>
                    <ProductAddressIcon src="/assets/edit.png" />
                </ProductAddress>

                <ProductAreaCoupon>
                    <ProductTitleCoupon>Cupom de Desconto</ProductTitleCoupon>
                    <ProductInputCoupon />
                </ProductAreaCoupon>
                <ProductValuesArea>
                    <ProductAreaDiscount>
                        <Discount>Desconto</Discount>
                        <ValuesDiscount>R$ 0.00</ValuesDiscount>
                    </ProductAreaDiscount>
                    <ProductAreaDiscount>
                        <Discount>Taxa de Entrega</Discount>
                        <ValuesDiscount>R$ 0.00</ValuesDiscount>
                    </ProductAreaDiscount>
                    <ProductAreaDiscount>
                        <Discount>Total</Discount>
                        <ValuesDiscount>R$ 0.00</ValuesDiscount>
                    </ProductAreaDiscount>

                </ProductValuesArea>
                <ProductButtomBuy>FINALIZAR COMPRA</ProductButtomBuy>
            </CartBody>
        </CartArea>

    )
}