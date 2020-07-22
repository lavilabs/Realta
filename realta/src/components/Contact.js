import React from "react";
import styled from "styled-components";

function Contact() {
    return(
        <>
        <Wrapper>
				<Header>Contact Us</Header>
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

export default Contact;