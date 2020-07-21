import React from "react";
import styled from "styled-components";
import logo from "../work.svg";

function Footer() {
	return (
		<>
			<Wrapper>
				<Logo src={logo} />
				<Tm>Realta 2020 &trade;</Tm>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	position: absolute;
	bottom: 5px;
	left: 45%;
`;

const Logo = styled.img`
	margin-right: 2px;
	height: 20px;
	margin-bottom: -4px;
`;

const Tm = styled.span``;

export default Footer;
