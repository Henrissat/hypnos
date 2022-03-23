import styled from "styled-components";

export default function Home() {
    return(
        <Wrapper>
            <Logo>
                <img style={{width:'90px' }} src="images/logo-charles-catin.png"/>
                <Logotitle>Hypnos</Logotitle>

                <Job>Hotel</Job>
            </Logo>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 88vh;
    maxWidth: 100%;
    background-image: url("images/pexels-olya-kobruseva-4560118.jpg"); no-repeat;
    background-position: top center;
    background-size: cover; 
`;

const Logo = styled.div`
    position: absolute;
    width:100%;
    font-family: londontwo;
    margin: 0 auto;
    margin-top: 0em;
    top: 25%;
`;

const Logotitle = styled.div`
    text-transform: uppercase;
    font-size: 80px;
    font-weight: bold;
`; 

const Job = styled.div`
    z-index: 5;
    position: relative;
    font: 3em "Roboto";
    font-weight: 300;
    font-style: italic;
`;