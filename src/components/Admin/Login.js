import styled from "styled-components";
import React, { useEffect } from 'react';


export default function Login() {
    useEffect(() => {
        window.location.href = "https://serveur-hypnos.herokuapp.com/login_admin";
    }, []);

    return(
        <Wrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 80px;
    width: 100%;
`;