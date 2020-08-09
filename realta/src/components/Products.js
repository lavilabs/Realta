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
					<ProductSubHead>500 Cleaning Wipes - 5" x 7"</ProductSubHead>	
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
					<ProductName>iCXL10</ProductName>
					<ProductSubHead>24 Boxes of 10 Cleaning Wipes - 9" x 12"</ProductSubHead>
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
				<Wrapper>
				<Product>
					<ProductName>iCXL701PA24 70%</ProductName>
					<ProductSubHead>8 Boxes of 24 Cleaning Wipes - 9" x 12"</ProductSubHead>

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
					<ProductName>iCXL701PA50 70%</ProductName>
					<ProductSubHead>15 Boxes of 50 Cleaning Wipes - 5" x 7"</ProductSubHead>

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
	width: 25%;
`;

const ProductName = styled.span`
	font-size: 30px;
	text-decoration: underline;
	padding-bottom: 5px;
`;

const ProductSubHead = styled.span`
	font-size: 18px;
	padding-bottom: 10px;
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
