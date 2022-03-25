import styled from "styled-components";

export default function Footer() {
    return(
        <Wrapper>
            <Mention>Copyright 2021 - Hypnos - Made by CreatiC</Mention>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    position: relative;
    height: 80px;
    display: flex;
    width: 100%;
    justify-content : center;
    align-items: center;
    background-color: black;
    bottom: 0;
`;
const Legal = styled.div`

`;
const Mention = styled.div`
    color: #fff;
`;