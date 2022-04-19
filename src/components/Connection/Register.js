import styled from "styled-components";
import React, { useEffect } from 'react';


export default function Account() {
    useEffect(() => {
        window.location.href = "http://serveur-hypnos.herokuapp.com/account";
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