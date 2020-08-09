import React from "react";
import styled from "styled-components";

function Contact() {
	return (
		<>
			<Wrapper>
				<Header id="contact">Contact Us</Header>
				<Ul>
					<InfoName>Sheila Whalen</InfoName>
					<InfoEmail href={`mailto:swhaler@realtalw.com`}>
						swhaler@realtalw.com
					</InfoEmail>
					<InfoPhone>(514) 733-3223</InfoPhone>
					{/* Put onClick() for email and call, email box next to contact maybe? */}
				</Ul>
				<FormWrap>
					<Form>
						<label for="e-name">Name</label>
						<Input type="text" id="e-name" name="e-name" />
						<label for="subject">Subject</label>
						<Input type="text" id="e-subject" name="e-subject" />
						<label for="e-body">How can we help?</label>
						<textarea
							type="text"
							id="e-body"
							name="e-subject"
							cols="30"
							rows="8"
						></textarea>
						<input type="submit" value="Submit"></input>
					</Form>
				</FormWrap>
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

const InfoEmail = styled.a``;

const InfoName = styled.li`
	font-size: 25px;
	color: #39683c;
	list-style-type: none;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 50%;
	justify-content: center;
	margin-right: 20%;
	margin-left: 40px;
`;

const FormWrap = styled.div`
	margin-bottom: 50px;
`;

const Input = styled.input`
	width: 25%;
`;

const Ul = styled.ul``;

export default Contact;
