import styled from "styled-components";

export default function Home() {
    return(
        <Wrapper>
            <Texthome>Bonjour</Texthome>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 88vh;
    maxWidth: 100%;
    background-position: top center;
    background-size: cover; 
    background-color: black;
`;

const Texthome = styled.div`
    color: black;
`;
