import React, { useState } from "react";
import { data } from "./data";
import { Row } from "react-bootstrap";

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
  // Button,
} from "./MenuElements";
import Search from "../Search";

const Menu = ({ heading }) => {
  const [keyword, setKeyword] = useState("");
  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <Productscontainer id="menu">
      <ProductHeading>{heading}</ProductHeading>
      <Row>
        <Search keyword={keyword} setKeyword={setKeyword} />
      </Row>
      <Productwrapper>
        {data.filter(searched(keyword)).map((product, index) => (
          <ProductCard key={index}>
            <ProductImg src={product.image} alt={product.alt} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <Productdesc>{product.desc}</Productdesc>
              <ProductPrice>AED{product.price}</ProductPrice>
              {/* <Button>Order Now</Button> */}
            </ProductInfo>
          </ProductCard>
        ))}
      </Productwrapper>
    </Productscontainer>
  );
};

export default Menu;
