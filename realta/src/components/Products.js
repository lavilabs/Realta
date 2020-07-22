import React from "react";
import styled from "styled-components";
import products from "../data.js";


function Products() {
    // console.log(products)
    return(
        <>
        <Wrapper>
				<Header>Products</Header>
                <Product>
                    {/* Product: {products.products.name} */}
                </Product>
			</Wrapper>
        </>
    )
}

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
    font-size: 40px;
    margin-top: 15px;
`;

const Header = styled.div`
	margin-left: 40px;
`;

const Product = styled.span``; 

export default Products;