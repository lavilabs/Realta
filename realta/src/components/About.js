import React from "react";
import styled from "styled-components";

function About() {
	return (
		<>
			<Wrapper>
				<Header>About Us</Header>
			</Wrapper>
		</>
	);
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

export default About;
