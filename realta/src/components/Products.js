import React from "react";
import styled from "styled-components";
import products from "../data.js";

function Products() {
	// console.log(products)
	return (
		<>
			<Header id="products">Products</Header>

			<Wrapper>
				<Product>
					{/* {products[products]} */}
					<ProductName>iCA500</ProductName>
					<ProductImg src="https://images-na.ssl-images-amazon.com/images/I/71P-47kJqZL._AC_SL1500_.jpg" />
					<ProductDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						sagittis neque vitae lectus feugiat, eu pharetra felis rutrum.
						Integer molestie urna eget auctor blandit. Curabitur varius dolor
						eros, in eleifend lacus vehicula nec. Praesent a mattis orci. Donec
						libero sem, consequat vel laoreet eu, faucibus vel augue. Nunc ac
						ipsum vitae lectus dictum facilisis in vitae nibh.
					</ProductDesc>
				</Product>
				<Product>
					<ProductName>iCA10x24</ProductName>
					<ProductImg src="https://images-na.ssl-images-amazon.com/images/I/71P-47kJqZL._AC_SL1500_.jpg" />
					<ProductDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						sagittis neque vitae lectus feugiat, eu pharetra felis rutrum.
						Integer molestie urna eget auctor blandit. Curabitur varius dolor
						eros, in eleifend lacus vehicula nec. Praesent a mattis orci. Donec
						libero sem, consequat vel laoreet eu, faucibus vel augue. Nunc ac
						ipsum vitae lectus dictum facilisis in vitae nibh.
					</ProductDesc>
				</Product>
				<Product>
					<ProductName>70% Wipes</ProductName>
					<ProductImg src="https://images-na.ssl-images-amazon.com/images/I/71P-47kJqZL._AC_SL1500_.jpg" />
					<ProductDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						sagittis neque vitae lectus feugiat, eu pharetra felis rutrum.
						Integer molestie urna eget auctor blandit. Curabitur varius dolor
						eros, in eleifend lacus vehicula nec. Praesent a mattis orci. Donec
						libero sem, consequat vel laoreet eu, faucibus vel augue. Nunc ac
						ipsum vitae lectus dictum facilisis in vitae nibh.
					</ProductDesc>
				</Product>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 40px;
	margin-top: 15px;
	display: flex;
	justify-content: space-evenly;
`;

const Header = styled.div`
	margin-left: 40px;
	font-family: "Sora", sans-serif;
	color: #39683c;
	font-size: 40px;
	margin-top: 15px;
`;

const Product = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 25px;
	margin-right: 25px;
`;

const ProductName = styled.span`
	font-size: 30px;
	text-decoration: underline;
	padding-bottom: 15px;
`;

const ProductDesc = styled.p`
	font-size: 15px;
	color: black;
	text-align: center;
`;

const ProductImg = styled.img`
	height: 215px;
	width: 175px;
`;

export default Products;
