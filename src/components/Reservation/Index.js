import styled from "styled-components";
import "./reservation.css";


export default function Reservation() {

    return(
        <Wrapper>
            <HeaderBack />
            <h1>Reservation</h1>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 80px;
    width: 100%;
`;

const HeaderBack = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    maxWidth: 100%;
    height: 400px;
    background-image: url("images/pexels-photo-4473870.jpeg"); no-repeat;
    filter: brightness(70%);
    background-position: center;
    background-size: cover; 
`;