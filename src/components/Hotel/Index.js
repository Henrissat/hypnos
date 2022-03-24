import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import "./hotel.css";
import Rooms from "./rooms";

export default function Hotel() {
    return(
        <Wrapper>
            <div >
                Chambres
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 75px;
`;