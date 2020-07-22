import React from "react";
import styled from "styled-components";

function Contact() {
	return (
		<>
			<Wrapper>
				<Header>Contact Us</Header>
				<ul>
					<InfoName>Sheila Whalen</InfoName>
					<Info>swhaler@realtalw.com</Info>
					<Info>(514) 733-3223</Info>
                    {/* Put onClick() for email and call, email box next to contact maybe? */}
				</ul>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	font-family: "Sora", sans-serif;

	margin-top: 15px;
	margin-left: 40px;
`;

const Header = styled.div`
	/* margin-left: 40px; */
	color: #39683c;
	font-size: 40px;
`;

const Info = styled.li`
    list-style-type: none;
`;

const InfoName = styled.li`
    font-size: 25px;
    color: #39683c;
    list-style-type: none;
`;

export default Contact;
