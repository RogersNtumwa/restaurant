import React from "react";
import { data } from "./data";
import {
  ProductCard,
  ProductHeading,
  ProductImg,
  Productscontainer,
  Productwrapper,
  ProductInfo,
  ProductTitle,
  Productdesc,
  ProductPrice,
  Button,
} from "./MenuElements";

const Menu = ({ heading }) => {
  return (
    <Productscontainer id="menu">
      <ProductHeading>{heading}</ProductHeading>
      <Productwrapper>
        {data.map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.image} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <Productdesc>{product.desc}</Productdesc>
              <ProductPrice>AED{product.price}</ProductPrice>
              <Button>Order Now</Button>
            </ProductInfo>
          </ProductCard>
        ))}
      </Productwrapper>
    </Productscontainer>
  );
};

export default Menu;
