import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar'
import "./Header.css"

export default function Header() {
    const location = useLocation();
    return(
        <Wrapper>
            <NavBar />
            <div className="logo_header"><img className="logo_hypnos" src="images/logo-hypnos.png"/></div>
            {/*<Nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}>
                        HomePage
                    </MenuEl>
                </Link>
                <Link to="/hotel">
                    <MenuEl isCurrentPage={location.pathname === "/hotel"}>Hotel</MenuEl>
                </Link>
                <Link to="/reservation">
                    <MenuEl isCurrentPage={location.pathname === "/reservation"}>Reservation</MenuEl>
                </Link>
                <Link to="/Contact">
                    <MenuEl isCurrentPage={location.pathname === "/Contact"}>
                        Contact
                    </MenuEl>
                </Link>
            </Nav>*/}
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


const MenuEl= styled.p`
    color: #ff8e93; 
    font-size: 18px;
    margin: 15px 30px;
    height: 25px;
    padding: 5px 5px 0 5px;
    border-radius: 30px;
    cursor: pointer;
    text-decoration: none;
    will-change: transform;
    transition: .3s all ease-in-out;
    background-color: #fd787e
        ${(props) =>(props.isCurrentPage ? "" : "transparent")};
    color: #261953
        ${(props) =>(props.isCurrentPage ? "" : "#ff8e93")};
    &:before{
        transform: translate(-120%,-50%) translateZ(0);
    }
    &:hover{
        color: #261953;
        background-color:#fd787e;
    }

    @media screen and (max-width: 1024px) {  
    }

    @media screen and (max-width: 780px) {
        margin: 0 10px;
    }
`;