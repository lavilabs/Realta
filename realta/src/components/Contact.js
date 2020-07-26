import React from "react";
import styled from "styled-components";

function Contact() {
	return (
		<>
			<Wrapper>
				<Header id="contact">Contact Us</Header>
				<ul>
					<InfoName>Sheila Whalen</InfoName>
					<InfoEmail href={`mailto:swhaler@realtalw.com`}>swhaler@realtalw.com</InfoEmail>
					<InfoPhone>(514) 733-3223</InfoPhone>
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

const InfoPhone = styled.li`
    list-style-type: none;
`;

const InfoEmail = styled.a`

`;

const InfoName = styled.li`
    font-size: 25px;
    color: #39683c;
    list-style-type: none;
`;

export default Contact;
