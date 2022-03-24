import styled from "styled-components";
import "./Home.css"
import listHotels from "./ListHotels";

export default function Home() {


    return(
        <Wrapper>
            <h1>Hotel de charme <br/>pour les amoureux</h1>
            <HeaderBg_home/>
            <div className="content_home">
                <h2>Nos hôtels</h2>
                <div>

                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
`;

const HeaderBg_home = styled.div`
    position: relative;
    z-index: -5;
    width: 100%;
    height: 80vh;
    background-image: url("images/chandelier-g6f5a69dd7_1920.jpg"); no-repeat;
    background-position: center center;
    background-size: cover;
    filter: brightness(40%);
`;
