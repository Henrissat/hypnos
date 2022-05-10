import styled from "styled-components";
import NavBar from './NavBar'
import "./Header.css"

export default function Header() {
    //const location = useLocation();
    const urlHotel = "https://hypnos.netlify.app/";

    return(
        <Wrapper>
            <NavBar />
            <a className="logo_header" href="/"><img className="logo_hypnos" src={`${urlHotel}images/logo-hypnos.png`}/></a>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 80px;
    background: black;
    color: white;
    padding: 0px 34px 0 0;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    text-align: center;
    & a{
        text-decoration: none;
        color : inherit;
    }
    & a:first-child{
        margin-right: 16px;
    }
`;