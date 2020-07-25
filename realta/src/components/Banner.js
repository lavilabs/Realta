import React from "react";
import styled from "styled-components";

function Banner() {
    return (

        <Wrapper>
            <BannerImg src="https://images.unsplash.com/photo-1506269085878-5c33839927e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
            <Text> ↑ Placeholder IMG for 70% Wipes ↑ </Text>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

const Text = styled.p`
    margin-bottom: 0;

`;

const BannerImg = styled.img`
    height: 100px;
    width: 500px;
`;

export default Banner;