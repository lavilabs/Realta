import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<>
			<Wrapper>
				<Title>Realta || Logistics & Warehousing</Title>
				<Nav>
                    <A href="#">Home</A>
                    <A href="#">About</A>
                    <A href="#">Contact</A>
                    <A href="#">Products</A>
                </Nav>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
    display: flex;
    height: 15%;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
    align-items: center;
    font-family: 'Sora', sans-serif;
`;

const Title = styled.h1`
    color: #39683c;
`;

const Nav = styled.nav`
`;

const A = styled.a`
    text-decoration: none;
    color: #39683c;
    margin: 5px;
`;

export default Header;
